import "./App.css";
import ItemList from "./components/CourseList/ItemList";
import items from "./data/data.json";
import ItemDetail from "./components/CourseDetail/ItemDetail";

import Login from "./components/Auth0/Login";
import Logout from "./components/Auth0/Logout";
import Profile from "./components/Auth0/Profile";

function App() {
  const item = items[0];
  console.log(items);
  return (
    <>
      <Login />
      <Logout />
      <Profile />
      <ItemList items={items} />
      <ItemDetail item={item} />
    </>
  );
}

export default App;
