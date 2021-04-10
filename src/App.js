import React from 'react';
import NewRecipeModal from './components/NewRecipeModal';
import WeekDay from './components/WeekDay'

class App extends React.Component {
    render () {
        return (
            <div className="allContent">
                <h1 className="menuTitle">Weekly Menu</h1>
                <div className="weekLayout">
                    <WeekDay name="Sunday"/>
                    <WeekDay name="Monday"/>
                    <WeekDay name="Tuesday"/>
                    <WeekDay name="Wednesday"/>
                    <WeekDay name="Thursday"/>
                    <WeekDay name="Friday"/>
                    <WeekDay name="Saturday"/>
                </div>
                <NewRecipeModal />
            </div>
        )
    }
}

export default App