<script setup>
import { ref, onMounted, watch, reactive } from "vue";
import { collection, query, where, getDocs, limit, getCountFromServer, orderBy } from "firebase/firestore";
import db from "../firebase/init.js";
import { useRoute } from "vue-router";
import Documents from "../components/Documents.vue";
import AggDocument from "../components/AggDocument.vue";

const detail = ref([]);
const title = ref("");
const route = useRoute();
const state = reactive({ showAgg: false, qryId: 1 });
const aggData = ref(0);

async function getQuery() {
  state.qryId = route.params.id;
  detail.value = [];
  state.showAgg = false;
  let qry = null;
  let qry2 = null;
  if (state.qryId == 1) {
    state.showAgg = false;
    title.value = "Diary ที่มีคนคอมเมนต์มากที่สุด";
    const diaryRef = collection(db, "diary");
    qry = query(diaryRef, orderBy("favorite.count", "desc"), limit(1));

  } else if (state.qryId == 2) {
    state.showAgg = false;
    title.value = "Diary ที่มีคนคอมเมนต์มากกว่า 1 คน";
    const diaryRef = collection(db, "diary");
    qry = query(diaryRef, where("favorite.count",">=",2));

  } else if (state.qryId == 3) {
    state.showAgg = false;
    title.value = "Diary ที่เป็น private";
    const diaryRef = collection(db, "diary");
    qry = query(diaryRef, where("is_public","==", false));

  } else if (state.qryId == 4) {
    state.showAgg = true;
    title.value = "จำนวน Diary ที่เป็น Public";
    const diaryRef = collection(db, "diary");
    qry = query(diaryRef, where("is_public","==", true));;
    
  } else if (state.qryId == 5) {
    state.showAgg = false;
    title.value = "Diary ถูกเขียนในเดือนตุลาคม";
    const diaryRef = collection(db, "diary");

    let start = new Date('October 01, 2022 00:00:00');
    let end = new Date('October 31, 2022 00:00:00');
    qry = query(diaryRef, where("created_at", ">=" , start), where("created_at", "<=" , end));

  } else if (state.qryId == 6) {
    state.showAgg = true;
    title.value = "จำนวน mood ที่เป็น sad";
    const diaryRef = collection(db, "diary");
    qry = query(diaryRef, where("mood","==", "sad"));;

  } else if (state.qryId == 7) {
    state.showAgg = true;
    title.value = "จำนวน user ที่ใช้ชื่อว่า Tarathep";
    const diaryRef = collection(db, "users");
    qry = query(diaryRef, where("display_name","array-contains", "Tarathep"));;

  } else if (state.qryId == 8) {
    state.showAgg = false;
    title.value = "Diary ที่เป็น Public แต่ไม่มีคนคอมเมนต์เลย";
    const diaryRef = collection(db, "diary");
    qry = query(diaryRef, where("is_public","==", true), where("favorite.count","==", 0));

  } else if (state.qryId == 9) {
    state.showAgg = false;
    title.value = "Diary ของ kittipat ที่เป็น public"
    const diaryRef = collection(db, "diary");
    qry = query(diaryRef, where("is_public","==", false), where("username","==", "kittipat"));

  } else if (state.qryId == 10) {
    state.showAgg = true;
    title.value = "จำนวน users ที่ใช้ชื่อว่า Admin"
    const diaryRef = collection(db, "users");
    qry = query(diaryRef, where("display_name","==", "Admin"));;
  }

  if (state.qryId == 1 || state.qryId == 2 || state.qryId == 3 || state.qryId == 5 || state.qryId == 8 || state.qryId == 9) {
    const querySnap = await getDocs(qry);
    querySnap.forEach((doc) => {
      let data = doc.data();
      data.id = doc.id;
      detail.value.push(data);
      console.log(detail.value);
    });

  } else if(state.qryId == 4 || state.qryId == 6 || state.qryId == 7 || state.qryId == 10){
    const querySnap = await getCountFromServer(qry);
    aggData.value = querySnap.data().count;
  }
}

watch(() => route.params.id, getQuery);

onMounted(() => {
  getQuery();
});
</script>
<template>
    <AggDocument v-if="state.showAgg" :title="title" :data="aggData" />
    <Documents v-else :title="title" :data="detail" />
</template>

<style></style>

