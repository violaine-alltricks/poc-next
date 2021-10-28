import NextLink from 'next/link';

import styles from './layout.module.css';

const Layout: React.FC = ({ children }) => (
  <div>
    <nav className={styles.navbar}>
      <NextLink href="/">
        <a>Home</a>
      </NextLink>

      <NextLink href="/list">
        <a>List</a>
      </NextLink>

      <NextLink href="/sw/1">
        <a>SW 1</a>
      </NextLink>

      <NextLink href="/sw/2">
        <a>SW 2</a>
      </NextLink>

      <NextLink href="/sw/3">
        <a>SW 3</a>
      </NextLink>

      <NextLink href="/sw/4">
        <a>SW 4</a>
      </NextLink>

      <NextLink href="/logout">
        <a>Logout</a>
      </NextLink>
    </nav>

    <main className={styles.content}>{children}</main>
  </div>
);

export default Layout;
