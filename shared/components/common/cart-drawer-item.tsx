interface Props {
  className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex items-center gap-4', className)}>
    </div>
  );
};