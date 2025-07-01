
import { Star, Clock, User, Heart } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  sellerName: string;
  sellerAvatar: string;
  category: string;
  image: string;
  tags: string[];
}

const ServiceCard = ({
  title,
  description,
  price,
  rating,
  reviewCount,
  deliveryTime,
  sellerName,
  sellerAvatar,
  category,
  image,
  tags
}: ServiceCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="glass-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Category Badge */}
        <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white">
          {category}
        </Badge>
        
        {/* Like Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-2"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Seller Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={sellerAvatar}
            alt={sellerName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="text-sm font-medium text-gray-800">{sellerName}</div>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 text-yellow-500 fill-current" />
              <span className="text-xs text-gray-600">{rating} ({reviewCount})</span>
            </div>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-pastel-blue text-xs text-brand-blue rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{deliveryTime}</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Starting at</div>
            <div className="text-lg font-bold text-brand-blue">${price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
