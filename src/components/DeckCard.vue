<template>
  <v-card
    class="deck move-up ma-0 pa-1 rounded-lg d-flex flex-column"
    :to="{ name: 'Deck', params: { deckId: deck.id } }"
  >
    <v-btn
      class="card-modify"
      icon="mdi-text-box-edit-outline"
      variant="tonal"
      color="blue-darken-3"
      :to="{ name: 'ModifyDeck', params: { deckId: deck.id } }"
    ></v-btn>

    <v-btn
      class="card-delete"
      icon="mdi-delete-outline"
      variant="tonal"
      color="red-darken-4"
      @click.prevent="deleteDeck(deck.id)"
    >
    </v-btn>

    <div class="d-flex justify-center">
      <v-img
        alt="img"
        max-width="150"
        height="150"
        cover
        :src="deck.imageUrl"
        :srcset="deck.imageUrl"
        class="rounded-circle"
      ></v-img>
    </div>

    <div class="deck-content px-2 flex-grow-1 mt-1">
      <div class="d-flex justify-space-between align-center mt-2">
        <v-card-title class="pa-0">{{ deck.name }}</v-card-title>
        <div class="text-white font-italic bg-green-accent-3 rounded-pill px-2">
          to review: 4
        </div>
      </div>

      <v-card-text class="pa-0">{{ deck.description }}</v-card-text>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { inject } from "vue";
import type { DeckCard } from "@/types";

defineProps<{ deck: DeckCard }>();
const deleteDeck = inject<(deckId: number) => Promise<void>>("deleteDeck")!;
</script>

<styled scoped lang="scss">
.deck {
  position: relative;
  transition: transform 0.1s ease;

  &-content {
    border-top: 1px solid;
    border-bottom: 1px solid;
  }
}
</styled>
