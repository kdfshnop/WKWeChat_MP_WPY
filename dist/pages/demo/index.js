"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_agent=require("./../../components/agent.js"),_agent2=_interopRequireDefault(_agent),_assistant=require("./../../components/assistant.js"),_assistant2=_interopRequireDefault(_assistant),_tips=require("./../../components/tips.js"),_tips2=_interopRequireDefault(_tips),_modal=require("./../../components/modal.js"),_modal2=_interopRequireDefault(_modal),Index=function(e){function t(){var e,n,a,o;_classCallCheck(this,t);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.config={},a.$repeat={},a.$props={agent:{"xmlns:v-bind":"","v-bind:agent.once":"agentDetail"},assistant:{"xmlns:v-bind":"","v-bind:agent.once":"agentDetail"},modal:{title:"添加微信"}},a.$events={},a.components={agent:_agent2.default,assistant:_assistant2.default,tips:_tips2.default,modal:_modal2.default},a.data={agentDetail:{headPortraitUrl:"https://img.wkzf.com/2fdc317e6a94414990ae51d248a3de57",agentName:"赵华刚",seniority:2,belongToCompany:"志远地产"},visibility:!0},a.computed={},a.methods={closeTab:function(){this.setData({visibility:!1})}},a.events={},o=n,_possibleConstructorReturn(a,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){}},{key:"onShow",value:function(){}}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/demo/index"));