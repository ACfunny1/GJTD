cc.Class({
    extends: cc.Component,

    properties: {
        pool: null,//怪物对象池
        guaiwuPrefab: cc.Prefab,//怪物预制体
        parentNode: cc.Node,//怪物出现的父节点
        initCount: 0//怪物对象池数量
    },

    onLoad() {
        GameCtl = this
        this.pool = new cc.NodePool()
        for (let i = 0; i < this.initCount; i++) {
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
    },

    // update (dt) {},
});