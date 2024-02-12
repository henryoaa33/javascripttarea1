function calcularArea() {

    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);


    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        alert('Por favor, ingrese valores válidos y positivos para la base y la altura.');
        return;
    }

 
    var area = base * altura;


    document.getElementById('resultado').innerHTML = '<p>Área del rectángulo: ' + area + '</p>';
}

function limpiarCampos() {
   
    document.getElementById('rectanguloForm').reset();
    document.getElementById('resultado').innerHTML = '';
}
