<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span 1
      h1 Introducción al mundo de la moda 

    .bloque-texto-c.color-secundario.p-4(data-aos="fade-right")
      i.fas.fa-quote-right
      h5.mb-2 Mis ideas proceden de mis sueños […]. Si tienes suerte y eres capaz de utilizar algo que has visto en tus sueños, el resultado será totalmente original. No es algo que ya exista en el mundo, sino que está en tu cabeza. Pienso que esto es extraordinario.
      span (Alexander McQueen, s.f., como se citó en Seivewright, Simon & Zelich, 2013)

    Separador      
    #t_1_1.titulo-segundo(data-aos="fade-right")
      h2 1.1 Introducción  

    .bloque-texto-c.color-primario.p-4.mt-5(data-aos="fade-left")
      i.fas.fa-quote-right
      h5.mb-2 La moda no es más que una forma de fealdad tan intolerable que nos vemos obligados a cambiarla cada seis meses.
      span Sorger, Udale & Zelich, 2007
    
    .row.justify-content-center.align-items-stretch.mt-5
      .col-lg-6.bg-img-teme-1.p-5(data-aos="fade-right")
        p(data-aos="fade-down") Es insaciable y despiadada, sin embargo, la capacidad para crear prendas de vestir es también algo muy atractivo y satisfactorio.
        p(data-aos="fade-down") Los diseñadores necesitan investigar para: 
        .row.justify-content-center.align-items-center(data-aos="flip-down")       
          .col-lg-11                      
            .list.mt-4
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
              .list__txt 
                  span Comprender las técnicas de construcción de prendas.
            .list.mt-4
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
              .list__txt 
                  span Saber desarrollar una colección.
            .list.mt-4
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
              .list__txt 
                  span Saber y entender para quien diseñan.
            .list.mt-4
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
              .list__txt 
                  span Qué tipo de prenda van a desarrollar y para qué estación. 
        p(data-aos="fade-down").mt-5 Acabar una colección es solo el principio; luego debe ser promocionada y comercializada.  

        p(data-aos="fade-down").pb-4 Las #[b personas creativas] son indispensables para la industria de la moda y hacen equipo con los encargados de compras, agentes de venta, periodistas, fotógrafos, estilistas, ilustradores y demás actores involucrados en este maravilloso mundo de la moda.       
      .col-lg-6.bg-img-teme-1-1(data-aos="fade-left") 

    Separador                             
      
    #t_1_2.titulo-segundo(data-aos="fade-right")
      h2 1.2  ¿Está a la moda?

    p(data-aos="fade-down") Es una pregunta que a diario se debería hacer toda persona que quiere formarse para trabajar en el mundo de la moda y entender su significado. Cuando los coetáneos o la industria estiman que los diseños están acordes con el espíritu del momento, significa que el proceso de diseño tiene grandes posibilidades de ser exitoso en el mercado.

    .row.justify-content-center.align-items-stretch.mt-5
      .col-lg-6.bg-img-teme-1-2(data-aos="fade-right")

      .col-lg-6.bg-img-teme-1-3.p-5.text-white(data-aos="fade-left") 
        p.mt-5(data-aos="fade-down") Para el desarrollo de colecciones, es importante tener presente:
        .row.justify-content-center.align-items-center(data-aos="flip-down")       
          .col-lg-11                       
            .list.mt-4
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
              .list__txt 
                  span Una conciencia del propio gusto y estilo.
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
              .list__txt 
                  span Conocerse a sí mismo.
            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v1.svg", alt="").img-icon 
              .list__txt 
                  span Mantenerse fiel a la propia visión del modo en que se quiere vestir a alguien.
          .col-lg-11   
              h4.mt-5.text-center(data-aos="fade-down") “Siempre habrá a quien le guste y a quien no le guste”
              p A través de la lectura del siguiente documento podrá reflexionar en torno a la pregunta ¿estás a la moda?
              .row.justify-content-center.align-items-center.mt-5
                .col-lg-8(data-aos="fade-down")
                  a.anexo.a-bg-1(:href="obtenerLink('/downloads/Anexo_1_Estas_a_la_moda.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p #[b Anexo 1]. ¿Estás a la moda? 

    Separador                             
      
    #t_1_3.titulo-segundo(data-aos="fade-right")
      h2 1.3  Conocer de moda 
    p(data-aos="fade-down") 
      span(style='color:#00223D') Es fundamental que las personas que intervienen en el proceso de desarrollo de una colección adquieran la habilidad para construir a partir de varias fuentes; 
      span(style='color:#BF3976') lo principal es vivenciar lo que está pasando, leer el entorno, el tiempo, el espacio, la necesidad, el usuario, esto es lo que se llama “conocer de moda”.  
      span(style='color:#00223D') Reconocer el trabajo de otros es determinante para no estar reproduciendo ingenuamente lo que ya existe.  

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.bg-img-1.p-5.mt-5 
        .row(data-aos="flip-down")       
          .col-lg-5.my-5
            p(data-aos="fade-down").p-5.card-p La tecnología permite que el acceso a la información sea más ágil y la búsqueda se pueda dar en diferentes niveles, ya sea macrotendencias, microtendencias, #[i mindstyles, coolhunters, cultsearchers, trendsetters y celebrities, google trends y google insight, youtubers, influencers, early adopters], blogueros, páginas web, innovadores y visionarios, entre otras, son fuentes de información que dan las herramientas para ser propositivo, innovador y transformar a la hora de crear moda.  
    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-12.bg-img-2.p-5
        .row.justify-content-end.align-items-end(data-aos="flip-down")       
          .col-lg-6.my-5
            .row.justify-content-center.align-items-center
              .col-lg-12.p-5.card-p
                p
                  span(style='color:#00223D') Los medios de comunicación masiva constituyen un buen punto de partida, sin embargo, son solo una fuente de información. Mientras más puntos de vista se tengan es mucho mejor, ya que todos forman parte del engranaje de la moda y van dirigidos a un sector o nicho del mercado. 
                  span(style='color:#BF3976') También es importante la influencia que tienen las diferentes culturas y los profesionales en diversos oficios 
                  span(style='color:#00223D') como estilistas, periodistas, fotógrafos y personajes públicos inspiradores.<br><br>

                  | A través de la lectura del siguiente documento podrá entender un poco más de qué se trata conocer de moda.

              .row.justify-content-center.align-items-center.mt-5
                .col-lg-8(data-aos="fade-down")
                  a.anexo.a-bg-1(:href="obtenerLink('/downloads/Anexo_2_Conocer_de_Moda.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p #[b Anexo 2]. Conocer de Moda  

    Separador                             
      
    #t_1_4.titulo-segundo(data-aos="fade-right")
      h2 1.4  Empezar a investigar de moda 

    .row.justify-content-center.align-items-center.bg-color-4(data-aos="fade-right")
      .col-12.bg-img-3.p-5
        .row.end(data-aos="flip-down")       
          .col-lg-5.my-5
            p(data-aos="fade-down").p-5.card-p La investigación para la moda es estar siempre al acecho de algo para utilizar o “robar”.<br><br>La 
              span(style='color:#BF3976') búsqueda constante de elementos 
              span(style='color:#00223D') que permitan #[b inventar] todo con cada nueva temporada, utilizando siempre una nueva inspiración, alimentar la investigación con imágenes, inspira 
              span(style='color:#BF3976') #[b la] mente creativa.
    .row.justify-content-center.align-items-center.bg-color-4(data-aos="fade-right")
      .col-12.p-5    
        img.img-t.img-a.mt-5(data-aos="fade-down")(src='@/assets/ilustraciones/img6.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-10
            p.mt-5(data-aos="fade-down") Todo depende de la forma como se decida y desarrolle el tema, de tal manera que permita extraer la información necesaria para la nueva colección; el hallazgo debe permitir:
        img.img-t.img-a.mt-5(data-aos="slide-right")(src='@/assets/ilustraciones/1.svg', alt='')
        img.img-t.img-a.mt-3(data-aos="slide-left")(src='@/assets/ilustraciones/2.svg', alt='')
        img.img-t.img-a.mt-3(data-aos="slide-right")(src='@/assets/ilustraciones/3.svg', alt='')
        img.img-t.img-a.mt-3(data-aos="slide-left")(src='@/assets/ilustraciones/4.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-10
            p.mt-5(data-aos="fade-down").text-center Tejiendo una red de ideas es como se hace posible la investigación en este contexto. 
      
    .row.justify-content-center.align-items-stretch
      .col-lg-6.bg-img-teme-1-4(data-aos="fade-right")

      .col-lg-6.bg-img-teme-1-5.p-5(data-aos="fade-left")
        p(data-aos="fade-down") El creativo es un detective a la caza escurridiza de información. Son fuentes de investigación: 
        .row.justify-content-center.align-items-center(data-aos="flip-down")       
          .col-lg-11                      
            .list.mt-4
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Una buena biblioteca es un tesoro, entre más antigua mejor.

            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Escuelas y universidades.

            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Los mercados de viejo, tiendas de ropa usada, las ferias de antigüedades, prendas, libros, discos, objetos cotidianos que ya no están de moda.

            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span La ropa histórica, étnica, o especializada.

            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Lo que se considera kitsch.

            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Museos (El Londinense Victoria and Albert Museum).

            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Las grandes empresas y marcas.

            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Los viajes, vacaciones.

            .list.mt-3
              .list__item
                  .list__item__icon
                      img(src="@/assets/ilustraciones/v2.svg", alt="").img-icon 
              .list__txt 
                  span Documentos, compras, postales, recortes de revistas y dibujos.

        p(data-aos="fade-down").mt-5 Todo debe estar a la mano y a la vista como información aplicable para conceptualizar y desarrollar los elementos que forman parte y caracterizan la colección. Revise el documento para profundizar en esta temática. 
        .row.justify-content-center.align-items-center.mt-5
          .col-lg-8(data-aos="fade-down")
            a.anexo.a-bg-1(:href="obtenerLink('/downloads/Anexo_3_Empezar_a_investigar_de_moda.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Anexo 3]. Empezar a investigar de Moda

    Separador                             
      
    #t_1_5.titulo-segundo(data-aos="fade-right")
      h2  1.5  Concepto de moda

    .bloque-texto-c.color-primario.p-4.mt-5(data-aos="fade-left")
      i.fas.fa-quote-right
      h5.mb-2 Es necesario escoger el tema o concepto con cuidado ya que debe ser una ayuda para el diseño y no un obstáculo.

      span Sorger et al., 2007, p. 18

    p(data-aos="fade-down").mt-5
      span(style='color:#00223D') Es importante 
      span(style='color:#BF3976') escoger un tema o concepto 
      span(style='color:#00223D') para desarrollar, que permita 
      span(style='color:#BF3976') activar el proceso creativo 
      span(style='color:#00223D') teniendo claro que lo que se busca es encontrar las herramientas necesarias aplicadas a una colección, debe ser algo con lo que se pueda trabajar y vivir mientras dure la colección. 
    .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-right")
      .col-lg-6.px-0
        img.img-a(src='@/assets/ilustraciones/img8.svg', alt='')
      .col-lg-6.bg-color-2.p-4
        .row.justify-content-center.align-items-center(data-aos="flip-down")       
          .col-lg-11        
            p(data-aos="fade-down") El concepto es una forma de #[b estimular la mente] y de abrir nuevas direcciones al proceso de #[b desarrollo de la colección], el creativo debe ser honesto con el tema, que le interese, estimule e inspire; el tema puede ser conceptual o abstracto, pero siempre tener clara la búsqueda.    

            p(data-aos="fade-down") El resultado debe arrojar unas prendas novedosas, modernas, actuales, favorecedoras, de buen aspecto, que suscitan el entusiasmo para que el usuario apruebe y quiera usar la nueva colección.

            p(data-aos="fade-down") Siempre debe estar presente la pregunta:

            h4.mt-5.text-center.rosa ¿Se venderán mis creaciones?

    .row.justify-content-center.align-items-center.bg-color-2.pb-3  

      SlyderA(data-aos="slide-left")
        .row.justify-content-center.align-items-center
          .col-lg-12
            img.img-a.img-t(src='@/assets/ilustraciones/img9.jpg', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-6.my-3
            .BorTit #[b Figura 1] Entrega de marca. Aprendiz Lisdey z Ortiz. Programa Diseño para la Industria de la moda.        
            img.img-a.img-t.mt-3(src='@/assets/ilustraciones/img10.jpg', alt='')
            figcaption.mt-3 Fuente: SENA (2020).

          .col-lg-6.my-3
            .BorTit #[b Figura 2] Exposición Teoría de la forma. Programa Diseño para la Industria de la moda.        
            img.img-a.img-t.mt-3(src='@/assets/ilustraciones/img11.jpg', alt='')
            figcaption.mt-3 Fuente: SENA (2020).

        .row.justify-content-center.align-items-center
          .col-lg-6.my-3
            .BorTit #[b Figura 3] Exposición de marca. Aprendiz Liz Bohorquez. Programa Diseño para la Industria de la moda.       
            img.img-a.img-t.mt-3(src='@/assets/ilustraciones/img12.jpg', alt='')
            figcaption.mt-3 Fuente: SENA (2020).

          .col-lg-6.my-3
            .BorTit #[b Figura 4] Exposición de marca. Natalia Andrea Osorio. Programa Diseño para la Industria de la moda.       
            img.img-a.img-t.mt-3(src='@/assets/ilustraciones/img13.jpg', alt='')
            figcaption.mt-3 Fuente: SENA (2020).

        .row.justify-content-center.align-items-center
          .col-lg-6.my-3
            .BorTit #[b Figura 5] Exposición de marca. Aprendiz Cristian Dario Quintero Bru. Programa Diseño para la Industria de la moda.     
            img.img-a.img-t.mt-3(src='@/assets/ilustraciones/img14.jpg', alt='')
            figcaption.mt-3 Fuente: SENA (2020).

          .col-lg-6.my-3
            .BorTit #[b Figura 6] Exposición de marca. Gloria Eugenia Gutiérrez Palacio. Programa Diseño para la Industria de la moda.       
            img.img-a.img-t.mt-3(src='@/assets/ilustraciones/img15.jpg', alt='')
            figcaption.mt-3 Fuente: SENA (2020). 

    Separador                             
      
    #t_1_6.titulo-segundo(data-aos="fade-right")
      h2 1.6  Métodos para generar ideas
    .row.justify-content-center.align-items-stretch.mt-5
      .col-lg-4.bg-img-5(data-aos="flip-down")
        
      .col-lg-8.bg-color-3.p-5(data-aos="flip-down")
        p(data-aos="fade-down").mb-0
          span(style='color:#00223D') Existen métodos para 
          span(style='color:#BF3976') generar ideas 
          span(style='color:#00223D') como número de personas, cada una puede organizar su proceso de acuerdo al nivel educativo que tenga, a la sociedad en la que se desarrolla y al medio en que se mueve; 
          span(style='color:#BF3976') las herramientas son utilizadas también de forma particular y todas son válidas 
          span(style='color:#00223D') siempre y cuando se tengan claros los resultados de búsqueda, por lo tanto se pueden sugerir: fotocopias y muestras de tejidos (pared), Block de dibujos (imágenes, tejidos y adornos), Mood-board, Story Board o Panel temático y lluvia de ideas. 

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.bg-img-5-1.p-4
        .row.justify-content-center.align-items-center(data-aos="flip-down")       
          .col-lg-5.img-bottom
            h3.mb-4(data-aos="fade-down").text-center.card-p-1.p-4 Moodboard. Seivewright, Simon (2013).

    p(data-aos="fade-down").mt-5 El creativo aprovecha para desarrollar nuevas creaciones, normalmente en un cuaderno o carpeta digital con dibujos y escritos, bien sea armados en forma de collage, yuxtaposición, lupas o en artículos con preguntas y respuestas, estas técnicas son esencialmente una destilación de la investigación, en cierta forma son la versión destinada a la presentación del cuaderno de investigación. Con la ayuda de ellas el diseñador comunica los temas, conceptos, colores, y tejidos que utilizará para el diseño de la colección de la temporada. Sirven para comunicar a otros diseñadores, jefes, empleados, estilistas, asesores de puntos de ventas, entre otros interesados, todo lo relacionado con la nueva colección.

    p(data-aos="fade-down") “Nunca he visto ventaja en no ir más allá del modo en que la prudencia convencional decreta que debe cortarse una chaqueta. Hace tiempo que comprendí la importancia de ser curioso. No hay que asustarse o esconderse detrás de ideas preconcebidas. Hay que experimentar. Hay que hacerlo y resulta hermoso porque se descubre en ello una energía que, a su vez, alimenta.
    p(data-aos="fade-down") No existen las reglas” John Galliano, de Colin McDowell, Weidenfeld & Nicolson, s.f., como se cita en Sorger et al, 2007, p. 26.

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/fCEbOYzN_II" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   

    Separador                             
      
    #t_1_7.titulo-segundo(data-aos="fade-right")
      h2 1.7  Diseñar 
    .bloque-texto-c.color-primario.p-4.mt-5(data-aos="fade-left")
      i.fas.fa-quote-right
      h5.mb-2 La moda es algo muy importante. Potencia la vida y, como todo aquello que procura placer, vale la pena hacerlo bien
      span (Vivienne Westwood, s.f., como se cita en Sorger et al., 2007, p. 12)

    .bloque-texto-c.color-secundario.p-4.mt-5(data-aos="fade-right")
      i.fas.fa-quote-right
      h5.mb-2 No hay nada que dé más miedo que una página en blanco. ¡No hay que asustarse!

      span Sorger et al., 2007, p. 8.

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-12.bg-color10.p-5.br-radius
        p(data-aos="fade-down")
          span(style='color:#00223D') En el momento de comenzar el 
          span(style='color:#BF3976') proceso de desarrollo creativo
          span(style='color:#00223D') , es bien importante tener a la mano las herramientas necesarias, que permitan
          span(style='color:#BF3976') explorar todas las posibilidades 
          span(style='color:#00223D') que se puedan ocurrir para 
          span(style='color:#BF3976') plasmar ideas en las prendas 
          span(style='color:#00223D') que formarán parte de la colección. En esta fase no se debe descartar nada, porque incluso más adelante esto puede servir para descubrir el 
          span(style='color:#BF3976') potencial de una idea 
          span(style='color:#00223D') aplicada a un nuevo desarrollo.

        img.img-a.img-t.mt-5(data-aos="slide-right")(src='@/assets/ilustraciones/img18.svg', alt='')

        .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-right")
          .col-lg-5.p-1
            p(data-aos="fade-down")
              span(style='color:#00223D') El desarrollo creativo siempre debe tener presente el enfoque o la dirección hacia donde está proyectado el proceso, 
              span(style='color:#BF3976') vestir el cuerpo es la esencia, sin olvidar los complementos que pasan a formar parte del engranaje 
              span(style='color:#00223D') como son:
            p(data-aos="fade-down") Los detalles, las proporciones, las líneas, la silueta, los colores, el tejido y las texturas.  El control que se hace de todos estos elementos, es fundamental al momento de desarrollar una colección.
            h3.text-center.text-color.mt-5 ¡Dios se encuentra en los detalles!

          .col-lg-5
            img.img-a.img-t(data-aos="slide-left")(src='@/assets/ilustraciones/img19.png', alt='')

        figure.mt-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/_NoaHQFC2rs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-down")
          .col-lg-8.p-4
            .row.justify-content-center.align-items-center(data-aos="fade-down")
              .col-lg-6
                p.mb-0.p-2 Torales, E. y Meyer, M. (s.f.). Elementos y principios del diseño: Diseño de Indumentaria Urbana I.    
              .col-lg-6
                a.anexo.a-bg-1(:href="obtenerLink('/downloads/Anexo_5_Diccionario_de_la_moda.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[b Material complementario.] Diseño de Indumentaria Urbana I

    Separador                             
      
    #t_1_8.titulo-segundo(data-aos="fade-right")
      h2 1.8  Cuerpos y siluetas   

    .bloque-texto-c.color-secundario.p-4.mt-5(data-aos="fade-right")
      i.fas.fa-quote-right
      h5.mb-2 Es el momento del nacimiento en el que todos somos iguales, y es de ese instante, del que el humano, intenta huir.”

      span Squicciarino,.1990.

    .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-down")
      .col-lg-10
        img.img-a.img-t(data-aos="slide-left")(src='@/assets/ilustraciones/img20.png', alt='')
    p(data-aos="fade-down").mt-5
      span(style='color:#BF3976') El hombre durante 
      span(style='color:#00223D') toda su existencia siempre se ha caracterizado a 
      span(style='color:#BF3976') diferencia de otras especies
      span(style='color:#00223D') , por las transformaciones aplicadas a su cuerpo, que se ven influenciadas por la geografía, la sociedad, la cultura, la política, la economía y en muchos casos por las jerarquías establecidas por el mismo hombre, el cual 
      span(style='color:#BF3976') a partir de sus necesidades se vio obligado a buscar los medios de protección para su cuerpo, 
      span(style='color:#00223D') que luego se transformaron en artilugios cargados de estética, de simbolismos y diferenciación.

    .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-right")
      .col-lg-6.bg-img-6.py-5.px-0
        .row.justify-content-center.align-items-center.p-5(data-aos="fade-right")
          .col-lg-12
            h4.text-color.text-center.mt-3 El cuerpo en cada individuo por naturaleza siempre dará como resultado una silueta diferente, que a su vez puede ser transformada por todo lo que allí se pueda portar.
            .hr.mt-3
            p.mt-5 En la silueta, se da la primera búsqueda del equilibrio de la estética en la transformación visual del cuerpo, se pretende proyectar un dinamismo en su composición, generar sensaciones determinadas por el uso de materiales, aplicación de volumen, estrechez, texturas, color y en general todo aquello que visualmente hace que las personas se vean diferentes. La adición de ornamentos y accesorios crea la transformación de lo básico, mostrando una distorsión deseada del cuerpo.
            p En el siguiente documento podremos profundizar al respecto.
            .row.justify-content-center.align-items-center.mt-5
              .col-lg-8        
                a.anexo.a-bg-1(:href="obtenerLink('/downloads/Anexo_6_Cuerpos_ideales.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[b Anexo 4.] Cuerpos ideales         
      .col-lg-6.bg-img-11
        

    Separador                             
      
    #t_1_9.titulo-segundo(data-aos="fade-right")
      h2 1.9  Proporciones y líneas 
    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-down")
      .col-lg-5
        p(data-aos="fade-down") Las proporciones del cuerpo visualmente se refieren 
          span(style='color:#BF3976') a como se divide la figura por medio de unas líneas básicas
          span(style='color:#00223D') ; dependiendo de cómo esté dispuesta la silueta, se estiliza, engrosa o cambia de aspecto. 

        p(data-aos="fade-down") Cuando se 
          span(style='color:#BF3976') utilizan líneas
          span(style='color:#00223D') horizontales, verticales, anguladas, curvas, inclinadas de manera independiente o combinada con otros elementos (textura, color, tamaño, forma), se generan 
          span(style='color:#BF3976') ilusiones ópticas
          span(style='color:#00223D') intencionales que aplicadas al vestuario hacen ver diferente el cuerpo.

      .col-lg-5
        img.img-a.img-t(src='@/assets/ilustraciones/img23.svg', alt='')

    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-down")
      .col-lg-11.p-4.bg-color-3
        .row.justify-content-center.align-items-center
          .col-lg-6
            p(data-aos="fade-down") La proporción del cuerpo se define visualmente por la relación de líneas básicas: largo, talle, cintura, pecho, cadera y cuello con las que se generan bloques que permiten la intervención para obtener el equilibrio en el desarrollo de la prenda, creando así focos de atención intencionales para lograr armonía en toda la figura. En una prenda el uso de las líneas se hace evidente en los cortes y las costuras.

            p(data-aos="fade-down") Revise el siguiente contenido para ampliar la información.
            .row.justify-content-center.align-items-center.mt-5
              .col-lg-8           
                a.anexo.a-bg-1(:href="obtenerLink('/downloads/Anexo_7_Proporcion_y_linea.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[b Anexo 5]. Proporción y línea          
          .col-lg-5
            img.img-a.img-t(src='@/assets/ilustraciones/img24.png', alt='')

    Separador                             
      
    #t_1_10.titulo-segundo(data-aos="fade-right")
      h2 1.10  Color 

    img.img-a.img-t(data-aos="fade-left")(src='@/assets/ilustraciones/img25.png', alt='')

    .row.justify-content-start.align-items-center.mt-5(data-aos="fade-down")
      .col-lg-6
        p(data-aos="fade-down") El color es una sensación que producen los rayos luminosos en los órganos visuales y que es interpretada en el cerebro. Se trata de un fenómeno físico-químico donde cada color depende de la longitud de onda.

        p(data-aos="fade-down") 
          span(style='color:#BF3976') La teoría del color es fundamental para el desarrollo de vestuario, 
          span(style='color:#00223D') ya que de alguna forma es una de las primeras decisiones que se toman y nace de la interpretación del concepto. Es 
          span(style='color:#BF3976') determinante 
          span(style='color:#00223D') porque influye en la decisión que pueda tomar el usuario y es el primer contacto entre este y la prenda de vestir; se genera una primera impresión que se produce a partir de la personalidad, el carácter y el mensaje, de acuerdo a la interpretación que se le puede dar al color desde el concepto que se esté manejando.

        p(data-aos="fade-down") 
          span(style='color:#BF3976') No es solamente colorear un dibujo sino saber cómo y porqué aplicar un color
          span(style='color:#00223D') , por medio de este se pueden generar emociones, sensaciones y comunicar, desarrollar propuestas aplicadas a colecciones que permitan construir una propuesta de color creativa y novedosa.       
      .col-lg-6
        img.img-a.img-t.my-3(data-aos="fade-left")(src='@/assets/ilustraciones/img26.png', alt='')

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-12.bg-img-7.p-5.mt-5
        p.text-center.mt-4 Realice la lectura del siguiente documento para complementar la información de este tema.
        .row.justify-content-center.align-items-center(data-aos="flip-down")       
          .col-lg-6.my-3
            .row.justify-content-center.align-items-center
              .col-lg-10           
                a.anexo.a-bg-1(:href="obtenerLink('/downloads/Anexo_8_Tejido_color_y_textura.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[b Material complementario.] Tejido, color y textura   
          .col-lg-6.my-3
            .row.justify-content-center.align-items-center
              .col-lg-10           
                a.anexo.a-bg-1(:href="obtenerLink('/downloads/Anexo_9_Desarrollo_Concepto_Moda_Color_Santiago_Gomez.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[b Material complementario.] Desarrollo de Concepto de Moda y Color  

    Separador                             
      
    #t_1_11.titulo-segundo(data-aos="fade-right")
      h2 1.11  Tejidos y texturas                     
    img.img-a.img-t.my-5(data-aos="fade-left")(src='@/assets/ilustraciones/img28.png', alt='')

    p(data-aos="fade-down") Un tejido textil es una construcción de una tela a partir de una manera particular de entrelazar hilos de forma ordenada, mediante una técnica. 

    p(data-aos="fade-down") Para el desarrollo de una colección es fundamental reconocer las características de los tejidos para seleccionar correctamente los materiales textiles que serán utilizados en la colección; de acuerdo al concepto se dan unas características visuales y táctiles acompañadas de sensaciones que determinan el confort, vertibilidad y estética de las prendas.    

    .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-right")
      .col-lg-5.card-color-1.p-5
        p(data-aos="fade-down") La estructura, forma y calibre de los tejidos son determinantes en el momento de desarrollar una composición que se refleja en un tipo determinado de silueta, donde se pueden generar formas y volúmenes indeterminados que, apoyados en un buen tejido, ayudan a mejorar la apariencia estética de las prendas.

        p(data-aos="fade-down") En el momento de seleccionar un tejido es esencial tener en cuenta los beneficios que se ven reflejados en la apariencia, sensación, color y textura, así los tejidos pueden ser intervenidos de formas distintas, se pueden teñir, bordar y transformar su estructura para aprovechar todas las posibilidades que ofrecen las telas en el desarrollo de colecciones. 
        
      .col-lg-7.bg-img-12(data-aos="fade-left")

    .row.justify-content-center.align-items-stretch(data-aos="fade-left")
      .col-lg-12.card-color-2.p-5
        .row.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-6
            p(data-aos="fade-down") Es bien importante tener en cuenta que la industria textil ha evolucionado a través del tiempo y presenta innovaciones tanto en la parte mecánica y tecnológica, como en el desarrollo y mezclas de nuevas fibras, lo que amplía las posibilidades y beneficios especialmente en el confort de las prendas de vestir. 

            p(data-aos="fade-down") Revise el documento para profundizar conocer más sobre tejidos y texturas.            
          .col-lg-4(data-aos="fade-down") 
            .row.justify-content-center.align-items-center
              .col-lg-11
                a.anexo.a-bg-1(:href="obtenerLink('/downloads/Anexo_10_El_tejido.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[b Anexo 6]. El tejido  

    Separador                             
      
    #t_1_12.titulo-segundo(data-aos="fade-right")
      h2 1.12  Representación gráfica de las ideas 

    p(data-aos="fade-down") En el desarrollo de una colección, 
      span(style='color:#BF3976') las ideas se comunican a través de dibujos por medio del lenguaje universal de signos gráficos
      span(style='color:#00223D') , regidos por normas que lo hacen comprensible para aquellas personas que dominan una determinada área. Es el caso de los que trabajan en el mundo de la moda, que viene cargada de un sinnúmero de simbolismos que le permiten al desarrollador de moda #[b entender las ideologías] provenientes de la estructura e ideas que componen una colección.  

    .row.justify-content-center.align-items-stretch.mt-5(data-aos="fade-left")
      .col-lg-6.bg-img-13(data-aos="fade-left")
      .col-lg-6.card-color-1.p-5
        p.mt-4(data-aos="fade-down") Las habilidades utilizadas para el dibujo son adquiridas a partir de unas técnicas que le permiten al dibujante 
          span(style='color:#BF3976') desarrollar destrezas para la interpretación gráfica de figurines y roperos
          span(style='color:#00223D') , de tal forma que cualquier persona conocedora del tema, pueda elaborar tanto patrones como muestras físicas en un departamento desarrollador de productos de moda.

        p(data-aos="fade-down") Las ideas deben ser plasmadas por el dibujante de tal forma que se #[b aproximen al máximo a una realidad], lo que quiere decir, que los detalles del dibujo hacen que la interpretación conlleve a un resultado óptimo de la idea. 

        p(data-aos="fade-down") A continuación, se puede observar una idea desarrollada:   
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8 
        SlyderA
          .row.justify-content-center.align-items-center.p-5
            .col-lg-11.img-bg-1.p-4
              img.img-a.img-t(data-aos="fade-left")(src='@/assets/ilustraciones/img32.jpg', alt='')
            .col-lg-11.img-bg-2.p-2
              p.text-white.text-center.mb-0 Dibujo plano de prendas de vestir. Naoki Watanabe (2009).

          .row.justify-content-center.align-items-center.p-5
            .col-lg-11.img-bg-1.p-4
              img.img-a.img-t(data-aos="fade-left")(src='@/assets/ilustraciones/img33.jpg', alt='')
            .col-lg-11.img-bg-2.p-2
              p.text-white.text-center.mb-0 Dibujo plano de prendas de vestir. Naoki Watanabe (2009).

          .row.justify-content-center.align-items-center.p-5
            .col-lg-11.img-bg-1.p-4
              img.img-a.img-t(data-aos="fade-left")(src='@/assets/ilustraciones/img34.jpg', alt='')
            .col-lg-11.img-bg-2.p-2
              p.text-white.text-center.mb-0 Dibujo plano de prendas de vestir. Naoki Watanabe (2009).

          .row.justify-content-center.align-items-center.p-5
            .col-lg-11.img-bg-1.p-4
              img.img-a.img-t(data-aos="fade-left")(src='@/assets/ilustraciones/img35.jpg', alt='')
            .col-lg-11.img-bg-2.p-2
              p.text-white.text-center.mb-0 Dibujo plano de prendas de vestir. Naoki Watanabe (2009).

          .row.justify-content-center.align-items-center.p-5
            .col-lg-11.img-bg-1.p-4
              img.img-a.img-t(data-aos="fade-left")(src='@/assets/ilustraciones/img36.jpg', alt='')
            .col-lg-11.img-bg-2.p-2
              p.text-white.text-center.mb-0 Dibujo plano de prendas de vestir. Zeshu-Takamura (2007).

    .row.justify-content-center.align-items-center.mt-5(data-aos="fade-right")
      .col-12.bg-img-8.p-5
        .row.justify-content-center.align-items-center      
          .col-lg-4.my-3
            p Desarrollo de Concepto de Moda y Color por Patricia Baldovino.
            .row.justify-content-center.align-items-center(data-aos="flip-down")       
          .col-lg-5.my-3
            .row.justify-content-center.align-items-center
              .col-lg-11          
                a.anexo.a-bg-1(:href="obtenerLink('/downloads/Anexo_D_Desarrollo_de_Concepto_de_Moda_y_Color_por_Patricia_Baldovino.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p #[b Anexo 7]. Desarrollo de Concepto de Moda y Color 

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
