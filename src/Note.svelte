<script>
  import { onMount, createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher();

  export let note = ''
  export let autofocus = false
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
    autofocus && textarea.focus()
  })
</script>

<textarea placeholder="Add a note..." bind:this={textarea} bind:value={note.content} on:keydown|stopPropagation={onKeyPress} on:dblclick|stopPropagation on:keypress|stopPropagation={onKeyPress} class="bg-amber-100 text-black shadow-lg border-2 min-h-40 w-80 rounded-lg my-2 mx-2"/>
