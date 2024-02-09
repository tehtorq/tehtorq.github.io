<script>
  import { onMount } from 'svelte';

  let amount = '';
  let payday = '';
  let dailySpend = '0.00';

  onMount(() => {
    amount = localStorage.getItem('amount') || '';
    payday = localStorage.getItem('payday') || '';
    calculateDailySpend();
  });

  function saveData() {
    localStorage.setItem('amount', amount);
    localStorage.setItem('payday', payday);
    calculateDailySpend(); // Recalculate daily spend when new data is saved
  }

  // Reactive statement to automatically recalculate dailySpend when amount or payday changes
  $: if (amount && payday) {
    calculateDailySpend();
  }

  function calculateDailySpend() {
    const today = new Date();
    let paydayDate = new Date(today.getFullYear(), today.getMonth(), payday);

    // If payday is in the past for this month, set it for next month
    if (paydayDate < today) {
      paydayDate = new Date(today.getFullYear(), today.getMonth() + 1, payday);
    }

    const diffTime = Math.abs(paydayDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (amount > 0 && diffDays > 0) {
      dailySpend = (amount / diffDays).toFixed(2); // Rounds to two decimal places
    } else {
      dailySpend = '0.00';
    }
  }
</script>

<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div>
    <div class="text-xl font-medium text-black">Daily spend until payday?</div>
    <div class="mt-4">
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Payday</label>
      <div class="mt-2">
        <input type="number" bind:value={payday} min="1" max="31" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>
    <div class="mt-4">
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Amount</label>
      <div class="mt-2">
        <input type="number" bind:value={amount} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
    </div>
    <p><button class="border-2 my-2" on:click={saveData}>Save</button></p>
    <p class="text-slate-500 mt-8">Daily Budget: R{dailySpend}</p>
  </div>
</div>