import React from 'react';
// let feedbackResponse;

export default function Feedback(props){
    return (
        <div className="feedback">
            <span>{props.feedbackResponse}</span>
        </div>
    )
}