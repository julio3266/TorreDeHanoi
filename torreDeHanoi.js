window.load = initPage;
const Torre1 = n1;
const Torre2 = n2;
const Torre3 = n3;
const n = 4;

//n =  discos
//origem,auxiliar e destino
    TorreDeHanoi(n, origem, destino, auxiliar);

function TorreDeHanoi(n, origem, destino, auxiliar){
    if(n == 1) {
        document.write("Movimente o disco"+ n + "Da" + origem + "até" + destino + "</br>"); //quebra linha
    } else {
        TorreDeHanoi(n - 1, origem, auxiliar, destino);
        
        document.write('Mova o disco' + 1 + 'De' + origem + 'Até' + destino + '</br>');
        TorreDeHanoi(n - 1, auxiliar, destino, origem);
    }   
}
