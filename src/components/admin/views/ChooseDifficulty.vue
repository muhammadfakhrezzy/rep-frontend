<script>
import axios from 'axios'
export default {
    created() {
        axios.get('https://dytlan.alphabetincubator.id/superuser/difficulties')
            .then(response => console.log(response))
    }
}
</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Choose Difficulty</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    
                </div>
            </div>
        </div>
    </div>
</template>