import http from "http";
// port no padrao de variavel estatica
const PORT = 3000;

const rotas = {
    "/": "Curso de node.js",
    "/livros" : "Entrei na rota livros",
    "/autores" : "Entrei autores"
};

// criando o serve utilizando resquest e response
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(rotas[req.url]);
})

// servidor escutando na port declarada no inicio
server.listen(PORT, () => {
    console.log("servidor escutando!");
});

