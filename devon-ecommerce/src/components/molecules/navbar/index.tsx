import { Avatar, Box, Burger, Button, Group, Menu, rem, Text, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import { IconChevronDown, IconLogout, IconSettings } from "@tabler/icons-react";
import cx from "clsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../stores/authSlice";
import { RootState } from "../../../stores/index";
import classes from "./navbar.module.css";

const HeaderNavBar: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    notifications.show({
      title: "Logged Out",
      position: "top-right",
      message: "You have successfully logged out.",
      color: "green",
    });
    navigate("/login");
  };
  return (
    <>
      <Box className="border-b py-3" bg={"white"}>
        <header className={classes.header}>
          <Group justify="space-between" wrap="nowrap">
            <Group>
              <Text
                size="lg"
                fw={900}
                variant="gradient"
                gradient={{ from: "blue", to: "cyan", deg: 90 }}
              >
                DevonDemo
              </Text>
            </Group>

            <Group visibleFrom="sm">
              <Link to="/products"> Shop </Link>
              <Link to="/contact-us"> Contact </Link>
              <Link to="/about"> About </Link>
            </Group>

            <Group visibleFrom="sm" justify="end">
              {!isAuthenticated ? (
                <Group gap={4}>
                  <Link to="/login">
                    {" "}
                    <Button variant="default">Login</Button>
                  </Link>
                  <Link to="/register">
                    {" "}
                    <Button variant="filled" color="blue">
                      Sign Up
                    </Button>
                  </Link>
                </Group>
              ) : (
                <Menu
                  width={260}
                  position="bottom-end"
                  transitionProps={{ transition: "pop-top-right" }}
                  onClose={() => setUserMenuOpened(false)}
                  onOpen={() => setUserMenuOpened(true)}
                  withinPortal
                >
                  <Menu.Target>
                    <UnstyledButton
                      className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                    >
                      <Group gap={7}>
                        <Avatar
                          src={user?.profilePictureUrl}
                          alt={user?.firstName}
                          radius="xl"
                          size={20}
                        />
                        <Text fw={500} size="sm" lh={1} mr={3}>
                          {user?.userName}
                        </Text>
                        <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                      </Group>
                    </UnstyledButton>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>Settings</Menu.Label>
                    <Link to={`/profile/${user?._id}`}>
                      <Menu.Item
                        leftSection={
                          <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                        }
                      >
                        Account Settings
                      </Menu.Item>
                    </Link>
                    <Menu.Item
                      leftSection={
                        <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                      }
                      onClick={handleLogout}
                    >
                      Logout
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              )}
            </Group>
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
      </Box>
    </>
  );
};

export default HeaderNavBar;
