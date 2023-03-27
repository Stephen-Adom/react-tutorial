import React, { useState } from "react";

const InputTodo = () => {
	const [title, setTitle] = useState("");

	const handleChange = (e) => {
		setTitle(e.target.value);
	};

	return (
		<form>
			<input
				type="text"
				placeholder="Add Todo..."
				value={title}
				onChange={handleChange}
			/>
			<button>Submit</button>
		</form>
	);
};

export default InputTodo;
