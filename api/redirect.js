export default function handler(req, res) {
  // Redirection permanente (301) vers togehost
  res.writeHead(301, {
    Location: 'https://web.togehost.online'
  });
  res.end();
}
