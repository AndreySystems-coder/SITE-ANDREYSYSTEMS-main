import { createReadStream, existsSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { extname, join, normalize } from "node:path";
import { createServer } from "node:http";

const root = normalize(fileURLToPath(new URL(".", import.meta.url)));
const port = Number(process.env.PORT || 4217);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host}`);
  const requestedPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  let filePath = normalize(join(root, requestedPath));

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = normalize(join(filePath, "index.html"));
  }

  if (!filePath.startsWith(root) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "Content-Type": types[extname(filePath)] || "application/octet-stream" });
  createReadStream(filePath).pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`andrey.systems landing running at http://127.0.0.1:${port}`);
});
