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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-12 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col ${plan.popular ? "" : "md:py-8"}`}>
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-[2rem] blur-xl -z-10 transform scale-95" />
              )}
              <Card
                className={`
                  relative flex flex-col flex-1 transition-all duration-500 rounded-2xl
                  ${plan.popular
                    ? "border-2 border-primary shadow-2xl shadow-primary/20 z-10 hover:shadow-primary/40 hover:-translate-y-2 bg-card"
                    : "border border-border/50 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                  }
                `}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center z-20">
                    <Badge className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground border-none px-5 py-1.5 text-sm font-bold shadow-lg flex items-center gap-1.5 rounded-full uppercase tracking-wider">
                      <Star className="w-4 h-4 fill-current" /> Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className={plan.popular ? "p-8 pb-4" : "p-6 pb-4"}>
                  <CardTitle className={plan.popular ? "text-3xl font-extrabold text-foreground" : "text-2xl font-bold"}>
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="font-medium text-muted-foreground/80 mt-2">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className={`flex-1 ${plan.popular ? "p-8 pt-2" : "p-6 pt-2"}`}>
                  <div className="mb-8 flex items-baseline">
                    <span className={plan.popular ? "text-6xl font-extrabold" : "text-5xl font-bold"}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-lg text-muted-foreground ml-2 font-medium">{plan.period}</span>
                    )}
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className={`rounded-full p-1 mt-0.5 flex-shrink-0 ${plan.popular ? "bg-primary text-primary-foreground shadow-sm" : "bg-primary/10 text-primary"}`}>
                          <Check className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className={`mt-auto ${plan.popular ? "p-8 pt-4" : "p-6 pt-4"}`}>
                  <Button
                    className={`w-full rounded-xl font-bold text-md h-12 transition-all duration-300 ${plan.popular ? "shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40" : ""}`}
                    variant={plan.variant}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </div>
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
