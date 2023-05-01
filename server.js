fetch('http://localhost:3003/api/books/123', {method: 'GET'}) // URI PARAMETER (12)
fetch('http://localhost:3003/api/books/', {method: 'GET'}) // Хотят все книги от нас

fetch('http://localhost:3003/api/books/2022', {method: 'GET'}) //хотят все книги за 2022,
// но это противоречит.. т.к похоже на id

fetch('http://localhost:3003/api/books/2022/london', {method: 'GET'}) //хотят езе Дж.Лондона 2022г

// Поэтому добавляется query parameter ?
fetch('http://localhost:3003/api/books?author=london&year=2022', {method: 'GET'})//query param
fetch('http://localhost:3003/api/books?year=2022&limit=100', {method: 'GET'})//100 книг за 2022 год
fetch('http://localhost:3003/api/books?year=2022&limit=100&sort=title', {method: 'GET'})//100 книг за 2022 г.

fetch('http://localhost:3003/api/books/123', {method: 'DELETE'}) // Как поавило достаточно идентификатора

//POST запросы сложнее.
fetch('http://localhost:3003/api/users/322/books?title=JS&author=dimych', {method: 'POST'})
// заебно писать через query. А адресна строка не безгранична. Поэтому вклиниваем BODY
fetch('http://localhost:3003/api/users/322/books', {method: 'POST', body:}) // тело, payload полез загрузка
// в тело json файл
fetch('http://localhost:3003/api/users/322/books', {method: 'POST', body:{ title: 'JS - Samurai Way',
    author: 'Dimych' }})

fetch('http://localhost:3003/api/users/322/books', {method: 'POST', body: JSON.stringify(){ title: 'JS - Samurai Way',
        author: 'Dimych' }}) // указываем чтобы все в строки было превращено

fetch('http://localhost:3003/api/users/322/books/322', {method: 'PUT', body: JSON.stringify(){ title: 'JS - Samurai Way',
    author: 'Dimych' }}) // указываем чтобы все в строки было превращено

fetch('http://localhost:3003/api/users/322/books', {method: 'POST', body: JSON.stringify({ title: 'JS - Samurai Way',
    author: 'Dimych' }), headers{ 'contenr-type': 'application/json'} }) // для метаданных указываем hedear, что это
// json