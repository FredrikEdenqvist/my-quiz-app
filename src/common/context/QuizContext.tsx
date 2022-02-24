import { createContext, useContext } from "react";
import { Question } from "../requests/quizRequest";

export interface QuizContextProps {
    quizQuestions: Question[];
    setQuizQuestions: (questions: Question[]) => void;
}

const initialState: QuizContextProps = {
    quizQuestions: [],
    setQuizQuestions: () => {}
}

export const QuizContext = createContext<QuizContextProps>(initialState);

export const useQuizContext = () => {
    return useContext(QuizContext);
}