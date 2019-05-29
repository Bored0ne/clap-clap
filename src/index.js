import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

const swapSpacesForClapSpaces = (selection) => {
    let regexToReplace = /(\s👏\s|\s)/g;
    return selection.replace(regexToReplace, " 👏 ");
};

const swapTargetValue = (target, selection) => {
    const newSelection = swapSpacesForClapSpaces(selection);
    target.value = target.value.replace(selection, newSelection);
};

let target = {}, div = null;

const onMouseDown = event => {
    target = event.target;
};

function getParent(currentTarget) {
    if (!!currentTarget && currentTarget.parentNode !== document) {
        return currentTarget.parentNode
    }
    return document.body;
}

const onMouseUp = event => {
    const selection = window.getSelection().toString();
    const currentTarget = target;
    const parent = getParent(currentTarget);

    if (selection !== "" && currentTarget.tagName.toLowerCase() !== "button") {
        div = document.createElement("div");

        parent.appendChild(div);

        ReactDOM.render(<App onClick={event => {
            event.stopPropagation();
            event.preventDefault();
            swapTargetValue(currentTarget, selection);
            div.parentNode.removeChild(div);
        }}/>, div);
    }
    else {
        if (!!div && !!div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }
};

window.addEventListener("mouseup", onMouseUp);
window.addEventListener("mousedown", onMouseDown);
ReactDOM.render(<textarea/>, document.body);

