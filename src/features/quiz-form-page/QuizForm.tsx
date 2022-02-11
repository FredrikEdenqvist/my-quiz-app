import React, { ChangeEvent, useState } from "react";
import { Dropdown  } from "../../common/components/Dropdown";
import { Input } from "../../common/components/Input";
import { Button } from "../../common/components/Button";
import styles from "./QuizForm.module.css";
import { Category } from "../../common/requests/categoriesRequest";

interface Props {
    onSubmitForm: (quatity: string, difficulty: string, category: Category | undefined) => void;
    categories: Category[];
}

export const QuizForm = (p: Props) => {
    const difficultyOptions = ["Any difficulty", "Easy", "Medium", "Hard"];

    const [value, setValue] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState<Category>();

    const onInputChange = (inputValue: string) => {
        setValue(inputValue);
    }

    const onDifficultyChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setDifficulty(e.target.value);
        //console.log(difficulty);
    };

    const onCategoryChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        const categoryObj = p.categories.find((x) => x.name === e.target.value);
        setCategory(categoryObj);
        //console.log(categoryObj);
    };

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        p.onSubmitForm(value, difficulty, category);
    };

    return (
        <form onSubmit={onSubmitForm} className={styles.form}>
            <Input onChangedText={onInputChange} /><br />
            <Dropdown onChange={onDifficultyChanged} options={difficultyOptions} label={'Difficulty'} /><br />
            <Dropdown onChange={onCategoryChanged} options={p.categories.map((c) => c.name)} label={'Categories'} /><br />
            <Button type="submit">Skicka</Button>
        </form>
    );
};