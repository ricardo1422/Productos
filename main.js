const divData=document.getElementById("divData");
let contador=0;
function getData(){
    const promesa=fetch("https://freetestapi.com/api/v1/products",{method:"GET"});
    promesa.then((response)=>{
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            }
        ).catch((error)=>console.log("Problema con el Json",error))
    })
    .catch((err)=>console.log("Exitio un problema en la solicitud",err))
}

function createCards(productos){
    productos.forEach(pro=> {
       let row=` 
        <div class="col-sm-3 mb-4 mb-sm-0">
            <div class="card"  style="height: 35rem;">
                <img src="${pro.image}" class="card-img-top" alt="Imagen Producto">
                <div class="card-body">
                <h5 class="card-title">${pro.name}</h5>
                <p class="card-text">Descripción ${pro.description}</p>
                <p class="card-text">Precio $${pro.price}</p>
                </div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${pro.id}Modal">
                Más información
                </button>
            </div> 
         <div>
        <!-- Modal -->
        <div class="modal fade" id="${pro.id}Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${pro.name}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                     <p>Descripción: ${pro.description}
                     <br>
                     Marca: ${pro.brand}
                     <br>
                     Valoraciones: ${pro.rating}
                     <br>
                     Precio: $${pro.price}
                     </p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>`
         contador++
         if (contador==4) 
            {
                row=row+"<br>"
                contador=0;
            }
            
        /*divData.insertAdjacentHTML("beforeend",row)*/
        divData.insertAdjacentHTML("beforeend",row);

    });
    
}

getData()

