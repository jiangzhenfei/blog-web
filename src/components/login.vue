<template>
<Modal
    v-model="showHostToScale"
    title="用户登入"
    width="30%"
    @on-ok="ok"
    @on-cancel="cancel">
    <Form ref="login" :model="form" label-position="top" :rules="rules">
        <Row>
            <Col span="24">
                <FormItem label="用户名" prop="name">
                    <Input v-model="form.name"></Input>
                </FormItem>
            </Col>
            <Col span="24">
                <FormItem label="密码" prop="password">
                    <Input type="password" v-model="form.password"></Input>
                </FormItem>
            </Col>
        </Row>   
    </Form>
    <div slot="footer">
        <Button type="primary" @click="ok">确定</Button>
        <Button type="default" @click="cancel">取消</Button>
    </div>
</Modal>
</template>

<script>
    import axios from '@/service/axios'
    export default {
        name:'',
        data(){
            return {
                showHostToScale:false,
                form:{
                   name:'',
                   password:''
                },
                /*校验*/
                rules:{
                    name:[
                        { required: true, message: '名称是必须的', trigger: 'blur' },
                        
                    ],
                    password:[
                        { required: true, message: '密码是必须的', trigger: 'blur' },
                    ]
                }
            }
        },
        created(){
            setTimeout(()=>{
                this.showHostToScale = true;
            },0)
        },
        methods:{
            /*提交创建*/
            ok() {
                this.$refs['login'].validate((valid) => {
                    if (valid) {
                        axios.post('blog/login', this.form).then((e)=>{
                            console.log('success',e)
                        },(err)=>{
                            console.log('error',err)
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            cancel(){
                this.showHostToScale = false;
                setTimeout(()=>{
                    this.$emit('setcreatemodal','cancel')
                },500)
            }
        }
    }
</script>


<style scoped lang="scss">
</style>