import { Button, Menu, Portal, Skeleton } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../hooks/usePlatform";
import queryStore from "../stores/queryStore";

export default function PlatformSelector() {
  let { data, error, isLoading } = usePlatform();
  let queryPlatformId = queryStore((s) => s.PlatformId);
  let updateQueryPlatform = queryStore((s) => s.updatePlatform);
  let { data: platforms } = usePlatform();
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
              {platforms.results.find((r) => r.id == queryPlatformId)?.name ||
                "Platform"}{" "}
              <FaChevronDown></FaChevronDown>
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {data?.results.map((platform) => {
                  return (
                    <Menu.Item
                      onClick={() => updateQueryPlatform(platform.id)}
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
