import "./contact.css";
import dynamic from "next/dynamic";
const ContactPageSection = dynamic(() => import('./ContactPageSection').then(mod => mod.ContactPageSection), {
  ssr: false,
  loading: () => <div className="loading-screen" >
    <div className="loading-image-box" >
      <img src="/images/loading.gif" className="loading-image" alt="Loading Image" />
    </div>
  </div>
})

export const metadata = {
  title: 'Dialedweb | Get in Touch',
  description: "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
  openGraph: {
    title: 'Get in Touch',
  },
}

const Contact = () => {

  return (
    <ContactPageSection />
  );
};

export default Contact;