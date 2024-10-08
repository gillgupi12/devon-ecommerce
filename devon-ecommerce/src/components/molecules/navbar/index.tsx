import {
    Group,
    Button,
    Box,
    Burger,
    Autocomplete,
    rem,
    Text,

} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './navbar.module.css';
import { Link } from 'react-router-dom';
import { IconSearch } from '@tabler/icons-react';


export function HeaderNavBar() {
    const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);



    return (
        <>
            <Box>
                <Group visibleFrom="sm" gap={10} justify='flex-end' className='px-4 py-2 text-sm bg-slate-100 text-black'>

                    <Link to="/contact-us"> Contact Us </Link>
                    <Link to="/about"> About </Link>
                </Group>

            </Box>
            <Box className="border-b py-2" bg={'white'}>
                <header className={classes.header}>

                    <Group justify='space-between' >
                        <Group>
                            <Text size='lg' fw={900}
                                variant="gradient"
                                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}>DevonDemo</Text>
                        </Group>

                        <Group visibleFrom="sm" gap={10}>
                            <Link to="/products"> Shop All </Link>
                            <Link to="/products"> Cars </Link>
                            <Link to="/products"> Bikes </Link>
                       
                        </Group>

                        <Group visibleFrom="sm" gap={4}>
                            <Autocomplete
                                className={classes.search}
                                placeholder="Search"
                                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}

                                visibleFrom="xs"
                            />
                            <Link to="/login"> <Button variant='default'>Login</Button></Link>
                            <Link to="/register"> <Button variant="filled" color='blue'>Sign Up</Button></Link>
                        </Group>
                        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                    </Group>
                </header>
            </Box>

        </>
    );
}