const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const ancoraLink = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = "Manipulando o DOM com JS"
ancoraLink.innerText = "Acesse o curso responsável por gerar novos programadores aqui!"

listaNaoOrdenada.innerHTML = `
    <li>Aprenda com alguns dos melhores professores do mercado</li>
    <li>Com aulas gravadas e ao vivo</li>
    <li>E tudo isso por um preço que cabe no seu bolso!</li>
`
listaOrdenada.innerHTML = `
    <li><a href="https://www.nexaresources.com/nexa-e-aws-vao-capacitar-100-mil-novos-talentos-em-computacao-em-nuvem-gratuitamente/" target="_blank">Saiba mais aqui</a></li>
    <li><a href="https://aws.amazon.com/pt/what-is-cloud-computing/" target="_blank">Sobre cloud computing</a></li>
    <li><a href="https://www.youtube.com/watch?v=2pOPuX4_BxM" target="_blank">Vídeo sobre AWS Cloud Services</a></li>
`
