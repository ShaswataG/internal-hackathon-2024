const servicesData = [
    {
        icon: "❤️", // You can replace this with an actual image/icon URL
        title: "Bed Booking",
        description: "Easily reserve hospital beds online for hassle-free inpatient care."
    },
    {
        icon: "🩺",
        title: "Online Booking for OPD",
        description: "Schedule outpatient department visits at your convenience."
    },
    {
        icon: "📝",
        title: "Online Reports",
        description: "Access medical test results and reports instantly from anywhere."
    },
    {
        icon: "📁",
        title: "Centralized Records",
        description: "Keep all patient data in one secure, unified system for seamless access."
    },
    {
        icon: "💊",
        title: "Pharmacy Automation",
        description: "Automated pharmacy streamlines stock and prescription management."
    },
    {
        icon: "➕",
        title: "And Many More",
        description: "Many additional services designed to simplify healthcare management."
    }
];

export default function Services() {
    return (
        <section className="services-section">
            <div className="services-header">
                <h2>Services</h2>
                <p>
                    The services we provide aim to make healthcare facilities more accessible and convenient for you, focusing on delivering timely and personalized care. We offer a range of solutions including online appointment scheduling, telemedicine consultations, and digital health monitoring to ensure you can connect with medical professionals from the comfort of your home.
                </p>
            </div>

            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};