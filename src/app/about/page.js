async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
export default async function About() {
  await takeTime();
  throw new Error("Manual Error");
  return (
    <div>
      <h2>This is about page</h2>
    </div>
  );
}
