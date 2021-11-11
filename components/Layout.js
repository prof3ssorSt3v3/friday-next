/** @jsxImportSource theme-ui */

//to get the sx prop
//see https://theme-ui.com/demo for Polaris colors
//see /styles/polaris-ref.json for full Polaris theme

import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  // const children = props.children;

  return (
    <div
      sx={{
        backgroundColor: `background`,
        color: `secondary`,
      }}
    >
      <NavBar />
      <div sx={{ variant: 'page' }}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
