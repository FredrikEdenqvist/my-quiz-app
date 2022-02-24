import React, { useState, useEffect } from "react";
import { createQuiz, Question } from "../../common/requests/quizRequest";
import { Category, fetchCategories } from "../../common/requests/categoriesRequest";
import { Spinner } from "../../common/components/Spinner";
import { QuizForm } from "./QuizForm";
import { useQuizContext } from "../../common/context/QuizContext";

interface Props {

}

export const QuizFormPage = (p: Props) => {
    const [categories, setCategories] = useState<Array<Category>>([]);
    const [loading, setLoading] = useState(true);
    const {setQuizQuestions} = useQuizContext();
    
    const onSubmitForm = async (quatity: string, difficulty: string, category: Category | undefined) => {
        const quizFields = await createQuiz(quatity, difficulty, category);
        console.log(quizFields);
        setQuizQuestions(quizFields);
    };

    useEffect(() => {
      setLoading(true);
      const getCategories = async () => {
        const categories = await fetchCategories();
        //console.log(categories);
        setCategories(categories);
        setLoading(false);
      };
  
      getCategories();
    }, []);


    return (
        <div>
            <h1>Quiz</h1>
            {loading ?
                (<Spinner />)
            :
            (
                <QuizForm categories={categories} onSubmitForm={onSubmitForm} />
            )
            }
        </div>
    );
};