import {
    Group,
    Button,
    Box,
    Burger,

} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './navbar.module.css';
import { Link } from 'react-router-dom';


export function HeaderNavBar() {
    const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);



    return (
        <Box py={14} className="border-b" bg={'white'}>
            <header className={classes.header}>
                <Group  justify="space-between" h="100%">
                    <div>DevonDemo</div>
                    <Group  h="100%" gap={0} visibleFrom="sm">
                        <a href="" className={classes.link}>
                            Products
                        </a>
                        <a href="#" className={classes.link}>
                            Products
                        </a>
                        <a href="#" className={classes.link}>
                            Products
                        </a>
                    </Group>
                    <Group visibleFrom="sm" gap={4}>
                        <Link to="/login"> <Button variant="default"  >Login</Button></Link>
                        <Link to="/register"> <Button variant="default" >Sign Up</Button></Link>
                    </Group>
                    <Burger  opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>
        </Box>
    );
}