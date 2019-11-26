<template>
  <div class="container my-5">
    <h1 class="display-4 text-center">About</h1>
    
    <section>
      <h4 class="mt-5">The App</h4>
      <p class="lead py-2">As a self taught developer I spent a lot of time, in the beginning, trying to figure out what to learn! Unlike a university course, there existed no curriculum for self-studying devs at home. So after spending time researching I built my own.</p>

      <p class="lead py-2">I realised that many other prospective developers could potentially benefit from my research and get straight to learning. So I built this app to share my knowledge. I hope you find it useful!</p>

      <p class="lead py-2">Much love! And good luck with your studies!</p>
    </section>

    <section>
      <h4 class="mt-5 mb-3">Creator</h4>
      <p class="lead py-2">I'm Paul!</p>
      <p class="lead py-2">Check out my github and other links below!</p>
      <div className="list-group">
        <i className="fas fa-envelope fa-2x"></i>
        <span className="lead contact-info">greenpaulo@yahoo.co.uk</span>
      </div>
      <div className="list-group">
        <i className="fab fa-github fa-2x"></i>
        <a href='https://github.com/Greenpaulo' target="_blank" className="lead contact-info">https://github.com/Greenpaulo</a>
      </div>
    </section>

    <section>
      <h4 class="mt-5">Credit</h4>
      <p class="lead py-2">The Stages for this curriculum are based on Brad Traversy's yearly youtube video. Brad is a great teacher and I highly recommend his channel!</p>
      <a href="https://www.youtube.com/watch?v=UnTQVlqmDQ0" target="_blank" class="btn btn-info">Watch Brad's Video</a>
      <p><a href="https://thenounproject.com/search/?q=road&i=1141292" target="_blank">'Road'</a> icon by Bakunetsu Kaito from the Noun Project.</p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>

</style>