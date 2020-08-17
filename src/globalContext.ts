import React from 'react';

type context = {
	token: string | null;
	setToken: (token: string | null) => void;
};

const token = localStorage.getItem('token') || null;


// tslint:disable-next-line: variable-name
export const GlobalContext = React.createContext<context>({ token, setToken: () => { } });
