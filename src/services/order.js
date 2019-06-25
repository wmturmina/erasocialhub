import axios from 'axios';

export const getVendas = (filtros) => {

    //console.log('getVendas - Filtro:' + JSON.stringify(filtros));   
    /*{
        API.post('/api/', filtros)
            .then(res => { return res.json(); })
            .catch(err => { console.error('erroK: ' + err); });
    }*/

    let vendas =
        [
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'Maria',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA782',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Patricia',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB892',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Lucas',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DE894',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Leandro',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DABD8',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Augusto',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DB8A2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Bruna',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: '55890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '22/04/2019 14:35',
                nomeCliente: 'Gabriela',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9BBD3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '22/04/2019 14:30',
                nomeCliente: 'Mario',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5B7',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jo�o',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10

            },
            {
                codigo: 'A5890',
                restaurante: '21534 - Drive Embu das Artes',
                parceiro: 'UberEats',
                data: '23/04/2019 14:35',
                nomeCliente: 'MARIA',
                status: 'Processando',
                mensagem: '-',
                produzido: '-',
                numTentativas: 2

            },
            {
                codigo: '9CED3',
                restaurante: '21099 - Roberto Marinho',
                parceiro: 'UberEats',
                data: '24/04/2019 14:30',
                nomeCliente: 'Paulo',
                status: 'Integrado',
                mensagem: '-',
                produzido: '22/04/2019 14:35',
                numTentativas: 0

            },
            {
                codigo: 'EB5D9',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '22/04/2019 14:29',
                nomeCliente: 'Jos�',
                status: 'Cancelado',
                mensagem: 'Cancelado pelo POS: XXXX',
                produzido: '-',
                numTentativas: 10
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            },
            {
                codigo: 'DA882',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '26/04/2019 14:29',
                nomeCliente: 'Carlos',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 0
            },
            {
                codigo: 'DA6D2',
                restaurante: '21919 - Shopping Crystal',
                parceiro: 'UberEats',
                data: '25/04/2019 14:29',
                nomeCliente: 'Julio Almeida',
                status: 'Integrado',
                mensagem: '',
                produzido: '-',
                numTentativas: 1
            }
        ];

    let headerVendas = [
        {
            headerName: "Codigo",
            field: "codigo",
            minWidth: 120,
            cellRenderer: "loadingCellRenderer",
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Restaurante",
            field: "restaurante",
            minWidth: 220,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Parceiro",
            field: "parceiro",
            minWidth: 120,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Data",
            field: "data",
            minWidth: 120,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Nome do cliente",
            field: "nomeCliente",
            minWidth: 220,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Status",
            field: "status",
            minWidth: 120
        },
        {
            headerName: "Mensagem",
            field: "mensagem",
            minWidth: 450,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Produzido",
            field: "produzido",
            minWidth: 120,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "N�m. Tentativas",
            field: "numTentativas",
            minWidth: 160,
            filter: "agNumberColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
    ];

    var dados =
    {
        header: headerVendas,
        vendas: vendas,

    };

    return dados;

};

export const getVendasCancelamentosDia = (filtros) => {

    let vendasECancelamentosPorDia =
        [
            {
                Data: '01/04',
                TotalVendas: 7623,
                TotalCancelamentos: 10
            },
            {
                Data: '02/04',
                TotalVendas: 9654,
                TotalCancelamentos: 12
            },
            {
                Data: '03/04',
                TotalVendas: 8562,
                TotalCancelamentos: 7
            },
            {
                Data: '04/04',
                TotalVendas: 6589,
                TotalCancelamentos: 8
            },
            {
                Data: '05/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '06/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '07/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '08/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '09/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '10/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '11/04',
                TotalVendas: 7623,
                TotalCancelamentos: 10
            },
            {
                Data: '12/04',
                TotalVendas: 9654,
                TotalCancelamentos: 12
            },
            {
                Data: '13/04',
                TotalVendas: 8562,
                TotalCancelamentos: 7
            },
            {
                Data: '14/04',
                TotalVendas: 6589,
                TotalCancelamentos: 8
            },
            {
                Data: '15/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '16/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '17/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '18/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '19/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '20/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '21/04',
                TotalVendas: 7623,
                TotalCancelamentos: 10
            },
            {
                Data: '22/04',
                TotalVendas: 9654,
                TotalCancelamentos: 12
            },
            {
                Data: '23/04',
                TotalVendas: 8562,
                TotalCancelamentos: 7
            },
            {
                Data: '24/04',
                TotalVendas: 6589,
                TotalCancelamentos: 8
            },
            {
                Data: '25/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '26/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '27/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '28/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '29/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
            {
                Data: '30/04',
                TotalVendas: 8569,
                TotalCancelamentos: 6
            },
        ];

    return vendasECancelamentosPorDia;

};

export const getCancelamentosPorTipoEDia = (filtros) => {

    //console.log('getCancelamentosPorTipoEDia - Filtro:' + JSON.stringify(filtros));

    let cancelamentosPorTipoEDia =
        [
            {
                Tipo: 9004,
                Cancelamentos: [
                    {
                        Data: '01/04',
                        Total: 10
                    },
                    {
                        Data: '02/04',
                        Total: 100
                    },
                    {
                        Data: '03/04',
                        Total: 35
                    }
                    ,
                    {
                        Data: '04/04',
                        Total: 70
                    }
                    ,
                    {
                        Data: '05/04',
                        Total: 11
                    },

                    {
                        Data: '06/04',
                        Total: 80
                    },
                    {
                        Data: '07/04',
                        Total: 70
                    },
                    {
                        Data: '08/04',
                        Total: 22
                    }
                    ,
                    {
                        Data: '09/04',
                        Total: 70
                    }
                    ,
                    {
                        Data: '10/04',
                        Total: 70
                    },

                    {
                        Data: '11/04',
                        Total: 80
                    },
                    {
                        Data: '12/04',
                        Total: 70
                    },
                    {
                        Data: '13/04',
                        Total: 58
                    }
                    ,
                    {
                        Data: '14/04',
                        Total: 70
                    }
                    ,
                    {
                        Data: '15/04',
                        Total: 70
                    },

                    {
                        Data: '16/04',
                        Total: 80
                    },
                    {
                        Data: '17/04',
                        Total: 70
                    },
                    {
                        Data: '18/04',
                        Total: 70
                    }
                    ,
                    {
                        Data: '19/04',
                        Total: 10
                    },


                    {
                        Data: '20/04',
                        Total: 80
                    },
                    {
                        Data: '21/04',
                        Total: 70
                    },
                    {
                        Data: '22/04',
                        Total: 58
                    }
                    ,
                    {
                        Data: '23/04',
                        Total: 70
                    }
                    ,
                    {
                        Data: '24/04',
                        Total: 70
                    },

                    {
                        Data: '25/04',
                        Total: 80
                    },
                    {
                        Data: '26/04',
                        Total: 70
                    },
                    {
                        Data: '27/04',
                        Total: 70
                    }
                    ,
                    {
                        Data: '28/04',
                        Total: 10
                    },


                    {
                        Data: '29/04',
                        Total: 70
                    }
                    ,
                    {
                        Data: '30/04',
                        Total: 10
                    }
                ]
            },
            {
                Tipo: 9005,
                Cancelamentos: [
                    {
                        Data: '01/04',
                        Total: 125
                    },
                    {
                        Data: '02/04',
                        Total: 145
                    },
                    {
                        Data: '03/04',
                        Total: 180
                    }
                    ,
                    {
                        Data: '04/04',
                        Total: 160
                    }
                    ,
                    {
                        Data: '05/04',
                        Total: 187
                    },

                    {
                        Data: '06/04',
                        Total: 135
                    },
                    {
                        Data: '07/04',
                        Total: 28
                    },
                    {
                        Data: '08/04',
                        Total: 38
                    }
                    ,
                    {
                        Data: '09/04',
                        Total: 56
                    }
                    ,
                    {
                        Data: '10/04',
                        Total: 80
                    },

                    {
                        Data: '11/04',
                        Total: 22
                    },
                    {
                        Data: '12/04',
                        Total: 70
                    },
                    {
                        Data: '13/04',
                        Total: 58
                    }
                    ,
                    {
                        Data: '14/04',
                        Total: 70
                    }
                    ,
                    {
                        Data: '15/04',
                        Total: 142
                    },

                    {
                        Data: '16/04',
                        Total: 80
                    },
                    {
                        Data: '17/04',
                        Total: 110
                    },
                    {
                        Data: '18/04',
                        Total: 168
                    }
                    ,
                    {
                        Data: '19/04',
                        Total: 10
                    },
                    {
                        Data: '20/04',
                        Total: 152
                    },
                    {
                        Data: '21/04',
                        Total: 39
                    },
                    {
                        Data: '22/04',
                        Total: 88
                    }
                    ,
                    {
                        Data: '23/04',
                        Total: 101
                    }
                    ,
                    {
                        Data: '24/04',
                        Total: 108
                    },

                    {
                        Data: '25/04',
                        Total: 30
                    },
                    {
                        Data: '26/04',
                        Total: 99
                    },
                    {
                        Data: '27/04',
                        Total: 87
                    }
                    ,
                    {
                        Data: '28/04',
                        Total: 25
                    },
                    {
                        Data: '29/04',
                        Total: 10
                    }
                    ,
                    {
                        Data: '30/04',
                        Total: 66
                    }
                ]
            }
        ];

    return cancelamentosPorTipoEDia;

};

export const getVendasPorLoja = (filtros) => {

    //console.log('getVendasPorLoja - Filtro:' + JSON.stringify(filtros));

    let vendasPorLoja = [
        {
            Loja: '15172 - Ibirapuera',
            TotalVendas: 30,
            TotalCancelamentos: 2
        },
        {
            Loja: '15173 - Interlagos',
            TotalVendas: 80,
            TotalCancelamentos: 32
        },
        {
            Loja: '15174 - Tatuapé',
            TotalVendas: 70,
            TotalCancelamentos: 24
        },
        {
            Loja: '15363 - Villa Lobos',
            TotalVendas: 50,
            TotalCancelamentos: 20
        },
        {
            Loja: '15374 - Hélio Pelegrino',
            TotalVendas: 90,
            TotalCancelamentos: 12
        },
        {
            Loja: '15489 - West Plaza',
            TotalVendas: 100,
            TotalCancelamentos: 8
        },
        {
            Loja: '15490 - Super Shopping Osasco',
            TotalVendas: 70,
            TotalCancelamentos: 2
        },
        {
            Loja: '15494 - Abc Plaza',
            TotalVendas: 120,
            TotalCancelamentos: 20
        },
        {
            Loja: '15510 - Pátio Brasil Shopping',
            TotalVendas: 70,
            TotalCancelamentos: 20
        },
        {
            Loja: '15511 - BH Shopping',
            TotalVendas: 100,
            TotalCancelamentos: 8
        },
        {
            Loja: '15512 - Barra Shopping - Bahia',
            TotalVendas: 70,
            TotalCancelamentos: 12
        },
        {
            Loja: '15494 - Abc Plaza',
            TotalVendas: 120,
            TotalCancelamentos: 20
        },
        {
            Loja: '15510 - Pátio Brasil Shopping',
            TotalVendas: 70,
            TotalCancelamentos: 20
        },
        {
            Loja: '15511 - BH Shopping',
            TotalVendas: 100,
            TotalCancelamentos: 8
        },
        {
            Loja: '15512 - Barra Shopping - Bahia',
            TotalVendas: 70,
            TotalCancelamentos: 12
        }
    ];

    return vendasPorLoja;
}

export const getTaxaDeCancelamentoPorDia = (filtros) => {

    //console.log('getTaxaDeCancelamentoPorDia - Filtro:' + JSON.stringify(filtros));

    let taxaDeCancelamentoPorDia =
        [

            {
                Data: '01/04',
                TaxaCancelamento: "4.00"
            },

            {
                Data: '02/04',
                TaxaCancelamento: "1.06"
            },

            {
                Data: '03/04',
                TaxaCancelamento: "5.89"
            },

            {
                Data: '04/04',
                TaxaCancelamento: "6.78"
            },

            {
                Data: '05/04',
                TaxaCancelamento: "1.66"
            },

            {
                Data: '06/04',
                TaxaCancelamento: "1.48"
            },
            {
                Data: '07/04',
                TaxaCancelamento: "0.40"
            },
            {
                Data: '08/04',
                TaxaCancelamento: "3.12"
            },
            {
                Data: '09/04',
                TaxaCancelamento: "4.24"
            },
            {
                Data: '10/04',
                TaxaCancelamento: "2.28"
            },
            {
                Data: '11/04',
                TaxaCancelamento: "0.63"
            },
            {
                Data: '12/04',
                TaxaCancelamento: "0.54"
            },
            {
                Data: '13/04',
                TaxaCancelamento: "0.58"
            },
            {
                Data: '14/04',
                TaxaCancelamento: "0.47"
            },
            {
                Data: '15/04',
                TaxaCancelamento: "0.25"
            },
            {
                Data: '16/04',
                TaxaCancelamento: "0.15"
            },
            {
                Data: '17/04',
                TaxaCancelamento: "0.78"
            },
            {
                Data: '18/04',
                TaxaCancelamento: "1"
            },
            {
                Data: '19/04',
                TaxaCancelamento: "0.45"
            },

        ];

    return taxaDeCancelamentoPorDia;
}

export const getHeaderVendas = (filtros) => {

    //console.log('getHeaderVendas - Filtro:' + JSON.stringify(filtros));

    let getHeaderVendas = [
        {
            headerName: "Codigo",
            field: "codigo",
            minWidth: 85,
            cellRenderer: "loadingCellRenderer",
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Restaurante",
            field: "restaurante",
            minWidth: 220,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Parceiro",
            field: "parceiro",
            minWidth: 100,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Data",
            field: "data",
            minWidth: 120,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Nome do cliente",
            field: "nomeCliente",
            minWidth: 220,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Status",
            field: "status",
            minWidth: 100
        },
        {
            headerName: "Mensagem",
            field: "mensagem",
            minWidth: 350,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Produzido",
            field: "produzido",
            minWidth: 120,
            filter: "agTextColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
        {
            headerName: "Tentativas",
            field: "numTentativas",
            minWidth: 120,
            filter: "agNumberColumnFilter",
            filterParams: {
                suppressAndOrCondition: true,
            }
        },
    ];

    return getHeaderVendas;
}

export const getListaRestaurantes = () => {

    //var config =
    //{
    //    headers:
    //    {
    //        'Access-Control-Allow-Origin': '*',
    //        'Content-Type': 'application/json',
    //    },
    //};

    //, config
    //https://delivery.pos.hmledp.com.br/sac-api/v1.0.0/merchant/list
     

    return (axios.post('https://cors-anywhere.herokuapp.com/https://digital.burgerking.com.br/sac-api/v1.0.0/merchant/list',
        {
            sessionId: "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTY2NDk4NzQsInN1YiI6IkFETUlOIiwidXJwIjoiMTA5Iiwibm1lIjoiQURNSU4iLCJleHAiOjE1NTkyNDE4NzR9.PIMwPSNa9mlcYEg6cXStlomjgdZqMoIWZuDTf3vSsL8"
        }
    ));

}

export const getListaStatus = () => {

    let listaStatus =
        [
            {
                value: 'XXX0',
                label: 'Produzido',
            },
            {
                value: 'XXX1',
                label: 'Cancelado',
            },
            {
                value: 'XXX2',
                label: 'Integrado',
            }
        ];

    return listaStatus;

}

export const getListaParceiros = () => {

    let listaParceiros =
        [
            {
                value: 'XXX0',
                label: 'UberEats',
            },
            {
                value: 'XXX1',
                label: 'iFood',
            },
            {
                value: 'XXX2',
                label: 'Glovo',
            }
        ];

    return listaParceiros;

}

export const getResumoVendas = (filtros) => {

    return {
        vendas: "1000",
        cancelamentoTotalVendas: "50",
        taxaCancelamento: "1,78%"
    }

}