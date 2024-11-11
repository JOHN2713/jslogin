const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware para analizar el cuerpo de las solicitudes (por ejemplo, login)
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para mostrar el formulario de login
app.get('/', (req, res) => {
    res.send(`
        <h2>Login</h2>
        <form action="/login" method="POST">
            <label for="username">Username:</label>
            <input type="text" name="username" id="username" required />
            <br />
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" required />
            <br />
            <button type="submit">Login</button>
        </form>
    `);
});

// Ruta para manejar el formulario de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verificar las credenciales
    if (username === 'admin' && password === '1234') {
        res.send('<h3>Login Successful!</h3>');
    } else {
        res.send('<h3>Login Failed. Incorrect username or password.</h3>');
    }
});

// Establecer el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
