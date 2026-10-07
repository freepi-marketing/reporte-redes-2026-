// Septiembre 2026
// Pauta: Administrador de anuncios de Meta, solo campañas "SEAL" (sacado el 2026-10-05).
// Redes y contactos: reporte de Javier del 2026-10-06 (Meta Business Suite, TikTok Studio, 1–30 sep).
// "cambio" = % que da la plataforma contra el periodo anterior.
// Google Ads: sin campañas activas en septiembre → no se muestra la sección.
REPORTE.agregar({
  id: "2026-09",
  nombre: "Septiembre 2026",
  corto: "Sep",

  conclusion: "El mejor mes de la pauta: 94 leads, gracias al nuevo video de visa. Los contactos por mensaje se duplicaron (104) y Facebook multiplicó por 2.5 su alcance; Instagram regresó a su nivel normal después del pico de agosto.",
  kpis: ["contactos.total", "pauta.leads", "redes.facebook.espectadores", "comunidad.nuevos"],
  comunidad: [["16", "Videos publicados en TikTok"], ["333", "Me gusta en TikTok", 22.9]],

  pauta: {
    campanas: [
      { nombre: "Visa · septiembre", tipo: "captacion", inversion: 996.90, resultado: 94, alcance: 27580, img: "assets/img/2026-09-anuncio-visa.jpg" },
      { nombre: "Estudia un año en Inglaterra", tipo: "trafico", inversion: 323.74, resultado: 243, unidad: "visitas a la landing", alcance: 28282, img: "assets/img/2026-09-anuncio-reino-unido.jpg" },
      { nombre: "Interacción · Dublín", tipo: "crecimiento", inversion: 71.75, resultado: 17, unidad: "visitas al perfil", alcance: 928, img: "assets/img/2026-09-top-ig-salario-dublin.jpg" }
    ],
    totales: { impresiones: 62985, clics: 832, interacciones: 14689, reproducciones: 1795 },
    estrella: {
      nombre: "Video reel de visa",
      img: "assets/img/2026-09-anuncio-visa.jpg", boton: "Más información",
      titulo: "¿Ya sabes cómo prepararte para tu cita?",
      copy: "Chicago, la nieve, el convertible en Palm Springs: el viaje ya está en tu cabeza. Lo que falta es la cita que lo hace posible.",
      texto: "El video nuevo de la campaña de visa trajo 84 de los 94 leads del mes.",
      leads: 84, alcance: 25926, clics: 376
    },
    siguiente_paso: "Mantener el video reel como anuncio principal de visa y preparar una segunda versión para que no se desgaste."
  },

  contactos: {
    facebook:  { organicos: 9, pagados: 92, nuevos: 98 },
    instagram: { organicos: 1, pagados: 2, nuevos: 3 },
    texto: "Más del doble que agosto (48). Facebook concentró casi todo: 92 de sus 101 contactos llegaron entre el 18 y el 22 de septiembre, y las conversaciones iniciadas subieron 120%.",
    siguiente_paso: "Los mensajes llegan en oleadas justo después de lanzar un anuncio. Reforzar la atención esos días para aprovechar cada contacto."
  },

  top_nota: "Contenido propio publicado en septiembre, ordenado por visualizaciones.",
  top: [
    { red: "instagram", titulo: "Reel: salario mínimo en Dublín, Stamp 2 y número PPS", fecha: "19 sep", stats: "1,890 vistas · 70 interacciones", url: "https://www.instagram.com/seal.internacional/reel/DdeoVF-CvHg/", img: "assets/img/2026-09-top-ig-salario-dublin.jpg" },
    { red: "instagram", titulo: "Reel: pasaporte vigente y aun así quedarte sin abordar", fecha: "8 sep", stats: "1,486 vistas · 14 interacciones", url: "https://www.instagram.com/reel/DdCtPyPFFQL/", img: "assets/img/2026-09-top-pasaporte-abordar.jpg" },
    { red: "facebook", titulo: "Reel: pasaporte vigente y aun así quedarte sin abordar", fecha: "8 sep", stats: "768 vistas · 4 interacciones", url: "https://www.facebook.com/reel/1592631555647440/", img: "assets/img/2026-09-top-pasaporte-abordar.jpg" },
    { red: "tiktok", titulo: "Carrusel: ¿qué campamento en Inglaterra le toca a tu hijo según su edad?", fecha: "23 sep", stats: "671 vistas · 15 me gusta", url: "https://www.tiktok.com/@seal.internacional/video/7688906404505128193", img: "assets/img/2026-09-top-tt-campamento.jpg" },
    { red: "tiktok", titulo: "Pasaporte vencido con visa americana vigente", fecha: "10 sep", stats: "613 vistas · 33 me gusta", url: "https://www.tiktok.com/@seal.internacional/video/7684088718516407560", img: "assets/img/2026-09-top-tt-pasaporte-vencido.jpg" }
  ],

  redes: {
    facebook: {
      visualizaciones: { v: 87500, cambio: 125.2 },
      espectadores: { v: 65900, cambio: 155.7 },
      interacciones: { v: 483, cambio: 74.4 },
      clics_enlace: { v: 812, cambio: 294.2 },
      visitas_perfil: { v: 829, cambio: 13.4 },
      seguidores_nuevos: { v: 44, cambio: 109.5 },
      reparto: { titulo: "Contactos del mes", partes: [["Pagados", 91.1, "92"], ["Orgánicos", 8.9, "9"]] },
      ganador: {
        img: "assets/img/2026-09-top-pasaporte-abordar.jpg", url: "https://www.facebook.com/reel/1592631555647440/",
        texto: "Reel “Pasaporte vigente y aun así quedarte sin abordar”, 8 de septiembre.",
        stats: [["768", "Vistas"], ["4", "Interacciones"]]
      },
      siguiente_paso: "El 29 de septiembre tuvo 27.5 mil visualizaciones en un solo día y al siguiente llegaron 28 seguidores nuevos: replicar ese tipo de pieza."
    },
    instagram: {
      // Verificado en Business Suite → Resultados → Instagram, 1–30 sep (2026-10-07). Bajadas respecto al pico de agosto.
      alcance: { v: 5700, cambio: -55.6 },
      visualizaciones: { v: 12100, cambio: -46.3 },
      interacciones: { v: 288, cambio: -81.3 },
      clics_enlace: { v: 32, cambio: 52.4 },
      visitas_perfil: { v: 115, cambio: -13.5 },
      seguidores_nuevos: { v: 22, cambio: -60.0 },
      ganador: {
        img: "assets/img/2026-09-top-ig-salario-dublin.jpg", url: "https://www.instagram.com/seal.internacional/reel/DdeoVF-CvHg/",
        texto: "Reel sobre el salario mínimo en Dublín, Stamp 2 y número PPS, 19 de septiembre. Trajo 12 seguidores nuevos.",
        stats: [["1,890", "Vistas"], ["70", "Interacciones"], ["23", "Guardados"]]
      },
      siguiente_paso: "Instagram volvió a su nivel normal después del pico de agosto. Los reels de datos prácticos de Irlanda son los que más se guardan y comparten: publicar más de esa línea para recuperar alcance."
    },
    tiktok: {
      visualizaciones: { v: 10300, cambio: 24.9 },
      me_gusta: { v: 333, cambio: 22.9 },
      comentarios: { v: 2, cambio: -60.0 },
      compartidos: { v: 12, cambio: 200.0 },
      visitas_perfil: { v: 36, cambio: -40.0 },
      ganador: {
        img: "assets/img/2026-09-top-tt-campamento.jpg", url: "https://www.tiktok.com/@seal.internacional/video/7688906404505128193",
        texto: "“Tu hijo de 6 años puede compartir campamento en Inglaterra”, 23 de septiembre. El más gustado fue “Pasaporte vencido con visa americana vigente” (33 me gusta).",
        stats: [["671", "Vistas"], ["15", "Me gusta"]]
      },
      siguiente_paso: "Las visualizaciones y los compartidos subieron con 16 videos en el mes. Falta convertir esas vistas en visitas al perfil: cerrar cada video con una invitación a seguir la cuenta."
    }
  }
});
