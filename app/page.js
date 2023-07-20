import Slider from "@/components/Slider";
import FirstBanner from "@/components/FirstBanner";
import SecondBanner from "@/components/SecondBanner";
import Video from "@/components/Video";
import ContentFooter from "@/components/ContentFooter";
import Carousel from "@/components/Carousel";
import SlickCarousel from "@/components/SlickCarousel";
import Comments from "@/components/Comments";


export default function  Home() {
  
  return (
    <div>
      <SlickCarousel/>
      {/* <Carousel /> */}
      {/* <Slider /> */}
       <FirstBanner/> 
     <SecondBanner/>
      <Video/>
      <Comments/>
      <ContentFooter/> 

    </div>
    
  )
}
