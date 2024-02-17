<script>
  import { ulid } from 'ulid';
  import { onMount } from 'svelte';
  import Note from '../../Note.svelte'

  onMount(() => {
    const storedNotes = localStorage.getItem('notes');
    notes = storedNotes ? JSON.parse(storedNotes) : [];
  });

  function addNote(e) {
    if (e.keyCode === 8) {
      return
    }

    notes = [...notes, {id: ulid(), content: ''}]
  }

  function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
  }

  function notesChanged() {
    if (notes) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }

  let notes
  $: notes, notesChanged()
</script>

<svelte:window on:keydown={addNote} />
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-screen min-h-screen p-8 select-none bg-red-100" on:dblclick={addNote}>
  <div class="flex flex-row-reverse flex-wrap-reverse">
    {#if notes}
    {#each notes as note}
      <div class="mx-auto">
        <Note 
          bind:note={note}
          on:delete={event => deleteNote(event.detail)}
        />
      </div>
    {/each}
    {/if}
  </div>
</div>