<script setup>
	//Component mounted olduğu anda veri çekiliyor. 
	//Ardından her bir grup v-for ile <Group/> componentine gönderiliyor.
	
	import {ref, onMounted} from "vue"
	import {fetchData,getGroups} from "@/services/services.js"
	import Group from "@/components/Group/Group.vue"
	import Header from "@/components/Header/Header.vue"

	const groups = ref({})
	const title = "Bootcamp Groups"

	onMounted(async () => {
		const fetchPersons = await fetchData()
		groups.value = getGroups(fetchPersons)
	})
</script>

<template>
	<div class="app">
		<Header :title="title"/>
		<div class="app__groups">
			<Group v-for="group in groups" :key="group.id" :group="group"/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.app{
		padding: 0 50px;
		margin-top: 25px;

		&__groups{
			display: flex;
			flex-wrap: wrap;
			gap: 60px;
			align-items: center;
		}
	}
</style>
