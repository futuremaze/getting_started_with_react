import React from "react";
import Header from "./Header"
import Footer from "./Footer"

// 外部から参照できるようにexport構文を使用する
export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
    get_result(num) {
        return 1 + num;
    }
}
