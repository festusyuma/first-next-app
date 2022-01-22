import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <p>Next app</p>
                {children}
            </main>
        </div>
    )
}

export default Layout