import { useNavigate } from 'react-router-dom';
import { Component } from 'react';

export function withNavigate(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}