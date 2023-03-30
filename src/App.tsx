import { useState } from 'react';
import styles from './app.module.scss';

type Box = {
	top: number;
	left: number;
};

function App() {
	const [boxes, setBoxes] = useState<Box[]>([]);

	const addButtonsHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
		setBoxes(prevBoxes => {
			return [...prevBoxes, { top: event.clientY, left: event.clientX }];
		});
	};

	return (
		<div className={styles.app}>
			<button className={styles.first} onClick={addButtonsHandler}>
				Click me
			</button>
			{boxes.map((box, index) => (
				<div
					key={index}
					className={styles.buttons}
					style={{ top: box.top, left: box.left }}
				>
					<button onClick={addButtonsHandler}>Click me</button>
					<button onClick={addButtonsHandler}>Click me</button>
					<button onClick={addButtonsHandler}>Click me</button>
					<button onClick={addButtonsHandler}>Click me</button>
				</div>
			))}
		</div>
	);
}

export default App;
