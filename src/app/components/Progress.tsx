function Progress({ level }: { level: number }) {
  return (
    <div className="flex justify-between items-center gap-2">
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i + 1}
          className={`${
            i < level ? "bg-red-500" : "bg-red-500/50"
          } w-3 h-3 rounded-full`}
        ></div>
      ))}
    </div>
  );
}

export default Progress;
