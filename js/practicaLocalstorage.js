//inicializo las variables
let arraySeries= [];
leerSeries();

function nuevaSerie(){

    let serie = document.getElementById('series').value;
    arraySeries.push(serie);
    console.log(arraySeries);
    //guardar en localstorage
    localStorage.setItem("series", JSON.stringify(arraySeries));
    document.getElementById('series').value = "";

    leerSeries();
}

function leerSeries(){
    if(localStorage.length >0){
        let ulSeries = document.getElementById('listaSeries');
        let _arraySeries = JSON.parse(localStorage.getItem('series'));
        // for(let i=0; i< _arraySeries.length; i++){   
        // }
        //limpiar items de la lista 
        borrarSeries();
        
        let codHTML = "";
        for(let item in _arraySeries){
            // opcion !1 usando el objeto
            // let li = document.createElement('li'); 
            // li.innerText = _arraySeries[item];
            // li.className = 'list-group-item';
            // li.id = item;
            // li.addEventListener("click", function(){itemSeleccionado(item)})
            // se escribe solo click, a dif de en html que se pone el on
            // ulSeries.appendChild(li);

            // opcion 2
            codHTML = `<li class="list-group-item" id="${item}" onclick="itemSeleccionado
            (${item})">${_arraySeries[item]}</li>`
            ulSeries.innerHTML += codHTML;
        }        

        if(arraySeries.length == 0){
            arraySeries = _arraySeries;
        }

    }else{
        //localstorage vacio
    }
}

function borrarSeries(){
    let ulSeries = document.getElementById('listaSeries');
    if(ulSeries.children.length > 0){
        while(ulSeries.firstChild){
            ulSeries.removeChild(ulSeries.firstChild);
        }
    }
}

function agregarSerie(event) {
   console.log(event);
    if(event.keyCode == 13){
        nuevaSerie();
    }
}

function borrarTodo() {
    localStorage.clear();
    borrarSeries();
    arraySeries= [];
    document.getElementById('series').value = "";
}

function itemSeleccionado(pitem){
    // reconozco la posicion del item seleccionado
    console.log("item seleccionado"+pitem);
    // borro el  item del arreglo
    arraySeries.splice(pitem,1);
    // actualizar el localstorage
    localStorage.setItem("series", JSON.stringify(arraySeries));
    // vovlver a dibujar la lista
    leerSeries();
}

// PRACTICA COMPLETA