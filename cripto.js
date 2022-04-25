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

//variaveis para acessar os elementos
const areaTexto = document.querySelector("#entrada-texto").value;
const btnCript = document.querySelector("#cript"); btnCript.onclick = codificar;
const btnDescript = document.querySelector("#descript"); btnDescript.onclick = descodifica;
const btnCopiar = document.querySelector("#copy"); btnCopiar.onclick = copiarTexto;
const saida = document.querySelector("#saida-texto").value;

//codificar
function codificar (){
    var texto = document.querySelector("#entrada-texto").value;
    var codifica = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat").replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúãõâêîôûÁÉÍÓÚÂÊÎÔÛÃÕ@#$%&*123456789]/g, "  Apenas letras minúsculas e sem acento ");
    document.querySelector("#saida-texto").value = codifica;
    document.querySelector("#entrada-texto").value;
    var procuraErro = codifica.search(/[A-Z||áàâãä-úùũûü||Çç]/);
    if(procuraErro != -1){
    alert ('Apenas letras minúsculas e sem acento.Tente novamente!');
    }
   else if (codifica) {
        document.querySelector("#saida-texto").style.backgroundImage = "none";
    }
  }

    //descodificar
    function descodifica(){
    var texto = document.querySelector("#entrada-texto").value;
    var descodifica = texto.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.querySelector("#saida-texto").value = descodifica;
    document.querySelector("#entrada-texto").value;
}
  //copiar
function copiarTexto(){
    var texCopia = document.querySelector("#saida-texto").value;
    navigator.clipboard.writeText(texCopia);
    texCopia = '';
  }