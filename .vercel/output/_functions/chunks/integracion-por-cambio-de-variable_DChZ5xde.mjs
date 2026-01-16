import { c as createGetHeadings, a as createContentComponent, m as markdocConfig, b as assetsConfig, $ as $$Renderer } from './runtime-assets-config_CSvtyAq3.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };



const experimentalHeadingIdCompat = false;

const tagComponentMap = {};
const nodeComponentMap = {};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,13],\"inline\":false,\"attributes\":{\"ordered\":true,\"marker\":\".\"},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,11],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,11],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[10,11],\"inline\":true,\"attributes\":{\"content\":\"sfsfsfs eyy\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":11}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":11}}}],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":11}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,13],\"inline\":false,\"attributes\":{},\"children\":[],\"type\":\"item\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":13}}}],\"type\":\"list\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":10},\"end\":{\"line\":13}}},{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,14],\"inline\":true,\"attributes\":{\"content\":\"arrarreglando\"},\"children\":[],\"type\":\"text\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}}],\"type\":\"inline\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}}],\"type\":\"paragraph\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":14}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig, options, experimentalHeadingIdCompat);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
	experimentalHeadingIdCompat,
);

export { Content, getHeadings };
