/** @format */
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
// import '../styles/globals.css';

//_app.js 의 컴포넌트 이름은 마음대로 해도 되지만
//_app.js 라는 파일 이름은 반드시 지켜줘야 함
// parameter로 들어가는 component, pageprops는 정해져 있는것
// framework 니까!
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {/* _app.js 에서 <NavBar />추가했으므로.. 다른데서 더이상 추가하지 않아도 됨. */}
      {/* <NavBar /> */}
      <Component {...pageProps} />
    </Layout>
  );
}
