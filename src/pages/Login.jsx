import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone } from "lucide-react";

const Login = () => {
  const [userType, setUserType] = useState("rider");
  const [loginMethod, setLoginMethod] = useState("phone");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/signup logic here
    console.log("Login/Signup submitted", { userType, loginMethod });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">SharECar TriP</h1>
      <div className="w-full max-w-md space-y-4">
        <RadioGroup
          defaultValue="rider"
          onValueChange={setUserType}
          className="flex space-x-4 mb-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rider" id="rider" />
            <Label htmlFor="rider">Rider</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="driver" id="driver" />
            <Label htmlFor="driver">Driver</Label>
          </div>
        </RadioGroup>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Login Method</Label>
                <RadioGroup
                  defaultValue="phone"
                  onValueChange={setLoginMethod}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone" />
                    <Label htmlFor="phone">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="gmail" id="gmail" />
                    <Label htmlFor="gmail">Gmail</Label>
                  </div>
                </RadioGroup>
              </div>
              {loginMethod === "phone" ? (
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
              ) : (
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-phone">Phone Number</Label>
                <Input id="signup-phone" type="tel" placeholder="Enter your phone number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" placeholder="Create a password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" onClick={() => console.log("Phone login")}>
            <Phone className="mr-2 h-4 w-4" /> Phone
          </Button>
          <Button variant="outline" onClick={() => console.log("Gmail login")}>
            <Mail className="mr-2 h-4 w-4" /> Gmail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;