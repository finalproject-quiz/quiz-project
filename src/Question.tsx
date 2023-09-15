export default function Question(props) {
    const answers = [props.answer1, props.answer2, props.answer3, props.answer4];
	return (
		<div>
			<h2>{props.question}</h2>
			{answers.map((answer, index) => (
				<label htmlFor={`answer-${index}`} key={`answer-${index}`}>
					{answer}
					<input
						type="radio"
						id={`answer-${index}`}
						name={`question-${props.id}`}
					/>
				</label>
			))}
            <button onClick={props.nextQuestion}>
                Next Question
            </button>
		</div>
	);
}