function encriptar() {
    var texto = document.getElementById("encrypterText").value.toLowerCase();
    // i es para que afecte tanto mayusculas como minusculas -- e E
    // g para toda la linea u oracion
    // m para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("doll").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("decryptor").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("encrypterText").value.toLowerCase();
    // i es para que afecte tanto mayusculas como minusculas -- e E
    // g para toda la linea u oracion
    // m para que afecte a multiples lineas o parrafos
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("doll").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("decryptor").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function copy(){
    var decryptor = document.getElementById("decryptor");
    decryptor.select();
    document.execCommand("copy");
}