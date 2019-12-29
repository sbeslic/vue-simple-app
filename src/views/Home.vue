<template>
  <div class="app-home">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1>{{ title }}</h1>
        </b-col>
      </b-row>
    </b-container>

    <div class="bg-gray">
      <b-container>
        <b-row class="justify-content-center my-5">
          <b-card :title="catName" v-bind:img-src="cickoLink" img-alt="Cat named Cicko" img-top tag="article"
            style="max-width: 20rem;" class="mb-2">

            <h6>{{ catExtendedInfo }}</h6>
            <b-card-text>{{ catDescription }}</b-card-text>
          </b-card>

          <b-card :title="dogName" v-bind:img-src="luaLink" img-alt="Dog named Lua" img-top tag="article"
            style="max-width: 20rem;" class="mb-2">

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
    data: () => ({
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
  };
</script>

<style lang="scss" scoped>
  .app-home {
    text-align: center;

    h1 {
      color: rgb(77, 165, 77);
      margin: 2rem 0;
      text-transform: uppercase;
    }

    .bg-gray {
      background-color: hsl(0, 0, 96);
      padding: 1rem 0;
    }

    .card {
      margin-right: 3rem;
      padding: 1rem;

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
        margin-right: 0;

        img {
          object-position: center;
        }
      }
    }
  }
</style>