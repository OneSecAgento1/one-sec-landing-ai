
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ContactSuccessMessageProps {
  onReset: () => void;
}

const ContactSuccessMessage = ({ onReset }: ContactSuccessMessageProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
        <Check size={32} className="text-green-500" />
      </div>
      <h4 className="text-xl font-bold mb-2">Message sent!</h4>
      <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
        Thank you for contacting us. A member of our team will respond
        as soon as possible.
      </p>
      <Button className="mt-6" onClick={onReset}>
        Send another message
      </Button>
    </div>
  );
};

export default ContactSuccessMessage;
