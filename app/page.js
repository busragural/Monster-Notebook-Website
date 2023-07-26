
import FirstBanner from "@/components/main/FirstBanner";
import SecondBanner from "@/components/main/SecondBanner";
import Video from "@/components/main/Video";
import ContentFooter from "@/components/footer/ContentFooter";
import SlickCarousel from "@/components/main/SlickCarousel";
import Comments from "@/components/main/Comments";
import { getBanners } from '../services/BannerApi'
import { getBannerData } from "@/services/SliderPhotos";
import MobileMenu from "@/components/header/MobileMenu";
import dynamic from "next/dynamic";


export default async function Home() {
  const dataDoubleBanners = await getBanners()
  const dataSlider = await getBannerData();
  const DynamicComponent = dynamic(() => import("@/components/main/SlickCarousel"));

  return (
    <div>
      {/* <MobileMenu/> */}
      <DynamicComponent data={dataSlider} />
      <FirstBanner />
      <SecondBanner data={dataDoubleBanners} />
      <Video />
      <Comments />
      <ContentFooter />

    </div>

  )
}
