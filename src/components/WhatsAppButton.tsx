import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const phoneNumber = "27823146558"; // Your number in international format
  const message = "Hi! I'm interested in buying property in Benoni/Boksburg and would like to discuss my options.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <div className="mb-4 bg-white border border-green-200 rounded-lg shadow-lg p-4 max-w-xs transition-all duration-300 transform">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-medium text-sm">Need Quick Help?</h4>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-gray-600 mb-3">
            Get instant answers about Benoni/Boksburg properties via WhatsApp
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      )}
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Contact via WhatsApp"
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}