-- ============================================================
-- Colombia Ayuda — Supabase Seed SQL
-- Ejecutar en: Supabase → SQL Editor → New Query
-- ============================================================

-- Limpiar datos previos si existen
TRUNCATE TABLE organizations RESTART IDENTITY CASCADE;

-- ============================================================
-- ORGANIZACIONES COLOMBIA + EXTERIOR
-- ============================================================

INSERT INTO organizations (
  slug, active, urgency, flow,
  name_es, name_en, category,
  logo_initials, logo_color, logo_bg,
  description_es, description_en,
  website, donate_url,
  needs, donation_methods, collection_points,
  campaign_hashtag
) VALUES

-- 1. CRUZ ROJA COLOMBIANA
(
  'cruz-roja-colombiana', true, 'critica', 'both',
  'Cruz Roja Colombiana', 'Colombian Red Cross', 'emergencias',
  'CR', '#c0392b', '#fdecea',
  'Organización humanitaria líder en la respuesta a la emergencia. Campaña #TodosPorColombia. Activa en rescate, atención médica, distribución de víveres y reunificación familiar.',
  'Leading humanitarian organization responding to the emergency. Campaign #TodosPorColombia.',
  'https://cruzrojacolombiana.org',
  'https://ayuda.cruzrojacolombiana.org/emergencia-colombia-terremoto',
  ARRAY['alimentos','agua','medicinas','ropa','cobijas','colchonetas','higiene','sangre'],
  '{"online_card":{"available":true,"accepts_international":true,"currencies":["USD","EUR","COP"],"note_es":"Acepta tarjetas internacionales (Visa, Mastercard, Amex)"},"bank_transfer":{"available":true,"bank":"Davivienda","account_number":"0560455069996490","account_holder":"Sociedad Nacional de la Cruz Roja Colombiana","nit":"899999025-3"},"daviplata":{"available":true}}'::jsonb,
  '[{"city":"bogota","name":"Sede administrativa Cruz Roja","address":"Carrera 24 #73-38","hours":"24 horas","hours_24":true,"lat":4.6567,"lng":-74.0817,"accepts":["alimentos","agua","ropa","medicinas","cobijas"]},{"city":"bogota","name":"Bodega Cruz Roja","address":"Diagonal 79B #62-53","hours":"8am-9pm","hours_24":false,"lat":4.6893,"lng":-74.1017,"accepts":["alimentos","agua","ropa","cobijas"]},{"city":"bogota","name":"SAMU Sur","address":"Av. Carrera 68 #31-41 sur","hours":"8am-9pm","hours_24":false,"lat":4.6052,"lng":-74.1228,"accepts":["alimentos","agua","medicinas"]},{"city":"bogota","name":"SAMU Norte","address":"Calle 134 – Carrera 7B Bis #132-31","hours":"8am-9pm","hours_24":false,"lat":4.7407,"lng":-74.0391,"accepts":["alimentos","agua","medicinas"]},{"city":"bogota","name":"Palacio de los Deportes","address":"Calle 63 #59A-06","hours":"8am-9pm","hours_24":false,"lat":4.6598,"lng":-74.1025,"accepts":["alimentos","ropa","cobijas","higiene"]},{"city":"bogota","name":"Centro Salvamento Acuático","address":"Av. La Esmeralda #63-81","hours":"8am-9pm","hours_24":false,"lat":4.6958,"lng":-74.1138,"accepts":["alimentos","agua","cobijas"]},{"city":"bogota","name":"Unicentro","address":"Carrera 15 #124-30","hours":"8am-9pm","hours_24":false,"lat":4.7090,"lng":-74.0501,"accepts":["alimentos","ropa","cobijas","higiene"]},{"city":"bogota","name":"Universidad Jorge Tadeo Lozano","address":"Carrera 4 #22-61","hours":"8am-9pm","hours_24":false,"lat":4.6121,"lng":-74.0699,"accepts":["alimentos","ropa","higiene"]},{"city":"medellin","name":"Sede Medellín Cruz Roja","address":"Carrera 52 #25-310","hours":"8am-6pm","hours_24":false,"lat":6.2283,"lng":-75.5996,"accepts":["alimentos","agua","medicinas","ropa"]},{"city":"cali","name":"Banco de Sangre Imbanaco","address":"Carrera 38 Bis #5B2-04","hours":"7am-6pm","hours_24":false,"lat":3.3920,"lng":-76.5434,"accepts":["sangre"]},{"city":"manizales","name":"Cancha Auxiliar Palogrande","address":"Estación Bomberos Palogrande","hours":"8am-6pm","hours_24":false,"lat":5.0622,"lng":-75.4929,"accepts":["alimentos","ropa","cobijas","sangre"]},{"city":"armenia","name":"Sede Armenia Cruz Roja","address":"Av. Bolívar #23norte-60","hours":"8am-6pm","hours_24":false,"lat":4.5353,"lng":-75.6811,"accepts":["alimentos","agua","medicinas"]}]'::jsonb,
  '#TodosPorColombia'
),

-- 2. ABACO
(
  'abaco', true, 'alta', 'both',
  'ABACO — Bancos de Alimentos Colombia', 'ABACO — Colombian Food Banks', 'alimentos',
  'AB', '#d68910', '#fff4e5',
  'Asociación de Bancos de Alimentos de Colombia. Coordina el corredor humanitario hacia zonas afectadas. Activa en Armenia, Cali, Manizales, Medellín e Ibagué.',
  'Association of Colombian Food Banks. Coordinates the humanitarian food corridor to affected areas.',
  'https://abaco.org.co', 'https://abaco.org.co/donacion',
  ARRAY['alimentos','agua','dinero'],
  '{"bank_transfer":{"available":true,"bank":"Bancolombia","account_number":"04867105340","account_holder":"Abaco","nit":"900326456-1"},"breb":{"available":true,"key":"0090989753","bank":"Bancolombia"},"whatsapp":{"available":true,"number":"3132457978","note_es":"Para donaciones en especie de mayor volumen"}}'::jsonb,
  '[{"city":"armenia","name":"Banco de Alimentos Monseñor Roberto López","address":"Armenia, Quindío","hours":"8am-5pm","hours_24":false,"lat":4.5390,"lng":-75.6742,"accepts":["alimentos"]},{"city":"cali","name":"Fundación Arquidiocesana Banco de Alimentos","address":"Cali, Valle del Cauca","hours":"8am-5pm","hours_24":false,"lat":3.4516,"lng":-76.5320,"accepts":["alimentos"]},{"city":"manizales","name":"Banco de Alimentos de Manizales","address":"Manizales, Caldas","hours":"8am-5pm","hours_24":false,"lat":5.0710,"lng":-75.5138,"accepts":["alimentos"]},{"city":"medellin","name":"Fundación FUBAM","address":"Carrera 52 #30A-97","hours":"8am-5pm","hours_24":false,"lat":6.2270,"lng":-75.5862,"accepts":["alimentos"]},{"city":"medellin","name":"Fundación Saciar","address":"Carrera 50 #25-261","hours":"8am-5pm","hours_24":false,"lat":6.2467,"lng":-75.5634,"accepts":["alimentos"]},{"city":"ibague","name":"Banco Arquidiocesano de Ibagué","address":"Ibagué, Tolima","hours":"8am-5pm","hours_24":false,"lat":4.4389,"lng":-75.2322,"accepts":["alimentos"]}]'::jsonb,
  NULL
),

-- 3. BANCO ALIMENTOS BOGOTÁ
(
  'banco-alimentos-bogota', true, 'alta', 'both',
  'Banco de Alimentos de Bogotá', 'Bogotá Food Bank', 'alimentos',
  'BA', '#1e8449', '#eafaf1',
  'Campaña de emergencia activa. Acepta donaciones internacionales vía web. Botón de donación disponible en app Rappi ($20.000–$120.000 COP).',
  'Emergency campaign active. Accepts international donations online. Donation button available on Rappi app.',
  'https://bancodealimentos.org.co', 'https://bancodealimentos.org.co/donaciones-emergencia',
  ARRAY['alimentos','dinero'],
  '{"online_card":{"available":true,"accepts_international":true,"url":"https://bancodealimentos.org.co/donaciones-emergencia"},"breb":{"available":true,"key":"0091677852","bank":"Bancolombia"},"rappi":{"available":true,"note_es":"Botón de donación en app Rappi. Montos: $20.000 a $120.000 COP"}}'::jsonb,
  '[]'::jsonb,
  NULL
),

-- 4. ALCALDÍA CALI
(
  'alcaldia-cali', true, 'critica', 'colombia',
  'Alcaldía de Cali — Plazoleta Jairo Varela', 'Cali City Hall — Jairo Varela Plaza', 'gobierno',
  'CA', '#993556', '#fbeaf0',
  'Cali es la ciudad más afectada con 56 edificios colapsados. Plazoleta Jairo Varela como punto central. Se necesitan materiales para rescatistas: guantes, cascos, agua.',
  'Cali is the most affected city with 56 collapsed buildings.',
  'https://www.cali.gov.co', 'https://www.cali.gov.co',
  ARRAY['agua','guantes','cascos','colchonetas','herramientas','alimentos'],
  '{"in_person":{"available":true,"note_es":"Solo donación en especie en el punto físico"}}'::jsonb,
  '[{"city":"cali","name":"Plazoleta Jairo Varela","address":"Centro, Cali","hours":"8am-8pm","hours_24":false,"lat":3.4516,"lng":-76.5320,"accepts":["agua","guantes","cascos","colchonetas","alimentos"]}]'::jsonb,
  NULL
),

-- 5. ALCALDÍA PEREIRA
(
  'alcaldia-pereira', true, 'critica', 'colombia',
  'Alcaldía de Pereira — 7 Puntos de Acopio', 'Pereira City Hall', 'gobierno',
  'PE', '#854F0B', '#FAEEDA',
  'Pereira es la ciudad con más víctimas. 7 puntos distribuidos en barrios. Línea personas desaparecidas: +57 316 478 1821.',
  'Pereira has the highest death toll. 7 collection points across neighborhoods.',
  'https://www.pereira.gov.co', 'https://www.pereira.gov.co',
  ARRAY['alimentos','agua','ropa','cobijas','medicinas'],
  '{"in_person":{"available":true},"missing_persons_line":"+57 316 478 1821"}'::jsonb,
  '[{"city":"pereira","name":"Café Consota","address":"Manzanas 7 y 8, Villa Consota, Cuba","hours":"8am-6pm","hours_24":false,"lat":4.7923,"lng":-75.7075,"accepts":["alimentos","agua","ropa"]},{"city":"pereira","name":"Café Perla del Otún","address":"Diagonal iglesia 2.500 Lotes, Cuba","hours":"8am-6pm","hours_24":false,"lat":4.7899,"lng":-75.7102,"accepts":["alimentos","agua"]},{"city":"pereira","name":"Café El Remanso","address":"Av. principal El Remanso, junto Centro de Salud","hours":"8am-6pm","hours_24":false,"lat":4.8011,"lng":-75.6943,"accepts":["alimentos","medicinas"]},{"city":"pereira","name":"Café Kennedy","address":"Parque principal barrio Kennedy","hours":"8am-6pm","hours_24":false,"lat":4.8122,"lng":-75.6987,"accepts":["alimentos","agua"]},{"city":"pereira","name":"Café Ormaza","address":"Calle 3 Bis 5-38, Av. del Río","hours":"8am-6pm","hours_24":false,"lat":4.8168,"lng":-75.6952,"accepts":["alimentos","ropa"]},{"city":"pereira","name":"Café San Nicolás","address":"Carrera 14 Bis #28-38","hours":"8am-6pm","hours_24":false,"lat":4.8205,"lng":-75.7001,"accepts":["alimentos","cobijas"]},{"city":"pereira","name":"Café Comuna del Café","address":"Carrera 3 con Calle 59A, Parque Industrial","hours":"8am-6pm","hours_24":false,"lat":4.7941,"lng":-75.6820,"accepts":["alimentos","agua","cobijas"]}]'::jsonb,
  NULL
),

-- 6. ALCALDÍA MANIZALES
(
  'alcaldia-manizales', true, 'alta', 'colombia',
  'Alcaldía de Manizales — Albergues y Hemocentro', 'Manizales City Hall', 'gobierno',
  'MZ', '#0F6E56', '#E1F5EE',
  '3 albergues temporales activos. Hemocentro del Café para donación de sangre. Prioridad: sangre O+ y O-.',
  '3 temporary shelters active. Hemocentro del Café for blood donation. Priority: O+ and O-.',
  'https://www.manizales.gov.co', 'https://www.manizales.gov.co',
  ARRAY['alimentos','cobijas','colchonetas','sangre'],
  '{"in_person":{"available":true}}'::jsonb,
  '[{"city":"manizales","name":"Coliseo Mayor — Albergue","address":"Coliseo Mayor de Manizales","hours":"24 horas","hours_24":true,"lat":5.0680,"lng":-75.5143,"accepts":["alimentos","cobijas","colchonetas"]},{"city":"manizales","name":"Coliseo Menor — Albergue","address":"Coliseo Menor de Manizales","hours":"24 horas","hours_24":true,"lat":5.0672,"lng":-75.5139,"accepts":["alimentos","cobijas"]},{"city":"manizales","name":"SIC de Aranjuez — Albergue","address":"SIC Aranjuez, Manizales","hours":"24 horas","hours_24":true,"lat":5.0551,"lng":-75.4918,"accepts":["alimentos","cobijas","colchonetas"]},{"city":"manizales","name":"Hemocentro del Café","address":"Hemocentro del Café, Manizales","hours":"7am-5pm","hours_24":false,"lat":5.0699,"lng":-75.5132,"accepts":["sangre"],"blood_priority":["O+","O-"]}]'::jsonb,
  NULL
),

-- 7. ALCALDÍA BARRANQUILLA
(
  'alcaldia-barranquilla', true, 'media', 'colombia',
  'Alcaldía de Barranquilla', 'Barranquilla City Hall', 'gobierno',
  'BQ', '#185FA5', '#E6F1FB',
  'Centro de recepción en Barranquillita. La Oficina Distrital de Gestión del Riesgo coordina el traslado de ayudas.',
  'Reception center at Barranquillita. District Risk Management coordinates transfer of aid.',
  'https://www.barranquilla.gov.co', 'https://www.barranquilla.gov.co',
  ARRAY['alimentos','agua','medicinas','higiene','ropa','colchonetas'],
  '{"in_person":{"available":true}}'::jsonb,
  '[{"city":"barranquilla","name":"Centro Recepción Barranquillita","address":"Carrera 43 #6-120, Barranquillita","hours":"8am-6pm","hours_24":false,"lat":10.9878,"lng":-74.8073,"accepts":["alimentos","agua","medicinas","higiene","ropa","colchonetas"]}]'::jsonb,
  NULL
),

-- 8. ALCALDÍA BOGOTÁ
(
  'alcaldia-bogota', true, 'alta', 'colombia',
  'Alcaldía Mayor de Bogotá', 'Bogotá Mayor Office', 'gobierno',
  'AB', '#1a5276', '#e8f4fd',
  'Puntos adicionales en La Castellana y Codabas. Donaciones para enviar a Cali, Manizales, Pereira y Quibdó.',
  'Additional collection points. Donations sent to Cali, Manizales, Pereira and Quibdó.',
  'https://bogota.gov.co', 'https://bogota.gov.co/mi-ciudad/seguridad/puntos-de-donacion-en-bogota-para-damnificados-terremoto-en-colombia',
  ARRAY['alimentos','agua','cobijas','colchonetas','higiene','ropa'],
  '{"in_person":{"available":true}}'::jsonb,
  '[{"city":"bogota","name":"Codabas","address":"Carrera 7 #180-75, Módulo 2 Piso 2","hours":"8am-9pm","hours_24":false,"lat":4.7720,"lng":-74.0428,"accepts":["alimentos","agua"]},{"city":"bogota","name":"La Castellana","address":"Carrera 47 #94-68","hours":"8am-9pm","hours_24":false,"lat":4.6870,"lng":-74.0812,"accepts":["alimentos","ropa","cobijas"]}]'::jsonb,
  NULL
),

-- 9. UNICEF
(
  'unicef-colombia', true, 'alta', 'exterior',
  'UNICEF Colombia', 'UNICEF Colombia', 'infancia',
  'UN', '#185FA5', '#E6F1FB',
  'Organización de la ONU para proteger niños afectados. Acepta donaciones desde más de 190 países.',
  'UN organization protecting affected children. Accepts donations from 190+ countries.',
  'https://www.unicef.org', 'https://www.unicef.org/es/donaciones',
  ARRAY['dinero'],
  '{"online_card":{"available":true,"accepts_international":true,"currencies":["USD","EUR","GBP","CAD","AUD"],"url":"https://www.unicef.org/es/donaciones","note_es":"Acepta tarjetas internacionales y PayPal en múltiples monedas"}}'::jsonb,
  '[]'::jsonb, NULL
),

-- 10. WORLD CENTRAL KITCHEN
(
  'world-central-kitchen', true, 'alta', 'exterior',
  'World Central Kitchen', 'World Central Kitchen', 'alimentacion',
  'WK', '#1e8449', '#eafaf1',
  'Fundada por el chef José Andrés. Comidas frescas de emergencia. Acepta donaciones desde México, EEUU, España y toda Latinoamérica.',
  'Founded by Chef José Andrés. Fresh emergency meals. Accepts donations from Mexico, USA, Spain and Latin America.',
  'https://wck.org', 'https://wck.org/relief/colombia-earthquake-2026',
  ARRAY['dinero'],
  '{"online_card":{"available":true,"accepts_international":true,"currencies":["USD","EUR","MXN"],"url":"https://wck.org/relief/colombia-earthquake-2026"}}'::jsonb,
  '[]'::jsonb, NULL
),

-- 11. DIRECT RELIEF
(
  'direct-relief', true, 'alta', 'exterior',
  'Direct Relief', 'Direct Relief', 'salud',
  'DR', '#d68910', '#fff4e5',
  'Provee medicamentos y suministros médicos a centros de salud en Cali y Pereira. Verificada por Telemundo.',
  'Provides medicines and medical supplies to health centers in Cali and Pereira. Verified by Telemundo.',
  'https://www.directrelief.org', 'https://www.directrelief.org/emergency/colombia-earthquake-response',
  ARRAY['dinero'],
  '{"online_card":{"available":true,"accepts_international":true,"currencies":["USD"],"url":"https://www.directrelief.org/emergency/colombia-earthquake-response","note_es":"Acepta Visa, Mastercard, Amex. Deducible de impuestos en EEUU"}}'::jsonb,
  '[]'::jsonb, NULL
),

-- 12. AMERICARES
(
  'americares', true, 'alta', 'exterior',
  'Americares', 'Americares', 'salud',
  'AM', '#c0392b', '#fdecea',
  'Equipo desplegado en Cali. Medicamentos, suministros médicos y fondos de emergencia. Oficinas en Bogotá y Barranquilla.',
  'Team deployed in Cali. Medicines, medical supplies and emergency funding. Offices in Bogotá and Barranquilla.',
  'https://www.americares.org', 'https://www.americares.org/donate/?fund=colombia-earthquake-2026',
  ARRAY['dinero'],
  '{"online_card":{"available":true,"accepts_international":true,"currencies":["USD"],"url":"https://www.americares.org/donate/?fund=colombia-earthquake-2026","note_es":"ONG con calificación máxima en transparencia (Charity Navigator)"}}'::jsonb,
  '[]'::jsonb, NULL
),

-- 13. GLOBALGIVING
(
  'global-giving', true, 'media', 'exterior',
  'GlobalGiving — Recuperación Colombia', 'GlobalGiving — Colombia Recovery', 'recuperacion',
  'GG', '#534AB7', '#EEEDFE',
  'Plataforma para recuperación a largo plazo. Fondos distribuidos entre organizaciones locales verificadas. Permite donaciones recurrentes.',
  'Platform for long-term recovery. Funds distributed among verified local organizations. Allows recurring donations.',
  'https://www.globalgiving.org', 'https://www.globalgiving.org/projects/colombia-earthquake-relief',
  ARRAY['dinero'],
  '{"online_card":{"available":true,"accepts_international":true,"currencies":["USD","EUR","GBP"],"url":"https://www.globalgiving.org/projects/colombia-earthquake-relief","note_es":"Acepta PayPal, tarjetas y transferencias. Deducible en EEUU y UK"}}'::jsonb,
  '[]'::jsonb, NULL
),

-- 14. WFP
(
  'wfp-colombia', true, 'alta', 'exterior',
  'Programa Mundial de Alimentos — Colombia', 'World Food Programme — Colombia', 'alimentacion',
  'WF', '#854F0B', '#FAEEDA',
  'Agencia de la ONU. Trabaja con autoridades colombianas para atender inseguridad alimentaria en zonas afectadas.',
  'UN agency. Works with Colombian authorities to address food insecurity in affected areas.',
  'https://www.wfp.org', 'https://www.wfp.org/donate',
  ARRAY['dinero'],
  '{"online_card":{"available":true,"accepts_international":true,"currencies":["USD","EUR"],"url":"https://www.wfp.org/donate","note_es":"Agencia ONU. Acepta tarjetas internacionales y PayPal"}}'::jsonb,
  '[]'::jsonb, NULL
),

-- 15. ALL HANDS & HEARTS
(
  'all-hands-hearts', true, 'media', 'exterior',
  'All Hands & Hearts', 'All Hands & Hearts', 'rescate',
  'AH', '#0F6E56', '#E1F5EE',
  'Voluntarios de rescate en Colombia desde el 10 de agosto. Apoyan equipos con equipamiento especializado.',
  'Rescue volunteers in Colombia since August 10. Supporting teams with specialized equipment.',
  'https://www.allhandsandhearts.org', 'https://www.allhandsandhearts.org/programs/colombia-earthquake',
  ARRAY['dinero'],
  '{"online_card":{"available":true,"accepts_international":true,"currencies":["USD"],"url":"https://www.allhandsandhearts.org/programs/colombia-earthquake"}}'::jsonb,
  '[]'::jsonb, NULL
),

-- 16. PLAN COLOMBIA
(
  'fundacion-plan-colombia', true, 'media', 'exterior',
  'Fundación Plan Colombia', 'Plan International Colombia', 'infancia',
  'PL', '#c0392b', '#fdecea',
  'ONG internacional activa en Colombia. Acepta donaciones desde el extranjero con enfoque en niños y mujeres. Campaña "Colombia se levanta".',
  'International NGO active in Colombia. Accepts international donations focused on children and women.',
  'https://plan.org.co', 'https://plan.org.co/donaciones-emergencia',
  ARRAY['dinero'],
  '{"online_card":{"available":true,"accepts_international":true,"note_es":"Acepta tarjetas internacionales desde LATAM, EEUU y Europa"}}'::jsonb,
  '[]'::jsonb, NULL
);

-- ============================================================
-- CONFIRMACIÓN
-- ============================================================
SELECT
  flow,
  COUNT(*) as total,
  COUNT(CASE WHEN urgency = 'critica' THEN 1 END) as criticas,
  COUNT(CASE WHEN urgency = 'alta' THEN 1 END) as altas,
  COUNT(CASE WHEN urgency = 'media' THEN 1 END) as medias
FROM organizations
GROUP BY flow
ORDER BY flow;
