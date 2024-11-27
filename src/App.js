import "./App.css";
import ChatBox from "./components/chat/chatBox";
import Customs from "./components/custom/Customs";
import { useDispatch } from "react-redux";
import { setDefault } from "./components/store/slices/updateColor";
import { setDefaultText } from "./components/store/slices/updateText";
import { triggerRender } from "./components/store/slices/triggerRender";
import TextFont from "./components/others/textFont";
function App() {
  const dispatch = useDispatch();

  const setDefaultFun = () => {
    dispatch(setDefault());
    dispatch(setDefaultText());
    dispatch(triggerRender());
  };
  return (
    <>
      <div className="App">
        <div className="App-header">
          <Customs />
          <div className="middle">
            <TextFont />
            <button onClick={setDefaultFun}>Set Default</button>
          </div>
          <ChatBox />
        </div>
      </div>
    </>
  );
}

export default App;
