## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Documentation about the project
Run the server project server-api locally with the command npm start
Run the app project:
### npm install
### npm start

The list of items is cropped by 20 at the beggining, it will load more products by scrolling untill the end of products if the browser supports the load.
Items will be added to the shopping bascket by clicking on them, every click will add another item to the shopping cart, also they can be added or removed in the shopping cart
In the mobile version you'll find the shopping cart icon in the top right corner, and the back to the list in the top left
The button make a payment does nothing at all but it was in the specs so it's implemented.
Also you cannot add more items than the stock, and when removed until 0 items, the item will dissapear from the shopping cart
Items can be set as favorites by clicking the heart icon
Despite there're no unit tests, the scaffold is set to run tests with jest.

## Libraries added
Enzyme, jest, @testing-library, ... for testing
styled-components for styling
redux-thunk, redux for the store
typescript
