$(document).ready(function() {
    // Quando o botão dentro do cabeçalho é clicado, o formulário é exibido
    $('header button').click(function() {
        $('form').slideDown();
    });

    // Quando o botão cancelar é clicado, o formulário é recolhido
    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    // Evita o envio do formulário (prevenção de comportamento padrão)
    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // Supondo que você tenha um campo de entrada com id "endereco-imagem-nova"
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver a imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('');  
    });
});

