<template>
  <div class="app-component-wrapper app-contact">
    <b-container>
      <b-row>
        <b class="col">
          <h1 class="app-title">{{ contactTitle }}</h1>
        </b>
      </b-row>
    </b-container>

    <div class="bg-gray">
      <b-container>
        <b-row>
          <b-col>
            <b-form @submit.stop.prevent="onSubmit">

              <b-form-group id="example-input-group-1" label="Email address:" label-for="example-input-1">
                <b-form-input id="example-input-1" name="example-input-1" v-model="$v.form.email.$model" type="email"
                  :state="$v.form.email.$dirty ? !$v.form.email.$error : null" placeholder="Enter email"
                  aria-describedby="input-1-live-feedback"></b-form-input>

                <b-form-invalid-feedback id="input-1-live-feedback">
                  This is a required field.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group id="example-input-group-2" label="Message:" label-for="example-input-2">
                <b-form-textarea id="example-input-2" name="example-input-2" v-model="$v.form.text.$model"
                  placeholder="Message for me" rows="3" max-rows="6"
                  :state="$v.form.text.$dirty ? !$v.form.text.$error : null" aria-describedby="input-2-live-feedback">
                </b-form-textarea>

                <b-form-invalid-feedback id="input-2-live-feedback">
                  This is a required field and must be at least 30 characters.
                </b-form-invalid-feedback>
              </b-form-group>

              <b-button block type="submit" variant="primary" :disabled="$v.form.$invalid">Submit</b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required, minLength, email } from 'vuelidate/lib/validators';

  export default {
    name: "Contact",
    mixins: [validationMixin],
    data() {
      return {
        contactTitle: "Ruf Mich An - Tele2",
        form: {
          email: null,
          text: null
        }
      }
    },
    validations: {
      form: {
        email: {
          required,
          email
        },
        text: {
          required,
          minLength: minLength(30)
        }
      }
    },
    methods: {
      onSubmit() {
        this.$v.form.$touch()
        if (this.$v.form.$anyError) {
          return;
        }

        // Form submit logic
        alert("Mail has been sent");
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../scss/common";

  .app-contact {
    h1 {
      color: rgb(235, 14, 14);
    }

    form {
      padding: 4rem 0;
      text-align: left;
      width: 100%;
      margin: 0 auto;
    }

    @media screen and (min-width: 768px) {
      form {
        width: 50%;
      }
    }
  }
</style>