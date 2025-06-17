import { 
  House, AirVent, Wrench, Bolt, Bug, Trees, Building, Construction, Brush, Sofa, Wind, Fan, Cog,
  FlaskRound, Plug, Lamp, Lightbulb, ShowerHead, Gauge, Heater, Paintbrush, Camera, Bell, DoorClosed,
  Sprout, TreeDeciduous, LucideIcon, Scissors, Shield, Zap, Droplets, Hammer, Eye, Leaf, Trash2,
  Settings, Lock, Car, Briefcase, Smartphone, Wifi, Monitor, Router, Server, BedDouble, BugOff, Bird,
  Fridge, Shirt, Waves, LayoutGrid, Grid, Home, Layers, ShieldCheck
} from 'lucide-react';

interface ServiceIconProps {
  iconName: string;
  className?: string;
  size?: number;
}

// Reorganized icon map with categories for better maintainability
const iconCategories = {
  general: {
    house: House,
    building: Building,
    construction: Construction,
    wrench: Wrench,
    bolt: Bolt,
    cog: Cog,
    settings: Settings,
    shield: Shield,
    'shield-check': ShieldCheck,
    lock: Lock,
    camera: Camera,
    bell: Bell,
    eye: Eye,
    trash2: Trash2,
    home: Home,
    briefcase: Briefcase,
    car: Car,
  },
  serviceSpecific: {
    'ac-repair': AirVent,
    'air-vent': AirVent,
    plumbing: Wrench,
    electrical: Bolt,
    zap: Zap,
    'pest-control': Bug,
    bug: Bug,
    'bug-off': BugOff,
    bird: Bird,
    'bed-double': BedDouble,
    landscaping: Trees,
    sprout: Sprout,
    'tree-deciduous': TreeDeciduous,
    leaf: Leaf,
    scissors: Scissors,
    cleaning: Brush,
    brush: Brush,
    painting: Paintbrush, // The missing import is now fixed.
    paintbrush: Paintbrush,
    carpentry: Hammer,
    hammer: Hammer,
    networking: Wifi,
    'leak-detection': Waves,
    waves: Waves,
    'water-tank': Droplets,
    droplets: Droplets,
    sofa: Sofa,
    'carpet-cleaning': Layers,
    'appliance-repair': Cog,
    fridge: Fridge,
    'washing-machine': Shirt,
    'tile-installation': LayoutGrid,
    'layout-grid': LayoutGrid,
    'ceramic-installation': Grid,
  },
  tech: {
    smartphone: Smartphone,
    wifi: Wifi,
    monitor: Monitor,
    plug: Plug,
    lamp: Lamp,
    lightbulb: Lightbulb,
    router: Router,
    server: Server,
  },
  misc: {
    wind: Wind,
    fan: Fan,
    'flask-round': FlaskRound,
    'shower-head': ShowerHead,
    heater: Heater,
    gauge: Gauge,
    'door-closed': DoorClosed,
  }
};

// Combine all categories into a single map using a simpler spread syntax
const allIcons: Record<string, LucideIcon> = {
  ...iconCategories.general,
  ...iconCategories.serviceSpecific,
  ...iconCategories.tech,
  ...iconCategories.misc,
};

export default function ServiceIcon({ iconName, className = "", size = 24 }: ServiceIconProps) {
  const Icon = allIcons[iconName] || House; // Fallback to a default House icon
  
  return <Icon size={size} className={className} />;
}
