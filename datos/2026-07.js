// Julio 2026
// Orgánico: Meta Business Suite y TikTok Studio (reporte publicado).
// Pauta: Administrador de anuncios de Meta, solo campañas "SEAL" (la cuenta también tiene FREELEADS).
REPORTE.agregar({
  id: "2026-07",
  nombre: "Julio 2026",
  corto: "Jul",

  conclusion: "Julio cuadruplicó los clientes potenciales: de 16 a 66, gracias al video de la campaña de visa.",
  kpis: ["pauta.leads", "redes.facebook.espectadores", "redes.instagram.interacciones", "pauta.impresiones"],

  pauta: {
    campanas: [
      { nombre: "Visa · julio", tipo: "captacion", inversion: 953.79, resultado: 66, alcance: 17377, img: "assets/img/2026-07-anuncio-visa.jpg" }
    ],
    totales: { impresiones: 21692, clics: 274, interacciones: 5402, reproducciones: 479 },
    estrella: {
      nombre: "Video de visa",
      img: "assets/img/2026-07-anuncio-visa.jpg", boton: "Ver detalles",
      titulo: "Tu próximo viaje a Estados Unidos empieza aquí",
      copy: "Tramita tu visa y tu próximo verano puede empezar a verse así. Te guiamos en todo tu trámite de visa de turista: preparación de tu DS-160 y tu entrevista, con acompañamiento real.",
      texto: "Concentró el 61% de los leads del mes.",
      leads: 40, alcance: 12684, clics: 161
    },
    siguiente_paso: "Escalar la campaña de visa con más videos de este estilo."
  },

  redes: {
    facebook: {
      espectadores: 22700, interacciones: 413, visualizaciones: 33020, clics_enlace: 277, visitas_pagina: 1100, seguidores_nuevos: 15,
      serie: { etiqueta: "Visualizaciones diarias", datos: [295,445,556,432,156,168,214,402,101,401,142,950,337,352,1861,4263,3187,4752,8412,2137,732,105,381,174,273,154,501,410,145,417,165] },
      ganador: {
        img: "assets/img/2026-07-ganador-facebook.jpg", url: "https://www.facebook.com/989122474503857",
        texto: "Reel “Te vas pensando que solo vas a aprender un idioma…”, parte 6 de la historia de Alexis en Irlanda.",
        stats: [["1,083", "Vistas"], ["940", "Alcance"], ["6", "Compartidos"]]
      },
      siguiente_paso: "Sostener este nivel de interacción con menos apoyo pagado."
    },
    instagram: {
      alcance: 8300, interacciones: 1063, visualizaciones: 21114, visitas_perfil: 147, clics_enlace: 1, seguidores_nuevos: 49,
      serie: { etiqueta: "Interacciones diarias", datos: [66,9,2,10,5,6,30,43,48,9,6,16,9,10,5,8,11,3,5,9,70,45,26,10,14,12,40,32,135,205,164] },
      ganador: {
        img: "assets/img/2026-07-ganador-instagram.jpg", url: "https://www.instagram.com/seal.internacional/reel/DbEMRdKDQNo/",
        texto: "“Aterrizas en Dublín cansado y con hambre…”, publicado el 21 de julio.",
        stats: [["10,958", "Vistas"], ["9,313", "Alcance"], ["655", "Interacciones"]]
      },
      siguiente_paso: "Replicar ese formato para no depender de una sola pieza."
    },
    tiktok: {
      visualizaciones: 8476, alcance: 6857, me_gusta: 292, compartidos: 5, visitas_perfil: 67,
      serie: { etiqueta: "Visualizaciones diarias", datos: [663,84,656,624,616,86,62,90,707,59,596,57,295,512,505,93,300,61,39,72,575,400,148,233,56,61,274,105,310,74,63] },
      ganador: {
        img: "assets/img/2026-07-ganador-tiktok.jpg", url: "https://www.tiktok.com/@seal.internacional",
        texto: "“Si aterrizas en Australia sin tramitar tu TFN…”, checklist del primer cheque, 8 de julio.",
        stats: [["630", "Vistas"], ["49", "Me gusta"]]
      },
      siguiente_paso: "Ajustar cadencia y formato para recuperar tracción."
    }
  }
});
