"use strict";function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function init(){var e=require("../../lib/react.js"),t=require("../../cssStr/cssStr.js"),r=(require("../../actions/projectActions.js"),require("../../stores/projectStores.js")),s=(require("../../weapp/utils/projectManager.js"),require("../../stores/windowStores.js")),a=require("../../stores/configStores.js"),i=require("../../common/actions/actions.js"),n=e.createClass({displayName:"CustomPreview",getInitialState:function(){return{lazyLoaded:!1,show:!1,type:"",serviceList:[],currentService:{},currentQuery:"",queryList:[],widgetData:"",showQueryDropdown:!1,showServiceType:!1}},_showCustomPreview:function(e){var t=e.project,r=e.type,s=e.callback,a=t.widgetOptions||{},n=a.searchQuery,o=a.enable,c=a.currentService||{};this.setState({lazyLoaded:!0,project:t,show:!0,currentQuery:n||"",currentService:c,queryList:c.query_item||[],enable:o,type:r}),this._callback=s,this.state.serviceList&&0!=this.state.serviceList.length||i.getSearchWidgetQueryOptions(t)},_onSearchQueryChange:function(e){var t=e.service_item;this.setState({serviceList:t})},handleInputChange:function(e){var t=e.target.name;this.setState(_defineProperty({},t,e.target.value))},changeEnable:function(){this.setState({enable:!this.state.enable})},close:function(){this.setState({show:!1,searchQuery:"",enable:!1})},callback:function(e){"function"==typeof this._callback&&this._callback(e)},confirm:function(){var e=this.state,t=e.currentService,s=e.currentQuery,a=e.type,i=e.project,n=(e.enable,e.boxQI),o=e.widgetData;"upload"==a?this.callback({searchQuery:s}):r.setWidgetOptions(i.hash,{searchQuery:s,boxQI:n,currentService:t,widgetData:o,enable:!0}),this.setState({show:!1})},componentDidMount:function(){s.on("SHOW_SEARCH_WIDGET_CUSTOM",this._showCustomPreview),a.on("SEARCH_QUERY_CHANGE",this._onSearchQueryChange)},componentWillUnmount:function(){s.removeListener("SHOW_SEARCH_WIDGET_CUSTOM",this._showCustomPreview)},onShowServiceType:function(){this.setState({showServiceType:!this.state.showServiceType})},onShowQueryDropdown:function(){this.setState({showQueryDropdown:!this.state.showQueryDropdown})},onServiceSelect:function(e){var t=e.currentTarget,r=t.dataset,s=r.index,a=this.state.serviceList[s]||{},i=a.query_item||[];this.setState({currentService:a,showServiceType:!1,currentQuery:"",queryList:i})},onQuerySelect:function(e){var t=e.currentTarget,r=t.dataset;this.setState({showQueryDropdown:!1,currentQuery:r.query,boxQI:r.box})},render:function(){var r=this;if(!this.state.lazyLoaded)return null;var s=this.state.show?t.displayBlock:t.displayNone,a=this.state.currentService,i=this.state.serviceList.map(function(t,s){return e.createElement("div",{className:"custom-preview-dropdown-item","data-type":t.type,"data-index":s,onClick:r.onServiceSelect},t.wording)}),n=this.state.queryList.map(function(t,s){return e.createElement("div",{className:"custom-preview-dropdown-item","data-query":t.query,"data-box":t.box_qi,onClick:r.onQuerySelect},t.query)});return e.createElement("div",{className:"setting-show",style:s},e.createElement("div",{className:"setting-hd"},e.createElement("h3",{className:"setting-hd-title"},"搜索页","upload"==this.state.type?"预览":"编译条件")),e.createElement("div",{className:"setting-bd"},e.createElement("div",{className:"custom-preview"},e.createElement("div",{className:"custom-preview-form"},e.createElement("div",{className:"custom-preview-form-item",style:"upload"==this.state.type?{}:t.displayNone},e.createElement("div",{className:"custom-preview-form-label"},"搜索内容"),e.createElement("div",{className:"custom-preview-form-value"},e.createElement("input",{type:"text",name:"currentQuery",value:this.state.currentQuery,onChange:this.handleInputChange,placeholder:"搜索内容"}))),e.createElement("div",{className:"custom-preview-form-item",style:"upload"==this.state.type?t.displayNone:{}},e.createElement("div",{className:"custom-preview-form-label"},"初始化数据"),e.createElement("div",{className:"custom-preview-form-value"},e.createElement("input",{type:"text",name:"widgetData",value:this.state.widgetData,onChange:this.handleInputChange,placeholder:"初始化数据"}))),e.createElement("div",{className:"custom-preview-form-item",style:"upload"==this.state.type?t.displayNone:{}},e.createElement("div",{className:"custom-preview-form-label"},"请选择服务类别"),e.createElement("div",{className:"custom-preview-form-value"},e.createElement("div",{className:"custom-preview-form-input-wrapper",onClick:this.onShowServiceType},e.createElement("input",{value:a.wording,disabled:!0,type:"text"}),e.createElement("i",{className:this.state.showServiceType?"custom-preview-dropdown-icon-up":"custom-preview-dropdown-icon-down"})),e.createElement("div",{className:"custom-preview-dropdown",style:this.state.showServiceType?{}:t.displayNone},i))),e.createElement("div",{className:"custom-preview-form-item",style:"upload"==this.state.type?t.displayNone:{}},e.createElement("div",{className:"custom-preview-form-label"},"请选择查询条件"),e.createElement("div",{className:"custom-preview-form-value"},e.createElement("div",{className:"custom-preview-form-input-wrapper",onClick:this.onShowQueryDropdown},e.createElement("input",{value:this.state.currentQuery,disabled:!0,type:"text"}),e.createElement("i",{className:this.state.showServiceType?"custom-preview-dropdown-icon-up":"custom-preview-dropdown-icon-down"})),e.createElement("div",{className:"custom-preview-dropdown",style:this.state.showQueryDropdown?{}:t.displayNone},n)))))),e.createElement("div",{className:"setting-ft"},e.createElement("a",{onClick:this.close,href:"javascript:;",className:"setting-button-default"},"取消"),e.createElement("a",{onClick:this.confirm,href:"javascript:;",className:"detail-meta-upload"},"确定")))}});_exports=n}var _exports;init(),module.exports=_exports;