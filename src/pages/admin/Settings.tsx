import { Save } from 'lucide-react'
import { PageHeader } from '../../components/ui/PageHeader'
import { Button } from '../../components/ui/Button'

export default function Settings() {
  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="Platform configuration and integrations"
        actions={<Button variant="primary" icon={<Save size={14} />}>Save Changes</Button>}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Microsoft 365 */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Microsoft 365 Integration</h3>
          <div className="space-y-3">
            {[
              { label: 'Tenant ID', value: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', type: 'text' },
              { label: 'Client ID', value: '••••••••••••••••••••••••••••••••', type: 'password' },
              { label: 'Client Secret', value: '••••••••••••••••••••••••••••••••', type: 'password' },
              { label: 'Redirect URI', value: 'https://talentos.unison.com/auth/callback', type: 'text' },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-xs font-medium text-gray-600 block mb-1">{f.label}</label>
                <input
                  type={f.type}
                  defaultValue={f.value}
                  className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-700 outline-none focus:border-[#6C4CF1] focus:ring-1 focus:ring-[#6C4CF1]/20 font-mono"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Email Templates */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Email Templates</h3>
          <div className="space-y-2">
            {[
              { name: 'Candidate Acknowledgement', trigger: 'On resume receipt' },
              { name: 'Recruiter Assignment Notification', trigger: 'On auto-assign' },
              { name: 'Interview Confirmation', trigger: 'On interview schedule' },
              { name: 'Offer Letter Notification', trigger: 'On offer extended' },
              { name: 'Rejection Notice', trigger: 'On status: Rejected' },
            ].map((t) => (
              <div key={t.name} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-md">
                <div>
                  <p className="text-xs font-medium text-gray-900">{t.name}</p>
                  <p className="text-[10px] text-gray-500">{t.trigger}</p>
                </div>
                <Button size="sm" variant="ghost">Edit</Button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Configuration */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">AI Configuration</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">Confidence Threshold (%)</label>
              <input type="number" defaultValue={65} min={50} max={95} className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700 outline-none focus:border-[#6C4CF1]" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">Max Candidates Per Recruiter</label>
              <input type="number" defaultValue={30} className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700 outline-none focus:border-[#6C4CF1]" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">AI Model Provider</label>
              <select className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700 outline-none focus:border-[#6C4CF1] cursor-pointer">
                <option>OpenAI (GPT-4o)</option>
                <option>Azure OpenAI</option>
                <option>Anthropic Claude</option>
              </select>
            </div>
            <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-md">
              <div>
                <p className="text-xs font-medium text-gray-900">Auto-assign to Recruiter</p>
                <p className="text-[10px] text-gray-500">Skip HILT when confidence is high</p>
              </div>
              <div className="w-8 h-4 rounded-full bg-[#6C4CF1] relative cursor-pointer">
                <div className="absolute top-0.5 left-4 w-3 h-3 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Recruiter Assignment */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Assignment Rules</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">Assignment Strategy</label>
              <select className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700 outline-none focus:border-[#6C4CF1] cursor-pointer">
                <option>Skill Match → Load Balance → Round Robin</option>
                <option>Load Balance Only</option>
                <option>Round Robin Only</option>
                <option>Manual Only</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">HILT Review SLA (hours)</label>
              <input type="number" defaultValue={4} className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700 outline-none focus:border-[#6C4CF1]" />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">Duplicate Detection Window (days)</label>
              <input type="number" defaultValue={30} className="w-full text-xs px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-700 outline-none focus:border-[#6C4CF1]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
