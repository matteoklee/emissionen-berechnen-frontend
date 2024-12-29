<template>
  <div class="w-full">
    <div class="border border-blue-500 rounded-lg p-8">
      <p>ConfigurationQuestionsAccordion</p>

      <Accordion type="single" class="my-6 w-full bg-gray-50 border rounded-lg" collapsible :default-value="defaultValue" v-model="currentOpenItem">
        <AccordionItem
            v-for="(item) in accordionItems"
            :key="item.value"
            :value="item.value"
            class=""
        > <!-- last:border-none -->
          <div class="flex items-center px-4 py-2">
            <div v-if="item.answered" class="mr-2 rounded-full bg-green-500 p-1">
              <Check strokeWidth="2" class="text-white" :size="12" />
            </div>
            <div v-else>
              <CircleHelp strokeWidth="3" class="mr-2 text-blue-500" :size="20" />
            </div>

            <AccordionTrigger class="flex-grow font-medium">
              {{ item.title }}
            </AccordionTrigger>
            <div class="flex items-center space-x-4 ml-auto">
              <div class="flex items-center space-x-2">
                <Switch id="answered" disabled v-model:checked="item.answered" />
                <Label for="answered">Beantwortet</Label>
              </div>
              <div>
                <button @click="deleteAnswer(item)">
                  <Trash2 strokeWidth="2" :size="20" class="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          <AccordionContent class="p-4 bg-white text-gray-700">
            <p>{{ item.content }}</p>
            <textarea
                class="w-full mt-2 p-2 border rounded-md"
                rows="3"
                placeholder="Type your answer..."
            ></textarea>
            <div class="flex justify-end items-center">
              <Button @click="answerQuestion(item)">Submit</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  </div>
</template>

<script>
import Accordion from "@/components/ui/accordion/Accordion.vue";
import AccordionItem from "@/components/ui/accordion/AccordionItem.vue";
import AccordionTrigger from "@/components/ui/accordion/AccordionTrigger.vue";
import Select from "@/components/ui/select/Select.vue";
import SelectTrigger from "@/components/ui/select/SelectTrigger.vue";
import SelectValue from "@/components/ui/select/SelectValue.vue";
import SelectContent from "@/components/ui/select/SelectContent.vue";
import SelectGroup from "@/components/ui/select/SelectGroup.vue";
import SelectLabel from "@/components/ui/select/SelectLabel.vue";
import SelectItem from "@/components/ui/select/SelectItem.vue";
import AccordionContent from "@/components/ui/accordion/AccordionContent.vue";
import {CircleHelp, Check, Trash2} from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import Switch from "@/components/ui/switch/Switch.vue";
import Label from "@/components/ui/label/Label.vue";
export default {
  name: "ConfigurationQuestionsAccordion",
  components: {
    Label,
    Switch,
    Button,
    AccordionContent,
    SelectItem,
    SelectLabel,
    SelectGroup,
    SelectContent, SelectValue, SelectTrigger, Select, AccordionTrigger, AccordionItem, Accordion,
    CircleHelp, Check, Trash2},
  data() {
    return {
      defaultValue: "item-1",
      currentOpenItem: 'item-1',
      accordionItems: [
        {
          value: 'item-1',
          title: 'Question 1',
          content: 'How can storytelling improve attention in your course?',
          answered: false,
        },
        {
          value: 'item-2',
          title: 'Question 2',
          content: 'What are the benefits of storytelling in education?',
          answered: false,
        },
        {
          value: 'item-3',
          title: 'Question 3',
          content: 'What are the benefits of storytelling in education?',
          answered: false,
        },
        {
          value: 'item-4',
          title: 'Question 4',
          content: 'What are the benefits of storytelling in education?',
          answered: false,
        },
      ]
    }
  },
  methods: {
    deleteAnswer(item) {
      item.answered = false;
    },
    answerQuestion(item) {
      item.answered = !item.answered;
      const currentIndex = this.accordionItems.findIndex(
          (accordionItem) => accordionItem.value === item.value
      );
      const nextItem = this.accordionItems[currentIndex + 1];

      if (nextItem) {
        this.$nextTick(() => {
          this.currentOpenItem = nextItem.value;
        });
      } else {
        this.currentOpenItem = "item-1";
      }
    },
    moveDown(index) {
      const temp = this.accordionItems[index];
      this.accordionItems.splice(index, 1);
      this.accordionItems.splice(index + 1, 0, temp);
    },
    moveUp(index) {
      const temp = this.accordionItems[index];
      this.accordionItems.splice(index, 1);
      this.accordionItems.splice(index - 1, 0, temp);
    },
  },
}

</script>

<style scoped>

</style>
