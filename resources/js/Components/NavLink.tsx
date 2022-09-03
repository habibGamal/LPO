import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function NavLink({ onClick, name, href }: { onClick: React.MouseEventHandler<HTMLLIElement>, name: string, href: string }) {
    return (
        <li onClick={onClick}><Link className="text-lg font-open-sans hover:text-second" href={href}>{name}</Link></li>
    )
}
