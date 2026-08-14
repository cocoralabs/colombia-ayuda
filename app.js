/* ==========================================================================
   Colombia Ayuda — v3
   SPA pura en JS. Sin dependencias externas.
   ========================================================================== */

/* ==========================================================================
   1. I18N
   ========================================================================== */
const I18N = {
  es: {
    "splash.badge": "TERREMOTO 7.4 — SAN JOSÉ DEL PALMAR, COLOMBIA 2026",
    "splash.tagline": "UNIDOS SALVAMOS VIDAS",
    "splash.counter1": "personas ayudadas",
    "splash.counter2": "organizaciones activas",
    "splash.btnColombia": "Estoy en Colombia",
    "splash.btnAbroad": "I'm abroad",
    "splash.footer": "Plataforma segura y verificada",

    "home.location": "San José del Palmar, Chocó",
    "home.needHelp": "Organizaciones que necesitan ayuda",
    "home.updated": "Actualizado",
    "home.minAgo": "min",
    "home.updatedNow": "Actualizado ahora",

    "urgency.critica": "CRÍTICO",
    "urgency.alta": "ALTO",
    "urgency.media": "MEDIO",

    "filters.todos": "Todos",
    "filters.alimentos": "Alimentos",
    "filters.agua": "Agua",
    "filters.medicinas": "Medicinas",
    "filters.sangre": "Sangre",
    "filters.dinero": "Dinero",
    "filters.tiempo": "Tiempo",
    "filters.wifi": "WiFi",
    "filters.mascotas": "Mascotas",
    "filters.ropa": "Ropa",
    "filters.cobijas": "Cobijas",
    "filters.colchonetas": "Colchonetas",
    "filters.higiene": "Higiene",
    "filters.guantes": "Guantes",
    "filters.cascos": "Cascos",
    "filters.herramientas": "Herramientas",
    "filters.voluntarios": "Voluntarios",

    "card.verified": "Verificada",
    "card.minAgo": "Hace {n} min",
    "card.hAgo": "Hace {n} h",
    "card.distance": "{n} km",
    "card.online": "En línea",

    "nav.home": "Inicio",
    "nav.map": "Mapa",
    "nav.donate": "Dona diferente",
    "nav.donations": "Donaciones",
    "nav.profile": "Perfil",

    "detail.needs": "Qué necesitan:",
    "detail.distance": "Distancia",
    "detail.verified": "Verificada",
    "detail.updated": "Hace {n} min",
    "detail.donateNow": "Donar ahora",
    "detail.moreInfo": "Ver más información",
    "detail.paymentInfo": "Información de pago",
    "detail.officialAccounts": "Cuentas oficiales",
    "detail.international": "Donación internacional",
    "detail.points": "Puntos de entrega",
    "detail.instagram": "Instagram",
    "detail.missingLine": "Línea de personas desaparecidas",
    "detail.bank": "Banco",
    "detail.account": "Cuenta",
    "detail.nit": "NIT",
    "detail.breb": "Bre-B",
    "detail.swift": "SWIFT",
    "detail.aba": "ABA",
    "detail.other": "Otro",
    "detail.website": "Sitio web",
    "detail.hours": "Horario",
    "detail.specialBadge": "RED OFICIAL PRIMERA DAMA",

    "toast.notifications": "3 notificaciones nuevas de tu zona",
    "toast.noInfo": "No hay más información disponible por ahora",
    "toast.updated": "Información actualizada",
    "toast.copied": "Copiado al portapapeles",
    "toast.shared": "Enlace de la organización listo para compartir",

    "alerts.title": "Alertas",
    "alerts.markAllRead": "Marcar todas como leídas",
    "alerts.empty": "No hay alertas por ahora.",

    "filters.cityLabel": "📍 Filtrar por ciudad:",
    "city.todas": "Todas las ciudades",
    "city.choco": "Chocó",
    "city.pereira": "Pereira",
    "city.cali": "Cali",
    "city.bogota": "Bogotá",
    "city.manizales": "Manizales",
    "city.medellin": "Medellín",
    "city.armenia": "Armenia",
    "city.barranquilla": "Barranquilla",
    "city.otras": "Otras",
    "common.emptyFilterCombo": "No encontramos organizaciones con ese filtro. Prueba con otra combinación.",

    "donate.title": "Dona diferente",
    "donate.time.title": "Dona tu TIEMPO",
    "donate.time.desc": "Inscríbete como voluntario/a y ayuda en terreno con distribución de ayuda, logística y acompañamiento a las comunidades afectadas.",
    "donate.time.linkCruzRoja": "Inscripción voluntariado — Cruz Roja Colombiana",
    "donate.time.linkBanco": "Inscripción voluntariado — Banco de Alimentos de Bogotá",

    "donate.wifi.title": "Dona WIFI",
    "donate.wifi.desc": "Comparte tu conexión con personas que perdieron cobertura. Activa tu zona WiFi personal cerca de un punto de ayuda o albergue.",
    "donate.wifi.claro": "Abre Mi Claro → Datos → Activa \"Compartir datos\" o crea un hotspot personal llamado \"AyudaColombia\" sin contraseña.",
    "donate.wifi.tigo": "Activa el punto de acceso personal desde Ajustes → Conexiones → Zona WiFi. Compártelo abiertamente cerca de albergues.",
    "donate.wifi.movistar": "Activa \"Compartir Internet\" desde la app Mi Movistar y deja el hotspot disponible sin clave en zonas de acopio.",

    "donate.blood.title": "Dona SANGRE",
    "donate.blood.desc": "Selecciona tu ciudad para ver los bancos de sangre habilitados y sus direcciones.",

    "donate.pets.title": "Dona para MASCOTAS",
    "donate.pets.desc": "Miles de mascotas quedaron sin hogar. Estos son los insumos más urgentes para atenderlas.",
    "donate.pets.note": "Entrega estos insumos en los puntos de acopio de Cruz Roja o en las Alcaldías habilitadas.",
    "pets.clorhexidina": "Clorhexidina",
    "pets.cobijas": "Cobijas",
    "pets.camas": "Camas",
    "pets.arneses": "Arneses",
    "pets.cachorros": "Comida cachorros",
    "pets.adultos": "Comida adultos",
    "pets.medicamentos": "Medicamentos veterinarios",

    "donate.footer": "Juntos podemos salvar más vidas.",
    "footer.madeBy": "Hecho con ❤️ por",

    "common.comingSoon": "Próximamente",
    "common.close": "Cerrar",
    "common.emptyFilter": "No hay organizaciones con este filtro por ahora.",

    "cat.emergencias": "Emergencias",
    "cat.alimentos": "Seguridad alimentaria",
    "cat.gobierno": "Gobierno local",
    "cat.infancia": "Protección infantil",
    "cat.alimentacion": "Alimentación",
    "cat.salud": "Salud",
    "cat.recuperacion": "Recuperación",
    "cat.rescate": "Rescate y voluntariado",
    "cat.comunitaria": "Red comunitaria",

    "map.all": "Todas",
    "map.title": "Puntos de acopio",
    "map.subtitle": "Organizados por ciudad · incluye Cruz Roja, Alcaldías, ABACO y la Red Tigresas",
    "map.call": "Llamar",
    "map.viewMap": "Ver mapa",
    "map.accepts": "Acepta",
    "map.points": "puntos",
    "map.point": "punto",

    "donations.subtitle": "Todas las formas de donar dinero de manera verificada.",
    "donations.sec1.title": "Transferencias nacionales",
    "donations.sec1.sub": "Cuentas bancarias verificadas en Colombia.",
    "donations.sec2.title": "Red Tigresas oficial",
    "donations.sec2.sub": "Cuentas articuladas con la Red Primera Dama de la Nación.",
    "donations.sec3.title": "Donación internacional (SWIFT)",
    "donations.sec3.sub": "Para transferencias desde el exterior.",
    "donations.sec4.title": "Donar en línea (internacional)",
    "donations.sec4.sub": "Tarjetas internacionales, PayPal y donaciones recurrentes.",
    "donations.copy": "📋 Copiar número",
    "donations.openSite": "Abrir sitio",

    "profile.about.title": "Sobre esta app",
    "profile.about.text": "Colombia Ayuda es una plataforma voluntaria e independiente creada para centralizar información verificada de ayuda humanitaria durante la emergencia, conectando a las personas con organizaciones y puntos de donación reales.",
    "profile.version": "Versión 3.0 · Agosto 2026",
    "profile.verify.title": "Verificación",
    "profile.verify.official": "Esta es la única versión oficial de Colombia Ayuda.",
    "profile.verify.urlLabel": "URL oficial:",
    "profile.verify.accounts": "Todas las cuentas bancarias han sido verificadas con fuentes oficiales.",
    "profile.verify.report": "Si ves una versión diferente de esta app, repórtala a info@cocoralabs.com.",
    "profile.verify.badge": "Información verificada · Agosto 2026",
    "profile.legal": "⚠️ Aviso legal: Colombia Ayuda es una plataforma informativa independiente. No recibimos ni gestionamos donaciones directamente. Toda la información de cuentas bancarias proviene de fuentes oficiales verificadas. Cocora-Labs no se hace responsable del uso que terceros hagan de esta información. Para reportar información incorrecta: info@cocoralabs.com",
    "profile.sources.title": "Fuentes verificadas",
    "profile.sources.cruzroja": "Cruz Roja Colombiana",
    "profile.sources.alcaldias": "Alcaldías municipales",
    "profile.sources.tigresas": "Red Tigresas — Primera Dama de la Nación",
    "profile.share": "Compartir la app",
    "profile.report": "Reportar información incorrecta",
    "profile.reportSubject": "Reporte de información incorrecta — Colombia Ayuda",
    "profile.reportBody": "Hola, quiero reportar un dato incorrecto en la app Colombia Ayuda:%0D%0A%0D%0A[Describe aquí el dato y dónde lo viste]",
    "profile.shareText": "Colombia Ayuda — organizaciones y puntos de ayuda verificados para la emergencia del terremoto 7.4."
  },
  en: {
    "splash.badge": "7.4 EARTHQUAKE — SAN JOSÉ DEL PALMAR, COLOMBIA 2026",
    "splash.tagline": "UNITED WE SAVE LIVES",
    "splash.counter1": "people helped",
    "splash.counter2": "active organizations",
    "splash.btnColombia": "I'm in Colombia",
    "splash.btnAbroad": "I'm abroad",
    "splash.footer": "Secure & verified platform",

    "home.location": "San José del Palmar, Chocó",
    "home.needHelp": "Organizations that need help",
    "home.updated": "Updated",
    "home.minAgo": "min",
    "home.updatedNow": "Updated just now",

    "urgency.critica": "CRITICAL",
    "urgency.alta": "HIGH",
    "urgency.media": "MEDIUM",

    "filters.todos": "All",
    "filters.alimentos": "Food",
    "filters.agua": "Water",
    "filters.medicinas": "Medicine",
    "filters.sangre": "Blood",
    "filters.dinero": "Money",
    "filters.tiempo": "Time",
    "filters.wifi": "WiFi",
    "filters.mascotas": "Pets",
    "filters.ropa": "Clothing",
    "filters.cobijas": "Blankets",
    "filters.colchonetas": "Mattresses",
    "filters.higiene": "Hygiene",
    "filters.guantes": "Gloves",
    "filters.cascos": "Helmets",
    "filters.herramientas": "Tools",
    "filters.voluntarios": "Volunteers",

    "card.verified": "Verified",
    "card.minAgo": "{n} min ago",
    "card.hAgo": "{n} h ago",
    "card.distance": "{n} km",
    "card.online": "Online",

    "nav.home": "Home",
    "nav.map": "Map",
    "nav.donate": "Donate differently",
    "nav.donations": "Donations",
    "nav.profile": "Profile",

    "detail.needs": "What they need:",
    "detail.distance": "Distance",
    "detail.verified": "Verified",
    "detail.updated": "{n} min ago",
    "detail.donateNow": "Donate now",
    "detail.moreInfo": "See more information",
    "detail.paymentInfo": "Payment information",
    "detail.officialAccounts": "Official accounts",
    "detail.international": "International donation",
    "detail.points": "Drop-off points",
    "detail.instagram": "Instagram",
    "detail.missingLine": "Missing persons hotline",
    "detail.bank": "Bank",
    "detail.account": "Account",
    "detail.nit": "Tax ID (NIT)",
    "detail.breb": "Bre-B",
    "detail.swift": "SWIFT",
    "detail.aba": "ABA",
    "detail.other": "Other",
    "detail.website": "Website",
    "detail.hours": "Hours",
    "detail.specialBadge": "FIRST LADY OFFICIAL NETWORK",

    "toast.notifications": "3 new notifications from your area",
    "toast.noInfo": "No further information available right now",
    "toast.updated": "Information updated",
    "toast.copied": "Copied to clipboard",
    "toast.shared": "Organization link ready to share",

    "alerts.title": "Alerts",
    "alerts.markAllRead": "Mark all as read",
    "alerts.empty": "No alerts right now.",

    "filters.cityLabel": "📍 Filter by city:",
    "city.todas": "All cities",
    "city.choco": "Chocó",
    "city.pereira": "Pereira",
    "city.cali": "Cali",
    "city.bogota": "Bogotá",
    "city.manizales": "Manizales",
    "city.medellin": "Medellín",
    "city.armenia": "Armenia",
    "city.barranquilla": "Barranquilla",
    "city.otras": "Other",
    "common.emptyFilterCombo": "We couldn't find organizations for that filter. Try a different combination.",

    "donate.title": "Donate differently",
    "donate.time.title": "Donate your TIME",
    "donate.time.desc": "Sign up as a volunteer and help on the ground with aid distribution, logistics and support for affected communities.",
    "donate.time.linkCruzRoja": "Volunteer sign-up — Colombian Red Cross",
    "donate.time.linkBanco": "Volunteer sign-up — Bogotá Food Bank",

    "donate.wifi.title": "Donate WIFI",
    "donate.wifi.desc": "Share your connection with people who lost coverage. Turn on your personal hotspot near a relief point or shelter.",
    "donate.wifi.claro": "Open Mi Claro → Data → Turn on \"Data sharing\" or create a personal hotspot named \"AyudaColombia\" with no password.",
    "donate.wifi.tigo": "Enable the personal hotspot from Settings → Connections → WiFi Zone. Share it openly near shelters.",
    "donate.wifi.movistar": "Turn on \"Share Internet\" from the Mi Movistar app and leave the hotspot open, password-free, near collection points.",

    "donate.blood.title": "Donate BLOOD",
    "donate.blood.desc": "Pick your city to see the blood banks that are open and their addresses.",

    "donate.pets.title": "Donate for PETS",
    "donate.pets.desc": "Thousands of pets were left without a home. These are the most urgently needed supplies.",
    "donate.pets.note": "Drop off these supplies at Red Cross collection points or enabled City Halls.",
    "pets.clorhexidina": "Chlorhexidine",
    "pets.cobijas": "Blankets",
    "pets.camas": "Beds",
    "pets.arneses": "Harnesses",
    "pets.cachorros": "Puppy food",
    "pets.adultos": "Adult food",
    "pets.medicamentos": "Veterinary medication",

    "donate.footer": "Together we can save more lives.",
    "footer.madeBy": "Made with ❤️ by",

    "common.comingSoon": "Coming soon",
    "common.close": "Close",
    "common.emptyFilter": "No organizations match this filter right now.",

    "cat.emergencias": "Emergency Response",
    "cat.alimentos": "Food Security",
    "cat.gobierno": "Local Government",
    "cat.infancia": "Child Protection",
    "cat.alimentacion": "Food Aid",
    "cat.salud": "Health",
    "cat.recuperacion": "Recovery",
    "cat.rescate": "Rescue & Volunteers",
    "cat.comunitaria": "Community Network",

    "map.all": "All",
    "map.title": "Collection points",
    "map.subtitle": "Organized by city · includes the Red Cross, City Halls, ABACO and the Tigresas Network",
    "map.call": "Call",
    "map.viewMap": "View map",
    "map.accepts": "Accepts",
    "map.points": "points",
    "map.point": "point",

    "donations.subtitle": "Every verified way to donate money.",
    "donations.sec1.title": "National bank transfers",
    "donations.sec1.sub": "Verified bank accounts in Colombia.",
    "donations.sec2.title": "Official Tigresas Network",
    "donations.sec2.sub": "Accounts coordinated with the First Lady's national network.",
    "donations.sec3.title": "International donation (SWIFT)",
    "donations.sec3.sub": "For wire transfers from abroad.",
    "donations.sec4.title": "Donate online (international)",
    "donations.sec4.sub": "International cards, PayPal and recurring donations.",
    "donations.copy": "📋 Copy number",
    "donations.openSite": "Open site",

    "profile.about.title": "About this app",
    "profile.about.text": "Colombia Ayuda is a volunteer-run, independent platform built to centralize verified humanitarian aid information during the emergency, connecting people with real organizations and donation points.",
    "profile.version": "Version 3.0 · August 2026",
    "profile.verify.title": "Verification",
    "profile.verify.official": "This is the only official version of Colombia Ayuda.",
    "profile.verify.urlLabel": "Official URL:",
    "profile.verify.accounts": "All bank accounts have been verified against official sources.",
    "profile.verify.report": "If you see a different version of this app, report it to info@cocoralabs.com.",
    "profile.verify.badge": "Verified information · August 2026",
    "profile.legal": "⚠️ Legal notice: Colombia Ayuda is an independent informational platform. We do not receive or manage donations directly. All bank account information comes from verified official sources. Cocora-Labs is not responsible for how third parties use this information. To report incorrect information: info@cocoralabs.com",
    "profile.sources.title": "Verified sources",
    "profile.sources.cruzroja": "Colombian Red Cross",
    "profile.sources.alcaldias": "Municipal City Halls",
    "profile.sources.tigresas": "Tigresas Network — First Lady of the Nation",
    "profile.share": "Share the app",
    "profile.report": "Report incorrect information",
    "profile.reportSubject": "Incorrect information report — Colombia Ayuda",
    "profile.reportBody": "Hi, I want to report incorrect information in the Colombia Ayuda app:%0D%0A%0D%0A[Describe the data and where you saw it]",
    "profile.shareText": "Colombia Ayuda — verified organizations and relief points for the 7.4 earthquake emergency."
  }
};

function t(key, vars) {
  const dict = I18N[state.lang] || I18N.es;
  let str = dict[key] !== undefined ? dict[key] : (I18N.es[key] !== undefined ? I18N.es[key] : key);
  if (vars) {
    Object.keys(vars).forEach(k => { str = str.replace("{" + k + "}", vars[k]); });
  }
  return str;
}

/* ==========================================================================
   2. DATA — organizaciones (hardcodeado)
   ========================================================================== */
const ORGS = [
  {
    id: "cruz-roja-colombiana",
    urgency: "critica",
    flow: "both",
    name: "Cruz Roja Colombiana",
    categoryKey: "emergencias",
    logoInitials: "CR",
    logoColor: "#c0392b",
    logoBg: "#3a1a1a",
    description: {
      es: "Organización humanitaria líder en la respuesta a la emergencia. Campaña #TodosPorColombia. Activa en rescate, atención médica, distribución de víveres y reunificación familiar.",
      en: "Leading humanitarian organization responding to the emergency. Campaign #TodosPorColombia. Active in rescue, medical care, food distribution and family reunification."
    },
    needs: ["alimentos", "agua", "medicinas", "ropa", "cobijas", "colchonetas", "higiene", "sangre", "tiempo"],
    distanceKm: 2.4,
    updatedMinAgo: 3,
    website: "https://donar.cruzrojabogota.org.co/",
    donateUrl: "https://ayuda.cruzrojacolombiana.org/",
    volunteerUrl: "https://www.cruzrojacolombiana.org/voluntariado/",
    payment: [
      { label: { es: "Banco", en: "Bank" }, value: "Davivienda" },
      { label: { es: "Cuenta corriente", en: "Checking account" }, value: "0560455069996490" },
      { label: { es: "NIT", en: "Tax ID (NIT)" }, value: "899999025-3" },
      { label: { es: "Daviplata", en: "Daviplata" }, value: { es: "Pagos y servicios → Otros servicios → Cruz Roja Colombiana", en: "Payments & services → Other services → Colombian Red Cross" } },
      { label: { es: "En línea", en: "Online" }, value: { es: "Tarjetas internacionales Visa, Mastercard, Amex", en: "International Visa, Mastercard, Amex cards" } }
    ],
    points: [
      { city: "Bogotá", name: "Sede administrativa Cruz Roja", address: "Carrera 24 #73-38, Palermo", hours: "24 horas", accepts: ["alimentos", "agua", "ropa", "medicinas", "cobijas", "colchonetas"] },
      { city: "Bogotá", name: "Bodega Cruz Roja", address: "Diagonal 79B #62-53, Normandía", hours: "8:00 am – 9:00 pm", accepts: ["alimentos", "agua", "ropa", "cobijas"] },
      { city: "Bogotá", name: "SAMU Sur", address: "Av. Carrera 68 #31-41 sur, Kennedy", hours: "8:00 am – 9:00 pm", accepts: ["alimentos", "agua", "medicinas"] },
      { city: "Bogotá", name: "SAMU Norte", address: "Calle 134 – Cra 7B Bis #132-31, Usaquén", hours: "8:00 am – 9:00 pm", accepts: ["alimentos", "agua", "medicinas"] },
      { city: "Bogotá", name: "Centro de Salvamento Acuático", address: "Av. La Esmeralda #63-81, Engativá", hours: "8:00 am – 9:00 pm", accepts: ["alimentos", "agua", "cobijas"] },
      { city: "Bogotá", name: "Palacio de los Deportes", address: "Calle 63 #59A-06, Palermo", hours: "8:00 am – 9:00 pm", accepts: ["alimentos", "ropa", "cobijas", "higiene"] },
      { city: "Bogotá", name: "Universidad Jorge Tadeo Lozano", address: "Carrera 4 #22-61, Santa Fe", hours: "8:00 am – 9:00 pm", accepts: ["alimentos", "ropa", "higiene"] },
      { city: "Bogotá", name: "Unicentro", address: "Carrera 15 #124-30, Usaquén", hours: "8:00 am – 9:00 pm", accepts: ["alimentos", "ropa", "cobijas", "higiene"] },
      { city: "Bogotá", name: "Punto Usaquén", address: "Calle 161A #7F-55, Usaquén", hours: "8:00 am – 9:00 pm", accepts: ["alimentos", "ropa"] },
      { city: "Medellín", name: "Sede Medellín Cruz Roja", address: "Carrera 52 #25-310, Guayabal", hours: "8:00 am – 6:00 pm", accepts: ["alimentos", "agua", "medicinas", "ropa"] },
      { city: "Cartagena", name: "Sede Cartagena Cruz Roja", address: "Calle 30 #44D-71, Manga", hours: "8:00 am – 6:00 pm", accepts: ["alimentos", "agua"] },
      { city: "Manizales", name: "Cancha Auxiliar Palogrande — Cruz Roja", address: "Junto a la estación de Bomberos, Palogrande", hours: "8:00 am – 6:00 pm", accepts: ["alimentos", "ropa", "cobijas", "sangre"] },
      { city: "Armenia", name: "Sede Armenia Cruz Roja", address: "Av. Bolívar #23norte-60, Centro", hours: "8:00 am – 6:00 pm", accepts: ["alimentos", "agua", "medicinas"] },
      { city: "Cali", name: "Banco de Sangre Imbanaco", address: "Carrera 38 Bis #5B2-04, Santa Isabel", hours: "7:00 am – 6:00 pm", accepts: ["sangre"] },
      { city: "Villavicencio", name: "Sede Villavicencio Cruz Roja", address: "Carrera 30 #39-30, Centro", hours: "8:00 am – 5:00 pm", accepts: ["alimentos", "ropa"] }
    ]
  },
  {
    id: "abaco",
    urgency: "alta",
    flow: "both",
    name: "ABACO",
    categoryKey: "alimentos",
    logoInitials: "AB",
    logoColor: "#d68910",
    logoBg: "#3a2a10",
    description: {
      es: "Asociación de Bancos de Alimentos de Colombia. Coordina el corredor humanitario de alimentos hacia las zonas afectadas. Activa en Armenia, Cali, Manizales, Medellín e Ibagué.",
      en: "Association of Colombian Food Banks. Coordinates the humanitarian food corridor to affected areas. Active in Armenia, Cali, Manizales, Medellín and Ibagué."
    },
    needs: ["alimentos", "agua", "dinero"],
    distanceKm: 5.1,
    updatedMinAgo: 8,
    website: "https://www.abaco.org.co",
    donateUrl: "https://www.abaco.org.co",
    payment: [
      { label: { es: "Banco", en: "Bank" }, value: "Bancolombia" },
      { label: { es: "Cuenta ahorros", en: "Savings account" }, value: "04867105340" },
      { label: { es: "NIT", en: "Tax ID (NIT)" }, value: "900326456-1" },
      { label: { es: "Bre-B", en: "Bre-B" }, value: "0090989753" },
      { label: { es: "WhatsApp", en: "WhatsApp" }, value: "313 245 7978" }
    ],
    points: [
      { city: "Armenia", name: "Banco de Alimentos Monseñor Roberto López Londoño", address: { es: "Armenia, Quindío — verificar dirección exacta en sitio oficial", en: "Armenia, Quindío — check exact address on official site" }, hours: "8:00 am – 5:00 pm", accepts: ["alimentos", "agua"] },
      { city: "Cali", name: "Fundación Arquidiocesana Banco de Alimentos", address: { es: "Cali, Valle del Cauca — verificar dirección exacta en sitio oficial", en: "Cali, Valle del Cauca — check exact address on official site" }, hours: "8:00 am – 5:00 pm", accepts: ["alimentos"] },
      { city: "Manizales", name: "Banco de Alimentos de Manizales", address: { es: "Manizales, Caldas — verificar dirección exacta en sitio oficial", en: "Manizales, Caldas — check exact address on official site" }, hours: "8:00 am – 5:00 pm", accepts: ["alimentos"] },
      { city: "Medellín", name: "Fundación Banco Arquidiocesano (FUBAM)", address: "Carrera 52 #30A-97, Guayabal", hours: "8:00 am – 5:00 pm", accepts: ["alimentos"] },
      { city: "Medellín", name: "Fundación Saciar", address: "Carrera 50 #25-261, Centro", hours: "8:00 am – 5:00 pm", accepts: ["alimentos"] },
      { city: "Ibagué", name: "Banco Arquidiocesano de Alimentos de Ibagué", address: { es: "Ibagué, Tolima — verificar dirección exacta en sitio oficial", en: "Ibagué, Tolima — check exact address on official site" }, hours: "8:00 am – 5:00 pm", accepts: ["alimentos"] }
    ]
  },
  {
    id: "banco-alimentos-bogota",
    urgency: "alta",
    flow: "both",
    name: "Banco de Alimentos de Bogotá",
    categoryKey: "alimentos",
    logoInitials: "BA",
    logoColor: "#1e8449",
    logoBg: "#123322",
    description: {
      es: "Activó campaña de emergencia. Acepta donaciones internacionales vía web. Rappi habilitó un botón de donación integrado con este banco de alimentos.",
      en: "Activated emergency campaign. Accepts international donations via web. Rappi enabled a donation button linked to this food bank."
    },
    needs: ["alimentos", "dinero", "tiempo"],
    distanceKm: null,
    updatedMinAgo: 12,
    website: "https://www.bancodealimentosbogota.org",
    donateUrl: "https://www.bancodealimentosbogota.org",
    payment: [
      { label: { es: "Bre-B", en: "Bre-B" }, value: "0091677852" },
      { label: { es: "Rappi", en: "Rappi" }, value: { es: "Botón de donación en la app, montos entre $20.000 y $120.000 COP", en: "Donation button in-app, amounts from COP 20,000 to 120,000" } },
      { label: { es: "En línea", en: "Online" }, value: { es: "Acepta tarjetas y donaciones internacionales", en: "Accepts international cards and donations" } }
    ]
  },
  {
    id: "alcaldia-cali",
    urgency: "critica",
    flow: "colombia",
    name: { es: "Alcaldía Cali — Plazoleta Jairo Varela", en: "Cali City Hall — Jairo Varela Plaza" },
    categoryKey: "gobierno",
    logoInitials: "CA",
    logoColor: "#993556",
    logoBg: "#331621",
    description: {
      es: "Cali es una de las ciudades más afectadas. La Alcaldía habilitó la Plazoleta Jairo Varela como punto central de acopio para rescatistas y familias.",
      en: "Cali is one of the hardest-hit cities. The City Hall enabled Plazoleta Jairo Varela as the main collection point for rescuers and families."
    },
    needs: ["agua", "guantes", "cascos", "colchonetas", "herramientas", "alimentos", "mascotas"],
    distanceKm: 1.2,
    updatedMinAgo: 2,
    payment: [
      { label: { es: "Modalidad", en: "Method" }, value: { es: "Solo donación en especie en el punto físico", en: "In-kind donations only, at the physical point" } }
    ],
    points: [
      { city: "Cali", name: "Plazoleta Jairo Varela", address: "Centro, Cali", hours: "8:00 am – 8:00 pm" }
    ]
  },
  {
    id: "alcaldia-pereira",
    urgency: "critica",
    flow: "colombia",
    name: { es: "Alcaldía Pereira — 7 puntos", en: "Pereira City Hall — 7 points" },
    categoryKey: "gobierno",
    logoInitials: "PE",
    logoColor: "#854F0B",
    logoBg: "#332608",
    description: {
      es: "Pereira es la ciudad con más víctimas mortales. 7 puntos de acopio distribuidos en barrios y comunas.",
      en: "Pereira has the highest death toll. 7 collection points distributed across neighborhoods."
    },
    needs: ["alimentos", "agua", "ropa", "cobijas", "medicinas"],
    distanceKm: 0.8,
    updatedMinAgo: 4,
    missingPersonsLine: "+57 316 478 1821",
    payment: [
      { label: { es: "Modalidad", en: "Method" }, value: { es: "7 puntos de acopio en especie distribuidos en la ciudad", en: "7 in-kind collection points across the city" } }
    ],
    points: [
      { city: "Pereira", name: "Café Consota", address: "Manzanas 7 y 8, Villa Consota, Cuba", hours: "8:00 am – 6:00 pm" },
      { city: "Pereira", name: "Café Perla del Otún", address: "Diagonal iglesia 2.500 Lotes, Cuba", hours: "8:00 am – 6:00 pm" },
      { city: "Pereira", name: "Café El Remanso", address: "Av. principal El Remanso, junto al Centro de Salud", hours: "8:00 am – 6:00 pm" },
      { city: "Pereira", name: "Café Kennedy", address: "Parque principal, barrio Kennedy", hours: "8:00 am – 6:00 pm" },
      { city: "Pereira", name: "Café Ormaza", address: "Calle 3 Bis 5-38, Av. del Río", hours: "8:00 am – 6:00 pm" },
      { city: "Pereira", name: "Café San Nicolás", address: "Carrera 14 Bis #28-38", hours: "8:00 am – 6:00 pm" },
      { city: "Pereira", name: "Café Comuna del Café", address: "Cra 3 con Cl 59A, Parque Industrial", hours: "8:00 am – 6:00 pm" }
    ]
  },
  {
    id: "alcaldia-manizales",
    urgency: "alta",
    flow: "colombia",
    name: { es: "Alcaldía Manizales — albergues + Hemocentro", en: "Manizales City Hall — shelters + Blood Center" },
    categoryKey: "gobierno",
    logoInitials: "MZ",
    logoColor: "#0F6E56",
    logoBg: "#0c2b23",
    description: {
      es: "Manizales habilitó tres albergues temporales y el Hemocentro del Café para donación de sangre. Prioridad: sangre tipo O+ y O-.",
      en: "Manizales opened three temporary shelters and the Hemocentro del Café for blood donation. Priority: blood type O+ and O-."
    },
    needs: ["alimentos", "cobijas", "colchonetas", "sangre"],
    distanceKm: 3.6,
    updatedMinAgo: 15,
    payment: [
      { label: { es: "Modalidad", en: "Method" }, value: { es: "Donación en especie en albergues y Hemocentro", en: "In-kind donations at shelters and the Blood Center" } }
    ],
    points: [
      { city: "Manizales", name: "Coliseo Mayor — Albergue", address: "Centro", hours: "24 horas" },
      { city: "Manizales", name: "Coliseo Menor — Albergue", address: "Centro", hours: "24 horas" },
      { city: "Manizales", name: "SIC de Aranjuez — Albergue", address: "Aranjuez", hours: "24 horas" },
      { city: "Manizales", name: "Hemocentro del Café", address: "Centro", hours: "7:00 am – 5:00 pm" }
    ]
  },
  {
    id: "unicef-colombia",
    urgency: "alta",
    flow: "exterior",
    name: "UNICEF Colombia",
    categoryKey: "infancia",
    logoInitials: "UN",
    logoColor: "#185FA5",
    logoBg: "#0e2942",
    description: {
      es: "Organización de la ONU enfocada en proteger a los niños afectados. Acepta donaciones desde más de 190 países, coordinando con autoridades colombianas.",
      en: "UN organization focused on protecting affected children. Accepts donations from over 190 countries, coordinating with Colombian authorities."
    },
    needs: ["dinero"],
    distanceKm: null,
    updatedMinAgo: 20,
    website: "https://www.unicef.org/es/donate",
    donateUrl: "https://www.unicef.org/es/donate",
    payment: [
      { label: { es: "En línea", en: "Online" }, value: { es: "Tarjetas internacionales y PayPal (USD, EUR, GBP, CAD, AUD)", en: "International cards and PayPal (USD, EUR, GBP, CAD, AUD)" } }
    ]
  },
  {
    id: "world-central-kitchen",
    urgency: "alta",
    flow: "exterior",
    name: "World Central Kitchen",
    categoryKey: "alimentacion",
    logoInitials: "WK",
    logoColor: "#1e8449",
    logoBg: "#123322",
    description: {
      es: "Fundada por el chef José Andrés. Proporciona comidas frescas de emergencia trabajando con cocineros y organizaciones locales.",
      en: "Founded by Chef José Andrés. Provides fresh emergency meals working with local cooks and organizations."
    },
    needs: ["dinero"],
    distanceKm: null,
    updatedMinAgo: 18,
    website: "https://wck.org/donate",
    donateUrl: "https://wck.org/donate",
    payment: [
      { label: { es: "En línea", en: "Online" }, value: { es: "Tarjeta y transferencia (USD, EUR, MXN)", en: "Card and bank transfer (USD, EUR, MXN)" } }
    ]
  },
  {
    id: "direct-relief",
    urgency: "alta",
    flow: "exterior",
    name: "Direct Relief",
    categoryKey: "salud",
    logoInitials: "DR",
    logoColor: "#d68910",
    logoBg: "#3a2a10",
    description: {
      es: "Organización humanitaria internacional de salud. Provee medicamentos y suministros médicos a centros de salud locales en Cali y Pereira.",
      en: "International humanitarian health organization. Provides medicines and medical supplies to local health centers in Cali and Pereira."
    },
    needs: ["dinero", "medicinas"],
    distanceKm: null,
    updatedMinAgo: 25,
    website: "https://www.directrelief.org/2026/08/colombia-choco-earthquake-emergency-response/",
    donateUrl: "https://www.directrelief.org/2026/08/colombia-choco-earthquake-emergency-response/",
    payment: [
      { label: { es: "En línea", en: "Online" }, value: { es: "Visa, Mastercard, Amex (USD)", en: "Visa, Mastercard, Amex (USD)" } }
    ]
  },
  {
    id: "americares",
    urgency: "alta",
    flow: "exterior",
    name: "Americares",
    categoryKey: "salud",
    logoInitials: "AM",
    logoColor: "#c0392b",
    logoBg: "#3a1a1a",
    description: {
      es: "Organización de salud y desastres con equipos en Bogotá y Barranquilla. Provee medicamentos, suministros médicos y fondos de emergencia.",
      en: "Health and disaster organization with teams in Bogotá and Barranquilla. Provides medicines, medical supplies and emergency funding."
    },
    needs: ["dinero", "medicinas"],
    distanceKm: null,
    updatedMinAgo: 30,
    website: "https://www.americares.org/donate/",
    donateUrl: "https://www.americares.org/donate/",
    payment: [
      { label: { es: "En línea", en: "Online" }, value: { es: "Tarjetas internacionales (USD)", en: "International cards (USD)" } }
    ]
  },
  {
    id: "global-giving",
    urgency: "media",
    flow: "exterior",
    name: "GlobalGiving",
    categoryKey: "recuperacion",
    logoInitials: "GG",
    logoColor: "#534AB7",
    logoBg: "#221f42",
    description: {
      es: "Plataforma de donaciones para recuperación a largo plazo. Fondos distribuidos entre organizaciones locales verificadas.",
      en: "Donation platform for long-term recovery. Funds distributed among verified local organizations."
    },
    needs: ["dinero"],
    distanceKm: null,
    updatedMinAgo: 40,
    website: "https://www.globalgiving.org/projects/colombia-earthquake-relief-fund/",
    donateUrl: "https://www.globalgiving.org/projects/colombia-earthquake-relief-fund/",
    payment: [
      { label: { es: "En línea", en: "Online" }, value: { es: "PayPal, tarjetas y transferencias (USD, EUR, GBP)", en: "PayPal, cards and transfers (USD, EUR, GBP)" } }
    ]
  },
  {
    id: "wfp-colombia",
    urgency: "alta",
    flow: "exterior",
    name: "WFP Colombia",
    categoryKey: "alimentacion",
    logoInitials: "WF",
    logoColor: "#854F0B",
    logoBg: "#332608",
    description: {
      es: "Programa Mundial de Alimentos. Trabaja con autoridades colombianas para atender la inseguridad alimentaria en albergues y zonas de difícil acceso.",
      en: "World Food Programme. Works with Colombian authorities to address food insecurity in shelters and hard-to-reach areas."
    },
    needs: ["dinero", "alimentos"],
    distanceKm: null,
    updatedMinAgo: 22,
    website: "https://www.wfp.org/donate",
    donateUrl: "https://www.wfp.org/donate",
    payment: [
      { label: { es: "En línea", en: "Online" }, value: { es: "Tarjetas internacionales y PayPal (USD, EUR)", en: "International cards and PayPal (USD, EUR)" } }
    ]
  },
  {
    id: "all-hands-hearts",
    urgency: "media",
    flow: "exterior",
    name: "All Hands & Hearts",
    categoryKey: "rescate",
    logoInitials: "AH",
    logoColor: "#0F6E56",
    logoBg: "#0c2b23",
    description: {
      es: "Organización de voluntarios de rescate, activa en Colombia apoyando equipos de emergencia con equipamiento especializado.",
      en: "Volunteer rescue organization, active in Colombia supporting emergency teams with specialized equipment."
    },
    needs: ["dinero", "tiempo"],
    distanceKm: null,
    updatedMinAgo: 35,
    website: "https://www.allhandsandhearts.org/donate/",
    donateUrl: "https://www.allhandsandhearts.org/donate/",
    payment: [
      { label: { es: "En línea", en: "Online" }, value: { es: "Tarjetas internacionales (USD)", en: "International cards (USD)" } }
    ]
  },
  {
    id: "plan-international",
    urgency: "media",
    flow: "exterior",
    name: "Plan International",
    categoryKey: "infancia",
    logoInitials: "PL",
    logoColor: "#c0392b",
    logoBg: "#3a1a1a",
    description: {
      es: "ONG internacional activa en Colombia. Acepta donaciones desde el extranjero para familias afectadas, con enfoque en niños y mujeres.",
      en: "International NGO active in Colombia. Accepts donations from abroad for affected families, focused on children and women."
    },
    needs: ["dinero"],
    distanceKm: null,
    updatedMinAgo: 45,
    website: "https://www.planusa.org/donate/",
    donateUrl: "https://www.planusa.org/donate/",
    payment: [
      { label: { es: "En línea", en: "Online" }, value: { es: "Tarjetas internacionales desde LATAM, EEUU y Europa", en: "International cards from LATAM, US and Europe" } }
    ]
  },
  {
    id: "gofundme-colombia",
    urgency: "media",
    flow: "exterior",
    name: "GoFundMe — Terremoto Colombia",
    categoryKey: "recuperacion",
    logoInitials: "GF",
    logoColor: "#00B964",
    logoBg: "#0c3322",
    description: {
      es: "Recopilación verificada de campañas de recaudación para las familias y comunidades afectadas por el terremoto.",
      en: "Verified hub of fundraising campaigns for families and communities affected by the earthquake."
    },
    needs: ["dinero"],
    distanceKm: null,
    updatedMinAgo: 28,
    website: "https://www.gofundme.com/es-us/c/act/terremoto-colombia",
    donateUrl: "https://www.gofundme.com/es-us/c/act/terremoto-colombia",
    payment: [
      { label: { es: "En línea", en: "Online" }, value: { es: "Tarjetas internacionales, PayPal y transferencia", en: "International cards, PayPal and bank transfer" } }
    ]
  },
  // ---- BLOQUE 2: Colombia Un Solo Corazón (Red Primera Dama) ----
  {
    id: "tigresas-un-solo-corazon",
    urgency: "alta",
    flow: "both",
    name: "Colombia Un Solo Corazón — Tigresas Moviéndose con Corazón",
    categoryKey: "comunitaria",
    logoInitials: "❤",
    logoColor: "#FCD116",
    logoBg: "#3a3013",
    instagram: "@tigresasmoviendoseconcorazon",
    isSpecial: true,
    description: {
      es: "Red comunitaria oficial articulada con la Primera Dama de la Nación. Coordina más de 30 puntos de entrega en Colombia y Estados Unidos para canalizar ayuda directa a las zonas afectadas.",
      en: "Official community network coordinated with the First Lady of the Nation. Manages 30+ drop-off points across Colombia and the United States channeling direct aid to affected areas."
    },
    needs: ["alimentos", "agua", "medicinas", "cobijas", "ropa", "dinero", "tiempo", "mascotas"],
    distanceKm: 1.5,
    updatedMinAgo: 5,
    payment: [],
    officialAccounts: [
      { name: "Fundación Colombia Luz y Sonrisas", bank: "Banco de Bogotá", accountType: { es: "Ahorros", en: "Savings" }, account: "125128462", nit: "9020850963" },
      { name: "Corporación El Minuto de Dios", bank: "Davivienda", accountType: { es: "Ahorros", en: "Savings" }, account: "0040 0024 0970", nit: "860.010.371-0" },
      { name: "ABACO", breb: "0090989753", accountType: null, account: null, nit: null }
    ],
    international: { bank: "Banco de Bogotá", account: "125128462", swift: "BBOGCOBB", aba: "021000089" },
    points: [
      { city: "Bogotá", points: [
        { address: "122 Plaza Apartahotel, Cr 15A #122-27", hours: "24 horas" },
        { address: "GAULA, Cr 47 #94-68", phone: "318 544 4431" },
        { address: "Codabas, Cr 7 #180-75", phone: "305 714 1513" },
        { address: "Unicentro, entradas Cr 13 y Cr 15", phone: "317 645 6373" },
        { address: "Park Way, Av. Kr 24 #39-29", phone: "310 267 7601" }
      ]},
      { city: "Medellín", points: [
        { address: "Cra 80 #49A-39", phone: "322 653 1804" },
        { address: "Central Mayorista", phone: "320 691 5374", hours: "8:00 am – 5:00 pm" }
      ]},
      { city: "Barranquilla", points: [
        { address: "Casa Abelardista, Cra 49C #80-76", phone: "301 760 6374", hours: "9:00 am – 5:00 pm" }
      ]},
      { city: "Cali", points: [
        { address: "Antigua Licorera del Valle, Cra 1 #26-85", phone: "318 477 7636" },
        { address: "Arroyo Hondo, Yumbo, Cr 30 #10-90", phone: "316 791 2163" }
      ]},
      { city: "Pereira", points: [
        { address: "Complejo Bodeguero Alpaca, Bodega 01", phone: "310 528 9438" },
        { address: "Mercasa, Av. Sur", phone: "313 550 9707" }
      ]},
      { city: "Bucaramanga", points: [
        { address: "Cl 54 #21A-07, La Concordia", phone: "316 256 7986" }
      ]},
      { city: "Cúcuta", points: [
        { address: "Portal Boconó, Local 2", phone: "312 339 2032" },
        { address: "Zona Industrial, Cl 17N #4-50", phone: "312 339 3032" }
      ]},
      { city: "Pasto", points: [
        { address: "Cl 17 #27-59", phone: "320 688 6196" }
      ]},
      { city: "Cartagena", points: [
        { address: "Parroquia Perpetuo Socorro, Bocagrande" },
        { address: "Parroquia Cristo Rey, Crespo" },
        { address: "Banco de Alimentos Ternera, Bodega 51" }
      ]},
      { city: "Quibdó", epicenter: true, points: [
        { address: "Cl 27A #23-44, barrio Los Ángeles", phone: "310 805 0535" }
      ]},
      { city: "Santa Marta", points: [
        { address: "Iglesia Amor en Acción, Cl 30 #6-69", phone: "317 300 3459" }
      ]},
      { city: "Arauca", points: [
        { address: "Cl 17 #17-31, Cristo Rey", phone: "314 401 4272" }
      ]},
      { city: "Neiva", points: [
        { address: "Cl 8 #10-27, El Altico", phone: "315 480 2554" }
      ]},
      { city: "Villavicencio", points: [
        { address: "Cr 31 #41A-50", phone: "310 794 2742" }
      ]},
      { city: "Sincelejo", points: [
        { address: "Cl 19 #21-41", phone: "311 478 8851" }
      ]},
      { city: "Montería", points: [
        { address: "Cl 69 #3-86, El Recreo" }
      ]},
      { city: "Riohacha", points: [
        { address: "Terrazas Coquivacoa, Casa 15", phone: "300 817 1502" }
      ]},
      { city: "Florencia", points: [
        { address: "Cra 10A #7-04", phone: "317 887 1620" }
      ]},
      { city: "Mocoa", points: [
        { address: "Cl 9 #6-14, Local 109, Froylán Café", phone: "314 484 4307" }
      ]},
      { city: "Miami / Doral, EE. UU.", points: [
        { address: "1850 NW 84th Ave, Doral, FL 33126", phone: "786 503 9845" }
      ]},
      { city: "Miami, EE. UU.", points: [
        { address: "2301 NW 107th Ave, Ste 102, FL 33172", hours: "9:00 am – 7:00 pm" }
      ]},
      { city: "Atlanta / Duluth, EE. UU.", points: [
        { address: "3750 Venture Dr, Suite A5, Duluth, GA 30096" }
      ]}
    ]
  }
];

const BLOOD_BANKS = {
  "Cali": [
    { name: "Hospital Universitario del Valle", address: "Calle 5 #36-08" },
    { name: "Imbanaco", address: "Carrera 38 Bis #5B2-04" }
  ],
  "Bogotá": [
    { name: "Hemocentro Distrital", address: "Carrera 68 #24-09" },
    { name: "INS — Instituto Nacional de Salud", address: "Avenida El Dorado" }
  ],
  "Pereira": [
    { name: "Hemocentro de Risaralda", address: { es: "Consultar dirección en punto de atención", en: "Check address at the attention point" } }
  ],
  "Manizales": [
    { name: "Hemocentro del Café", address: { es: "Consultar dirección en punto de atención", en: "Check address at the attention point" } }
  ],
  "Medellín": [
    { name: "Clínica Soma", address: { es: "Consultar dirección en punto de atención", en: "Check address at the attention point" } }
  ]
};

const NEED_ICONS = {
  alimentos: "🍚", agua: "💧", medicinas: "💊", sangre: "🩸", dinero: "💰",
  tiempo: "🕐", wifi: "📶", mascotas: "🐾", ropa: "👕", cobijas: "🧣",
  colchonetas: "🛏️", higiene: "🧼", guantes: "🧤", cascos: "⛑️", herramientas: "🔧"
};

const FILTER_KEYS = ["todos", "alimentos", "agua", "medicinas", "sangre", "dinero", "tiempo", "wifi", "mascotas"];

const CITY_FILTER_KEYS = ["todas", "choco", "pereira", "cali", "bogota", "manizales", "medellin", "armenia", "barranquilla", "otras"];
const CITY_FILTER_MATCH = {
  choco: ["Quibdó"],
  pereira: ["Pereira"],
  cali: ["Cali"],
  bogota: ["Bogotá"],
  manizales: ["Manizales"],
  medellin: ["Medellín"],
  armenia: ["Armenia"],
  barranquilla: ["Barranquilla"]
};
const CITY_FILTER_NAMED_CITIES = Object.values(CITY_FILTER_MATCH).flat();

const NAV_ITEMS = [
  { key: "home", icon: "🏠", screen: "screen-home" },
  { key: "map", icon: "🗺️", screen: "screen-map" },
  { key: "donate", icon: "❤️", screen: "screen-donate" },
  { key: "donations", icon: "🎁", screen: "screen-donations" },
  { key: "profile", icon: "👤", screen: "screen-profile" }
];

const CITY_ORDER = [
  "Bogotá", "Cali", "Pereira", "Manizales", "Medellín", "Barranquilla",
  "Armenia", "Ibagué", "Quibdó", "Bucaramanga", "Cúcuta", "Pasto",
  "Cartagena", "Santa Marta", "Arauca", "Neiva", "Villavicencio",
  "Sincelejo", "Montería", "Riohacha", "Florencia", "Mocoa", "Miami", "Atlanta"
];

const ONLINE_DONATION_ORG_IDS = ["cruz-roja-colombiana", "unicef-colombia", "world-central-kitchen", "direct-relief", "global-giving", "gofundme-colombia"];

// ========================================
// 🔔 ALERTAS — EDITAR AQUÍ PARA ACTUALIZAR
// Para actualizar: edita este array y haz commit en GitHub
// Vercel actualiza la app automáticamente en ~2 minutos
// ========================================
const ALERTAS = [
  {
    id: 1,
    tipo: "critico", // critico | urgente | info
    emoji: "🔴",
    titulo: "Quibdó sin agua potable",
    descripcion: "Se necesitan filtros purificadores y agua embotellada con urgencia en el epicentro.",
    tiempo: "Hace 10 min",
    ciudad: "Quibdó, Chocó"
  },
  {
    id: 2,
    tipo: "urgente",
    emoji: "🟠",
    titulo: "Cruz Roja necesita voluntarios",
    descripcion: "Se requieren voluntarios en Pereira para clasificación de donaciones. Inscríbete en cruzrojacolombiana.org",
    tiempo: "Hace 1 hora",
    ciudad: "Pereira, Risaralda"
  },
  {
    id: 3,
    tipo: "info",
    emoji: "🟡",
    titulo: "Nuevos puntos de acopio en Bogotá",
    descripcion: "Se habilitaron 3 nuevos puntos en Unicentro, Codabas y Park Way. Ver sección Mapa.",
    tiempo: "Hace 2 horas",
    ciudad: "Bogotá, D.C."
  }
];

/* ==========================================================================
   3. STATE
   ========================================================================== */
const state = {
  lang: localStorage.getItem("ca_lang") || "es",
  activeFilter: "todos",
  selectedOrgId: null,
  detailOrigin: "screen-home",
  activeNav: "home",
  openBloodCity: null,
  activeCity: "todas",
  alertsRead: false,
  homeCityFilter: "todas"
};

/* ==========================================================================
   4. HELPERS
   ========================================================================== */
function orgName(org) {
  if (typeof org.name === "string") return org.name;
  return org.name[state.lang] || org.name.es;
}
function orgDesc(org) {
  return org.description[state.lang] || org.description.es;
}
function categoryLabel(org) {
  return t("cat." + org.categoryKey);
}
function urgencyLabel(u) {
  return t("urgency." + u);
}
function needLabel(k) {
  return t("filters." + k);
}
function pickVal(v) {
  if (v === null || v === undefined) return "";
  if (typeof v === "object") return v[state.lang] || v.es;
  return v;
}
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2400);
}
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[s]));
}

function creditFooterHTML() {
  return `<a class="credit-footer" href="https://www.cocoralabs.com" target="_blank" rel="noopener noreferrer">${t("footer.madeBy")} Cocora-Labs</a>`;
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => toast(t("toast.copied"))).catch(() => legacyCopy(text));
  } else {
    legacyCopy(text);
  }
}
function legacyCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand("copy"); toast(t("toast.copied")); }
  catch (e) { toast(text); }
  document.body.removeChild(ta);
}

function telHref(phone) {
  return "tel:" + String(phone).replace(/[^\d+]/g, "");
}

function mapsHref(address, city) {
  const isUS = /EE\.?\s?UU|USA|FL |GA /i.test(city + " " + address) || /,\s?FL|,\s?GA/i.test(address);
  const country = isUS ? "USA" : "Colombia";
  const query = `${address}, ${city}, ${country}`;
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
}

function normalizeCity(city) {
  if (city.indexOf("Miami") === 0) return "Miami";
  if (city.indexOf("Atlanta") === 0) return "Atlanta";
  return city;
}

/* ==========================================================================
   5. i18n DOM apply
   ========================================================================== */
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.documentElement.lang = state.lang;
  document.querySelectorAll(".lang-toggle").forEach(tg => {
    tg.querySelectorAll(".lang-opt").forEach(opt => {
      opt.classList.toggle("active", opt.getAttribute("data-lang") === state.lang);
    });
  });
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem("ca_lang", lang);
  applyI18n();
  renderFilters();
  renderCityFilters();
  renderOrgList();
  renderBottomNavs();
  if (state.selectedOrgId) renderDetail();
  renderDonateScreen();
  renderMapScreen();
  renderDonationsScreen();
  renderProfileScreen();
  ["counter-people", "counter-orgs"].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.dataset.target) el.textContent = formatNum(Number(el.dataset.target));
  });
}

/* ==========================================================================
   6. NAVIGATION
   ========================================================================== */
function showScreen(id, opts) {
  opts = opts || {};
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(id);
  el.classList.add("active");
  const scrollable = el.querySelector(".home-scroll, .detail-scroll, .donate-scroll, .map-scroll, .donations-scroll, .profile-scroll");
  if (scrollable) scrollable.scrollTop = 0;
  window.scrollTo(0, 0);
  updateBottomNavHighlight(id);
  const scrollTopBtn = document.getElementById("scroll-top-btn");
  if (scrollTopBtn) scrollTopBtn.classList.remove("show");
}

function updateBottomNavHighlight(currentId) {
  const map = { "screen-home": "home", "screen-map": "map", "screen-donate": "donate", "screen-donations": "donations", "screen-profile": "profile" };
  state.activeNav = map[currentId] || state.activeNav;
  document.querySelectorAll(".bottom-nav").forEach(nav => {
    nav.querySelectorAll(".nav-item").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.key === state.activeNav);
    });
  });
}

function buildBottomNav(container) {
  container.innerHTML = "";
  NAV_ITEMS.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "nav-item";
    btn.dataset.key = item.key;
    btn.innerHTML = `<span class="nav-icon">${item.icon}</span><span>${t("nav." + item.key)}</span>`;
    btn.addEventListener("click", () => showScreen(item.screen));
    container.appendChild(btn);
  });
}

function renderBottomNavs() {
  ["bottom-nav-home", "bottom-nav-donate", "bottom-nav-map", "bottom-nav-donations", "bottom-nav-profile"].forEach(id => {
    buildBottomNav(document.getElementById(id));
  });
  updateBottomNavHighlight(document.querySelector(".screen.active") ? document.querySelector(".screen.active").id : "screen-home");
}

/* ==========================================================================
   7. HOME — filters + org list
   ========================================================================== */
function renderFilters() {
  const wrap = document.getElementById("filters");
  wrap.innerHTML = "";
  FILTER_KEYS.forEach(key => {
    const chip = document.createElement("button");
    chip.className = "filter-chip" + (state.activeFilter === key ? " active" : "");
    chip.textContent = (key === "todos" ? "" : (NEED_ICONS[key] ? NEED_ICONS[key] + " " : "")) + t("filters." + key);
    chip.addEventListener("click", () => {
      state.activeFilter = key;
      renderFilters();
      renderOrgList();
    });
    wrap.appendChild(chip);
  });
}

function renderCityFilters() {
  const wrap = document.getElementById("city-filters");
  wrap.innerHTML = "";
  CITY_FILTER_KEYS.forEach(key => {
    const chip = document.createElement("button");
    chip.className = "filter-chip" + (state.homeCityFilter === key ? " active" : "");
    chip.textContent = t("city." + key);
    chip.addEventListener("click", () => {
      state.homeCityFilter = key;
      renderCityFilters();
      renderOrgList();
    });
    wrap.appendChild(chip);
  });
}

function orgCityList(org) {
  if (!org.points) return [];
  return org.points.map(p => p.city && normalizeCity(p.city)).filter(Boolean);
}

function orgMatchesCityFilter(org, cityKey) {
  if (cityKey === "todas") return true;
  const cities = orgCityList(org);
  if (!cities.length) return false;
  if (cityKey === "otras") return cities.some(c => !CITY_FILTER_NAMED_CITIES.includes(c));
  const targets = CITY_FILTER_MATCH[cityKey] || [];
  return cities.some(c => targets.includes(c));
}

function getFilteredOrgs() {
  return ORGS.filter(o => {
    const matchesNeed = state.activeFilter === "todos" || o.needs.includes(state.activeFilter);
    const matchesCity = orgMatchesCityFilter(o, state.homeCityFilter);
    return matchesNeed && matchesCity;
  });
}

function orgLogoHTML(org) {
  return `<div class="org-logo" style="background:${org.logoBg};color:${org.logoColor}">${org.logoInitials}</div>`;
}

function metaTimeLabel(min) {
  if (min < 60) return t("card.minAgo", { n: min });
  return t("card.hAgo", { n: Math.round(min / 60) });
}

function orgCardHTML(org) {
  const needs = org.needs.slice(0, 5).map(n => `<span class="chip">${NEED_ICONS[n] || ""} ${needLabel(n)}</span>`).join("");
  const distance = org.distanceKm != null ? t("card.distance", { n: org.distanceKm }) : t("card.online");
  const special = org.isSpecial ? `<div class="org-special-badge">🏛️ ${t("detail.specialBadge")}</div>` : "";
  return `
    <div class="org-card" data-org-id="${org.id}">
      <div class="org-card-top">
        ${orgLogoHTML(org)}
        <div class="org-info">
          <div class="org-name-row">
            <div>
              <div class="org-name">${escapeHtml(orgName(org))}</div>
              <div class="org-category">${categoryLabel(org)}</div>
            </div>
            <span class="badge badge-${org.urgency}">${urgencyLabel(org.urgency)}</span>
          </div>
          ${special}
        </div>
      </div>
      <p class="org-desc">${escapeHtml(orgDesc(org))}</p>
      <div class="chips-row">${needs}</div>
      <div class="org-meta-row">
        <span>📍 ${distance}</span>
        <span class="dot">·</span>
        <span class="verified">✓ ${t("card.verified")}</span>
        <span class="dot">·</span>
        <span>${metaTimeLabel(org.updatedMinAgo)}</span>
      </div>
    </div>`;
}

function renderOrgList() {
  const wrap = document.getElementById("org-list");
  const orgs = getFilteredOrgs();
  if (!orgs.length) {
    const emptyKey = state.homeCityFilter !== "todas" ? "common.emptyFilterCombo" : "common.emptyFilter";
    wrap.innerHTML = `<p style="text-align:center;color:var(--text-secondary);font-size:13px;padding:24px 10px;">${t(emptyKey)}</p>`;
    return;
  }
  wrap.innerHTML = orgs.map(orgCardHTML).join("");
  wrap.querySelectorAll(".org-card").forEach(card => {
    card.addEventListener("click", () => openDetail(card.dataset.orgId, "screen-home"));
  });
}

/* ==========================================================================
   8. DETAIL screen
   ========================================================================== */
function openDetail(orgId, origin) {
  state.selectedOrgId = orgId;
  state.detailOrigin = origin || "screen-home";
  renderDetail();
  showScreen("screen-detail");
}

function paymentCardHTML(org) {
  if (!org.payment || !org.payment.length) return "";
  const rows = org.payment.map(p => `<div class="payment-line"><span>${p.label[state.lang] || p.label.es}</span><b>${pickVal(p.value)}</b></div>`).join("");
  return `
    <div class="detail-section">
      <h3 class="detail-section-title">${t("detail.paymentInfo")}</h3>
      <div class="payment-card">${rows}</div>
    </div>`;
}

function tigresasExtrasHTML(org) {
  let html = "";
  if (org.officialAccounts) {
    const accts = org.officialAccounts.map(a => {
      const lines = [];
      if (a.bank) lines.push(`<div class="payment-line"><span>${t("detail.bank")}</span><b>${a.bank}</b></div>`);
      if (a.account) {
        if (a.accountType) lines.push(`<div class="payment-line"><span>${pickVal(a.accountType)}</span><b>${a.account}</b></div>`);
        else lines.push(`<div class="payment-line"><span>${t("detail.account")}</span><b>${a.account}</b></div>`);
      }
      if (a.breb) lines.push(`<div class="payment-line"><span>${t("detail.breb")}</span><b>${a.breb}</b></div>`);
      if (a.nit) lines.push(`<div class="payment-line"><span>${t("detail.nit")}</span><b>${a.nit}</b></div>`);
      return `<div class="payment-card"><p class="payment-card-title">${escapeHtml(a.name)}</p>${lines.join("")}</div>`;
    }).join("");
    html += `<div class="detail-section"><h3 class="detail-section-title">${t("detail.officialAccounts")}</h3>${accts}</div>`;
  }
  if (org.international) {
    const i = org.international;
    html += `
      <div class="detail-section">
        <h3 class="detail-section-title">${t("detail.international")}</h3>
        <div class="payment-card">
          <div class="payment-line"><span>${t("detail.bank")}</span><b>${i.bank}</b></div>
          <div class="payment-line"><span>${t("detail.account")}</span><b>${i.account}</b></div>
          <div class="payment-line"><span>${t("detail.swift")}</span><b>${i.swift}</b></div>
          <div class="payment-line"><span>${t("detail.aba")}</span><b>${i.aba}</b></div>
        </div>
      </div>`;
  }
  if (org.points && org.points.length && org.points[0].city && org.points[0].points) {
    const groups = org.points.map(g => {
      const items = g.points.map(p => `
        <div class="point-item">
          <b>${escapeHtml(p.address)}</b>${g.epicenter ? " 🚨" : ""}
          ${p.phone ? `<br><span class="point-phone">☎ ${p.phone}</span>` : ""}
          ${p.hours ? `<br>🕐 ${p.hours}` : ""}
        </div>`).join("");
      return `<div class="points-city"><div class="points-city-name">${escapeHtml(g.city)}</div>${items}</div>`;
    }).join("");
    html += `
      <div class="detail-section">
        <h3 class="detail-section-title">${t("detail.points")} (30+)</h3>
        <div class="points-scroll">${groups}</div>
      </div>`;
  }
  return html;
}

function simplePointsHTML(org) {
  if (!org.points || !org.points.length || (org.points[0].points)) return "";
  const items = org.points.map(p => `
    <div class="point-item">
      <b>${escapeHtml(p.name)}</b><br>${escapeHtml(pickVal(p.address))}
      ${p.phone ? `<br><span class="point-phone">☎ ${p.phone}</span>` : ""}
      ${p.hours ? `<br>🕐 ${p.hours}` : ""}
    </div>`).join("");
  return `
    <div class="detail-section">
      <h3 class="detail-section-title">${t("detail.points")}</h3>
      <div class="points-scroll">${items}</div>
    </div>`;
}

function renderDetail() {
  const org = ORGS.find(o => o.id === state.selectedOrgId);
  const wrap = document.getElementById("detail-content");
  if (!org) { wrap.innerHTML = ""; return; }

  const distance = org.distanceKm != null ? t("card.distance", { n: org.distanceKm }) : t("card.online");
  const special = org.isSpecial ? `<span class="detail-special-badge">🏛️ ${t("detail.specialBadge")}</span>` : "";
  const instagram = org.instagram ? `
      <div class="detail-row">
        <div class="detail-row-label">📷 ${t("detail.instagram")}</div>
        <div class="detail-row-value">${org.instagram}</div>
      </div>` : "";
  const missing = org.missingPersonsLine ? `
      <div class="detail-row">
        <div class="detail-row-label">☎ ${t("detail.missingLine")}</div>
        <div class="detail-row-value">${org.missingPersonsLine}</div>
      </div>` : "";

  const needsChips = org.needs.map(n => `<span class="chip">${NEED_ICONS[n] || ""} ${needLabel(n)}</span>`).join("");

  wrap.innerHTML = `
    <div class="detail-logo-wrap">
      <div class="detail-logo" style="background:${org.logoBg};color:${org.logoColor}">${org.logoInitials}</div>
      <h1 class="detail-name">${escapeHtml(orgName(org))}</h1>
      <div class="detail-cat-row">
        <span class="detail-category">${categoryLabel(org)}</span>
        <span class="badge badge-${org.urgency}">${urgencyLabel(org.urgency)}</span>
      </div>
      ${special}
      <p class="detail-description">${escapeHtml(orgDesc(org))}</p>
    </div>

    <div class="detail-section">
      <h3 class="detail-section-title">${t("detail.needs")}</h3>
      <div class="chips-row">${needsChips}</div>
    </div>

    <div class="detail-rows">
      <div class="detail-row">
        <div class="detail-row-label">📍 ${t("detail.distance")}</div>
        <div class="detail-row-value">${distance}</div>
      </div>
      <div class="detail-row">
        <div class="detail-row-label">✓ ${t("detail.verified")}</div>
        <div class="detail-row-value verified">${t("card.verified")}</div>
      </div>
      <div class="detail-row">
        <div class="detail-row-label">🕐</div>
        <div class="detail-row-value">${t("detail.updated", { n: org.updatedMinAgo })}</div>
      </div>
      ${instagram}
      ${missing}
    </div>

    ${paymentCardHTML(org)}
    ${org.isSpecial ? tigresasExtrasHTML(org) : simplePointsHTML(org)}

    <div class="detail-cta-wrap">
      <button class="btn-cta" id="detail-cta">❤️ ${t("detail.donateNow")}</button>
      <a class="more-info-link" id="detail-more-info">${t("detail.moreInfo")} ⓘ</a>
    </div>
  `;

  const cta = document.getElementById("detail-cta");
  cta.addEventListener("click", () => {
    if (org.donateUrl) {
      window.open(org.donateUrl, "_blank", "noopener,noreferrer");
    } else {
      const paymentSection = wrap.querySelector(".payment-card, .points-scroll");
      if (paymentSection) paymentSection.scrollIntoView({ behavior: "smooth", block: "center" });
      toast(t("toast.updated"));
    }
  });
  const moreInfo = document.getElementById("detail-more-info");
  moreInfo.addEventListener("click", () => {
    if (org.website) window.open(org.website, "_blank", "noopener,noreferrer");
    else toast(t("toast.noInfo"));
  });
}

/* ==========================================================================
   9. DONATE screen ("Dona diferente")
   ========================================================================== */
function renderDonateScreen() {
  const wrap = document.getElementById("donate-content");
  const petsKeys = ["clorhexidina", "cobijas", "camas", "arneses", "cachorros", "adultos", "medicamentos"];
  const cities = Object.keys(BLOOD_BANKS);

  wrap.innerHTML = `
    <div class="donate-card donate-card-time">
      <div class="donate-card-head"><span class="donate-card-icon">🕐</span><h2 class="donate-card-title">${t("donate.time.title")}</h2></div>
      <p class="donate-card-desc">${t("donate.time.desc")}</p>
      <div class="donate-orglink" data-org="cruz-roja-colombiana">
        <span>🩹 ${t("donate.time.linkCruzRoja")}</span><span class="arrow">›</span>
      </div>
      <div class="donate-orglink" data-org="banco-alimentos-bogota">
        <span>🍚 ${t("donate.time.linkBanco")}</span><span class="arrow">›</span>
      </div>
    </div>

    <div class="donate-card donate-card-wifi">
      <div class="donate-card-head"><span class="donate-card-icon">📶</span><h2 class="donate-card-title">${t("donate.wifi.title")}</h2></div>
      <p class="donate-card-desc">${t("donate.wifi.desc")}</p>
      <div class="wifi-steps">
        <div class="wifi-step"><span class="wifi-step-carrier">Claro</span><span class="wifi-step-text">${t("donate.wifi.claro")}</span></div>
        <div class="wifi-step"><span class="wifi-step-carrier">Tigo</span><span class="wifi-step-text">${t("donate.wifi.tigo")}</span></div>
        <div class="wifi-step"><span class="wifi-step-carrier">Movistar</span><span class="wifi-step-text">${t("donate.wifi.movistar")}</span></div>
      </div>
    </div>

    <div class="donate-card donate-card-blood">
      <div class="donate-card-head"><span class="donate-card-icon">🩸</span><h2 class="donate-card-title">${t("donate.blood.title")}</h2></div>
      <p class="donate-card-desc">${t("donate.blood.desc")}</p>
      <div class="blood-chips">
        ${cities.map(c => `<button class="blood-chip${state.openBloodCity === c ? " active" : ""}" data-city="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("")}
      </div>
      <div class="blood-info" id="blood-info"></div>
    </div>

    <div class="donate-card donate-card-pets">
      <div class="donate-card-head"><span class="donate-card-icon">🐾</span><h2 class="donate-card-title">${t("donate.pets.title")}</h2></div>
      <p class="donate-card-desc">${t("donate.pets.desc")}</p>
      <div class="pets-chips">
        ${petsKeys.map(k => `<span class="pets-chip">🐾 ${t("pets." + k)}</span>`).join("")}
      </div>
      <p class="pets-note">${t("donate.pets.note")}</p>
    </div>

    <p class="donate-footer">${t("donate.footer")}</p>
    ${creditFooterHTML()}
  `;

  wrap.querySelectorAll(".donate-orglink").forEach(el => {
    el.addEventListener("click", () => {
      const org = ORGS.find(o => o.id === el.dataset.org);
      if (org && org.volunteerUrl) window.open(org.volunteerUrl, "_blank", "noopener,noreferrer");
      else openDetail(el.dataset.org, "screen-donate");
    });
  });

  wrap.querySelectorAll(".blood-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const city = chip.dataset.city;
      state.openBloodCity = state.openBloodCity === city ? null : city;
      renderDonateScreen();
    });
  });

  const infoBox = document.getElementById("blood-info");
  if (state.openBloodCity && BLOOD_BANKS[state.openBloodCity]) {
    infoBox.classList.add("open");
    infoBox.innerHTML = BLOOD_BANKS[state.openBloodCity].map(b => `
      <div class="blood-bank-item"><b>🩸 ${escapeHtml(b.name)}</b>${pickVal(b.address)}</div>
    `).join("");
  }
}

/* ==========================================================================
   10. SPLASH — counters + buttons
   ========================================================================== */
function formatNum(n) {
  return n.toLocaleString(state.lang === "en" ? "en-US" : "es-CO");
}

function animateCounter(el, target, duration) {
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = formatNum(value);
    el.dataset.target = target;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = formatNum(target);
  }
  requestAnimationFrame(step);
}

function initSplashCounters() {
  animateCounter(document.getElementById("counter-people"), 12480, 1400);
  animateCounter(document.getElementById("counter-orgs"), 214, 1400);
}

/* ==========================================================================
   10.5 ALERTAS — panel de campana
   ========================================================================== */
function alertItemHTML(alerta) {
  return `
    <div class="alert-item alert-${alerta.tipo}">
      <div class="alert-item-top">
        <span class="alert-emoji">${alerta.emoji}</span>
        <div class="alert-item-body">
          <div class="alert-titulo">${escapeHtml(alerta.titulo)}</div>
          <p class="alert-desc">${escapeHtml(alerta.descripcion)}</p>
          <div class="alert-meta">
            <span>${escapeHtml(alerta.tiempo)}</span>
            <span class="alert-meta-dot">·</span>
            <span>📍 ${escapeHtml(alerta.ciudad)}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAlertsPanel() {
  const list = document.getElementById("alerts-list");
  if (!list) return;
  list.innerHTML = ALERTAS.length
    ? ALERTAS.map(alertItemHTML).join("")
    : `<p class="alerts-empty">${t("alerts.empty")}</p>`;
  updateAlertsBadge();
}

function updateAlertsBadge() {
  const badge = document.getElementById("bell-badge");
  if (!badge) return;
  const count = ALERTAS.length;
  badge.textContent = count;
  badge.style.display = (!state.alertsRead && count > 0) ? "flex" : "none";
}

function openAlertsPanel() {
  renderAlertsPanel();
  document.getElementById("alerts-overlay").classList.add("show");
  document.getElementById("alerts-panel").classList.add("open");
  state.alertsRead = true;
  updateAlertsBadge();
}

function closeAlertsPanel() {
  document.getElementById("alerts-overlay").classList.remove("show");
  document.getElementById("alerts-panel").classList.remove("open");
}

/* ==========================================================================
   12. MAPA — puntos de acopio
   ========================================================================== */
function getAllPoints() {
  const list = [];
  ORGS.forEach(org => {
    if (!org.points || !org.points.length) return;
    const name = orgName(org);
    if (org.points[0].points) {
      // formato agrupado (Red Tigresas)
      org.points.forEach(group => {
        group.points.forEach(p => {
          list.push({
            orgId: org.id, orgLabel: org.isSpecial ? "Tigresas" : name,
            city: normalizeCity(group.city), name: null,
            address: p.address, phone: p.phone, hours: p.hours,
            accepts: null, epicenter: !!group.epicenter
          });
        });
      });
    } else {
      // formato simple
      org.points.forEach(p => {
        list.push({
          orgId: org.id, orgLabel: name,
          city: normalizeCity(p.city), name: p.name,
          address: pickVal(p.address), phone: p.phone, hours: p.hours,
          accepts: p.accepts || null, epicenter: false
        });
      });
    }
  });
  return list;
}

function pointCardHTML(p) {
  const primary = p.name ? escapeHtml(p.name) : escapeHtml(p.address);
  const secondary = p.name ? `<div class="point-address">${escapeHtml(p.address)}</div>` : "";
  const accepts = p.accepts && p.accepts.length
    ? `<div class="point-accepts">${p.accepts.map(a => `<span class="chip">${NEED_ICONS[a] || ""} ${needLabel(a)}</span>`).join("")}</div>`
    : "";
  const metaParts = [];
  if (p.phone) metaParts.push(`☎ ${p.phone}`);
  if (p.hours) metaParts.push(`🕐 ${p.hours}`);
  const meta = metaParts.length ? `<div class="point-meta">${metaParts.map(m => `<span>${m}</span>`).join("")}</div>` : "";
  const actions = `
    <div class="point-actions">
      ${p.phone ? `<button class="point-btn call" data-tel="${escapeHtml(p.phone)}">📞 ${t("map.call")}</button>` : ""}
      <button class="point-btn viewmap" data-address="${escapeHtml(p.address)}" data-city="${escapeHtml(p.city)}">📍 ${t("map.viewMap")}</button>
    </div>`;
  return `
    <div class="point-card">
      <div class="point-card-header">
        <span class="point-name">${primary}</span>
        ${p.epicenter ? `<span class="point-epicenter">🚨 EPICENTRO</span>` : `<span class="point-org-tag">${escapeHtml(p.orgLabel)}</span>`}
      </div>
      ${secondary}
      ${meta}
      ${accepts}
      ${actions}
    </div>`;
}

function renderMapScreen() {
  const points = getAllPoints();
  const byCity = {};
  points.forEach(p => {
    if (!byCity[p.city]) byCity[p.city] = [];
    byCity[p.city].push(p);
  });
  const cities = CITY_ORDER.filter(c => byCity[c] && byCity[c].length);
  Object.keys(byCity).forEach(c => { if (!cities.includes(c)) cities.push(c); });

  if (state.activeCity !== "todas" && !cities.includes(state.activeCity)) {
    state.activeCity = "todas";
  }

  const quicknav = document.getElementById("map-quicknav");
  quicknav.innerHTML = `<button class="filter-chip${state.activeCity === "todas" ? " active" : ""}" data-city="todas">${t("map.all")}</button>` +
    cities.map(c => `<button class="filter-chip${state.activeCity === c ? " active" : ""}" data-city="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("");
  quicknav.querySelectorAll(".filter-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeCity = btn.dataset.city;
      renderMapScreen();
    });
  });

  const citiesToShow = state.activeCity === "todas" ? cities : [state.activeCity];

  const wrap = document.getElementById("map-content");
  wrap.innerHTML = citiesToShow.map(c => `
    <div class="city-section" id="city-${slugify(c)}">
      <div class="city-header">
        <span class="city-header-name">📍 ${escapeHtml(c)}</span>
        <span class="city-header-count">${byCity[c].length} ${byCity[c].length === 1 ? t("map.point") : t("map.points")}</span>
      </div>
      ${byCity[c].map(pointCardHTML).join("")}
    </div>
  `).join("");

  wrap.querySelectorAll(".point-btn.call").forEach(btn => {
    btn.addEventListener("click", () => { window.location.href = telHref(btn.dataset.tel); });
  });
  wrap.querySelectorAll(".point-btn.viewmap").forEach(btn => {
    btn.addEventListener("click", () => { window.open(mapsHref(btn.dataset.address, btn.dataset.city), "_blank", "noopener,noreferrer"); });
  });
}

function slugify(str) {
  return str.toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/* ==========================================================================
   13. DONACIONES — dinero
   ========================================================================== */
function accountCardHTML(title, lines, copyValue) {
  const rows = lines.map(l => `<div class="account-line"><span>${l.label}</span><b>${l.value}</b></div>`).join("");
  const copyBtn = copyValue ? `<button class="copy-btn" data-copy="${escapeHtml(copyValue)}">${t("donations.copy")}</button>` : "";
  return `<div class="account-card"><p class="account-card-title">${escapeHtml(title)}</p>${rows}${copyBtn}</div>`;
}

function renderDonationsScreen() {
  const wrap = document.getElementById("donations-content");

  const sec1 = accountCardHTML("Cruz Roja Colombiana", [
    { label: t("detail.bank"), value: "Davivienda" },
    { label: t("detail.account"), value: "0560455069996490" },
    { label: t("detail.nit"), value: "899999025-3" }
  ], "0560455069996490") +
  accountCardHTML("ABACO", [
    { label: t("detail.bank"), value: "Bancolombia" },
    { label: t("detail.account"), value: "04867105340" },
    { label: t("detail.nit"), value: "900326456-1" }
  ], "04867105340") +
  accountCardHTML("Banco de Alimentos de Bogotá", [
    { label: t("detail.breb"), value: "0091677852" }
  ], "0091677852");

  const sec2 = accountCardHTML("Fundación Colombia Luz y Sonrisas", [
    { label: t("detail.bank"), value: "Banco de Bogotá" },
    { label: t("detail.account"), value: "125128462" },
    { label: t("detail.nit"), value: "9020850963" }
  ], "125128462") +
  accountCardHTML("Corporación El Minuto de Dios", [
    { label: t("detail.bank"), value: "Davivienda" },
    { label: t("detail.account"), value: "0040 0024 0970" },
    { label: t("detail.nit"), value: "860.010.371-0" }
  ], "0040 0024 0970") +
  accountCardHTML("ABACO", [
    { label: t("detail.breb"), value: "0090989753" }
  ], "0090989753");

  const sec3 = accountCardHTML("Banco de Bogotá", [
    { label: t("detail.account"), value: "125128462" },
    { label: t("detail.swift"), value: "BBOGCOBB" },
    { label: t("detail.aba"), value: "021000089" }
  ], "Banco de Bogotá — Cuenta 125128462 — SWIFT BBOGCOBB — ABA 021000089");

  const sec4 = ONLINE_DONATION_ORG_IDS.map(id => {
    const org = ORGS.find(o => o.id === id);
    if (!org || !org.donateUrl) return "";
    return `
      <div class="online-link-row" data-url="${escapeHtml(org.donateUrl)}">
        <span class="online-link-name">${escapeHtml(orgName(org))}</span>
        <span class="online-link-arrow">${t("donations.openSite")} ↗</span>
      </div>`;
  }).join("");

  wrap.innerHTML = `
    <div class="donation-section">
      <h2 class="donation-section-title">${t("donations.sec1.title")}</h2>
      <p class="donation-section-sub">${t("donations.sec1.sub")}</p>
      ${sec1}
    </div>
    <div class="donation-section">
      <h2 class="donation-section-title">${t("donations.sec2.title")}</h2>
      <p class="donation-section-sub">${t("donations.sec2.sub")}</p>
      ${sec2}
    </div>
    <div class="donation-section">
      <h2 class="donation-section-title">${t("donations.sec3.title")}</h2>
      <p class="donation-section-sub">${t("donations.sec3.sub")}</p>
      ${sec3}
    </div>
    <div class="donation-section">
      <h2 class="donation-section-title">${t("donations.sec4.title")}</h2>
      <p class="donation-section-sub">${t("donations.sec4.sub")}</p>
      ${sec4}
    </div>
  `;

  wrap.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => copyToClipboard(btn.dataset.copy));
  });
  wrap.querySelectorAll(".online-link-row").forEach(row => {
    row.addEventListener("click", () => window.open(row.dataset.url, "_blank", "noopener,noreferrer"));
  });
}

/* ==========================================================================
   14. PERFIL
   ========================================================================== */
function renderProfileScreen() {
  const wrap = document.getElementById("profile-content");
  wrap.innerHTML = `
    <svg class="logo-heart" width="60" height="60" viewBox="0 0 24 24" aria-hidden="true">
      <g clip-path="url(#heartClip)">
        <rect x="0" y="0" width="24" height="11" fill="#FCD116"/>
        <rect x="0" y="11" width="24" height="5.5" fill="#003087"/>
        <rect x="0" y="16.5" width="24" height="6.5" fill="#CE1126"/>
      </g>
    </svg>
    <h1 class="profile-app-name">Colombia<span class="logo-accent">Ayuda</span></h1>
    <p class="profile-version">${t("profile.version")}</p>

    <div class="profile-section">
      <h2 class="profile-section-title">${t("profile.about.title")}</h2>
      <p class="profile-text">${t("profile.about.text")}</p>
    </div>

    <div class="profile-section">
      <h2 class="profile-section-title">${t("profile.verify.title")}</h2>
      <p class="profile-text">${t("profile.verify.official")}</p>
      <p class="profile-text"><b>${t("profile.verify.urlLabel")}</b> colombiaayuda.vercel.app</p>
      <p class="profile-text">${t("profile.verify.accounts")}</p>
      <p class="profile-text">${t("profile.verify.report")}</p>
      <span class="verify-badge">✓ ${t("profile.verify.badge")}</span>
    </div>

    <div class="profile-section">
      <h2 class="profile-section-title">${t("profile.sources.title")}</h2>
      <div class="source-list">
        <div class="source-item">🩹 ${t("profile.sources.cruzroja")}</div>
        <div class="source-item">🏛️ ${t("profile.sources.alcaldias")}</div>
        <div class="source-item">❤️ ${t("profile.sources.tigresas")}</div>
      </div>
    </div>

    <div class="profile-section">
      <h2 class="profile-section-title">${t("detail.instagram")}</h2>
      <div class="ig-row" id="profile-ig">
        <span class="ig-row-label">📷 Instagram</span>
        <span class="ig-row-handle">@tigresasmoviendoseconcorazon</span>
      </div>
    </div>

    <div class="profile-actions">
      <button class="profile-btn share" id="profile-share">🔗 ${t("profile.share")}</button>
      <button class="profile-btn report" id="profile-report">⚠️ ${t("profile.report")}</button>
    </div>

    <p class="legal-notice">${t("profile.legal")}</p>
    ${creditFooterHTML()}
  `;

  document.getElementById("profile-ig").addEventListener("click", () => {
    window.open("https://www.instagram.com/tigresasmoviendoseconcorazon/", "_blank", "noopener,noreferrer");
  });

  document.getElementById("profile-share").addEventListener("click", () => {
    const shareData = { title: "Colombia Ayuda", text: t("profile.shareText"), url: window.location.href };
    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      copyToClipboard(window.location.href);
    }
  });

  document.getElementById("profile-report").addEventListener("click", () => {
    const subject = encodeURIComponent(t("profile.reportSubject"));
    const body = t("profile.reportBody");
    window.location.href = `mailto:info@cocoralabs.com?subject=${subject}&body=${body}`;
  });
}

/* ==========================================================================
   11. EVENT WIRING / INIT
   ========================================================================== */
function wireEvents() {
  document.querySelectorAll(".lang-toggle").forEach(tg => {
    tg.addEventListener("click", () => setLang(state.lang === "es" ? "en" : "es"));
  });

  document.getElementById("btn-colombia").addEventListener("click", () => showScreen("screen-home"));
  document.getElementById("btn-abroad").addEventListener("click", () => showScreen("screen-home"));

  document.getElementById("bell-btn").addEventListener("click", openAlertsPanel);
  document.getElementById("alerts-close").addEventListener("click", closeAlertsPanel);
  document.getElementById("alerts-overlay").addEventListener("click", closeAlertsPanel);
  document.getElementById("alerts-mark-all").addEventListener("click", () => {
    state.alertsRead = true;
    updateAlertsBadge();
    closeAlertsPanel();
  });
  document.getElementById("refresh-btn").addEventListener("click", () => {
    document.getElementById("updated-min").textContent = "1";
    toast(t("toast.updated"));
  });

  document.getElementById("detail-back").addEventListener("click", () => showScreen(state.detailOrigin));
  document.getElementById("detail-share").addEventListener("click", () => toast(t("toast.shared")));
  document.getElementById("detail-menu").addEventListener("click", () => toast(t("toast.copied")));

  document.getElementById("donate-back").addEventListener("click", () => showScreen("screen-home"));
  document.getElementById("donate-heart").addEventListener("click", (e) => {
    e.target.textContent = e.target.textContent === "♡" ? "❤" : "♡";
  });

  document.querySelectorAll(".nav-back").forEach(btn => {
    btn.addEventListener("click", () => showScreen(btn.dataset.target));
  });

  wireScrollTop();
}

function wireScrollTop() {
  const btn = document.getElementById("scroll-top-btn");
  window.addEventListener("scroll", () => {
    if (document.getElementById("screen-splash").classList.contains("active")) return;
    btn.classList.toggle("show", window.scrollY > 300);
  }, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function init() {
  wireEvents();
  applyI18n();
  renderFilters();
  renderCityFilters();
  renderOrgList();
  renderBottomNavs();
  renderDonateScreen();
  renderMapScreen();
  renderDonationsScreen();
  renderProfileScreen();
  renderAlertsPanel();
  initSplashCounters();
}

document.addEventListener("DOMContentLoaded", init);

/* ==========================================================================
   15. PWA — registro del service worker
   (vive en app.js, no en un <script> inline, para respetar la
   Content-Security-Policy script-src 'self' del <head>)
   ========================================================================== */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
