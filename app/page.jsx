import dynamic from "next/dynamic";
const Main = dynamic(() => import('./Main/Main'), {
  ssr: false,
  loading: () => <div className="loading-screen" >
    <div className="loading-image-box" >
      <img src="/images/loading.gif" className="loading-image" alt="Loading Image" />
    </div>
  </div>
})

export default function Home() {
  return (
    <Main />
  );
}
