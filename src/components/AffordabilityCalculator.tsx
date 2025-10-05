import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Calculator, Home, Percent, DollarSign } from 'lucide-react';

interface CalculatorResults {
  maxLoanAmount: number;
  monthlyRepayment: number;
  maxPropertyPrice: number;
  depositRequired: number;
  bondRegistrationCosts: number;
  transferDutyCosts: number;
  totalUpfrontCosts: number;
}

export function AffordabilityCalculator() {
  const [grossSalary, setGrossSalary] = useState('');
  const [interestRate, setInterestRate] = useState('11.75'); // Current prime rate in SA
  const [loanTerm, setLoanTerm] = useState('20');
  const [depositPercentage, setDepositPercentage] = useState('10');
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const calculateAffordability = () => {
    const monthlySalary = parseFloat(grossSalary);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const months = parseFloat(loanTerm) * 12;
    const deposit = parseFloat(depositPercentage) / 100;

    if (!monthlySalary || monthlySalary <= 0) return;

    // Maximum allowable bond repayment (typically 30% of gross income)
    const maxMonthlyRepayment = monthlySalary * 0.30;

    // Calculate maximum loan amount using PMT formula
    const maxLoanAmount = maxMonthlyRepayment * ((1 - Math.pow(1 + rate, -months)) / rate);

    // Calculate maximum property price
    const maxPropertyPrice = maxLoanAmount / (1 - deposit);

    // Calculate costs
    const depositRequired = maxPropertyPrice * deposit;
    
    // Bond registration costs (approximately 1% of loan amount)
    const bondRegistrationCosts = maxLoanAmount * 0.01;
    
    // Transfer duty costs for properties over R1.1m
    let transferDutyCosts = 0;
    if (maxPropertyPrice > 1100000) {
      transferDutyCosts = Math.min(
        (maxPropertyPrice - 1100000) * 0.05,
        maxPropertyPrice * 0.08
      );
    }
    
    // Total upfront costs
    const totalUpfrontCosts = depositRequired + bondRegistrationCosts + transferDutyCosts + 50000; // Including attorney fees, etc.

    setResults({
      maxLoanAmount,
      monthlyRepayment: maxMonthlyRepayment,
      maxPropertyPrice,
      depositRequired,
      bondRegistrationCosts,
      transferDutyCosts,
      totalUpfrontCosts
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-16 bg-background" id="affordability-calculator">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl lg:text-4xl">
            Home Affordability Calculator
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find out how much you can afford to spend on your dream home in Benoni or Boksburg. 
            Get an estimate of your maximum loan amount and monthly repayments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Calculate Your Budget
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="grossSalary">Gross Monthly Salary (R)</Label>
                <Input
                  id="grossSalary"
                  type="number"
                  placeholder="e.g., 45000"
                  value={grossSalary}
                  onChange={(e) => setGrossSalary(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Enter your total gross monthly income before deductions
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="interestRate">Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Current prime rate</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                  <Input
                    id="loanTerm"
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Typical: 20-30 years</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="depositPercentage">Deposit Percentage (%)</Label>
                <Input
                  id="depositPercentage"
                  type="number"
                  min="0"
                  max="100"
                  value={depositPercentage}
                  onChange={(e) => setDepositPercentage(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Minimum 10% required, but 20% gives better rates
                </p>
              </div>

              <Button onClick={calculateAffordability} className="w-full" disabled={!grossSalary}>
                <Calculator className="w-4 h-4 mr-2" />
                Calculate Affordability
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="w-5 h-5 text-primary" />
                Your Affordability Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-6">
                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <DollarSign className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Max Property Price</p>
                      <p className="text-xl text-primary">{formatCurrency(results.maxPropertyPrice)}</p>
                    </div>
                    
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <Percent className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Monthly Repayment</p>
                      <p className="text-xl">{formatCurrency(results.monthlyRepayment)}</p>
                    </div>
                  </div>

                  {/* Detailed Breakdown */}
                  <div className="space-y-3">
                    <h4 className="text-lg mb-3">Cost Breakdown</h4>
                    
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Loan Amount</span>
                      <span>{formatCurrency(results.maxLoanAmount)}</span>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Deposit Required</span>
                      <span>{formatCurrency(results.depositRequired)}</span>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Bond Registration</span>
                      <span>{formatCurrency(results.bondRegistrationCosts)}</span>
                    </div>
                    
                    {results.transferDutyCosts > 0 && (
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-muted-foreground">Transfer Duty</span>
                        <span>{formatCurrency(results.transferDutyCosts)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between py-2 pt-3 border-t-2">
                      <span className="font-medium">Total Upfront Costs</span>
                      <span className="font-medium">{formatCurrency(results.totalUpfrontCosts)}</span>
                    </div>
                  </div>

                  {/* Property Examples */}
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="mb-2">What You Can Buy in Benoni/Boksburg</h4>
                    <p className="text-sm text-muted-foreground">
                      Based on your budget of {formatCurrency(results.maxPropertyPrice)}, you could consider:
                    </p>
                    <ul className="mt-2 text-sm space-y-1">
                      {results.maxPropertyPrice >= 2500000 && (
                        <li>• 4-bedroom family homes in Benoni North or Boksburg East</li>
                      )}
                      {results.maxPropertyPrice >= 1500000 && (
                        <li>• 3-bedroom homes with gardens in Actonville or Cason</li>
                      )}
                      {results.maxPropertyPrice >= 800000 && (
                        <li>• 2-3 bedroom townhouses in Benoni Central or Boksburg</li>
                      )}
                      {results.maxPropertyPrice < 800000 && (
                        <li>• 2-bedroom apartments or smaller homes in various areas</li>
                      )}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter your salary details to see what you can afford</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> This calculator provides estimates only. Actual loan approval depends on credit score, 
            existing debt, employment history, and bank criteria. Contact me for personalized advice and pre-qualification assistance.
          </p>
        </div>
      </div>
    </section>
  );
}