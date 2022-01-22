import styles from '../styles/Layout.module.css'
import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <p>Next app</p>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout