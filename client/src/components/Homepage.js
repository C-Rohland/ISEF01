import React from 'react'

export default function Homepage() {
  return (
<>
  <div className="container">
    <nav>
      <ul>
        <li><strong>Quizapp</strong></li>
      </ul>
      <ul>
        <li><img src="/question-mark-stock-illustration-illustration-brilliant-color-question-mark-45aeb617f3438a0148318cd43d738cf8.png" alt="Minimal landscape" style={{ width: '70px', height: 'auto' }}/></li>
      </ul>
      <ul>
        <li><a href="/login">Abmelden</a></li>
      </ul>
    </nav>
  </div>

  <div className="container">
    <hgroup>
      <h2>Quizapp: Teste dein Wissen!</h2>
      <p>Knacke die Fragen und zeige dein Können!</p>
    </hgroup>
    <figure style={{ display: 'flex', justifyContent: 'center' }}>
    <img src="/question-mark-stock-illustration-illustration-brilliant-color-question-mark-45aeb617f3438a0148318cd43d738cf8.png" alt="Minimal landscape" style={{ width: '300px', height: 'auto' }} />
    </figure>
    <div role="group">
      <button>Quiz starten</button>
      <button class="secondary">Quiz erstellen</button>
      <button class="contrast">Scoreboard</button>
    </div>
  </div>
</>
  )
}
