let producto = 0;
let precio = 0;
let cantidad = 0;
let total = 0;
let seguirComprando = false;


const calcularPrecio = (precio) =>{
    cantidad = Number(prompt('Elija la cantidad de productos que desea comprar: '));
    total += precio * cantidad;

} 

do{
    producto = Number(prompt('Engrese la opcion de compra :\n1. Poncho cambiador \n2. Bolso Impermeable \n3. Parafina ecologica agua caliente \n4. Parafina ecologica agua fria\n5. Salir '));
          
    switch (producto) {
        case 1:
            precio = 10500;
            calcularPrecio(precio);
            break;

        case 2:
            precio = 5200;    
            calcularPrecio(precio);
            break;
        
        case 3:
            precio = 2000;
            calcularPrecio(precio);
            break;

        case 4:
            precio = 2000;    
            calcularPrecio(precio);
            break;

        case 5:
            if(total !== 0){
                alert('Gracias por su compra, el total a abonar es de '+ total)
            }else{
                alert('No se cargo correctamente su compra')
            }
            seguirComprando = confirm("¿Querés agregar otro producto a tu carrito ?"); 
    }

    seguirComprando = confirm("¿Querés agregar otro producto a tu carrito ?"); 

    
    
 
    } while (producto !==5);

       
    
