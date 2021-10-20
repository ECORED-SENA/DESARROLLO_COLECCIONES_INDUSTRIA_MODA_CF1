export default {
  global: {
    componenteFormativo: 'Fundamentos del vestuario I',
    descripcionCurso:
      'Es importante que el aprendiz SENA, en el momento de ingresar a su formación clarifique los elementos fundamentales que formarán parte integral como Tecnólogo en Desarrollo de Colecciones para la Industria de la Moda, teniendo presente que la industria de la moda es una de las actividades comerciales con la mayor confluencia de diferentes sectores económicos y que tiene una fuerte incidencia en entornos como la sociedad, la religión, la política, la cultura y el comercio.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Introducción al mundo de la moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '¿Está a la moda?',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Conocer de moda',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Empezar a investigar de moda',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Concepto de moda',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Métodos para generar ideas',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Diseñar',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Cuerpos y siluetas',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Proporciones y líneas',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Color',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Tejidos y texturas',
            hash: 't_1_11',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: 'Representación gráfica de las ideas',
            hash: 't_1_12',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Historia de la moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción a la historia de la moda',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Culturas antiguas: Egipto, Mesopotamia, Grecia, Roma',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Edad Media',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Renacimiento - Barroco – Rococó',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Siglos XVIII y XIX',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'La moda en el siglo XX: 1910 a 2000',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'La moda en el siglo XXI',
            hash: 't_2_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Acosta, M. (2012). Historia Del Vestido. ',
      link: 'http://comunicacioneducativamaster.blogspot.com/',
    },
    {
      referencia:
        'Aleatório comida e outras coisas. (2015a). Moda Años 80 [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=YtZbuXCR2Gw',
    },
    {
      referencia:
        'Aleatório comida e outras coisas. (2015b). Moda Anos 90 [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=8hR02rBJ9Hs',
    },
    {
      referencia:
        'Allante, P. (2007). Historia de la moda Cap 3 Pelucas y encajes [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=hv_TOh-YyYs&feature=youtu.be',
    },
    {
      referencia: 'Baldovino, P. (2020). SENA, Itaguí, Antioquia.',
    },
    {
      referencia:
        'Big Data: ¿En qué consiste? Su importancia, desafíos y gobernabilidad. (s.f.). Powerdata. ',
      link: 'https://www.powerdata.es/big-data',
    },
    {
      referencia:
        'British Pathé. (2011). Paco Rabanne Metal Dresses (1969 Original Footage) [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=kHiCcv5g0n8&feature=youtu.be',
    },
    {
      referencia:
        'British Pathé. (2014). Fashion House (1950-1969) [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=63Vxs02Qq6w&feature=youtu.be',
    },
    {
      referencia:
        'Calvo, F. S. (2016). El nuevo vestir: cómo se hace y se lleva la moda hoy. (R. Editores (Ed.)).',
    },
    {
      referencia:
        'Carchano, F. (2015). MUJER Y MODA EN EL SIGLO XXI [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=Nxojjjb-pqM',
    },
    {
      referencia:
        'Cárdenas, L. (2017). A cada década su tendencia. Así se resume un siglo de moda | itfashion.com. It Fashion. ',
      link:
        'https://www.itfashion.com/moda/a-cada-decada-su-tendencia-asi-se-resume-un-siglo-de-moda/',
    },
    {
      referencia: 'Chanel. (s.f.). Inside CHANEL [video]. YouTube. ',
      link: 'https://www.youtube.com/playlist?list=PLEE61EDB90F0AA88F',
    },
    {
      referencia: 'CountDisco1. (2009). 1930 Fashion Show [video]. YouTube.  ',
      link: 'https://www.youtube.com/watch?v=9b8DdMHLzEU',
    },
    {
      referencia:
        'Definicion.de. (s.f.). Definicion.de. Definicion.De. Retrieved July 6, 2020, from ',
      link: 'https://definicion.de/sastre/',
    },
    {
      referencia:
        'Departamento de Historia del Instituto Nacional. (2018). Primeras civilizaciones - La moda en el Antiguo Egipto [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=R5xXX92AkmE&t=106s',
    },
    {
      referencia:
        'Dueñas, S., Perdomo-Ortiz, J., & Villa, L. (2014). El concepto de consumo socialmente responsable y su medición. Una revisión de la literatura. Estudios Gerenciales, 30(132), 287–300. ',
      link: 'https://doi.org/10.1016/j.estger.2014.01.022',
    },
    {
      referencia:
        'Dyoniss99. (2010). Coco Chanel vintage fashion shows [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=4LC5VbEJm6I',
    },
    {
      referencia:
        'Estilocracia. (2019). Cómo era la moda de los años 90s: ¿qué looks sobrevivieron y se sigue usando? [video]. YouTube. [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=sjjGogV1tME&feature=youtu.be',
    },
    {
      referencia:
        'FabulousSims2. (2012). Fashion 50’s 60’s 70’s 80’s 90’s and today [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=PM2UTIXdGH8&feature=youtu.be',
    },
    {
      referencia:
        'FADU – UBA. (2020). Cuerpo, distancia y protección: Un recorrido histórico. Historia del traje. ',
      link: 'https://historiadeltraje.com/category/renacimiento/',
    },
    {
      referencia:
        'Farias, G. (2019a). Industria Textil y Moda 4.0 - Presentación Innovation Fashion Forum [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=w3zW24xEnNY',
    },
    {
      referencia:
        'Farias, G. (2019b). Las cinco automatizaciones que lanzan la moda 4.0. Gabriel Farias Iribarren. ',
      link:
        'https://gabrielfariasiribarren.com/las-cinco-automatizaciones-que-lanzan-la-moda-4-0/',
    },
    {
      referencia:
        'Farlex. (s.f.). The free dictionary. The Free Dictionary by Farlex. Retrieved July 6, 2020, from ',
      link: 'https://es.thefreedictionary.com/cosmética',
    },
    {
      referencia:
        'Fashion – Bloshka. (s.f.). Bloshka. Retrieved July 6, 2020, from ',
      link: 'http://bloshka.info/category/fashion/',
    },
    {
      referencia:
        'Fedac. (s.f.). Vestimenta en los siglos XVIII y XIX – Cultura Tradicional. Fedac. Retrieved July 1, 2020, from ',
      link: 'https://culturatradicionalgc.org/vestimenta-siglos-xviii/',
    },
    {
      referencia:
        'Fernández, J. (1988). Arte efímero y espacio estético (Anthropos).',
    },
    {
      referencia:
        'Fundación Pro Tejer. (2018). Innovación en la industria textil [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=zJg8k5-QJOw',
    },
    {
      referencia:
        'Geringer, S., Nieves, M. M. J. de, & Soto, Á. L. (2001). La moda: color, estilo y diseño (3a. ed.). McGraw-Hill Interamericana. ',
      link:
        'http://ebookcentral.proquest.com/lib/senavirtualsp/detail.action?docID=3195044',
    },
    {
      referencia: 'Glam Inc. (s.f.). Glam, Inc. [video]. YouTube. ',
      link: 'https://www.youtube.com/channel/UCrKE6lsllHfJgcUexz3BBhA',
    },
    {
      referencia:
        'Glamour. (2018). 100 Years of French Fashion | Glamour [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=7IP5zAefiiQ&feature=youtu.be',
    },
    {
      referencia:
        'Glamourdaze. (2010). 1950’s Fashion - The Designers [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=Tyqg2XcoeJw',
    },
    {
      referencia: 'Gómez, S. (2020). SENA, Itagüí, Antioquia.',
    },
    {
      referencia:
        'Gwilt, A. (2014). Moda sostenible: una guía práctica (E. G. Gili (Ed.)).',
    },
    {
      referencia:
        'Haztelalista. (2016). 10 cosas de los años 90 que ojalá volvieran [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=HE7PatQjKn4',
    },
    {
      referencia:
        'Historia de la Moda — RENACIMIENTO Siglo XIV a XVI. (s.f.). Retrieved June 30, 2020, from ',
      link:
        'https://asainzfashionhistory.tumblr.com/post/154085025148/renacimiento-siglo-xiv-a-xvi',
    },
    {
      referencia:
        'Hong, Z. (2019). Fashion History: 1900-1920 [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=ViNDmCX3DOw&feature=youtu.be',
    },
    {
      referencia: 'Inexmoda. (s.f.). Inexmoda [video]. YouTube. ',
      link: 'https://www.youtube.com/c/inexmoda/videos',
    },
    {
      referencia: 'Inexmoda. (2002). Glosario textil y de moda. Inexmoda.',
    },
    {
      referencia:
        'Inexmoda, & Bena, M. (2019). Moda 4.0 para Dummies - Colombiamoda 2019 [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=id9qip1mWZM',
    },
    {
      referencia:
        'Instituto de la indumentaria de Kioto. (2004). Moda desde el siglo XVIII al siglo XX. Köln : Tashen.',
    },
    {
      referencia: 'Jensinsanity. (2011). 80s fashion [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=XxsXi5_WZIU',
    },
    {
      referencia:
        'JJlife’s. (2016). Los felices años 20 Documental [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=h8XQtzswhTU&feature=youtu.be',
    },
    {
      referencia:
        'Laver, J. (2005). Libro Breve Historia del Traje y la Moda (9th ed.). Cátedra Ediciones. ',
      link:
        'https://www.buscalibre.com.co/libro-breve-historia-del-traje-y-la-moda/9788437607320/p/978957',
    },
    {
      referencia:
        'Lehnert, G. (2000). Historia de la moda del siglo XX. Könemann.',
    },
    {
      referencia:
        'Lucifer Sam. (2013a). Fashion from 1969 - Paco Rabanne [video]. YouTube. ',
    },
    {
      referencia:
        'Lucifer Sam. (2013b). Fashion from 1969 - Pierre Cardin [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=z_rsVHSXrY4&feature=youtu.be&list=RDatl9lIS7eUo',
    },
    {
      referencia:
        'Luisiana de mal. (2016). Moda a través de los 60s, 70s, 80s y 90s [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=r7JIYEHZLhg&feature=youtu.be',
    },
    {
      referencia:
        'Madrid, M. (2018). Música década 1920-1930 [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=r7OXmYZ0yC8&feature=youtu.be',
    },
    {
      referencia:
        'Moda años 40. (s.f.). Pinterest. Retrieved July 1, 2020, from ',
      link: 'https://www.pinterest.es/aliciapalmira/moda-años-40/',
    },
    {
      referencia:
        'Moda del periodo rococó - Diccionario Textil. (s.f.). TEXSITE.Info. Retrieved July 1, 2020, from ',
      link: 'http://es.texsite.info/Moda_del_periodo_rococó',
    },
    {
      referencia:
        'Moda siglo XX - Secretos de la moda. (s.f.). Secretos de La Moda. Retrieved July 1, 2020, from ',
      link:
        'https://sites.google.com/site/secretosdelamodaar/historia-de-la-moda/moda-siglo-xx#TOC-D-cadas-:-1900-1910.',
    },
    {
      referencia:
        'Mohamed, N., & TEDx Talks. (2020). Industria 4.0 “Cambiando esquemas y creando nuevas oportunidades” | Nasser Mohamed | TEDxUANL [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=K2cOViIZWD8',
    },
    {
      referencia:
        'Morgan, A. (2015). The True Cost. Life Is My Movie Entertainment Company / Untold Creative.',
    },
    {
      referencia:
        'Muñoz, M. (2016, 7 de mayo). La moda un “virus” que contagia a distintos y distantes. ',
      link:
        'https://www.efe.com/efe/espana/gente/la-moda-un-virus-que-contagia-a-distintos-y-distantes/10007-2919250',
    },
    {
      referencia:
        'Museo del Romanticismo. (2016). Exposición “La Moda Romántica”, Museo del Romanticismo, 25 octubre 2016 - 5 marzo 2017 [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=CP7Hoc82WIg',
    },
    {
      referencia:
        'Museo Vasco de Bilbao. (2018). Museo Vasco de Bilbao acoge una muestra de ropa del siglo XVIII -  [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=njZOrgpd8yg&feature=youtu.be',
    },
    {
      referencia:
        'Mycompasstv. (2017). Dior Fashion Show 1960 - [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=FOkfn6mk7dY&feature=youtu.be',
    },
    {
      referencia:
        'MyFootage001. (2011). Twiggy in a Fashion Show, 1960’s [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=4MOVR1-LNIc',
    },
    {
      referencia:
        'Peña, D. (2019). Moda 4.0: Aspectos legales de Fashiontech - Blog de Derecho de los Negocios. Blog de Derecho de Los Negocios. Universidad Externado de Colombia. ',
      link:
        'https://dernegocios.uexternado.edu.co/comercio-electronico/moda-4-0-aspectos-legales-de-fashiontech/',
    },
    {
      referencia:
        'Pena, P. (s.f.). historia del traje. Historia Del Traje. Retrieved July 1, 2020, from ',
      link: 'http://historiadeltraje.blogspot.com/p/httpmediateca.html',
    },
    {
      referencia:
        'Persefone Rest In Peace. (2018). Las Flappers de 1920 [video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=5YdaEuxsHjo&feature=youtu.be',
    },
    {
      referencia:
        'Phillippe Allante. (2007). Historia de la moda Cap 1 La elegancia romana [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=k1VTlq7B8RQ&feature=youtu.be',
    },
    {
      referencia:
        'Pozzetti, G. (2019). BARROCO | Historia del Traje. Historia Del Traje. ',
      link: 'https://historiadeltraje.com/category/barroco/',
    },
    {
      referencia:
        'Real Académia Española. (s.f.). DRAE | Diccionario de la lengua española | Edición del Tricentenario | RAE - ASALE. Retrieved July 6, 2020, from ',
      link: 'https://dle.rae.es/',
    },
    {
      referencia:
        'Rijksmuseum. (2016). The many shapes and sizes of Catwalk. Facebook. ',
      link: 'https://www.facebook.com/rijksmuseum/videos/10156670232395177',
    },
    {
      referencia:
        'Salcedo, E. (2014). Moda ética para un futuro sostenible (E. G. Gili (Ed.)).',
    },
    {
      referencia:
        'SentidoSensibilidad1. (2016). Un paseo por la moda 1940/1950 [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=crFh-l2Tl_o&feature=youtu.be',
    },
    {
      referencia:
        'Seivewright, S. y Zelich, C. Diseño e investigación. (2013). 2a. Ed. Actualizada. (Gilli, G., ed.). Manuales de diseño de moda No.1.',
    },
    {
      referencia:
        'Sorger, R., Udale, J. y Zelich, C. Principios básicos de diseño de moda. (2007). (Gilli, G., ed.).',
    },
    {
      referencia:
        'Squicciarino, N. y Aja, J. (1990). El vestido habla: consideraciones psico-sociológicas sobre la indumentaria [Cátedra]. Madrid, España.',
    },
    {
      referencia:
        'Takamura, Z., Faraudo X. y Franco, J. (2007). Diseño de moda: conceptos básicos y aplicaciones prácticas de ilustración de moda. (Ed. Promopress. Barcelona.).',
    },
    {
      referencia: 'Tevisto.com. (2017). Diccionario de la moda.',
    },
    {
      referencia:
        'Thevwchull. (2013). VWC Decades: 1990s Fashion & Music Trends [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=atl9lIS7eUo',
    },
    {
      referencia: 'Vestuario rococó. (s.f.). Pinterest. ',
      link: 'https://co.pinterest.com/storeevangeline/vestuario-rococó/',
    },
    {
      referencia:
        'Vintage Fashions. (2011). Mary Quant Shoe Fashion Show | London 1967 | Vintage Fashions [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=SB5eIfHXkWQ',
    },
    {
      referencia:
        'Vintage2Versace. (2014). History of fashion [video]. YouTube. ',
      link: 'https://www.youtube.com/channel/UCB00OlcXYufo2QvmN9QtATA',
    },
    {
      referencia: 'Wallygreeninker. (s.f.). Wallygreeninker [video]. YouTube. ',
      link: 'https://www.youtube.com/user/wallygreeninker/videos',
    },
    {
      referencia:
        'Wallygreeninker. (2009). Women’s fashions: year by year: 1949-1980 [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=w2cbKANPQcw&feature=youtu.be',
    },
    {
      referencia:
        'Watanabe, N. y De Cos Pinto, J. (2009). Ilustración de moda contemporánea. Iniciación a las técnicas de dibujo. (Ed. Promopress. Barcelona.).',
    },
    {
      referencia:
        'What where they thinking??? (2014). 80s fashion [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=sAh5emnRJ1M&feature=youtu.be',
    },
    {
      referencia:
        'Wikipedia. (s.f.). Wikipedia, la enciclopedia libre. Wikipedia. ',
      link: 'https://es.wikipedia.org/wiki/Código_de_vestimenta',
    },
    {
      referencia: 'Wikiquote. (s.f.). Wikiquote. Wikiquote. ',
      link: 'https://es.wikiquote.org/wiki/Indumentaria',
    },
    {
      referencia:
        'Żebrowska, K. (2017). 19th Century Fashion - How To Tell Different Decades Apart [video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=2VSz5G_qeS8&feature=youtu.be',
    },
  ],
  glosario: [
    {
      termino: 'Adorno',
      significado:
        'Aquello que se pone para la hermosura o mejor parecer de personas o cosas (Real Academia Española, s.f.)',
    },
    {
      termino: 'Alta costura',
      significado:
        'Vestuario hecho sobre la medida creado por los diseñadores líderes que, usualmente forma parte de una colección para una estación específica, la cual es determinada por la moda en general (Inexmoda, 2002).',
    },
    {
      termino: 'Armadura',
      significado:
        'Conjunto de piezas defensivas con que se revestían los combatientes (Real Academia Española, s.f.).',
    },
    {
      termino: 'Atuendo',
      significado:
        '1. m. Atavío, vestido. 2. m. Aparato, ostentación. 3. m. pl. Ál. y Cantb. Aparejos y ornamentos de las caballerías (Real Academia Española, s.f.).',
    },
    {
      termino: 'Automatización',
      significado:
        'Acción y efecto de automatizar. Automatizar: 1. tr. Convertir ciertos movimientos en movimientos automáticos o indeliberados. 2. tr. Aplicar la automática a un proceso o a un dispositivo (Real Academia Española, s.f.)',
    },
    {
      termino: 'Big data',
      significado:
        'Término que describe el gran volumen de datos, tanto estructurados como no estructurados, que inundan los negocios cada día. Pero no es la cantidad de datos lo que es importante. Lo que importa con el Big Data es lo que las organizaciones hacen con los datos. Big Data se puede analizar para obtener ideas que conduzcan a mejores decisiones y movimientos de negocios estratégicos (<i>Big Data: ¿En qué consiste? Su importancia, desafíos y gobernabilidad</i>, s.f.)',
    },
    {
      termino: 'Blazer',
      significado:
        'Chaqueta masculina con doble botonadura, recubierta, con botones dorados característicos, en tejido azul oscuro, emblema en el pecho, bolsillos agregados o simulados. Se lleva con pantalones de franela o de hilo de lana gris oscuro. Desde los años ‘80 se define al blazer también como una chaqueta femenina de corte masculino, no necesariamente con doble abotonadura, que implica cierto estilo dirigencial (Tevisto.com, 2017)',
    },
    {
      termino: 'Calzón',
      significado:
        'Prenda de vestir con dos perneras que cubre el cuerpo desde la cintura hasta una altura variable de los muslos (Real Academia Española, s.f.).',
    },
    {
      termino: 'Casaca',
      significado:
        'Vestidura ceñida al cuerpo, generalmente de uniforme, con mangas que llegan hasta la muñeca con faldones hasta las corvas (Real Academia Española, s.f.).',
    },
    {
      termino: 'Chaqueta',
      significado:
        'Saco masculino y femenino. Abierta delante y alargada a los costados. Puede ser invernal o estival, con botones a fila simple o doble (Tevisto.com, 2017).',
    },
    {
      termino: 'Código de vestuario',
      significado:
        'Es un conjunto de reglas, a menudo escritas, con respecto a la ropa. Los códigos de vestimenta se crean a partir de percepciones y normas sociales, y varían según el propósito, las circunstancias y las ocasiones (Wikipedia, s.f.)',
    },
    {
      termino: 'Colección',
      significado:
        'Conjunto de elementos de la misma clase reunidos por afición, interés y clasificación que se reflejan en prendas de vestir y accesorios, creados por un diseñador para una temporada.',
    },
    {
      termino: 'Color',
      significado:
        'Es la reacción que se genera en los objetos a partir de la luz y el primer contacto entre el mundo material y el ser humano. Están clasificados por matices y tonalidades, desplegando un sinnúmero de colores.',
    },
    {
      termino: 'Colorante',
      significado:
        'Que da color. Producto colorante (Real Academia Española, s.f.).',
    },
    {
      termino: 'Comunicación de moda',
      significado:
        'Es la capacidad de mostrar a los demás como se ve el mundo desde distintas perspectivas, desarrollando propuestas de productos moda capaces de conectar con los gustos de otros.',
    },
    {
      termino: 'Concepto de moda',
      significado:
        'Representación mental que las personas hacen para comprender algo, que puede ser: un objeto, cualidad, situación, lugar, momento histórico, con el fin de desarrollar las características que darán la identidad a un producto de forma creativa.',
    },
    {
      termino: 'Consumo socialmente responsable',
      significado:
        'Consumo donde el consumidor tiene en cuenta las consecuencias públicas de su consumo privado e intenta usar su poder de compra para lograr el cambio social (Dueñas, S., Perdomo-Ortiz, J., & Villa, L). (2014).',
    },
    {
      termino: 'Contexto',
      significado:
        'Entorno físico o de situación, político, histórico, cultural o de cualquier otra índole, en el que se considera un hecho (Real Academia Española, s.f.)',
    },
    {
      termino: 'Corsé',
      significado:
        'Posee ajustador, modela la figura desde el busto hasta la cintura. Tiene tirantes ajustables en su parte inferior, en donde se enlazan las medias (Tevisto.com, 2017). ',
    },
    {
      termino: 'Coser',
      significado:
        '1. tr. Unir con hilo, generalmente enhebrado en la aguja, dos o más pedazos de tela, cuero u otra materia. 2. tr. Hacer o reparar una prenda, especialmente de ropa de vestir, con aguja o a máquina (Real Academia Española, s.f.)',
    },
    {
      termino: 'Cosmética',
      significado:
        '1. s. f. INDUMENTARIA Y MODA Conjunto de los productos utilizados para la higiene y la belleza, en especial de la cara. 2. INDUSTRIA Técnica de elaboración y aplicación de productos cosméticos para la higiene y la belleza de la persona (Farlex, s.f.)',
    },
    {
      termino: 'Crinolina',
      significado:
        '1. Tejido resistente para refuerzo en prendas de vestir, usado como plastrón, de ligamento tafetán con urdimbre de algodón y trama de crin de caballo. 2. Término utilizado para la forma inflada de los vestidos y faldas, inicialmente usados en 1842 (Inexmoda, 2002).',
    },
    {
      termino: 'Cuerpo',
      significado:
        'Se refiere a la figura humana que está conformada por cabeza, tronco y extremidades, cuya estructura y morfología es llamada anatomía y que es el portador principal de las creaciones en el mundo del vestuario.',
    },
    {
      termino: 'Cultura material',
      significado:
        'es el conjunto de objetos utilizados por el hombre y que formaron parte de su vida cotidiana (Región de Murcia Digital, s.f.)',
    },
    {
      termino: 'Cultura y moda',
      significado:
        'Conjunto de características comunes a un grupo de personas que las definen y diferencian de otros grupos y tienen relación directa con las ideas, tradiciones, costumbres y clases sociales, de un propio país o región.',
    },
    {
      termino: 'Ecología',
      significado:
        'Ciencia que estudia los seres vivos como habitantes de un medio, y las relaciones que mantienen entre sí y con el propio medio (Real Academia Española, s.f.)',
    },
    {
      termino: 'Eduardiana',
      significado:
        'La época eduardiana o era eduardiana en el Reino Unido es el período que cubre el reinado de Eduardo VII, y se extiende desde 1901 a 1910. El fallecimiento de la reina Victoria en enero de 1901 y la sucesión de su hijo Eduardo, marcaron el inicio de un nuevo siglo y el final de la época victoriana. Aunque Victoria había rechazado a la sociedad, Eduardo era el líder de una élite a la moda que estableció un estilo influenciado por el arte y la moda de Europa continental, posiblemente debido a la afición de viajar del rey. La era estuvo marcada por cambios significantes en la política a medida que sectores de la sociedad que habían sido ampliamente excluidos del ejercicio del poder en el pasado como los obreros plebeyos y las mujeres, se volvieron cada vez más politizados (Wikipedia, s.f.)',
    },
    {
      termino: 'Estampación',
      significado:
        'Proceso de impresión para obtener un diseño, que puede ser plano o en relieve sobre distintos materiales: papel, tela, cuero, etc. (Wikipedia, s.f.).<br>Proceso textil por el que se forman diseños coloreados por zonas, con los que se embellecen y ornamenta el artículo. Para ello se emplean pigmentos y colorantes (Inexmoda, 2002).',
    },
    {
      termino: 'Estética',
      significado:
        'Es la percepción de belleza que tiene cada individuo y que viene acompañada de gustos, preferencias y vivencias individuales.',
    },
    {
      termino: 'Estilismo',
      significado:
        'En el mundo de la moda y de la decoración especialmente, actividad profesional que se ocupa del estilo y de la imagen (Inexmoda, 2002).',
    },
    {
      termino: 'Falda',
      significado:
        '1. f. Prenda de vestir que cae desde la cintura. 2. f. Parte de la vestimenta desde la cintura hacia abajo. U. m. en pl. con el mismo significado que en sing. 3. f. Cada una de las partes de una prenda de vestir que cae suelta sin ceñirse al cuerpo (Real Academia Española, s.f.).',
    },
    {
      termino: 'Feminismo',
      significado:
        '1. m. Principio de igualdad de derechos de la mujer y el hombre. 2. m. Movimiento que lucha por la realización efectiva en todos los órdenes del feminismo (Real Academia Española, s.f.).',
    },
    {
      termino: 'Futurismo',
      significado:
        'Movimiento impulsado a comienzos del siglo XX por el poeta italiano F. T. Marinetti, y que expresa artísticamente los avances de la técnica y de la sociedad moderna (Real Academia Española, s.f.).',
    },
    {
      termino: 'Glamour',
      significado:
        'Cualidad de la persona que tiene un atractivo o belleza sofisticados, en especial en el mundo de la moda o del espectáculo La película mostraba el glamour de la alta sociedad europea (Farlex, s.f.)',
    },
    {
      termino: 'Globalización',
      significado:
        '1. f. Acción de globalizar (‖ integrar cosas diversas). Haría falta una globalización de los datos parciales obtenidos. 2. f. Extensión del ámbito propio de instituciones sociales, políticas y jurídicas a un plano internacional. El Tribunal Penal Internacional es un efecto de la globalización. 3. f. Difusión mundial de modos, valores o tendencias que fomenta la uniformidad de gustos y costumbres. 4. f. Econ. Proceso por el que las economías y mercados, con el desarrollo de las tecnologías de la comunicación, adquieren una dimensión mundial, de modo que dependen cada vez más de los mercados externos y menos de la acción reguladora de los Gobiernos (Real Academia Española, s.f.).',
    },
    {
      termino: 'Hilatura',
      significado:
        '1. f. Arte de hilar la lana, el algodón y otras materias análogas. 2. f. Industria y comercialización del hilado. 3. f. Establecimiento o fábrica donde se hilan las materias textiles (Real Academia Española, s.f.).',
    },
    {
      termino: 'Hippy',
      significado:
        'Jipi. 1. adj. Dicho de un movimiento: De carácter contracultural y juvenil, surgido en los Estados Unidos de América en la década de 1960 y caracterizado por su pacifismo y su actitud inconformista hacia las estructuras sociales vigentes. 2. adj. Perteneciente o relativo al movimiento jipi. 3. m. y f. Partidario del movimiento jipi (Real Academia Española, s.f.).',
    },
    {
      termino: 'Indumentaria',
      significado:
        'Es el conjunto de prendas generalmente textiles fabricadas con diversos materiales y usadas para vestirse, protegerse del clima adverso y en ocasiones por pudor (ropa interior) (Wikiquote, s.f.)',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'Es la inteligencia llevada a cabo por máquinas. En ciencias de la computación, una máquina «inteligente» ideal es un agente flexible que percibe su entorno y lleva a cabo acciones que maximicen sus posibilidades de éxito en algún objetivo o tarea (Wikipedia, s.f.)',
    },
    {
      termino: 'Investigar moda',
      significado:
        'Es la acción que se realiza para buscar la información necesaria de una forma creativa, con el fin de obtener las herramientas que se utilizaran en el desarrollo de un producto moda.',
    },
    {
      termino: 'Lana',
      significado:
        'Fibra proteica que posee propiedades como aislamiento térmico elevado, buena estabilidad dimensional, gran absorbencia, elasticidad y tendencia a apelmazarse (Inexmoda, 2002).',
    },
    {
      termino: 'Lujo',
      significado:
        '1. m. Abundancia en el adorno o en comodidades y objetos suntuosos. Vivía rodeada de lujo. 2. m. Abundancia de cosas o de medios. Dispone de todo lujo DE recursos para el proyecto. 3. m. Aquello que supera los medios normales de alguien para conseguirlo. Para ellos es un lujo poder ir de vacaciones. 4. m. Elevada categoría, excelencia o exquisitez que posee algo por la calidad de las materias primas empleadas en su fabricación, sus altas prestaciones o servicios, etc. Destacaban el lujo y el refinamiento de la decoración. Coche, zapatos, edición de lujo. 5. m. Persona o cosa valiosa, excepcional o extraordinaria. El profesor de arte es un lujo. Ha sido un lujo viajar con ustedes (Real Academia Española, s.f.).',
    },
    {
      termino: 'Malla',
      significado:
        '5. f. Tejido semejante al de la malla de la red. 7. f. Prenda de vestir elástica, fina y ajustada al cuerpo. U. t. en pl. con el mismo significado que en sing. (Real Academia Española, s.f.).',
    },
    {
      termino: 'Manga',
      significado:
        '(En inglés brand) es una identificación comercial primordial o el conjunto de varios identificadores con los que se relaciona y ofrece un producto o servicio en el mercado (Wikipedia, s.f.).',
    },
    {
      termino: 'Moda',
      significado:
        '1. f. Uso, modo o costumbre que está en boga durante algún tiempo, o en determinado país. 2. f. Gusto colectivo y cambiante en lo relativo a prendas de vestir y complementos. 3. f. Conjunto de la vestimenta y los adornos de moda. 4. f. Estad. Valor que aparece con mayor frecuencia en una serie de medidas (Real Academia Española, s.f.).',
    },
    {
      termino: 'Modisto',
      significado:
        '1. m. Hombre que se dedica a hacer prendas de vestir o a crear modas o modelos de ropa, principalmente para mujer (Real Academia Española, s.f.).',
    },
    {
      termino: 'New look',
      significado:
        '(“Nuevo aire”, “nuevo aspecto”, “nuevo look”) es un estilo en el diseño de la moda, creado por Christian Dior en 1947, aunque anticipado ya por Cristóbal Balenciaga, que revolucionó el mundo de la moda posterior a la Segunda Guerra Mundial (Wikipedia, s.f.).',
    },
    {
      termino: 'Pantalón',
      significado:
        '1. m. Prenda de vestir que se ajusta a la cintura y llega generalmente hasta el pie, cubriendo cada pierna separadamente. U. t. en pl. con el mismo significado que en sing. (Real Academia Española, s.f.).',
    },
    {
      termino: 'Piercieng',
      significado:
        '(Anglicismo, gerundio del verbo <i>to pierce</i>: &#39;agujerear&#39;, &#39;perforar&#39;, &#39;atravesar&#39;), adaptada al español como piercing, es la práctica de perforar una parte del cuerpo humano para insertar aretes u otras piezas de joyería. Estas perforaciones son una forma de modificación corporal y reflejan tanto valores culturales, como religiosos y espirituales, y además parte de la moda, erotismo, gustos personales o identificación con una subcultura (Wikipedia, s.f.).',
    },
    {
      termino: 'Power dressing',
      terminoHtml: '<em>Power dressing</em>',
      significado:
        'Nacido en la segunda mitad de la década de 1970 y desarrollado en la década de 1980, el estilo de vestir es un estilo de moda que permite a las mujeres establecer su autoridad en un entorno profesional y político tradicionalmente dominado por los hombres (Wikipedia, s.f.).',
    },
    {
      termino: 'Realidad Aumentada',
      significado:
        'Término que se usa para describir al conjunto de tecnologías que permiten que un usuario visualice parte del mundo real a través de un dispositivo tecnológico con información gráfica añadida por este. El dispositivo, o conjunto de dispositivos, añaden información virtual a la información física ya existente, es decir, una parte virtual aparece en la realidad. De esta manera los elementos físicos tangibles se combinan con elementos virtuales, creando así una realidad aumentada en tiempo real (Wikipedia, s.f.).',
    },
    {
      termino: 'Robotización',
      significado:
        '1. f. Acción y efecto de robotizar.<br> Robotizar: 1. tr. Introducir robots en procesos industriales. 2. tr. Mecanizar (‖ dar la regularidad de una máquina). 3. tr. Dar a algo o a alguien carácter de robot (Real Academia Española, s.f.)',
    },
    {
      termino: 'Romanticismo',
      significado:
        '1. m. Movimiento cultural que se desarrolla en Europa desde fines del siglo XVIII y durante la primera mitad del XIX y que, en oposición al Neoclasicismo, exalta la libertad creativa, la fantasía y los sentimientos (Real Academia Española, s.f.).',
    },
    {
      termino: 'Ropaje',
      significado:
        '1. m. Vestido u ornato exterior del cuerpo. 2. m. Vestidura larga, vistosa y de autoridad. 3. m. Conjunto de ropas. 4. m. Forma, modo de expresión, lenguaje (Real Academia Española, s.f.).',
    },
    {
      termino: 'Sastre',
      significado:
        'Traje sastre: Conjunto femenino compuesto de saco de corte masculino, acompañado de falda confeccionada en el mismo tejido. Nace a fines del siglo XIX, su nombre deriva del hecho de que lo confeccionaba el sastre. El traje puede tener también pantalones (Tevisto.com, 2017).<br> 1. m. y f. Persona que tiene por oficio cortar y coser trajes, principalmente de hombre (Real Academia Española, s.f.).<br>Individuo que se dedica a confeccionar ropa para hombre. El sastre, de este modo, corta y cose pantalones, sacos y otras prendas de vestir masculinas. Por ejemplo: “Voy a ir al sastre para que me arregle el traje: me queda un poco grande”, “Tenemos que conseguir un sastre antes del casamiento”, “Mi abuelo era sastre y cosía la ropa de toda la familia” (Definicion.de, s.f.).',
    },
    {
      termino: 'Sastrería',
      significado:
        '1. f. Oficio de sastre. 2. f. Tienda y taller de sastre (Real Academia Española, s.f.).<br>Taller en donde se hacen las prendas exteriores femeninas y masculinas, de sastrería (Inexmoda, 2002).',
    },
    {
      termino: 'Sociedad',
      significado:
        '1. f. Conjunto de personas, pueblos o naciones que conviven bajo normas comunes. Viven marginados de la sociedad. 2. f. Agrupación natural o pactada de personas, organizada para cooperar en la consecución de determinados fines. Se darán ayudas a sociedades culturales. 3. f. Agrupación natural de algunos animales. Las abejas viven en sociedad. 4. f. Com. Agrupación comercial de carácter legal que cuenta con un capital inicial formado con las aportaciones de sus miembros (Real Academia Española, s.f.).',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        '1. f. Cualidad de sostenible. Sostenible: Especialmente en ecología y economía, que se puede mantener durante largo tiempo sin agotar los recursos o causar grave daño al medio ambiente. Desarrollo, economía sostenible (Real Academia Española, s.f.).',
    },
    {
      termino: 'Talle',
      significado:
        'Del fr. taille. 1. m. Disposición o proporción del cuerpo humano. 2. m. Cintura del cuerpo humano. 3. m. Forma que se da al vestido, cortándolo y proporcionándolo al cuerpo. 4. m. Parte del vestido que corresponde a la cintura. 5. m. Medida tomada para un vestido o traje, comprendida desde el cuello a la cintura, tanto por delante como por detrás (Real Academia Española, s.f.).',
    },
    {
      termino: 'Tecnología',
      significado:
        '1. f. Conjunto de teorías y de técnicas que permiten el aprovechamiento práctico del conocimiento científico. 2. f. Tratado de los términos técnicos. 3. f. Lenguaje propio de una ciencia o de un arte. 4. f. Conjunto de los instrumentos y procedimientos industriales de un determinado sector o producto (Real Academia Española, s.f.).',
    },
    {
      termino: 'Tejeduría',
      significado:
        '1. f. Arte de tejer. 2. f. Taller o lugar en que están los telares y trabajan los tejedores (Real Academia Española, s.f.).',
    },
    {
      termino: 'Tejido',
      significado:
        'Del part. de tejer. 1. m. Textura de una tela. El color de esta tela es bueno, pero el tejido es flojo. 2. m. Material hecho tejiendo. 3. m. Cosa formada al entrelazar varios elementos (Real Academia Española, s.f.).',
    },
    {
      termino: 'Tela',
      significado:
        '1. f. Obra, especialmente la tejida en el telar, hecha de muchos hilos, que, entrecruzados alternativa y regularmente en toda su longitud, forman como una lámina. 2. f. Obra semejante a la tela de muchos hilos, pero formada por series alineadas de puntos o lazadas hechas con un mismo hilo, especialmente la tela de punto elástico tejida a máquina. 3. f. Material que se pone de una vez en el telar (Real Academia Española, s.f.).<br>Lámina flexible compuesta por muchos hilos que se entrecruzan de manera regular y alternativa en toda la longitud. Las telas pueden ser las obras tejidas en el telar o aquellas semejantes que se encuentran formadas por series alineadas de puntos o lazadas hechas con un mismo hilo (Definicion.de, s.f.).',
    },
    {
      termino: 'Tendencia',
      significado:
        'Corriente o preferencia hacia determinados fines. Por ejemplo: “Lionel Messi es un gran jugador, aunque tiene tendencia a encarar por el lado izquierdo, lo que ayuda a predecir sus movimientos”, “La tendencia alcista de los precios preocupa a los economistas”, “A dos horas del cierre de los comicios, no hay una tendencia clara que permita vislumbrar un ganador” (Definicion.de, s.f.)',
    },
    {
      termino: 'Túnica',
      significado:
        '1. f. Vestidura exterior amplia y larga. 2. f. Vestidura de lana que usan algunos religiosos debajo de los hábitos. 3. f. Vestidura con o sin mangas, que usaban los antiguos y les servía como de camisa (Real Academia Española, s.f.).<br>Prenda de vestir que se caracteriza por su extensión y su amplitud. Esta vestidura, de gran antigüedad, permite cubrir desde el cuello hasta las piernas (Definicion.de, s.f.).',
    },
    {
      termino: 'Vestido',
      significado:
        '1. m. Prenda o conjunto de prendas exteriores con que se cubre el cuerpo. 2. m. Traje enterizo de la mujer (Real Academia Española, s.f.).',
    },
    {
      termino: 'Vestimenta',
      significado:
        '1. f. vestido. 2. f. vestidura (‖ vestido del sacerdote para el culto divino). U. m. en pl. con el mismo significado que en sing. (Real Academia Española, s.f.)',
    },
    {
      termino: 'Vestuario',
      significado:
        '1. m. vestido (‖ prendas con que se cubre el cuerpo). 2. m. Conjunto de trajes necesarios para una representación escénica. 3. m. En los campos de deportes, piscinas, etc., local destinado a cambiarse de ropa. 4. m. Conjunto de jugadores que componen un equipo deportivo. 5. m. Aquello que en algunas comunidades o cuerpos eclesiásticos se da a sus individuos, en especie o en dinero, para vestirse. 6. m. Sitio, en algunas iglesias, donde se revisten los eclesiásticos. 7. m. Parte del teatro en que están los cuartos o aposentos donde se visten las personas que han de tomar parte en la representación dramática o en otro espectáculo teatral. 8. m. Antiguamente, toda la parte interior del teatro. 9. m. Renta que se daba en las iglesias y catedrales a los que tenían obligación de vestirse en las funciones de iglesia o coro. 10. m. Mil. Uniforme de los soldados y demás individuos de tropa (Real Academia Española, s.f.).<br>Conjunto de prendas con que se cubre el cuerpo. El término puede utilizarse como sinónimo de vestido. Por ejemplo: “Aún no elegí el vestuario para esta noche”, “Tu madre siempre se destaca por su elegante vestuario”, “Creo que no tengo vestuario apropiado para esta ocasión”(Definicion.de, s.f.).',
    },
    {
      termino: 'Wearable',
      significado:
        'La tecnología ponible o vestible (del inglés <i>wearable technology</i>), tecnología corporal, ropa tecnológica,1 ropa inteligente,2 o electrónica textil,3 son dispositivos electrónicos inteligentes incorporados a la vestimenta o usados corporalmente como implantes o accesorios que pueden actuar como extensión del cuerpo o mente del usuario. Los dispositivos vestibles como los monitores de actividad son un buen ejemplo del Internet de las cosas, puesto que cosas como la electrónica, software, sensores y conectividad son mecanismos que permiten a los objetos intercambiar información a través de Internet con un fabricante, operador u otros dispositivos conectados, sin necesitar de la intervención humana. La tecnología vestible tiene una variedad de aplicaciones que crece en medida que el campo de conocimiento se expande. Se ha popularizado con el consumo exponencial de los relojes inteligentes y los seguidores de actividad. Aparte de usos comerciales, esta tecnología está siendo incorporada a la navegación de sistemas, avances en la industria textil y la salud (Wikipedia, s.f.).',
    },
    {
      termino: 'Yelmo',
      significado:
        '1. m. Pieza de la armadura antigua que resguardaba la cabeza y el rostro, y se componía de morrión, visera y babera (Real Academia Española, s.f.).<br>Concepto que, según detalla el diccionario de la Real Academia Española (RAE), alude al sector de las armaduras que, en la antigüedad, protegía el rostro y la cabeza del usuario. El yelmo, en este sentido, estaba formado por diferentes componentes, como la celada y la visera (Definicion.de, s.f.).',
    },
  ],
  complementario: [
    {
      texto:
        'Desconocido. (s.f), Proyecto graduación Universidad de Palermo 631.',
      tipo: 'PDF',
      link:
        'https://fido.palermo.edu/servicios_dyc/proyectograduacion/archivos/631.pdf',
    },
    {
      texto: 'Desconocido. (s.f.). Décadas 40s, 50s, 60s.',
      tipo: 'Imagen tomada de Pinterest',
      link:
        'https://fido.palermo.edu/servicios_dyc/proyectograduacion/archivos/631.pdf',
    },
    {
      texto:
        'Guillen, A. (2014). Trabajo Final de Grado: Indumentaria Prêt-à-porter. Articulación con valores de Alta costura. Universidad de Palermo.',
      tipo: 'PDF',
      link:
        'https://fido.palermo.edu/servicios_dyc//proyectograduacion/archivos/2826.pdf',
    },
    {
      texto: 'Inexmoda. (2002). Glosario de moda.',
      tipo: 'PDF',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: 'Museo del traje. (2018). Trajes españoles del siglo XVIII. ',
      tipo: 'PDF',
      link:
        'http://museodetrajes.com.co/wp-content/uploads/2018/11/Trajes-espa%C3%B1oles-del-siglo-XVIII.pdf.',
    },
    {
      texto:
        'Riello, G. (2012). Breve historia de la moda: desde la Edad Media hasta la actualidad. Editorial Gustavo Gili.',
      tipo: 'PDF',
      link:
        'http://museodetrajes.com.co/wp-content/uploads/2018/11/Trajes-espa%C3%B1oles-del-siglo-XVIII.pdf.',
    },
    {
      texto: 'Tevisto.com (2017). Diccionario de la moda.',
      tipo: 'PDF',
      link:
        'https://www.tevisto.com/blog/wp-content/uploads/2017/10/diccionario-de-la-moda.pdf',
    },
    {
      texto:
        'Torales, E. y Meyer, M. (Sin fecha). Elementos y principios del diseño: Diseño de Indumentaria Urbana I.',
      tipo: 'Documento',
      link:
        'https://www.academia.edu/33376876/ELEMENTOS_Y_PRINCIPIOS_DEL_DISE%C3%91O?auto=download&email_work_card=download-',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Marisol Osorio Beltrán',
        cargo: 'Líder Sennova',
        centro:
          'Centro de Formación en Diseño, Confección y Moda – Regional Antioquia',
      },
      {
        nombre: 'María Luisa Yépez',
        cargo: 'Instructora',
        centro:
          'Centro de Formación en Diseño, Confección y Moda – Regional Antioquia',
      },
      {
        nombre: 'Fabio Andrés Gaviria Londoño',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda – Regional Antioquia',
      },
      {
        nombre: 'Luis Alfonso Hincapié Echeverri',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda – Regional Antioquia',
      },
      {
        nombre: 'Idian Fernando López Agudelo',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda – Regional Antioquia',
      },
      {
        nombre: 'Ruth Elena Morales Ríos',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda – Regional Antioquia',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la comunicación de la Industria Gráfica – Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología – Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Comunicación de la Industria Gráfica – Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Julian Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
