import HeroSection from './component/HeroSection';
import {  useProductContext } from './context/productcontex';



const About = () => {
  const { devName } = useProductContext();

  const data = {
    name: "Ankur E-comm",
  };

  return (
    <>
      {devName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
