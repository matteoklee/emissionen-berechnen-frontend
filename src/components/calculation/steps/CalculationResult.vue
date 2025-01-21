<template>
  <div class="text-xs">
    <div class="px-8 my-4">
      {{this.footprintStore.formData.contactInfo}}
    </div>
    <div class="px-8 my-4">
      {{this.footprintStore.formData.hotelDetails}}
    </div>
    <div class="px-8 my-4">
      {{this.footprintStore.formData.configuration}}
    </div>
    <div class="px-8 my-4">
      {{this.footprintStore.formData.energyConsumptions}}
    </div>
    <div class="px-8 my-4">
      {{this.footprintStore.formData.renewableEnergyPurchases}}
    </div>
    <div class="px-8 my-4">
      {{this.footprintStore.formData.outsourcedLaundry}}
    </div>
    <div class="px-8 my-4">
      {{this.footprintStore.formData.refridgerants}}
    </div>
    <div class="px-8 my-4">
      {{this.footprintStore.formData.manualEmissionFactors}}
    </div>
    Result:
    <div class="px-8 my-4">
      {{result}}
    </div>
    <div class="px-8 my-4">
      {{this.footprintStore.result}}
    </div>
  </div>

  <Card class="w-full max-w-4xl mx-auto">
    <CardHeader>
      <CardTitle>Carbon Footprint Results</CardTitle>
      <CardDescription>Detailed breakdown of your hotel's environmental impact</CardDescription>
    </CardHeader>
    <CardContent>
      <Tabs default-value="carbon" class="w-full">
        <TabsList class="grid w-full grid-cols-3">
          <TabsTrigger value="carbon">Carbon Footprint</TabsTrigger>
          <TabsTrigger value="renewable">Renewable Energy</TabsTrigger>
          <TabsTrigger value="ghg">GHG Scopes</TabsTrigger>
        </TabsList>
        <TabsContent value="carbon">
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard title="Total CO2" :value="formatNumber(result.carbonFootprint.totalCO2)" unit="kg CO2e" />
            <MetricCard title="Guestroom Footprint" :value="formatNumber(result.carbonFootprint.guestroomFootprint)" unit="kg CO2e" />
            <MetricCard title="Meetings Footprint" :value="formatNumber(result.carbonFootprint.meetingsFootprint)" unit="kg CO2e" />
            <MetricCard title="Single Guestroom Footprint (per day)" :value="formatNumber(result.carbonFootprint.singleGuestroomFootprintPerDay)" unit="kg CO2e" />
            <MetricCard title="Meetings Footprint (per sqm per hour)" :value="formatNumber(result.carbonFootprint.meetingsFootprintPerSqmPerHour)" unit="kg CO2e" />
            <MetricCard title="Sqm Footprint" :value="formatNumber(result.carbonFootprint.sqmFootprint)" unit="kg CO2e" />
          </div>
        </TabsContent>
        <TabsContent value="renewable">
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <MetricCard title="Total Renewable Energy Used" :value="formatNumber(result.renewableEnergy.totalRenewableEnergyUsed)" unit="kWh" />
            <MetricCard title="Renewable Share of Electricity" :value="formatPercentage(result.renewableEnergy.totalRenewableShareOfElectricity)" unit="%" />
            <MetricCard title="Renewable Share of Energy" :value="formatPercentage(result.renewableEnergy.totalRenewableShareOfEnergy)" unit="%" />
          </div>
        </TabsContent>
        <TabsContent value="ghg">
          <div class="grid gap-4 md:grid-cols-3">
            <MetricCard title="Scope 1" :value="formatNumber(result.ghgScopes.scopeOne)" unit="kg CO2e" />
            <MetricCard title="Scope 2" :value="formatNumber(result.ghgScopes.scopeTwo)" unit="kg CO2e" />
            <MetricCard title="Scope 3" :value="formatNumber(result.ghgScopes.scopeThree)" unit="kg CO2e" />
          </div>
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>

</template>

<script>
import {useFootprintStore} from "@/stores/footprintStore.js";
import Card from "@/components/ui/card/Card.vue";
import CardHeader from "@/components/ui/card/CardHeader.vue";
import CardTitle from "@/components/ui/card/CardTitle.vue";
import CardDescription from "@/components/ui/card/CardDescription.vue";
import CardContent from "@/components/ui/card/CardContent.vue";

export default {
  name: "CalculationResult",
  components: {CardContent, CardDescription, CardTitle, CardHeader, Card},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
      result: this.footprintStore.result,
    }
  }
}
</script>

<style scoped>

</style>
