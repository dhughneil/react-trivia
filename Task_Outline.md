1. Set up the project:

Done

2. Design the components:

    1. Question Component: Displays the question text and answer options.
    2. Answer Button Component: Handles user clicks on answer options.
    3. Scoreboard Component: Shows the current score, number of questions, and accuracy.
    4. App Component: Manages overall game flow, renders other components, and fetches questions from the API.

3. Fetch questions:

    1. Choose a trivia API and integrate it into the App component.
    2. Store the fetched questions in state using your chosen state management solution.

Or create my own array of questions manually.

4. Manage game state:

Create state variables to track:
    • current question number
    • number of correct answers
    • number of incorrect answers
    • Accuracy calculation
    • Game status (playing, finished).

Update the state based on user interactions like answering questions or moving to the next question.

5. Implement game logic:

In the Question component, compare user-selected answer with the correct answer stored in the question data.

Update the score and other state variables based on the answer correctness.

Implement logic to transition to the next question, end the game, or show results when appropriate.

6. Handle user interactions:

Use event listeners in the Answer Button component to capture user clicks on answer options.
Pass the selected answer option to the App component for evaluation.
Update the UI to show feedback (correct/incorrect) and provide navigation.

7. Enhance the experience:

Extra: Add visual elements like progress bars, animations, and sound effects for engagement.
