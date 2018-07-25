

document.getElementById('zero').addEventListener('click',function(){ 
calculator.display1.value += '0'});

document.getElementById('one').addEventListener('click',function(){ 
calculator.display1.value += '1'});

document.getElementById('two').addEventListener('click',function(){ 
calculator.display1.value += '2'});

document.getElementById('three').addEventListener('click',function(){
calculator.display1.value += '3'});

document.getElementById('four').addEventListener('click',function(){ 
calculator.display1.value += '4'});

document.getElementById('five').addEventListener('click',function(){
calculator.display1.value += '5'});

document.getElementById('six').addEventListener('click',function(){ 
calculator.display1.value += '6'});

document.getElementById('seven').addEventListener('click',function(){
calculator.display1.value += '7'});

document.getElementById('eight').addEventListener('click',function(){ 
calculator.display1.value += '8'});

document.getElementById('nine').addEventListener('click',function(){ 
calculator.display1.value += '9'});

document.getElementById('times').addEventListener('click',function(){ 
calculator.display1.value += '*'});

document.getElementById('minus').addEventListener('click',function(){ 
calculator.display1.value += '-'});

document.getElementById('plus').addEventListener('click',function(){ 
calculator.display1.value += '+'});

document.getElementById('div').addEventListener('click',function(){ 
calculator.display1.value += '/'});

document.getElementById('clear').addEventListener('click',function(){ 
calculator.display1.value = ''});

document.getElementById('doit').addEventListener('click',function(){ 
calculator.display1.value = eval(calculator.display1.value);});
