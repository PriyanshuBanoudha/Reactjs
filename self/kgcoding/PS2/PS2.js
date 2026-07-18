const http = require('http')
const calculator = require('./calc')

const server = http.createServer(calculator)
const PORT = 8080
server.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
    
})