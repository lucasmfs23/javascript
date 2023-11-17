var pag = "Página carregada com sucesso!";
alert(pag);

function valor(num1, num2, saida){
    var x = Number(document.getElementById(num1).value);
    var y = Number(document.getElementById(num2).value);
    var soma=x + y;
    document.getElementById(saida).innerHTML =
    'O resultado é ' + soma;
}
    function valor2(num3, num4, saida2){
    var a = Number(document.getElementById(num3).value);
    var b = Number(document.getElementById(num4).value);   
    var dividir= a/b;
    document.getElementById(saida2).innerHTML =
    'O resultado é ' + dividir;
}
    function valor3(num5, num6, saida3){
    var c = Number(document.getElementById(num5).value);
    var d = Number(document.getElementById(num6).value);
    var multi= c*d;
    document.getElementById(saida3).innerHTML =
    'O resultado é ' + multi;
}
    function valor4(num7, num8, saida4){
    var f = Number(document.getElementById(num7).value);
    var g = Number(document.getElementById(num8).value);
    var compara;
        if(f==g){
    compara='São iguais!';
        }else {
            compara='São diferentes!';
        }
    document.getElementById(saida4).innerHTML =
    'O resultado é ' + compara;
}
function valores(nume1, nume2, nume3, result){
    var x = Number(document.getElementById(nume1).value);
    var y = Number(document.getElementById(nume2).value);
    var w = Number(document.getElementById(nume3).value);
    var média=(x + y + w)/3;
    document.getElementById(result).innerHTML =
    'O resultado da média é ' + média;
}
function verif(idade1, resulta){
    var x = Number(document.getElementById(idade1).value);
    var idade;
    if(x >= 18){
    idade="maior de idade";
    } else{
    idade="não é maior de idade";
    }
    document.getElementById(resulta).innerHTML =
    'Está pessoa ' + idade;
}
