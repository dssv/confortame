//mongo test initialdata
//----------------------Add Some Fake Funeraries-----------------------------------
db.funeraries.drop();
db.funeraries.insert({Name: 'Funeraria São Lucas' , Cnpj : '10.000.000/0001-00', Rua : 'rua dos anjos', Localizacao: '200 metros', Status: 'Rico', cep: '50620-620', Bairro: 'Torre', Cidade: 'Recife', email : 'funerariasaolucas@hotmail.com', Telephone: '997255717'});
db.funeraries.insert({Name: 'Mortuaria Descanso Eterno' , Cnpj : '20.000.000/0001-01', Rua : 'rua dos mortos', Localizacao: '100 metros', Status: 'classe média', cep: '12345-620', Bairro: 'Cordeiro', Cidade: 'Recife', email : 'mdescansoeterno@hotmail.com', Telephone: '987463579'});
db.funeraries.insert({Name: 'Funeraria São Jorge' , Cnpj : '30.000.000/0001-02', Rua : 'rua Amaurildo Silva', Localizacao: '1 quilometro', Status: 'pobre', cep: '23245-001', Bairro: 'Madalena', Cidade: 'Recife', email : 'ghss@cin.ufpe.br', Telephone: '991434982'});
db.funeraries.insert({Name: 'Funeraria Santa Bárbara' , Cnpj : '40.000.000/0001-03', Rua : 'rua Lagoa do brejo', Localizacao: '3 metros', Status: 'Rico', cep: '00010-123', Bairro: 'Santo Amaro', Cidade: 'Recife', email : 'luizalves66@hotmail.com', Telephone: '999644739'});
db.funeraries.insert({Name: 'Funeraria Monte Verde' , Cnpj : '50.000.000/0001-04', Rua : 'rua das amoras', Localizacao: '855 metros', Status: 'Rico', cep: '78761-321', Bairro: 'Zumbi', Cidade: 'Recife', email : 'contato@planomonteverde.com.br', Telephone: '998231604'});
db.funeraries.insert({Name: 'Funeraria Santa Marta' , Cnpj : '60.000.000/0001-05', Rua : 'rua do Futuro', Localizacao: '7 quilometro', Status: 'pobre', cep: '77777-777', Bairro: 'Graças', Cidade: 'Recife', email : 'funerariasantamartarecife@hotmail.com', Telephone: '987034626'});
db.funeraries.insert({Name: 'Funeraria Batista' , Cnpj : '70.000.000/0001-06', Rua : 'rua Maré rasa', Localizacao: '12 metros', Status: 'Classe média', cep: '23798-798', Bairro: 'Derby', Cidade: 'Recife', email : 'ghss@cin.ufpe.br', Telephone: '987591065'});
db.funeraries.insert({Name: 'Funeraria Monte Cristo' , Cnpj : '80.000.000/0001-07', Rua : 'rua Muralha da China', Localizacao: 'Poucos passos', Status: 'pobre', cep: '90967-010', Bairro: 'Barra de jangada', Cidade: 'Jaboatão', email : 'unificaescritorio@hotmail.com', Telephone: '997255717'});
db.funeraries.insert({Name: 'Funeraria Espírito Santo' , Cnpj : '90.000.000/0001-08', Rua : 'Rua Ingrid Moraes', Localizacao: '900 metros', Status: 'Classe média', cep: '50620-620', Bairro: 'Água fria', Cidade: 'Recife', email : 'ghss@cin.ufpe.br', Telephone: '984611768'});

//-----------------add some fake packages-----------------------------------------

db.funeralpackages.drop();
db.funeralpackages.insert({Name: 'Pacote básico' , Details : 'Com esse valor você pode adquirir em média uma urna em madeira trabalhada com visor; acompanhando de bíblia ou cristo dourados.Inclui transporte, obteção da certidão de óbito e tramites com cemitério', Value : '1800,00', Code: '1'});
db.funeralpackages.insert({Name: 'Pacote médio' , Details : 'Com esse valor você poderá média de coisa com uma urna sextavada com acabamento externo à critério também possui acabamento interno travesseiro e babado em cetim-liso. Acompanha bíblia ou cristo dourados e uma coroa de flores simples', Value : '2100,00', Code: '2'});
db.funeralpackages.insert({Name: 'Pacote Premium' , Details : 'Com esse valor você poderá média de coisa com uma urna sextavada com acabamento externo à critério também possui acabamento interno travesseiro e babado em cetim-liso, acabamento luxo. Acompanha bíblia ou cristo dourados e uma coroa de flores simples', Value : '4000,00', Code: '3'});

//----------------add some fake budgets-------------------------------------------

db.offers.drop();
db.offers.insert({ID: '1' ,Budget:'1000', Cnpj : '70.000.000/0001-08', Details: 'Por um pocuo mais do seu orçamento,podemos te dar urna com adorno', UrnaDetails: 'Urna simples, com imagem de nossa senhora', FlowerDetails: 'As flores requeridas não estão na época, mas posso te indicar Lírios do Campo' });
db.offers.insert({ID: '1' ,Budget:'2000', Cnpj : '80.000.000/0001-08', Details : 'Estamos sempre com você', UrnaDetails: 'Urna preta com visor', FlowerDetails: 'A faixa com o nome pode ser dourada'});
db.offers.insert({ID: '1' ,Budget:'3000', Cnpj : '90.000.000/0001-08', Details: '', UrnaDetails: 'Urna Dourada ', FlowerDetails: 'Fazemos Coroas com várias camadas',});

//---------------Add Some Fake Urnas---------------------------------------

//--------------Add Some Fake Flowers-------------------------------------
