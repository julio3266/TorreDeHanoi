var torre1 = 1;
var torre2 = 2;
var torre3 = 3;
var n = 4; 

hanoi(n, torre1, torre3, torre2);

function hanoi(n, ori, des, aux)
{
 if(n == 1)
  document.write("Mova o disco " + n + " da torre de " + ori + " até " + des + "<br/>");
 else
 {
  hanoi(n - 1, ori, aux, des);
    document.write("Mova o disco " + n + " da torre de " + ori + " até " + des + "<br/>");
  hanoi(n - 1, aux, des, ori);
 }
}
