export default function InputTab({ type, placeholder, onClick }) {
  return (
    <span
      class="cursor-pointer rounded-lg text-white  m-5 px-10 py-4 text-xl bg-blue-500 "
    >
      <input type={type} placeholder={placeholder} className="outline-none h-max w-max" />
    </span>
  );
}
