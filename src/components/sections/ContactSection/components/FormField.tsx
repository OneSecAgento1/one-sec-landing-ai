
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
  error?: string;
  as?: 'input' | 'textarea';
  rows?: number;
}

export const FormField = ({
  id,
  name,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  type = 'text',
  error,
  as = 'input',
  rows = 5
}: FormFieldProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1 text-left">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {as === 'input' ? (
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          className={error ? "border-red-500" : ""}
        />
      ) : (
        <Textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          required={required}
          className={error ? "border-red-500" : ""}
        />
      )}
      
      {error && <p className="text-red-500 text-xs mt-1 text-left">{error}</p>}
    </div>
  );
};
