import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    quiz: {
      correctAnswersCount: 0,
      // andere Zustände
    },
}

export const resultReducer = createSlice({
    name: 'result',
    initialState : {
        userId : null,
        points : [],
        correctAnswersCount: 0, // Neuer Zustand für die Anzahl der richtigen Antworten
    },
    reducers : {
        setUserId : (state, action) => {
            state.userId = action.payload;
        },
        pushResultAction : (state, action) => {
            state.result.push(action.payload);
        },
        updateResultAction : (state, action) => {
            const { trace, checked } = action.payload;
            state.result.fill(checked, trace, trace + 1);
        },
        resetResultAction : () => {
            return {
                userId : null,
                points : [],
                correctAnswersCount: 0, // Zurücksetzen der richtigen Antworten
            };
        },
        setCorrectAnswersCount: (state, action) => { // Aktion, um die Anzahl der richtigen Antworten zu aktualisieren
            state.correctAnswersCount = action.payload;
        }
    }
})

// Exportiere die Aktionen
export const { setUserId, pushResultAction, resetResultAction, updateResultAction, setCorrectAnswersCount: setCorrectAnswersCountAction } = resultReducer.actions;

// Exportiere den Reducer
export default resultReducer.reducer;