<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="rounded-full mx-auto h-40 w-auto"
        src="~/assets/img/logo.svg"
        alt="Workflow"
      />
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <slot />
    </div>
  </div>
</template>
