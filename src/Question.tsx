import { useState } from "react";

import checkmark from "./assets/accept.png"

import "./Question.css"

type TQuestions = {
	answer1: string,
	answer2: string,
	answer3: string,
	answer4: string,
	text: string,
	id: number
}

export default function Question({ questions }: any) {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answerChosen, setAnswerChosen] = useState(false);
	const [quizFinished, setQuizFinished] = useState(false);
	const [score, setScore] = useState(0);

	function nextQuestion() {
		if (isLastQuestion) {
			setQuizFinished(true);
		} else {
			setAnswerChosen(false);
			setCurrentQuestion((prev) => prev + 1);
		}
	}

	function checkAnswer() {
		setAnswerChosen(true);
	}

	const isLastQuestion = currentQuestion === questions.length - 1

	return (
		<>
			{quizFinished ? "finished" : <div className="question">
				{questions.map((question: any, index: number) => {

					const answers = [question.answer1, question.answer2, question.answer3, question.answer4];

					return (
						currentQuestion === index && (
							<>
								<h2>{question.text}</h2>

								{
									answers.map((answer, idx) => (
										<div className="question-wrapper" >
											<label className="activeQuestion" htmlFor={`answer-${idx}`} key={`answer-${idx}`}>
												<span className="answer">{answer}</span>
												<div className="answer-checkbox">
													<input
														type="radio"
														id={`answer-${idx}`}
														name={answer}
													/>
													{answerChosen && answer === question.correctAnswer && <span className="answer-status"><img src={checkmark} alt="checkmark" /></span>}
												</div>
											</label>
										</div>
									))
								}

							</>
						)
					)

				})}

				{answerChosen ? <button className="submitButton" onClick={nextQuestion}>
					{isLastQuestion ? "Submit" : "Next Question"}
				</button> :
					<button className="submitButton" onClick={checkAnswer}>
						Check answer
					</button>}

			</div>}
		</>
	);
}

