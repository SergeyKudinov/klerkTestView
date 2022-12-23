<template>
  <div class="container mx-auto flex flex-col items-center py-8 max-w-[1024px]">
    <div class="max-w-1 mb-4">
      <a href="#">
        <img src="./assets/klerk.png" alt="logo">
      </a>
    </div>
    <nav id="breadcrumbs" class="flex justify-center mb-4">
      <a href="#" class="text-xs font-normal text-[#999999] pr-8 relative after:absolute after:content-['→'] after:ml-2 tiny:after:top-[50%]">Главная</a>
      <a href="#" class="text-xs font-normal text-[#999999] pr-8 relative after:absolute after:content-['→'] after:ml-2 tiny:after:top-[50%]">Рассылки</a>
      <a href="#" class="text-xs font-normal text-[#999999]">Хлебные крошки</a>
    </nav>
    <h1 class="text-center font-medium text-[#000000] text-double_tiny md:text-xl">
      Подписки «Клерка»
    </h1>
    <nav class="flex justify-center">
      <a href="#" class="mx-3 pt-6 pb-4 text-tiny font-normal text-[#5A8CF1] border-b-[#5A8CF1] border-b-2">Рассылки</a>
      <a href="#" class="mx-3 pt-6 pb-4 text-tiny font-normal text-[#666666]">Соцсети</a>
      <a href="#" class="mx-3 pt-6 pb-4 text-tiny font-normal text-[#666666]">Мессенджеры</a>
    </nav>
    <div class="container mx-auto bg-[#F5F5F8] px-6 pb-12">
      <h3 class="text-[#000000] text-lg font-medium text-center mt-12 mb-6">
        Выберите рассылки, которые подходят именно вам
      </h3>
      <div id="search" class="container mx-auto px-6">
        <div class="flex justify-between bg-[#FFFFFF] rounded-[34px]">
          <input type="text" placeholder="Электронная почта" class="bg-[#FFFFFF] p-4 rounded-lg w-[100%] focus:shadow-2xl placeholder:font-normal placeholder:text-tiny">
          <button class="py-4 px-8 bg-[#316FEE] text-tiny font-normal text-[#FFFFFF] rounded-[100px] hover:opacity-60 hover:shadow-2xl transition-all duration-300">
            Подписаться
          </button>
        </div>
        <div class="flex mt-4 mb-8">
          <label for=".toggle-switch">
            <MyCheckbox class="after:h-[14px] after:w-[14px] mr-2 w-8 h-4"/>
          </label>
          <p class="font-normal">
            Подписаться на все рассылки
          </p>
        </div>
      </div>
      <div class="flex flex-wrap lg:justify-between md:justify-center sm:justify-center min-[350px]:justify-center">
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
      </div>
    </div>
  </div>
  <div class="container mx-auto flex justify-center w-[194px] mt-[16px] mb-[48px]">
    <img src="./assets/chel.png" alt="pic">
  </div>
</template>

<script>
  import PostItem from './components/PostItem.vue';
  import MyCheckbox from './components/UI/MyCheckbox.vue';

  export default {
    components: {
      PostItem,
      MyCheckbox
    }
  };
</script>

<style scoped>

</style>
