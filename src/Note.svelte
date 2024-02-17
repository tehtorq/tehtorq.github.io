<script>
  import { onMount, createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher();

  export let note
  let textarea

  function onKeyPress(e) {
    if (e.keyCode === 8) {
      if (note.content.length === 0) {
        textarea.blur()
        dispatch('delete', note.id);
      }
    }
  }

  onMount(() => {
    textarea.focus()
  })
</script>

<textarea bind:this={textarea} bind:value={note.content} on:keydown|stopPropagation={onKeyPress} on:dblclick|stopPropagation on:keypress|stopPropagation={onKeyPress} class="bg-amber-100 text-black shadow-lg border-2 text-center min-h-40 rounded-lg"/>
