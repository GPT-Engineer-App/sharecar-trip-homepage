import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const PostRide = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState();
  const [seats, setSeats] = useState("");
  const [price, setPrice] = useState("");

  const handlePost = () => {
    // Mock post function
    console.log("Posting ride:", { currentLocation, destination, date: date ? format(date, "PPP") : "", seats, price });
    toast.success("Ride posted successfully!");
    // Reset form
    setCurrentLocation("");
    setDestination("");
    setDate(undefined);
    setSeats("");
    setPrice("");
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Post a Ride</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="currentLocation">Current Location</Label>
          <Input
            id="currentLocation"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
            placeholder="Enter current location"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
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
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="seats">Available Seats</Label>
          <Input
            id="seats"
            type="number"
            value={seats}
            onChange={(e) => setSeats(e.target.value)}
            placeholder="Enter number of available seats"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price per Seat</Label>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price per seat"
          />
        </div>
        <Button onClick={handlePost} className="w-full">Post Ride</Button>
      </div>
    </div>
  );
};

export default PostRide;