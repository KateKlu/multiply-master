type MenuButtonProps = {
   icon: string;
   text: string;
   bgColor: string;
   textColor?: string;
};

export default function MenuButton({
   icon,
   text,
   bgColor,
   textColor = '#FDF7CF',
}: MenuButtonProps) {
   return (
      <button
         className="w-full flex items-center justify-start gap-5 text-3xl font-extrabold px-5 py-1 rounded-3xl border-4 border-[#3D2604] shadow-md transition hover:opacity-80 cursor-pointer"
         style={{
            backgroundColor: bgColor,
            color: textColor,
            boxShadow: '0px 5px 0px #0467CE',
         }}
      >
         <img src={icon} alt={text} className="size-1/4" /> {text}
      </button>
   );
}
