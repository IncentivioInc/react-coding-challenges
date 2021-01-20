# Rerenders

This apps only purpose is to test your ability to prevent unnecessary rerenders of child components. It is ugly and it does nothing useful, but we don't care. We just don't want those child components rerendering.

### Rules for both exercises:

- Do not modify the return value of any component. So, you can't change what they render.
- Don't change the useRef expression in either exercise (`const rerenders = useRef(0)`). Keep this as is.

## Exercise One

- Rerenders should stay at 0 when you move the mouse
- You can only modify the `<ExerciseOne />` component

## Exercise Two

- Rerenders should stay at 0 when you move the mouse
- Build off of Exercise One
- This solution should combine your solution for One with an some additional changes
- You have more freedom to change code here, but the [Rules for both exercises](rules-for-both-exercises) still apply.
