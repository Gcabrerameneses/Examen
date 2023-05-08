var cajita = $( "#cajita" );
var carrito = $( "#carrito" );



var ListaCarro = sessionStorage.getItem("ListaCarro");
//alert("se ha agregado el producto:" + producto)
if(ListaCarro == null){
    ListaCarro = []
}
else{
    ListaCarro=JSON.parse(ListaCarro)
}
var Mensaje = "Productos agregados: "+ListaCarro.length
carrito.html(Mensaje)

$.ajax({

    url:"productos.json",
    dataType:"json",
    success: function(data){
        let lista_objetos = data
        let listado_personajes = ""
        lista_objetos.forEach((elemento)=>{
            listado_personajes += "<li>"+elemento.producto+" precioso: "+elemento.valor+"</li>" +"<img src='"+elemento.foto +"'> "    
            listado_personajes += `<button onClick='agregarCarro("${elemento.producto}",${elemento.valor})' class='btn btn-danger'>Comprar</button>`
        }
        )
        cajita.html(listado_personajes)    


    },
    error: function(){
        alert("fail");
    }
});

function agregarCarro(producto,valor){
    console.log(ListaCarro)
    
    articulo = {}
    articulo.producto=producto
    articulo.valor=valor
    ListaCarro.push(articulo)
    var Mensaje = "Productos agregados: "+ListaCarro.length
    carrito.html(Mensaje)
    sessionStorage.setItem("ListaCarro",JSON.stringify(ListaCarro) );

    //alert("productos agregados:"+ListaCarro.length)

}

