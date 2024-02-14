import Link from 'next/link';

const LinkPageCard : React.FC<LinkPageCardProps> = ({name,url}) => {
  return (


<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 m-6">
        <h5 className="text-xl font-medium text-gray-900 mb-8 font-semibold">{name}</h5>
        <Link  href={url} rel="noopener noreferrer" target="_blank">
          <div className="w-full text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 cursor-pointer font-semibold">サイトリンク</div>
        </Link>
</div>

  );
}

interface LinkPageCardProps {
  name: string;
  url: string;
}

export default  LinkPageCard
