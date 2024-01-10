import { createElement } from "./mini-react";

const element = createElement(
  'h1',
  { title: 'foo' },
  'Hello',
  createElement(
    'a',
    { className: 'link', href: 'https://www.google.com/' },
    'Google'
  )
)

console.log('====element====', element)