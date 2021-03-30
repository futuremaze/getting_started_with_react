import React from "react";
import Header from "./Header"
import Footer from "./Footer"

// 外部から参照できるようにexport構文を使用する
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { title: "Welcome" };
    }
    changeTitle(title) {
        // this.setState({title}); という書き方はES6 の書き方で、this.setState({title: title}); と同じ意味
        this.setState({ title });
    }
    render() {
        return (
            <div>
                <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <Footer />
            </div>
        );
    }
    get_result(num) {
        return 1 + num;
    }
}
