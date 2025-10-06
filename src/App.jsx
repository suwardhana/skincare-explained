import { useState } from 'react'
import { skinConcerns, ingredients } from './data/skincare'
import './App.css'

function App() {
  const [selectedConcern, setSelectedConcern] = useState(null)

  const handleConcernSelect = (concernId) => {
    setSelectedConcern(concernId)
  }

  const selectedIngredients = selectedConcern ? ingredients[selectedConcern] : []

  return (
    <div className="app">
      <header className="header">
        <h1>🧴 Skincare Explained</h1>
        <p>Find the best ingredients for your skin concerns</p>
      </header>

      <main className="main">
        <section className="concerns-section">
          <h2>What's your skin concern?</h2>
          <div className="concerns-grid">
            {skinConcerns.map((concern) => (
              <label
                key={concern.id}
                className={`concern-card ${selectedConcern === concern.id ? 'selected' : ''}`}
              >
                <input
                  type="radio"
                  name="concern"
                  value={concern.id}
                  checked={selectedConcern === concern.id}
                  onChange={() => handleConcernSelect(concern.id)}
                />
                <div className="concern-content">
                  <span className="concern-icon">{concern.icon}</span>
                  <h3>{concern.label}</h3>
                  <p>{concern.description}</p>
                </div>
              </label>
            ))}
          </div>
        </section>

        {selectedConcern && (
          <section className="ingredients-section">
            <h2>Recommended Ingredients</h2>
            <div className="ingredients-list">
              {selectedIngredients.map((ingredient, index) => (
                <div key={index} className="ingredient-card">
                  <h3>{ingredient.name}</h3>
                  <p>{ingredient.benefits}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
