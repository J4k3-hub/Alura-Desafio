var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-muneco");
var contenedor = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".contenedor-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatxt = recuperartxt()
    resultado.textContent = encriptarTexto(cajatxt);
}
function desencriptar(){
    ocultarAdelante()
    var cajatxt = recuperartxt()
    resultado.textContent = desencriptar(cajatxt);
}
function recuperartxt(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal+"ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal+"enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal+"imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal+"ober"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }

    }
    return textoFinal;
}
function desencriptar(mensaje){
    var texto = mensaje;
    var textoFinal = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+1
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+1
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+1
        }
        else{
            textoFinal = textoFinal+texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".contenedor-resultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    })
