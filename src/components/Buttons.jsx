export default function Button({children,disable,onClick}){
return<span onClick={onClick} class={`cursor-pointer rounded-lg text-center   px-28 py-4 text-xl ${disable? "bg-blue-200" : "bg-green-200" } `}>
    {children}
</span>
}