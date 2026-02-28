module.exports = (req, res) => {
  const placeId = req.query?.placeId;
  const instanceId = req.query?.instanceId;

  if (!placeId || !instanceId) {
    return res.status(400).send("Missing placeId or instanceId");
  }

  const url =
    `https://www.roblox.com/games/start?placeId=${placeId}` +
    `&gameInstanceId=${instanceId}`;

  res.writeHead(302, { Location: url });
  res.end();
};
