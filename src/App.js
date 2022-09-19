import Asp from "./Component/Asp"
import {Helmet} from 'react-helmet'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Asp physiotherapy</title>
        <meta 
        name="description" content="home service , physiotherapy, neck pain, pain , back pain, near me ,chennai"></meta>
      </Helmet>
    <Asp/>
    </div>
  );
}

export default App;
