//Cookies - Política de privacidade
var currentDirectory = window.location.pathname.split('/').slice(0, -1).join(',');
var cDir = currentDirectory.split(',');
var local = cDir[cDir.length - 1];
$messagemPolPrivacidade = '';

switch (local) {
    case 'justicaeleitoral':
        $messagemPolPrivacidade = '<p class="privacidade">O Portal JE coleta dados (IP, acesso a links, sistema operacional e navegador), por meio de cookies ou dos navegadores. A coleta é para cumprir obrigação legal, permitir a melhor navegação ou para fins estatísticos. Para saber mais, acesse nossa <a class="external-link" href="https://www.tse.jus.br/transparencia-e-prestacao-de-contas/politica-de-privacidade-e-termos-de-uso" target="_blank" rel="noopener noreferrer">política de privacidade</a>.</p>';
        break;
    case 'titulo-eleitoral':
        $messagemPolPrivacidade = '<p class="privacidade">O Portal JE coleta dados (IP, acesso a links, sistema operacional e navegador), por meio de cookies ou dos navegadores. A coleta é para cumprir obrigação legal, permitir a melhor navegação ou para fins estatísticos. Para saber mais, acesse nossa <a class="external-link" href="https://www.tse.jus.br/transparencia-e-prestacao-de-contas/politica-de-privacidade-e-termos-de-uso" target="_blank" rel="noopener noreferrer">política de privacidade</a>.</p>';
        break;
    default:
        $messagemPolPrivacidade = '<p class="privacidade">O Portal JE coleta dados (IP, acesso a links, sistema operacional e navegador), por meio de cookies ou dos navegadores. A coleta é para cumprir obrigação legal, permitir a melhor navegação ou para fins estatísticos. Para saber mais, acesse nossa <a class="external-link" href="https://www.tse.jus.br/transparencia-e-prestacao-de-contas/politica-de-privacidade-e-termos-de-uso" target="_blank" rel="noopener noreferrer">política de privacidade</a>.</p>';
}


$(".cookies__linha .texto").html($messagemPolPrivacidade);

//Verificar se o usuário já concordou com os termos



function verificar_resposta(nome_cookie) {

    var resposta = Cookies.get(nome_cookie);



    if (resposta == "concordo") {

        $(".cookies").addClass("sr-only");

    }



    // console.log(resposta);

}



verificar_resposta("politica-de-privacidade");



//Abrir e fechar dúvida

$(".cookies .duvida").on('click', function() {

    $(this).find(".texto-duvida").toggleClass("sr-only");

});



//Gravar cookie e descer box

$(".cookies .botao button").on('click', function() {

    $(this).closest(".cookies").addClass("fechar-box-cookies");

    Cookies.set('politica-de-privacidade', 'concordo', {
        expires: 30
    });

});