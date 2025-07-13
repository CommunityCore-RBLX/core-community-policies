
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

        <div className="space-y-8">
          {/* Compensation Structure */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <DollarSign className="h-6 w-6" />
                Compensation Structure & Payment Policies
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-foreground text-base leading-relaxed">
                  Staff compensation is determined by role classification, performance metrics, and tenure within the organization. 
                  Detailed compensation information is available through Leadership personnel (Director level and above).
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-3 text-lg">Payment Schedule</h4>
                    <ul className="text-blue-800 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Monthly disbursements processed on the 2nd (final deadline: 4th)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Payment notifications distributed on the 28th of the preceding month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Claims cannot be processed prior to the scheduled payment date</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-3 text-lg">Payment Exclusions</h4>
                    <ul className="text-red-800 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Incomplete task deliverables prior to payment notification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Extended leave exceeding 14 calendar days within the billing period</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium">•</span>
                        <span>Employment commencement after the 4th of the preceding month</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Employment Termination */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-600 to-red-500 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <AlertTriangle className="h-6 w-6" />
                Employment Termination Procedures
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-foreground text-base leading-relaxed">
                  Termination procedures are executed immediately upon decision finalization. Staff members receive 
                  formal notification and access privileges are revoked concurrently.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-amber-900 mb-3 text-lg">Final Compensation</h4>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      Staff members are entitled to final month compensation unless termination occurs 
                      prior to the 4th calendar day of the month.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-3 text-lg">Grounds for Immediate Termination</h4>
                    <ul className="text-red-800 space-y-2 text-sm">
                      <li>• Harassment, discrimination, or hostile behavior</li>
                      <li>• Fraudulent activities or misappropriation</li>
                      <li>• Damage to organizational reputation</li>
                      <li>• Abuse of administrative privileges</li>
                      <li>• Failure to meet performance standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progressive Discipline */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Scale className="h-6 w-6" />
                Progressive Discipline Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <p className="text-foreground text-base leading-relaxed">
                  Our disciplinary framework follows a structured progression to ensure fair treatment 
                  and policy compliance across all staff levels.
                </p>
                
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-4 text-lg">Disciplinary Progression</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-800 font-bold text-sm">1</div>
                      <span className="text-yellow-800 font-medium">Formal written warning (two instances required)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-800 font-bold text-sm">2</div>
                      <span className="text-yellow-800 font-medium">Temporary suspension (with or without compensation)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-yellow-800 font-bold text-sm">3</div>
                      <span className="text-yellow-800 font-medium">Employment termination</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                    <p className="text-red-800 text-sm font-medium">
                      <strong>Exception:</strong> Staff engaging in activities detrimental to community operations, 
                      game integrity, or server security may face immediate termination without progressive discipline.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Authority & Permissions */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Users className="h-6 w-6" />
                Authority Structure & Permissions Matrix
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <p className="text-blue-900 font-semibold text-base">
                    Staff members are authorized to exercise only those permissions explicitly assigned to their designated role. 
                    Unauthorized use of elevated privileges constitutes grounds for disciplinary action.
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-4 text-base">Moderation Tier (Trial - Head Moderator)</h4>
                    <ul className="text-slate-700 space-y-2 text-sm">
                      <li>• Community voice moderation</li>
                      <li>• Removal privileges (serious violations)</li>
                      <li>• General oversight responsibilities</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-4 text-base">Management Tier (Junior - Head Director)</h4>
                    <ul className="text-green-700 space-y-2 text-sm">
                      <li>• Moderation team supervision</li>
                      <li>• Content curation and removal</li>
                      <li>• Full disciplinary authority</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-4 text-base">Executive Tier (Junior - Head Corporate)</h4>
                    <ul className="text-purple-700 space-y-2 text-sm">
                      <li>• Strategic operations oversight</li>
                      <li>• Event coordination and execution</li>
                      <li>• Administrative system access</li>
                      <li>• Departmental assignment authority</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Standards */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Clock className="h-6 w-6" />
                Performance Standards & Activity Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center bg-teal-50 border border-teal-200 p-8 rounded-lg">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-teal-600 mb-2">60</div>
                    <div className="text-teal-700 font-medium">Minutes Monthly</div>
                  </div>
                  <h4 className="font-semibold text-teal-900 text-lg mb-2">Platform Engagement</h4>
                  <p className="text-teal-800 text-sm">Minimum active participation requirement</p>
                </div>
                
                <div className="text-center bg-cyan-50 border border-cyan-200 p-8 rounded-lg">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-cyan-600 mb-2">3</div>
                    <div className="text-cyan-700 font-medium">Communications Monthly</div>
                  </div>
                  <h4 className="font-semibold text-cyan-900 text-lg mb-2">Discord Participation</h4>
                  <p className="text-cyan-800 text-sm">Minimum community interaction requirement</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Communication Protocols */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-rose-600 to-pink-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <MessageCircle className="h-6 w-6" />
                Communication Protocols & Support Procedures
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3 text-lg">Official Support Channels</h4>
                    <p className="text-green-800 text-sm leading-relaxed">
                      All assistance requests to senior management must be submitted through the official 
                      support ticket system to ensure proper documentation and response tracking.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-3 text-lg">Direct Communication Policy</h4>
                    <p className="text-red-800 text-sm leading-relaxed">
                      Direct messaging of senior staff regarding operational matters is prohibited. 
                      Unsolicited direct communications may be disregarded without response.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Security */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Eye className="h-6 w-6" />
                Information Security & Access Management
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <h4 className="font-bold text-red-900 mb-3 text-lg">SECURITY PROTOCOL - CONFIDENTIAL</h4>
                  <p className="text-red-800 text-sm font-medium leading-relaxed">
                    Under no circumstances are marketing personnel authorized to share authentication 
                    credentials for organizational social media accounts. This constitutes a severe security violation.
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3 text-lg">Account Management Standards</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    All Community Core social media assets must maintain shared access among authorized 
                    marketing personnel to ensure operational continuity and security compliance.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
