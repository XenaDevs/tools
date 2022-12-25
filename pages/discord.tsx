import { useRouter } from "next/router";
import { useEffect } from "react";

const Discord = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    router.push("https://discord.gg/fJpypWzSyH");
  }, [router.isReady]);

  return <></>;
};

export default Discord;

// https://discord.gg/fJpypWzSyH
