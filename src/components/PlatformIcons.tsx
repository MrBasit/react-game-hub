import {
  FaAndroid,
  FaAppStore,
  FaGlobe,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import type { Platform } from "../hooks/useGames";
import { BsApple } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";

interface Prop {
  platforms: {
    platform: Platform;
  }[];
}

export default function PlatformIcons({ platforms }: Prop) {
  return (
    <>
      {platforms.map(({ platform }) =>
        platform.slug == "pc" ? (
          <FaWindows color="gray" />
        ) : platform.slug == "xbox" ? (
          <FaXbox color="gray" />
        ) : platform.slug == "mac" ? (
          <BsApple color="gray" />
        ) : platform.slug == "linux" ? (
          <FaLinux color="gray" />
        ) : platform.slug == "playstation" ? (
          <FaPlaystation color="gray" />
        ) : platform.slug == "android" ? (
          <FaAndroid color="gray" />
        ) : platform.slug == "nintendo" ? (
          <SiNintendo color="gray" />
        ) : platform.slug == "web" ? (
          <FaGlobe color="gray" />
        ) : platform.slug == "ios" ? (
          <FaAppStore color="gray" />
        ) : (
          <span>{platform.slug}</span>
        )
      )}
    </>
  );
}
