/** @jsxImportSource theme-ui */
import Link from 'next/link';

// See: https://theme-ui.com/components

//alternate way of using the sx prop
// sx={(theme)=> { now you have the theme object }}

export default function NavBar() {
  return (
    <header
      sx={{
        height: '60px',
        width: '100vw',
        bg: 'primary',
        borderBottom: '5px solid',
        borderColor: 'karim',
        backgroundColor: `accent`,
        color: `text`,
        py: 2,
        px: 4,
      }}
    >
      <nav
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          variant: 'containers.page',
          height: '100%',
        }}
      >
        <Link href="/">
          <a sx={{ px: 2, fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>
            Book App
          </a>
        </Link>

        <Link href="/books">
          <a sx={{ px: 2, color: 'text', fontSize: 3, cursor: 'pointer' }}>
            Books
          </a>
        </Link>
      </nav>
    </header>
  );
}
