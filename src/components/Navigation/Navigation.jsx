import styles from './Navigation.module.css';

export const Navigation = () => {
    const routes = [
        { path: '/', name: 'Home' },
        { path: '/', name: 'About' },
        { path: '/', name: 'Contact Us' },
    ]
    return (
        <>
            <nav className={`${styles.navigation} container`}>
                <div className='logo'>
                    <img src="/images/logo.png" alt="do some code " />
                </div>
                <ul>
                    {routes.map((item, index) => (
                        <li key={index}>
                            {item?.name}
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}
