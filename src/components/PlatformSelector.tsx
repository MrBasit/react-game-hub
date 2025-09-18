import { Button, Menu, Portal, Skeleton } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { FaChevronDown } from "react-icons/fa";
import type { Platform } from "../hooks/useGames";
import type { QueryObject } from "./App";

interface Prop {
  onPlatformSelection: (platform: Platform) => void;
  query: QueryObject | null;
}

export default function PlatformSelector({ onPlatformSelection, query }: Prop) {
  let { data, error, isLoading } = usePlatform();
  return (
    <>
      {error && null}
      {isLoading ? (
        <Skeleton
          marginBottom={"8px"}
          width={"100px"}
          height="10"
          variant="pulse"
        />
      ) : (
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button marginBottom={"8px"} variant="surface" size="sm">
              {query?.Platform?.name || "Platform"}{" "}
              <FaChevronDown></FaChevronDown>
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {data.map((platform) => {
                  return (
                    <Menu.Item
                      onClick={() => onPlatformSelection(platform)}
                      value={platform.name}
                      key={platform.id}
                    >
                      {platform.name}
                    </Menu.Item>
                  );
                })}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      )}
    </>
  );
}
