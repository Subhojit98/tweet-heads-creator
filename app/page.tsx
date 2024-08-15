import HeadView from "./components/HeadView";
import MobileFooter from "./components/MobileFooter";
import Navbar from "./components/Navbar";
import SideBarEditor from "./components/SideBarEditor";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen relative polka-pattern flex flex-col">
        <Navbar />
        <SideBarEditor />
        <HeadView />
      </div>
      <MobileFooter />
    </>
  );
}
