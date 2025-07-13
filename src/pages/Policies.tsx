
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Users, DollarSign, AlertTriangle, Clock, MessageCircle, Eye, Scale, Building } from 'lucide-react';

const Policies = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Building className="h-12 w-12 text-primary" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-foreground tracking-tight">Community Core</h1>
              <p className="text-lg text-muted-foreground font-medium">Professional Gaming Community</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-semibold text-foreground">Staff Policy & Procedures Manual</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This comprehensive document establishes the policies, procedures, and professional standards 
              that govern all Community Core staff operations and conduct.
            </p>
            <div className="flex justify-center mt-6">
              <Badge variant="outline" className="px-6 py-2 text-sm font-medium">
                Document Version 2.1 | Effective July 6, 2025
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* Compensation Structure */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Compensation Structure & Payment Policies</h2>
            </div>
            
            <p className="text-foreground text-base leading-relaxed mb-8">
              Staff compensation is determined by role classification, performance metrics, and tenure within the organization. 
              Detailed compensation information is available through Leadership personnel (Director level and above).
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Payment Schedule
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Monthly disbursements processed on the 2nd (final deadline: 4th)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Payment notifications distributed on the 28th of the preceding month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>Claims cannot be processed prior to the scheduled payment date</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Payment Exclusions
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Incomplete task deliverables prior to payment notification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Extended leave exceeding 14 calendar days within the billing period</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">•</span>
                    <span>Employment commencement after the 4th of the preceding month</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Employment Termination */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-100 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Employment Termination Procedures</h2>
            </div>
            
            <p className="text-foreground text-base leading-relaxed mb-8">
              Termination procedures are executed immediately upon decision finalization. Staff members receive 
              formal notification and access privileges are revoked concurrently.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  Final Compensation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Staff members are entitled to final month compensation unless termination occurs 
                  prior to the 4th calendar day of the month.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Grounds for Immediate Termination
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Harassment, discrimination, or hostile behavior</li>
                  <li>• Fraudulent activities or misappropriation</li>
                  <li>• Damage to organizational reputation</li>
                  <li>• Abuse of administrative privileges</li>
                  <li>• Failure to meet performance standards</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Progressive Discipline */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Scale className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Progressive Discipline Framework</h2>
            </div>
            
            <p className="text-foreground text-base leading-relaxed mb-8">
              Our disciplinary framework follows a structured progression to ensure fair treatment 
              and policy compliance across all staff levels.
            </p>
            
            <div className="bg-muted/50 border border-border p-8 rounded-lg">
              <h3 className="font-semibold text-foreground mb-6 text-lg">Disciplinary Progression</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                  <span className="text-foreground font-medium">Formal written warning (two instances required)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">2</div>
                  <span className="text-foreground font-medium">Temporary suspension (with or without compensation)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">3</div>
                  <span className="text-foreground font-medium">Employment termination</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-destructive text-sm font-medium">
                  <strong>Exception:</strong> Staff engaging in activities detrimental to community operations, 
                  game integrity, or server security may face immediate termination without progressive discipline.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Authority & Permissions */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Authority Structure & Permissions Matrix</h2>
            </div>
            
            <div className="bg-muted/30 border border-border p-6 rounded-lg mb-8">
              <p className="text-foreground font-medium text-base">
                Staff members are authorized to exercise only those permissions explicitly assigned to their designated role. 
                Unauthorized use of elevated privileges constitutes grounds for disciplinary action.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-base flex items-center gap-2">
                  <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                  Moderation Tier (Trial - Head Moderator)
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Community voice moderation</li>
                  <li>• Removal privileges (serious violations)</li>
                  <li>• General oversight responsibilities</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-base flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Management Tier (Junior - Head Director)
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Moderation team supervision</li>
                  <li>• Content curation and removal</li>
                  <li>• Full disciplinary authority</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-base flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Executive Tier (Junior - Head Corporate)
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>• Strategic operations oversight</li>
                  <li>• Event coordination and execution</li>
                  <li>• Administrative system access</li>
                  <li>• Departmental assignment authority</li>
                </ul>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Performance Standards */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-teal-100 rounded-lg">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Performance Standards & Activity Requirements</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-teal-600">60</div>
                <div className="text-teal-700 font-medium">Minutes Monthly</div>
                <h3 className="font-semibold text-foreground text-lg">Platform Engagement</h3>
                <p className="text-muted-foreground text-sm">Minimum active participation requirement</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-cyan-600">3</div>
                <div className="text-cyan-700 font-medium">Communications Monthly</div>
                <h3 className="font-semibold text-foreground text-lg">Discord Participation</h3>
                <p className="text-muted-foreground text-sm">Minimum community interaction requirement</p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Communication Protocols */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-rose-100 rounded-lg">
                <MessageCircle className="h-6 w-6 text-rose-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Communication Protocols & Support Procedures</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Official Support Channels
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  All assistance requests to senior management must be submitted through the official 
                  support ticket system to ensure proper documentation and response tracking.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Direct Communication Policy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Direct messaging of senior staff regarding operational matters is prohibited. 
                  Unsolicited direct communications may be disregarded without response.
                </p>
              </div>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Information Security */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-violet-100 rounded-lg">
                <Eye className="h-6 w-6 text-violet-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Information Security & Access Management</h2>
            </div>
            
            <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-destructive mb-3 text-lg">SECURITY PROTOCOL - CONFIDENTIAL</h3>
              <p className="text-destructive text-sm font-medium leading-relaxed">
                Under no circumstances are marketing personnel authorized to share authentication 
                credentials for organizational social media accounts. This constitutes a severe security violation.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Account Management Standards
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                All Community Core social media assets must maintain shared access among authorized 
                marketing personnel to ensure operational continuity and security compliance.
              </p>
            </div>
          </section>
        </div>

        {/* Professional Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <span className="text-lg font-semibold text-foreground">Community Core Leadership</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              This policy document is subject to revision without prior notice. Staff members will receive 
              formal notification of updates through official organizational channels. All policies remain 
              in effect until formally superseded.
            </p>
            <p className="text-muted-foreground text-xs">
              For policy clarifications or procedural questions, please submit a formal support ticket.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
