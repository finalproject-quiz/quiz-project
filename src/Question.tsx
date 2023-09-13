export default function Question(props) {
	return (
		<div>
			<h2>{props.text}</h2>
			{props.answers.map((answer, index) => (
				<label htmlFor={`answer-${index}`} key={`answer-${index}`}>
					{answer}
					<input
						type="radio"
						id={`answer-${index}`}
						name={`question-${props.id}`}
					/>
				</label>
			))}
		</div>
	);
}