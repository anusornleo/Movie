<template>
  <div class="body_ton">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Logo Cinema</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <!-- <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search Movie"
            aria-label="Search"
          >
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="w3-content" style="max-width:100%">
      <img class="mySlides" src="img/starwar_banner.jpg">
      <img class="mySlides" src="img/miraclesfromheaven_banner.jpg">
      <img class="mySlides" src="img/ragamuffin.jpg">
    </div>
    <br>
    <br>
    <!--                         Movie List                        -->
    <!-- <div class="head-title">
        <h1 class="head-title-Text" id="pointer">&nbsp;&nbsp;&nbsp;ภาพยนตร์</h1>
        <hr>
    </div>-->
    <br>
    <div class="container">
      <div class="img-container">
        <img onclick="on()" class="movie-list" src="https://lh3.googleusercontent.com/8Nb17-RgjEf0rkZn36nDoUGaSuTBc59oSFfp2gP_gxmxpCrylzOWm2IZs8fyu8o-vALEQV8T_ixH_NuvRsD8tuitQMIX6c1Fqo7hllHaoQKDDccPE5ai4_ooZRyxaB083Z_VqAf2Cd3yDYxzrKC2Z-nCCSIjcMNFm4jdVkqESYi6c1siX2pxzApQ9TdHouZAj6ssUNiNBGPZpFFBBz8TFNxg9YPCEvj_O3YflzJj6OOTZyeXLGLN1lGnxn97H1l0cm1rijF41KwD_ramcJKV9yX80jsbzPbEj-EWe8dntDTYtJOlvmsz6nAM1_JSOBQmpa7QNPJ7AXAr86CEF_XEfPpLHeTnSW7BiW9Q_TLzFr-ylcpUjSLuZ7ux8-3KxkYOohdUbrQf200i3M0CaCf0SmWzAALCRnpAxaOJohLkX-cqBMFndUbfxItslqlM3edlV0Jj5I6HzhMI_PMV1PpBKlcELj5kq_ZVGXzkoL6TT1fqJ7bAjKvLCCcNu5EzDV0HKLSA8E3qfYwaNiynljV0dt2RozVD8dPXcN5CdsGm8fSKqz97Vrf8yJecduOfZhqL2KTgCZwvT0iuhdEqt-eQGFmsf3wsM-5Aq2V0N0chcIIjOfDdrI3ltfIXq0e_AESkRwGoVNdg1El-cA2_8lf9N7iIlpVQfls=w1920-h600-no" alt="Click to see review">
        <div class="detail-container">
          <button type="button" class="btn btn-outline-light">9.00AM.-11.30 AM.</button>
          <button type="button" class="btn btn-outline-light">12.10PM.-2.40 PM.</button>
          <button type="button" class="btn btn-outline-light">3.00PM.-5.30 PM.</button>
          <button type="button" class="btn btn-buy-ticket btn-light">Buy Ticket</button>
        </div>
        <div id="overlay" onclick="off()">
          <h3 id="text">Short Review:
            <p>&nbsp;&nbsp;&nbsp;This is Review Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, enim laboriosam quae impedit dolorum veritatis eveniet repellendus dolore tempore harum consequatur. Error, odio? Dolorum aliquam vel non molestiae, facilis eligendi?</p>
          </h3>
        </div>
      </div>
      <div class="img-container">
        <img onclick="on()" class="movie-list" src="img/thor_banner.jpg">
        <div class="detail-container">
          <button type="button" class="btn btn-outline-light">9.00AM.-11.30 AM.</button>
          <button type="button" class="btn btn-outline-light">12.10PM.-2.40 PM.</button>
          <button type="button" class="btn btn-outline-light">3.00PM.-5.30 PM.</button>
          <button type="button" class="btn btn-buy-ticket btn-light">Buy Ticket</button>
        </div>
        <div id="overlay" onclick="off()">
          <h3 id="text">Short Review:
            <p>This is Review</p>
          </h3>
        </div>
      </div>
      <div class="img-container">
        <img onclick="on()" class="movie-list" src="img/starwar_banner.jpg">
        <div class="detail-container">
          <button type="button" class="btn btn-outline-light">9.00AM.-11.30 AM.</button>
          <button type="button" class="btn btn-outline-light">12.10PM.-2.40 PM.</button>
          <button type="button" class="btn btn-outline-light">3.00PM.-5.30 PM.</button>
          <button type="button" class="btn btn-buy-ticket btn-light">Buy Ticket</button>
        </div>
        <div id="overlay" onclick="off()">
          <p id="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse eius, sit rerum sint
            voluptate cum
          </p>
        </div>
      </div>
      <div class="img-container">
        <img onclick="on()" class="movie-list" src="img/miraclesfromheaven_banner.jpg">
        <div class="detail-container">
          <button type="button" class="btn btn-outline-light">9.00AM.-11.30 AM.</button>
          <button type="button" class="btn btn-outline-light">12.10PM.-2.40 PM.</button>
          <button type="button" class="btn btn-outline-light">3.00PM.-5.30 PM.</button>
          <button type="button" class="btn btn-buy-ticket btn-light">Buy Ticket</button>
        </div>
        <div id="overlay" onclick="off()">
          <p id="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse eius, sit rerum sint
            voluptate cum
          </p>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.body_ton {
  font-family: "Hind Madurai", sans-serif;
  background-color: rgb(3, 3, 14);
  margin: 0px;
}

.w3-left,
.w3-right,
.w3-badge {
  cursor: pointer;
}

.w3-badge {
  height: 13px;
  width: 13px;
  padding: 0;
}

.mySlides {
  margin: 0px;
  width: 100%;
  height: 400px;
  display: none;
}

.w3-section,
.w3-code {
  margin-top: 0px;
  margin-bottom: 0px;
}

.container {
  width: 100em;
  margin-left: 12em;
  margin-right: 5em;
  margin-bottom: 0.5em;
  padding: 3em 7em 3em 7em;
  background-color: rgb(182, 182, 182);
  border-radius: 20px;
}

.img-container {
  position: relative;
  margin-bottom: 0px;
}

.movie-list {
  display: block;
  width: 100%;
  height: 26em;
  border: 5px solid black;
  border-bottom: 0px;
  border-radius: 15px 15px 0px 0px;
  margin-bottom: 0px;
}

.detail-container {
  height: 4em;
  margin-top: 0px;
  margin-bottom: 10px;
  background-color: rgb(32, 29, 29);
  border: 5px solid black;
  border-radius: 0px 0px 15px 15px;
  border-top: 0;
}

/* hr {
            margin-top: -2.11em;
            margin-left: 15%;
            width: 83%;
            border: 2px solid rgba(78, 78, 206, 0.493);
            border-radius: 5px;
        } */

/* pointer shape */
.head-title {
  display: -webkit-inline;
  margin-left: 4em;
}

.head-title-text {
  color: white;
  text-shadow: 0 0 30px rgb(3, 3, 14);
}

#pointer {
  width: 200px;
  height: 40px;
  position: relative;
  background: rgba(78, 78, 206, 0.493);
}

#pointer:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid rgb(3, 3, 14);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}

#pointer:before {
  content: "";
  position: absolute;
  right: -20px;
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 20px solid rgba(78, 78, 206, 0.493);
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
}

/* -------------------BTN---------------------- */
.btn {
  margin: 0.8em 0em 0.8em 1em;
}

.btn-buy-ticket {
  position: relative;
  z-index: 2;
  
}

/* ----------------Overlay--------------------- */
#overlay {
  position: absolute;
  /* Sit on top of the page content */
  display: none;
  /* Hidden by default */
  border-radius: 15px 15px 0px 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60;
  background-color: rgba(0, 0, 0, 0.8);
  /* Black background with opacity */
  z-index: 3;
  /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer;
  /* Add a pointer on hover */
}

#text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  color: white;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
</style>