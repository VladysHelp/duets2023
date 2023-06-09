<template>
  <div class="duets">
    <div class="duets__duet" v-for="duet in users">
      <div class="duets__duet-item" v-for="user in duet">
        <img :src="user.photo" alt="" class="duets__duet-photo" />
        <p class="duets__duet-name"> {{user.name}}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({
  name: "Duets",
  components: { },
})
export default class Duets extends Vue {
  users = [
      [
        {
          name: "Владислав Кухлій",
          photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
        },
        {
          name: "Alex Protasenya",
          photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
        },
      ],
      [
        {
          name: "Jimmy Page",
          photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
        },
        {
          name: "Robert Plant",
          photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
        },
      ],
      [
        {
          name: "Jimmy Page",
          photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
        },
        {
          name: "Robert Plant",
          photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
        }
      ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
    [
      {
        name: "Владислав Кухлій",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Alex Protasenya",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      },
    ],
    [
      {
        name: "Jimmy Page",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaX3DQEZgXQfJHTS0AuXWjDLD7OHujpOnpWF0hOYczJ011WL4AnCxNfDgE_vXgrfQ73V3prh0NqVrnYdQy5eFzmNjaU76NUnVFntjhXylL37oeCqnlDDmN58pYpqlQgCT9a92XtFFz7PgxjCd26RseU=w645-h969-s-no?authuser=1",
      },
      {
        name: "Robert Plant",
        photo: "https://lh3.googleusercontent.com/pw/AJFCJaW85mQppsgeMx4SSbwZB08zY__BjCA5jjdc6mCJCKGwDLfUNCVtKMDjoj9089hlmhPtps1t9jUb3Ls6EiN3Q6m65YHvCf7_IePV8iextHvVs6Vyx4aLDm3x5f-JykaDnMH43WSbuId0Ig28FBAMdWE=w631-h969-s-no?authuser=1",
      }
    ],
  ];
}

</script>
<style lang="scss">
.duets {
  padding: 40px;
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  &__duet {
    display: flex;
    gap: 12px;
    position: relative;
    &:after {
      position: absolute;
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      width: 150px;
      height: 20px;
      border: 5px solid #fff;
      border-bottom: none;
      content: "";
    }
  }
  &__duet-item {
    max-width: 200px;
    background-color: #c0c0c0;
    padding: 12px;
    position: relative;
  }
  &__duet-photo{
    display: block;
    width: 100%;
  }
  &__duet-name {
    padding: 4px;
    text-align: center;
  }
}
</style>
