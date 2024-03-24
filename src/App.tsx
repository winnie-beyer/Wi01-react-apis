import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ApiDictionary } from "./components/ApiDictionary";

function App() {
	return (
		<>
			<Header />
			<main className="py-4">
				<ApiDictionary />
				<Outlet />
			</main>
		</>
	);
}

export default App;
