let inputText=document.getElementById('input_text');
let outputText=document.getElementById('output_text');
const buttonCod=document.getElementById('button_cod');
const buttonDec=document.getElementById('button_dec');
const buttonCopy=document.getElementById('copiar');
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let text;
let textIndex;
let textCod='';
let textDec='';
let index=0;

function codificar(letra,indiceFor,indexText,codex){
    console.log(`${letra}`,indiceFor);
    textIndex=text.slice(indexText,indiceFor);
    textCod=textCod+textIndex+codex;
    index=indiceFor+1;
};

buttonCod.onclick=()=>{
    text=inputText.value;
    console.log(text,text.length);
   for(let a=0;a<text.length;a++){
         switch(text[a]){
             case "a":
                codificar('a',a,index,'ai');
             break;
             case "e":
                codificar('e',a,index,'enter');
             break;
             case "i":
                codificar('i',a,index,'imes');
             break;
             case "o":
                codificar('o',a,index,'ober');
             break;
             case "u":
                codificar('u',a,index,'ufat');
             break;
         };
   };
   textCod=textCod+text.slice(index);
   outputText.value=textCod;
   console.log(textCod);
   textCod='';
   index=0;   
};

buttonDec.onclick=()=>{
    text=inputText.value;
    textDec=text.replaceAll('ai','a');
    textDec=textDec.replaceAll('enter','e');
    textDec=textDec.replaceAll('imes','i');
    textDec=textDec.replaceAll('ober','o');
    textDec=textDec.replaceAll('ufat','u');

    outputText.value=textDec;
    console.log(textDec);
    textDec='';
};

buttonCopy.onclick=()=>{
    outputText.select();
    navigator.clipboard.writeText(outputText.value);
};





