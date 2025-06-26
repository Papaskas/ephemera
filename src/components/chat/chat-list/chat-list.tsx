export default function ChatList() {
  return (
    <div className="scrollbar-thumb-sky-700 scrollbar-track-sky-300 scrollbar-thin overflow-y-scroll">
      <div className="p-4">
        <div className="space-y-4">
          { Array.from({ length: 50 }, (_, i) => (
            <div key={ i } className="p-2 bg-amber-100 rounded">
              Left content item { i + 1 }
            </div>
          )) }
        </div>
      </div>
    </div>
  )
}
