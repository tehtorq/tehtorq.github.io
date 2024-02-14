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

    dailySpend = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR' }).format(dailySpend)
  }
</script>

<div class="w-screen min-h-screen bg-gradient-to-r from-blue-400 to-red-400 p-8">
  <div class="w-100 text-center p-8 rotate-6 transition ease-in-out delay-150 hover:-rotate-6">
    <span class="mx-auto italic leading-8 text-white text-6xl font-comic-sans drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">wotigot</span>
  </div>
  <div class="p-6 max-w-sm mx-auto bg-white/70 rounded-xl shadow-lg flex items-center space-x-4 border-2">
    <div class="mx-auto">
      <div class="text-xl font-medium text-black mt-4 mb-7">Daily spend until payday?</div>
      <div class="mt-4">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Payday</label>
        <div class="mt-2">
          <input type="number" bind:value={payday} min="1" max="31" required class="block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-md">
        </div>
      </div>
      <div class="mt-4">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Amount left</label>
        <div class="mt-2">
          <input type="number" bind:value={amount} required class="block w-full rounded-md border-0 p-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 drop-shadow-md">
        </div>
      </div>
      <div class="text-lg font-medium text-black mt-8">Daily Budget: {dailySpend}</div>
      <button class="border-0 my-6 p-4 w-full bg-white rounded-xl drop-shadow-md" on:click={saveData}>Save</button>
    </div>
  </div>
</div>