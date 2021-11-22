import { Route } from "wouter";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import RepoPage from "./pages/RepoPage";
import { AppContextProvider } from "./context";

import "bootswatch/dist/yeti/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <div className="container">
        <Route path="/">
          <HomePage />
        </Route>

        <Route path="/:username/:repositoryName">
          <RepoPage />
        </Route>
      </div>
    </AppContextProvider>
  );
}

export default App;
