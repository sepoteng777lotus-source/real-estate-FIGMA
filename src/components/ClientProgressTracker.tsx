import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CheckCircle2, Clock, AlertCircle, Home, TrendingUp, Calendar, FileText, Key, DollarSign } from 'lucide-react';

interface ClientProgress {
  id: string;
  clientName: string;
  clientEmail: string;
  type: 'buying' | 'selling';
  currentStage: number;
  startDate: string;
  lastUpdate: string;
  propertyAddress?: string;
  notes: string;
  nextAction: string;
}

// Mock data - In production, this would come from Supabase
const mockClientData: ClientProgress[] = [
  {
    id: '1',
    clientName: 'John & Sarah Smith',
    clientEmail: 'john.smith@email.com',
    type: 'buying',
    currentStage: 3,
    startDate: '2024-01-15',
    lastUpdate: '2024-01-28',
    notes: 'Looking for 3-bedroom house in Benoni North, budget R1.2M',
    nextAction: 'Schedule property viewings for this weekend'
  },
  {
    id: '2',
    clientName: 'Maria Johnson',
    clientEmail: 'maria.j@email.com',
    type: 'selling',
    currentStage: 2,
    startDate: '2024-01-10',
    lastUpdate: '2024-01-25',
    propertyAddress: '15 Oak Street, Boksburg',
    notes: 'Townhouse, excellent condition, motivated seller',
    nextAction: 'Complete professional photography and create marketing materials'
  },
  {
    id: '3',
    clientName: 'David Williams',
    clientEmail: 'david.w@email.com',
    type: 'buying',
    currentStage: 5,
    startDate: '2023-12-01',
    lastUpdate: '2024-01-20',
    propertyAddress: '42 Pine Avenue, Benoni Central',
    notes: 'First-time buyer, pre-approved for R850k',
    nextAction: 'Await bond approval confirmation from bank'
  }
];

const buyingStages = [
  { id: 1, title: 'Initial Consultation', icon: <Home className="h-4 w-4" />, description: 'Understanding your needs and budget' },
  { id: 2, title: 'Pre-Approval', icon: <DollarSign className="h-4 w-4" />, description: 'Getting bond pre-approval' },
  { id: 3, title: 'Property Search', icon: <AlertCircle className="h-4 w-4" />, description: 'Finding suitable properties' },
  { id: 4, title: 'Property Viewings', icon: <Calendar className="h-4 w-4" />, description: 'Viewing shortlisted properties' },
  { id: 5, title: 'Offer Submitted', icon: <FileText className="h-4 w-4" />, description: 'Submitting offer to purchase' },
  { id: 6, title: 'Bond Application', icon: <DollarSign className="h-4 w-4" />, description: 'Formal bond application process' },
  { id: 7, title: 'Inspection & Due Diligence', icon: <AlertCircle className="h-4 w-4" />, description: 'Property inspection and checks' },
  { id: 8, title: 'Transfer Process', icon: <Key className="h-4 w-4" />, description: 'Attorneys handling transfer' },
  { id: 9, title: 'Keys Handed Over', icon: <CheckCircle2 className="h-4 w-4" />, description: 'Congratulations! You\'re a homeowner!' }
];

const sellingStages = [
  { id: 1, title: 'Property Evaluation', icon: <Home className="h-4 w-4" />, description: 'Market analysis and pricing strategy' },
  { id: 2, title: 'Mandate Signed', icon: <FileText className="h-4 w-4" />, description: 'Agreement signed, marketing begins' },
  { id: 3, title: 'Marketing Launch', icon: <TrendingUp className="h-4 w-4" />, description: 'Professional photos, online listings, showings' },
  { id: 4, title: 'Buyer Interest', icon: <AlertCircle className="h-4 w-4" />, description: 'Interested buyers and viewings' },
  { id: 5, title: 'Offer Received', icon: <DollarSign className="h-4 w-4" />, description: 'Negotiating offers with buyers' },
  { id: 6, title: 'Sale Agreement', icon: <CheckCircle2 className="h-4 w-4" />, description: 'Offer accepted, agreement signed' },
  { id: 7, title: 'Buyer Bond Process', icon: <Clock className="h-4 w-4" />, description: 'Buyer securing financing' },
  { id: 8, title: 'Transfer Process', icon: <Key className="h-4 w-4" />, description: 'Attorneys handling transfer' },
  { id: 9, title: 'Transfer Complete', icon: <CheckCircle2 className="h-4 w-4" />, description: 'Sale completed successfully!' }
];

export function ClientProgressTracker() {
  const [selectedClient, setSelectedClient] = useState<ClientProgress | null>(null);

  const getProgressPercentage = (currentStage: number, type: 'buying' | 'selling') => {
    const totalStages = type === 'buying' ? buyingStages.length : sellingStages.length;
    return Math.round((currentStage / totalStages) * 100);
  };

  const getStageStatus = (stageId: number, currentStage: number) => {
    if (stageId < currentStage) return 'completed';
    if (stageId === currentStage) return 'current';
    return 'upcoming';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'current': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="mr-2 h-4 w-4" />
            Client Progress Tracking
          </Badge>
          <h2 className="mb-6 text-3xl lg:text-4xl">
            Track Your Property Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Stay informed about every step of your buying or selling process. 
            Complete transparency from start to finish.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Client Overview</TabsTrigger>
            <TabsTrigger value="stages">Process Stages</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6">
              {mockClientData.map((client) => (
                <Card key={client.id} className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setSelectedClient(client)}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {client.type === 'buying' ? <Home className="h-5 w-5" /> : <TrendingUp className="h-5 w-5" />}
                          {client.clientName}
                        </CardTitle>
                        <CardDescription>
                          {client.type === 'buying' ? 'Buying Property' : 'Selling Property'} • 
                          Started {new Date(client.startDate).toLocaleDateString()}
                        </CardDescription>
                      </div>
                      <Badge variant={client.type === 'buying' ? 'default' : 'secondary'}>
                        {client.type === 'buying' ? 'Buyer' : 'Seller'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{getProgressPercentage(client.currentStage, client.type)}% Complete</span>
                        </div>
                        <Progress value={getProgressPercentage(client.currentStage, client.type)} className="h-2" />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Current Stage:</p>
                          <p className="font-medium">
                            {client.type === 'buying' 
                              ? buyingStages.find(s => s.id === client.currentStage)?.title
                              : sellingStages.find(s => s.id === client.currentStage)?.title
                            }
                          </p>
                        </div>
                        {client.propertyAddress && (
                          <div>
                            <p className="text-muted-foreground">Property:</p>
                            <p className="font-medium">{client.propertyAddress}</p>
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="text-muted-foreground text-sm">Next Action:</p>
                        <p className="text-sm">{client.nextAction}</p>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        Last updated: {new Date(client.lastUpdate).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedClient && (
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle>Detailed Progress - {selectedClient.clientName}</CardTitle>
                  <CardDescription>
                    {selectedClient.type === 'buying' ? 'Property Buying' : 'Property Selling'} Journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      {(selectedClient.type === 'buying' ? buyingStages : sellingStages).map((stage) => {
                        const status = getStageStatus(stage.id, selectedClient.currentStage);
                        return (
                          <div key={stage.id} className="flex items-start gap-4">
                            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(status)}`}>
                              {status === 'completed' ? <CheckCircle2 className="h-4 w-4" /> : 
                               status === 'current' ? <Clock className="h-4 w-4" /> :
                               stage.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className={`${status === 'current' ? 'font-semibold' : ''}`}>
                                {stage.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">{stage.description}</p>
                              {status === 'current' && (
                                <p className="text-sm text-blue-600 mt-1">Current: {selectedClient.nextAction}</p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h5 className="font-medium mb-2">Notes:</h5>
                      <p className="text-sm text-muted-foreground">{selectedClient.notes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="stages" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5" />
                    Property Buying Process
                  </CardTitle>
                  <CardDescription>9 stages from consultation to keys</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {buyingStages.map((stage, index) => (
                      <div key={stage.id} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium">{stage.title}</h4>
                          <p className="text-sm text-muted-foreground">{stage.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Property Selling Process
                  </CardTitle>
                  <CardDescription>9 stages from evaluation to transfer</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {sellingStages.map((stage, index) => (
                      <div key={stage.id} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium">{stage.title}</h4>
                          <p className="text-sm text-muted-foreground">{stage.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Client Access Information */}
        <Card className="mt-12 bg-muted/30">
          <CardHeader>
            <CardTitle>For My Clients</CardTitle>
            <CardDescription>How to track your progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Current Clients</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  If you're currently working with me, I'll provide you with a direct link to track your progress.
                </p>
                <ul className="text-sm space-y-1">
                  <li>• Real-time progress updates</li>
                  <li>• Next action items</li>
                  <li>• Document sharing</li>
                  <li>• Direct communication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Want This Service?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Start your property journey with complete transparency and regular updates.
                </p>
                <Button className="w-full">
                  Start Your Property Journey
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}