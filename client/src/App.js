import "./App.css";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import CardsContainer from "./components/CardsContainer";

import { createStore } from 'redux'

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CardsContainer />
      </div>
    </Provider>
  );
}

export default App;
