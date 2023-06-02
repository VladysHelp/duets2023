import {
    Action,
    Module,
    VuexModule,
    getModule,
    config, Mutation
} from "vuex-module-decorators";
import store from "@/store/index";
config.rawError = true;
interface ISongEdit {
    title: string;
    gtp: Blob | null;
    pdf1_title: string;
    pdf1_file: Blob | null;
    pdf2_title: string;
    pdf2_file: Blob | null;
    pdf3_title: string;
    pdf3_file: Blob | null;
    pdf4_title: string;
    pdf4_file: Blob | null;
    pdf5_title: string;
    pdf5_file: Blob | null;
    words: string;
    id: string;
}
@Module({
    namespaced: true,
    name: "SongsModule",
    dynamic: true,
    store,
})
class SongsModule extends VuexModule {
    songs = [];
    isSongLoadingStore = false;
    @Action
    async fetchSongs(): Promise<void> {
        const { context } = this;
        context.commit("setIsSongLoading", true);
        fetch(`${process.env.VUE_APP_BASE_URL}/songs`)
            .then(data => data.json())
            .then(data => {
                context.commit("setIsSongLoading", false);
                context.commit("setSongs", data);
            })
    }
    @Action
    async updateSong(payload: ISongEdit): Promise<any> {
        const { context } = this;
        context.commit("setIsSongLoading", true);
        const form_data = new FormData();
        Object.keys(payload).forEach((key) => {
            //@ts-ignore
            form_data.append(key, payload[key] || "");
        });
        return fetch(`${process.env.VUE_APP_BASE_URL}/songs`, {
            method: 'PUT',
            body: form_data,
            cache: 'no-cache',
            headers: {
                "Access-Control-Allow-Origin": "no-cors"
            }
        })
            .then(data => {
                return data
            })
            .finally(() => {
                context.commit("setIsSongLoading", false);
            })
    }
    @Action
    async deleteSong(id: string): Promise<any> {
        const { context } = this;
        // context.commit("setIsSongLoading", true);
        return await fetch(`${process.env.VUE_APP_BASE_URL}/songs?id=${id}`, {
            method: 'DELETE',
            cache: 'no-cache',
            headers: {
                "Access-Control-Allow-Origin": "no-cors"
            }
        })
            .then(data => {
                return data
            })
            .finally(() => {
                context.commit("setIsSongLoading", false);
            })
    }
    @Action
    async uploadSong(payload: ISongEdit): Promise<any> {
        const { context } = this;
        context.commit("setIsSongLoading", true);
        const form_data = new FormData();
        Object.keys(payload).forEach((key) => {
            //@ts-ignore
            form_data.append(key, payload[key] || "");
        });
        return await fetch(`${process.env.VUE_APP_BASE_URL}/songs`, {
            method: 'POST',
            body: form_data,
            cache: 'no-cache',
            headers: {
                "Access-Control-Allow-Origin": "no-cors"
            }
        })
            .then(data => {
                return data
            })
            .finally(() => {
                context.commit("setIsSongLoading", false);
            })
    }
    @Mutation
    setSongs(songs: any): void {
        this.songs = songs;
    }
    @Mutation
    setIsSongLoading(value: boolean): void {
        this.isSongLoadingStore = value;
    }
    get getSongs(): any {
        return this.songs;
    }
    get isSongLoading(): boolean {
        return this.isSongLoadingStore;
    }
}
export default getModule(SongsModule);
