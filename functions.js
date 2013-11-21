function teclado (elemento, parametro, documento){
    var KeyID = (window.event) ? event.keyCode : elemento.keyCode;
        console.log(KeyID);
        if(KeyID === 13){
            switch (parametro){
            case 'mostrar':
                    break;
            case 'esconder':
                elemento.blur();   
                    break;
            case 'submeter':
                var valor = elemento.value;
                    if (valor === '')
                        valor = 'vazio';
                alert('Você submeteu: ' + valor);    
                    break;
            case 'proximo':
                documento.getElementById('proximo').focus();
                    break;
            case 'id':
                documento.getElementById('codigo').innerHTML='ID da Tecla: ' + KeyID;
                    break;
            }
        }
    else
        documento.getElementById('codigo').innerHTML='    ID da Tecla: ' + KeyID;
    }