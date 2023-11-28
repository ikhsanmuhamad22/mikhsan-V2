import HeaderFixed from './header/HeaderFixed';
import SectionContacts from './section/SectionContacts';
import SectionProject from './section/SectionProjects';
import SectionHome from './section/SectionHome';
import SectionAbout from './section/SectionAbout';
function App() {
  return (
    <>
      <HeaderFixed />
      <SectionHome />
      <SectionAbout />
      <SectionProject />
      <SectionContacts />
    </>
  );
}

export default App;
