<template>
  <div>
    <div class="main_container">
      <div>
        <img
          class="cover_movie"
          src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/MLou2_Teaser_1-Sht_v6_Lg.jpg"
        >
        <div class="title_movie">Title Movie efwefwefwefewefwefwefwf</div>
        <div class="date_movie">Release Date: 00 January 0000</div>
        <div class="detail_movie">Director : firstname lastname</div>
        <div class="detail_movie">Genre: Animation | 105 Mins</div>
        <h1 class="syn">Synopsis</h1>
        <div>
          <p>The final movement in paragraph development involves tying up the loose ends of the paragraph and reminding the reader of the relevance of the information in this paragraph to the main or controlling idea of the paper. At this point, you can remind your reader about the relevance of the information that you just discussed in the paragraph. You might feel more comfortable, however, simply transitioning your reader to the next development in the next paragraph. Here’s an example of a sentence that completes the slave spirituals</p>
        </div>
        <div class="trailer">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hA6hldpSTF8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main_container {
  width: 1000px;
  margin: auto;
  margin-top: 100px;
}
.cover_movie {
  position: absolute;
  height: 400px;
}
.title_movie {
  padding-top: 25px;
  margin-left: 320px;
  font-size: 42px;
  position: relative;
}
.date_movie {
  top: 0px;
  margin: 14px 0 0 320px;
  font-size: 25px;
  position: relative;
  margin-bottom: 47px;
}
.detail_movie {
  top: 50px;
  margin: 14px 0 0 320px;
  font-size: 20px;
  position: relative;
}
.syn {
  margin: 130px 0 0 0;
}
p {
  margin: 30px 0 10px;
  font-size: 18px;
}
.trailer {
  margin: auto;
  padding-left: 190px;
  padding-top: 70px;
}
/* footer */
.footer-distributed {
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;

  padding: 55px 50px;
  margin-top: 80px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left {
  width: 40%;
}

/* The company logo */

.footer-distributed h3 {
  color: #ffffff;
  font: normal 36px "Cookie", cursive;
  margin: 0;
}

.footer-distributed h3 span {
  color: #5383d3;
}

/* Footer links */

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: #5383d3;
  text-decoration: none;
}

/* Footer Right */

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
}
</style>
