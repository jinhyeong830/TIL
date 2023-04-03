/** @format */
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      {/* 클래스 두 개 주기 방법 1 백틱 이용해서 문자열 하나로 처리*/}
      <Link href='/' className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>
        Home
      </Link>
      {/* 클래스 두 개 주기 방법2 배열로 join() 어쨌든 문자열 하나로 처리*/}
      {/* 배열의 두 가지 요소를 공백을 구분자로 넣어 문자열로 만들기 */}
      <Link href='/about' className={[router.pathname === '/about' ? styles.active : '', styles.link].join(' ')}>
        about
      </Link>
    </nav>
  );
}
