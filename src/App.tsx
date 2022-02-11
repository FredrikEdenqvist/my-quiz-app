import React, { useState } from "react";
import './App.css';
import { Question } from "./common/requests/quizRequest";
import { QuizFormPage } from './features/quiz-form-page/QuizFormPage';
import { QuizPage } from "./features/quiz-page/QuizPage";

function App() {
  const [quizQuestion, setQuizQuestion] = useState<Question[]>([]);

  return (
    <div className="App">
      {quizQuestion.length === 0 ? (
      <QuizFormPage onSubmitForm={setQuizQuestion} />
      ) : (
      <QuizPage questions={quizQuestion} />
        )}
    </div>
  );
}

export default App;
