<template>
  <div class="w-full">
    <div class="px-8 py-4">

      <Accordion type="single" class="w-full" collapsible :default-value="defaultValue" v-model="currentOpenItem">
        <AccordionItem
            v-for="(item) in accordionItems"
            :key="item.value"
            :value="item.value"
            class="border rounded-lg my-4"
            :class="isAnswered(item) ? 'border-green-500' : ''"
        > <!-- last:border-none -->

          <AccordionTrigger class="w-full group">
            <div class="flex items-center mx-2">
              <div v-if="isAnswered(item)" class="mx-2"> <!-- rounded-full bg-green-500 p-1 -->
                <Check strokeWidth="2" class="text-white hidden" :size="12" />
                <CircleCheckBig strokeWidth="3" class="text-green-500" :size="20"/>
              </div>
              <div v-else>
                <CircleHelp strokeWidth="3" class="mx-2 text-blue-500 hidden" :size="20" />
                <Circle strokeWidth="2" class="mx-2 text-gray-400" :size="20"  />
              </div>
              <div class="font-medium mx-2 group-hover:underline">
                {{ item.title }}
              </div>
            </div>

            <div class="flex justify-between items-center ml-auto">
              <div class="flex items-center space-x-4 ">
                <div class="flex items-center space-x-2">
                  <Badge :variant="isAnswered(item) ? '' : 'outlined'">
                    {{ isAnswered(item) ? 'Beantwortet' : 'Offen' }}
                  </Badge>
                  <Switch class="hidden" id="answered" disabled v-model:checked="item.answered" />
                </div>
                <div class="hidden">
                  <button @click="deleteAnswer(item)">
                    <Trash2 strokeWidth="2" :size="20" class="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </AccordionTrigger>


          <AccordionContent class="px-4 flex flex-col">
            <div class="flex justify-between">
              <div>
                <p class="font-medium mb-1">{{ item.question }}</p>
                <p class="text-gray-700">{{ item.content }}</p>
              </div>
              <div v-if="item.type === 'switch'" class="flex justify-end items-center mt-2">
                <Label for="submit" class=""></Label>
                <Switch id="submit" v-model:checked="storedAnswers[item.answerKey]" @update:checked="updateAnswer(item, $event)" class="data-[state=checked]:bg-black" />
              </div>
            </div>
            <div v-if="item.type === 'input'" class="flex items-center mt-2">
              <Input id="input" type="number" placeholder="5" v-model="storedAnswers[item.answerKey]" @update:model-value="updateAnswer(item, $event)" class="mr-2" /> <!-- @update:model-value="answerQuestion(item, $event)" -->
              <Label for="input" class="">{{item.typeUnit}}</Label>
            </div>
            <div v-else-if="item.type === 'select'" class="flex items-center mt-2">
              <Select id="select" class="" @update:model-value="updateAnswer(item, $event)" v-model="storedAnswers[item.answerKey]">
                <SelectTrigger>
                  <SelectValue placeholder="Wähle eine Option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Optionen</SelectLabel>
                    <SelectItem v-for="option in item.typeItems" :key="option" :value="option">
                      {{ option }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div class="">
        <Button variant="outline" class="w-full bg-black text-white text-md py-5 px-6" @click="resetAnswers()">Eingaben zurücksetzen</Button>
      </div>

      <div class="mt-4">
        <div v-for="(answer, index) in storedAnswers" :key="answer">
          <p>{{index}}: {{answer}}</p>
        </div>
      </div>

      <div class="mt-2">
        <div v-for="(answer, index) in footprintStore.formData.configuration" :key="answer">
          <p>{{index}}: {{answer}}</p>
        </div>
      </div>

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
import {CircleHelp, Check, Trash2, CircleCheckBig, Circle} from "lucide-vue-next";
import Button from "@/components/ui/button/Button.vue";
import Switch from "@/components/ui/switch/Switch.vue";
import Label from "@/components/ui/label/Label.vue";
import Badge from "@/components/ui/badge/Badge.vue";
import Input from "@/components/ui/input/Input.vue";
import {useFootprintStore} from "@/stores/footprintStore.js";

export default {
  name: "ConfigurationQuestionsAccordion",
  components: {
    Input,
    Badge,
    Label,
    Switch,
    Button,
    AccordionContent,
    SelectItem,
    SelectLabel,
    SelectGroup,
    SelectContent, SelectValue, SelectTrigger, Select, AccordionTrigger, AccordionItem, Accordion,
    CircleHelp, Check, Trash2, CircleCheckBig, Circle},
  setup() {
    const footprintStore = useFootprintStore();
    return {
        footprintStore
    };
  },
  data() {
    return {
      defaultValue: 'item-1',
      //defaultValue: '',
      currentOpenItem: 'item-1',
      //currentOpenItem: '',

      storedAnswers: this.footprintStore.formData.configuration,
      accordionItems: [
        {
          value: 'item-1',
          title: 'Externe Wäscherei',
          question: 'Nutzen Sie eine externe Wäscherei?',
          content: 'Wählen Sie "Ja", wenn Sie Ihre Wäsche auslagern.',
          type: 'switch',
          answered: false,
          answerKey: 'hasOutsourcedLaundry',
        },
        {
          value: 'item-2',
          title: 'Private Räumlichkeiten',
          question: 'Haben Sie private Räumlichkeiten, welche nicht für den Hotelbetrieb genutzt werden?',
          content: 'z.B. private Wohnungen oder Büros',
          type: 'switch',
          answered: false,
          answerKey: 'hasPrivateSpace',
        },
        {
          value: 'item-3',
          title: 'Energieverbrauch private Räume',
          question: 'Kennen Sie den Energieverbrauch der privaten Räumlichkeiten?',
          content: 'Separate Messung des Energieverbrauchs',
          type: 'switch',
          answered: false,
          answerKey: 'knowsPrivateSpaceEnergyConsumption',
        },
        {
          value: 'item-4',
          title: 'Klimatisierte Fläche',
          question: 'Wie viel Prozent der klimatisierten Fläche ist privat?',
          type: 'input',
          typeUnit: "%",
          answered: false,
          answerKey: 'privateSpaceAreaPercentage',
        },
        {
          value: 'item-5',
          title: 'Fahrzeuge & Equipment',
          question: 'Wie möchten Sie Fahrzeug- und Equipmentemissionen einbeziehen?',
          type: 'select',
          typeItems: ['Manuell', 'Standard nutzen', 'Ignorieren'],
          answered: false,
          answerKey: 'includeVehicles',
        },
      ],
    }
  },
  methods: {
    isAnswered(item) {
      const answer = this.storedAnswers[item.answerKey];
      return answer !== undefined && answer !== null && answer !== '' && item.answered;
    },
    updateAnswer(item, value) {
      this.storedAnswers[item.answerKey] = value;
      item.answered = true;
    },
    validateInput(item) {
      const value = this.storedAnswers[item.answerKey];
      if (isNaN(value) || value <= 0) {
        this.footprintStore.updateAnswer(item.answerKey, null);
      }
    },
    resetAnswers() {
      this.storedAnswers = {};
      this.footprintStore.formData.configuration = {};
    },

    deleteAnswer(item) {
      item.answered = false;
    },
    nextQuestion(item) {
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
        //this.currentOpenItem = '';
      }
    },
  },
}

</script>

<style scoped>

</style>
