"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Zap, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Perfect for trying out PrivGPT Studio.",
      features: [
        "Access to basic local models",
        "Limited cloud model usage",
        "Community support",
        "Basic privacy features",
      ],
      cta: "Get Started",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "Basic",
      price: "$9",
      period: "/mo",
      description: "For individuals who need more power.",
      features: [
        "Access to advanced local models",
        "Increased cloud model usage",
        "Priority support",
        "Advanced privacy settings",
        "Custom system prompts",
      ],
      cta: "Subscribe Now",
      variant: "default" as const,
      popular: true,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      description: "For power users and professionals.",
      features: [
        "Unlimited local model access",
        "High-tier cloud model usage",
        "24/7 Premium support",
        "Enterprise-grade privacy",
        "API access",
        "Early access to new features",
      ],
      cta: "Go Pro",
      variant: "outline" as const,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-6xl">

        {/* ── Header ── */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Flexible Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the full potential of PrivGPT Studio. Switch between cloud
            and local AI models seamlessly with a plan that fits you.
          </p>
        </div>

        {/* ── Pricing Cards ── */}
        {/* All 3 cards: identical size, padding, hover, and alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`
                relative flex flex-col
                transition-all duration-300
                hover:shadow-lg hover:-translate-y-1
                ${plan.popular
                  ? "border-primary border-2"
                  : "border hover:border-primary/50"
                }
              `}
            >
              {/* Popular badge — positioned outside card flow so it doesn't affect height */}
              {plan.popular && (
                <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary px-4 py-1 text-xs">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Card Header — uniform padding */}
              <CardHeader className="p-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm mt-1">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              {/* Card Content — uniform padding, flex-grow so footer stays at bottom */}
              <CardContent className="flex-grow p-6 pt-0">
                {/* Price */}
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Features — consistent spacing and alignment */}
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Card Footer — uniform padding, CTA always at same position */}
              <CardFooter className="p-6 pt-2">
                <Button
                  className="w-full"
                  variant={plan.variant}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* ── Trust Strip ── */}
        {/* Same hover effect as cards: hover:shadow-lg hover:-translate-y-1 */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🔒", title: "No credit card required", sub: "Start free, upgrade when ready" },
            { icon: "🔄", title: "Cancel anytime", sub: "No long-term commitments" },
            { icon: "⚡", title: "Instant activation", sub: "Up and running in seconds" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-1 p-6 rounded-xl bg-muted/50 border border-border/60 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="font-semibold text-sm">{item.title}</span>
              <span className="text-xs text-muted-foreground">{item.sub}</span>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-6">
            Not sure which plan? Start free and upgrade anytime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/chat">
              <Button size="lg" className="gap-2 px-8 rounded-full">
                <Zap className="w-4 h-4" />
                Try for Free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg" className="px-8 rounded-full">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}