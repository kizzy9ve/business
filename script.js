fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Meu novo post',
    body: 'Conteúdo do post...',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log('Criado:', data))
.catch(error => console.error('Erro:', error));
