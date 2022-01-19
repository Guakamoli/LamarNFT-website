import { HashRouter, Routes, Route } from "react-router-dom";
import Index from './pages/index'
import Mint from './pages/mint'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mint" element={<Mint />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
