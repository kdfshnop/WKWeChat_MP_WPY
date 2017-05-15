// app.js
wx.showLLL = function() {
    console.log('wx.showLLLL')
}

App({
    onLaunch: function() {
        // 调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },
    getUserInfo: function(cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == 'function' && cb(this.globalData.userInfo)
        } else {
            // 调用登录接口
            wx.login({
                success: function() {
                    wx.getUserInfo({
                        withCredentials: true,
                        success: function(res) {
                            that.globalData.userInfo = res.userInfo
                            console.log(res)
                            typeof cb == 'function' && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        }
    },
    globalData: {
        userInfo: null
    },
    mock: true,
    timer: null,
    isLogin: function(needRedirect = true, returnUrl = '') { // 判断是否登录了小程序
        console.log(needRedirect);
        console.log(returnUrl);
        var userInfo = wx.getStorageSync('userInfo')
        if (!userInfo) {
            // 当前页的地址
            returnUrl = returnUrl || this.getCurrentPage().__route__;
            console.log(returnUrl);
            returnUrl = encodeURIComponent(returnUrl);
            console.log(returnUrl);
            if (!needRedirect) {
                return false; }
            wx.redirectTo({
                url: '/pages/logon/index?returnUrl=' + returnUrl
            })
        }

        return true
    },
    getQQMapLocation: function(latitude, longitude, cb) {
        wx.request({
            url: 'https://apis.map.qq.com/ws/coord/v1/translate',
            data: {
                locations: encodeURI(latitude + ',' + longitude),
                type: 3,
                key: this.globalData.qqmapkey
            },
            success: function(res) {
                cb(res);
            }
        });
    },
    showLoading: function(title = '加载中...') {
        this.getCurrentPage().setData({ 'loading': { 'show': true, title: title } })
    },
    hideLoading: function(cb) {
        this.getCurrentPage().setData({ 'loading': { 'show': false } })
        typeof cb == 'function' && cb()
    },
    showTips: function(obj) {
        let that = this
        let text, duration = 2000,
            cb

        if (typeof obj === 'object') {
            ({ text, duration = 2000, cb } = obj)
        } else {
            text = obj
        }

        this.getCurrentPage().setData({ 'tips': { 'show': true, text: text } })
        clearTimeout(this.timer)
        this.timer = setTimeout(function() {
            that.getCurrentPage().setData({ 'tips': { 'show': false } })
            typeof cb == 'function' && cb()
        }, duration)
    },
    redirect: function({ url, query }) {
        if (!url) return

        let history = getCurrentPages()
        let queryString = ''

        if (query) {
            Object.keys(query).forEach(key => {
                queryString += `${key}=${query[key]}&`
            })
            queryString = queryString.substr(0, queryString.length - 1)
            url = url + '?' + queryString
        }

        if (history.length >= 5) {
            wx.redirectTo({
                url: url
            })
        } else {
            wx.navigateTo({
                url: url
            })
        }
    }
})
