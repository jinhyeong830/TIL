/** @format */
import { useRouter } from 'next/router';
// /movie/:id
export default function Detail() {
  const router = useRouter();
  console.log(router);
  return 'details';
}
