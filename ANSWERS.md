- [X] Why would you use class component over function components (removing hooks from the question)?

    If you wanted to do more than just store  and functiona and/or logic. Using class components also gives you access to the various lifecycle methods, and the render method (which allows for dynamic updating whenever there is a change in state). 


- [X] Name three lifecycle methods and their purposes.

    - componentDidMount
        - Runs only once when a componenet first mounts. This is ideal for something like an API call or other side effect(similar to UseEffect without the subscription part)
    - componenetDidUpdate
        - This runs every time a component updates. We could attached use this to call an API, but we must use a conditional and prevState or prevProps
    - componentWillUnmount
        - This runs as the "dying breath" as the component unmounts. It's useful in cleaning up your code and removing things like event listeners.


- [X] What is the purpose of a custom hook?

    To componetize stateful logic (and/or a function) so that it can be reused, thus keeping our code DRY.

- [X] Why is it important to test our apps?

    Testing apps helps us to identify issues sooner. The sooner an issue is identified generally the less it costs to fix. Including tests in our apps also lets us to more easily refactor code since we can determine if the functionality of the app is still working after changes to the code.