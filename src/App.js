import './App.less';
import Heading1 from './Components/Heading1'
import Header from './Components/Header'
import Definition from './Components/Definition'
import Footer from './Components/Footer'
import StepPage from './Components/StepsPage'
// import HelpTips from './Components/HelpTips'
function App() {
  return (
    <div className="App">
      <Header/>
     <Heading1/>
     <Definition/>
     <StepPage/>
     <Footer/>
     {/* <HelpTips/> */}
    </div>
  );
}

export default App;
