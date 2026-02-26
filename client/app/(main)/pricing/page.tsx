"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
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
    <div className="min-h-screen bg-background py-20 px-4 animate-in fade-in duration-500">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="mb-4">
            Flexible Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the full potential of PrivGPT Studio. Switch between cloud and
            local AI models seamlessly with a plan that fits you.
          </p>
        </div>

        {/* Extra top padding so the badge on the popular card has room */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`
                relative flex flex-col transition-all duration-300
                ${plan.popular
                  ? "border-2 border-primary shadow-xl ring-2 ring-primary/30 md:-mt-6 md:mb-6 z-10 hover:shadow-2xl hover:-translate-y-2"
                  : "hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary px-4 py-1 text-sm font-semibold shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" /> Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className={plan.popular ? "p-7 pt-9" : "p-6"}>
                <CardTitle className={plan.popular ? "text-3xl font-bold" : "text-2xl"}>
                  {plan.name}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className={`flex-grow ${plan.popular ? "p-7" : "p-6"}`}>
                <div className="mb-6 flex items-baseline">
                  <span className={plan.popular ? "text-5xl font-bold" : "text-4xl font-bold"}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  )}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div className="bg-primary/10 rounded-full p-1 flex-shrink-0">
                        <Check className="w-3 h-3 text-primary flex-shrink-0" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className={`mt-auto ${plan.popular ? "p-7 pt-4" : "p-6"}`}>
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

        {/* Trust strip */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          {["No credit card required", "Cancel anytime", "Instant activation"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 hover:text-primary transition-all duration-200 hover:-translate-y-1"
            >
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Need a custom plan?{" "}
            <a href="/contact" className="text-primary underline underline-offset-4 hover:text-primary/80">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
// Trigger PR review build
