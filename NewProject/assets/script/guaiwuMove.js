cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0
    },

    onLoad() {
        guaiwuPrefabCtl = this
    },
    move(enemy) {
        var act = cc.sequence(
            cc.moveTo(this.speed, cc.v2(24, -562)),
            cc.moveTo(this.speed, cc.v2(24, -100)),
            cc.moveTo(this.speed, cc.v2(-480, -100)),
            cc.callFunc(function () {
                GameCtl.pool.put(GameCtl.parentNode.children[0])
            }, this)
        )
        enemy.runAction(act)
        //GameCtl.pool.put(enemy)
    },

    // update (dt) {},
});