import { HashRouter, Route, Switch } from "react-router-dom";
import Responsive from "../pages/Responsive.js";
import ViewportProvider from "./hooks/MyContexts";
import Contacts from "../pages/Contacts.js";
import NotFound from "../pages/NotFound.js";

function App() {
  return (
    <ViewportProvider>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Responsive} />
          <Route path="/contacts" component={Contacts} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </ViewportProvider>
  );
}

export default App;
