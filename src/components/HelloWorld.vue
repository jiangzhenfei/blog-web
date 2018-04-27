<template>
	<div>
		<h1>江振飞的博客</h1>
		<div class="container">
			<div class="scene"> 
				<div class="cube" @click="go"> 
					<div class="side back">BACK</div> 
					<div class="side left">LEFT</div> 
					<div class="side right">RIGHT</div> 
					<div class="side top">TOP</div> 
					<div class="side bottom">BOTTOM</div> 
					<div class="side front">FRONT</div> 
				</div> 
			</div> 
		</div>
	</div>
</template>

<script>
import axios from '@/service/axios'
export default {
  	name: 'HelloWorld',
  	data () {
    	return {
            
    	}
	},
	methods:{
		go(){
			this.$router.push('writeBlog')
		}
           
	}
}
</script>

<style scoped lang="scss">
h1{
	font-size: 36px;
	text-align: center;
	margin-top:60px;
	color:#0593d3;
	text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.3),0 3px 5px rgba(0,0,0,0.2),0 5px 10px rgba(0,0,0,0.25)
}
.container{
	width: 300px;
	margin: 150px auto;

}
.scene {
	perspective: 800px;
}
.cube {
	position:relative; 
	width: 300px; 
	height: 300px; 
	transform-style: preserve-3d;
	transform: rotateY(42deg);
	animation: example 10s linear infinite;
} 
.side {
	position: absolute; 
	width: 300px; 
	height: 300px;
	background-color: rgba(32, 170, 151, 0.5);
	font: 50px/1 'Trebuchet MS', sans-serif;
	color: #fff;
	text-transform: uppercase;
  	text-align: center;
	line-height: 300px;
}
.back { transform: translateZ(-150px) rotateY(180deg); background-image: url('/static/back.jpg')} 
.left { transform: translateX(-150px) rotateY(-90deg); background-image: url('/static/left.jpg')} 
.right { transform: translateX(150px) rotateY(90deg);background-image: url('/static/right.jpg')} 
.top { transform: translateY(-150px) rotateX(-90deg); } 
.bottom { transform: translateY(150px) rotateX(-90deg); } 
.front{ 
	transform: translateZ(150px);
	background-image: url('/static/front.jpg')
}
.top, .bottom {
  	background-color: rgba(105, 136, 190, 0.5)
}
@keyframes example {
	0% {transform: rotateY(0);}
  	100% { transform: rotateY(360deg); }
}

</style>
