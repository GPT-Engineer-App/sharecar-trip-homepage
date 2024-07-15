import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const SearchRides = () => {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState();
  const [persons, setPersons] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Mock search function
    const mockResults = [
      { id: 1, from: currentLocation, to: destination, date: date ? format(date, "PPP") : "", seats: 3, price: 25 },
      { id: 2, from: currentLocation, to: destination, date: date ? format(date, "PPP") : "", seats: 2, price: 30 },
    ];
    setSearchResults(mockResults);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Search Rides</h1>
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
          <Label htmlFor="persons">Number of Persons</Label>
          <Input
            id="persons"
            type="number"
            value={persons}
            onChange={(e) => setPersons(e.target.value)}
            placeholder="Enter number of persons"
          />
        </div>
        <Button onClick={handleSearch} className="w-full">Search Rides</Button>
      </div>

      {searchResults.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          <div className="space-y-4">
            {searchResults.map((ride) => (
              <div key={ride.id} className="border p-4 rounded-lg">
                <p><strong>From:</strong> {ride.from}</p>
                <p><strong>To:</strong> {ride.to}</p>
                <p><strong>Date:</strong> {ride.date}</p>
                <p><strong>Available Seats:</strong> {ride.seats}</p>
                <p><strong>Price per Seat:</strong> ${ride.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchRides;