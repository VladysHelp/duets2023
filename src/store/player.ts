import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";
import store from "@/store/index";
//@ts-ignore
import audio from "@/assets/SYNTHWAVE_bude_pomig_nas.mp3";
//@ts-ignore
import audio2 from "@/assets/Volt_Age_Volt_s_Theme.mp3";

@Module({
    namespaced: true,
    name: "playerModule",
    dynamic: true,
    store,
})
class playerModule extends VuexModule {
    player: any = null;
    tracks = [
        audio,
        audio2,
    ];
    @Action
    loadTrack(index: number): void {
        this.player.src = this.tracks[index];
    }
    @Action
    playSong() {
        console.log(this.player);
        this.player.play();
    }
    @Action
    setPlayerAction(player: any) {
        const { context } = this;
        context.commit("setPlayer", player);
    }
    @Mutation
    setPlayer(player: any) {
        this.player = player;
    }
}
export default getModule(playerModule);
