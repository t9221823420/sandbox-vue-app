<template>
    <v-form
            ref="form"
    >
        <h2>Validations</h2>

        <v-text-field
                label="Field 1"
                placeholder="Validate by embedded rules"
                :rules="[ validation.required, validation.minLength ]"
        />

        <v-text-field
                v-model="$v.field2.$model"
                label="Field 2"
                placeholder="Validate by vuelidate thorough $model"
                :error-messages="errors($v.field2)"
        />

        <v-text-field
                v-model="field3"
                label="Field 3"
                placeholder="Validate by vuelidate thorough $touch"
                :error-messages="errors($v.field3)"
        />

        <v-btn color="success" @click="submit">Submit</v-btn>
        <v-btn color="info" @click="reset">Reset inputs</v-btn>
        <v-btn color="info" @click="resetValidation">Reset Validation</v-btn>
    </v-form>
</template>

<script>
    import {validationMixin} from 'vuelidate';
    import {required, minLength} from "vuelidate/lib/validators";

    export default {
        name: "ValidateForm",
        data: () => ({
            field1: '',
            field2: '',
            field3: '',
            validation: {
                required: v => !!v || 'This field is required',
                minLength: v => v.length >= 3 || 'Minimum length is 3 characters',
                maxLength: v => v.length <= 10 || 'Maximum length is 10 characters',
            }

        }),
        methods: {
            submit() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    console.warn('Validation thorough vuelidate fails');
                } else {
                    console.info('Validation thorough vuelidate succeed');
                }
            },
            reset() {
                this.$refs.form.reset();
            },
            resetValidation() {
                this.$refs.form.resetValidation();
                this.$v.$reset();
            },
            status(validation) {
                return {
                    error: validation.$error,
                    dirty: validation.$dirty,
                    foo: false
                }
            },
            errors(target) {
                if (target.$error) {
                    return 'Shit happens. JS sucks!!!';
                }
            }
        },
        mixins: [validationMixin],
        validations: {
            field2: {
                required,
                minLength: minLength(5)
            },
            field3: {
                required,
                minLength: minLength(5)
            },
        },
    }
</script>

<style scoped>

</style>
