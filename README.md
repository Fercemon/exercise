# About My App: Bakery
In this app you can see a list of robot cards with some information about each one of them.

The app includes:

- robots.json file with an array of objects, each object has the colors and info we use for the component
- robot.js is the component file and its content is explained below
- style, Stylesheet to add some style to the app and make it look nice

Things used on the app:

- ScrollView to make the app scrollable on mobile
- contentContainerStyle to be able to add style to the ScrollView since Style does not work for ScrollView tag
- props, properties or data our component receive from its parent and which it should not be change inside the component.
- state for data that is going to change within a component
- componentDidmount() and setState to update the state objects intead to use this.state


# Component
- The component is on robot.js file
- The component includes: wrapper to create the card, SVG of the robot and text for the info.
- Since I am using SVG I had to install react-native-svg and import the elemnts I use for the SVG robot.
- import Svg, { Path, Rect, Circle, Line, Ellipse } from 'react-native-svg'; to import it.
- Flexbox, flexDirection: 'row' and flexWrap to put the cards next to each other when there is enough space for that
- I addes some margins, paddings and border to the wrapper to make the style of the cards


