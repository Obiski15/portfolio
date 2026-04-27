function LineCount({ length }: { length: number }) {
  return (
    <div className="text-muted-foreground">
      {Array.from(
        {
          length,
        },
        (_, i) => (
          <p key={i} className="pr-6 pl-4">
            {i}
          </p>
        ),
      )}
    </div>
  )
}

export default LineCount
