import styles from '../styles/Layout.module.css'
import {Nav, Header} from "./index";

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout