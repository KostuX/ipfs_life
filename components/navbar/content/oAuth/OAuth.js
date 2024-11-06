import {
  GithubSignInButton,
  GoogleSignInButton,
} from "@/components/navbar/content/OAuth/authButtons";
export const OAuth = () => {
  return (
    <div className=" border-y-4 pb-6">
      <p className="text-xl">Login</p>
      <GoogleSignInButton />
      <GithubSignInButton />
    </div>
  );
};
