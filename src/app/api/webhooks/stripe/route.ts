import { headers } from "next/headers";
import Stripe from "stripe";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !secret) return new Response("Missing config", { status: 400 });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2024-11-20.acacia" as any });

  try {
    const event = stripe.webhooks.constructEvent(body, signature, secret);
    // TODO: handle checkout.session.completed → create Payment, Entitlement
    // and update seat counts or certificate entitlement
  } catch (e) {
    return new Response("Invalid signature", { status: 400 });
  }
  return new Response("ok");
}


