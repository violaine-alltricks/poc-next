import Link from 'next/link';

import styles from './layout.module.css';

const Layout: React.FC = ({ children }) => (
  <div>
    <nav className={styles.navbar}>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/list">
        <a>List</a>
      </Link>

      <Link href="/logout">
        <a>Logout</a>
      </Link>
    </nav>

    <main className={styles.content}>{children}</main>
  </div>
);

export default Layout;
