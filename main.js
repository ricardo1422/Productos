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
       let row=` <div class="col-sm-3 mb-4 mb-sm-0">
        <div class="card"  style="height: 35rem;">
            <img src="${pro.image}" class="card-img-top" alt="Imagen Producto">
            <div class="card-body">
            <h5 class="card-title">${pro.name}</h5>
            <p class="card-text">Descripción ${pro.description}</p>
            <p class="card-text">Precio $${pro.price}</p>
             </div>
         </div> 
         <div>`
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

