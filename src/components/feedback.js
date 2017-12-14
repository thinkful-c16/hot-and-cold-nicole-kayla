import React from 'react';
import './feedback.css'
// let feedbackResponse;

export default function Feedback(props){
    return (
        <div className="feedback">
            <span>{props.feedbackResponse}</span>
        </div>
    )
}