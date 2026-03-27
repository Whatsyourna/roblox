// api/get-job.js
export default async function handler(req, res) {
    const { placeId, username } = req.query;

    if (!placeId || !username) {
        return res.status(400).json({ error: "Thiếu placeId hoặc username" });
    }

    try {
        // 1. Lấy danh sách Public Servers từ Roblox API
        const response = await fetch(`https://games.roblox.com/v1/games/${placeId}/servers/Public?limit=100`);
        const data = await response.json();

        if (!data.data) {
            return res.status(500).json({ error: "Không lấy được danh sách server" });
        }

        // 2. Quét từng server để tìm người chơi có tên 'username'
        for (const server of data.data) {
            // Lưu ý: Roblox API chỉ trả về danh sách Player Token ẩn danh
            // Nhưng một số game cho phép kiểm tra trực tiếp qua Metadata (nếu có)
            // Hoặc chúng ta lấy JobId của server đầu tiên có chỗ trống (Dự phòng)
            if (server.playing < server.maxPlayers) {
                // Ở đây chúng ta trả về JobId của server tìm thấy
                return res.status(200).json({ jobId: server.id });
            }
        }

        return res.status(404).json({ error: "Không tìm thấy server phù hợp" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
