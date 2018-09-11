'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('fs'),b=require('path'),c=require('react'),d=require('moment'),e=require('classnames'),f=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),g=require('./4247893aa775b1bbd1b33272249f2906.js'),h=require('./efca46d675165423879efe144504d758.js'),i=require('./ae7839ba7720ad42a8e26fcddb5eec71.js'),j=require('./3c4d32722656d6db4b4378ce9114631b.js'),k=require('./412d5c88ae1629af2abf1c3e837de385.js'),l=require('./da7c31daaf542cf1796023d8e344b98a.js'),m=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js'),n=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),o=require('./3bfffbe88b3d923921f851c0697974fe.js'),p=require('./2d8c17f8789be1869edbd369314f5eaa.js'),q=require('./d28a711224425b00101635efe1034c99.js'),r=require('./2254692212b7d32a3c1405f399460682.js'),s=require('./common/locales/index.js'),{getWeappCodeSize:t}=require('./3bfffbe88b3d923921f851c0697974fe.js'),u={NONE:'none',LOCAL:'local',PREVIEW:'preview',UPLOAD:'upload'};class v extends c.Component{constructor(a){super(a),this.state={lazyLoaded:!!a.show,show:!1,animationType:'none',codePackageLength:0,hasSubpackage:!1,subPackagesLengthInfo:null,subpackagesInfo:{show:!1,type:u.NONE},hasPlugin:!1,pluginPopoverInfo:{show:!1}}}componentDidMount(){this.props.show&&this.setState({show:!0,animationType:'show'}),this.getCodePackageLength(),this.checkHasSubpackage(),this.updatePluginInfo(),this._cancalLocaleListener=s.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this._cancalLocaleListener()}componentWillReceiveProps(a){a.show?(this.setState({lazyLoaded:!0}),this.getCodePackageLength(),!this.props.show&&q.updateInfos(),!this.props.show&&('qcloud'===a.selected||'config'===a.selected)&&this.props.requestProjectAttr(),!this.props.show&&'setting'===a.selected&&this.props.getPublicLibUsageRate()):this.resetPopover(),!this.props.show&&a.show?(this.checkHasSubpackage(),this.updatePluginInfo(),this.setState({show:!0,animationType:'show'})):this.props.show&&!a.show&&this.setState({animationType:'hide'})}checkHasSubpackage(){setTimeout(async()=>{const a=await n(this.props.project);a.subPackages?!this.state.hasSubpackage&&this.setState({hasSubpackage:!0}):this.state.hasSubpackage&&this.setState({hasSubpackage:!1})})}updatePluginInfo(){setTimeout(async()=>{const a=await o.getLatestPluginInfo(this.props.project);if(a&&a.length)for(const b of a)b.current&&!b.current.pkgSize&&(b.current.pkgSize=p.getSize(b.appid,b.current.version));if(this.props.setPluginInfo(a),a&&a.length){let b=s.config.PLUGINS_POSTFIX.format(a.length),c=!1;for(const b of a)if((b.current||{}).version!==(b.latest||{}).version){c=!0;break}c&&(b=s.config.PLUGINS_UPDATE_INFO.format(a.length)),this.setState({hasPlugin:!0,pluginPopoverInfo:_extends({},this.state.pluginPopoverInfo,{statusText:b,items:a})})}else this.setState({hasPlugin:!1,pluginPopoverInfo:_extends({},this.state.pluginPopoverInfo,{show:!1})})})}onTabSelect(a){this.props.infoActions.setProjectInfo({selected:a}),('config'===a||'qcloud'===a)&&(this.props.requestProjectAttr(),'qcloud'==a&&l('weapp_toolbar_details_qcloud',this.props.project.appid))}onPannelClick(a){a.stopPropagation(),this.resetPopover()}resetPopover(){this.setState({showDropDown:!1,subpackagesInfo:_extends({},this.state.subpackagesInfo,{show:!1}),pluginPopoverInfo:_extends({},this.state.pluginPopoverInfo,{show:!1})})}handleDropdownShow(){this.setState({showDropDown:!0})}onFileSystemClick(a){a.stopPropagation();const b=this.props.project,c=m.getFileSystemDir(b);nw.Shell.openItem(c)}onOpenDirClick(b){b.stopPropagation();const c=this.props.project.projectpath;a.existsSync(c)&&nw.Shell.openItem(c)}onCopyShareLinkClick(a,b){a.stopPropagation();const c=this.props.project||{},d=nw.Clipboard.get();d.set(b,'text'),this.props.showSuccessTip(s.config.CONSOLE_COPY_SUCCESS)}onCopyAppid(a){a.stopPropagation();const b=this.props.project||{},c=nw.Clipboard.get();c.set(b.appid,'text'),this.props.showSuccessTip(s.config.CONSOLE_COPY_SUCCESS)}onShowPluginInfoClick(a){a.stopPropagation();const b=this.pluginInfoLabel.getBoundingClientRect(),c=`${b.top-50}px`;this.setState({pluginPopoverInfo:_extends({},this.state.pluginPopoverInfo,{show:!0,top:c})})}onShowsubpackagesInfoClick(a,b){switch(a.stopPropagation(),b){case'local':{if(this.state.subPackagesLengthInfo&&1<Object.keys(this.state.subPackagesLengthInfo).length){if(!this.localSubpackgesLabel)return;const a=this.localSubpackgesLabel.getBoundingClientRect(),b=`${a.top-50}px`,c=this.state.subPackagesLengthInfo;this.setState({subpackagesInfo:{top:b,show:!0,title:s.config.LOCAL_SUBPACKAGE_CODE_SIZE,type:u.PREVIEW,items:Object.keys(c).sort((a,b)=>a<b).map((a)=>{return'__APP__'===a?{name:s.config.MAIN_PACKAGE,size:`${c[a]} KB`}:{name:a,size:`${c[a]} KB`}})}})}else this.setState({subpackagesInfo:{show:!1}});break}case'preview':{if(this.props.pkgSize.previewSubpackages&&0<this.props.pkgSize.previewSubpackages.length){if(!this.previewSubpackagesLabel)return;const a=this.previewSubpackagesLabel.getBoundingClientRect(),b=`${a.top-50}px`;this.setState({subpackagesInfo:{top:b,show:!0,title:s.config.LAST_PREVIEW_SUBPACKAGE_SIZE,type:u.PREVIEW,items:this.props.pkgSize.previewSubpackages.sort((a,b)=>a.name<b.name).map((a)=>{return'__APP__'===a.name?{name:s.config.MAIN_PACKAGE,size:`${(a.size/1024).toFixed(1)} KB`}:{name:a.name,size:`${(a.size/1024).toFixed(1)} KB`}})}})}else this.setState({subpackagesInfo:{show:!1}});break}case'upload':{if(this.props.pkgSize.uploadSubpackages&&0<this.props.pkgSize.uploadSubpackages.length){if(!this.uploadSubpackagesLabel)return;const a=this.uploadSubpackagesLabel.getBoundingClientRect(),b=`${a.top-50}px`;this.setState({subpackagesInfo:{top:b,show:!0,title:s.config.LAST_UPLOAD_SUBPACKAGE_SIZE,type:u.UPLOAD,items:this.props.pkgSize.uploadSubpackages.sort((a,b)=>a.name<b.name).map((a)=>{return'__APP__'===a.name?{name:s.config.MAIN_PACKAGE,size:`${(a.size/1024).toFixed(1)} KB`}:{name:a.name,size:`${(a.size/1024).toFixed(1)} KB`}})}})}else this.setState({subpackagesInfo:{show:!1}});break}default:}}async getCodePackageLength(){const{total:a,subPackages:b}=await t(this.props.project);this.setState({codePackageLength:a,subPackagesLengthInfo:b})}render(){var a=Math.round;if(!this.state.lazyLoaded)return null;const b=this.props,l=this.state,n=b.project||{},o=n.attr||{},p=o.appImageUrl||n.appShowImageUrl,q=`tab-hd-item ${'setting'===b.selected?'tab-hd-item-active':''}`,t=`tab-hd-item ${'config'===b.selected?'tab-hd-item-active':''}`,u=`tab-hd-item ${'qcloud'===b.selected?'tab-hd-item-active':''}`,v=o.qcloud&&o.qcloud.qcloud_status&&1===o.qcloud.qcloud_status.open_qc_account;let w;n.shareInfo&&n.shareInfo.history&&n.shareInfo.history[0]&&(w=n.shareInfo.history[0]);const x=o.platform&&o.extInfo&&(o.extInfo.appid||o.extInfo.errMsg)||'',y=m.getFileSystemDir(n)||'';let z=n.appid;return n.isGameTourist&&(z='touristappid'),c.createElement('div',{className:e('panel panel-pull-right',{"ui-animate-swipeInLeft":'show'===l.animationType,"ui-animate-swipeOutRight":'hide'===l.animationType}),style:l.show?{}:f.displayNone,onAnimationEnd:()=>{'hide'===l.animationType&&this.setState({show:!1})},onClick:this.onPannelClick.bind(this)},c.createElement('div',{className:'project'},c.createElement('div',{className:'project-hd',style:{userSelect:'initial'}},c.createElement('div',{className:'ui-flex'},c.createElement('div',{className:'project-avatar'},c.createElement('img',{src:p,alt:''})),c.createElement('h3',{className:'project-name'},o.appName)),c.createElement('div',{className:'project-summary'},c.createElement('div',{className:'ui-flex',style:o.platform&&o.platformNickname?{}:f.displayNone},c.createElement('label',null,s.config.PLATFORM_NAME),c.createElement('p',{className:'ui-flex-item'},o.platformNickname)),c.createElement('div',{className:'ui-flex',style:x?{}:f.displayNone},c.createElement('label',null,'extAppid'),c.createElement('p',{className:'ui-flex-item'},x)),n.isGameTourist?null:c.createElement('div',{className:'ui-flex'},c.createElement('label',null,'AppID'),c.createElement('p',{className:'ui-flex-item'},z),c.createElement('a',{onClick:this.onCopyAppid.bind(this)},s.config.COPY)),c.createElement('div',{className:'ui-flex'},c.createElement('label',null,s.config.LOCAL_DIRECTORY),c.createElement('p',{className:'ui-flex-item',title:n.projectpath},n.projectpath),c.createElement('a',{onClick:this.onOpenDirClick.bind(this)},s.config.OPEN)),c.createElement('div',{className:'ui-flex',style:{}},c.createElement('label',null,s.config.FILE_SYSTEM),c.createElement('p',{className:'ui-flex-item',title:y},y),c.createElement('a',{onClick:this.onFileSystemClick.bind(this)},s.config.OPEN)),c.createElement('div',{className:'ui-flex',style:{position:'relative'},onClick:(a)=>this.onShowsubpackagesInfoClick(a,'local'),ref:(a)=>this.localSubpackgesLabel=a},c.createElement('label',null,s.config.LOCAL_CODE),c.createElement('p',{className:'ui-flex-item'},this.state.codePackageLength,' KB',this.state.hasSubpackage?c.createElement('i',{className:'ui-icon-arrow-down'}):null)),c.createElement('div',{className:'ui-flex',style:{position:'relative'},onClick:(a)=>this.onShowsubpackagesInfoClick(a,'preview'),ref:(a)=>this.previewSubpackagesLabel=a},c.createElement('label',null,s.config.LAST_PREVIEW),c.createElement('p',{className:'ui-flex-item'},0<=this.props.pkgSize.preview?`${a(this.props.pkgSize.preview/1024)} KB（${d(new Date(this.props.pkgSize.lastPreviewTime)).calendar()}）`:s.config.NONE,this.state.hasSubpackage?c.createElement('i',{className:'ui-icon-arrow-down'}):null)),n.isMiniCode?null:c.createElement('div',{className:'ui-flex',style:{position:'relative'},onClick:(a)=>this.onShowsubpackagesInfoClick(a,'upload'),ref:(a)=>this.uploadSubpackagesLabel=a},c.createElement('label',null,s.config.LAST_UPLOAD),c.createElement('p',{className:'ui-flex-item'},0<=this.props.pkgSize.upload?`${a(this.props.pkgSize.upload/1024)} KB（${d(new Date(this.props.pkgSize.lastUploadTime)).calendar()}）`:s.config.NONE,this.state.hasSubpackage?c.createElement('i',{className:'ui-icon-arrow-down'}):null)),this.state.hasPlugin?c.createElement('div',{className:'ui-flex',style:{position:'relative'},onClick:(a)=>this.onShowPluginInfoClick(a),ref:(a)=>this.pluginInfoLabel=a},c.createElement('label',null,s.config.PLUGIN_INFORMATION),c.createElement('p',{className:'ui-flex-item'},this.state.pluginPopoverInfo.statusText,c.createElement('i',{className:'ui-icon-arrow-down'}))):null,n.isMiniCode&&n.shareInfo&&n.shareInfo.from&&n.shareInfo.from.codeid?c.createElement('div',{className:'ui-flex'},c.createElement('label',null,s.config.SOURCE_LINK),c.createElement('p',{className:'ui-flex-item'},r.getMiniCodeLink(n.shareInfo.from.codeid)),c.createElement('a',{onClick:(a)=>this.onCopyShareLinkClick(a,r.getMiniCodeLink(n.shareInfo.from.codeid))},s.config.COPY)):null,n.isMiniCode?c.createElement('div',{className:'ui-flex'},c.createElement('label',null,s.config.LAST_SHARE),c.createElement('p',{className:'ui-flex-item'},w?r.getMiniCodeLink(w.codeid):s.config.NONE),c.createElement('a',{onClick:(a)=>w&&this.onCopyShareLinkClick(a,r.getMiniCodeLink(w.codeid))},s.config.COPY)):null,this.state.subpackagesInfo.show?c.createElement(j,{title:this.state.subpackagesInfo.title,items:this.state.subpackagesInfo.items,top:this.state.subpackagesInfo.top,onCancel:this.resetPopover.bind(this)}):null,this.state.pluginPopoverInfo.show?c.createElement(k,{items:this.state.pluginPopoverInfo.items,top:this.state.pluginPopoverInfo.top,onCancel:this.resetPopover.bind(this)}):null)),c.createElement('div',{className:'project-bd'},c.createElement('div',{className:'tab'},c.createElement('div',{className:'tab-hd'},c.createElement('div',{className:q,onClick:this.onTabSelect.bind(this,'setting')},s.config.PROJECT_SETTINGS),c.createElement('div',{className:t,onClick:this.onTabSelect.bind(this,'config')},s.config.DOMAIN_INFORMATION),!n.isMiniCode&&v?c.createElement('div',{className:u,onClick:this.onTabSelect.bind(this,'qcloud')},s.config.TENCENT_CLOUD_STATUS):null),c.createElement('div',{className:'tab-bd'},c.createElement(g,{showDropDown:this.state.showDropDown,onDropdownShow:this.handleDropdownShow.bind(this)}),c.createElement(h,null),c.createElement(i,null))))))}}module.exports=v}(require('lazyload'),require);