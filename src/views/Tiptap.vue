<template>
<div>
    <!-- <bubble-menu
        class="bubble-menu"
        :tippy-options="{ duration: 100 }"
        :editor="editor"
        v-if="editor"
        >
        <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            Bold
        </button>
        <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
            Italic
        </button>
        <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
            Strike
        </button>
        </bubble-menu> -->
    <floating-menu
      class="floating-menu"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
      v-if="editor"
    >
      <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        H1
      </button>
      <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        H2
      </button>
      <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        Bullet List
      </button>
    </floating-menu>
    <editor-content :editor="editor" />

</div>
    
</template>

<script>
import { Editor, EditorContent, FloatingMenu } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'

export default {
    components: {
        EditorContent,
        FloatingMenu
    },
    data(){
        return{
            editor:null,
        }
    },
    mounted() {
        this.editor = new Editor({
            content: '<p>I’m running tiptap with Vue.js. 🎉</p>',
            extensions: [
                StarterKit,
            ],
        })
    },

    beforeDestroy() {
        this.editor.destroy()
    },
}
</script>

<style scoped>
.floating-menu {
  display: flex;
  background-color: #0D0D0D10;
  padding: 0.2rem;
  border-radius: 0.5rem;
}
button {
    border: none;
    background: none;
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0 0.2rem;
    opacity: 0.6;
}
button :hover.is-active {
      opacity: 1;
    }
</style>