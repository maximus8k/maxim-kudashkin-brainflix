import './App.scss';
import React from 'react';
import Header from "./components/Header/Header";
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/videos/:id" element={<Home />} />
						<Route path="/upload" element={<Upload />} />
					</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
