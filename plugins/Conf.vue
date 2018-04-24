<script>
        const env_cur="test";
        const evnData={
                //test:{baseUrl:"http://localhost:8888"},
                test:{baseUrl:"http://interface.thelittlegym.com.cn"},
                local:{baseUrl:"http://localhost:8888"},
                prod:{baseUrl:""}
                };
        var data=[];        
        export default
        {
            env_cur,
            evnData,
            data
        }
</script>