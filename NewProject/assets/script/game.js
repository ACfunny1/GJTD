cc.Class({
    extends: cc.Component,

    properties: {
        pool: null,
        guaiwuPrefab: cc.Prefab,
        parentNode: cc.Node
    },

    onLoad() {
        GameCtl = this
        this.pool = new cc.NodePool()
        let initCount = 20
        for (let i = 0; i < initCount; i++) {
            let enemy = cc.instantiate(this.guaiwuPrefab)
            this.pool.put(enemy)
        }

    },

    createGuaiwu() {
        let enemy = null
        let moveDone = true
        if (this.pool.size() > 0) {
            enemy = this.pool.get()
        } else {
            cc.log('怪物数量不够了')
            return null
        }
        enemy.parent = this.parentNode
        enemy.position = cc.v2(390, -568)
        guaiwuPrefabCtl.move(enemy)
        cc.log(this.pool)
    },
    killGuaiwu(enemy) {
        this.pool.put(enemy)
    },
    // update (dt) {},
});