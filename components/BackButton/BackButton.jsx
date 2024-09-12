import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // This should trigger the back navigation
  };

  return <button onClick={handleBack}>Back</button>;
};

export default BackButton;
