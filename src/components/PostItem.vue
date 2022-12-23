<template>
    <div class="relative p-6 flex bg-[#FFFFFF] rounded-2xl max-w-[343px] md:max-w-[476px] mb-6 hover:shadow-xl transition duration-500">
        <div class="mr-0 md:mr-6">
            <p class="text-xs font-normal text-[#999999] w-[80%] md:w-full">
                Перед рассветом
            </p>
            <h3 class="text-[#000000] text-base font-medium mb-2 w-[80%] md:w-full">
                Утренний бухгалтер
            </h3>
            <p class="text-xs font-normal text-[#999999] mb-4">
                Самые важные новости и события за день. Кратко, по делу, структурированно.
            </p>
            <p class="text-[#000000] font-normal text-sm pl-6 mb-2">
                Новости для бухгалтеров, ИП и директора
            </p>
            <p class="text-[#000000] font-normal text-sm pl-6 mb-2">
                Подборка статей за день
            </p>
            <div class="flex items-center mt-2">
                <label for=".toggle-switch">
                    <MyCheckbox class="block after:h-[22px] after:w-[22px] mr-2 w-12 h-6"/>
                </label>
                <div class="text-[#000000] font-normal text-sm self-center">
                    Уже получает 59 342 человек
                </div>
            </div>
        </div>
        <div class="absolute top-6 right-6 max-w-[40px] max-h-[40px] md:static md:max-w-[80px] md:max-h-[80px]">
            <img src="../assets/Frame 3505.png" alt="pic">
        </div>
    </div>
</template>

<script>
import MyCheckbox from './UI/MyCheckbox.vue';

export default {
    components: { MyCheckbox }
}
</script>
<style>

    
</style>