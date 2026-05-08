import Icon, { type IconName } from '@/components/ui/Icon';

const items: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: 'heart',
    title: 'Person-Centered Care',
    desc: 'Every plan built around the individual',
  },
  {
    icon: 'shield-check',
    title: 'Qualified Support Staff',
    desc: 'Professional, compassionate, dependable',
  },
  {
    icon: 'users',
    title: 'Community Integration',
    desc: 'Building independence and belonging',
  },
];

export default function ValuesStrip() {
  return (
    <section className="bg-primary-dark py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-6 divide-y divide-white/20 md:grid-cols-3 md:gap-0 md:divide-x md:divide-y-0">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-4 px-6 py-5">
              <div className="flex-shrink-0 rounded-2xl bg-white/10 p-4">
                <Icon name={item.icon} className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h4 className="font-lora text-lg font-bold text-white">{item.title}</h4>
                <p className="font-jakarta text-sm text-blue-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
