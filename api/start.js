import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Start() {
  const router = useRouter();
  const { placeId, gameInstanceId } = router.query;

  useEffect(() => {
    if (placeId && gameInstanceId) {
      window.location.href = `roblox://placeId=${placeId}&gameInstanceId=${gameInstanceId}`;
    }
  }, [placeId, gameInstanceId]);

  return <p>Connecting to server...</p>;
}
