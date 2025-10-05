import Container from "./Container";
import GlowWrapper from "./GlowWrapper";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Starter",
      price: 5,
      features: [
        "5 Social Media Account",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
      highlighted: false, // ใช้บอกว่า plan ไหนเด่น (เอาไว้จัดสไตล์)
    },
    {
      id: 2,
      name: "Basic",
      price: 230,
      features: [
        "5 Social Media Account",
        "Free Platform Access",
        "Marketing Platform",
        "24/7 Customer Support",
        "Lifetime Support",
      ],
      highlighted: true, // ตัวนี้จะเน้น (เช่น ปุ่มสีฟ้า)
    },
    {
      id: 3,
      name: "Premium",
      price: 45,
      features: [
        "5 Social Media Account",
        "Free Platform Access",
        "24/7 Customer Support",
      ],
      highlighted: false,
    },
  ];

  return (
    <Container>
      <div className="space-y-5 text-center mt-40 mb-10">
        <p className="text-xl font-semibold text-indigo-600 uppercase">
          My Price plan
        </p>
        <h1 className="text-5xl font-bold">
          Enhancing Collaboration <br />
          between Remote
        </h1>
      </div>

      {/* card */}
      <div className="grid grid-cols-3 gap-6 items-start">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`${plan.highlighted ? "self-start" : "self-center"}`}
          >
            <GlowWrapper type="card">
              <div
                className={`relative bg-neutral-900 p-4 rounded-3xl transition-all duration-500 ${
                  plan.highlighted ? "scale-105" : ""
                }`}
              >
                {/* ชื่อและราคา */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <h2 className="text-5xl font-bold">${plan.price.toFixed(2)}</h2>
                  <p className="h1 text-white font-semibold">Per Month</p>
                </div>

                <hr className="border-white/5 my-8" />

                {/* รายการ features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-white/50"
                    >
                      <span className="text-indigo-500">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* ปุ่ม */}
                <button
                  className={`h1 w-fit px-6 py-3 rounded-full font-semibold transition duration-400 cursor-pointer ${
                    plan.highlighted
                      ? "bg-indigo-600 hover:bg-indigo-700"
                      : "border border-white/10 hover:bg-indigo-600"
                  }`}
                >
                  Get Started →
                </button>
              </div>
            </GlowWrapper>
          </div>
        ))}
      </div>
    </Container>
  );
};
export default Pricing;
