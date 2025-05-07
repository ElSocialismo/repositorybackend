const http = require('http');

function requestController(req, res) {
  // Configurar el tipo de contenido como HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
  // Ruta principal
  if (req.url === '/') {
    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Mi Aplicación Node.js</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
          color: #333;
        }
        .container {
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 {
          color: #2c3e50;
        }
        .btn {
          display: inline-block;
          background: #3498db;
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
          margin: 10px;
        }
        .btn:hover {
          background: #2980b9;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Bienvenidos al Curso de Node.js</h1>
        <p>Esta es una aplicación básica con frontend integrado.</p>
        <p>El servidor está corriendo en el puerto ${PORT}</p>
        
        <div>
          <a href="/about" class="btn">Sobre Nosotros</a>
          <a href="/contact" class="btn">Contacto</a>
        </div>
      </div>
    </body>
    </html>
    `;
    res.end(html);
  }
  // Ruta about
  else if (req.url === '/about') {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>Sobre Nosotros</title></head>
      <body>
        <h1>Sobre Nosotros</h1>
        <p>Somos un equipo apasionado por Node.js y el desarrollo web.</p>
        <a href="/">Volver al inicio</a>
      </body>
      </html>
    `);
  }
  // Ruta contact
  else if (req.url === '/contact') {
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>Contacto</title></head>
      <body>
        <h1>Contacto</h1>
        <p>Email: contacto@curso-node.com</p>
        <a href="/">Volver al inicio</a>
      </body>
      </html>
    `);
  }
  // Ruta no encontrada
  else {
    res.statusCode = 404;
    res.end(`
      <!DOCTYPE html>
      <html>
      <head><title>404 No Encontrado</title></head>
      <body>
        <h1>404 - Página no encontrada</h1>
        <a href="/">Volver al inicio</a>
      </body>
      </html>
    `);
  }
}

const server = http.createServer(requestController);

const PORT = process.env.PORT || 3000;

server.listen(PORT, function() {
  console.log(`Aplicación corriendo en: http://localhost:${PORT}`);
});
