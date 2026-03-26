// Logic xử lý Join Game
const joinGame = (placeId, jobId) => {
  if (!placeId || !jobId) {
    alert("Thiếu Place ID hoặc Job ID!");
    return;
  }

  // Tạo URL Deep Link
  const robloxProtocol = `roblox-player:1+launchmode:play+gameinstanceid:${jobId}+placeid:${placeId}`;
  
  // Chuyển hướng trình duyệt để mở App Roblox
  window.location.href = robloxProtocol;
};
