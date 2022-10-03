import Asp from "./Component/Asp"
import {Helmet} from 'react-helmet'
import Slider from './Component/slider'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Asp physiotherapy</title>
        <meta 
        name="description" content="home physio,physiotherapy,neck pain,pain,back pain,near me,chennai,best phsiotherapy,best homecare physio,best healthcare"></meta>
      </Helmet>
    <Asp/>
    {/* <Slider/> */}
    </div>
  );
}

export default App;
