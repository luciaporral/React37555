const CounterButton = (props) => {

    return(
        <button
        onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}; export default CounterButton