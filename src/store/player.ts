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
    index = 0;
    isPlay = false;
    songName = "";
    tracks = [
        {
            audio: audio,
            name: "Pisnya bude pomig nas(SYNTHWAVE)"
        },
        {
           audio: audio2,
           name: "Volt Age Volt's Theme",
        }

    ];
    @Action
    loadTrack(index: number): void {
        this.player.src = this.tracks[index];
    }
    @Action
    playSong() {
        const { context } = this;
        this.player.play();
        context.commit("setIsPlay", true);
    }
    @Action
    pauseSong() {
        const { context } = this;
        this.player.pause();
        context.commit("setIsPlay", false);
    }
    @Action
    setPlayerAction(player: any) {
        const { context } = this;
        context.commit("setPlayer", player);
    }
    @Action
    nextSong() {
        const { context } = this;
        context.commit("setNextSong");
    }
    @Mutation
    setIsPlay(value: boolean) {
        this.isPlay = value;
        if (value) {
            this.songName = this.tracks[this.index].name;
        }
    }
    @Mutation
    setNextSong() {
        if((this.index + 1) < this.tracks.length) {
            this.index++;
            this.player.src = this.tracks[this.index].audio;
            this.player.play();
            this.songName = this.tracks[this.index].name;
        } else {
            this.index = 0;
            this.player.src = this.tracks[this.index].audio;
            this.player.play();
            this.songName = this.tracks[this.index].name;
        }
    }
    @Mutation
    setPlayer(player: any) {
        this.player = player;
        this.player.addEventListener('ended', () => {
            if((this.index + 1) < this.tracks.length) {
                this.index++;
                this.player.src = this.tracks[this.index].audio;
                this.player.play();
                this.songName = this.tracks[this.index].name;
            } else {
                this.index = 0;
                this.player.src = this.tracks[this.index].audio;
                this.player.play();
                this.songName = this.tracks[this.index].name;
            }
        })
    }
}
export default getModule(playerModule);
