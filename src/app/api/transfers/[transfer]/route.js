import { NextResponse } from 'next/server';
import knex from '@/db/knex'

export async function GET(req, {params}) {
    const transferId = params.transfer
    //Task 2: Join with Pricing table to retrieve fee and conversionRate
    //TODO:
    const transferWithPricing = await knex.from({t: 'transfers'})
        .select('t.*')
        .where('t.transferId', transferId);
    
    if (transferWithPricing.length > 0) {
        return NextResponse.json(transferWithPricing[0]);
    } else {
        return NextResponse.json({ error: 'Transfer not found!' }, { status: 404 })
    }


}