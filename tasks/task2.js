"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function createUser(user) {
  const url = "https://jsonplaceholder.typicode.com/users";

  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json());
}

console.log(createUser({name: "Sam", email: "fjsnfkjns2342@gmail.com"}))

module.exports = createUser;
