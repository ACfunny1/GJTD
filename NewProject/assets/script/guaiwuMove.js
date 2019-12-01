cc.Class({
    extends: cc.Component,

    properties: {
        guaiwu: cc.Node
    },

    onLoad() {
        guaiwuPrefabCtl = this
    },
    move(enemy) {
        var act = cc.sequence(
            cc.moveTo(0.5, cc.v2(24, -562)),
            cc.moveTo(0.5, cc.v2(24, -100)),
            cc.moveTo(0.5, cc.v2(-480, -100)),
            cc.callFunc(function () {
                setTimeout(function () {
                    cc.log(123)
                    GameCtl.pool.put(enemy)
                }, 5000)
            }, this),
        )
        this.node.runAction(act)
    },

    // update (dt) {},
});