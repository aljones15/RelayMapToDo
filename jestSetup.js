const jsdom = require('jsdom');
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
const { JSDOM } = jsdom;
const dom = new JSDOM("<div id='app' />", { url: 'https://relaymaptodo.org' });
const doc = dom.window.document;
const win = dom.window;

global.document = doc;
global.window = win;

Enzyme.configure({ adapter: new EnzymeAdapter() });
