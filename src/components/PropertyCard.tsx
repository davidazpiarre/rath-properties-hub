import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  type: "Venta" | "Renta";
  beds: number;
  baths: number;
  area: string;
}

const PropertyCard = ({ image, title, location, price, type, beds, baths, area }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {type}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{area}</span>
          </div>
        </div>
        
        <div className="text-2xl font-bold text-primary">{price}</div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary-hover">
          Ver Detalles
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
