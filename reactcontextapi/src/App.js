import ComponentA from "./components/ComponentA";
import { UserAuthProvider } from "./context/userAuthContext";

function App() {
  return (
    <UserAuthProvider>
      <ComponentA />
    </UserAuthProvider>
  );
}

export default App;
