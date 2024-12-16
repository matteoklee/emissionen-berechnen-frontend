<template>
  <div id="cta" class="mt-16">
    <div class="text-center mt-2">
      <h1 class="text-center mb-2">This is the home page</h1>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
                variant="outline" @click="() => {
                  toast('Event has been created', {
                    description: 'Sunday, December 03, 2023 at 9:00 AM',
                    action: {
                      label: 'Undo',
                      onClick: () => console.log('Undo'),
                    },
                  })
                }"
            >Sonner Test</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Hierüber kannst du die Sonner-Komponente testen.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

    </div>

    <div class="text-center my-4">
      <Sheet>
        <SheetTrigger><Button>Sheet Test</Button></SheetTrigger>
        <SheetContent class="w-[600px] sm:w-[540px]" side="right">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">
                Name
              </Label>
              <Input id="name" default-value="Pedro Duarte" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right">
                Username
              </Label>
              <Input id="username" default-value="@peduarte" class="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose as-child>
              <Button type="submit">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <div id="hero">
      <CTASection></CTASection>
    </div>

    <div id="companies">
      <CompanySection></CompanySection>
    </div>


    <div id="stats" class="bg-indigo-200">
      <StatsSection></StatsSection>
    </div>

    <div id="pricing">
      <PricingSection></PricingSection>
    </div>
  </div>

</template>

<script>
import PricingSection from "@/components/home/PricingSection.vue";
import {toast} from "vue-sonner";
import Button from "@/components/ui/button/Button.vue";
import Sheet from "@/components/ui/sheet/Sheet.vue";
import SheetTrigger from "@/components/ui/sheet/SheetTrigger.vue";
import SheetContent from "@/components/ui/sheet/SheetContent.vue";
import SheetHeader from "@/components/ui/sheet/SheetHeader.vue";
import SheetTitle from "@/components/ui/sheet/SheetTitle.vue";
import SheetDescription from "@/components/ui/sheet/SheetDescription.vue";
import Input from "@/components/ui/input/Input.vue";
import TooltipProvider from "@/components/ui/tooltip/TooltipProvider.vue";
import Tooltip from "@/components/ui/tooltip/Tooltip.vue";
import TooltipTrigger from "@/components/ui/tooltip/TooltipTrigger.vue";
import TooltipContent from "@/components/ui/tooltip/TooltipContent.vue";
import CTASection from "@/components/home/CTASection.vue";
import StatsSection from "@/components/home/StatsSection.vue";
import CompanySection from "@/components/home/CompanySection.vue";

export default {
  name: "CalculatorView",
  methods: {toast},
  components: {
    CompanySection,
    StatsSection,
    CTASection,
    TooltipContent,
    TooltipTrigger,
    Tooltip,
    TooltipProvider,
    Input,
    SheetDescription, SheetTitle, SheetHeader, SheetContent, SheetTrigger, Sheet, Button, PricingSection},
}
</script>
