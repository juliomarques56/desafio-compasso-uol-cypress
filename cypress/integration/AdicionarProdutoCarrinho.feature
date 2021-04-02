# Feature: Inserir produtos no carrinho apartir do resultado de busca do site automation practice

#     Scenario: Adicionar o primeiro 
#         Given que acesso o site
#         And pesquiso pelo produto
#         And adiciono o primeiro produto retornado pela pesquisa
#         When eu adiciono o produto ao carrinho de compras
#         Then o produto e adicioinado no carrinho de compras





Feature: Inserir produtos no carrinho apartir do resultado de busca do site automation practice

    Scenario Outline: Adicionar o primeiro 
        Given que acesso o site <site>
        And pesquiso pelo produto
        When adiciono o primeiro produto retornado pela pesquisa
        Then o produto e adicioinado no carrinho de compras

        Examples:
            | site                           | 
            | http://automationpractice.com/ |  

