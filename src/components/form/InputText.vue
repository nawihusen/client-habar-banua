<script setup>
import { computed, useAttrs } from 'vue'
import { useField } from 'vee-validate'

const attrs = useAttrs()

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  label: {
    default: '',
    type: String
  },
  type: {
    default: 'text',
    type: String
  },
  placeholder: {
    default: '',
    type: String
  },
  modelValue: {
    default: '',
    type: String
  },
  requiredSign: {
    default: false,
    type: Boolean
  },
  showLabel: Boolean
})

// eslint-disable-next-line vue/no-setup-props-destructure
const { errorMessage, setValue } = useField(attrs?.name ?? props.label)
const model = computed({
  get: () => {
    if (props.modelValue) setValue(props.modelValue)
    return props.modelValue
  },
  set: (v) => {
    setValue(v)
    emit('update:modelValue', v)
  }
})
</script>

<template>
  <div class="form-input">
    <label v-if="!showLabel" class="label"
      >{{ props.label }}<span class="text-red-600" v-if="requiredSign">*</span></label
    >
    <div>
      <input
        :type="props.text"
        class="input w-full dark:text-white"
        :placeholder="props.placeholder"
        v-model="model"
        :class="{
          'input-error': errorMessage,
          'input-focus': !errorMessage
        }"
      />
    </div>
    <span class="text-red-600">{{ errorMessage }}</span>
  </div>
</template>

<!-- v-bind="$attrs" -->
