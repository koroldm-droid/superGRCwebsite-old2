import { useState } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function GitHubFileFixer() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);

  const fixAllFiles = async () => {
    setLoading(true);
    setStatus('Starting GitHub file updates...');
    setResults([]);

    // Read the correct content from local files
    const filesToUpdate = [
      {
        path: 'components/MarketingAbout.tsx',
        content: await fetch('/components/MarketingAbout.tsx').then(r => r.text()),
        message: 'Fix: Remove figma:asset import from MarketingAbout.tsx'
      },
      {
        path: 'components/MarketingHero.tsx',
        content: await fetch('/components/MarketingHero.tsx').then(r => r.text()),
        message: 'Fix: Remove figma:asset imports from MarketingHero.tsx'
      },
      {
        path: 'components/MarketingNav.tsx',
        content: await fetch('/components/MarketingNav.tsx').then(r => r.text()),
        message: 'Fix: Remove figma:asset import from MarketingNav.tsx'
      },
      {
        path: 'components/OGImageGenerator.tsx',
        content: await fetch('/components/OGImageGenerator.tsx').then(r => r.text()),
        message: 'Fix: Remove figma:asset import from OGImageGenerator.tsx'
      }
    ];

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-101a5808/github/update`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ files: filesToUpdate }),
        }
      );

      const data = await response.json();
      
      if (response.ok) {
        setResults(data.results);
        const successCount = data.results.filter((r: any) => r.success).length;
        setStatus(`✅ Success! Updated ${successCount}/${filesToUpdate.length} files on GitHub`);
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (error: any) {
      setStatus(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#151719] flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl mb-6 text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
          🔧 GitHub File Fixer
        </h1>
        
        <p className="text-[#151719]/70 mb-6" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
          This will update all 4 component files on GitHub to remove figma:asset imports.
        </p>

        <button
          onClick={fixAllFiles}
          disabled={loading}
          className="w-full px-6 py-4 bg-[#CFE928] text-[#151719] rounded-lg hover:bg-[#bdd425] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mb-4"
          style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}
        >
          {loading ? '⏳ Updating Files...' : '🚀 Fix All Files on GitHub'}
        </button>

        {status && (
          <div className={`p-4 rounded-lg mb-4 ${status.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            <p style={{ fontFamily: 'Pragmatica, sans-serif' }}>{status}</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-bold mb-2 text-[#151719]" style={{ fontFamily: 'Pragmatica Bold, sans-serif' }}>
              Results:
            </h3>
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${result.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
              >
                <p className="text-sm" style={{ fontFamily: 'Pragmatica, sans-serif' }}>
                  {result.success ? '✅' : '❌'} {result.path}
                </p>
                {result.error && (
                  <p className="text-xs text-red-600 mt-1">{result.error}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
