$(document).ready(function(){
    
                $("#slider4").responsiveSlides({
                    auto: true,
                    pager: false,
                    nav: false,
                    speed: 500,
                    namespace: "callbacks"

                });


            var userFeed = new Instafeed({
                get: 'user',
                userId: '254267992',
                accessToken: 'YOUR_ACCESS_TOKEN'
            });
            userFeed.run();
            
            $(function () {
                $('#formquest').form({
                    fields: {

                        nome: {
                            identifier: 'nome',
                            rules: [
                                {

                                    type: 'empty',
                                    prompt: 'Por favor digite seu nome '
                                }
                            ]

                        },
                        email: {
                            identifier: 'mail',
                            rules: [
                                {

                                    type: 'email',
                                    prompt: 'Por favor digite um e-mail valido '
                                }
                            ]
                        },
                        telefone: {
                            identifier: 'fone',
                            rules: [
                                {

                                    type: 'number',
                                    prompt: 'Por favor digite seu telefone valido '
                                }
                            ]
                        },
                        onSuccess: function (e) {
                            e.preventDefault();
                            alert('enviando formulário');
                        }
                    }
                });
            });


})
