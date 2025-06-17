import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Define the shape of a single testimonial for type safety and clarity
interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  serviceId: string;
  city: string;
  date: string;
}

// The component now only needs the testimonials array to render.
interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  // If no testimonials are provided, the component renders nothing.
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          آراء العملاء
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-yellow-400 ml-2 font-semibold">
                    {testimonial.rating}/5
                  </span>
                </div>
                
                <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                  {testimonial.comment}
                </p>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white font-semibold">{testimonial.name}</span>
                  <span className="text-blue-300">{testimonial.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
