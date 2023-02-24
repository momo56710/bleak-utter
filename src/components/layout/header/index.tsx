import { useGetIdentity } from "@pankod/refine-core";
import {
  Box,
  IconButton,
  HStack,
  Text,
  Avatar,
  Icon,
  useColorMode,
} from "@pankod/refine-chakra-ui";
import { IconMoon, IconSun } from "@tabler/icons";

export const Header: React.FC = () => {
  const { data: user } = useGetIdentity();
  const showUserInfo = user && (user.name || user.avatar);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
<></>
  );
};
