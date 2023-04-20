interface Props{
    title: string;
    description: string;
    btnText: string;
    className: string;
}

const BannerText = ({ title, description, btnText, className}: Props) => {
  return (
    <div className={className}>
        <h1 className="font-bold text-3xl">{title}</h1>
        <p className="text-sm loading-5">{description}</p>
        <button className="bg-white text-sm text-black font-senibold rounded-full w-24 h-8 border-[10x] border-black">{btnText}</button>
    </div>
  )
}

export default BannerText