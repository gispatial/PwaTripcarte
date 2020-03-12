<!-- =========================================================================================
    File Name: FormValidation.vue
    Description: Form validation (third-party) - Imports page portions
    ----------------------------------------------------------------------------------------
    Item Name: TripCarte Pwa
    Author: TripCarte.Asia
    Author URL: http://www.tripcarte.asia/
========================================================================================== -->

<template>
    <div id="extra-component-form-validation-demo">

        <p class="mb-4">
        <form-validation-multiple-rules></form-validation-multiple-rules>
        <div class="vx-row match-height">
        </div>
    </div>
</template>

<script>
import FormValidationMultipleRules from "./FormValidationMultipleRules.vue"

export default {
    components: {
        FormValidationSimple,
        FormValidationMultipleRules,
        FormValidationCustomErrorMessages,
        FormValidationEvents,
        FormValidationTypes,
    }
}
</script>
