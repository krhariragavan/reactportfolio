import './App.css';
import ReminderApp from './components/reminderapp/ReminderApp';
import ToursApp from './components/toursapp/ToursApp'
import GetData from './components/testgetdata/GetData'
import ToursSingleApp from './components/tourssingle/ToursSingleApp'
import AccordionApp from './components/accordion/AccordionApp';

function App() {
  return (
    <div className="App">
      {/* <ReminderApp /> */}
      {/* <ToursApp /> */}
      {/* <GetData />       */}
      {/* <ToursSingleApp /> */}
      <AccordionApp />
    </div>
  );
}

export default App;
