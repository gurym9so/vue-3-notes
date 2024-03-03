import { createStore } from "vuex";

export const store = createStore({
    state:{
        notes: [
            { title: "learn vue3", tags: ["work"]},
            { title: "finish course",tags: ["work", "home"]}
        ],
        tags: [
            {
              title: "home",
              isActive: false,
            },
            {
              title: "work",
              isActive: false,
            },
            {
              title: "travel",
              isActive: false,
            },
          ],
    },
    mutations:{
      handleRemoveMutation(state, index){
        state.notes.splice(index, 1);
      },
      handleSubmitMutation(state, title){
        const note = {
          title: title,
          tags: [],
        };
        state.notes.push(note);
      },
      handleTagClickMutation(state, tag){
        state.tags.isActive = !state.tags.isActive;
        state.tags.forEach((element) => {
          if (tag.title === element.title) {
            element.isActive = !element.isActive;
          }
        });
      }
    },
    actions:{
      handleRemove(context, index){
        context.commit('handleRemoveMutation', index)
      },
      handleSubmit(context, title){
        context.commit('handleSubmitMutation', title)
      },
      handleTagClick(context, tag){
        context.commit('handleTagClickMutation', tag)
      }
    },
    getters: {
        getAllNotes(state){
            return state.notes
        },
        getAllTags(state){
            return state.tags
        },
    }
})
