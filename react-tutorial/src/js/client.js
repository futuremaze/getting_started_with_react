import React from "react"
import ReactDOM from "react-dom"

class Layout extends React.Component {
    constructor() {
        super();
        this.name = "Tsutomu";
    }
    render() {
        let name = "Tsutomu";
        return (
            <div>
                {/* 変数を埋め込む場合は {変数名} とする */}
                <h1>It's {name}!</h1>
                {/* 計算式も書ける */}
                <h1>It's {1 + 2}!</h1>
                {/* 関数も書ける */}
                <h1>It's {this.get_result(3)}!</h1>
                {/* 匿名関数でもよい */}
                <h1>It's {((num) => { return 1 + num; })(3)}!</h1>
                <h1>It's {this.name}!</h1>
            </div>
        );
    }
    get_result(num) {
        return 1 + num;
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
