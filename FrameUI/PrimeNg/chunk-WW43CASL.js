import{a as N}from"./chunk-5R6LCAUH.js";import{Cc as F,Fb as _,Gb as S,Hb as E,Ic as L,Nc as D,Qb as I,Sa as u,T as m,Ta as w,V as b,Vb as M,da as y,ea as C,jb as r,kb as d,kc as T,ma as o,na as l,ob as V,rb as c,sb as p,tb as k,va as g,xb as v,yb as h}from"./chunk-ZJD4PHQZ.js";var O=["input"],R=(n,t,A)=>({"p-inputswitch p-component":!0,"p-inputswitch-checked":n,"p-disabled":t,"p-focus":A}),Q={provide:N,useExisting:m(()=>j),multi:!0},j=(()=>{let t=class t{constructor(i){this.cd=i,this.trueValue=!0,this.falseValue=!1,this.onChange=new g,this.modelValue=!1,this.focused=!1,this.onModelChange=()=>{},this.onModelTouched=()=>{}}onClick(i){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:i,checked:this.modelValue}),i.preventDefault(),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(i){this.modelValue=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}};t.\u0275fac=function(s){return new(s||t)(w(T))},t.\u0275cmp=y({type:t,selectors:[["p-inputSwitch"]],viewQuery:function(s,e){if(s&1&&_(O,5),s&2){let a;S(a=E())&&(e.input=a.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",tabindex:"tabindex",inputId:"inputId",name:"name",disabled:"disabled",readonly:"readonly",trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onChange:"onChange"},features:[I([Q])],decls:5,vars:22,consts:[["input",""],[3,"click","ngClass","ngStyle"],[1,"p-hidden-accessible"],["type","checkbox","role","switch",3,"focus","blur","checked","disabled"],[1,"p-inputswitch-slider"]],template:function(s,e){if(s&1){let a=v();c(0,"div",1),h("click",function(B){return o(a),l(e.onClick(B))}),c(1,"div",2)(2,"input",3,0),h("focus",function(){return o(a),l(e.onFocus())})("blur",function(){return o(a),l(e.onBlur())}),p()(),k(4,"span",4),p()}s&2&&(V(e.styleClass),d("ngClass",M(18,R,e.checked(),e.disabled,e.focused))("ngStyle",e.style),r("data-pc-name","inputswitch")("data-pc-section","root"),u(),r("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),u(),d("checked",e.checked())("disabled",e.disabled),r("id",e.inputId)("aria-checked",e.checked())("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("name",e.name)("tabindex",e.tabindex)("data-pc-section","hiddenInput"),u(2),r("data-pc-section","slider"))},dependencies:[F,L],styles:[`@layer primeng{.p-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;user-select:none}.p-inputswitch-slider{position:absolute;cursor:pointer;inset:0;border:1px solid transparent}.p-inputswitch-slider:before{position:absolute;content:"";top:50%}}
`],encapsulation:2,changeDetection:0});let n=t;return n})(),$=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=C({type:t}),t.\u0275inj=b({imports:[D]});let n=t;return n})();export{j as a,$ as b};