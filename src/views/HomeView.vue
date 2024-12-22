<template>
  <div id="cta" class="mt-16">
    <div class="text-center mt-2 hidden">
      <h1 class="text-center mb-2">This is the home page</h1>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="outline"
              @click="
                () => {
                  toast('Event has been created', {
                    description: 'Sunday, December 03, 2023 at 9:00 AM',
                    action: {
                      label: 'Undo',
                      onClick: () => console.log('Undo')
                    }
                  });
                }
              "
              >Sonner Test</Button
            >
          </TooltipTrigger>
          <TooltipContent>
            <p>Hierüber kannst du die Sonner-Komponente testen.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div class="text-center my-4">
        <Sheet class="w-screen">
          <SheetTrigger><Button>Sheet Test</Button></SheetTrigger>
          <SheetContent side="right" class="w-screen">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <div class="grid gap-4 py-4">
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="name" class="text-right"> Name </Label>
                <Input id="name" default-value="Pedro Duarte" class="col-span-3" />
              </div>
              <div class="grid grid-cols-4 items-center gap-4">
                <Label for="username" class="text-right"> Username </Label>
                <Input id="username" default-value="@peduarte" class="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose as-child>
                <Button type="submit"> Save changes </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div class="mt-4">
        <section class="flex w-full flex-col items-center justify-center">
          <h2 class="mb-2 text-lg font-semibold">Simple Loading Demo (prevent close)</h2>
          <MultiStepLoader
            :steps="simpleLoadingSteps"
            :loading="uiState.isSimpleLoading"
            :prevent-close="true"
            @state-change="handleStateChange"
            @complete="handleComplete"
          />
          <Button class="mt-4" @click="toggleSimpleLoading">
            {{ uiState.isSimpleLoading ? 'Stop Loading' : 'Start Simple Loading' }}
          </Button>
        </section>
        <hr class="my-4 h-px w-[400px] mx-auto bg-gray-200" />
        <!-- Async Loading Demo -->
        <section class="flex w-full flex-col items-center justify-center">
          <h2 class="mb-2 text-lg font-semibold">Async Loading Demo</h2>
          <MultiStepLoader
            :steps="asyncLoadingSteps"
            :loading="uiState.isAfterTextLoading"
            @state-change="handleStateChange"
            @complete="handleComplete"
            @close="uiState.closeAsync"
          />
          <Button class="mt-4" :disabled="uiState.isAfterTextLoading" @click="startAsyncLoading">
            Start Async Loading
          </Button>
        </section>
      </div>
    </div>

    <div id="hero">
      <CTASection></CTASection>
    </div>

    <div id="stats" class="bg-green-100">
      <StatsSection></StatsSection>
    </div>

    <div id="features">
      <FeatureSection></FeatureSection>
    </div>

    <div id="pricing">
      <PricingSection></PricingSection>
    </div>
  </div>
</template>

<script>
import PricingSection from '@/components/home/PricingSection.vue';
import { toast } from 'vue-sonner';
import Button from '@/components/ui/button/Button.vue';
import Sheet from '@/components/ui/sheet/Sheet.vue';
import SheetTrigger from '@/components/ui/sheet/SheetTrigger.vue';
import SheetContent from '@/components/ui/sheet/SheetContent.vue';
import SheetHeader from '@/components/ui/sheet/SheetHeader.vue';
import SheetTitle from '@/components/ui/sheet/SheetTitle.vue';
import SheetDescription from '@/components/ui/sheet/SheetDescription.vue';
import Input from '@/components/ui/input/Input.vue';
import TooltipProvider from '@/components/ui/tooltip/TooltipProvider.vue';
import Tooltip from '@/components/ui/tooltip/Tooltip.vue';
import TooltipTrigger from '@/components/ui/tooltip/TooltipTrigger.vue';
import TooltipContent from '@/components/ui/tooltip/TooltipContent.vue';
import CTASection from '@/components/home/CTASection.vue';
import StatsSection from '@/components/home/StatsSection.vue';
import CompanySection from '@/components/home/CompanySection.vue';
import MultiStepLoader from '@/components/ui/multi-step-loader/MultiStepLoader.vue';
import FeatureSection from '@/components/home/FeatureSection.vue';
import SheetFooter from '@/components/ui/sheet/SheetFooter.vue';
import SheetClose from '@/components/ui/sheet/SheetClose.vue';
import Label from '@/components/ui/label/Label.vue';

export default {
  name: 'CalculatorView',
  //methods: {toast},
  components: {
    Label,
    SheetClose,
    SheetFooter,
    FeatureSection,
    MultiStepLoader,
    CompanySection,
    StatsSection,
    CTASection,
    TooltipContent,
    TooltipTrigger,
    Tooltip,
    TooltipProvider,
    Input,
    SheetDescription,
    SheetTitle,
    SheetHeader,
    SheetContent,
    SheetTrigger,
    Sheet,
    Button,
    PricingSection
  },
  data() {
    return {
      loaderStates: {
        isProcessing: false,
        isSavingOrder: false,
        sendingMails: false
      },
      uiState: {
        isSimpleLoading: false,
        isAfterTextLoading: false,
        closeSimple: () => {
          this.uiState.isSimpleLoading = false;
        },
        closeAsync: () => {
          this.uiState.isAfterTextLoading = false;
        }
      }
    };
  },
  computed: {
    simpleLoadingSteps() {
      return [
        { text: 'Checking Payment', duration: 2000 },
        { text: 'Saving Order', duration: 1500 },
        { text: 'Sending Confirmation Email', duration: 2500 },
        { text: 'Processing Request', duration: 1800 },
        { text: 'Finalizing', duration: 1000 },
        { text: 'Redirecting', duration: 1000, action: this.handleSimpleLoadingComplete }
      ];
    },
    asyncLoadingSteps() {
      return [
        {
          text: 'Checking Payment',
          async: this.loaderStates.isProcessing,
          afterText: 'Payment Verified'
        },
        {
          text: 'Saving Order',
          async: this.loaderStates.isSavingOrder,
          afterText: 'Order Saved'
        },
        {
          text: 'Sending Confirmation Email',
          async: this.loaderStates.sendingMails,
          afterText: 'Email Sent'
        },
        { text: 'Redirecting', duration: 1000, action: this.handleAsyncLoadingComplete }
      ];
    }
  },
  methods: {
    toast,
    handleStateChange(state) {
      // Handle Loading State Change
    },
    handleComplete() {
      // Handle Loading Complete
    },
    handleSimpleLoadingComplete() {
      alert('Simple loading complete, redirecting...');
      this.uiState.isSimpleLoading = false;
    },
    handleAsyncLoadingComplete() {
      alert('Async loading complete, redirecting...');
      this.uiState.isAfterTextLoading = false;
    },
    toggleSimpleLoading() {
      this.uiState.isSimpleLoading = !this.uiState.isSimpleLoading;
    },
    async startAsyncLoading() {
      this.uiState.isAfterTextLoading = true;

      this.$set(this.loaderStates, 'isProcessing', true);
      this.$set(this.loaderStates, 'isSavingOrder', true);
      this.$set(this.loaderStates, 'sendingMails', true);

      const simulateAsyncStep = (stateProp, delay) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            this.loaderStates[stateProp] = false;
            resolve();
          }, delay);
        });
      };

      try {
        await simulateAsyncStep('isProcessing', 2000);
        await simulateAsyncStep('isSavingOrder', 3000);
        await simulateAsyncStep('sendingMails', 2500);
      } catch (error) {
        this.uiState.isAfterTextLoading = false;
      }
    }
  },
  watch: {
    loaderStates: {
      deep: true,
      handler() {
        // Überprüfe alle States und führe weiter, wenn fertig
        if (
          !this.loaderStates.isProcessing &&
          !this.loaderStates.isSavingOrder &&
          !this.loaderStates.sendingMails
        ) {
          this.handleAsyncLoadingComplete();
        }
      }
    }
  }
};
</script>
