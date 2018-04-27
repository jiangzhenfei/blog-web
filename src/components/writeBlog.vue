<template>
    <div>
        <h1>write</h1>
        <div>
            <textarea id="articleEditor"></textarea>
        </div>
        
    </div>
</template>

<script>
import tinymce from 'tinymce';  
export default {
  	name: 'WriteBlog',
  	data () {
    	return {
            
    	}
    },
    mounted(){
        tinymce.init({
            selector: '#articleEditor',
        });
    },
	methods:{
		
           
	}
}
</script>

<style scoped lang="scss">
@import '../style/common.scss';


</style>
