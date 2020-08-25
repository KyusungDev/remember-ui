(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"1yly":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return p})),t.d(n,"default",(function(){return O}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk");var o=t("mXGw"),i=t("/FXl"),a=t("TjRS"),s=t("ZFoC"),r=t("PBFu"),d=t("6vQ5"),c=t("L3ex"),l=t("TNKe"),u=t("izla");t("aD51");function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docsSrc/components/Modal/DesignedModal/DesignedModal.mdx"}});var f={_frontmatter:p},m=a.a;function O(e){var n,t=e.components,O=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(i.b)(m,b({},f,O,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"designedmodal"},"DesignedModal"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)(s.d,{of:r.a,mdxType:"Props"}),Object(i.b)("h2",{id:"basic-usage"},"Basic usage"),Object(i.b)(s.c,{__position:1,__code:'() => {\n  const [isOpen1, setIsOpen1] = React.useState(false)\n  const [isProcessing, setIsProcessing] = React.useState(false)\n  const [radioId, setRadioId] = React.useState(1)\n  const setRadio = id => setRadioId(id)\n  const handleSubmit = () => {\n    alert(\'보냈습니다\')\n  }\n  return (\n    <Container>\n      <BaseButton\n        fill\n        width={250}\n        size={\'large\'}\n        onClick={() => setIsOpen1(true)}\n      >\n        Open Designed Modal\n      </BaseButton>\n      <DesignedModal\n        isOpen={isOpen1}\n        title={`구매`}\n        subTitle={\'이용권 구매하기\'}\n        submitText="확인"\n        closeText="취소"\n        submit={() => handleSubmit()}\n        onClose={() => setIsOpen1(false)}\n        close={() => setIsOpen1(false)}\n        submitButtonDisabled={isProcessing}\n        isLoading={isProcessing}\n      >\n        <DoczContainer direction="row">\n          <div>Radio onClick Event Bind</div>\n        </DoczContainer>\n        <DoczContainer direction="row">\n          <Radio isChecked={radioId === 1} onClick={() => setRadio(1)} />\n          <span>옵션1</span>\n          <Radio isChecked={radioId === 2} onClick={() => setRadio(2)} />\n          <span>옵션2</span>\n        </DoczContainer>\n      </DesignedModal>\n    </Container>\n  )\n}',__scope:(n={props:O,DefaultLayout:a.a,Playground:s.c,Props:s.d,DesignedModal:r.a,Container:d.a,BaseButton:c.a,Radio:l.a,DoczContainer:u.a},n.DefaultLayout=a.a,n._frontmatter=p,n),mdxType:"Playground"},(function(){var e=o.useState(!1),n=e[0],t=e[1],a=o.useState(!1),s=a[0],b=(a[1],o.useState(1)),p=b[0],f=b[1],m=function(e){return f(e)};return Object(i.b)(d.a,{mdxType:"Container"},Object(i.b)(c.a,{fill:!0,width:250,size:"large",onClick:function(){return t(!0)},mdxType:"BaseButton"},"Open Designed Modal"),Object(i.b)(r.a,{isOpen:n,title:"구매",subTitle:"이용권 구매하기",submitText:"확인",closeText:"취소",submit:function(){alert("보냈습니다")},onClose:function(){return t(!1)},close:function(){return t(!1)},submitButtonDisabled:s,isLoading:s,mdxType:"DesignedModal"},Object(i.b)(u.a,{direction:"row",mdxType:"DoczContainer"},Object(i.b)("div",null,"Radio onClick Event Bind")),Object(i.b)(u.a,{direction:"row",mdxType:"DoczContainer"},Object(i.b)(l.a,{isChecked:1===p,onClick:function(){return m(1)},mdxType:"Radio"}),Object(i.b)("span",null,"옵션1"),Object(i.b)(l.a,{isChecked:2===p,onClick:function(){return m(2)},mdxType:"Radio"}),Object(i.b)("span",null,"옵션2"))))})))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docsSrc/components/Modal/DesignedModal/DesignedModal.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-src-components-modal-designed-modal-designed-modal-mdx-b0b9aeadd2f0419afc71.js.map