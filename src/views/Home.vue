<template>
  <div class="app-component-wrapper app-home">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1 class="app-title">{{ title }}</h1>
        </b-col>
      </b-row>
    </b-container>

    <div class="bg-gray">
      <b-container>
        <b-row class="justify-content-center my-5">
          <b-card :title="catName" v-bind:img-src="cickoLink" img-alt="Cat named Cicko" img-top tag="article">

            <h6>{{ catExtendedInfo }}</h6>
            <b-card-text>{{ catDescription }}</b-card-text>
          </b-card>

          <b-card :title="dogName" v-bind:img-src="luaLink" img-alt="Dog named Lua" img-top tag="article">

            <h6>{{ dogExtendedInfo }}</h6>
            <b-card-text>{{ dogDescription }}</b-card-text>
          </b-card>
        </b-row>
      </b-container>
    </div>

    <div class="bg-gray mb-5 pb-5">
      <b-container>
        <b-row>
          <b-col>
            <p>{{ loremDescription }}</p>
          </b-col>
        </b-row>
      </b-container>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return ({
        title: "Moje zvijeri",
        cickoLink: "https://bit.ly/2Q4p0rm",
        catName: "Cicko",
        catExtendedInfo: "(formerly known as Roro)",
        catDescription: "Udomljen iz udruge ali ulicar u dusi. Kradljivac lignji i komadica tune iz manistre. Trgnu ga momenti ludila pa se rastrcava po stanu. Muholovac. Ne zna mjaukat, samo cvrkuce kada se ide jest - pogotovo piletina.",
        luaLink: "https://bit.ly/2u040JB",
        dogName: "Lua",
        dogExtendedInfo: "(full name Buba Lua)",
        dogDescription: "Springer spanijel sa jako visokim intenzitetom molecivosti ociju. Jedine dodirne tocke sa lovcem ima dok trazi proizvode od tijesta po ulici. Opsesivni cuvar svih loptica ovog svijeta. Jedna jedina - Lulushka.",
        loremDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit maxime soluta veritatis nemo tenetur doloribus quam similique ut optio et. Ut adipisci optio fuga quo officiis, sequi voluptas vel alias quasi placeat labore, nobis harum, consequuntur enim. Consequuntur ut suscipit deleniti at accusantium deserunt natus quae. Placeat minus reiciendis officiis."
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import "../scss/common";

  .app-home {
    h1 {
      color: rgb(77, 165, 77);
    }

    .card {
      margin: 0 0 3rem 0;
      padding: 1rem;
      max-width: 20rem;

      .card-title {
        text-transform: uppercase;
      }

      img {
        height: 250px;
        width: 250px;
        border-radius: 50%;
        object-fit: cover;
        object-position: bottom;
        margin: 0 auto;
      }

      &:last-of-type {
        margin-bottom: 0;

        img {
          object-position: center;
        }
      }
    }

    @media screen and (min-width: 768px) {
      .card {
        margin: 0 3rem 0 0;

        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
</style>