import{a as re,b as oe}from"./chunk-63PLGKGD.js";import{a as ae}from"./chunk-Z2ZAEWPQ.js";import{a as se}from"./chunk-RJKOGX2L.js";import{a as ne}from"./chunk-PXBAS5CJ.js";import{c as ee,d as M,f as S,h as E}from"./chunk-XSSXK7EZ.js";import{k as W,n as X,q as Z,w as te,x as ie}from"./chunk-UWMVDULA.js";import{Cc as B,Eb as P,Ec as G,Fc as Y,Gb as D,Hb as Q,Ib as C,Ic as J,Jb as b,Jc as K,Kb as I,Ma as x,Nc as U,Sa as r,Ta as u,Tb as V,Ub as z,V as O,da as L,dc as T,ea as F,ib as p,jb as l,kb as a,kc as q,ma as R,na as $,ob as h,rb as g,sb as _,tb as m,ua as A,ub as d,va as y,vb as v,wb as H,x as w,xb as N,yb as j,zb as c}from"./chunk-ZJD4PHQZ.js";var ce=(e,i)=>({showTransitionParams:e,hideTransitionParams:i}),le=e=>({value:"visible",params:e});function me(e,i){if(e&1&&m(0,"span"),e&2){let n=c().$implicit;h("p-message-icon pi "+n.icon),l("data-pc-section","icon")}}function pe(e,i){e&1&&m(0,"CheckIcon"),e&2&&l("data-pc-section","icon")}function ge(e,i){e&1&&m(0,"InfoCircleIcon"),e&2&&l("data-pc-section","icon")}function _e(e,i){e&1&&m(0,"TimesCircleIcon"),e&2&&l("data-pc-section","icon")}function fe(e,i){e&1&&m(0,"ExclamationTriangleIcon"),e&2&&l("data-pc-section","icon")}function ue(e,i){if(e&1&&(g(0,"span",10),d(1),p(2,pe,1,1,"CheckIcon",11)(3,ge,1,1,"InfoCircleIcon",11)(4,_e,1,1,"TimesCircleIcon",11)(5,fe,1,1,"ExclamationTriangleIcon",11),v(),_()),e&2){let n=c().$implicit;r(2),a("ngIf",n.severity==="success"),r(),a("ngIf",n.severity==="info"),r(),a("ngIf",n.severity==="error"),r(),a("ngIf",n.severity==="warn")}}function he(e,i){if(e&1&&m(0,"span",14),e&2){let n=c(2).$implicit;a("innerHTML",n.summary,x),l("data-pc-section","summary")}}function de(e,i){if(e&1&&m(0,"span",15),e&2){let n=c(2).$implicit;a("innerHTML",n.detail,x),l("data-pc-section","detail")}}function ve(e,i){if(e&1&&(d(0),p(1,he,1,2,"span",12)(2,de,1,2,"span",13),v()),e&2){let n=c().$implicit;r(),a("ngIf",n.summary),r(),a("ngIf",n.detail)}}function ye(e,i){if(e&1&&(g(0,"span",18),b(1),_()),e&2){let n=c(2).$implicit;l("data-pc-section","summary"),r(),I(n.summary)}}function xe(e,i){if(e&1&&(g(0,"span",19),b(1),_()),e&2){let n=c(2).$implicit;l("data-pc-section","detail"),r(),I(n.detail)}}function Ce(e,i){if(e&1&&p(0,ye,2,2,"span",16)(1,xe,2,2,"span",17),e&2){let n=c().$implicit;a("ngIf",n.summary),r(),a("ngIf",n.detail)}}function be(e,i){if(e&1){let n=N();g(0,"button",20),j("click",function(){R(n);let s=c().index,o=c(2);return $(o.removeMessage(s))}),m(1,"TimesIcon",21),_()}if(e&2){let n=c(3);l("aria-label",n.closeAriaLabel)("data-pc-section","closebutton"),r(),a("styleClass","p-message-close-icon"),l("data-pc-section","closeicon")}}function Ie(e,i){if(e&1&&(g(0,"div",5)(1,"div",6),p(2,me,1,3,"span",7)(3,ue,6,4,"span",8)(4,ve,3,2,"ng-container",3)(5,Ce,2,2,"ng-template",null,1,T)(7,be,2,4,"button",9),_()()),e&2){let n=i.$implicit,t=C(6),s=c(2);h("p-message p-message-"+n.severity),a("@messageAnimation",V(12,le,z(9,ce,s.showTransitionOptions,s.hideTransitionOptions))),r(),l("data-pc-section","wrapper"),r(),a("ngIf",n.icon),r(),a("ngIf",!n.icon),r(),a("ngIf",!s.escape)("ngIfElse",t),r(3),a("ngIf",s.closable)}}function Te(e,i){if(e&1&&(d(0),p(1,Ie,8,14,"div",4),v()),e&2){let n=c();r(),a("ngForOf",n.messages)}}function Me(e,i){e&1&&H(0)}function Se(e,i){if(e&1&&(g(0,"div",22)(1,"div",6),p(2,Me,1,0,"ng-container",23),_()()),e&2){let n=c();a("ngClass","p-message p-message-"+n.severity),r(2),a("ngTemplateOutlet",n.contentTemplate)}}var rt=(()=>{let i=class i{set value(t){this.messages=t,this.startMessageLifes(this.messages)}constructor(t,s,o,f){this.messageService=t,this.el=s,this.cd=o,this.config=f,this.closable=!0,this.enableService=!0,this.escape=!0,this.showTransitionOptions="300ms ease-out",this.hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)",this.valueChange=new y,this.onClose=new y,this.timerSubscriptions=[]}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;default:this.contentTemplate=t.template;break}}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(t=>{if(t){Array.isArray(t)||(t=[t]);let s=t.filter(o=>this.key===o.key);this.messages=this.messages?[...this.messages,...s]:[...s],this.startMessageLifes(s),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(t=>{t?this.key===t&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let t=this.el.nativeElement.parentElement;return t&&t.offsetParent?this.contentTemplate!=null||this.messages&&this.messages.length>0:!1}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(t){this.messages=this.messages?.filter((s,o)=>o!==t),this.messages[t]&&this.onClose.emit(this.messages[t]),this.valueChange.emit(this.messages)}get icon(){let t=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(t){case"success":return"pi-check";case"info":return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle";default:return"pi-info-circle"}return null}get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(t=>t.unsubscribe())}startMessageLifes(t){t?.forEach(s=>s.life&&this.startMessageLife(s))}startMessageLife(t){let s=w(t.life).subscribe(()=>{this.messages=this.messages?.filter(o=>o!==t),this.timerSubscriptions=this.timerSubscriptions?.filter(o=>o!==s),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(s)}};i.\u0275fac=function(s){return new(s||i)(u(W,8),u(A),u(q),u(X))},i.\u0275cmp=L({type:i,selectors:[["p-messages"]],contentQueries:function(s,o,f){if(s&1&&P(f,Z,4),s&2){let k;D(k=Q())&&(o.templates=k)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:"closable",style:"style",styleClass:"styleClass",enableService:"enableService",key:"key",escape:"escape",severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange",onClose:"onClose"},decls:4,vars:8,consts:[["staticMessage",""],["escapeOut",""],["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"class",4,"ngIf"],["class","p-message-icon",4,"ngIf"],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-message-icon"],[4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[3,"styleClass"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(s,o){if(s&1&&(g(0,"div",2),p(1,Te,2,1,"ng-container",3)(2,Se,3,2,"ng-template",null,0,T),_()),s&2){let f=C(3);h(o.styleClass),a("ngStyle",o.style),l("aria-atomic",!0)("aria-live","assertive")("data-pc-name","message"),r(),a("ngIf",!o.contentTemplate)("ngIfElse",f)}},dependencies:[B,G,Y,K,J,te,ae,oe,se,re,ne],styles:[`@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}
`],encapsulation:2,data:{animation:[ee("messageAnimation",[E(":enter",[S({opacity:0,transform:"translateY(-25%)"}),M("{{showTransitionParams}}")]),E(":leave",[M("{{hideTransitionParams}}",S({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0});let e=i;return e})(),ot=(()=>{let i=class i{};i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=F({type:i}),i.\u0275inj=O({imports:[U,ie]});let e=i;return e})();export{rt as a,ot as b};