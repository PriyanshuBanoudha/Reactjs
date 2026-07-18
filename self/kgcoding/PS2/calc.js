const sumRequestHandler = require("./sum")


const calculator = (req,res)=>{
    console.log(req.url , req.method);
    if (req.url === "/")
    {
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
                    <body>
                        <h1> Welcome to calculator </h1>
                        <a href="/calculator">Click for navigate to calculator</a>
                    </body>
            
            </html>
            `)
        return res.end()
    }

    else if (req.url.toLowerCase() === "/calculator"){
        res.setHeader("Content-Type", "text/html");
        res.write(`
            <html>
                <body>
                     <h1> Welcome to calculator </h1>
                    <h1>This is calculator page </h1>
                    <form action="/calculate-result" method="POST">
                    <input type="number" placeholder="First Number" name="first">
                    <input type="number" placeholder="Second Number" name="second">
                    <input type="submit" value="Sum">
                    </form>
                </body>
            </html>
            `)
    }

    else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST"){
        return sumRequestHandler(req,res);
    }

    else {
    res.statusCode = 404;
    res.end("Page Not Found");
}
    
}

module.exports=calculator