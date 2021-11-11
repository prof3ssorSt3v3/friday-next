/** @jsxImportSource theme-ui */

// import styles from '../styles/Index.module.css';

export default function Home({ books }) {
  // console.log(notes); //props.notes

  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: 'containers.page',
          display: 'flex',
          alignItems: 'flex-start',
          height: '100%',
        }}
      >
        <div>
          <h1 sx={{ fontSize: 8, p: 2 }}>Books App</h1>
        </div>
      </div>
    </div>
  );
}
