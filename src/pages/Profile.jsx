import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import PaymentMethods from "@/components/PaymentMethods";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    fatherName: "",
    dob: "",
    shortNote: "",
    occupation: "",
    address: "",
    mobileNumber: "",
    gmail: "",
    gpsTracking: false,
  });

  const [preferences, setPreferences] = useState({
    notifyNewRides: false,
    notifyNewMessages: false,
    notifyPromotions: false,
    preferQuietRides: false,
    preferAirConditioned: false,
  });

  const [date, setDate] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSwitchChange = (checked) => {
    setProfileData((prevData) => ({
      ...prevData,
      gpsTracking: checked,
    }));
  };

  const handlePreferenceChange = (name) => (checked) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile data submitted:", profileData);
    console.log("Preferences submitted:", preferences);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center space-x-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button>Change Photo</Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fatherName">Father's Name</Label>
          <Input
            id="fatherName"
            name="fatherName"
            value={profileData.fatherName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => {
                  setDate(newDate);
                  setProfileData((prevData) => ({
                    ...prevData,
                    dob: newDate ? format(newDate, "yyyy-MM-dd") : "",
                  }));
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="shortNote">Short Note About You</Label>
          <Textarea
            id="shortNote"
            name="shortNote"
            value={profileData.shortNote}
            onChange={handleInputChange}
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input
            id="occupation"
            name="occupation"
            value={profileData.occupation}
            onChange={handleInputChange}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Textarea
            id="address"
            name="address"
            value={profileData.address}
            onChange={handleInputChange}
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobileNumber">Mobile Number</Label>
          <Input
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            value={profileData.mobileNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gmail">Gmail</Label>
          <Input
            id="gmail"
            name="gmail"
            type="email"
            value={profileData.gmail}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="gpsTracking"
            checked={profileData.gpsTracking}
            onCheckedChange={handleSwitchChange}
          />
          <Label htmlFor="gpsTracking">GPS Live Tracking Permission</Label>
        </div>

        <PaymentMethods />

        <div className="space-y-2">
          <Label>Verification ID</Label>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              Upload Driver License
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Upload UID
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Preferences</h2>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Push Notifications</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Switch
                  id="notifyNewRides"
                  checked={preferences.notifyNewRides}
                  onCheckedChange={handlePreferenceChange("notifyNewRides")}
                />
                <Label htmlFor="notifyNewRides">Notify me about new rides</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="notifyNewMessages"
                  checked={preferences.notifyNewMessages}
                  onCheckedChange={handlePreferenceChange("notifyNewMessages")}
                />
                <Label htmlFor="notifyNewMessages">Notify me about new messages</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="notifyPromotions"
                  checked={preferences.notifyPromotions}
                  onCheckedChange={handlePreferenceChange("notifyPromotions")}
                />
                <Label htmlFor="notifyPromotions">Notify me about promotions</Label>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Trip Preferences</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="preferQuietRides"
                  checked={preferences.preferQuietRides}
                  onCheckedChange={handlePreferenceChange("preferQuietRides")}
                />
                <Label htmlFor="preferQuietRides">I prefer quiet rides</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="preferAirConditioned"
                  checked={preferences.preferAirConditioned}
                  onCheckedChange={handlePreferenceChange("preferAirConditioned")}
                />
                <Label htmlFor="preferAirConditioned">I prefer air-conditioned rides</Label>
              </div>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full">Save Profile and Preferences</Button>
      </form>
    </div>
  );
};

export default Profile;