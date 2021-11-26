// TEMPLATES
/**
 * @typedef {T|null|undefined} Maybe<T>
 * @template T
 */

// GENERIC
/**
 * @typedef {Object} ComponentProps
 * @property {React.ReactNode} [children]
 */

/**
 * A plain JavaScript function which takes props as an argument and returns a react element.
 * @typedef {JSX.Element} StatelessComponent
 * @property {Object|undefined} defaultProps
 * @property {string} displayName
 * @property {Object|undefined} propTypes
 */

/**
 * Pure function which takes props as an argument and returns a react element.
 * Unlike StatelessComponent, this function component uses hooks to manage some state in the component.
 * @link {https://reactjs.org/docs/hooks-state.html#hooks-and-function-components}
 * @typedef {StatelessComponent} FunctionComponent
 */

/**
 * @typedef {import('enzyme').ShallowWrapper} ShallowTestWrapper
 */

/**
 * @typedef {Object|undefined|null} ObjectMaybe
 */

/**
 * @typedef {number} Id
 */

// REACT
/**
 * @typedef {import('react').Ref<any>} ReactRef
 */

/**
 * @typedef {import('react').ReactNode} ReactNode
 */

// REDUX
/**
 * @typedef {import("redux").Store} ReduxStore
 *
 * /

/**
 * @typedef {import('redux').StoreEnhancer} ReduxStoreEnhancer
 */

/**
 * @typedef {Object} ReduxState
 */

/**
 * A string dispatched into Redux to describe what transformations should occur in the state.
 * @typedef {string} ReduxType
 */

/**
 * An object which will be used for a ReduxAction or sent to the SVC layer.
 * @typedef {Object} Payload
 */

/**
 * A plain object with type and optional payload.
 * @typedef ReduxAction
 * @property {ReduxType} type
 * @property {Payload} [payload]
 */

/**
 * A function that accepts n args to inject as the payload for the returned action.
 * @typedef ReduxActionCreator
 * @type {function(...*): ReduxAction}
 */

/**
 * An object with values for each ReduxApiRoutine state
 * @typedef ReduxApiRoutine
 * @property {string} PENDING
 * @property {string} SUCCESS
 * @property {string} FAIL
 */

/**
 * A standardized ReduxAction created using the redux-saga-routines package.
 * @typedef {Object} ReduxSagaRoutine
 * @property {ReduxActionCreator} failure
 * @property {ReduxType} FAILURE
 * @property {ReduxActionCreator} request
 * @property {ReduxType} REQUEST
 * @property {ReduxActionCreator} success
 * @property {ReduxType} SUCCESS
 * @property {ReduxActionCreator} trigger
 * @property {ReduxType} TRIGGER
 * @property {ReduxActionCreator} fulfill
 * @property {ReduxType} FULFILL
 */

/**
 * A function which takes state and action. With logic inside the function, the reducer may transition
 * the state based on the current action.
 * @typedef {function(ReduxState, ReduxAction): *} ReduxReducer
 */

/**
 * A standard state selector, accepting state and props as arguments.
 * @typedef {Function} StandardSelector
 * @function
 * @param {ReduxState} state
 * @param {ComponentProps} [ownProps]
 */
