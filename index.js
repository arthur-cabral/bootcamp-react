var container = window.document.getElementById("app");

// var titulo = document.createElement("h1");
// titulo.innerHTML = "Título inserido por JavaScript";
// container.appendChild(titulo);

function Contador(props) {

    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1);
    }

    function subtrair() {
        setNumero(numero - 1);
    }

    return (
        <div class="react">
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar} >+</button>
            <button onClick={subtrair} >-</button>
        </div>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote no seu jogo favorito!</h1>
            <Contador titulo="League of Legends" />
            <Contador titulo="Counter Strike" />
            <Contador titulo="Rocket League" />
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);
// ReactDOM.render(App(), container);