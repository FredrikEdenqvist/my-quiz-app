import React, { useMemo, useState } from "react";
import './App.css';
import { QuizContext, QuizContextProps } from "./common/context/QuizContext";
import { Question } from "./common/requests/quizRequest";
import { QuizFormPage } from './features/quiz-form-page/QuizFormPage';
import { QuizPage } from "./features/quiz-page/QuizPage";

function App() {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  const contextValue: QuizContextProps = useMemo(() => {
    return {quizQuestions, setQuizQuestions};
  }, [quizQuestions, setQuizQuestions]);

  return (
    <div className="App">
      <QuizContext.Provider value={contextValue}>
        {quizQuestions.length === 0 ? (
        <QuizFormPage />
        ) : (
        <QuizPage />
          )}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
