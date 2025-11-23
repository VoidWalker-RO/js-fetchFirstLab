"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

function fetchUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";

  return fetch(url)
    .then(response => response.json());
}

console.log(fetchUsers())

module.exports = fetchUsers;