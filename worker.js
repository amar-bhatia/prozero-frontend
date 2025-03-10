addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Fetch the original response
  const response = await fetch(request);
  
  // Clone the response so we can modify the headers
  const newHeaders = new Headers(response.headers);
  
  // Set CORS headers
  newHeaders.set("Access-Control-Allow-Origin", "*");
  newHeaders.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  newHeaders.set("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  
  return new Response(response.body, {
    status: response.status,
    headers: newHeaders,
  });
}
