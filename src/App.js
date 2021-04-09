import React from 'react'
import NewRecipeModal from './components/NewRecipeModal'

class App extends React.Component {
    render () {
        return (
            <div className="allContent">
                <h1 className="menuTitle">Weekly Menu</h1>
                <NewRecipeModal />
            </div>
        )
    }
}

export default App