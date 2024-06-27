import React from "react";
import { FiCheckCircle, FiList, FiCalendar } from "react-icons/fi";

const Feature = () => {
  return (
    <section className="bg-gray-900 text-white py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Features of Task Tracker
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FiCheckCircle className="text-white w-12 h-12" />}
            title="Effortless Task Management"
            description="Organize your tasks easily using our advanced task tracker system."
          />
          <FeatureCard
            icon={<FiList className="text-white w-12 h-12" />}
            title="Task Status Tracking"
            description="Track the status of your tasks seamlessly with real-time updates on pending and completed tasks."
          />
          <FeatureCard
            icon={<FiCalendar className="text-white w-12 h-12" />}
            title="Early Task Completion"
            description="Complete tasks ahead of schedule to ensure timely delivery and efficiency."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-purple-900 rounded-lg p-6 flex flex-col items-center justify-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default Feature;
