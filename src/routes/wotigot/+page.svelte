<script>
  import { onMount } from 'svelte';

  let amount = '';
  let payday = '';
  let dailySpend = '';

  onMount(() => {
    amount = localStorage.getItem('amount') || '';
    payday = parseInt(localStorage.getItem('payday'), 10) || '';
    calculateDailySpend(); // Calculate daily spend when the component mounts
  });

  function saveData() {
    localStorage.setItem('amount', amount);
    localStorage.setItem('payday', payday);
    calculateDailySpend(); // Recalculate daily spend when new data is saved
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

<p>Amount<input type="number" bind:value={amount} /></p>
<p>Payday<input type="number" bind:value={payday} min="1" max="31" /></p>
<p><button on:click={saveData}>Save</button></p>
<p>Daily Budget: R {dailySpend}</p>
