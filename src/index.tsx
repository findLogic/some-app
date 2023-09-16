import { createRoot } from 'react-dom/client';

function MyButton({ title }: { title: string }) {
    return <button>{title}</button>;
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<MyButton title={'123'} />);
