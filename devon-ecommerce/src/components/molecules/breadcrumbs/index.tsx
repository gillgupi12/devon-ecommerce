
import { Breadcrumbs } from "@mantine/core"
import { Link, useLocation } from "react-router-dom"

const NavigationBreadCrumbs: React.FC = () => {
    const { pathname } = useLocation()
    const segments = pathname.split('/');
    let url = '';
    const items = [
        <Link to="http://localhost:5173/" key="home" className="text-blue-600 hover:text-blue-800">
            Home
        </Link>,
        ...segments.map((segment, i) => {
            const baseurl = 'http://localhost:5173/'
            url += `${segment}`;
            const isActive = pathname === `/${url}`
            console.log(isActive)
            if (segment !== '') {

                return (<Link to={`${baseurl}${url}`} key={i} className={isActive ? 'text-red-800 font-bold' : 'text-blue-600 hover:text-blue-800'}>
                    {segment}
                </Link>)
            }
        })
    ]

    return (
            <Breadcrumbs className='capitalize  '>{items}</Breadcrumbs>
    )

}

export default NavigationBreadCrumbs