import { createElement, render } from "./mini-react";

const element = createElement(
  'h1',
  { title: 'foo', style: 'color: orange' },
  'Hello',
  createElement('br'),
  createElement(
    'a',
    { className: 'link', href: 'https://www.google.com/', style: 'color: blue; cursor: pointer;' },
    'Google'
  )
)

const container = document.getElementById('root')

render(element, container)