import Image from "next/image";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        src={"/images/profile.jpg"}
        width={200}
        height={200}
        alt="Profile Pic"
        priority={true}
        className="border-4 border-cyan-700 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      />
    </section>
  );
}
