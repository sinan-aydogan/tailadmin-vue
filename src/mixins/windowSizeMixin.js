export const windowSize = {
    data(){
        return{
            windowWidth : window.innerWidth,
        }
    },
    created() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },

    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },

    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        }
    }
}