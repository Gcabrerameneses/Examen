<script>
  $(document).ready(function() {
    $.ajax({
      url: 'tu_archivo.json',
      dataType: 'json',
      success: function(data) {
        let html = '';
        data.forEach((elemento) => {
          html += '<section class="producto">';
          html += '<img src="' + elemento.foto + '" class="card-img-top" alt="' + elemento.nombre + '">';
          html += '<div class="card-body">';
          html += '<h5 class="card-title">' + elemento.nombre + '</h5>';
          html += '<p class="card-text">Precio: ' + elemento.valor + '</p>';
          html += '<button onClick="agregarCarro(\'' + elemento.nombre + '\',' + elemento.valor + ')" class="btn btn-danger">Comprar</button>';
          html += '</div>';
          html += '</div>';
          html += '</section>';
        });
        $('#contenedor-productos').html(html);
      },
      error: function() {
        console.error('Error al cargar los datos del producto.');
      }
    })
  })
</script>