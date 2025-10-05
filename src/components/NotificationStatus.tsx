import { CheckCircle, Mail, Phone, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface NotificationStatusProps {
  emailSent: boolean;
  smsSent: boolean;
  isVisible: boolean;
}

export function NotificationStatus({ emailSent, smsSent, isVisible }: NotificationStatusProps) {
  if (!isVisible) return null;

  return (
    <Card className="w-full max-w-2xl mx-auto mt-6 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <h3 className="font-semibold text-green-800 dark:text-green-200">
            Your request has been submitted successfully!
          </h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Mail className={`w-4 h-4 ${emailSent ? 'text-green-600' : 'text-orange-500'}`} />
            <span className="text-gray-700 dark:text-gray-300">
              Email notification to agent: {emailSent ? '✅ Sent' : '⏳ Processing'}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Phone className={`w-4 h-4 ${smsSent ? 'text-green-600' : 'text-orange-500'}`} />
            <span className="text-gray-700 dark:text-gray-300">
              SMS alert to agent: {smsSent ? '✅ Sent' : '⏳ Processing'}
            </span>
          </div>
          
          <div className="flex items-start gap-3 text-sm bg-blue-50 dark:bg-blue-950 p-3 rounded-lg mt-4">
            <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div className="text-blue-800 dark:text-blue-200">
              <p className="font-medium">What happens next?</p>
              <p className="mt-1">I've been immediately notified of your interest. I'll review your requirements and contact you within the hour to discuss your perfect Benoni home search.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}