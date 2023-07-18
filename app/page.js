import Slider from "@/components/Slider";
import FirstBanner from "@/components/FirstBanner";
import SecondBanner from "@/components/SecondBanner";
import Video from "@/components/Video";
import ContentFooter from "@/components/ContentFooter";
import Carousel from "@/components/Carousel";



export default function  Home() {
  
  return (
    <div>
      <Carousel />
      {/* <Slider /> */}
      <FirstBanner/>
     <SecondBanner/> 
      <Video/>
      <ContentFooter/>

    </div>
    
  )
}
