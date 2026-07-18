
const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  

  if(req.url === "/home"){
    res.write(`<h1>This is home page </h1>`)
    return res.end()
  }
  

  else if (req.url === "/men"){
    res.write(`<h1>This is ${req.url} page </h1>`)
    return res.end()
  }

  else if (req.url === "/women"){
    res.write(`<h1>This is ${req.url} page </h1>`)
    return res.end()
  }

  else if (req.url === "/kids"){
    res.write(`<h1>This is ${req.url} page </h1>`)
    return res.end()
  }

  else if (req.url === "/cart"){
    
    res.write(`<h1>This is ${req.url} page </h1>`)
    return res.end()
  
  }






  res.setHeader("Content-Type", "text/html");
  res.write(`
        <!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>

        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/men">Men</a></li>
                <li><a href="/women">Women</a></li>
                <li><a href="/kids">Kids</a></li>
                <li><a href="/cart">Cart</a></li>
            </ul>
        </nav>

</body>
</html>`);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
