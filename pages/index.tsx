import MegaMenu from '@/Components/Navbar/index2';
import RelativeSpaceSection from '@/Components/RelativeSpaceSection';
import SpaceSection from '@/Components/SpaceSection/SpaceSection';
import Hero from '../Components/Hero';
// import Loader from '../Components/Loader/index';
import VerticalText from '../Components/NextLevelDesignSection';
import OurServices from '../Components/OurServices/OurServices';
import InfoSection from '@/Components/InfoSection/InfoSection';
import AboutUs from '@/Components/AboutUs/AboutUs';
import OurProyects from '../Components/OurProyects/OurProyects';
import LetsWork from '../Components/LetsWork/index';
import ContactUS from '@/Components/ContactUs';
import Logo from '../Components/Logo';

export default function Home() {

  return (
    <>
    <div>
      <Logo/>
      <MegaMenu/>
      <Hero/>
      <SpaceSection/>
      <VerticalText/>
      <SpaceSection/>
      <OurProyects/>
      <SpaceSection/>
      <AboutUs/>
      <SpaceSection/>
      <SpaceSection/>
      <InfoSection/>
      <RelativeSpaceSection/>
      <OurServices/>
      <SpaceSection/>
      <LetsWork/>
      <ContactUS/>
    </div>
    </>
  )
}
