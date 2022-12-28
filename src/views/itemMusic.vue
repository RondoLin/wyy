<template>
    <div>
        <itemMusicTop :playlist="state.itemMusicList"/>
        <itemMusiclist :itemList="state.itemList" :subscribedCount="state.itemMusicList.subscribedCount"/>

    </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive} from 'vue'
import {getItemMusic,getItemList} from '@/api/item.js'
import itemMusicTop from '@/components/item/itemMusicTop.vue'
import itemMusiclist from '@/components/item/itemMusiclist.vue'
export default {
    components:{
        itemMusicTop,
        itemMusiclist
    },
    setup() {
        const state = reactive({
            itemMusicList:{},
            itemList:[]
        })

        onMounted(async() => {
            let id = useRoute().query.id
            let res = await getItemMusic(id)
            state.itemMusicList = res.data.playlist

            let result = await getItemList(id)
            state.itemList = result.data.songs

            sessionStorage.setItem('itemDetail',JSON.stringify(state))
        })
        
        return { state }
    }
}
</script>