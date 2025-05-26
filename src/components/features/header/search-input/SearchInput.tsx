import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

export function SearchInput() {
  const [search, setSearch] = useState('');

  return (
	<div className='relative w-full max-w-lg'>
		<Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
		<Input
			type='text'
			placeholder='Buscar...'
			value={search}
			onChange={(e) => setSearch(e.target.value)}
			className='pl-9 pr-9 focus-visible:ring-1 focus-visible:ring-primary shadow-gray-950 h-[50px]'
        />
		{search && (
		<button
			onClick={() => setSearch('')}
			className='absolute right-[.5px] top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition cursor-pointer bg-gray-300 h-[96%] w-[40px] rounded-tr-[6px] rounded-br-[6px] rounded-tl-0 rounded-bl-0 flex items-center justify-center'
            >
			<X className='w-6 h-6' />
		</button>
        )}
	</div>
  );
}
