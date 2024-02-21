<script>
  import { ulid } from 'ulid';
  import { onMount } from 'svelte';
  import Note from '../../Note.svelte'

  let autofocus = ''

  onMount(() => {
    const storedNotes = localStorage.getItem('notes');
    notes = storedNotes ? JSON.parse(storedNotes) : [];

    if ((notes.length === 0) || ((notes.length > 0) && (notes[0].content !== ''))) {
      const note_id = ulid()
      notes = [{id: note_id, content: ''}, ...notes]
    }
  });

  function addNote(e) {
    if (e.keyCode === 8) {
      return
    }

    const note_id = ulid()
    autofocus = note_id
    notes = [{id: note_id, content: ''}, ...notes]
  }

  function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
  }

  function notesChanged() {
    if (notes) {
      if ((notes.length === 0) || ((notes.length > 0) && (notes[0].content !== ''))) {
        const note_id = ulid()
        notes = [{id: note_id, content: ''}, ...notes]
      }
      
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }

  let notes
  $: notes, notesChanged()
</script>

<svelte:window on:keydown={addNote} />
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-screen min-h-screen select-none bg-red-100" on:dblclick={addNote}>
  <div class="w-100 text-center p-8 rotate-6 transition ease-in-out delay-150 hover:-rotate-6">
    <span class="mx-auto italic leading-8 text-black text-6xl font-comic-sans drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">wotisay</span>
  </div>
  <div class="sm:rows-2 md:rows-3 lg:rows-4 xl:rows-5 text-center">
    {#if notes}
    {#each notes as note (note.id)}
      <Note 
        bind:note={note}
        on:delete={event => deleteNote(event.detail)}
        autofocus={note.id === autofocus}
      />
    {/each}
    {/if}
  </div>
</div>