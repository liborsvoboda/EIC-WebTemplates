import{a as z}from"./chunk-Z2ZAEWPQ.js";import{a as K}from"./chunk-5R6LCAUH.js";import{g as E,q as W,r as X}from"./chunk-UWMVDULA.js";import{Cc as j,Eb as Q,Fb as q,Fc as U,Gb as w,Hb as T,Ib as S,Ic as P,Jb as D,Jc as G,Lb as N,Nc as H,Qb as A,Sa as l,T as M,Ta as L,V as F,Vb as k,da as B,ea as O,ib as u,jb as r,kb as c,kc as R,ma as b,na as f,ob as y,rb as m,sb as _,tb as x,ub as v,va as C,vb as I,xb as V,yb as g,zb as p}from"./chunk-ZJD4PHQZ.js";var Y=["input"],Z=(t,n,a)=>({"p-checkbox p-component":!0,"p-checkbox-checked":t,"p-checkbox-disabled":n,"p-checkbox-focused":a}),$=(t,n,a)=>({"p-highlight":t,"p-disabled":n,"p-focus":a}),ee=(t,n,a)=>({"p-checkbox-label":!0,"p-checkbox-label-active":t,"p-disabled":n,"p-checkbox-label-focus":a});function te(t,n){if(t&1&&x(0,"span",10),t&2){let a=p(3);c("ngClass",a.checkboxIcon),r("data-pc-section","icon")}}function ie(t,n){t&1&&x(0,"CheckIcon",11),t&2&&(c("styleClass","p-checkbox-icon"),r("data-pc-section","icon"))}function ne(t,n){if(t&1&&(v(0),u(1,te,1,2,"span",8)(2,ie,1,2,"CheckIcon",9),I()),t&2){let a=p(2);l(),c("ngIf",a.checkboxIcon),l(),c("ngIf",!a.checkboxIcon)}}function oe(t,n){}function ae(t,n){t&1&&u(0,oe,0,0,"ng-template")}function ce(t,n){if(t&1&&(m(0,"span",12),u(1,ae,1,0,null,13),_()),t&2){let a=p(2);r("data-pc-section","icon"),l(),c("ngTemplateOutlet",a.checkboxIconTemplate)}}function le(t,n){if(t&1&&(v(0),u(1,ne,3,2,"ng-container",5)(2,ce,2,2,"span",7),I()),t&2){let a=p();l(),c("ngIf",!a.checkboxIconTemplate),l(),c("ngIf",a.checkboxIconTemplate)}}function se(t,n){if(t&1){let a=V();m(0,"label",14),g("click",function(o){b(a);let e=p(),s=S(3);return f(e.onClick(o,s,!0))}),D(1),_()}if(t&2){let a=p();y(a.labelStyleClass),c("ngClass",k(6,ee,a.checked(),a.disabled,a.focused)),r("for",a.inputId)("data-pc-section","label"),l(),N(" ",a.label,"")}}var re={provide:K,useExisting:M(()=>de),multi:!0},de=(()=>{let n=class n{constructor(i){this.cd=i,this.trueValue=!0,this.falseValue=!1,this.onChange=new C,this.onFocus=new C,this.onBlur=new C,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.focused=!1}ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"icon":this.checkboxIconTemplate=i.template;break}})}onClick(i,o,e){i.preventDefault(),!(this.disabled||this.readonly)&&(this.updateModel(i),e&&o.focus())}updateModel(i){let o;this.binary?(o=this.checked()?this.falseValue:this.trueValue,this.model=o,this.onModelChange(o)):(this.checked()?o=this.model.filter(e=>!E.equals(e,this.value)):o=this.model?[...this.model,this.value]:[this.value],this.onModelChange(o),this.model=o,this.formControl&&this.formControl.setValue(o)),this.onChange.emit({checked:o,originalEvent:i})}handleChange(i){this.readonly||this.updateModel(i)}onInputFocus(i){this.focused=!0,this.onFocus.emit(i)}onInputBlur(i){this.focused=!1,this.onBlur.emit(i),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(i){this.model=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){setTimeout(()=>{this.disabled=i,this.cd.markForCheck()})}checked(){return this.binary?this.model===this.trueValue:E.contains(this.value,this.model)}};n.\u0275fac=function(o){return new(o||n)(L(R))},n.\u0275cmp=B({type:n,selectors:[["p-checkbox"]],contentQueries:function(o,e,s){if(o&1&&Q(s,W,4),o&2){let h;w(h=T())&&(e.templates=h)}},viewQuery:function(o,e){if(o&1&&q(Y,5),o&2){let s;w(s=T())&&(e.inputViewChild=s.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[A([re])],decls:7,vars:35,consts:[["input",""],[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"change","focus","blur","value","checked","disabled","readonly"],[1,"p-checkbox-box",3,"click","ngClass"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"click","ngClass"]],template:function(o,e){if(o&1){let s=V();m(0,"div",1)(1,"div",2)(2,"input",3,0),g("change",function(d){return b(s),f(e.handleChange(d))})("focus",function(d){return b(s),f(e.onInputFocus(d))})("blur",function(d){return b(s),f(e.onInputBlur(d))}),_()(),m(4,"div",4),g("click",function(d){b(s);let J=S(3);return f(e.onClick(d,J,!0))}),u(5,le,3,2,"ng-container",5),_()(),u(6,se,2,10,"label",6)}o&2&&(y(e.styleClass),c("ngStyle",e.style)("ngClass",k(27,Z,e.checked(),e.disabled,e.focused)),r("data-pc-name","checkbox")("data-pc-section","root"),l(),r("data-pc-section","hiddenInputWrapper")("data-p-hidden-accessible",!0),l(),c("value",e.value)("checked",e.checked())("disabled",e.disabled)("readonly",e.readonly),r("id",e.inputId)("name",e.name)("tabindex",e.tabindex)("required",e.required)("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("aria-checked",e.checked())("data-pc-section","hiddenInput"),l(2),c("ngClass",k(31,$,e.checked(),e.disabled,e.focused)),r("data-p-highlight",e.checked())("data-p-disabled",e.disabled)("data-p-focused",e.focused)("data-pc-section","input"),l(),c("ngIf",e.checked()),l(),c("ngIf",e.label))},dependencies:[j,U,G,P,z],styles:[`@layer primeng{.p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}}
`],encapsulation:2,changeDetection:0});let t=n;return t})(),Ee=(()=>{let n=class n{};n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=O({type:n}),n.\u0275inj=F({imports:[H,X]});let t=n;return t})();export{de as a,Ee as b};