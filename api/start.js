// skkibfi
export default async function handler(req, res) {
    const { placeId, instanceId } = req.query;
    
    if (!placeId || !instanceId) {
        return res.status(400).send('Missing parameters');
    }

    // boy
    res.redirect(302, `roblox://placeId=${placeId}&gameInstanceId=${instanceId}`);
}
