<template>
  <div class="text-xs hidden">
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

  <div v-if="result !== null" class="w-full p-8">
    <Card class="w-full mb-8">
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

    <Card class="w-full">
      <CardHeader>
        <CardTitle>CO2-Fußabdruck Ergebnisse</CardTitle>
        <CardDescription>Detaillierte Aufschlüsselung der Umweltauswirkungen Ihres Hotels</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-8">
          <section class="">
            <h2 class="text-xl font-bold mb-4">Carbon Footprint</h2>
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <MetricCard title="Gesamt CO2" :value="formatNumber(result.carbonFootprint.totalCO2)" unit="kg CO2e" />
              <MetricCard title="Gästezimmer Footprint" :value="formatNumber(result.carbonFootprint.guestroomFootprint)" unit="kg CO2e" />
              <MetricCard title="Meeting Footprint" :value="formatNumber(result.carbonFootprint.meetingsFootprint)" unit="kg CO2e" />
              <MetricCard title="Einzelzimmer Footprint (pro Tag)" :value="formatNumber(result.carbonFootprint.singleGuestroomFootprintPerDay)" unit="kg CO2e" />
              <MetricCard title="Meeting Footprint (pro m² pro Stunde)" :value="formatNumber(result.carbonFootprint.meetingsFootprintPerSqmPerHour)" unit="kg CO2e" />
              <MetricCard title="m² Footprint" :value="formatNumber(result.carbonFootprint.sqmFootprint)" unit="kg CO2e" />
            </div>
          </section>

          <section class="">
            <h2 class="text-xl font-bold mb-4">Carbon Footprint</h2>
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <MetricCard title="Genutzte erneuerbare Energie" :value="formatNumber(result.renewableEnergy.totalRenewableEnergyUsed)" unit="kWh" />
              <MetricCard title="Anteil erneuerbarer Elektrizität" :value="formatPercentage(result.renewableEnergy.totalRenewableShareOfElectricity)" unit="%" />
              <MetricCard title="Anteil erneuerbarer Energie" :value="formatPercentage(result.renewableEnergy.totalRenewableShareOfEnergy)" unit="%" />
            </div>
          </section>

          <section class="">
            <h2 class="text-xl font-bold mb-4">GHG Scopes</h2>
            <div class="grid gap-4 md:grid-cols-3">
              <MetricCard title="Scope 1" :value="formatNumber(result.ghgScopes.scopeOne)" unit="kg CO2e" />
              <MetricCard title="Scope 2" :value="formatNumber(result.ghgScopes.scopeTwo)" unit="kg CO2e" />
              <MetricCard title="Scope 3" :value="formatNumber(result.ghgScopes.scopeThree)" unit="kg CO2e" />
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  </div>
  <div v-else class="w-full p-8">
    <p class="text-gray-700 text-md">Berechnung wurde noch nicht durchgeführt.</p>
  </div>

</template>

<script>
import {useFootprintStore} from "@/stores/footprintStore.js";
import Card from "@/components/ui/card/Card.vue";
import CardHeader from "@/components/ui/card/CardHeader.vue";
import CardTitle from "@/components/ui/card/CardTitle.vue";
import CardDescription from "@/components/ui/card/CardDescription.vue";
import CardContent from "@/components/ui/card/CardContent.vue";
import Tabs from "@/components/ui/tabs/Tabs.vue";
import TabsList from "@/components/ui/tabs/TabsList.vue";
import TabsTrigger from "@/components/ui/tabs/TabsTrigger.vue";
import TabsContent from "@/components/ui/tabs/TabsContent.vue";
import MetricCard from "@/components/calculation/steps/result/MetricCard.vue";

export default {
  name: "CalculationResult",
  components: {
    MetricCard,
    TabsContent, TabsTrigger, TabsList, Tabs, CardContent, CardDescription, CardTitle, CardHeader, Card},
  setup() {
    const footprintStore = useFootprintStore();
    return {
      footprintStore
    };
  },
  data() {
    return {
    }
  },
  computed: {
    result() {
      return this.footprintStore.result;
    }
  },
  methods: {
    formatNumber(value) {
      return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formatPercentage(value) {
      return (value * 100).toFixed(4);
    },

  }
}
</script>

<style scoped>

</style>
