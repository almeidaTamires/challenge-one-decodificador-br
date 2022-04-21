/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação.
*/
//g - para diferenciar "A de a"

var areaTexto = document.querySelector("#entrada-texto").value;
var btnCript = document.querySelector("#cript"); btnCript.onclick = codificar;
var btnDescript = document.querySelector("#descript"); btnDescript.onclick = descodifica;
var btnCopiar = document.querySelector("#copy"); btnCopiar.onclick = copiarTexto;
var saida = document.querySelector("#saida-texto").value;

function codificar (){
    var texto = document.querySelector("#entrada-texto").value;
    var codifica = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúãõâêîôûÁÉÍÓÚÂÊÎÔÛÃÕ@#$%&*123456789]/g, "  Apenas letras minúsculas e sem acento ");
    document.querySelector("#saida-texto").value = codifica;
    document.querySelector("#entrada-texto").value;
    if (codifica) {
        document.querySelector("#saida-texto").style.backgroundImage = "none";
    }
  }

    function descodifica(){
    var texto = document.querySelector("#entrada-texto").value;
    var descodifica = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector("#saida-texto").value = descodifica;
    document.querySelector("#entrada-texto").value;
}

function copiarTexto(){
    var texCopia = document.querySelector("#saida-texto").value;
    navigator.clipboard.writeText(texCopia);
    texCopia = '';
  }