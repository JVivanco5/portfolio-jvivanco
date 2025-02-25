import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props
  const { title, image, urlGithub } = data

  return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl text-center">
        {title}
      </h3>
      <Image src={image} width={200} height={200} alt={title} className="w-full md:w-[200px] rounded-2xl h-auto" />

      <div className="flex gap-5 mt-5 justify-center">
        <Link href={urlGithub} target="_blank" className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:slate-500/80">
          Github
        </Link>
        {/* <Link href={urlDemo} target="_blank" className="p-2 transition duration-150 rounded-lg bg-secondary-500 hover:secondary-500/80">
          Descripción
        </Link> */}
      </div>

    </div>
  )
}
export default PortfolioBox