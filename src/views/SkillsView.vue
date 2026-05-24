<script setup>
import IconConsole from "@/components/icons/IconConsole.vue";
import IconCSS from "@/components/icons/IconCSS.vue";
import IconGit from "@/components/icons/IconGit.vue";
import IconHTML from "@/components/icons/IconHTML.vue";
import IconJS from "@/components/icons/IconJS.vue";
import IconVite from "@/components/icons/IconVite.vue";
import IconVue from "@/components/icons/IconVue.vue";
import { ref, watch } from "vue";

const props = defineProps({
  gLangData: {
    type: Object,
  },
});
const langData = ref([]);
watch(
  () => props.gLangData,
  (newVal) => {
    if (newVal?.skills) {
      langData.value = newVal.skills;
    }
  },
  { immediate: true },
);
</script>

<template>
  <main>
    <section class="center">
      <h1>استراتيجية <span class="highlight">المهارات</span> التقنية</h1>
      <p>Front-End Mystery: هندسة الواجهات و التميز الرقمي</p>
    </section>
    <section class="center">
      <hr />
      <h2>الركائز الأساسية</h2>
      <p>القاعدة الصلبة لكل مشروع ويب ناجح</p>
    </section>
    <section>
      <h3>الأساس التقني (Core Stack)</h3>
      <div class="cards-container">
        <div class="card">
          <IconHTML />
          <h4>HTML5</h4>
          <p>
            بناء هيكلية ويب دلالية (Semantic HTML)، نظيفة، ومتوافقة بالكامل مع
            معايير الوصول العالمية (Accessibility) لضمان تجربة تصفح عادلة لجميع
            المستخدمين.
          </p>
        </div>
        <div class="card">
          <IconCSS />
          <h4>CSS3</h4>
          <p>
            تصاميم متجاوبة بلمسات Pixel-Perfect مع أنميشن سلس يثري تجربة
            المستخدم.
          </p>
        </div>
        <div class="card">
          <IconJS />
          <h4>JavaScript</h4>
          <p>
            البرمجة التفاعلية الحديثة (ES6+) لضمان أداء ديناميكي و منطق برمجي
            قوي.
          </p>
        </div>
      </div>
    </section>
    <section>
      <h3>أطر العمل (Frameworks)</h3>
      <div class="cards-container">
        <div class="card">
          <IconVite />
          <h4>Vite</h4>
          <p>
            اعتماد أداة البناء الأحدث لتسريع بيئة التطوير اللحظية، وتحسين كفاءة
            الملفات النهائية (Production Bundling) لضمان سرعة تحميل فائقة
            للموقع.
          </p>
        </div>
        <div class="card">
          <IconVue />
          <h4>VueJS</h4>
          <p>
            تطوير تطبيقات الصفحة الواحدة (SPAs) تفاعلية وديناميكية، باستخدام
            بنية المكونات القابلة لإعادة الاستخدام (Reusable Components) لإدارة
            منطق الواجهات بسلاسة.
          </p>
        </div>
      </div>
    </section>
    <section>
      <h3>بيئة العمل والأدوات</h3>
      <div class="cards-container">
        <div class="card">
          <IconGit />
          <h4>Version Control</h4>
          <p>
            إدارة الكود باحترافية عبر Git و GitHub لضمان استمرارية العمل و
            توثيقه.
          </p>
        </div>
        <div class="card">
          <IconConsole />
          <h4>DevTools</h4>
          <p>
            استخدام أدوات المطور المتقدمة لتصحيح الأخطاء وتحسين الأداء اللحظي
            للموقع.
          </p>
        </div>
      </div>
    </section>
    <section>
      <h3>فلسفة الدقة الرقمية</h3>
      <div class="split">
        <div>
          <h4>100%</h4>
          <p>Pixel Perfect</p>
        </div>
        <div>
          <hr />
          <h4>الالتزام بالجودة</h4>
          <p>
            كل بكسل له مكانه, وكل تفاعل مدروس بعناية. نحن نؤمن أن الفرق بين
            التصميم الجيد والتصميم العظيم يكمن في الاهتمام بأدق التفاصيل.
          </p>
        </div>
      </div>
    </section>
    <!-- <section>
      <h3>مسار النمو المستمر</h3>
      <ul>
        <li>
          <h4>المرحلة 1</h4>
          <p>اتقان الأساسيات (HTML/CSS/JS)</p>
        </li>
        <li>
          <h4>المرحلة 2</h4>
          <p>بناء الواجهات بواسطة VueJS</p>
        </li>
        <li>
          <h4>المرحلة 3</h4>
          <p>التعلم الحالي: Typescript</p>
        </li>
        <li>
          <h4>المرحلة 4</h4>
          <p>المستقبل: PHP & Laravel</p>
        </li>
      </ul>
    </section> -->
  </main>
</template>

<style scoped>
svg {
  fill: var(--primary);
  color: var(--primary);
}
main {
  margin-block-end: 3rem;
}
section {
  padding-block: 1rem;
}
section h1 {
  line-height: 1.5;
  font-size: 2rem;
}
section h1 span {
  text-shadow: 0 0 0.25rem var(--secondary);
  color: var(--primary);
}
section h2 {
  font-size: 1.75rem;
}
section h3 {
  font-size: 1.5rem;
  padding-inline-start: 1rem;
  border-inline-start: 0.25rem solid var(--secondary);
  padding-block: 1rem;
  margin: 0;
}
section p {
  color: var(--preview-text);
  font-size: 1.1rem;
  line-height: 1.5;
}
section hr {
  width: 5rem;
  border-color: var(--primary);
  border-width: 2px;
  border-radius: 1rem;
}
section.center {
  text-align: center;
}
section .split {
  display: grid;
  text-align: center;
  margin-block-start: 2rem;
  gap: 3rem;
}
section .split div h4,
section .split div p {
  margin: 0;
}
section .split div:first-of-type h4 {
  font-size: 5rem;
  color: var(--primary);
}
section .split div:first-of-type p {
  color: var(--text);
  font-size: 1.25rem;
}
section .split div:last-of-type h4 {
  font-size: 2rem;
  margin-block-end: 1rem;
}
.cards-container {
  margin-block-start: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
}
.cards-container .card {
  text-align: center;
  background-color: var(--cards);
  border: 1px solid var(--preview-text);
  border-radius: 1rem;
  padding-block-end: 2.5rem;
  transition: var(--transition);
  max-width: 350px;
  box-shadow: 0 0 1rem var(--secondary);
}
.cards-container .card svg {
  width: 20rem;
}
.cards-container .card h4 {
  font-size: 1.5rem;
  margin: 0;
}
.cards-container .card p {
  padding-inline: 1rem;
}
@media (min-width: 700px) {
  .cards-container .card:hover {
    box-shadow: 0 0 1rem var(--preview-text);
    transform: scale(1.01);
  }
}
</style>
