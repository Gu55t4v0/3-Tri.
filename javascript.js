document.addEventListener('DOMContentLoaded', function() {
    function mostrarEspecificacoes() {
        const carDropdown = document.getElementById('car-dropdown');
        const motorDetails = document.getElementById('motor-details');
        const selectedCar = carDropdown.value;

        let especificacoes = '';

        switch (selectedCar) {
            case 'ferrari':
                especificacoes = `
                    <h4>Ferrari 488</h4>
                    <ul>
                        <li><strong>Motor:</strong> V8 3.9L Biturbo</li>
                        <li><strong>Potência:</strong> 670 cv</li>
                        <li><strong>Torque:</strong> 760 Nm</li>
                        <li><strong>Aceleração (0-100 km/h):</strong> 3.0 segundos</li>
                        <li><strong>Velocidade máxima:</strong> 330 km/h</li>
                    </ul>
                `;
                break;
            case 'lamborghini':
                especificacoes = `
                    <h4>Lamborghini Huracán</h4>
                    <ul>
                        <li><strong>Motor:</strong> V10 5.2L</li>
                        <li><strong>Potência:</strong> 640 cv</li>
                        <li><strong>Torque:</strong> 600 Nm</li>
                        <li><strong>Aceleração (0-100 km/h):</strong> 3.2 segundos</li>
                        <li><strong>Velocidade máxima:</strong> 325 km/h</li>
                    </ul>
                `;
                break;
            case 'porsche':
                especificacoes = `
                    <h4>Porsche 911</h4>
                    <ul>
                        <li><strong>Motor:</strong> 6 cilindros 3.0L Turbo</li>
                        <li><strong>Potência:</strong> 450 cv</li>
                        <li><strong>Torque:</strong> 530 Nm</li>
                        <li><strong>Aceleração (0-100 km/h):</strong> 3.5 segundos</li>
                        <li><strong>Velocidade máxima:</strong> 310 km/h</li>
                    </ul>
                `;
                break;
            case 'astonmartin':
                especificacoes = `
                    <h4>Aston Martin DB11</h4>
                    <ul>
                        <li><strong>Motor:</strong> 4.0L V8</li>
                        <li><strong>Potência:</strong> 503 cv</li>
                        <li><strong>Torque:</strong> 675 Nm</li>
                        <li><strong>Aceleração (0-100 km/h):</strong> 3.9 segundos</li>
                        <li><strong>Velocidade máxima:</strong> 300 km/h</li>
                    </ul>
                `;
                break;
            case 'mclaren':
                especificacoes = `
                    <h4>McLaren 720S</h4>
                    <ul>
                        <li><strong>Motor:</strong> 4.0L V8 biturbo</li>
                        <li><strong>Potência:</strong> 720 cv (710 hp) a 7.500 rpm</li>
                        <li><strong>Torque:</strong> 770 Nm a 5.500 rpm</li>
                        <li><strong>Aceleração (0-100 km/h):</strong> 2.7 segundos</li>
                        <li><strong>Velocidade máxima:</strong> 341 km/h</li>
                    </ul>
                `;
                break;
            case 'corvette':
                especificacoes = `
                    <h4>Chevrolet Corvette Z06 (C8)</h4>
                    <ul>
                        <li><strong>Motor:</strong> 5.5L V8 naturalmente aspirado (LT6)</li>
                        <li><strong>Potência:</strong> 874 cv (670 hp) a 8.400 rpm</li>
                        <li><strong>Torque:</strong> 623 Nm a 6.300 rpm</li>
                        <li><strong>Aceleração (0-100 km/h):</strong> Cerca de 2.6 segundos</li>
                        <li><strong>Velocidade máxima:</strong> Aproximadamente 335 km/h</li>
                    </ul>
                `;
                break;
            case 'bugatti':
                especificacoes = `
                    <h4>Bugatti Chiron</h4>
                    <ul>
                        <li><strong>Motor:</strong> 8.0L W16 quad-turbo</li>
                        <li><strong>Potência:</strong> 1.500 cv (1.479 hp)</li>
                        <li><strong>Torque:</strong> 1.600 Nm</li>
                        <li><strong>Aceleração (0-100 km/h):</strong> 2.5 segundos</li>
                        <li><strong>Velocidade máxima:</strong> 420 km/h (limitada eletronicamente)</li>
                    </ul>
                `;
                break;
            case 'bmw':
                especificacoes = `
                    <h4>BMW M8 (Competition)</h4>
                    <ul>
                        <li><strong>Motor:</strong> 4.4L V8 biturbo</li>
                        <li><strong>Potência:</strong> 625 cv (617 hp) a 6.000 rpm</li>
                        <li><strong>Torque:</strong> 750 Nm a 1.800-5.600 rpm</li>
                        <li><strong>Aceleração (0-100 km/h):</strong> 3.1 segundos</li>
                        <li><strong>Velocidade máxima:</strong> 305 km/h (limitada eletronicamente)</li>
                    </ul>
                `;
                break;
            default:
                especificacoes = `<p>Selecione um carro para ver as especificações.</p>`;
        }

        motorDetails.innerHTML = especificacoes;
    }

    // Adicionando o evento de clique ao botão
    const showButton = document.getElementById('show-button');
    showButton.addEventListener('click', mostrarEspecificacoes);
});
