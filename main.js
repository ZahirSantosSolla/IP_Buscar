// document.getElementById('locateButton').addEventListener('click', function() {
//     const ip = document.getElementById('ipInput').value;
//     const resultDiv = document.getElementById('result');

//     resultDiv.innerHTML = '';

//     if (!ip) {
//         resultDiv.innerHTML = '<div class="alert alert-danger">Por favor, digite um endereço IP valido</div>';
//         return;
//     }

//     fetch(`https://ipapi.co/${ip}/json/`)
//         .then(response => response.json())
//         .then(data => {
//             if (data.status === 'fail') {
//                 resultDiv.innerHTML = '<div class="alert alert-danger">IP não encontrado.</div>';
//             } else {
//                 resultDiv.innerHTML = `
//                     <div class="alert alert-success">
//                         <h5>Informações do IP:</h5>
//                         <p><strong>IP:</strong> ${data.query}</p>
//                         <p><strong>Cidade:</strong> ${data.city}</p>
//                         <p><strong>Região:</strong> ${data.regionName}</p>
//                         <p><strong>País:</strong> ${data.country}</p>
//                         <p><strong>Latitude:</strong> ${data.lat}</p>
//                         <p><strong>Longitude:</strong> ${data.lon}</p>
//                     </div>
//                 `;
//             }
//         })
//         .catch(error => {
//             resultDiv.innerHTML = '<div class="alert alert-danger">Ocorreu um erro. Tente novamente.</div>';
//             console.error('Erro:', error);
//         });
// });

document.getElementById('locateButton').addEventListener('click', function() {
    const ip = document.getElementById('ipInput').value;
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    if (!ip) {
        resultDiv.innerHTML = '<div class="alert alert-danger">Por favor, digite um endereço IP válido</div>';
        return;
    }

    fetch(`https://ipapi.co/${ip}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                resultDiv.innerHTML = '<div class="alert alert-danger">IP não encontrado.</div>';
            } else {
                resultDiv.innerHTML = `
                    <div class="alert alert-success">
                        <h5>Informações do IP:</h5>
                        <p><strong>IP:</strong> ${data.ip}</p>
                        <p><strong>Cidade:</strong> ${data.city}</p>
                        <p><strong>Região:</strong> ${data.region}</p>
                        <p><strong>País:</strong> ${data.country}</p>
                        <p><strong>Latitude:</strong> ${data.latitude}</p>
                        <p><strong>Longitude:</strong> ${data.longitude}</p>
                    </div>
                `;
            }
        })
        .catch(error => {
            resultDiv.innerHTML = '<div class="alert alert-danger">Ocorreu um erro. Tente novamente.</div>';
            console.error('Erro:', error);
        });
});

let map;
