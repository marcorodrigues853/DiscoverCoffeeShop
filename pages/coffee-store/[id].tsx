import Link from 'next/link';
import { useRouter } from 'next/router';

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      <p>Coffee Store page {router.query.id}</p>
      <Link href='/'>Back to home</Link>
      <Link href='/coffee-store/two'>got o page dynamic</Link>
    </div>
  );
};

export default CoffeeStore;
