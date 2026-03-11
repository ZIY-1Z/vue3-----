<template>
    <div class="container">
        <!-- 页眉 -->
      <div class="header">
            <div class="logo"><img src="../../assets/images/logo.png" width="266" height="79"></div>
            <div class="search-box">
                <input type="text" :placeholder="$t('common.search.placeholder')">
                <button>{{ $t('common.search.button') }}</button>
            </div>
        </div>


        <!-- 导航条 -->
        <div class="nav">
            <ul>
                <li><a href="#">{{ $t('common.nav.home') }}</a></li>
                <li><a href="/resource">{{ $t('common.nav.resource') }}</a></li>
                <li><a href="/history">{{ $t('common.nav.history') }}</a></li>
                <li><a href="/art">{{ $t('common.nav.art') }}</a></li>
                <li><a href="/aboutUs">{{ $t('common.nav.aboutUs') }}</a></li>
                <li><a href="/document">{{ $t('common.nav.document') }}</a></li>
            </ul>
        </div>

        <!-- Banner -->
        <div class="banner">
            <!-- 代码 开始 -->
            <div class="carousel-container" id="carousel-container">
                <img class="carousel-image" src="../../assets/images/111.png" alt="Image 1"> 
                <div class="carousel-arrow left" id="left-arrow">&#8249;</div>
                <div class="carousel-arrow right" id="right-arrow">&#8250;</div>
            </div>
            <!-- 代码 结束 -->
            <div class="banner-text">
                <h2>{{ $t('index.banner.title') }}</h2>
                <p>{{ $t('index.banner.subtitle') }}</p>
            </div>
        </div>

        <!-- 水平线 --><!-- 欢迎语 -->
        <div class="welcome">
            <h2>{{ $t('index.welcome.title') }}</h2>
            <p>{{ $t('index.welcome.content1') }}</p>
            <p>{{ $t('index.welcome.content2') }}</p>
        </div>

        <!-- 水平线 --><!-- 非遗文化介绍 -->
        <div class="heritage">
            <div class="heritage-content">
                <div class="heritage-image">
                  <img src="../../assets/images/11.png" :alt="$t('index.heritage.title')">
              </div>
                <div class="heritage-text">
                    <h2>{{ $t('index.heritage.title') }}</h2>
                    <p>{{ $t('index.heritage.content1') }}</p>
                    <p>{{ $t('index.heritage.content2') }}</p>
                    <p>{{ $t('index.heritage.content3') }}</p>
                </div>
            </div>
        </div>

        <!-- 水平线 -->
        <div class="divider"></div>

        <!-- 工艺流程 -->
        <div class="process">
            <h2>{{ $t('index.artForms.title') }}</h2>
            <div class="process-steps">
                <div class="step">
                    <img src="../../assets/images/1.png" :alt="$t('index.artForms.labor.title')">
                    <h3>{{ $t('index.artForms.labor.title') }}</h3>
                    <p>{{ $t('index.artForms.labor.desc') }}</p>
              </div>
                <div class="step">
                    <img src="../../assets/images/2.png" :alt="$t('index.artForms.love.title')">
                    <h3>{{ $t('index.artForms.love.title') }}</h3>
                    <p>{{ $t('index.artForms.love.desc') }}</p>
              </div>
                <div class="step">
                    <img src="../../assets/images/3.png" :alt="$t('index.artForms.ritual.title')">
                    <h3>{{ $t('index.artForms.ritual.title') }}</h3>
                    <p>{{ $t('index.artForms.ritual.desc') }}</p>
              </div>
                <div class="step">
                    <img src="../../assets/images/4.png" :alt="$t('index.artForms.narrative.title')">
                    <h3>{{ $t('index.artForms.narrative.title') }}</h3>
                    <p>{{ $t('index.artForms.narrative.desc') }}</p>
              </div>
            </div>
        </div>

        <!-- 水平线 -->
        <div class="divider"></div>

        <!-- 白瓷艺术 -->
        <div class="art">
            <h2>{{ $t('index.artWorks.title') }}</h2>
            <div class="art-grid">
                <div class="art-card">
                    <img src="../../assets/images/w1.png" :alt="$t('index.artWorks.works.0.title')">
                    <div class="art-card-content">
                    <h3>{{ $t('index.artWorks.works.0.title') }}</h3>
                        <p>   </p>
                    </div>
                </div>
                <div class="art-card">
                    <img src="../../assets/images/w2.png" :alt="$t('index.artWorks.works.1.title')">
                    <div class="art-card-content">
                    <h3>{{ $t('index.artWorks.works.1.title') }}</h3>
                        <p>    </p>
                    </div>
                </div>
                <div class="art-card">
                    <img src="../../assets/images/w3.png" :alt="$t('index.artWorks.works.2.title')">
                    <div class="art-card-content">
                    <h3>{{ $t('index.artWorks.works.2.title') }}</h3>
                        <p>     </p>
                    </div>
                </div>
                <div class="art-card">
                    <img src="../../assets/images/w5.png" :alt="$t('index.artWorks.works.3.title')">
                    <div class="art-card-content">
                    <h3>{{ $t('index.artWorks.works.3.title') }}</h3>
                        <p>    </p>
                    </div>
                </div>
                <div class="art-card">
                    <img src="../../assets/images/w6.png" :alt="$t('index.artWorks.works.4.title')">
                    <div class="art-card-content">
                    <h3>{{ $t('index.artWorks.works.4.title') }}</h3>
                        <p>   </p>
                    </div>
                </div>
                <div class="art-card">
                    <img src="../../assets/images/w4.png" :alt="$t('index.artWorks.works.5.title')">
                    <div class="art-card-content">
                    <h3>{{ $t('index.artWorks.works.5.title') }}</h3>
                        <p>    </p>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- 页脚 -->
        <div class="footer">
            <p>{{ $t('common.footer') }}</p>
        </div>
    </div>
</template>
<script>

</script>

<style scoped>


        .container {
            width: 1400px;
            margin: 0 auto;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        /* 页眉样式 */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px;
            background-color: #fff;
        }

        .logo {
            font-size: 42px;
            font-weight: bold;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
            color: #1a4780; /* 深蓝色 */
            height: 79px;
        }

        .search-box {
            display: flex;
            align-items: center;
        }

        .search-box input {
            padding: 12px 16px;
            border: 1px solid #ddd;
            border-radius: 8px;
            width: 250px;
            font-size: 16px;
        }

        .search-box button {
            padding: 12px 16px;
            background-color: #1a4780;
            color: white;
            border: none;
            border-radius: 8px;
            margin-left: 8px;
            cursor: pointer;
            font-weight: bold;
        }

        /* 导航条样式 */
        .nav {
            background-color: #1a4780;
            padding: 20px 0;
            text-align: center;
        }

        .nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
        }

        .nav li {
            margin: 0 20px;
        }

        .nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            padding: 12px 16px;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav a:hover {
            background-color: #2c6cb1;
            border-radius: 8px;
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .nav a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background-color: white;
            transition: all 0.3s ease;
        }

        .nav a:hover::after {
            width: 80%;
            left: 10%;
        }

        /* Banner样式 */
        .banner {
            position: relative;
            height: 500px;
            overflow: hidden;
        }

        .banner img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .banner-text {
            position: absolute;
            top: 45%;
            left: 45%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
        }

        .banner-text h2 {
            font-size: 48px;
            margin-bottom: 25px;
            animation: fadeInUp 1.5s ease;
        }

        .banner-text p {
            font-size: 22px;
            max-width: 800px;
            animation: fadeInUp 1.5s ease 0.3s forwards;
            opacity: 0;
        }

        /* 欢迎语样式 */
        .welcome {
            text-align: center;
            background-color: #f0f8ff;
            padding-top: 5px;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 5px;
        }

        .welcome h2 {
            color: #1a4780;
            margin-bottom: 30px;
            font-size: 36px;
        }

        .welcome p {
            max-width: 1000px;
            margin: 0 auto;
            line-height: 1.9;
            font-size: 18px;
        }

        /* 非遗文化介绍 */
        .heritage {
            background-color: #fff;
            padding-top: 10px;
            padding-right: 30px;
            padding-bottom: 10px;
            padding-left: 30px;
        }

        .heritage-content {
            display: flex;
            max-width: 1200px;
            margin: 0 auto;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        .heritage-image {
            flex: 1;
        }

        .heritage-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .heritage-text {
            flex: 1;
            padding: 40px;
            background-color: #f0f8ff;
        }

        .heritage-text h2 {
            color: #1a4780;
            margin-bottom: 30px;
            font-size: 36px;
        }

        .heritage-text p {
            line-height: 1.9;
            font-size: 18px;
            margin-bottom: 20px;
        }

        /* 工艺流程 */
        .process {
            padding: 60px 30px;
            background-color: #f0f8ff;
            text-align: center;
        }

        .process h2 {
            color: #1a4780;
            margin-bottom: 40px;
            font-size: 36px;
        }

        .process-steps {
            display: flex;
            justify-content: space-around;
            max-width: 1200px;
            margin: 0 auto;
        }

        .step {
            flex: 1;
            padding: 20px;
            margin: 0 15px;
        }

        .step img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .step h3 {
            color: #1a4780;
            margin-top: 20px;
            margin-bottom: 15px;
            font-size: 24px;
        }

        .step p {
            line-height: 1.6;
            font-size: 16px;
        }

        .popup {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }
            
        .popup-content {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 500px;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
            
        .close-btn {
            cursor: pointer;
            float: right;
            position: absolute;
            right: 10px;
            top: 0px;
            font-size: 32px;
        }

        /* 白瓷艺术 */
        .art {
            background-color: #fff;
            padding-top: 10px;
            padding-right: 30px;
            padding-bottom: 10px;
            padding-left: 30px;
        }

        .art h2 {
            text-align: center;
            color: #1a4780;
            margin-bottom: 40px;
            font-size: 36px;
        }

        .art-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .art-card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .art-card:hover {
            transform: translateY(-10px);
        }

        .art-card img {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }

        .art-card-content {
            padding: 25px;
        }

        .art-card h3 {
            color: #1a4780;
            margin-bottom: 15px;
            font-size: 24px;
        }

        .art-card p {
            line-height: 1.6;
            margin-bottom: 20px;
            font-size: 16px;
        }

        /* 水平线样式 */
        .divider {
            height: 1px;
            background-color: #ddd;
            margin: 40px 0;
        }

        /* 动画效果 */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* 页脚样式 */
        .footer {
            background-color: #1a4780;
            color: white;
            padding: 20px 30px;
            text-align: center;
        }


    .carousel-container {
        position: relative;
        width: 1400px;
        height: 500px;
        margin: 0 auto;
        overflow: hidden;
    }
  
  .carousel-image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: opacity 0.5s ease-in-out;
  }
  
  .carousel-image.active {
	opacity: 1;
  }
  
  .carousel-arrow {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 40px;
	height: 40px;
	background-color: rgba(0, 0, 0, 0.5);
	color: #fff;
	font-size: 24px;
	text-align: center;
	line-height: 40px;
	cursor: pointer;
  }
  
  .carousel-arrow.left {
	left: 10px;
  }
  
  .carousel-arrow.right {
	right: 10px;
  }


.banner1{
	width: 1400px;
	height: 500px;
	margin: 30px 0;
}
.banner1 img{
	width: 1400px;
	height: 500px;
	transition: all 0.6s;
	cursor: pointer;
}
.banner1 img:hover{
	transform: translateX(-6px);
}


        /* 关于我们样式 */
        .gywm-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 60px 30px;
            background-color: #fff;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .gywm-title {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
        }

        .gywm-title h2 {
            color: #1a4780;
            font-size: 42px;
            margin-bottom: 15px;
            display: inline-block;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .gywm-title h2::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 120px;
            height: 4px;
            background-color: #1a4780;
        }

        .gywm-title p {
            color: #666;
            font-size: 18px;
            max-width: 800px;
            margin: 0 auto;
        }

        .gywm-content {
            display: flex;
            gap: 40px;
            margin-bottom: 60px;
        }

        .gywm-about {
            flex: 1;
        }

        .gywm-about h3 {
            color: #1a4780;
            font-size: 28px;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }

        .gywm-about h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 3px;
            background-color: #1a4780;
        }

        .gywm-about p {
            color: #555;
            line-height: 1.8;
            margin-bottom: 20px;
            font-size: 16px;
        }

        .gywm-about-list {
            list-style: none;
            padding: 0;
            margin: 20px 0;
        }

        .gywm-about-list li {
            margin-bottom: 15px;
            padding-left: 25px;
            position: relative;
        }

        .gywm-about-list li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #1a4780;
            font-size: 20px;
        }

        .gywm-contact {
            flex: 1;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f0 100%);
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .gywm-contact h3 {
            color: #1a4780;
            font-size: 24px;
            margin-bottom: 25px;
            text-align: center;
        }

        .gywm-form-group {
            margin-bottom: 20px;
        }

        .gywm-form-group label {
            display: block;
            margin-bottom: 8px;
            color: #1a4780;
            font-weight: bold;
        }

        .gywm-form-group input,
        .gywm-form-group textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            transition: border-color 0.3s ease;
        }

        .gywm-form-group input:focus,
        .gywm-form-group textarea:focus {
            border-color: #1a4780;
            outline: none;
        }

        .gywm-form-group textarea {
            height: 150px;
            resize: vertical;
        }

        .gywm-submit-btn {
            display: block;
            width: 100%;
            padding: 12px;
            background: linear-gradient(90deg, #1a4780, #4a8fd6);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gywm-submit-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .gywm-gallery {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }

        .gywm-gallery-item {
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
        }

        .gywm-gallery-item:hover {
            transform: translateY(-5px);
        }

        .gywm-gallery-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .gywm-figcaption{
            text-align: center;
            line-height: 20px;
        }
</style>
