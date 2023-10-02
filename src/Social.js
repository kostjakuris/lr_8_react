import React from 'react';
import {social} from "./data";

const Social = () => {
    return (
        <ul className="social-icons">
            {social.map((social) => {
                return (
                    <li key={social.id}>
                        <a href={social.url}>{social.icon}</a>
                    </li>
                );
            })}
        </ul>
    );
};

export default Social;