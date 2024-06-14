
import Meals from '@/Components/Meals';
import React from 'react';
import styles from './styles.module.css'

export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals Page",
};


const MealsPage = () => {

    return (
        <div className='p-12'>
            <h1 className='text-3xl font-semibold text-red-400'>Chose Your Meals</h1>
            <p className={styles.text_large}>Choose meals of you choice by searching...</p>
            <Meals />
        </div>
    );
};

export default MealsPage;