'use strict';!function(require,directRequire){const a=require('react'),b=require('redux'),c=require('moment'),d=require('./f0466135fc8b3a662084784e5f4ac792.js'),f=require('./eadce02c750c875a10680bcfedadec88.js'),e=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),g=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),h=require('./2f0aa63ae61d48294b5e9927ab57e1a4.js'),i=require('./fc137838572a83604db39acff8e909e0.js'),j=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),k=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),l=require('./63f52c9055d92f52ca0510da7d3dcadb.js'),m=require('./a8c87029da0fa06e986298d447ab0fe2.js'),n=require('./e4d68def70709dc877cb2ba5bdad18cb.js'),o=require('./e98c60a262d8d98e69e574a9d12a21df.js'),p=require('./9355620dfff47077fc5946269d43cd4d.js'),{getAvailablePort:q}=require('./84b183688a46c9e2626d3e6f83365e13.js'),r=require('./common/locales/index.js'),s=(()=>{let a;return async function(b=!1){return!b&&a?Promise.resolve(a):(a=await q(),Promise.resolve(a))}})(),{connect:t}=require('react-redux');class u extends a.Component{constructor(a){super(a),this.state={loading:!0,show:a.show,src:'',tipsShow:!1,previewToolShown:!1,filesIgnored:[],remoteDebugEvents:[],filesMissing:[]},this.previewTimer=null,this._mounted=!1}componentDidMount(){this._mounted=!0,(!this.props.compilerSettings.autoPreview||this.props.remoteDebug)&&this.loadQRCode(),this._cancalLocaleListener=r.onChangeLocale(()=>this.forceUpdate())}loadQRCode(){this.setState({loading:!0,filesIgnored:[],filesMissing:[],tipsShow:!1,stage:null,src:'',remoteDebugStatus:null,remoteDebugEvents:[]}),this.previewTimer=setTimeout(async()=>{let a;const b=(a=null,b='')=>{console.log('progress stage',a,'detailedText',b),this.setState({progressDetailedText:b,stage:a})},g=this.props,h=g.project;if(h&&h.setting&&h.setting.scriptsEnable&&h.scripts&&h.scripts.beforePreview){b('custombeforepreview',r.config.CONSOLE_PREPROCESS_RUNNING),g.consoleActions.clear(),g.consoleActions.log(r.config.CONSOLE_PREPROCESS_START);try{await n.run({command:h.scripts.beforePreview,options:{cwd:h.projectpath,shell:!0},stderr:g.consoleActions.error,stdout:g.consoleActions.log})}catch(a){return void g.consoleActions.error(r.config.CONSOLE_PREPROCESS_ERROR)}b('custombeforepreview',r.config.CONSOLE_PREPROCESS_SUCCESS)}const i=g.remoteDebug&&global.l?await s(!0):void 0,j={test:!0,onProgressUpdate:b,onFilesIgnored:(a=[])=>{this.setState({filesIgnored:a})},onFilesMissing:(a=[])=>{this.setState({filesMissing:a})},remoteDebug:g.remoteDebug,remoteDebugLocal:global.l,remoteProxyPort:i,disableUrlCheck:g.remoteDebugWindow.disableUrlCheck,autoPreview:g.compilerSettings.autoPreview,cdpEnabled:'game'===h.compileType,noMaps:g.remoteDebugWindow.noMaps};try{const b=this.props.project,c=b.compileType,d=b.condiction[c];a=d.list[d.current],c==e.search?a&&(j.searchQuery=a.customQuery||a.query,j.boxQI=a.customQuery?'':a.boxQI):(c==e.weapp||c==e.plugin)&&(j.page=a?a.pathName:this.props.appConfig.pages[0],j.query=a?a.query:''),b.attr.gameApp&&(j.query=a?a.query:'')}catch(a){}d(j).then(async(a)=>{if(this._mounted){const d=+new Date+1500000,e=c(d).calendar(),h=c(new Date).calendar();if(g.remoteDebug){const{wxpkg_info:c='',room_id:d='',qrcode_img:e='',username:h=''}=a;if(!c||!d||!e)throw new Error('invalid request');let j=await l.init(g.project,{wxpkg_info:c,room_id:d,username:h,appid:g.project.appid},{usingLocalStorage:g.remoteDebugWindow.usingLocalStorage,remoteDebugLocal:global.l,clientProxyPort:i,onStatusUpdate:(b,c)=>{this.state.show&&(c&&j&&j.url?(this.props.windowActions.setRemoteDebugWindow({show:!0,inspectUrl:j.url,serverInfo:a}),this.setState({show:!1}),this.props.toggleClickKey(f.NONE)):this.setState({remoteDebugStatus:b}))},onProgressUpdate:b,onEvent:(a)=>{this.state.show&&this.setState({remoteDebugEvents:(this.state.remoteDebugEvents||[]).concat(a)})},isGame:'game'===g.project.compileType})}this.setState({generateTime:h,qrcode_time:e,src:`data:image/png;base64,${a.qrcode_img}`,loading:!1,progressDetailedText:'',stage:null}),this.props.setPkgSize({preview:a.wxpkg_size,previewSubpackages:a.subpackage_info,lastPreviewTime:+new Date})}}).catch((a)=>{this._mounted&&(this.props.showError(a instanceof Error?a:new Error(a)),this.setState({show:!1}),this.props.toggleClickKey(f.NONE))})})}componentWillReceiveProps(a){a.show!=this.props.show&&this.setState({show:a.show}),a.show&&a.remoteDebug&&a.timeStamp!==this.props.timeStamp?this.loadQRCode():a.show&&!this.props.compilerSettings.autoPreview&&!a.remoteDebug&&a.timeStamp!==this.props.timeStamp&&this.loadQRCode()}componentWillUnmount(){this._mounted=!1,clearTimeout(this.previewTimer),n.abort(),this.props.remoteDebug&&!this.props.remoteDebugWindow.show&&(null!==this.state.remoteDebugStatus&&l.destroy(),this.props.project.projectid===this.props.remoteDebugWindow.debuggingProjectId&&this.props.windowActions.setRemoteDebugWindow({debuggingProjectId:null})),this._cancalLocaleListener()}onHandleClick(a){a.stopPropagation()}onCopyClick(a,b){b.stopPropagation();let c=this.imgdom;'preview'===a&&(c=this.previewImgDom);const{left:d,top:e,height:f,width:g}=c.getBoundingClientRect(),h=()=>{const a=global.windowMap.get('MAIN'),b=a.window.document.body.offsetWidth;a.capturePage((a)=>{const h=document.createElement('canvas'),c=h.getContext('2d');h.height=f,h.width=g;const i=new Image;i.onload=()=>{const a=i.width/b;c.drawImage(i,d*a,e*a+5,g*a,f*a-5,0,0,g,f);const j=nw.Clipboard.get();j.set(h.toDataURL(),'png'),this.props.showSuccessTip(r.config.CONSOLE_COPY_SUCCESS)},i.src=a},{format:'png',datatype:'datauri'})};this._blinkTimeout||(c.style.opacity=0.6,this._blinkTimeout=setTimeout(()=>{c.style.opacity=1,this._blinkTimeout=null,setTimeout(()=>h(),20)},200))}handleIconAskClick(a){a.stopPropagation();try{nw.Shell.openExternal('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/mydev.html')}catch(a){console.warn('open external failed.')}}handleWarningAskClick(a){a.stopPropagation();try{nw.Shell.openExternal('https://developers.weixin.qq.com/miniprogram/dev/devtools/debug.html#%E7%BC%96%E8%AF%91%E5%BC%82%E5%B8%B8%E4%BF%A1%E6%81%AF')}catch(a){console.warn('open external failed.')}}showScanCode(a){a.stopPropagation(),this.setState({previewToolShown:!1})}showPreviewTool(a){a.stopPropagation(),this.setState({previewToolShown:!0})}handleTipsClick(a){a.stopPropagation();const b=this.state.tipsShow,c=this.props.top+20;this.setState({tipsShow:!b,tipsTop:c})}handleTipsLinkClick(a){a.stopPropagation();try{nw.Shell.openExternal('https://developers.weixin.qq.com/blogdetail?action=get_post_info&docid=000e0696f084e0b0f21613f6a51804')}catch(a){console.warn('open external failed.')}}handleAutoPreviewClick(a){a===!!this.props.compilerSettings.autoPreview||(this.props.updateIDESetting('compiler','autoPreview',a),a?this.props.autoPreview():this.loadQRCode())}handleTriggerAutoPreviewClick(){this.props.autoPreview()}render(){const b=this.props,c=b.compilerSettings.autoPreview,d=b.remoteDebug,e=d?a.createElement('h4',{className:'previewer-header-active'},r.config.QR_CODE_REMOTE_DEBUG):c?[a.createElement('h4',{key:'scanQRCode',onClick:this.handleAutoPreviewClick.bind(this,!1)},r.config.QR_CODE_PREVIEW),a.createElement('h4',{key:'autoPreview',className:'previewer-header-active'},r.config.AUTO_PREVIEW)]:[a.createElement('h4',{key:'scanQRCode',className:'previewer-header-active'},r.config.QR_CODE_PREVIEW),a.createElement('h4',{key:'autoPreview',onClick:this.handleAutoPreviewClick.bind(this,!0)},r.config.AUTO_PREVIEW)];return a.createElement('div',null,a.createElement('div',{className:'preview-group',style:{position:'absolute',top:this.props.top,left:this.props.left,display:this.state.show?'':'none',width:'252px'}},a.createElement('div',{className:'preview-item'},a.createElement('div',{className:'ui-popover',style:{position:'relative',width:'252px'},onClick:this.onHandleClick.bind(this)},a.createElement('div',{className:'previewer'},a.createElement('div',{className:'previewer-header',onClick:this.showScanCode.bind(this),style:{cursor:'pointer'}},e),' ',a.createElement('div',{ref:(a)=>this.imgdom=a,style:{position:'relative',display:c&&!d?'none':''}},a.createElement('div',{className:'previewer-body',style:this.state.previewToolShown?{display:'none'}:{}},a.createElement('div',{className:'previewer-qrcode'},a.createElement('div',{className:'preview-qrcode-title',style:this.state.loading||b.remoteDebug?{display:'none'}:{}},a.createElement('p',null,r.config.PREVIEW_QR_CODE_TITLE.format([this.props.nickName,this.state.generateTime||r.config.UNKNOWN_TIME]))),b.authQY?a.createElement('div',{className:'preview-qrcode-title',style:this.state.loading||b.remoteDebug?{display:'none'}:{}},a.createElement('p',null,r.config.WXWORK_SCAN_QR_CODE)):null,!this.state.loading&&0<(this.state.filesIgnored||[]).length+(this.state.filesMissing||[]).length&&a.createElement('p',{style:{fontWeight:600,marginBottom:'10px',textAlign:'center'}},a.createElement('a',{style:{color:'#586c94'},onClick:this.handleTipsClick.bind(this)},r.config.COMPILE_EXCEPTION,(this.state.filesIgnored||[]).length+(this.state.filesMissing||[]).length)),a.createElement('img',{onClick:this.onCopyClick.bind(this,'qrcode'),src:this.state.src?this.state.src:'../static/image/qrcode.png',style:{minHeight:'200px',visibility:this.state.src?'visible':'hidden'}}),a.createElement('div',{className:'previewer-loading',style:this.state.loading?{backgroundColor:'transparent'}:{display:'none'}},a.createElement('div',{className:'previewer-loading-content'},a.createElement('i',{className:'ui-icon-spinner'}),a.createElement('p',{className:'ui-desc'},this.state.progressDetailedText))),0<(this.state.filesIgnored||[]).length+(this.state.filesMissing||[]).length&&a.createElement('div',{className:'preview-qrcode-tips',style:this.state.loading?{backgroundColor:'transparent'}:{display:'none'}},a.createElement('p',null,a.createElement('a',{onClick:this.handleTipsClick.bind(this)},a.createElement('i',{className:'ui-icon-circle-x'}),a.createElement('span',null,' ',r.config.EXCEPTION_FOUND,(this.state.filesIgnored||[]).length+(this.state.filesMissing||[]).length),a.createElement('i',{className:'ui-icon-arrow-right-o'})))),a.createElement('div',{className:'preview-qrcode-tips'},a.createElement('p',{style:{display:this.state.qrcode_time?'':'none'}},a.createElement('span',null,this.state.qrcode_time),' ',r.config.EXPIRE_AT_SOME_TIME))))),c&&!d&&a.createElement('div',null,this.props.autoUploadFailureText&&a.createElement('div',null,a.createElement('p',null,r.config.PREVIEW_QR_CODE_ERR),a.createElement('pre',{style:{margin:'10px',textAlign:'left',fontSize:'12px',overflow:'auto'}},this.props.autoUploadFailureText)),!this.props.autoUploadFailureText&&a.createElement('div',{className:'previewer-qrcode'},a.createElement('div',{className:'preview-demo-img'},a.createElement('img',{src:b.headUrl,className:'preview-user-avatar'})),a.createElement('div',{className:'preview-qrcode-tips'},a.createElement('p',null,r.config.PREVIEW_QR_CODE_TIP1.format(b.nickName)),a.createElement('p',null,r.config.PREVIEW_QR_CODE_TIP2),a.createElement('p',null,r.config.PREVIEW_QR_CODE_TIP3)))),a.createElement('p',null,(()=>{const c=this.state.remoteDebugStatus;if(!b.remoteDebug)return null;if('number'!=typeof c)return null;return-1===c?a.createElement('span',{style:{color:'red',fontWeight:'600'}},r.config.REMOTE_DEBUG_END):0===c?a.createElement('span',{style:{color:'red',fontWeight:'600'}},r.config.REMOTE_DEBUG_NOT_UNINITIALIZED):1===c?a.createElement('span',{style:{color:'red',fontWeight:'600'}},r.config.REMOTE_DEBUG_NOT_CONNECTED):2===c?a.createElement('span',{style:{color:'red',fontWeight:'600'}},r.config.REMOTE_DEBUG_LOGOUT):3===c?a.createElement('span',{style:{fontWeight:'600'}},r.config.REMOTE_DEBUG_LOGINING):4===c?r.config.REMOTE_DEBUG_WAIT_SERVICE:5===c?a.createElement('span',{style:{fontWeight:'600'}},r.config.REMOTE_DEBUG_SERVER_BLOCKING):6===c?r.config.REMOTE_DEBUG_WAITING_FOR_RESPONSE:7===c?r.config.REMOTE_DEBUG_WORK_CORRECTLY:a.createElement('span',{style:{color:'red',fontWeight:'600'}},r.config.REMOTE_DEBUG_UNKNOWN)})()),(this.state.remoteDebugEvents||[]).map((b,c)=>a.createElement('p',{key:c,style:{color:'gray',fontSize:'11px'}},b.type+', '+(b.message||''))),c&&!b.remoteDebug?a.createElement('div',{className:'preview-footer'},'uploading'===b.autoUploadStatus?a.createElement('i',{className:'ui-icon-spinner'}):a.createElement('button',{onClick:this.handleTriggerAutoPreviewClick.bind(this),alt:b.displayShortcuts,title:b.displayShortcuts,className:'ui-button ui-button-default'},r.config.COMPILE_AND_PREVIEW),a.createElement('div',{className:'preview-qrcode-tips'},a.createElement('p',null,r.config.PREVIEW_QR_CODE_TIP_SHORTCUT.format(b.displayShortcuts||r.config.NONE)))):a.createElement('div',{className:'preview-footer',style:this.state.previewToolShown?{display:'none'}:{}},!this.state.stage&&!b.remoteDebug&&a.createElement('div',null,a.createElement('button',{onClick:this.onCopyClick.bind(this,'qrcode'),className:'ui-button ui-button-default'},r.config.COPY_QR_CODE))))),this.state.tipsShow&&a.createElement('div',{onClick:this.onHandleClick.bind(this),className:'ui-popover',style:{position:'absolute',left:'252px'}},a.createElement('div',{className:'previewer'},a.createElement('div',{className:'previewer-header'},a.createElement('h4',null,r.config.EXCEPTION_INFORMATION,a.createElement('i',{className:'ui-icon-ask',style:{cursor:'pointer'},title:r.config.CLICK_FOR_DETAIL,onClick:this.handleWarningAskClick.bind(this)}))),a.createElement('div',{className:'previewer-body'},a.createElement('div',{className:'previewer-msg-area'},0<(this.state.filesMissing||[]).length&&a.createElement('div',{className:'previewer-msg-group'},a.createElement('h5',null,r.config.PREVIEW_MSG_FILE_IGNORED),a.createElement('p',{style:{color:'gray'}},r.config.PREVIEW_MSG_NOT_UPLOAD_FILES),a.createElement('ul',null,(this.state.filesMissing||[]).map((b,c)=>a.createElement('p',{key:c},'\xB7 '+b)))),0<(this.state.filesIgnored||[]).length&&a.createElement('div',{className:'previewer-msg-group'},a.createElement('h5',null,r.config.PREVIEW_MSG_BIG_FILE),a.createElement('p',{style:{color:'gray'}},r.config.PREVIEW_MSG_BIG_FILE_DETAILS,a.createElement('a',{style:{color:'#586c94'},onClick:this.handleTipsLinkClick.bind(this)},r.config.CLICK_FOR_DETAIL)),a.createElement('ul',null,(this.state.filesIgnored||[]).map((b,c)=>a.createElement('p',{key:c},'\xB7 '+b))))))))),a.createElement('div',{className:'preview-item'},a.createElement('div',{className:'ui-popover',style:{position:'relative',width:'252px',display:c||b.remoteDebug?'none':''},onClick:this.onHandleClick.bind(this)},a.createElement('div',{className:'previewer'},a.createElement('div',{className:'previewer-header',onClick:this.showPreviewTool.bind(this),style:{cursor:'pointer'}},a.createElement('h4',null,r.config.MINI_PROGRAM_DEV_ASSISTANT,a.createElement('i',{className:'ui-icon-ask',style:{cursor:'pointer'},title:r.config.CLICK_FOR_DETAIL,onClick:this.handleIconAskClick.bind(this)}))),a.createElement('div',{ref:(a)=>this.previewImgDom=a,style:this.state.previewToolShown?{}:{display:'none'}},a.createElement('div',{className:'previewer-body'},a.createElement('div',{className:'previewer-qrcode'},a.createElement('img',{onClick:this.onCopyClick.bind(this,'preview'),src:'../static/image/my-dev-apps.jpg',alt:''})))),a.createElement('div',{className:'preview-footer',style:this.state.previewToolShown?{}:{display:'none'}},a.createElement('button',{onClick:this.onCopyClick.bind(this,'preview'),className:'ui-button ui-button-default'},r.config.COPY_QR_CODE)))))))}}module.exports=t((a,b)=>{const c=(a.settings.shortcuts||{}).preview,d=p.getDisplayTextFromShortcut(c),e=a.project.current||{},g=e.attr||{},h=g.authQY;return{show:f.PREVIEWCODE===a.toolbar.clickKey||f.REMOTEDEBUGCODE===a.toolbar.clickKey,appConfig:a.simulator.appConfig||{},project:e,authQY:h,nickName:(a.user||{}).nickName||r.config.UNKNOWN_USER,headUrl:(a.user||{}).headUrl,remoteDebug:'remotedebug'===b.mode,remoteDebugWindow:a.window.remoteDebugWindow,compilerSettings:a.settings.compiler||{},displayShortcuts:d}},(a)=>({showError:k.bindActionCreators(g.showError,a),toggleClickKey:k.bindActionCreators(i.toggleClickKey,a),setPkgSize:k.bindActionCreators(j.setPkgSize,a),showSuccessTip:k.bindActionCreators(g.showSuccessTip,a),windowActions:k.bindActionCreators(m,a),consoleActions:k.bindActionCreators(h,a),updateIDESetting(){a(o.updateIDESetting.apply(this,arguments))},autoPreview:k.bindActionCreators(i.autoPreview,a)}))(u)}(require('lazyload'),require);