function generatePlain(){
    var str = "";
    for(let i = 65; i <= 90 ; i++)
    {
        str += String.fromCharCode(i);
    }
    return str;
}

function generateKey(){
    let key = generatePlain();

    for(let i = 0; i < key.length; i++)
    {
        let target = Math.floor(Math.random() * 26);
        let a = key[i];
        let b = key[target];
        key = key.replace(a,'@');
        key = key.replace(b,'#');
        key = key.replace('#', a);
        key = key.replace('@', b);
    }
    return key;
}

function generate(){
    //document.getElementById('txtPlain').value = generatePlain(); //moved to onload body
    document.getElementById('txtKey').value = generateKey();
}

function reset(){
    let generateId = document.getElementById("btnGenerate");
    let addId = document.getElementById("btnCompleteKey");
    document.getElementById("txtKey").value = '';
    document.getElementById("txtKey").focus();
    generateId.removeAttribute("hidden");
    addId.setAttribute("hidden", "hidden");
}

function replaceButton(){
    let generateId = document.getElementById("btnGenerate");
    let addId = document.getElementById("btnCompleteKey");
    let txtKeyId = document.getElementById("txtKey").value.length;
    if(txtKeyId === 0)
    {
        generateId.removeAttribute("hidden");
        addId.setAttribute("hidden", "hidden");
    }
    else
    {
        generateId.setAttribute("hidden", "hidden");
        addId.removeAttribute("hidden");
    }
}