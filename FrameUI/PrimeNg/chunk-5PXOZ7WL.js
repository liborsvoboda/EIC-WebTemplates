import{a as re}from"./chunk-PXBAS5CJ.js";import{c as se,d as I,f as E,h as L,i as O,k as M}from"./chunk-XSSXK7EZ.js";import{a as f,i as g,n as ie,q as ne,r as T,w as ae,x as oe}from"./chunk-UWMVDULA.js";import{Ab as z,Bb as H,Cc as X,Eb as F,Fc as Y,Gb as G,Hb as Q,Ib as B,Ic as $,Jc as ee,Nc as te,Sa as r,Ta as b,Tb as K,Ub as P,V as D,Ya as Z,Yb as U,da as V,dc as q,ea as A,ib as c,jb as p,kb as o,kc as J,ma as h,na as _,ob as R,rb as d,sb as m,tb as N,ua as j,ub as C,va as y,vb as S,vc as W,wb as u,xb as k,yb as w,zb as l}from"./chunk-ZJD4PHQZ.js";var le=["*"],ce=(t,i,s,e,n,a)=>({"p-sidebar":!0,"p-sidebar-active":t,"p-sidebar-left":i,"p-sidebar-right":s,"p-sidebar-top":e,"p-sidebar-bottom":n,"p-sidebar-full":a}),pe=(t,i)=>({transform:t,transition:i}),de=t=>({value:"visible",params:t});function me(t,i){t&1&&u(0)}function he(t,i){if(t&1&&(C(0),c(1,me,1,0,"ng-container",5),S()),t&2){let s=l(2);r(),o("ngTemplateOutlet",s.headlessTemplate)}}function _e(t,i){t&1&&u(0)}function be(t,i){t&1&&N(0,"TimesIcon",13),t&2&&(o("styleClass","p-sidebar-close-icon"),p("data-pc-section","closeicon"))}function fe(t,i){}function ue(t,i){t&1&&c(0,fe,0,0,"ng-template")}function ge(t,i){if(t&1&&(d(0,"span",14),c(1,ue,1,0,null,5),m()),t&2){let s=l(4);p("data-pc-section","closeicon"),r(),o("ngTemplateOutlet",s.closeIconTemplate)}}function xe(t,i){if(t&1){let s=k();d(0,"button",10),w("click",function(n){h(s);let a=l(3);return _(a.close(n))})("keydown.enter",function(n){h(s);let a=l(3);return _(a.close(n))}),c(1,be,1,2,"TimesIcon",11)(2,ge,2,2,"span",12),m()}if(t&2){let s=l(3);p("aria-label",s.ariaCloseLabel)("data-pc-section","closebutton")("data-pc-group-section","iconcontainer"),r(),o("ngIf",!s.closeIconTemplate),r(),o("ngIf",s.closeIconTemplate)}}function ye(t,i){t&1&&u(0)}function ve(t,i){t&1&&u(0)}function Ce(t,i){if(t&1&&(C(0),d(1,"div",15),c(2,ve,1,0,"ng-container",5),m(),S()),t&2){let s=l(3);r(),p("data-pc-section","footer"),r(),o("ngTemplateOutlet",s.footerTemplate)}}function Se(t,i){if(t&1&&(d(0,"div",6),c(1,_e,1,0,"ng-container",5)(2,xe,3,5,"button",7),m(),d(3,"div",8),H(4),c(5,ye,1,0,"ng-container",5),m(),c(6,Ce,3,2,"ng-container",9)),t&2){let s=l(2);p("data-pc-section","header"),r(),o("ngTemplateOutlet",s.headerTemplate),r(),o("ngIf",s.showCloseIcon),r(),p("data-pc-section","content"),r(2),o("ngTemplateOutlet",s.contentTemplate),r(),o("ngIf",s.footerTemplate)}}function ke(t,i){if(t&1){let s=k();d(0,"div",3,0),w("@panelState.start",function(n){h(s);let a=l();return _(a.onAnimationStart(n))})("@panelState.done",function(n){h(s);let a=l();return _(a.onAnimationEnd(n))})("keydown",function(n){h(s);let a=l();return _(a.onKeyDown(n))}),c(2,he,2,1,"ng-container",4)(3,Se,7,6,"ng-template",null,1,q),m()}if(t&2){let s=B(4),e=l();R(e.styleClass),o("ngClass",U(9,ce,e.visible,e.position==="left"&&!e.fullScreen,e.position==="right"&&!e.fullScreen,e.position==="top"&&!e.fullScreen,e.position==="bottom"&&!e.fullScreen,e.fullScreen))("@panelState",K(19,de,P(16,pe,e.transformOptions,e.transitionOptions)))("ngStyle",e.style),p("data-pc-name","sidebar")("data-pc-section","root"),r(2),o("ngIf",e.headlessTemplate)("ngIfElse",s)}}var we=O([E({transform:"{{transform}}",opacity:0}),I("{{transition}}")]),Te=O([I("{{transition}}",E({transform:"{{transform}}",opacity:0}))]),Je=(()=>{let i=class i{get visible(){return this._visible}set visible(e){this._visible=e}get position(){return this._position}set position(e){switch(this._position=e,e){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(e){this._fullScreen=e,e&&(this.transformOptions="none")}constructor(e,n,a,v,x){this.document=e,this.el=n,this.renderer=a,this.cd=v,this.config=x,this.blockScroll=!1,this.autoZIndex=!0,this.baseZIndex=0,this.modal=!0,this.dismissible=!0,this.showCloseIcon=!0,this.closeOnEscape=!0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.onShow=new y,this.onHide=new y,this.visibleChange=new y,this._position="left",this._fullScreen=!1,this.transformOptions="translate3d(-100%, 0px, 0px)"}ngAfterViewInit(){this.initialized=!0}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"closeicon":this.closeIconTemplate=e.template;break;case"headless":this.headlessTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}onKeyDown(e){e.code==="Escape"&&this.hide(!1)}show(){this.autoZIndex&&g.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(e=!0){e&&this.onHide.emit({}),this.modal&&this.disableModality()}close(e){this.hide(),this.visibleChange.emit(!1),e.preventDefault()}enableModality(){this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",String(parseInt(this.container.style.zIndex)-1)),f.addMultipleClasses(this.mask,"p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",e=>{this.dismissible&&this.close(e)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&f.blockBodyScroll())}disableModality(){this.mask&&(f.addClass(this.mask,"p-component-overlay-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&f.unblockBodyScroll(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(e){switch(e.toState){case"visible":this.container=e.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(e){switch(e.toState){case"void":this.hide(!1),g.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):f.appendChild(this.container,this.appendTo))}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(e,"keydown",n=>{n.which==27&&parseInt(this.container.style.zIndex)===g.get(this.container)&&this.close(n)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&g.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}};i.\u0275fac=function(n){return new(n||i)(b(W),b(j),b(Z),b(J),b(ie))},i.\u0275cmp=V({type:i,selectors:[["p-sidebar"]],contentQueries:function(n,a,v){if(n&1&&F(v,ne,4),n&2){let x;G(x=Q())&&(a.templates=x)}},hostAttrs:[1,"p-element"],inputs:{appendTo:"appendTo",blockScroll:"blockScroll",style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",modal:"modal",dismissible:"dismissible",showCloseIcon:"showCloseIcon",closeOnEscape:"closeOnEscape",transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},ngContentSelectors:le,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["role","complementary",3,"ngClass","ngStyle","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[1,"p-sidebar-header"],["type","button","class","p-sidebar-close p-sidebar-icon p-link","pRipple","",3,"click","keydown.enter",4,"ngIf"],[1,"p-sidebar-content"],[4,"ngIf"],["type","button","pRipple","",1,"p-sidebar-close","p-sidebar-icon","p-link",3,"click","keydown.enter"],[3,"styleClass",4,"ngIf"],["class","p-sidebar-close-icon",4,"ngIf"],[3,"styleClass"],[1,"p-sidebar-close-icon"],[1,"p-sidebar-footer"]],template:function(n,a){n&1&&(z(),c(0,ke,5,21,"div",2)),n&2&&o("ngIf",a.visible)},dependencies:[X,Y,ee,$,ae,re],styles:[`@layer primeng{.p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;-webkit-transition:none;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}}
`],encapsulation:2,data:{animation:[se("panelState",[L("void => visible",[M(we)]),L("visible => void",[M(Te)])])]},changeDetection:0});let t=i;return t})(),We=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=A({type:i}),i.\u0275inj=D({imports:[te,oe,T,T]});let t=i;return t})();export{Je as a,We as b};