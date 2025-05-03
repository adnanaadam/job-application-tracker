import { CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function BillingSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          <span>Billing</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm font-medium">Current Plan</p>
          <p className="text-sm text-muted-foreground">Free Plan</p>
          <Button variant="outline" className="mt-4 w-full">
            Upgrade Plan
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}