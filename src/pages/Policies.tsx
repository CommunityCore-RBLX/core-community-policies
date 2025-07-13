
import React from 'react';

const Policies = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            COMMUNITY CORE STAFF POLICIES
          </h1>
          <div className="space-y-2 text-lg text-muted-foreground">
            <p>Effective: July 6, 2025</p>
            <p>Last Updated: July 6, 2025</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <p className="text-lg text-foreground leading-relaxed">
            This comprehensive document establishes the policies, procedures, and professional standards 
            that govern all Community Core staff operations and conduct. All staff members are required 
            to read, understand, and comply with these policies as a condition of employment.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Compensation Structure */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Compensation Structure & Payment Policies</h2>
            
            <p className="text-base text-foreground leading-relaxed mb-8">
              Staff compensation is determined by role classification, performance metrics, and tenure within the organization. 
              Detailed compensation information is available through Leadership personnel (Director level and above).
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Payment Schedule</h3>
                <ul className="space-y-3 text-foreground">
                  <li>• Monthly disbursements processed on the 2nd (final deadline: 4th)</li>
                  <li>• Payment notifications distributed on the 28th of the preceding month</li>
                  <li>• Claims cannot be processed prior to the scheduled payment date</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Payment Exclusions</h3>
                <ul className="space-y-3 text-foreground">
                  <li>• Incomplete task deliverables prior to payment notification</li>
                  <li>• Extended leave exceeding 14 calendar days within the billing period</li>
                  <li>• Employment commencement after the 4th of the preceding month</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Employment Termination */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Employment Termination Procedures</h2>
            
            <p className="text-base text-foreground leading-relaxed mb-8">
              Termination procedures are executed immediately upon decision finalization. Staff members receive 
              formal notification and access privileges are revoked concurrently.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Final Compensation</h3>
                <p className="text-foreground leading-relaxed">
                  Staff members are entitled to final month compensation unless termination occurs 
                  prior to the 4th calendar day of the month.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Grounds for Immediate Termination</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• Harassment, discrimination, or hostile behavior</li>
                  <li>• Fraudulent activities or misappropriation</li>
                  <li>• Damage to organizational reputation</li>
                  <li>• Abuse of administrative privileges</li>
                  <li>• Failure to meet performance standards</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Progressive Discipline */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Progressive Discipline Framework</h2>
            
            <p className="text-base text-foreground leading-relaxed mb-8">
              Our disciplinary framework follows a structured progression to ensure fair treatment 
              and policy compliance across all staff levels.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Disciplinary Progression</h3>
              <ol className="space-y-4 text-foreground">
                <li className="flex gap-4">
                  <span className="font-bold">1.</span>
                  <span>Formal written warning (two instances required)</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold">2.</span>
                  <span>Temporary suspension (with or without compensation)</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold">3.</span>
                  <span>Employment termination</span>
                </li>
              </ol>
              
              <div className="border-l-4 border-destructive pl-6 py-4">
                <p className="text-foreground font-medium">
                  <strong>Exception:</strong> Staff engaging in activities detrimental to community operations, 
                  game integrity, or server security may face immediate termination without progressive discipline.
                </p>
              </div>
            </div>
          </section>

          {/* Authority & Permissions */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Authority Structure & Permissions Matrix</h2>
            
            <p className="text-base text-foreground leading-relaxed mb-8">
              Staff members are authorized to exercise only those permissions explicitly assigned to their designated role. 
              Unauthorized use of elevated privileges constitutes grounds for disciplinary action.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Moderation Tier (Trial - Head Moderator)</h3>
                <ul className="text-foreground space-y-2">
                  <li>• Community voice moderation</li>
                  <li>• Removal privileges (serious violations)</li>
                  <li>• General oversight responsibilities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Management Tier (Junior - Head Director)</h3>
                <ul className="text-foreground space-y-2">
                  <li>• Moderation team supervision</li>
                  <li>• Content curation and removal</li>
                  <li>• Full disciplinary authority</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Executive Tier (Junior - Head Corporate)</h3>
                <ul className="text-foreground space-y-2">
                  <li>• Strategic operations oversight</li>
                  <li>• Event coordination and execution</li>
                  <li>• Administrative system access</li>
                  <li>• Departmental assignment authority</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Performance Standards */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Performance Standards & Activity Requirements</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Platform Engagement</h3>
                <p className="text-foreground">
                  <strong>60 minutes monthly</strong> - Minimum active participation requirement
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Discord Participation</h3>
                <p className="text-foreground">
                  <strong>3 communications monthly</strong> - Minimum community interaction requirement
                </p>
              </div>
            </div>
          </section>

          {/* Communication Protocols */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Communication Protocols & Support Procedures</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Official Support Channels</h3>
                <p className="text-foreground leading-relaxed">
                  All assistance requests to senior management must be submitted through the official 
                  support ticket system to ensure proper documentation and response tracking.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Direct Communication Policy</h3>
                <p className="text-foreground leading-relaxed">
                  Direct messaging of senior staff regarding operational matters is prohibited. 
                  Unsolicited direct communications may be disregarded without response.
                </p>
              </div>
            </div>
          </section>

          {/* Information Security */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Information Security & Access Management</h2>
            
            <div className="border-l-4 border-destructive pl-6 py-6 mb-8">
              <h3 className="font-bold text-foreground mb-3 text-lg">SECURITY PROTOCOL - CONFIDENTIAL</h3>
              <p className="text-foreground font-medium leading-relaxed">
                Under no circumstances are marketing personnel authorized to share authentication 
                credentials for organizational social media accounts. This constitutes a severe security violation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Account Management Standards</h3>
              <p className="text-foreground leading-relaxed">
                All Community Core social media assets must maintain shared access among authorized 
                marketing personnel to ensure operational continuity and security compliance.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Community Core Leadership</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              This policy document is subject to revision without prior notice. Staff members will receive 
              formal notification of updates through official organizational channels. All policies remain 
              in effect until formally superseded.
            </p>
            <p className="text-sm text-muted-foreground">
              For policy clarifications or procedural questions, please submit a formal support ticket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
