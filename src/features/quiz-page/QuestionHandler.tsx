import clsx from "clsx";
import { Answer, Question } from "../../common/requests/quizRequest";
import styles from "./QuestionHandler.module.css";

interface Props {
    question: Question;
    userAnswer: Answer | undefined;
    onClick: (answer: Answer) => void;
}

export const QuestionHandler = ({question, onClick, userAnswer}: Props) => {

    return (
        <div >
            <span>{question.question}</span>
            <div className={styles.answerContainer}>
            {question.answers.map((x, i) => (
                <button 
                disabled={userAnswer !== undefined} 
                className={clsx([styles.answer, 
                    userAnswer?.index === i && styles.selectedAnswer, 
                    userAnswer !== undefined && x.isCorrectAnswer && styles.correctAnswer,
                    userAnswer !== undefined && !x.isCorrectAnswer && styles.wrongAnswer])} 
                onClick={() => onClick(x)}>
                    <span className={styles.index}>{i+1}</span>
                    <span className={styles.answerText}>{x.answer}</span>
                </button>
            ) )}
            </div>
        </div>
    );
}