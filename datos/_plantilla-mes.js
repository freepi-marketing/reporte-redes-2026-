// PLANTILLA — copiar como datos/AAAA-MM.js y llenar. Este archivo NO se carga en la página.
// Cualquier bloque que no tenga datos se borra completo y la página simplemente no lo muestra.
// Números: sin comas ni signos ($1,296.76 → 1296.76). Los % y las barras se calculan solos
// contra el mes anterior; si la plataforma da su propio %, usar { v: valor, cambio: % }.
REPORTE.agregar({
  id: "AAAA-MM",                 // ej. "2026-10"
  nombre: "Mes AAAA",            // ej. "Octubre 2026"
  corto: "Mes",                  // ej. "Oct" (etiqueta corta de las gráficas)
  borrador: true,                // quitar esta línea para publicar el mes

  conclusion: "Una o dos frases: lo más importante del mes, con su causa.",
  // Las 3 tarjetas de color de arriba. Opciones: "pauta.leads", "pauta.cpl",
  // "comunidad.nuevos", "redes.<facebook|instagram|tiktok>.<métrica>"
  destacados: ["pauta.leads", "pauta.cpl", "comunidad.nuevos"],

  // Administrador de anuncios de Meta · mes calendario · SOLO campañas "SEAL" (no FREELEADS)
  // La inversión se usa para calcular el costo por lead y el reparto en %, pero NO se muestra en la página.
  pauta: {
    campanas: [
      // tipo: "captacion" (leads) · "crecimiento" (visitas al perfil, seguidores) · "trafico" (visitas al sitio)
      { nombre: "Visa · mes", tipo: "captacion", inversion: 0, resultado: 0, alcance: 0 },
      { nombre: "Interacción · mes", tipo: "crecimiento", inversion: 0, resultado: 0, unidad: "visitas al perfil", alcance: 0 }
    ],
    estrella: { nombre: "Nombre corto del anuncio", texto: "Qué lo hizo destacar.", leads: 0, costo: 0, alcance: 0 },
    siguiente_paso: "Qué se hará con la pauta el próximo mes."
  },

  // Meta Business Suite → mensajes (opcional)
  contactos: {
    facebook:  { organicos: 0, pagados: 0, nuevos: 0 },
    instagram: { organicos: 0, pagados: 0, nuevos: 0 },
    texto: "Lectura de los contactos del mes.",
    siguiente_paso: ""
  },

  // Google Ads (opcional; borrar si no hubo campaña)
  google_ads: {
    campana: "Nombre corto", impresiones: 0, clics: 0, ctr: 0, cpc: 0,
    texto: "",
    anuncio: { url: "sealinternacional.com/...", titulo: "", descripcion: "", enlaces: [] }
  },

  redes: {
    // Meta Business Suite → Estadísticas · mes calendario
    facebook: {
      visualizaciones: 0, espectadores: 0, interacciones: 0, clics_enlace: 0, visitas_perfil: 0, seguidores_nuevos: 0,
      reparto: { titulo: "Contactos del mes", partes: [["Pagados", 0, "0"], ["Orgánicos", 0, "0"]] }, // % del ancho, texto
      ganador: { img: "assets/img/AAAA-MM-ganador-facebook.jpg", texto: "Pieza y por qué funcionó.", stats: [["0", "Vistas"], ["0", "Alcance"]] },
      siguiente_paso: ""
    },
    instagram: {
      alcance: 0, interacciones: 0, visualizaciones: 0, clics_enlace: 0, visitas_perfil: 0, seguidores_nuevos: 0,
      reparto: { titulo: "¿De dónde vienen las visualizaciones?", partes: [["Orgánicas", 0, "0"], ["Desde anuncios", 0, "0"]] },
      ganador: { img: "assets/img/AAAA-MM-ganador-instagram.jpg", texto: "", stats: [["0", "Vistas"], ["0", "Interacciones"]] },
      siguiente_paso: ""
    },
    // TikTok Studio → Analíticas · mes calendario. Sin saldo neto de seguidores (regla SEAL).
    tiktok: {
      visualizaciones: 0, espectadores: 0, espectadores_nuevos: 0, me_gusta: 0, comentarios: 0, compartidos: 0, visitas_perfil: 0,
      reparto: { titulo: "¿De dónde vienen las visualizaciones?", partes: [["Para ti", 0], ["Búsqueda", 0], ["Perfil", 0]] },
      extras: [["0 mil", "Seguidores totales"], ["0 mil", "Me gusta acumulados"]],
      ganador: { img: "assets/img/AAAA-MM-ganador-tiktok.jpg", texto: "", stats: [["0", "Vistas"], ["0", "Me gusta"]] },
      siguiente_paso: ""
    }
  }
});
