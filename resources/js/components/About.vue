<template>
    <div class="animated fadeIn">
        <div class="container my-5">
            <h1 class="display-4 text-center">About</h1>

            <section id="theApp" class="mb-5 pb-3">
                <h4 class="mt-5">The App</h4>
                <p class="py-2">
                    As a self taught developer I spent a lot of time, in the
                    beginning, trying to figure out what to learn. Unlike a
                    university course, there existed no curriculum for
                    self-studying devs at home. So after spending time
                    researching I built my own.
                </p>

                <p class="py-2">
                    I realised that many other prospective developers could
                    potentially benefit from my research and get straight to
                    learning. So I built this app to share my knowledge. I hope
                    you find it useful!
                </p>

                <p class="py-2">Much love, and good luck with your studies!</p>
            </section>

            <section id="creator" class="pb-4">
                <h4 class="mt-5">Creator</h4>
                <p class="py-2">I'm Paul Bingham</p>
                <p class="py-2">
                    Check out my Github profile and other links below:
                </p>
                <div class="icon-group">
                    <i class="fab fa-github fa-3x pr-3"></i>
                    <a
                        href="https://github.com/Greenpaulo"
                        target="_blank"
                        className="contact-info"
                        >https://github.com/Greenpaulo</a
                    >
                </div>
                <div class="icon-group">
                    <svg
                        id="logo"
                        data-name="logo"
                        viewBox="0 0 120 120"
                        class="pr-3"
                    >
                        <circle class="cls-1" cx="60" cy="60" r="50" />
                        <circle class="cls-2" cx="60" cy="60" r="57" />
                        <path
                            class="cls-3"
                            d="M123.83,113.19H137c7,0,10.13,4,10.13,9.2,0,6.15-3.78,9.57-10,9.57H127.8v12.51h-4Zm4,15.05h8.75c3.84,0,6.53-1.27,6.53-5.77,0-3.55-2.13-5.57-6.53-5.57H127.8Z"
                            transform="translate(-83.5 -80.5)"
                        />
                        <path
                            class="cls-3"
                            d="M143.29,136.88h14.28c6.36,0,9.67,2.83,9.67,7.45a6.37,6.37,0,0,1-4.81,6.32c2.68.72,6,2.63,6,7.2,0,5.93-4.89,8.68-10.64,8.68H143.29Zm13.23,12.23c4.27,0,6.34-1.53,6.34-4.4,0-3.41-2.74-4.43-6.18-4.43h-9.24v8.83Zm-9.08,14h9.43c3.5,0,7.15-1.06,7.15-5.28,0-3.56-2.81-5.35-7.55-5.35h-9Z"
                            transform="translate(-83.5 -80.5)"
                        />
                    </svg>
                    <a
                        href="https://paul-bingham.netlify.app/"
                        target="_blank"
                        className="contact-info"
                        >Portfolio</a
                    >
                </div>
                <div class="icon-group">
                    <i class="far fa-envelope fa-3x pr-3"></i>
                    <a href="mailto:greenpaulo@yahoo.co.uk" class="contact-info"
                        >greenpaulo@yahoo.co.uk</a
                    >
                </div>
            </section>

            <section id="credits" class="pb-5">
                <h4 class="mt-5">Credits</h4>
                <p class="py-2">
                    The Stages for this curriculum are based on Brad Traversy's
                    annual "Web Development" youtube video. Brad is a great
                    teacher and I highly recommend his channel!
                </p>
                <a
                    href="https://www.youtube.com/watch?v=0pThnRneDjw"
                    target="_blank"
                    class="btn btn-info"
                    >Watch Brad's Video</a
                >
                <div class="icons-svgs">
                    <h5 class="mt-4 py-3">Icons</h5>
                    <ul>
                        <li>
                            <a
                                href="https://thenounproject.com/search/?q=thought&i=1752082"
                                target="_blank"
                                >'Thought'</a
                            >
                            icon by Scott Dunlap from the Noun Project.
                        </li>
                        <li>
                            <a
                                href="https://thenounproject.com/search/?q=thought&i=1912229"
                                target="_blank"
                                >'Thought'</a
                            >
                            icon by Adrien Coquet from the Noun Project.
                        </li>
                        <li>
                            <a
                                href="https://thenounproject.com/search/?q=arrow&creator=127828&i=95077"
                                target="_blank"
                                >'Arrow'</a
                            >
                            icon by Sarah JOY from the Noun Project.
                        </li>
                        <li>
                            <a
                                href="https://thenounproject.com/search/?q=study&i=2773376"
                                target="_blank"
                                >'Study'</a
                            >
                            icon by Vectorstall from the Noun Project
                        </li>
                        <li>
                            <a
                                href="https://thenounproject.com/search/?q=job&i=2533034"
                                target="_blank"
                                >'Job'</a
                            >
                            icon by Flatart from the Noun Project.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "./Footer";
export default {
    name: "About",
    components: {
        Footer
    },
    mounted() {
        window.scrollTo(0, 0);
    }
};
</script>

<style lang="scss" scoped>
@import "./resources/sass/variables";
@import "./resources/sass/colors";

h4 {
    margin-bottom: 1.5rem;
}

p {
    color: darken(white, 15%);
    font-size: 1.3rem;
}

#theApp {
    border-bottom: 2px solid $stage1;
}

#creator {
    border-bottom: 2px solid $stage2;
    color: darken(white, 15%);

    a,
    span {
        text-decoration: none;
        color: darken(white, 15%);
        font-size: 1.2rem;

        &:hover {
            color: white;
        }
    }

    .icon-group {
        display: flex;
        padding: 1rem;
        align-items: center;
    }

    // SVG Logo

    #logo {
        height: 60px;
        width: 60px;
        position: relative;
        right: 1.5px;
    }

    .cls-1 {
        fill: #ef84ef;
    }

    .cls-2 {
        fill: none;
        stroke: #ef84ef;
        stroke-miterlimit: 10;
        stroke-width: 6px;
    }

    .cls-3 {
        fill: #fff;
    }
}

#credits {
    border-bottom: 2px solid $stage3;
    color: darken(white, 15%);

    h5 {
        font-size: 1.3rem !important;
    }
}

.fa-envelope {
    color: $stage4;
}

.fa-github {
    color: $stage5;
}

// Media queries
// Smartphones - larger
@media (max-width: 420px) {
    h4 {
        text-align: center;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.9rem;
    }

    #creator a {
        font-size: 1rem;
    }

    section {
        padding: 0 1rem 3rem 1rem;
    }

    a.btn {
        display: block;
        margin: auto;
    }
}

// Smartphones -smaller
@media (max-width: 320px) {
    #creator a,
    #creator span {
        font-size: 0.8rem;
    }
}
</style>
