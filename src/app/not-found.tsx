import { Container } from "@/components/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <Container className="h-screen max-w-standard flex flex-col items-center justify-center">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </Container>
    </main>
  );
}
