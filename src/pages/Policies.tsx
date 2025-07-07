
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Users, DollarSign, AlertTriangle, Clock, MessageCircle, Eye, Scale } from 'lucide-react';

const Policies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Community Core</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Staff Policy Documentation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This document outlines the policies, procedures, and guidelines that all Community Core staff members must follow to maintain professionalism and ensure smooth operations.
          </p>
          <div className="mt-4 flex justify-center">
            <Badge variant="outline" className="px-4 py-2">
              Effective: July 6, 2025 | Community Core Leadership Team
            </Badge>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Payments and Salary */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <DollarSign className="h-6 w-6" />
                Payments and Salary
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Staff salary is determined based on roles and seniority within Community Core. Payment information is available from any Leadership+ member.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Payment Schedule</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Monthly payments on the 2nd (latest: 4th)</li>
                    <li>• Payment notifications sent on the 28th of previous month</li>
                    <li>• Payments cannot be claimed before the 2nd</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Payment Exclusions</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Incomplete tasks before payment notification</li>
                    <li>• Leave of Absence exceeding 14 days in the month</li>
                    <li>• Hired after the 4th of previous month</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6" />
                Termination Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Terminated staff members will be notified and have roles removed immediately. Final payment depends on termination date.
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-900 mb-2">Final Payment</h4>
                  <p className="text-sm text-amber-800">
                    Staff receive final month payment UNLESS terminated before the 4th of the month.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Termination Grounds</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Harassment or bullying</li>
                    <li>• Scamming</li>
                    <li>• Defaming the Community</li>
                    <li>• Abuse of power</li>
                    <li>• Not completing assignments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disciplinary Actions */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <Scale className="h-6 w-6" />
                Disciplinary Actions & Punishments
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <p className="text-gray-700">
                  All disciplinary actions follow a progressive order to ensure fairness and policy compliance.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">Progressive Discipline Order</h4>
                  <ol className="text-sm text-yellow-800 space-y-1 ml-4">
                    <li>1. Two (2) written warnings</li>
                    <li>2. Suspension (with or without pay)</li>
                    <li>3. Complete termination</li>
                  </ol>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-red-800">
                    <strong>Exception:</strong> Staff participating in harmful activities towards games, servers, or community may face immediate termination.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Roles and Permissions */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6" />
                Roles and Permissions
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="text-gray-700">
                  Staff may ONLY use permissions assigned to their roles. Unauthorized use leads to disciplinary action.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Trial - Head Moderator</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Mute</li>
                      <li>• Kick (serious situations)</li>
                      <li>• Watch over</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Junior - Head Director</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Watch over moderators</li>
                      <li>• Delete inappropriate content</li>
                      <li>• Mute, Kick, Ban (serious)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Junior - Head Corporate</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Oversee operations</li>
                      <li>• Host/Join events</li>
                      <li>• Full moderation powers</li>
                      <li>• Announce, Rank, Tickets</li>
                      <li>• Choose departments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Requirements */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <Clock className="h-6 w-6" />
                Activity Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-teal-900 mb-2">In-Game Activity</h4>
                  <div className="text-2xl font-bold text-teal-600">60 Minutes</div>
                  <p className="text-sm text-teal-800">Monthly minimum</p>
                </div>
                
                <div className="bg-cyan-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-cyan-900 mb-2">Discord Activity</h4>
                  <div className="text-2xl font-bold text-cyan-600">3 Messages</div>
                  <p className="text-sm text-cyan-800">Monthly minimum</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Communication */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6" />
                Communication Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Proper Communication</h4>
                  <p className="text-sm text-green-800">
                    For assistance from higher-ups, open a support ticket. This ensures proper documentation and response tracking.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Direct Contact Policy</h4>
                  <p className="text-sm text-red-800">
                    DO NOT contact higher-ups directly regarding community matters. Higher-ups may ignore direct messages about community inquiries.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Privacy */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <Eye className="h-6 w-6" />
                Marketing Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-900 mb-2">STRICTLY PROHIBITED</h4>
                  <p className="text-sm text-red-800">
                    Marketers are NEVER allowed to share passwords to ANY social media accounts.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Account Sharing Policy</h4>
                  <p className="text-sm text-blue-800">
                    All Community Core social media accounts must be shared with other marketing staff for transparency and security.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Policies */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-slate-600 to-gray-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3">
                <Shield className="h-6 w-6" />
                Additional Policies
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Professional Conduct</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Maintain respectful communication</li>
                      <li>• Represent the community positively</li>
                      <li>• Report inappropriate behavior</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Confidentiality</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Keep internal information private</li>
                      <li>• No sharing of staff discussions</li>
                      <li>• Protect member privacy</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Leave of Absence</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Submit request 48 hours in advance</li>
                      <li>• Maximum 30 days per request</li>
                      <li>• Must maintain minimum activity</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Appeals Process</h4>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Submit within 7 days of action</li>
                      <li>• Include relevant evidence</li>
                      <li>• Leadership team review</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Separator className="mb-6" />
          <p className="text-gray-600 text-sm">
            These policies are subject to change at any time. Staff will be notified of updates through official channels.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            For questions or clarifications, please open a support ticket.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policies;
