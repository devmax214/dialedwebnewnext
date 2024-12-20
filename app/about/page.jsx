import Image from "next/image";
import "./about.css";
import dynamic from "next/dynamic";
const AboutPageSection = dynamic(() => import('./AboutPageSection').then(mod => mod.AboutPageSection), {
  ssr: false,
  loading: () => <div className="loading-screen" >
    <div className="loading-image-box" >
      <Image width={500} height={500} src="/images/loading.gif" className="loading-image" alt="Loading Image" />
    </div>
  </div>
})

export const metadata = {
  title: 'Dialedweb | About Us',
  description: "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
  openGraph: {
    title: 'About Us',
  },
}

const About = () => {

  return (
    <AboutPageSection />
  );
};

export default About;