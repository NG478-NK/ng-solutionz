import {NextResponse} from 'next/server';
export async function GET(){return NextResponse.json({status:'ok',service:'ng-solutionz',time:new Date().toISOString()})}
