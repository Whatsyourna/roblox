export default function handler(req, res) {
  const { placeId, gameInstanceId } = req.query;

  if (!placeId || !gameInstanceId) {
    return res.status(400).send("Missing placeId or gameInstanceId");
  }

  const robloxUrl = `https://www.roblox.com/games/start?placeId=${placeId}&gameInstanceId=${gameInstanceId}`;

  // redirect
  res.writeHead(302, { Location: robloxUrl });
  res.end();
}
