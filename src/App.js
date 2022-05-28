import AuthProvider from "./navigation/AuthContext";
import RootRoutes from "./navigation/Routes";

function App() {
  return (
    <AuthProvider>
      <RootRoutes />
    </AuthProvider>
  );
}

export default App;
