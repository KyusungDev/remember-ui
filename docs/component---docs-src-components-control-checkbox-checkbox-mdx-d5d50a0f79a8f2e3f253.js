(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{XQE1:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return u}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var o=t("mXGw"),c=t("/FXl"),i=t("TjRS"),r=t("ZFoC"),a=t("lKGG"),b=t("6vQ5");t("aD51");function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docsSrc/components/Control/Checkbox/Checkbox.mdx"}});var l={_frontmatter:s},f=i.a;function u(e){var n,t=e.components,u=function(e,n){if(null==e)return{};var t,o,c={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,["components"]);return Object(c.b)(f,d({},l,u,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"checkbox"},"Checkbox"),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)(r.d,{of:a.a,mdxType:"Props"}),Object(c.b)("h2",{id:"basic-usage"},"Basic usage"),Object(c.b)(r.c,{__position:1,__code:'() => {\n  const [isChecked, setIsChecked] = React.useState(true)\n  const toggle = () => setIsChecked(!isChecked)\n  return (\n    <>\n      <Container direction="column">\n        <div>체크박스 on/off/disabled</div>\n        <Container direction="row">\n          <Checkbox state="on" />\n          <Checkbox state="off" />\n          <Checkbox state="on" disabled />\n        </Container>\n      </Container>\n\n      <Container direction="column">\n        <div>체크박스 onClick Event Bind</div>\n        <Container direction="row">\n          <Checkbox state={isChecked ? \'on\' : \'off\'} onClick={toggle} />\n          <Checkbox\n            state={isChecked ? \'on\' : \'off\'}\n            onClick={toggle}\n            disabled\n          />\n        </Container>\n      </Container>\n    </>\n  )\n}',__scope:(n={props:u,DefaultLayout:i.a,Playground:r.c,Props:r.d,Checkbox:a.a,Container:b.a},n.DefaultLayout=i.a,n._frontmatter=s,n),mdxType:"Playground"},(function(){var e=o.useState(!0),n=e[0],t=e[1],i=function(){return t(!n)};return Object(c.b)(o.Fragment,null,Object(c.b)(b.a,{direction:"column",mdxType:"Container"},Object(c.b)("div",null,"체크박스 on/off/disabled"),Object(c.b)(b.a,{direction:"row",mdxType:"Container"},Object(c.b)(a.a,{state:"on",mdxType:"Checkbox"}),Object(c.b)(a.a,{state:"off",mdxType:"Checkbox"}),Object(c.b)(a.a,{state:"on",disabled:!0,mdxType:"Checkbox"}))),Object(c.b)(b.a,{direction:"column",mdxType:"Container"},Object(c.b)("div",null,"체크박스 onClick Event Bind"),Object(c.b)(b.a,{direction:"row",mdxType:"Container"},Object(c.b)(a.a,{state:n?"on":"off",onClick:i,mdxType:"Checkbox"}),Object(c.b)(a.a,{state:n?"on":"off",onClick:i,disabled:!0,mdxType:"Checkbox"}))))})))}void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docsSrc/components/Control/Checkbox/Checkbox.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-control-checkbox-checkbox-mdx-d5d50a0f79a8f2e3f253.js.map