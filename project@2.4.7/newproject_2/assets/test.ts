// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {

    // }

    onClickLoad(){
        const options = {
            version: "c62be",
            onFileProgress: (n, t) => {

            }
        }

        cc.assetManager.loadBundle("http://127.0.0.1:8887", options, (err, bundle) => {
            if(!err){
                console.log(bundle);
                bundle.loadScene('sample', function (err, scene) {
                    if(!err){
                        console.log(scene);
                        
                    cc.director.runScene(scene);
                    }else{
                        console.log(err);
                        
                    }
                });
            }else{
                console.log(err);
            }
        })
    }

    start () {
        
    }

    // update (dt) {}
}
