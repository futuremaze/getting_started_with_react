import React from "react";
import Header from "./Header"
import Footer from "./Footer"

// 外部から参照できるようにexport構文を使用する
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { title: "Welcome" };
    }
    render() {
        setTimeout(
            () => { this.setState({ title: "Welcome Tsutomu!" }); },
            2000
        );
        return (
            <div>
                <Header title={this.state.title} />
                <Header title={"Thank you"} />
                <Footer />
            </div>
        );
    }
    get_result(num) {
        return 1 + num;
    }
}
