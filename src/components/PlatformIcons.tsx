import {
  FaAndroid,
  FaAppStore,
  FaGlobe,
  FaLinux,
  FaPlaystation,
  FaQuestion,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import type { Platform } from "../entities/Platform";
import { BsApple, BsNintendoSwitch } from "react-icons/bs";
import { HStack } from "@chakra-ui/react";
import { Tooltip } from "../components/ui/tooltip";

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
          <Tooltip content={platform.slug}>
            <FaQuestion size={24} key={platform.slug} color="gray" />
          </Tooltip>
        )
      )}
    </HStack>
  );
}
