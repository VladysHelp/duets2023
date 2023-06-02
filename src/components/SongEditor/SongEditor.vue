<template>
<div class="song-editor">
  <div class="song-editor__topbar">
    <h1 class="song-editor__title">Song Editor</h1>
    <Button ui-type="danger" type="button" @click="deleteSong" v-if="!isNew">
      <Icon icon="trash" />
    </Button>
  </div>
  <div class="">
    <p class="song-editor__error" v-if="error.length">{{ error }}</p>
    <label>
      <input v-model="song.title" type="text" placeholder="Title">
    </label>
    <label class="input-file">
      <span class="input-file__title">GTP</span>
      <span class="input-file__wrap">
        <input @change="(el) => song.gtp = el.target.files[0]" type="file" placeholder="GTP">
      </span>
      <span class="input-file__name" v-if="song.gtp">
        {{ song.gtp?.name || (song.title || "File") }}.gtp
      </span>
    </label>
    <div class="dropdown" @click="(el) => el.srcElement.classList.toggle('active')">
      <div class="dropdown__header">
        PDF
      </div>
      <div class="dropdown__content">
        <div v-for="item in 5" :key="item">
          <label>
            <input type="text" :placeholder="`PDF${item} Title`" v-model="song[`pdf${item}_title`]">
          </label>
          <label :class="['input-file', song[`pdf${item}_file`] ? 'loaded' : '']">
            <span class="input-file__title">PDF{{ item }}</span>
            <span class="input-file__wrap">
            <input type="file" @change="(el) => song[`pdf${item}_file`] = el.target.files[0]">
          </span>
            <span class="input-file__name" v-if="song[`pdf${item}_file`]">
              {{ song[`pdf${item}_file`]?.name || `${song[`pdf${item}_title`] || "file"}.pdf`}}
            </span>
          </label>
          <hr v-if="item < 5">
        </div>
      </div>
    </div>
    <label>
      <textarea placeholder="Words" v-model="song.words"></textarea>
    </label>
    <Button type="button" @click="save">Save</Button>
  </div>
</div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import SongsModule from "@/store/songs";
import Button from "@/components/Button/Button.vue";
import { Watch } from "vue-property-decorator";
import Icon from "@/components/Icon/Icon.vue";

@Component({
  name: "SongEditor",
  components: {Icon, Button},
})
export default class SongEditor extends Vue {
  isNew = true;
  song = {
    title: "",
    gtp: null,
    pdf1_title: "",
    pdf1_file: null,
    pdf2_title: "",
    pdf2_file: null,
    pdf3_title: "",
    pdf3_file: null,
    pdf4_title: "",
    pdf4_file: null,
    pdf5_title: "",
    pdf5_file: null,
    words: "",
    id: "",
  }
  error = "";
  mapSong(song: any): any {
      let mappedSong: any = {};
      mappedSong.title = song.title;
      mappedSong.words = song.words;
      mappedSong.gtp = song.gtp;
      mappedSong.id = song.id;
      song.pdf.forEach((item: any, index: number) => {
        const titleKey = `pdf${index+1}_title`;
        const fileKey = `pdf${index+1}_file`
        mappedSong[titleKey] = item.title;
        mappedSong[fileKey] = item.link;
      });
    return mappedSong;
  }
  async deleteSong(): Promise<void> {
    const data = await SongsModule.deleteSong(this.song.id);
    if (data.status > 199 && data.status < 300) {
      this.$router.push("/songs");
    }
  }
  async save(): Promise<void> {
    let data = {
      status: 403,
      message: "Error Happened"
    }
    if (!this.song.title.length) {
      this.error = "Please enter the title";
      return;
    }
    if(this.isNew) {
      data = await this.uploadSong();
    } else {
      data = await this.updateSong();
    }
    if (data.status > 199 && data.status < 300) {
      this.$router.push("/songs");
    }
    else {
      this.error = data.message;
    }
  }
  async uploadSong(): Promise<any> {
    const mappedSong = {
      title: "",
      words: "",
      pdf: [],
      gtp: null,
    };
    mappedSong.title = this.song.title;
    mappedSong.words = this.song.words;
    mappedSong.gtp = this.song.gtp;
    for(let i = 0; i < 5; i++) {
      //@ts-ignore
      if(this.song[`pdf${i+1}_title`] || this.song[`pdf${i+1}_file`]) {
        mappedSong.pdf.push({
          //@ts-ignore
          title: this.song[`pdf${i+1}_title`],
          //@ts-ignore
          file: this.song[`pdf${i+1}_file`],
        })
      }
    }
    Object.keys(this.song).forEach(item => {
      if(item.match("pdf")) {

      }
    })

    return await SongsModule.uploadSong(this.song);
  }
  async updateSong(): Promise<any> {
    return await SongsModule.updateSong(this.song)
  }
  get songs(): any {
    return SongsModule.getSongs;
  }
  @Watch("$route", { immediate: true, deep: true})
  protected onRouteChange(newValue: any) {
    if (newValue.params.id && newValue.params.id.length) {
      const index = newValue.params.id;
      this.song = this.mapSong(this.songs[index]);
      this.isNew = false;
    }
  }
 mounted(): void {
    if (!this.songs.length) {
      SongsModule.fetchSongs();
    }
 }
}
</script>
<style lang="scss" src="./styles.scss" />
