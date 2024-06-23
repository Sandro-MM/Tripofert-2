import BackgroundVideo from "@/components/videoBackground";
import ThemeSwitch from "@/components/themeSwitchButton";
import SearchItem from "@/components/searchItem";



export default function Home() {
  return (
      <main className=" w-full h-full absolute top-0">
          <div className='w-full '>
          </div>
          <BackgroundVideo/>
          <ThemeSwitch/>
          <SearchItem/>

      </main>
  );
}
