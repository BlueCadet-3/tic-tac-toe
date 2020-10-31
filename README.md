# Analyze the app's functionality


# Think about the overall design of the app

  * Header with title on top
  * Message delivery section
  * Game board


# Wireframe the UI


# Pseudocode


# Analyze the application's state


# Set up the project


# Create a local repo


# Organize the app's JS into sections


# Code away!

  * Start with some markup for the basic layout of the UI

  * Declare, but don't initialize, the application-wide variables (state).  The initialization of the variables to their "start-up" state should be done within an initialize function

  * Write the initialization function

  * Invoke init() to "kick-off" the app

  * Next, stub up a render function. Make sure to call render() after state has been updated in event handlers, the init() function, etc...

  * Register event listeners - browser apps are typically event-driven

  * If you have user stories, code them in a logical order

# More recommendations for interactive browser apps

  * Create a main render function that is responsible for rendering the state of the app to the DOM

  * If the render function becomes lengthy, add additional rendering oriented functions, such as:

  ```
  function render() {
	  renderHands();
	  renderControls();
	    if (winner) {
		    renderWinnerMessage();
	  } else {
		    renderTurnMessage();
	  }
  }
  ```

  * Avoid accessing the DOM from outside render-oriented functions.  However, "eye-candy" animations, a ticking time display, etc. are exceptions to this tip.

  * Data (state) is the single source of truth in this app - when implementing an app's logic, the DOM is secondary to data manipulation.  Get used to thinking about how your app's data changes vs. the display.

  * As the user interacts with the application (or other events such as timers trigger) code the app such it:
    *Updates state, then
    *Calls render()

# Make frequent git commits of working code

  * At a minimum, commit each "milestone" or feature implementation

# Experiment and refactor code as necessary