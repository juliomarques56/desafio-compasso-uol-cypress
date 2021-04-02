Feature: Inserir produtos no carrinho apartir do resultado de busca do site automation practice

    Scenario Outline: Adicionar o primeiro no carrinho o primeiro produto retornado de uma busca
        Given que acesso o site <site>
        And pesquiso pelo conteudo Faded Short Sleeve
        When adiciono o primeiro produto retornado pela pesquisa
        Then o produto e adicionado no carrinho de compras

        Examples:
            | site                           | 
            | http://automationpractice.com/ |  

