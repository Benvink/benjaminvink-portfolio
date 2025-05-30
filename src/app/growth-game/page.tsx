export default function GrowthGamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-emerald-950">
      <div className="container mx-auto p-4">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-4">Growth Marketing Mastery</h1>
          <p className="text-gray-300">Experience the reality of scaling a SaaS business</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <iframe 
            src="/growth-marketing-game.html" 
            width="100%" 
            height="900px"
            style={{ border: 'none', borderRadius: '15px' }}
            title="Growth Marketing Mastery Game"
          />
        </div>
      </div>
    </div>
  )
}
