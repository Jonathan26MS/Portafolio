
//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`


const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
//activa la funsion de encriptar en el boton.
    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";

 //Oculta la div de nota2.
    var divs = document.getElementsByClassName("nota2");
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = "none";
    }
    
//Desoculta la div de copy del botón.
    var divs2 = document.getElementsByClassName("copy");
    for (var j = 0; j < divs2.length; j++) {
      divs2[j].style.display = "block";
    }
}

function btnDesencriptar(){
    //activa la funsion de desencriptar en el boton.
        const textEncriptado = desencriptar(textArea.value)
        mensaje.value = textEncriptado;
        textArea.value="";
        mensaje.style.backgroundImage = "none";
    
     //Oculta la div de nota2.
        var divs = document.getElementsByClassName("nota2");
        for (var i = 0; i < divs.length; i++) {
          divs[i].style.display = "none";
        }
        
    //Desoculta la div de copy del botón.
        var divs2 = document.getElementsByClassName("copy");
        for (var j = 0; j < divs2.length; j++) {
          divs2[j].style.display = "block";
        }
    
    }

//Esta funsion hace la encriptación del mensaje
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    console.log(stringEncriptada);
    console.log(matrizCodigo)
    return stringEncriptada;
    
}

//Esta funsion hace la desencriptación del mensaje
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

//Funcion para copiar el mensaje 
function copiar() {
    mensaje.select();
    document.execCommand("copy");
}