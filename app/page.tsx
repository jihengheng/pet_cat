import BookingForm from "./components/BookingForm";

const services = [
  {
    title: "基础洗护",
    text: "温和清洁、吹干梳理、耳眼护理、足底修剪，适合日常护理。",
    price: "¥128 起",
  },
  {
    title: "精致美容",
    text: "根据毛量、体型和性格定制造型，保留宠物可爱又舒适的状态。",
    price: "¥198 起",
  },
  {
    title: "猫咪专护",
    text: "低噪音独立房间、安抚式流程、减少应激，适合敏感猫咪。",
    price: "¥168 起",
  },
  {
    title: "皮毛养护",
    text: "针对掉毛、打结、干燥和敏感皮肤，提供护理浴与毛发修护。",
    price: "¥158 起",
  },
];

const steps = ["线上预约", "到店评估", "温和洗护", "护理反馈"];

const reviews = [
  "我家布偶胆子很小，第一次洗完全程很安静，回家还香香软软。",
  "店员会先看皮肤和毛结情况，价格透明，洗完还会发护理建议。",
  "小狗造型剪得很自然，不是夸张网红款，日常遛弯刚刚好。",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#home">
            Pawspa
          </a>
          <div className="navLinks">
            <a href="#services">服务</a>
            <a href="#pricing">价格</a>
            <a href="#booking">预约</a>
          </div>
        </nav>

        <div className="heroContent">
          <p className="eyebrow">猫狗洗护 · 美容造型 · 皮毛护理</p>
          <h1>让每一次洗护，都像被认真照顾的一天。</h1>
          <p className="heroText">
            Pawspa 为城市家庭提供安静、透明、低应激的宠物洗护体验。从进店评估到护理反馈，每一步都围绕宠物的舒适感设计。
          </p>
          <div className="heroActions">
            <a className="button primary" href="#booking">
              立即预约
            </a>
            <a className="button secondary" href="#services">
              查看服务
            </a>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="门店数据">
        <div>
          <strong>4.9/5</strong>
          <span>用户评分</span>
        </div>
        <div>
          <strong>30min</strong>
          <span>洗前评估</span>
        </div>
        <div>
          <strong>8+</strong>
          <span>专项护理</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>价格透明</span>
        </div>
      </section>

      <section className="section intro">
        <div>
          <p className="eyebrow dark">Care first</p>
          <h2>不只是洗干净，更重要的是洗得安心。</h2>
        </div>
        <p>
          我们把宠物洗护拆成可观察、可沟通、可复盘的流程：先看皮肤、毛结和情绪，再选择合适的水温、浴液和吹风方式。每只宠物都有自己的节奏，门店会配合它，而不是催促它。
        </p>
      </section>

      <section className="section serviceBand" id="services">
        <div className="sectionHeader">
          <p className="eyebrow dark">Services</p>
          <h2>按宠物状态选择服务</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <div className="cardTop">
                <h3>{service.title}</h3>
                <span>{service.price}</span>
              </div>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="feature">
        <div className="featureImage" role="img" aria-label="宠物洗护师正在为狗狗吹毛" />
        <div className="featureCopy">
          <p className="eyebrow dark">Gentle process</p>
          <h2>低噪音、少等待、可追踪的洗护流程。</h2>
          <div className="steps">
            {steps.map((step, index) => (
              <div className="step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="sectionHeader">
          <p className="eyebrow dark">Pricing</p>
          <h2>清楚的价格，灵活的加项</h2>
        </div>
        <div className="priceGrid">
          <article>
            <h3>日常护理</h3>
            <strong>¥128</strong>
            <p>适合短毛犬猫和定期护理宠物。</p>
          </article>
          <article className="featuredPrice">
            <h3>全套洗护</h3>
            <strong>¥198</strong>
            <p>包含洗护、基础修剪、护理检查和反馈。</p>
          </article>
          <article>
            <h3>定制造型</h3>
            <strong>¥268</strong>
            <p>适合长毛犬、造型犬和需要精剪的宠物。</p>
          </article>
        </div>
      </section>

      <section className="section reviews">
        <div className="sectionHeader">
          <p className="eyebrow dark">Reviews</p>
          <h2>来自宠物家长的真实反馈</h2>
        </div>
        <div className="reviewGrid">
          {reviews.map((review) => (
            <blockquote key={review}>{review}</blockquote>
          ))}
        </div>
      </section>

      <section className="booking" id="booking">
        <div>
          <p className="eyebrow">Book today</p>
          <h2>预约一次更轻松的洗护体验</h2>
          <p>留下宠物品种、体重和希望到店时间，护理顾问会在营业时间内确认档期。</p>
        </div>
        <BookingForm />
      </section>
    </main>
  );
}
