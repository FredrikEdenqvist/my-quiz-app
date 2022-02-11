import { useState } from "react";
import { Answer, Question } from "../../common/requests/quizRequest";
import { QuestionHandler } from "./QuestionHandler";

interface Props {
    questions: Question[];
}
interface UserAnswer {
    questionText: string;
    answer: Answer;
}
export const QuizPage = ({questions}: Props) => {
    const [answers, setAnswers] = useState<UserAnswer[]>([]);

    const onAnswer = (answer: Answer) => {
        setAnswers([...answers, { questionText: questions[0].question, answer}]);
    };

    return (<QuestionHandler question={questions[0]} onClick={onAnswer} userAnswer={answers[0]?.answer} />);
}