$(document).ready(function() {
    $('#pesquisar').keyup(function() {
        var stringPesquisa = $(this).val()
        $('.geral_perguntas div')
            .parent()
            .hide()
        $('.geral_perguntas div:contains(' + stringPesquisa + ')')
            .parent()
            .show()
    })

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('a[href="#top"]').fadeIn()
        } else {
            $('a[href="#top"]').fadeOut()
        }
    })

    $('a[href="#top"]').click(function() {
        $('html, body').animate({
                scrollTop: 0
            },
            800
        )
        return false
    })

    // carrega cabecalho nas páginas internas
    // if (window.location.origin === 'http://www.justicaeleitoral.jus.br') {
    //   $('#header').load(
    //     'https://www.justicaeleitoral.jus.br/assets/inc/header.html #cabecalho_je'
    //   )
    // } else {
    //   $('#header').load('../assets/inc/header.html #cabecalho_je')
    // }

    var $meuMenu = $('#menuFixo')
    if ($meuMenu.length) {
        var offset = $meuMenu.offset().top

        $(document).on('scroll', function() {
            if (offset <= $(window).scrollTop()) {
                $meuMenu.addClass('fixar')
                $('.je-menu').addClass('menu-drop')
                $('.je-menu ul').addClass('drop-content')
                $('.btn-selecionar').addClass('btn-selecionar-visivel')
            } else {
                $meuMenu.removeClass('fixar')
                $('.je-menu').removeClass('menu-drop')
                $('.je-menu ul').removeClass('drop-content')
                $('.btn-selecionar').removeClass('btn-selecionar-visivel')
            }
        })
    }
})

$('.area-de-comunicacao .abrir-menu').click(function() {
    $('.area-de-comunicacao .sub-menu').fadeIn('')
    $('.area-de-comunicacao .abrir-menu').hide()
    $('.area-de-comunicacao .fechar-menu').fadeIn()
})

$('.area-de-comunicacao .fechar-menu').click(function() {
    $('.area-de-comunicacao .sub-menu').fadeOut()
    $('.area-de-comunicacao .fechar-menu').hide()
    $('.area-de-comunicacao .abrir-menu').fadeIn()
})

$('#ver-grade').click(function() {
    $('#ver-grade').addClass('close')
    $('#ver-lista').removeClass('close')
    $('#nova-home .card-bg').removeClass('col-md-4')
    $('#nova-home .card-bg').addClass('col-md-12')
    $('#nova-home .card-bg').addClass('card-bg-100')
})

$('#ver-lista').click(function() {
    $('#ver-lista').addClass('close')
    $('#ver-grade').removeClass('close')
    $('#nova-home .card-bg').addClass('col-md-4')
    $('#nova-home .card-bg').removeClass('col-md-12')
    $('#nova-home .card-bg').removeClass('card-bg-100')
})

$('#mostrar-mais-cards').click(function() {
    $('#mostrar-mais-cards').addClass('close');
    $('#mostrar-menos-cards').removeClass('close');
    $('.card-podenaopode').removeClass('close');
    $('.card-tira-duvidas-whatsapp').removeClass('close');
    $('.card-desinformacao').removeClass('close');
});

$('#mostrar-menos-cards').click(function() {
    $('#mostrar-mais-cards').removeClass('close');
    $('#mostrar-menos-cards').addClass('close');
    $('.card-podenaopode').addClass('close');
    $('.card-tira-duvidas-whatsapp').addClass('close');
    $('.card-desinformacao').addClass('close');
});




// Carrega o topo do site - faixa azul - links de acessibilidade e transparência
$('#header .topo').append(
    '<div class="container">' +
    '<div class="row">' +
    '<div class="col-md-6 acessibilidade">' +
    '<div class="acessibilidade_inline-block">' +
    '<a target="_blank" rel="noopener noreferrer" href="#content" accesskey="1" class="acessibilidade_oculto">' +
    '<span>Conteúdo principal [1]</span>' +
    '</a>' +
    '</div>' +
    '<div class="acessibilidade_inline-block">' +
    '<a target="_blank" rel="noopener noreferrer" href="#nav-principal" accesskey="2" class=" acessibilidade_oculto">' +
    '<span>Menu principal [2]</span>' +
    '</a>' +
    '</div>' +
    '</div>' +
    '<div class="col-md-12 text-right bloco-acessibilidade">' +
    '<a class="transparencia_link" title="Acessibilidade" href="http://www.tse.jus.br/acessibilidades-tse">Acessibilidade</a>' +
    '<a target="_blank" rel="noopener noreferrer" href="http://www.tse.jus.br/transparencia">Transparência</a>' +
    '<a target="_blank" rel="noopener noreferrer" href="http://www.tse.jus.br/transparencia/acesso-a-informacao/acesso-a-informacao" title="Link acesso à Informação">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/acesso-informacao.png" alt="Imagem acesso à Informação"></a>' +
    '</div>' +
    '</div>' +
    '</div>'
);


//  Carrega o menu externo geral do topo
$('#header .menu').append(
    '<nav class = "navbar navbar-expand-xs navbar-light bg-faded navbar-toggleable-md">' +
    '<a class="navbar-brand" href="https://www.justicaeleitoral.jus.br" title="Página inicial da Justiça Eleitoral">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/logo-je.png" class="d-inline-block align-top" alt="">' +
    '</a>' +
    '<button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#collapseExample" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="iconne"><span class="texto-menu"></span> <i class="fa fa-bars"></i></span>' +
    '<span class="close"><span class="texto-menu"></span> <i class="fa fa-times"></i></span>' +
    '</button>' +
    '</nav>'
);

// Carrega o menu interno comum a todas as páginas da JE (Exceto a Fato ou Boato, pois está é mantida peo Plone. Tem que enviar e-mail para SEDESC IV)
$('#header .menu-interno').append(
    '<ul class="nav">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="https://www.justicaeleitoral.jus.br/a-justica-eleitoral.html">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/icone-menu-aje.png"> A Justiça Eleitoral</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="https://www.justicaeleitoral.jus.br/biometria">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/icone-menu-biometria.png"> Biometria' +
    '</a>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="https://www.justicaeleitoral.jus.br/desinformacao">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/icone-menu-desinformacao.png"> Desinformação' +
    '</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="https://www.justicaeleitoral.jus.br/dialogos-democraticos">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/icone-menu-dialogos.png"> Diálogos Democráticos' +
    '</a>' +
    '</li>' +
    '</ul>' +
    '<ul class="nav">' +
    '<li class="nav-item">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/icone-menu-portaldaseleicoes.png"> Eleições' +
    '<ul class="submenu">' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/calendario-eleitoral/">Calendário Eleitoral</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/DivulgaCand/">Conheça seu candidato</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/cde-2020">CDE 2020</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/doadores-eleicoes/">Doadores</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/eleicoes-2020-em-numeros/">Eleições 2020 em números</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/eleicoes/mesario/">Mesários</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/parcerias-digitais-eleicoes/">Parcerias digitais</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/pode-ou-nao-pode/">Pode ou não pode</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/tudo-sobre-as-eleicoes-2020/">Tudo sobre as eleições 2020</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/dicas-ao-eleitor">Vote com segurança</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/tudo-sobre-as-eleicoes-perguntas-frequentes/">Tudo sobre as eleições 2020 - perguntas frequentes</a></li>' +
    '</ul>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="https://www.justicaeleitoral.jus.br/fato-ou-boato/">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/icone-menu-fatoouboato.png"> Fato ou Boato?' +
    '</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="https://www.justicaeleitoral.jus.br/jovem-eleitor">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/icone-menu-jovemeleitor.png"> Jovem Eleitor' +
    '</a>' +
    '</li>' +
    '</ul>' +
    '<ul class="nav">' +

    '<li class="nav-item">' +
    '<a class="nav-link" href="https://www.justicaeleitoral.jus.br/participa-mulher">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/icone-menu-participamulher.png"> Participa Mulher' +
    '</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/icone-menu-seguranca.png"> Segurança' +
    '<ul class="submenu seguranca">' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/seguranca-da-urna/">Segurança da urna</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/spe/">Segurança do processo eleitoral</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="https://www.justicaeleitoral.jus.br/tps/">Teste Público de Segurança</a></li>' +
    '</li>' +
    '</ul>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="https://www.justicaeleitoral.jus.br/titulo-eleitoral">' +
    '<img src="https://www.justicaeleitoral.jus.br/assets/img/icone-menu-te.png"> Título Eleitoral' +
    '</a>' +
    '</li>' +
    '<li class="nav-item ultimo-link">' +
    '<a class="nav-link" href="https://www.justicaeleitoral.jus.br"><strong>Início página JE</strong></a>' +
    '</li>' +
    '</ul>'
);


// Carrega o rodapé geral dos sites
$('#footer-geral').append(
    '<div class="container-fluid footer">' +
    '<div class="container">' +
    '<div class="row">' +
    '<div class="col-md-12 text-center">' +

    '<img src="https://www.justicaeleitoral.jus.br/assets/img/logoJE_negativa.png" class="d-inline-block align-top" width="100px" alt="">' +


    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="faixa-aviso">' +

    '</div>'
);

$(".menu-interno > .nav > .nav-item").on('click', function() {
    $(this).toggleClass("abrir-menu");
    $(this).find(".submenu").toggleClass("abrir-submenu");
    return
});

$(document).on('click', function(e) {
    var elemento = $(e.target);
    var verficar_abrir_menu = elemento.hasClass('abrir-menu');
    var nav_item = $(".menu-interno > .nav > .nav-item");

    // console.log(elemento);
    // console.log(verficar_abrir_menu);

    if (!verficar_abrir_menu) {
        nav_item.removeClass("abrir-menu");
        nav_item.find(".submenu").removeClass("abrir-submenu");
    }

});