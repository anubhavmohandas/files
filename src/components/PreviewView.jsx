export default function PreviewView({ setCurrentView }) {
  return (
    <div className="min-h-screen p-6 flex items-center justify-center">
      <div className="bg-slate-800/50 backdrop-blur rounded-lg p-8 border border-slate-700/50 text-center">
        <h2 className="text-2xl font-bold text-slate-200 mb-4">Preview</h2>
        <p className="text-slate-400 mb-6">Component under construction...</p>
        <button 
          onClick={() => setCurrentView('landing')}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Back to Landing
        </button>
      </div>
    </div>
  );
}
