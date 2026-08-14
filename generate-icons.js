/* Generador de icon-192.png / icon-512.png sin dependencias externas.
   Dibuja un corazón (colores bandera de Colombia) sobre fondo #0A0E1A
   usando un encoder PNG manual (zlib + CRC32 nativos de Node). */
const fs = require("fs");
const zlib = require("zlib");

const BG = [0x0A, 0x0E, 0x1A];
const YELLOW = [0xFC, 0xD1, 0x16];
const BLUE = [0x00, 0x30, 0x87];
const RED = [0xCE, 0x11, 0x26];

// ---- Curva implícita del corazón: (x²+y²-1)³ - x²y³ <= 0 (y-up) ----
function insideHeart(mx, my) {
  const a = mx * mx + my * my - 1;
  return (a * a * a) - (mx * mx * my * my * my) <= 0;
}

// 1) Encontrar el bounding box real de la curva (muestreo denso)
function findBBox() {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const STEP = 0.004;
  for (let mx = -1.4; mx <= 1.4; mx += STEP) {
    for (let my = -1.4; my <= 1.4; my += STEP) {
      if (insideHeart(mx, my)) {
        if (mx < minX) minX = mx;
        if (mx > maxX) maxX = mx;
        if (my < minY) minY = my;
        if (my > maxY) maxY = my;
      }
    }
  }
  return { minX, maxX, minY, maxY };
}

const bbox = findBBox();
const bboxW = bbox.maxX - bbox.minX;
const bboxH = bbox.maxY - bbox.minY;
const bboxCenterX = (bbox.minX + bbox.maxX) / 2;
const bboxCenterY = (bbox.minY + bbox.maxY) / 2;

function renderIcon(size) {
  const SS = 4; // supersampling por eje -> SSxSS submuestras por pixel
  const scale = (size * 0.80) / Math.max(bboxW, bboxH); // px por unidad matemática
  const cx = size / 2, cy = size / 2;

  // bbox del corazón en espacio de pixeles (para las franjas horizontales)
  const topPx = cy - (bbox.maxY - bboxCenterY) * scale;
  const bottomPx = cy - (bbox.minY - bboxCenterY) * scale;
  const heightPx = bottomPx - topPx;

  const raw = Buffer.alloc(size * (1 + size * 3)); // filtro(1) + RGB por fila
  let offset = 0;

  for (let py = 0; py < size; py++) {
    raw[offset++] = 0; // filter type 0 (none)
    for (let px = 0; px < size; px++) {
      let rSum = 0, gSum = 0, bSum = 0;
      for (let sj = 0; sj < SS; sj++) {
        const spy = py + (sj + 0.5) / SS;
        const dyPx = spy - cy;
        const my = bboxCenterY - dyPx / scale;
        for (let si = 0; si < SS; si++) {
          const spx = px + (si + 0.5) / SS;
          const dxPx = spx - cx;
          const mx = bboxCenterX + dxPx / scale;

          let col;
          if (insideHeart(mx, my)) {
            let frac = (spy - topPx) / heightPx;
            if (frac < 0) frac = 0; else if (frac > 1) frac = 1;
            col = frac < 0.5 ? YELLOW : (frac < 0.75 ? BLUE : RED);
          } else {
            col = BG;
          }
          rSum += col[0]; gSum += col[1]; bSum += col[2];
        }
      }
      const n = SS * SS;
      raw[offset++] = Math.round(rSum / n);
      raw[offset++] = Math.round(gSum / n);
      raw[offset++] = Math.round(bSum / n);
    }
  }

  return encodePNG(size, size, raw);
}

// ---- Encoder PNG mínimo (IHDR/IDAT/IEND) ----
const CRC_TABLE = (() => {
  const table = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = CRC_TABLE[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function encodePNG(width, height, rawScanlines) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 2;  // color type: truecolor RGB
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const idatData = zlib.deflateSync(rawScanlines, { level: 9 });

  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", idatData),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

const png192 = renderIcon(192);
fs.writeFileSync("icon-192.png", png192);
console.log("icon-192.png ->", png192.length, "bytes");

const png512 = renderIcon(512);
fs.writeFileSync("icon-512.png", png512);
console.log("icon-512.png ->", png512.length, "bytes");
