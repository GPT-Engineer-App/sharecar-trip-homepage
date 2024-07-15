import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import CancellationModal from "@/components/CancellationModal";

const Index = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState();
  const [persons, setPersons] = useState("");
  const [isCancellationModalOpen, setIsCancellationModalOpen] = useState(false);

  const handleSearch = () => {
    console.log({
      currentLocation,
      destination,
      date: date ? format(date, "PPP") : "",
      persons,
    });
  };

  const handleCancelRide = () => {
    setIsCancellationModalOpen(true);
  };

  const handleCancellationSubmit = (reason) => {
    console.log("Ride cancelled. Reason:", reason);
    // Here you would typically send the cancellation reason to your backend
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6">SharECar TriP</h1>
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="currentLocation">Current Location</Label>
          <Input
            id="currentLocation"
            placeholder="Enter Current Location"
            value={currentLocation}
            onChange={(e) => setCurrentLocation(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="destination">Destination</Label>
          <Input
            id="destination"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date & Time</Label>
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
          <Label htmlFor="persons">Number of Persons</Label>
          <Input
            id="persons"
            type="number"
            placeholder="Number of Persons"
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
          />
        </div>
        <Button className="w-full" onClick={handleSearch}>
          Search
        </Button>
        <Button className="w-full" variant="destructive" onClick={handleCancelRide}>
          Cancel Ride
        </Button>
      </div>

      <CancellationModal
        isOpen={isCancellationModalOpen}
        onClose={() => setIsCancellationModalOpen(false)}
        onSubmit={handleCancellationSubmit}
      />
    </div>
  );
};

export default Index;