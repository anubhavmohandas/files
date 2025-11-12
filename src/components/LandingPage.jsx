import { AlertCircle, Check, X, Upload, FileText } from 'lucide-react';

export default function LandingPage({ showStorageWarning, setShowStorageWarning, setCurrentView, setCurrentStep, profile }) {
  const hasProfile = profile.personal.fullName && profile.personal.email;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {showStorageWarning && (
          <div className="mb-6 bg-slate-800/50 border border-blue-500/30 rounded-lg p-6 backdrop-blur">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Your Data Stays Private</h3>
                <div className="space-y-2 text-slate-300 text-sm">
                  <p className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />Stored locally in browser</p>
                  <p className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" />Nothing sent to servers</p>
                  <p className="flex items-center gap-2"><AlertCircle className="w-4 h-4 text-yellow-400" />Clearing cache deletes data</p>
                  <p className="text-blue-300 mt-3">💡 Export regularly to backup</p>
                </div>
              </div>
              <button onClick={() => setShowStorageWarning(false)} className="text-slate-400 hover:text-slate-300">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        <div className="bg-slate-800/50 backdrop-blur rounded-2xl shadow-2xl p-8 border border-slate-700/50">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              NYXINE
            </h1>
            <p className="text-xl text-slate-300">Smart Resume Builder</p>
            <p className="text-slate-400 mt-2">Enter once. Generate targeted resumes. Stay authentic.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/50 hover:border-blue-500/50 transition-colors">
              <Upload className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="text-lg font-semibold text-slate-200 mb-2">Upload Resume</h3>
              <p className="text-slate-400 text-sm mb-4">AI extracts your info</p>
              <button 
                onClick={() => alert('Resume upload coming soon! For now, please start fresh.')}
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Choose File
              </button>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/50 hover:border-purple-500/50 transition-colors">
              <FileText className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold text-slate-200 mb-2">Start Fresh</h3>
              <p className="text-slate-400 text-sm mb-4">Build step by step</p>
              <button 
                onClick={() => { setCurrentView('wizard'); setCurrentStep(0); }}
                className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                Begin
              </button>
            </div>
          </div>

          {hasProfile && (
            <div className="text-center pt-4 border-t border-slate-700">
              <button 
                onClick={() => setCurrentView('dashboard')}
                className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mx-auto transition-colors"
              >
                <FileText className="w-4 h-4" />
                Continue to Dashboard
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-6 text-slate-500 text-sm">
          <p>Open Source • Privacy First • AI-Powered</p>
        </div>
      </div>
    </div>
  );
}
