import React,{useState,useEffect} from "react";
import Navbar from "../components/navbar";
import Section1 from "../components/homepage/section1";
import Section2 from "../components/homepage/section2";
import Section3 from "../components/homepage/section3";
import Section4 from "../components/homepage/section4";
import Section5 from "../components/homepage/section5";
import Section6 from "../components/homepage/section6";
import Footer from "../components/footer";
import axios from "axios";

const Home = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get("https://bocoback.onrender.com/api/homes")
          .then((res) => setData(res.data.data[0]))
          .catch((err) => console.error(err));
      }, []);

      if(!data)
      return <div className="h-screen w-screen flex items-center justify-center">
        <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-purple-500 border-t-transparent"></div>
      </div>

    return <>
        <Navbar company={data.company} />
        <Section1 section={data.section1} />
        <Section2 section={data.section2} />
        <Section3 section={data.section3} />
        <Section4 section={data.section4} />
        <Section5 section={data.section5} />
        <Section6 section={data.section6} />
        <Footer company={data.company} />
        </>
}

export default Home;