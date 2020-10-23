(window.webpackJsonp_deriv_trader=window.webpackJsonp_deriv_trader||[]).push([["contract","error-component"],{"./App/Components/Elements/Errors/index.js":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return u}));var o=r("../node_modules/prop-types/index.js"),n=r.n(o),a=r("react"),c=r("@deriv/components"),i=r("@deriv/shared"),s=r("@deriv/translations"),l=function(e){var t=e.header,r=e.message,o=e.is_dialog,n=e.redirect_label,l=e.redirectOnClick,u=e.should_show_refresh,p=void 0===u||u?a.createElement(s.Localize,{i18n_default_text:"Please refresh this page to continue."}):"";return o?a.createElement(c.Dialog,{title:t||Object(s.localize)("There was an error"),is_visible:!0,confirm_button_text:n||Object(s.localize)("Ok"),onConfirm:l||function(){return location.reload()}},r||Object(s.localize)("Sorry, an error occured while processing your request.")):a.createElement(c.PageError,{header:t||a.createElement(s.Localize,{i18n_default_text:"Something’s not right"}),messages:r?[r,p]:[a.createElement(s.Localize,{key:0,i18n_default_text:"Sorry, an error occured while processing your request."}),p],redirect_url:i.routes.trade,redirect_label:n||a.createElement(s.Localize,{i18n_default_text:"Refresh"}),buttonOnClick:l||function(){return location.reload()}})};l.propTypes={message:n.a.oneOfType([n.a.node,n.a.string,n.a.object]),type:n.a.string};var u=l},"./Modules/Contract/index.js":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Le}));var o=r("../node_modules/prop-types/index.js"),n=r.n(o),a=r("react"),c=r("react-router"),i=r("../node_modules/react-transition-group/index.js"),s=r("@deriv/shared"),l=r("./App/Components/Elements/Errors/index.js"),u=r("@deriv/translations"),p=r("./Stores/connect.js"),_=r("../node_modules/classnames/index.js"),d=r.n(_),m=r("@deriv/components"),f=r("./App/Components/Elements/chart-loader.jsx"),b=r("./Services/ws-methods.js"),y=r("./App/Components/Elements/PositionsDrawer/helpers/index.js"),h=r("./Stores/Modules/Contract/Helpers/logic.js"),g=function(e){var t=e.icon,r=e.id,o=e.label,n=e.timestamp,c=e.value,i=e.value2;return a.createElement("div",{id:r,className:"contract-audit__grid"},t&&a.createElement("div",{className:"contract-audit__icon"},t),a.createElement("div",{className:"contract-audit__item"},a.createElement("span",{className:"contract-audit__label"},o),a.createElement("div",{className:"contract-audit__value-wrapper"},a.createElement("span",{className:"contract-audit__value"},c),i&&a.createElement("span",{className:"contract-audit__value2"},i))),n&&a.createElement("div",{className:"contract-audit__timestamp"},a.createElement("span",{className:"contract-audit__timestamp-value"},Object(s.formatDate)(n)),a.createElement("span",{className:"contract-audit__timestamp-value"},Object(s.formatTime)(n))))};g.propTypes={icon:n.a.node,label:n.a.string,value:n.a.PropTypes.oneOfType([n.a.number,n.a.string,n.a.node]),value2:n.a.PropTypes.oneOfType([n.a.number,n.a.string])};var v=g,E=function(e){var t=e.contract_end_time,r=e.contract_info,o=e.duration,n=e.duration_unit,c=e.exit_spot,i=r.commission,l=r.contract_type,p=r.currency,_=r.entry_spot_display_value,d=r.entry_tick_time,f=r.exit_tick_time,b=r.profit,g=r.purchase_time,E=r.tick_count,j=r.transaction_ids,w=(j=void 0===j?{}:j).buy,O=j.sell,C=b>=0,k=Object(s.getCancellationPrice)(r);return a.createElement(m.ThemedScrollbars,{is_bypassed:Object(s.isMobile)()},a.createElement("div",{className:"contract-audit__tabs-content"},a.createElement(v,{id:"dt_id_label",icon:a.createElement(m.Icon,{icon:"IcContractId",size:24}),label:Object(u.localize)("Reference ID"),value:Object(u.localize)("{{buy_value}} (Buy)",{buy_value:w}),value2:O?Object(u.localize)("{{sell_value}} (Sell)",{sell_value:O}):void 0}),Object(s.isMultiplierContract)(l)?a.createElement(a.Fragment,null,a.createElement(v,{id:"dt_commission_label",icon:a.createElement(m.Icon,{icon:"IcContractCommission",size:24}),label:Object(u.localize)("Commission"),value:a.createElement(m.Money,{amount:i,currency:p})}),!!k&&a.createElement(v,{id:"dt_cancellation_label",icon:a.createElement(m.Icon,{icon:"IcContractSafeguard",size:24}),label:Object(h.h)(r)?Object(u.localize)("Deal cancellation (executed)"):Object(h.f)(r)?Object(u.localize)("Deal cancellation (expired)"):Object(s.isEnded)(r)?Object(u.localize)("Deal cancellation"):Object(u.localize)("Deal cancellation (active)"),value:a.createElement(m.Money,{amount:k,currency:p})})):a.createElement(a.Fragment,null,a.createElement(v,{id:"dt_duration_label",icon:a.createElement(m.Icon,{icon:"IcContractDuration",size:24}),label:Object(u.localize)("Duration"),value:E>0?"".concat(E," ").concat(E<2?Object(u.localize)("tick"):Object(u.localize)("ticks")):"".concat(o," ").concat(n)}),a.createElement(v,{id:"dt_bt_label",icon:Object(y.e)(l)?a.createElement(m.Icon,{icon:"IcContractTarget",size:24}):a.createElement(m.Icon,{icon:"IcContractBarrier",size:24}),label:Object(y.c)(r),value:Object(y.d)(r)||" - "})),a.createElement(v,{id:"dt_start_time_label",icon:a.createElement(m.Icon,{icon:"IcContractStartTime",size:24}),label:Object(u.localize)("Start time"),value:Object(s.toGMTFormat)(Object(s.epochToMoment)(g))||" - "}),!Object(y.e)(l)&&a.createElement(v,{id:"dt_entry_spot_label",icon:a.createElement(m.Icon,{icon:"IcContractEntrySpot",size:24}),label:Object(u.localize)("Entry spot"),value:Object(y.a)(_)||" - ",value2:Object(s.toGMTFormat)(Object(s.epochToMoment)(d))||" - "}),!isNaN(c)&&a.createElement(v,{id:"dt_exit_spot_label",icon:a.createElement(m.Icon,{icon:"IcContractExitSpot",size:24}),label:Object(u.localize)("Exit spot"),value:Object(y.a)(c)||" - ",value2:Object(s.toGMTFormat)(Object(s.epochToMoment)(f))||" - "}),!isNaN(t)&&a.createElement(v,{id:"dt_exit_time_label",icon:a.createElement(m.Icon,{icon:"IcContractExitTime",color:C?"green":"red",size:24}),label:Object(u.localize)("Exit time"),value:Object(s.toGMTFormat)(Object(s.epochToMoment)(t))||" - "})))};E.propTypes={contract_end_time:n.a.PropTypes.oneOfType([n.a.number,n.a.string]),contract_info:n.a.object,duration:n.a.oneOfType([n.a.number,n.a.string]),duration_unit:n.a.string,exit_spot:n.a.string};var j=E,w=function(e){var t=e.currency,r=e.history,o=void 0===r?[]:r;return o.length?a.createElement(m.ThemedScrollbars,{is_bypassed:Object(s.isMobile)()},a.createElement("div",{className:"contract-audit__tabs-content"},o.map((function(e,r){return a.createElement(v,{key:r,id:"dt_history_label_".concat(r),label:e.display_name,timestamp:+e.order_date,value:0!==Math.abs(+e.order_amount)?a.createElement(a.Fragment,null,+e.order_amount<0&&a.createElement("strong",null,"-"),a.createElement(m.Money,{amount:e.order_amount,currency:t}),e.value&&a.createElement(a.Fragment,null,a.createElement("br",null),a.createElement("span",null,"(",e.value,")"))):Object(u.localize)("Cancelled")})})))):a.createElement("div",{className:"contract-audit__empty"},a.createElement(m.Icon,{icon:"IcBox",size:48,color:"secondary"}),a.createElement("h4",{className:"contract-audit__empty-header"},Object(u.localize)("No history")),a.createElement("span",{className:"contract-audit__empty-message"},Object(u.localize)("You have yet to update either take profit or stop loss")))};w.propTypes={currency:n.a.string,history:n.a.array};var O=w;function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=D(e);if(t){var n=D(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return M(this,r)}}function M(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(c,e);var t,r,o,n=x(c);function c(){var e;k(this,c);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={contract_update_history:[]},e.onTabItemClick=function(t){e.props.toggleHistoryTab(t),t&&b.a.contractUpdateHistory(e.props.contract_info.contract_id).then((function(t){e.setState({contract_update_history:t.contract_update_history})}))},e}return t=c,o=[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.is_multiplier,o=e.contract_update_history;return r&&o.length&&o.length>t.contract_update_history.length?{contract_update_history:o}:t}}],(r=[{key:"render",value:function(){var e=this.props,t=e.has_result,r=e.is_multiplier,o=e.contract_info;return t?r?a.createElement("div",{className:"contract-audit__wrapper"},a.createElement(m.Tabs,{top:!0,className:"contract-audit__tabs",onTabItemClick:this.onTabItemClick},a.createElement("div",{label:Object(u.localize)("Details")},a.createElement(j,this.props)),a.createElement("div",{label:Object(u.localize)("History")},a.createElement(O,{currency:o.currency,history:this.state.contract_update_history})))):a.createElement("div",{className:"contract-audit__wrapper"},a.createElement(j,this.props)):null}}])&&S(t.prototype,r),o&&S(t,o),c}(a.Component);I.propTypes={contract_end_time:n.a.PropTypes.oneOfType([n.a.number,n.a.string]),contract_info:n.a.object,contract_update_history:n.a.array,duration:n.a.oneOfType([n.a.number,n.a.string]),duration_unit:n.a.string,exit_spot:n.a.string,has_result:n.a.bool,is_multiplier:n.a.bool,toggleHistoryTab:n.a.func};var N=I,z=r("./App/Components/Elements/ContentLoader/index.js"),P=r("./Stores/Modules/Portfolio/Helpers/details.js"),R=r("./Constants/contract.js"),F=r("./Stores/Modules/Trading/Helpers/active-symbols.js"),W=r("./Stores/Modules/Contract/Helpers/multiplier.js"),A=r("./Modules/Reports/Helpers/market-underlying.js"),B=r("react-dom"),U=r.n(B);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var H=function(e){var t=e.is_multiplier,r=e.children,o=e.onSwipedDown,n=m.SwipeableWrapper.useSwipeable({onSwipedDown:o}),c=document.getElementById("dt_contract_drawer_audit");return c?U.a.createPortal(a.createElement(m.Div100vhContainer,{className:"contract-audit-card",height_offset:"220px"},a.createElement("div",q({},n,{className:d()("contract-audit-card__container",{"contract-audit-card__container--is-multiplier":t})}),r)),c):null};H.propTypes={is_multiplier:n.a.bool,children:n.a.any,onSwipedDown:n.a.func};var L=function(e){var t=e.children,r=e.onSwipedDown,o=e.onSwipedUp,n=m.SwipeableWrapper.useSwipeable({onSwipedDown:r,onSwipedUp:o});return a.createElement("div",n,t)};L.propTypes={children:n.a.any,onSwipedDown:n.a.func,onSwipedUp:n.a.func};var G=function(e){var t=e.active_symbols,r=e.addToast,o=e.contract_info,n=e.contract_update,c=e.currency,i=e.current_focus,s=e.getContractById,l=e.is_mobile,u=e.is_multiplier,p=e.is_sell_requested,_=e.is_collapsed,f=e.onClickCancel,b=e.onClickSell,y=e.onSwipedUp,g=e.onSwipedDown,v=e.removeToast,E=e.result,j=e.setCurrentFocus,w=e.server_time,O=e.should_show_cancellation_warning,C=e.status,k=e.toggleCancellationWarning,S=e.toggleContractAuditDrawer,T=o.profit,x=!!Object(h.e)(o),M=Object(F.a)(t,Object(A.b)(o.shortcode).underlying),D=a.createElement(m.ContractCard.Header,{contract_info:o,display_name:M,getCardLabels:R.a,getContractTypeDisplay:R.c,has_progress_slider:!u,is_mobile:l,is_sell_requested:p,is_sold:x,onClickSell:b,server_time:w}),I=a.createElement(m.ContractCard.Body,{addToast:r,connectWithContractUpdate:W.a,contract_info:o,contract_update:n,currency:c,current_focus:i,getCardLabels:R.a,getContractById:s,is_mobile:l,is_multiplier:u,is_sold:x,removeToast:v,server_time:w,setCurrentFocus:j,should_show_cancellation_warning:O,status:C,toggleCancellationWarning:k}),N=a.createElement(m.ContractCard.Footer,{contract_info:o,getCardLabels:R.a,is_multiplier:u,is_sell_requested:p,onClickCancel:f,onClickSell:b,server_time:w,status:C}),z=a.createElement(a.Fragment,null,D,I),P=a.createElement(m.ContractCard,{contract_info:o,getCardLabels:R.a,is_multiplier:u,profit_loss:T,should_show_result_overlay:!1},a.createElement("div",{className:d()("dc-contract-card",{"dc-contract-card--green":l&&!u&&T>0&&!E,"dc-contract-card--red":l&&!u&&T<0&&!E})},z,N));return a.createElement(a.Fragment,null,a.createElement(m.DesktopWrapper,null,P),a.createElement(m.MobileWrapper,null,a.createElement(L,{onSwipedUp:x||u?y:void 0,onSwipedDown:x||u?g:void 0},(x||u)&&a.createElement(m.Collapsible.ArrowButton,{onClick:S,is_collapsed:_}),P)))};G.propTypes={contract_info:n.a.object,currency:n.a.string,current_focus:n.a.string,is_multiplier:n.a.bool,is_sell_requested:n.a.bool,onClickCancel:n.a.func,onClickSell:n.a.func,status:n.a.string};var J=Object(p.b)((function(e){var t=e.modules,r=e.ui;return{active_symbols:t.trade.active_symbols,addToast:r.addToast,current_focus:r.current_focus,getContractById:t.contract_trade.getContractById,removeToast:r.removeToast,should_show_cancellation_warning:r.should_show_cancellation_warning,setCurrentFocus:r.setCurrentFocus,toggleCancellationWarning:r.toggleCancellationWarning}}))(G);function V(e){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Z(e);if(t){var n=Z(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return X(this,r)}}function X(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ee=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(c,e);var t,r,o,n=Q(c);function c(){var e;Y(this,c);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={is_shade_on:!1,should_show_contract_audit:!1},e.handleShade=function(t){e.setState({is_shade_on:t})},e.toggleContractAuditDrawer=function(){e.setState((function(e){return{should_show_contract_audit:!e.should_show_contract_audit}}))},e.onSwipedDown=function(){return e.setState({should_show_contract_audit:!1})},e.onSwipedUp=function(){return e.setState({should_show_contract_audit:!0})},e.redirectBackToReports=function(){e.props.history.location.state?e.props.history.goBack():e.props.history.push(s.routes.reports)},e}return t=c,(r=[{key:"getBodyContent",value:function(){var e=this.props.contract_info,t=e.currency,r=e.exit_tick_display_value,o=e.is_sold,n=this.props,c=n.contract_info,i=n.contract_update,l=n.contract_update_history,u=n.is_mobile,p=n.is_sell_requested,_=n.is_dark_theme,d=n.is_multiplier,f=n.onClickCancel,b=n.onClickSell,y=n.server_time,g=n.status,v=n.toggleHistoryTab,E=Object(s.isUserSold)(c)&&!d?"-":r,j=a.createElement(N,{contract_info:c,contract_update_history:l,contract_end_time:Object(h.e)(c),is_dark_theme:_,is_multiplier:d,is_open:!0,is_shade_visible:this.handleShade,duration:Object(P.b)(c),duration_unit:Object(P.c)(Object(P.a)(c)),exit_spot:E,has_result:!!o||d,toggleHistoryTab:v});return a.createElement(a.Fragment,null,a.createElement(J,{contract_info:c,contract_update:i,currency:t,is_mobile:u,is_multiplier:d,is_sell_requested:p,is_collapsed:this.is_collapsed,onClickCancel:f,onClickSell:b,onSwipedUp:this.onSwipedUp,onSwipedDown:this.onSwipedDown,server_time:y,status:g,toggleContractAuditDrawer:this.toggleContractAuditDrawer}),a.createElement(m.DesktopWrapper,null,j))}},{key:"render",value:function(){if(!this.props.contract_info)return null;var e=this.props.contract_info.is_expired,t=this.props.contract_info,r=t.exit_tick_display_value,o=t.is_sold,n=this.props,c=n.contract_info,i=n.contract_update_history,l=n.is_dark_theme,u=n.is_multiplier,p=n.toggleHistoryTab,_=Object(s.isUserSold)(c)&&!u?"-":r,f=a.createElement(N,{contract_info:c,contract_update_history:i,contract_end_time:Object(h.e)(c),is_dark_theme:l,is_multiplier:u,is_open:!0,is_shade_visible:this.handleShade,duration:Object(P.b)(c),duration_unit:Object(P.c)(Object(P.a)(c)),exit_spot:_,has_result:!!o||u,toggleHistoryTab:p}),b=a.createElement(a.Fragment,null,this.props.contract_info.status||e?this.getBodyContent():a.createElement("div",{className:"contract-card"},a.createElement(z.a,{is_dark_theme:this.props.is_dark_theme,speed:2})));return a.createElement("div",{id:"dt_contract_drawer",className:d()("contract-drawer",{"contract-drawer--with-collapsible-btn":!!Object(h.e)(this.props.contract_info)||u&&Object(s.isMobile)(),"contract-drawer--is-expanded":this.state.should_show_contract_audit,"contract-drawer--is-multiplier":u&&Object(s.isMobile)(),"contract-drawer--is-multiplier-sold":u&&Object(s.isMobile)()&&Object(h.e)(this.props.contract_info)})},a.createElement("div",{className:"contract-drawer__body"},b),a.createElement(m.MobileWrapper,null,a.createElement("div",{id:"dt_contract_drawer_audit"},a.createElement(H,{is_multiplier:u},f))))}},{key:"is_collapsed",get:function(){return this.state.should_show_contract_audit}}])&&$(t.prototype,r),o&&$(t,o),c}(a.Component);ee.propTypes={contract_info:n.a.object,is_chart_loading:n.a.bool,is_dark_theme:n.a.bool,is_mobile:n.a.bool,is_history_tab_active:n.a.bool,is_sell_requested:n.a.bool,onClickCancel:n.a.func,onClickContractUpdate:n.a.func,onClickSell:n.a.func,status:n.a.string};var te=Object(c.withRouter)(Object(p.b)((function(e){var t=e.common,r=e.ui;return{server_time:t.server_time,is_mobile:r.is_mobile}}))(ee)),re=r("./Modules/SmartChart/index.js"),oe=r("./Modules/Contract/Components/Digits/index.js"),ne=r("./App/Components/Animations/index.js"),ae=r("mobx-react"),ce=function(e){var t=e.contract_info;return a.createElement("div",{className:"info-box-longcode"},a.createElement(m.Icon,{icon:"IcContractFlag",className:"info-box-longcode-icon",size:24}),a.createElement("span",{className:"info-box-longcode-text"},t.longcode))};ce.propTypes={longcode:n.a.string};var ie=Object(ae.observer)(ce),se=function(e){var t=e.message,r=void 0===t?"":t,o=e.onClickClose;return r?a.createElement("div",{className:"message"},a.createElement("div",{className:"message-icon"},a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16"},a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("circle",{cx:"8",cy:"8",r:"8",fill:"#F44336"}),a.createElement("path",{fill:"#FFF",fillRule:"nonzero",d:"M8 7.293l3.146-3.147a.5.5 0 0 1 .708.708L8.707 8l3.147 3.146a.5.5 0 0 1-.708.708L8 8.707l-3.146 3.147a.5.5 0 0 1-.708-.708L7.293 8 4.146 4.854a.5.5 0 1 1 .708-.708L8 7.293z"})))),a.createElement("div",{className:"message-text"},r),a.createElement("div",{className:"message-close",onClick:o},a.createElement(m.Icon,{icon:"IcCross"}))):null};se.propTypes={message:n.a.string,onClickClose:n.a.func};var le=se,ue=function(e){var t=e.contract_info,r=e.error_message,o=e.removeError,n=ie,c=!!t.longcode;return a.createElement(ne.b,{is_visible:c,className:"info-box-container",keyname:"info-box-container"},!!t.contract_type&&a.createElement("div",{className:"info-box"},a.createElement(n,{contract_info:t})),a.createElement(le,{message:r,onClickClose:o}))};ue.propTypes={contract_info:n.a.object,error_message:n.a.string,removeError:n.a.func};var pe=ue,_e=r("./Modules/SmartChart/Components/bottom-widgets.jsx"),de=r("./Modules/SmartChart/Components/top-widgets.jsx"),me=Object(p.b)((function(e){var t=e.modules;return{contract_info:t.contract_replay.contract_store.contract_info,digits_info:t.contract_replay.contract_store.digits_info,display_status:t.contract_replay.contract_store.display_status,is_digit_contract:t.contract_replay.contract_store.is_digit_contract,is_ended:t.contract_replay.contract_store.is_ended}}))((function(e){var t=e.is_digit_contract,r=e.is_ended,o=e.contract_info,n=e.digits_info,c=e.display_status;return a.createElement(oe.a,{is_digit_contract:t,is_ended:r,contract_info:o,digits_info:n,display_status:c})})),fe=Object(p.b)((function(e){var t=e.modules;return{contract_info:t.contract_replay.contract_store.contract_info,error_message:t.contract_replay.error_message,removeError:t.contract_replay.removeErrorMessage}}))((function(e){var t=e.contract_info,r=e.error_message,o=e.removeError;return a.createElement(pe,{contract_info:t,error_message:r,removeError:o})})),be=function(){return a.createElement(de.a,{InfoBox:a.createElement(fe,null),is_title_enabled:!1})},ye=function(){return a.createElement(_e.a,{Digits:a.createElement(me,null)})},he=r("mobx");function ge(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var ve=function(e){var t=e.marker_config,r=e.marker_content_props,o=e.is_bottom_widget_visible,n=t.ContentComponent,c=ge(t,["ContentComponent"]);return a.createElement(re.e,{markerRef:function(e){if(e){if(!c.y){var t=24+(o?115:0);e.div.style.height="calc(100% - ".concat(t,"px)"),e.div.style.zIndex="-1"}e.setPosition({epoch:+c.x,price:+c.y})}}},a.createElement(n,Object(he.toJS)(r)))};ve.propTypes={marker_config:n.a.object,marker_content_props:n.a.object};var Ee=ve;function je(e){return(je="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function we(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oe(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ce(e,t,r){return t&&Oe(e.prototype,t),r&&Oe(e,r),e}function ke(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Se(e,t)}function Se(e,t){return(Se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Me(e);if(t){var n=Me(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return xe(this,r)}}function xe(e,t){return!t||"object"!==je(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Me(e){return(Me=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var De=function(e){ke(r,e);var t=Te(r);function r(){var e;we(this,r);for(var o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={is_visible:!1},e.onClickClose=function(){return e.setState({is_visible:!1}),!Object(s.isEmptyObject)(e.props.location.state)&&e.props.location.state.from_table_row?e.props.history.goBack():e.props.routeBackInApp(e.props.history)},e}return Ce(r,[{key:"componentDidMount",value:function(){var e=+/[^/]*$/.exec(location.pathname)[0];this.props.onMount(this.props.contract_id||e),this.setState({is_visible:!0})}},{key:"componentWillUnmount",value:function(){this.setState({is_visible:!1}),this.props.onUnmount()}},{key:"render",value:function(){var e=this.props,t=e.contract_info,r=e.contract_update,o=e.contract_update_history,n=e.is_chart_loading,c=e.is_dark_theme,i=e.is_digit_contract,l=e.is_sell_requested,p=e.is_valid_to_cancel,_=e.onClickCancel,b=e.NotificationMessages,y=e.onClickSell,h=e.indicative_status,g=e.toggleHistoryTab;if(!t.underlying)return null;var v=Object(s.isMultiplierContract)(t.contract_type),E=a.createElement(te,{contract_info:t,contract_update:r,contract_update_history:o,is_chart_loading:n,is_dark_theme:c,is_multiplier:v,is_sell_requested:l,is_valid_to_cancel:p,onClickCancel:_,onClickSell:y,status:h,toggleHistoryTab:g});return a.createElement(m.FadeWrapper,{is_visible:this.state.is_visible,className:"contract-details-wrapper",keyname:"contract-details-wrapper"},a.createElement(m.MobileWrapper,null,a.createElement(b,null)),a.createElement(m.PageOverlay,{id:"dt_contract_replay_container",header:Object(u.localize)("Contract details"),onClickClose:this.onClickClose},a.createElement(m.Div100vhContainer,{className:"trade-container__replay",is_disabled:Object(s.isDesktop)(),height_offset:"80px"},a.createElement(m.DesktopWrapper,null,E),a.createElement(m.MobileWrapper,null,a.createElement("div",{className:d()("contract-drawer__mobile-wrapper",{"contract-drawer__mobile-wrapper--is-multiplier":Object(s.isMobile)()&&v})},E)),a.createElement(a.Suspense,{fallback:a.createElement("div",null)},a.createElement("div",{className:d()("replay-chart__container",{"replay-chart__container--is-multiplier":Object(s.isMobile)()&&v})},a.createElement(m.DesktopWrapper,null,a.createElement(b,null)),a.createElement(f.a,{is_dark:c,is_visible:n}),a.createElement(m.DesktopWrapper,null,a.createElement(ze,null)),a.createElement(m.MobileWrapper,null,i?a.createElement(a.Fragment,null,a.createElement(fe,null),a.createElement(m.SwipeableWrapper,null,a.createElement(me,null),a.createElement(ze,null))):a.createElement(ze,null)))))))}}]),r}(a.Component);De.propTypes={contract_id:n.a.number,contract_info:n.a.object,history:n.a.object,indicative_status:n.a.string,is_chart_loading:n.a.bool,is_dark_theme:n.a.bool,is_digit_contract:n.a.bool,location:n.a.object,onMount:n.a.func,onUnmount:n.a.func,routes:n.a.arrayOf(n.a.object)};var Ie=Object(c.withRouter)(Object(p.b)((function(e){var t=e.common,r=e.modules,o=e.ui,n=r.contract_replay,a=n.contract_store;return{routeBackInApp:t.routeBackInApp,contract_info:a.contract_info,contract_update:a.contract_update,contract_update_history:a.contract_update_history,is_digit_contract:a.is_digit_contract,is_sell_requested:n.is_sell_requested,is_valid_to_cancel:n.is_valid_to_cancel,onClickCancel:n.onClickCancel,onClickSell:n.onClickSell,onMount:n.onMount,onUnmount:n.onUnmount,indicative_status:n.indicative_status,is_chart_loading:n.is_chart_loading,is_dark_theme:o.is_dark_mode_on,NotificationMessages:o.notification_messages_ui,toggleHistoryTab:o.toggleHistoryTab}}))(De)),Ne=function(e){ke(r,e);var t=Te(r);function r(){return we(this,r),t.apply(this,arguments)}return Ce(r,[{key:"render",value:function(){var e=this;return a.createElement(re.h,{barriers:this.props.barriers_array,bottomWidgets:this.is_bottom_widget_visible?ye:null,chartControlsWidgets:null,chartType:this.props.chart_type,endEpoch:this.props.end_epoch,margin:this.props.margin||null,isMobile:Object(s.isMobile)(),enabledNavigationWidget:Object(s.isDesktop)(),enabledChartFooter:!1,granularity:this.props.granularity,requestAPI:this.props.wsSendRequest,requestForget:this.props.wsForget,requestForgetStream:this.props.wsForgetStream,crosshair:Object(s.isMobile)()?0:void 0,maxTick:Object(s.isMobile)()?8:void 0,requestSubscribe:this.props.wsSubscribe,settings:this.props.settings,startEpoch:this.props.start_epoch,scrollToEpoch:this.props.scroll_to_epoch,chartStatusListener:this.props.setIsChartReady,symbol:this.props.symbol,topWidgets:be,isConnectionOpened:this.props.is_socket_opened,isStaticChart:!1,shouldFetchTradingTimes:!this.props.end_epoch,yAxisMargin:this.chart_yAxis_margin},this.props.markers_array.map((function(t){return a.createElement(Ee,{key:t.react_key,marker_config:t.marker_config,marker_content_props:t.content_config,is_bottom_widget_visible:e.is_bottom_widget_visible})})))}},{key:"is_bottom_widget_visible",get:function(){return Object(s.isDesktop)()&&this.props.is_digit_contract}},{key:"chart_yAxis_margin",get:function(){var e={top:Object(s.isMobile)()?96:136,bottom:this.is_bottom_widget_visible?128:112};return Object(s.isMobile)()&&(e.bottom=48),e}}]),r}(a.Component);Ne.propTypes={barriers_array:n.a.array,BottomWidgets:n.a.node,chart_type:n.a.string,end_epoch:n.a.number,granularity:n.a.number,InfoBox:n.a.node,is_mobile:n.a.bool,is_socket_opened:n.a.bool,is_static_chart:n.a.bool,margin:n.a.number,markers_array:n.a.array,replay_controls:n.a.object,scroll_to_epoch:n.a.number,settings:n.a.object,start_epoch:n.a.number,symbol:n.a.string,wsForget:n.a.func,wsForgetStream:n.a.func,wsSendRequest:n.a.func,wsSubscribe:n.a.func};var ze=Object(p.b)((function(e){var t=e.modules,r=e.ui,o=e.common,n=t.trade,a=t.contract_replay,c=a.contract_store,i=c.contract_config,l=a.is_chart_ready,u="DBot"===Object(s.getPlatformRedirect)(o.app_routing_history).name,p={language:o.current_language.toLowerCase(),theme:r.is_dark_mode_on&&!u?"dark":"light",position:r.is_chart_layout_default?"bottom":"left",countdown:r.is_chart_countdown_visible,assetInformation:!1,isHighestLowestMarkerEnabled:!1};return{end_epoch:i.end_epoch,chart_type:i.chart_type,start_epoch:i.start_epoch,granularity:i.granularity,scroll_to_epoch:l?i.scroll_to_epoch:void 0,settings:p,is_mobile:r.is_mobile,is_socket_opened:o.is_socket_opened,is_digit_contract:c.is_digit_contract,setIsChartReady:a.setIsChartReady,margin:a.margin,is_static_chart:a.is_static_chart,barriers_array:c.barriers_array,markers_array:c.markers_array,symbol:c.contract_info.underlying,wsForget:n.wsForget,wsSubscribe:n.wsSubscribe,wsSendRequest:n.wsSendRequest,wsForgetStream:n.wsForgetStream}}))(Ne);function Pe(e){return(Pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Re(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fe(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function We(e,t){return(We=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ae(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=Ue(e);if(t){var n=Ue(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return Be(this,r)}}function Be(e,t){return!t||"object"!==Pe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ue(e){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var qe=["GetProposalFailure","ContractValidationError"],He=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&We(e,t)}(p,e);var t,r,o,n=Ae(p);function p(){return Re(this,p),n.apply(this,arguments)}return t=p,(r=[{key:"componentDidMount",value:function(){this.props.onMount(+this.props.match.params.contract_id,this.props.history)}},{key:"componentWillUnmount",value:function(){this.props.removeErrorMessage(),this.props.onUnmount()}},{key:"render",value:function(){var e=this;return isNaN(this.props.match.params.contract_id)?a.createElement(c.Redirect,{to:"/404"}):a.createElement(a.Fragment,null,this.props.has_error?a.createElement(l.default,{message:this.props.error_message,is_dialog:qe.includes(this.props.error_code),redirect_label:qe.includes(this.props.error_code)?Object(u.localize)("Ok"):Object(u.localize)("Go back to trading"),redirectOnClick:function(){return e.props.history.push(s.routes.trade)},should_show_refresh:!1}):a.createElement(i.CSSTransition,{in:!this.props.has_error,timeout:400,classNames:{enter:"contract--enter",enterDone:"contract--enter-done",exit:"contract--exit"},unmountOnExit:!0},a.createElement(Ie,{contract_id:+this.props.match.params.contract_id,key:+this.props.match.params.contract_id})))}}])&&Fe(t.prototype,r),o&&Fe(t,o),p}(a.Component);He.propTypes={error_message:n.a.string,error_code:n.a.string,has_error:n.a.bool,history:n.a.object,is_mobile:n.a.bool,match:n.a.object,onMount:n.a.func,onUnmount:n.a.func,removeErrorMessage:n.a.func,symbol:n.a.string};var Le=Object(c.withRouter)(Object(p.b)((function(e){var t=e.modules,r=e.ui;return{error_message:t.contract_replay.error_message,error_code:t.contract_replay.error_code,has_error:t.contract_replay.has_error,onMount:t.contract_replay.setAccountSwitcherListener,onUnmount:t.contract_replay.removeAccountSwitcherListener,removeErrorMessage:t.contract_replay.removeErrorMessage,symbol:t.contract_replay.contract_info.underlying,is_mobile:r.is_mobile}}))(He))}}]);
//# sourceMappingURL=trader.contract.6485d77fe7df29faabce.js.map