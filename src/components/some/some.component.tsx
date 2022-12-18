import React from 'react';

type SomeItemProps = {
    id: string;
    value: number;
};

type SomeProps = {
    items: {id: string, value: number}[];
};

const SomeItemComponent: React.FC<SomeItemProps> = (props) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (props.value % 2 === 1) {
            throw new Error(`${props.value} is not even number`);
        }
    };

    return (
        <li key={props.id}>
            <button type='button' onClick={handleClick}>{props.value}</button>
        </li>
    );
};

export const SomeComponent: React.FC<SomeProps> = (props) => {
    return (
        <ul>
            {props.items.map(item => <SomeItemComponent {...item}></SomeItemComponent>)}
        </ul>
    );
};
