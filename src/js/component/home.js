import React, { useState } from "react";
//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	const deleteItems = indexItem => {
		setList(prevState =>
			prevState.filter((todo, index) => index !== indexItem)
		);
	};
	return (
		<div className="container-fluid col-8">
			<div className="text-center">
				<h1>To do list</h1>
			</div>
			<div className="group">
				<input
					placeholder="indique su tarea"
					value={task}
					onKeyDown={e => {
						if (e.keyCode == 13) {
							let newList = [];
							for (let i = 0; i < list.length; i++) {
								newList.push(list[i]);
							}
							newList.push(task);
							setList(newList);
							setTask((e.target.value = ""));
						}
					}}
					onChange={e => {
						setTask(e.target.value);
					}}
					type="text"
				/>
				<ul className="list-group list-group-flush">
					{list.map((cosas, index) => {
						return (
							<li key={index} className="list-group-item">
								{cosas}
								<button
									className="btn btn-light"
									onClick={e => {
										deleteItems(index);
									}}>
									<i
										className="fa fa-times"
										aria-hidden="true"
									/>
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="footer text-muted">
				{list.length > 0
					? `${list.length} tareas por completar`
					: "Agregar tareas"}
			</div>
		</div>
	);
};
export default Home;
