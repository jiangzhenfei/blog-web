<template>
    <div class="container">
        <div class="header">
            <Row type="flex" justify="space-between">
                <Col span="6">
                    <Icon type="social-github" size="40"></Icon>
                    <Icon type="social-html5-outline" size="40"></Icon>
                    <Icon type="social-javascript" size="40"></Icon>
                </Col>
                <Col span="6">
                    <Row>
                        <Col span="10" style="padding-top:3px">
                           <Input v-model="searchText" @on-change="searchFilter(searchText)" icon="ios-search-strong" placeholder="输入名称进行搜索..."></Input>
                        </Col>
                        <Col span="6" style="margin-right:10px;text-align:center" >
                            <a class="no-btn" @click="goList">
                                <Icon type="edit" size="30"></Icon>
                                <p>博客列表</p>
                            </a>
                        </Col>
                        <Col span="6">
                            <a class="no-btn">
                                <div class="login"></div>
                                <p>登入</p>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        <Row type="flex" justify="center" style="padding-top:60px">
            <Col span="18">
                <Card style="height:100%">
                    <h1>{{detail.title}}</h1>
                    <div v-html="detail.content"></div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import axios from '@/service/axios'
export default {
  	name: 'WriteBlog',
  	data () {
    	return {
            id:this.$route.params.id,
            searchText:'',
            detail:{
                title:'',
                content:''
            },  
    	}
    },
    mounted(){
        console.log(this.id)
        this.initDetail()
    },
	methods:{
        initDetail(){
            axios.get('blog/detail/'+ this.id).then((e)=>{
                if(e.data.success){
                    this.detail = e.data.response;
                }
            },(err)=>{
                console.log('error',err)
            })
        },
        goList(){
            this.$router.go(-1)
        }
    },
}
</script>

<style scoped lang="scss">
.container{
    padding: 10px;
    //background-image: url(/static/timg.jpeg)
}
.header{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    z-index: 9999;
    height: 60px;
    padding-top:10px;
    padding: 10px 20px;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 2px solid #ccc;
    i{
        margin-left:10px;
    }
    i:hover{
        cursor: pointer;
    }
    .login{
        width: 30px;
        height: 30px;
        border: 1px solid #2d8cf0;
        border-radius: 50%;
        margin: auto;
    }
    p{
        text-align: center;
    }
    .no-btn{
        border:none;
        background:#fff;

    }
}
</style>
