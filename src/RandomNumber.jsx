function RandomNumber() {
    // const [count, setCount] = useState(0)
    // let num = Math.floor(Math.random());
    return <button>
        Toaday's Random num is {Math.floor(Math.random() * 10)}
    </button>
    // return <button onClick={() => setCount((count) => count + 1)}>
    // count is {count} </button>
}

export default RandomNumber;