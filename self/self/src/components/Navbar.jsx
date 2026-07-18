import React from 'react'

const Navbar = ({ users }) => {
    return (
        <>
            <ol> {
                users.map((item) => (
                    <li key={item.name}>
                        {item.name},{item.college}
                    </li>
                ))
            }
            </ol>

            <button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
            <button className="dark:md:hover:bg-fuchsia-600 ...">Save changes</button>
        </>
    )
}

export default Navbar
