// Agosto 2026
// Orgánico y contactos: Meta Business Suite y TikTok Studio (reporte publicado). "cambio" = % que da la plataforma.
// Pauta: Administrador de anuncios de Meta, solo campañas "SEAL" (la cuenta también tiene FREELEADS).
// Google Ads: panel de Google Ads (reporte publicado).
REPORTE.agregar({
  id: "2026-08",
  nombre: "Agosto 2026",
  corto: "Ago",

  conclusion: "Agosto fue el mejor mes de Instagram: el alcance creció 71% y la comunidad de Facebook e Instagram sumó 82 seguidores nuevos. La pauta de visa trajo 40 leads.",
  kpis: ["contactos.total", "redes.instagram.alcance", "redes.instagram.interacciones", "google.clics"],
  comunidad: [["10 mil", "TikTok · seguidores"], ["87 mil", "TikTok · me gusta"], ["5 mil", "Espectadores nuevos TikTok", 9.1]],

  pauta: {
    campanas: [
      { nombre: "Visa · agosto", tipo: "captacion", inversion: 1296.76, resultado: 40, alcance: 18807, img: "assets/img/2026-08-anuncio-visa.jpg" }
    ],
    totales: { impresiones: 23596, clics: 226, interacciones: 4669, reproducciones: 580 },
    estrella: {
      nombre: "Video de asesoría de visa",
      img: "assets/img/2026-08-anuncio-visa.jpg", boton: "Registrarte",
      titulo: "La cita puede tardar meses. Muévete hoy.",
      copy: "¿Este verano lo viste pasar por las historias de otros? Que el próximo sea el tuyo. Empieza por saber en qué punto estás.",
      texto: "Trajo 39 de los 40 leads del mes.",
      leads: 39, alcance: 16789, clics: 198
    },
    siguiente_paso: "Menos leads que en julio con un solo anuncio activo: probar un video nuevo en la campaña de visa."
  },

  contactos: {
    facebook:  { organicos: 7, pagados: 38, nuevos: 43 },
    instagram: { organicos: 2, pagados: 1, nuevos: 3 },
    texto: "La mayoría siguen llegando por anuncios, aunque los contactos orgánicos de Facebook más que se duplicaron (de 3 a 7). Las conversaciones iniciadas en Facebook bajaron 34.8%.",
    siguiente_paso: "Reforzar los llamados a conversación en el contenido orgánico para no depender de la pauta."
  },

  google_ads: {
    campana: "Asesorías · agosto",
    impresiones: 1345, clics: 74, ctr: 5.50, cpc: 11.63,
    texto: "El pico de impresiones y clics fue entre el 25 y el 31 de agosto.",
    anuncio: {
      url: "sealinternacional.com/asesoria/visa-americana",
      titulo: "Asesoría Visa Americana - Prepárate: Visa Americana…",
      descripcion: "No realizamos trámites. Te orientamos para que tú presentes tu solicitud con claridad. Asesoría 1:1 con especialista: evaluamos tu caso y te preparamos. Costo $650 MXN. Atención por WhatsApp.",
      enlaces: ["Prepara tu entrevista", "Revisión de documentos", "Asesoría personalizada", "17 años ayudando"]
    }
  },

  redes: {
    facebook: {
      espectadores: { v: 25900, cambio: 14.0 },
      interacciones: { v: 277, cambio: -32.9 },
      visualizaciones: { v: 39000, cambio: 18.2 },
      clics_enlace: { v: 206, cambio: -25.6 },
      visitas_perfil: { v: 756, cambio: -28.5 },
      seguidores_nuevos: { v: 21, cambio: 40.0 },
      reparto: { titulo: "Contactos del mes", partes: [["Pagados", 84.4, "38"], ["Orgánicos", 15.6, "7"]] },
      siguiente_paso: "El alcance creció pero las interacciones bajaron: toca revisar formatos y llamados a la acción."
    },
    instagram: {
      alcance: { v: 14200, cambio: 71.3 },
      interacciones: { v: 1700, cambio: 56.6 },
      visualizaciones: { v: 23600, cambio: 12.0 },
      clics_enlace: 21,
      visitas_perfil: { v: 140, cambio: -4.8 },
      seguidores_nuevos: { v: 61, cambio: 24.5 },
      reparto: { titulo: "¿De dónde vienen las visualizaciones?", partes: [["Orgánicas", 85.7, "19,120"], ["Desde anuncios", 14.3, "3,179"]] },
      siguiente_paso: "El mejor mes de la cuenta. Sostener la mezcla de contenido orgánico con el empuje de anuncios."
    },
    tiktok: {
      visualizaciones: { v: 8300, cambio: -2.3 },
      espectadores: { v: 6400, cambio: 37.9 },
      espectadores_nuevos: { v: 5000, cambio: 9.1 },
      me_gusta: { v: 271, cambio: -7.2 },
      comentarios: { v: 5, cambio: 400.0 },
      compartidos: { v: 4, cambio: -20.0 },
      visitas_perfil: { v: 60, cambio: -10.4 },
      reparto: { titulo: "¿De dónde vienen las visualizaciones?", partes: [["Para ti", 87], ["Búsqueda", 11.5], ["Perfil", 1.5]] },
      siguiente_paso: "Las visualizaciones se mantuvieron y los espectadores crecieron 38%. Seguir ajustando cadencia y formato."
    }
  }
});
