import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const PaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [newMethod, setNewMethod] = useState({
    type: "",
    details: "",
  });

  const handleAddMethod = () => {
    if (newMethod.type && newMethod.details) {
      setPaymentMethods([...paymentMethods, { ...newMethod, id: Date.now() }]);
      setNewMethod({ type: "", details: "" });
      toast.success("Payment method added successfully");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const handleDeleteMethod = (id) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
    toast.success("Payment method deleted successfully");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Methods</CardTitle>
        <CardDescription>Manage your payment methods here.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex justify-between items-center">
              <span>
                {method.type}: {method.details}
              </span>
              <Button variant="destructive" onClick={() => handleDeleteMethod(method.id)}>
                Delete
              </Button>
            </div>
          ))}
          <div className="space-y-2">
            <Select
              value={newMethod.type}
              onValueChange={(value) => setNewMethod({ ...newMethod, type: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="card">Card</SelectItem>
                <SelectItem value="upi">UPI</SelectItem>
                <SelectItem value="cash">Cash</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder={newMethod.type === "upi" ? "Enter UPI ID" : "Enter card details"}
              value={newMethod.details}
              onChange={(e) => setNewMethod({ ...newMethod, details: e.target.value })}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleAddMethod}>Add Payment Method</Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentMethods;