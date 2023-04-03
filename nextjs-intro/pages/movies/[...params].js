/** @format */
import { useRouter } from "next/router";
import Seo from "../../components/Seo";
// /movie/:id
export default function Detail({ params }) {
	const router = useRouter();
	const [title, id] = params || [];
	console.log(router);
	return (
		<div>
			<Seo title={title} />
			{/* <h4>{router.query.title || "Loading..."}</h4> */}
			<h4>{title}</h4>
		</div>
		// 클릭해서 들어가는게 아니고 직접 url으로 접근하면 loading..
		//
	);
}

export function getServerSideProps({ params: { params } }) {
	return {
		props: {
			params,
		},
	};
}
