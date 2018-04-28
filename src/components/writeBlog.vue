<template>
    <div class="container">
        <Row type="flex" justify="center">
            <Col span="18" class="margin-top-10">
                <div class="breadcrumb only">
                    <Breadcrumb>
                        <BreadcrumbItem to="/blogDir">
                            <Icon type="social-buffer-outline"></Icon> 博客列表
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon type="pound"></Icon> 编写博客
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span="18">
                <Card>
                    <Form :label-width="80">
                        <FormItem label="文章标题" >
                            <Input v-model="articleTitle" icon="android-list"/>
                        </FormItem>
                    </Form>
                </Card>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span="18" class="margin-top-10">
                <Card>
                    <div>
                        <textarea id="articleEditor"></textarea>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row type="flex" justify="center">
            <Col span="18" class="margin-top-10">
                <Card>
                    <Form :label-width="80">
                        <FormItem label="文章摘要" >
                            <Input v-model="summary" icon="android-list"/>
                        </FormItem>
                        <Button type="default" @click="ok">发布</Button>
                    </Form>
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
            articleTitle:'',
            articleMain:'',
            summary:''
    	}
    },
    mounted(){
        tinymce.init({
            selector: '#articleEditor',
            branding: false,
            elementpath: false,
            height: 400,
            language: 'zh_CN.GB2312',
            menubar: 'edit insert view format table tools',
            theme: 'modern',
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
                'searchreplace visualblocks visualchars code fullscreen fullpage',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons paste textcolor colorpicker textpattern imagetools codesample'
            ],
            toolbar1: ' newnote print fullscreen preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
            autosave_interval: '20s',
            image_advtab: true,
            table_default_styles: {
                width: '100%',
                borderCollapse: 'collapse'
            }
        });
    },
	methods:{
        ok(){
            console.log(tinymce.activeEditor.getContent())
            let data={
                title:this.articleTitle,
                content:tinymce.activeEditor.getContent(),
                summary:this.summary
            }
            axios.post('blog/add',data).then((e)=>{
                console.log('success',e)
            },(err)=>{
                console.log('error',err)
            })
        },
        goHome(){
            this.$router.push('blogDir')
        }

    },
    destroyed () {
        tinymce.get('articleEditor').destroy();
    }
}
</script>

<style scoped lang="scss">
@import '../style/common.scss';
.container{
    padding: 10px;
     background-image: url(/static/timg.jpeg)
}
.breadcrumb{
    margin-bottom: 5px;
}

</style>
