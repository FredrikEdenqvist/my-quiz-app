import { useState } from "react";
import { Button } from "../../common/components/Button";
import { useQuizContext } from "../../common/context/QuizContext";
import { Answer, Question } from "../../common/requests/quizRequest";
import { QuestionHandler } from "./QuestionHandler";

interface Props {

}
interface UserAnswer {
    questionText: string;
    answer: Answer;
}
export const QuizPage = () => {
    const [answers, setAnswers] = useState<UserAnswer[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const onAnswer = (answer: Answer) => {
        setAnswers([...answers, { questionText: quizQuestions[0].question, answer}]);
    };
    const {quizQuestions} = useQuizContext();

    const moveToNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (<div>
                <QuestionHandler 
                    question={quizQuestions[currentQuestionIndex]} 
                    onClick={onAnswer} 
                    userAnswer={answers[currentQuestionIndex]?.answer} />
                    <Button
                        disabled={answers[currentQuestionIndex] === undefined}
                        onClick={() => moveToNextQuestion()}
                    >
                        Next question
                    </Button>
            </div>);
}