import Image from "next/image";
import "./works.css";
import dynamic from "next/dynamic";
const WorksPageSection = dynamic(() => import('./WorksPageSection').then(mod => mod.WorksPageSection), {
  ssr: false,
  loading: () => <div className="loading-screen" >
    <div className="loading-image-box" >
      <Image width={500} height={500} src="/images/loading.gif" className="loading-image" alt="Loading Image" />
    </div>
  </div>
})

export const metadata = {
  title: 'Dialedweb | Works',
  description: "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
  openGraph: {
    title: 'Works',
  },
}

const Works = () => {

  return (
    <WorksPageSection />
  );
};

export default Works;