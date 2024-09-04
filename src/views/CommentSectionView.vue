<template>
    <div>
        <h3>Komentar</h3>
        <div v-if="userLoggedIn">
            <textarea v-model="newComment" placeholder="Add a comment"></textarea>
            <button @click="submitComment" class="btn btn-primary">Kirim Komentar</button>
        </div>
        <div v-else>
            <p>Silakan <router-link to="/login">login</router-link> komen gaess.</p>
        </div>
        <ul>
            <li v-for="comment in comments" :key="comment.id">{{ comment }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['articleId'],
    data() {
        return {
            comments: [
                { id: 1, body: 'ini adalah comment pertama'},
                { id: 2, body: 'ini adalah comment kedua'},
            ],
            newComment: '',
            userLoggedIn: false

        };
    },
created() {
    this.checkLoginStatus();
},
methods: {
    submitComment() {
        if(this.newComment.trim() === '') return;
        const newComment = {
                id: this.comments.push(newComment),
                body: this.newComment 
            }
            this.comments.push(newComment);
            this.newComment = '';
        },
        checkLoginStatus () {
            
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.token) {
                this.userLoggedIn = true;
            } else { 
                this.userLoggedIn = false;
        }
    },
    }    
}

    
</script>