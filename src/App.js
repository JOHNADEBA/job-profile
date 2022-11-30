import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./App.css";
import data from "./MOCK_DATA.json";

function App() {
	const [index, setIndex] = useState(0);
	const { name, role, start_date, end_date, description } = data[index];
	console.log(data);

	const convertDate = (value) =>
		new Date(parseInt(value)).toLocaleDateString("en-SL", {
			year: "numeric",
			month: "short",
		});

	const getUser = (id) => {
		setIndex(id - 1);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-logo">Experience</h1>
				<div className="border"></div>
			</header>
			<main>
				<div className="nav-cont">
					{data.map((menu) => {
						return (
							<nav key={menu.id}>
								<button
									onClick={() => getUser(menu.id)}
									className={index + 1 === menu.id && "active_btn"}
								>
									{menu.name}
								</button>
							</nav>
						);
					})}
				</div>

				<div className="right-cont">
					<p className="role">{role}</p>
					<p className="name">{name}</p>
					<p className="date">
						{convertDate(start_date)} - {convertDate(end_date)}
					</p>
					{description.map((item, index) => {
						return (
							<div className="skills" key={index}>
								<p className="icon">
									<FaAngleDoubleRight />
								</p>
								<p className="skill-item">{item}</p>
							</div>
						);
					})}
				</div>
			</main>
		</div>
	);
}

export default App;
