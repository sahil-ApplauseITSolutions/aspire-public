import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
    captcha: ''
  });
  
  const [captchaCode, setCaptchaCode] = useState('');
  const [errors, setErrors] = useState({});

  // Generate random captcha
  const generateCaptcha = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptchaCode(code);
  };

  useEffect(() => {
    if (isOpen) {
      generateCaptcha();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Phone number formatting - only allow digits
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length <= 10) {
        setFormData(prev => ({
          ...prev,
          [name]: digitsOnly
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };
    
    // Real-time validation on blur
    if (name === 'name' && value.trim()) {
      if (value.trim().length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
      } else if (!/^[a-zA-Z\s]+$/.test(value)) {
        newErrors.name = 'Name should only contain letters';
      } else {
        delete newErrors.name;
      }
    }
    
    if (name === 'email' && value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        delete newErrors.email;
      }
    }
    
    if (name === 'phone' && value.trim()) {
      const phoneDigits = value.replace(/\D/g, '');
      if (phoneDigits.length !== 10) {
        newErrors.phone = 'Phone number must be exactly 10 digits';
      } else if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
        newErrors.phone = 'Please enter a valid Indian mobile number';
      } else {
        delete newErrors.phone;
      }
    }
    
    if (name === 'enquiry' && value.trim()) {
      if (value.trim().length < 10) {
        newErrors.enquiry = 'Enquiry must be at least 10 characters';
      } else {
        delete newErrors.enquiry;
      }
    }
    
    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length !== 10) {
        newErrors.phone = 'Phone number must be exactly 10 digits';
      } else if (!/^[6-9]\d{9}$/.test(phoneDigits)) {
        newErrors.phone = 'Please enter a valid Indian mobile number';
      }
    }
    
    // Enquiry validation
    if (!formData.enquiry.trim()) {
      newErrors.enquiry = 'Enquiry is required';
    } else if (formData.enquiry.trim().length < 10) {
      newErrors.enquiry = 'Enquiry must be at least 10 characters';
    }
    
    // Captcha validation
    if (!formData.captcha.trim()) {
      newErrors.captcha = 'Captcha is required';
    } else if (formData.captcha !== captchaCode) {
      newErrors.captcha = 'Captcha is incorrect';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Add your form submission logic here
      alert('Enquiry submitted successfully!');
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        enquiry: '',
        captcha: ''
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your phone number"
                maxLength="10"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Enquiry Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Enquiry <span className="text-red-500">*</span>
              </label>
              <textarea
                name="enquiry"
                value={formData.enquiry}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about your enquiry..."
                rows="3"
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
              />
              {errors.enquiry && <p className="text-red-500 text-xs mt-1">{errors.enquiry}</p>}
            </div>

            {/* Captcha Field */}
            <div className="flex items-center gap-3">
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                placeholder="Enter captcha"
                className="flex-1 px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
              <div className="flex items-center gap-2 bg-gray-200 px-5 py-3 rounded-lg">
                <span className="text-xl font-bold text-gray-800 tracking-widest select-none" style={{ letterSpacing: '0.25em' }}>
                  {captchaCode}
                </span>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Refresh captcha"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>
            {errors.captcha && <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-base shadow-lg hover:shadow-xl mt-2"
            >
              Send Enquiry
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
