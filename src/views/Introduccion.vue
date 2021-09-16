<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="fade-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jzPKYbxIwxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p(data-aos="fade-down") La moda influye directamente en el comportamiento, actitud, gustos y preferencias de las personas y puede determinar las características diferenciales del individuo en la sociedad; de allí la importancia que el aprendiz se fundamente con las herramientas necesarias para investigar, conocer, participar y desarrollar propuestas utilizando los medios, desarrollando la capacidad de representar nuevas ideas, teniendo presente que “el cuerpo vestido es su principio y su fin”.

    p(data-aos="fade-down") Este proceso necesita entenderse como un proyecto de construcción de conocimientos que le van sumando de una forma ascendente a su formación, hasta completar las herramientas técnicas y creativas necesarias para el desempeño laboral; proceso que debe ser divertido, apasionante, inspirador, transformador y sobre todo útil en su vida profesional y personal.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
