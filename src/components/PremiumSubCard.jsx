import { Button } from "@/components/ui/button";
import premiumFeature from '../assets/planCard/premiumFeature.svg';

const PremiumSubCard = () => {
  const features = [
    'Access detailed information about the work environment and growth opportunities.',
    'Advanced filtering options for salary, growth opportunities.',
    'Create and save unlimited profiles.',
    'View all reviews and detailed company feedback.',
    'Daily priority notifications for relevant job postings.',
    'Personalized career counseling from experts based on your profile and goals.',
    'Unlimited access of study materials and CV templates'
  ];

  return (
    <div className="flex flex-col w-full max-w-lg mx-auto min-h-[500px] p-5 lg:p-10
                    justify-center items-start gap-6 md:gap-8
                    rounded-lg bg-gradient-to-b from-[#112396] to-[#3B53EC] shadow-lg">
      <h2 className="text-2xl font-semibold text-white">Premium</h2>

      <p className="text-3xl font-medium text-[#FFE492]">
        49k/month
      </p>

      <div className="flex flex-col gap-5">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <img
              src={premiumFeature}
              alt="check"
              className="w-5 h-5 mt-1 flex-shrink-0"
            />
            <span className="text-white text-sm leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button
        className="bg-[#FFE492] text-[#112396] hover:bg-[#FFE492]/90 mt-4"
      >
        Get's Start
      </Button>
    </div>
  );
};

export default PremiumSubCard;
