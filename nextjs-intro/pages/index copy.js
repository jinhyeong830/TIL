/** @format */
// import '../styles/globals.css'; // index.js 에서는 global.css import 불가
// import NavBar from '../components/NavBar';
import { useEffect, useStat } from "react";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import Link from "next/link";
const API_KEY = "818f60bebf8a1520d73de560b6a42726";
export default function Home({ results }) {
	/* const [movies, setMovies] = useState([]);
  useEffect(() => {
    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    // (async () => {
    //     const response = await fetch(
    //       `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    //       );
    //     const json = await response.json();
    //   })();

    (async () => {
      const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
      setMovies(results);
    })();
  }, []); */

	//   useEffect 를 이용해서 fetch 해올건
	// movie정보를 가져올 API url?

	const router = useRouter();
	const onClick = (id, title) => {
		// router.push(`/movies/${id}`);
		// push 객체로 보낼 수도 있음
		router.push(
			{
				pathname: `/movies/${id}`,
				query: {
					title,
				},
			},
			`/movies/${id}`
			// 두번째 인자로는 (as) client에게 보여줄 url
		);
	};

	return (
		<div className="container">
			<Seo title="Home" />
			{/* 느린연결일 때 .loading... 보임
      movies 가 값이 없다면 ~? */}
			{/* {!movies && <h4>Loading....</h4>} */}
			{results?.map((movie) => (
				<div className="movie" key={movie.id} onClick={() => onClick(movie.id, movie.original_title)}>
					<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
					<Link
						href={{
							pathname: `/movies/${movie.id}`,
							query: {
								title: movie.original_title,
							},
						}}
						as={`movie/${movie.id}`}
					>
						<h4>{movie.original_title}</h4>
					</Link>
				</div>
			))}
			<style jsx>{`
				.container {
					display: grid;
					grid-template-columns: 1fr 1fr;
					padding: 20px;
					gap: 20px;
				}
				.movie {
					cursor: pointer;
				}
				.movie img {
					max-width: 100%;
					border-radius: 12px;
					transition: transform 0.2s ease-in-out;
					box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
				}
				.movie:hover img {
					transform: scale(1.05) translateY(-10px);
				}
				.movie h4 {
					font-size: 18px;
					text-align: center;
				}
			`}</style>
		</div>
	);
}

// function name 고정
// server 쪽에서만 동작 > API 키 등 숨기고 싶은 데이터 여기다가 넣으면
// 서버함수니까 client에게 보여지지 않겠네 !
export async function getServerSideProps() {
	const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
	// object return?
	return {
		props: {
			results,
		},
	};
}

/* getServerSideProps()
  - 오브젝트 return, 리턴되는 object안에는 props라는 key가 들어있음
  - props 키 안에는 원하는 데이터를 넣을 수 있음
  - 그럼 results 라는 데이터는 어디서 가지고 오는걸까?
  - 데이터 다 가져오면 한 번에 뜨게 함?
*/

// /movies/:id/movies/all
