// Junio 2026 — mes BASE: no se muestra como pestaña, solo sirve para comparar julio.
// Cifras tal como se publicaron en el reporte de junio vs julio.
REPORTE.agregar({
  id: "2026-06",
  nombre: "Junio 2026",
  corto: "Jun",
  oculto: true,

  pauta: {
    campanas: [
      { nombre: "Clientes potenciales · junio", tipo: "captacion", inversion: 2000, resultado: 16 }
    ]
  },

  redes: {
    facebook:  { espectadores: 34200, interacciones: 403, visualizaciones: 47700, clics_enlace: 555, visitas_pagina: 2600 },
    instagram: { alcance: 17800, interacciones: 567, visualizaciones: 29200, visitas_perfil: 271, clics_enlace: 196 },
    tiktok:    { visualizaciones: 12016, alcance: 10258, me_gusta: 388, compartidos: 18, visitas_perfil: 89 }
  }
});
