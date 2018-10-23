import React, { Component } from "react";
import { Input } from "@material-ui/core";
import List from "./List";

export default class Search extends Component {

    handleScroll = () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight && !this.props.loading) {
            console.log(this.props)
            this.props.loadmore(this.props.text, this.props.page + 1, this.props.maxPage)
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleChangeText = e => {
        this.props.updatetext(e.target.value);
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13)
            this.props.search(this.props.text)
    }


    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "center", flexGrow: 1, marginBottom: 10 }}>
                    <Input
                        placeholder="Search…"
                        disableUnderline
                        value={this.props.text}
                        style={{
                            backgroundColor: "#d3d3d3",
                            width: "40%",
                            borderRadius: 20,
                            paddingLeft: 10
                        }}
                        onChange={this.handleChangeText}
                        onKeyUp={this.handleKeyUp}
                    />
                </div>
                {
                    this.props.photos.length > 0 && <List tileData={this.props.photos} history={this.props.history}/>
                }
            </div>
        );
    }
}
