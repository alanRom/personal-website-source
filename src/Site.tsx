import { BrowserRouter as Router } from "react-router-dom";
import Framework from "./components/CoreFramework/Framework";
import 'bulma/bulma.scss'
const Site = () => {
  return (
    <Router>
      <Framework />
    </Router>
  );
};

export default Site;
