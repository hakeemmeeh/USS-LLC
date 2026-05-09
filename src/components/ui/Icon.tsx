import {
  Home,
  HeartHandshake,
  UserCheck,
  Sparkles,
  RefreshCw,
  Users,
  ShieldCheck,
  CheckCircle,
  UserCircle,
  MapPin,
  Building2,
  Handshake,
  Heart,
  Phone,
  Mail,
  Calendar,
  ArrowRight,
  Star,
  Check,
  Menu,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Award,
  Plus,
  type LucideProps,
} from 'lucide-react';

const map = {
  home: Home,
  'heart-handshake': HeartHandshake,
  'user-check': UserCheck,
  sparkles: Sparkles,
  'refresh-cw': RefreshCw,
  users: Users,
  'shield-check': ShieldCheck,
  'check-circle': CheckCircle,
  'user-circle': UserCircle,
  'map-pin': MapPin,
  'building-2': Building2,
  handshake: Handshake,
  heart: Heart,
  phone: Phone,
  mail: Mail,
  calendar: Calendar,
  'arrow-right': ArrowRight,
  star: Star,
  check: Check,
  menu: Menu,
  x: X,
  'chevron-down': ChevronDown,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  award: Award,
  plus: Plus,
} as const;

export type IconName = keyof typeof map;

type Props = LucideProps & { name: IconName };

export default function Icon({ name, ...rest }: Props) {
  const Cmp = map[name];
  if (!Cmp) return null;
  return <Cmp {...rest} />;
}
