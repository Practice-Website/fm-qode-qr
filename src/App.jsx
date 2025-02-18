import logo from "./assets/qr-code.png";
function App() {
	return (
		<div className="ibg-slate-300 h-screen flex justify-center items-center">
			<div
				className="p-4 pb-10 bg-white"
				style={{ borderRadius: "20px", width: "288px" }}
			>
				{/* qr */}
				<img
					src={logo}
					alt="QR-CODE"
					style={{ width: "auto", height: "auto", borderRadius: "10px" }}
				/>
				{/* text-bold */}
				<h1 className="outfit-bold islate-900 text-center mt-6">
					Improve your front-end skills by building projects
				</h1>
				{/* text-regular */}
				<h1 className="outfit-regular islate-500 text-center mt-4">
					Scan the QR code to visit Frontend Mentor and take your coding skills
					to the next level
				</h1>
			</div>
		</div>
	);
}

export default App;
