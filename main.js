
/*

En este ejercicio tienes que crear un archivo javascript que contenga una función llamada eliminarUltimo() que reciba como parámetro un array y elimine el último elemento de este.


*/

function eliminarUltimo(){
    let myArray = new Array(3)
    myArray[0] = prompt('Introduce un número')
    myArray[1] = prompt('Introduce un número')
    myArray[2] = prompt('Introduce un número')

    console.log(myArray)

    let remove = myArray.pop()
    console.log(myArray)

    if(myArray.length === 0){
        console.log('El array no puede estar vacio')
    }
    }


eliminarUltimo();