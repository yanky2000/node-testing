const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(`<html>
        <body>
        Hello!
        <form action="/message" method="POST">
        <input type="text" name='message'>
        <button type=submit>Send</button>
        
        </input>
        </form>
        </body>
        </html>`);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", chunk => {
      body.push(chunk);
      console.log(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      fs.writeFileSync("message.txt", parsedBody);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/thankyou");
    return res.end();
  }

  if (url === "/thankyou") {
    if (url === "error") return null;
    res.write("thanks!!!!");
    return res.end();
  }
});

server.listen(3000);
