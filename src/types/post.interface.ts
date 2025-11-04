export interface Cards {
    title: string;
    children: React.ReactNode;
    variant?: 'blue' | 'cyan' | 'purple' | 'default';
    className?: string;
}