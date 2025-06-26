import type { Message } from '@/types/message';

export default function Chat() {
  return (
    <div className="p-4 text-white">
      Right block

      <div className="space-y-4">
        { Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="p-2 bg-amber-800 rounded">
            Right content item {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
