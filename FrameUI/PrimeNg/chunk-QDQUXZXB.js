import{a as e}from"./chunk-UWMVDULA.js";import{Nc as f,Ta as r,V as o,Ya as g,_a as u,ca as c,ea as d,fa as C,ua as m,yb as v}from"./chunk-ZJD4PHQZ.js";var k=(()=>{let s=class s{constructor(t,i,a){this.el=t,this.renderer=i,this.zone=a}set enterClass(t){this._enterClass=t,console.warn("enterClass is deprecated, use enterFromClass instead")}get enterClass(){return this._enterClass}set leaveClass(t){this._leaveClass=t,console.warn("leaveClass is deprecated, use leaveFromClass instead")}get leaveClass(){return this._leaveClass}clickListener(){this.target=this.resolveTarget(),this.toggleClass?this.toggle():this.target.offsetParent===null?this.enter():this.leave()}toggle(){e.hasClass(this.target,this.toggleClass)?e.removeClass(this.target,this.toggleClass):e.addClass(this.target,this.toggleClass)}enter(){this.enterActiveClass?this.animating||(this.animating=!0,this.enterActiveClass==="slidedown"&&(this.target.style.height="0px",e.removeClass(this.target,"hidden"),this.target.style.maxHeight=this.target.scrollHeight+"px",e.addClass(this.target,"hidden"),this.target.style.height=""),e.addClass(this.target,this.enterActiveClass),(this.enterClass||this.enterFromClass)&&e.removeClass(this.target,this.enterClass||this.enterFromClass),this.enterListener=this.renderer.listen(this.target,"animationend",()=>{e.removeClass(this.target,this.enterActiveClass),this.enterToClass&&e.addClass(this.target,this.enterToClass),this.enterListener&&this.enterListener(),this.enterActiveClass==="slidedown"&&(this.target.style.maxHeight=""),this.animating=!1})):((this.enterClass||this.enterFromClass)&&e.removeClass(this.target,this.enterClass||this.enterFromClass),this.enterToClass&&e.addClass(this.target,this.enterToClass)),this.hideOnOutsideClick&&this.bindDocumentClickListener(),this.hideOnEscape&&this.bindDocumentKeydownListener()}leave(){this.leaveActiveClass?this.animating||(this.animating=!0,e.addClass(this.target,this.leaveActiveClass),(this.leaveClass||this.leaveFromClass)&&e.removeClass(this.target,this.leaveClass||this.leaveFromClass),this.leaveListener=this.renderer.listen(this.target,"animationend",()=>{e.removeClass(this.target,this.leaveActiveClass),this.leaveToClass&&e.addClass(this.target,this.leaveToClass),this.leaveListener&&this.leaveListener(),this.animating=!1})):((this.leaveClass||this.leaveFromClass)&&e.removeClass(this.target,this.leaveClass||this.leaveFromClass),this.leaveToClass&&e.addClass(this.target,this.leaveToClass)),this.hideOnOutsideClick&&this.unbindDocumentClickListener(),this.hideOnEscape&&this.unbindDocumentKeydownListener()}resolveTarget(){if(this.target)return this.target;switch(this.selector){case"@next":return this.el.nativeElement.nextElementSibling;case"@prev":return this.el.nativeElement.previousElementSibling;case"@parent":return this.el.nativeElement.parentElement;case"@grandparent":return this.el.nativeElement.parentElement.parentElement;default:return document.querySelector(this.selector)}}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.el.nativeElement.ownerDocument,"click",t=>{!this.isVisible()||getComputedStyle(this.target).getPropertyValue("position")==="static"?this.unbindDocumentClickListener():this.isOutsideClick(t)&&this.leave()}))}bindDocumentKeydownListener(){this.documentKeydownListener||this.zone.runOutsideAngular(()=>{this.documentKeydownListener=this.renderer.listen(this.el.nativeElement.ownerDocument,"keydown",t=>{let{key:i,keyCode:a,which:l,type:h}=t;(!this.isVisible()||getComputedStyle(this.target).getPropertyValue("position")==="static")&&this.unbindDocumentKeydownListener(),this.isVisible()&&i==="Escape"&&a===27&&l===27&&this.leave()})})}isVisible(){return this.target.offsetParent!==null}isOutsideClick(t){return!this.el.nativeElement.isSameNode(t.target)&&!this.el.nativeElement.contains(t.target)&&!this.target.contains(t.target)}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}unbindDocumentKeydownListener(){this.documentKeydownListener&&(this.documentKeydownListener(),this.documentKeydownListener=null)}ngOnDestroy(){this.target=null,this.eventListener&&this.eventListener(),this.unbindDocumentClickListener(),this.unbindDocumentKeydownListener()}};s.\u0275fac=function(i){return new(i||s)(r(m),r(g),r(u))},s.\u0275dir=C({type:s,selectors:[["","pStyleClass",""]],hostAttrs:[1,"p-element"],hostBindings:function(i,a){i&1&&v("click",function(h){return a.clickListener(h)})},inputs:{selector:[c.None,"pStyleClass","selector"],enterClass:"enterClass",enterFromClass:"enterFromClass",enterActiveClass:"enterActiveClass",enterToClass:"enterToClass",leaveClass:"leaveClass",leaveFromClass:"leaveFromClass",leaveActiveClass:"leaveActiveClass",leaveToClass:"leaveToClass",hideOnOutsideClick:"hideOnOutsideClick",toggleClass:"toggleClass",hideOnEscape:"hideOnEscape"}});let n=s;return n})(),w=(()=>{let s=class s{};s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=d({type:s}),s.\u0275inj=o({imports:[f]});let n=s;return n})();export{k as a,w as b};