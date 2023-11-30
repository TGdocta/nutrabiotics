import WelcomeView from "./_welcome/page";
import NavBar from "./_header/page";
import Carousels from "./_carousel/page";
import ListLinks from "./_links/page";

export default function LadingPage() {
  return (
    <>
      <NavBar />
      <WelcomeView />
      <Carousels />
      <ListLinks />
    </>
  )
}