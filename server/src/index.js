const React = require('react');
const { render } = require('react-dom');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    const content = renderToString(<Home />);
    res.send(content);
});

app.listen(3000, () => {
    console.log('Listining on port 3000');
})