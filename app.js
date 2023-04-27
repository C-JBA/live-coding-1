// Escribe tu código aquí.

str="bocina";
Arr=['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];


function FuncionCadena(stri, Arr){
let A=[];

for(i=0;i<=Arr.length-1;i++){

if(Arr[i].length>stri.length){
  console.log(Arr[i])  
  A[A.length]=Arr[i];
}

}
return A;
}

A=FuncionCadena("bocina", Arr)

function printMyArray(Arr){


let con=document.getElementById("ul_")
for (i=0;i<=Arr.length-1;i++){
    let elemento=document.createElement("li");
    elemento.innerText=Arr[i];
    con.insertAdjacentElement('beforeend',elemento);

}

}

printMyArray(A);