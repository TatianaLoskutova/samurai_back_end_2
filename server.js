fetch('http://localhost:3003/api/books/123', {method: 'GET'}) // URI PARAMETER (12)
fetch('http://localhost:3003/api/books/', {method: 'GET'}) // Хотят все книги от нас

fetch('http://localhost:3003/api/books/2022', {method: 'GET'}) //хотят все книги за 2022,
// но это противоречит.. т.к похоже на id