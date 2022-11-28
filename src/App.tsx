import React from 'react';
import { Button } from './components';
import './app.scss';

const App = () => {
    return (
        <>
            <div className="app__container">
                <ul className="app__list">
                    <li className="app__list-item">
                        <Button label="Button" onClick={() => undefined} />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default App;