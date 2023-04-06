/**
 * @format
 * @type {import('next').NextConfig}
 */
const API_KEY = '818f60bebf8a1520d73de560b6a42726';
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: 'https://www.naver.com',
        permanent: false,
        // user 가 contact 로 간다면 form 으로 보낼거고 ~
        // permanent의 값이 true 이냐 false이냐에 따라서
        // 브라우저나 검색엔진이 이 정보를 기억할지 여부가 결정됨
        // destination은 routing 되는 페이지 뿐만 아니라.. 아예 다른 url의 사이트로 이동도 가능
        // source:"/old-blog/:path*",
        // destination:"/new-sexy-blog/:path*"
        /* 
        /old-blog/123/123/comments로 들어가도
        /new-sexy-blog/123/123/comments 로 진입함
        */
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: '/api/movies/:id', // 접근했을 때
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
        // APi 사용 document url 에 따라서 어떤 id 에 접근하면 destination 으로 가도록
        // source 의 id 와 destination의 id가 같도록(변수 이름 통일?)
      },
    ];
  },
};

module.exports = nextConfig;
