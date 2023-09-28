import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import NoPage from "./views/NoPage";
import Android from "./views/Android";
import Kotlin from "./views/Kotlin";
import Jetpack from "./views/Jetpack";
import About from "./views/About";
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="android" element={<Android/>}/>
            <Route path="kotlin" element={<Kotlin/>}/>
            <Route path="jetpack" element={<Jetpack/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
