функция Add(a, b){
  возврат a + b;
}
функция Sub(a, b){
  возврат a - b;
}
функция Mul(a, b){
  возврат a * b;
}
функция Div(a, b){
  if(b == 0){
   возврат 'Error';
  } еще{
     возврат a / b;
  }
}
var a = parseInt(prompt('Введите первое число', ' '));
var b = parseInt(prompt('Введите второе число', ' '));
document.write('Add:' + Add(a, b) + '<br>'<br>);
document.write('Sub:' + Sub(a, b) + '<br>'<br>);
document.write('Mul:' + Mul(a, b) + '<br>'<br>);
document.write('Div:' + Div(a, b) + '<br>'<br>)