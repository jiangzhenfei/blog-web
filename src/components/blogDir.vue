<template>
    <div class="blog-content">
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
                            <a @click="addBlog" class="no-btn">
                                <Icon type="edit" size="30"></Icon>
                                <p>编写博客</p>
                            </a>
                        </Col>
                        <Col span="6" v-if="!isLogin">
                            <a @click="showCreate=true" class="no-btn">
                                <div class="login"></div>
                                <p>登入</p>
                            </a>
                        </Col>
                        <Col span="6" v-else>
                            <a class="no-btn">
                                <div class="login">
                                    <Icon type="male" size="20"></Icon>
                                </div>
                                <p>{{userName}}</p>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
        <div class="left">
            <div class="my-icon">
                <img src="/static/micon.jpeg" style="width:100%;height:100%">
            </div>
            <p>MY BLOG</p>
            <p>2018-4-28</p>
        </div>
        <div class="right">
            
        </div>
        <Row type="flex" justify="center">
            <Col span="16" class="content">
                <Card style="margin-bottom:10px">
                    <Row type="flex" justify="center" class="blog-info">
                        <Col span="6">
                            <h3>博客</h3>
                            <p>123</p>
                        </Col>
                        <Col span="6">
                            <h3>关注</h3>
                            <p>123</p>
                        </Col>
                        <Col span="6">
                            <h3>浏览</h3>
                            <p>123</p>
                        </Col>
                        <Col span="6">
                            <h3>其他</h3>
                            <p>123</p>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Card v-for="(item,index) in blogLists" :key="index" style="margin-bottom:10px">
                        <div class="blog">
                            <a style="color:#666" @click="read(item.id)">
                                <h2>{{item.title}}</h2>
                                <h4>{{item.summary}}</h4>
                            </a>
                        </div>
                    </Card>
                    <div class="page">
                        <Page :total="100" show-elevator></Page>
                    </div>
                </Card>
            </Col>
        </Row>
        <div v-if="showCreate">
            <login v-on:setcreatemodal="setCreateModal"></login>
        </div>
        
    </div>
</template>

<script>
import login from './login'; 
import axios from '@/service/axios'
import {setCookie,getCookie} from '@/utils/cookie'
import iView from 'iview';

export default {
    name: 'BlogDir',
    components:{
        login
    },
  	data () {
    	return {
            isLogin:false,
            userName:'',
            showCreate:false,
            blogLists:[],
            searchText:''
    	}
    },
    mounted(){
        this.getBlogList()
        this.initStatus()
    },
	methods:{
        /*初始化用户登录状态*/
        initStatus(){
            if(getCookie('token')){
                this.isLogin = true;
                this.userName = getCookie('token')
            }
        },
        getBlogList(){
            axios.get('blog/list').then((e)=>{
                if(e.data.success){
                    this.blogLists = e.data.response
                }
            },(err)=>{
                console.log('error',err)
            })
        },
        /*模糊查询 */
        searchFilter(){

        },
        /*新建博客洁敏 */
        addBlog(){
            if(getCookie('token')){
                this.$router.push('writeBlog')
            }else{
                iView.Notice.error({
                    title: '请先登录!',
                });
            }
        },
        /*登入模态框 */
        setCreateModal(e){
            if(e==='success'){
                console.log('sucess')
            }
            this.showCreate = false;
        },
        /*去往阅读界面 */
        read(id){
            this.$router.push(`/read/${id}`)
        }
	}
}
</script>

<style scoped lang="scss">
.header{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    z-index: 1;
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
        border: 1px solid #666;
        border-radius: 50%;
        margin: auto;
        i{
            margin-left:7px;
            margin-top: 4px;
        }
    }
    p{
        text-align: center;
    }
    .no-btn{
        border:none;
        background:#fff;
        color:#666;

    }
}
.left{
    position: fixed;
    left: 0;
    top:0;
    padding-top:60px;
    width: 16%;
    height: 100%;
    background-image: url(/static/cleft2.jpeg);
    .my-icon{
        margin: 60px auto 30px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
    }
    p{
        text-align: center;
    }

}
.right{
    position: fixed;
    right: 0;
    top:0;
    padding-top:60px;
    width: 16%;
    height: 100%;
    background: #fff;

}
.breadcrumb{
    margin-bottom: 10px;
}
.blog{
    margin-bottom: 20px;
    h1:hover{
        cursor: pointer;
    }
}
.content{
    // background: #e8f9f0;
    padding: 70px 10px;
    .blog-info{
        text-align: center;
        p{
            font:300 16px/16px arial,sans-serif;
        }
    }
}
.page{
    padding: 10px;
}
</style>
