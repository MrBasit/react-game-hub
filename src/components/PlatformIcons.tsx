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
import { BsApple, BsNintendoSwitch } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";

interface Prop {
  platforms: {
    platform: Platform;
  }[];
}

export default function PlatformIcons({ platforms }: Prop) {
  return (
    <HStack>
      {platforms.map(({ platform }) =>
        platform.slug == "pc" ? (
          <FaWindows size={24} key={platform.slug} color="gray" />
        ) : platform.slug == "xbox" ? (
          <FaXbox size={24} key={platform.slug} color="gray" />
        ) : platform.slug == "mac" ? (
          <BsApple size={24} key={platform.slug} color="gray" />
        ) : platform.slug == "linux" ? (
          <FaLinux size={24} key={platform.slug} color="gray" />
        ) : platform.slug == "playstation" ? (
          <FaPlaystation size={24} key={platform.slug} color="gray" />
        ) : platform.slug == "android" ? (
          <FaAndroid size={24} key={platform.slug} color="gray" />
        ) : platform.slug == "nintendo" ? (
          <BsNintendoSwitch size={24} key={platform.slug} color="gray" />
        ) : platform.slug == "web" ? (
          <FaGlobe size={24} key={platform.slug} color="gray" />
        ) : platform.slug == "ios" ? (
          <FaAppStore size={24} key={platform.slug} color="gray" />
        ) : (
          <span>{platform.slug}</span>
        )
      )}
    </HStack>
  );
}
