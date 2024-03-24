import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ApiDictionary } from "./components/ApiDictionary";
import { ApiNasa } from './components/ApiNasa';

function App() {
	return (
		<>
			<Header />
			<main className="py-4">
				<ApiDictionary />
				< ApiNasa />
				<Outlet />
			</main>
		</>
	);
}

export default App;
