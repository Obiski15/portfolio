function Project() {
  return (
    <div className="space-y-6">
      <div>architectural diagram</div>

      <div className="flex gap-6">
        <div className="w-[10%] px-3 py-4">
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i}>{i}</p>
          ))}
        </div>

        <div className="w-[90%]"></div>
      </div>
    </div>
  )
}

export default Project
