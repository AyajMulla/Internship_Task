const express = require("express");
const app = express();


app.use(express.json());

let users = [
  { id: 1, name: "Ayaj" },
  { id: 2, name: "John" },
    { id: 3, name: "Jane" }
];

// GET Users
app.get("/users", (req, res) => {
  res.json(users);
});

async function getUsers() {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  console.log(data);
}
getUsers();

// POST User
app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json({ message: "User added", users });
});

async function addUser(user) {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
  const data = await response.json();
  console.log(data);
}
addUser({ id: 4, name: "Alice" });


// DELETE User
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "User deleted" });
});

async function deleteUser(id) {
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE"
  });
    console.log(`User with id ${id} deleted`);
}

deleteUser(2);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});