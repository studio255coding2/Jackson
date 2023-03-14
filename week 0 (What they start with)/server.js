const http = require("http").createServer();

const io = require("socket.io")(http, {
    cors: {orgin: "*"}
})

io.on("connection", (socket) => {
    socket.on("gameDataFromHost", (data) => {
        io.emit("gameDataToClient", data)
    })
})

http.listen(8080, () => console.log("server setup"))

