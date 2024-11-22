import { Button } from "@/components/ui/button";
import freeFeature from '../assets/planCard/freeFeature.svg';

const FreePlanCard = () => {
  const features = [
    'View basic information about companies and internship positions.',
    'Basic search by industry, location.',
    'Create and save 2 basic profiles.',
    'View up to 3 reviews from previous interns.',
    'Receive job notifications once a week.',
    'Basic chatbot advice for CVs and applications.'
  ];

  return (
    <div className="flex flex-col w-full max-w-sm mx-auto min-h-[400px] p-5 lg:p-8
                    justify-center items-start gap-6 md:gap-8
                    rounded-[10px] border border-[#9699DB]
                    bg-gradient-to-b from-[#EDEEFF] to-[#CACCFF]
                    shadow-[0px_4px_50px_0px_rgba(0,0,0,0.08)]">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#372ECE]">Freemium</h2>
      
      <div className="flex flex-col gap-4 sm:gap-6 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <img
              src={freeFeature}
              alt="check"
              className="w-4 sm:w-5 h-4 sm:h-5 mt-1 flex-shrink-0"
            />
            <span className="text-sm sm:text-base text-[#372ECE]/80 leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreePlanCard;
