import { useEffect } from "react";
import Auralis from "@/components/ui/auralis";
import {
  TextHoverEffect,
  FooterBackgroundGradient,
} from "@/components/ui/text-hover-effect";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Dumbbell,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  Send,
  Settings,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

// Deep indigo / violet / teal palette to match the glassmorphism world
const AURALIS_COLORS = ["#6d5bff", "#8b7bff", "#1f8f83"];

function useRevealOnScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const targets = document.querySelectorAll(
      ".section .glass, .section-head",
    );

    if (prefersReduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    targets.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useRevealOnScroll();

  return (
    <>
      {/* ============ AURALIS BACKDROP ============ */}
      <div className="aurora-backdrop" aria-hidden="true">
        <Auralis colors={AURALIS_COLORS} speed={0.25} grain={0.35} height="100vh" />
      </div>

      <header className="site-nav glass">
        <a className="brand" href="#top">
          Work&nbsp;with&nbsp;Deti
        </a>
        <nav aria-label="Primary">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Projects</a>
          <a href="#toolbox">Toolbox</a>
          <a href="#contact" className="nav-cta">
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="hero-inner">
            <p className="hero-hello">
              Hello, I'm Deti — working remotely from Indonesia 🇮🇩
            </p>
            <h1 className="hero-title">
              I turn messy pipelines into <em>closed deals</em> and scaled
              content.
            </h1>
            <p className="hero-sub">
              Remote Operations &amp; Growth Specialist with 3+ years helping
              global startups and personal brands grow — through KOL/UGC
              outreach, CRM &amp; pipeline management, and workflow automation
              that gives teams their time back.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Work with me
                <ArrowRight aria-hidden="true" />
              </a>
              <a
                className="btn btn-ghost"
                href="https://linkedin.com/in/detinadra"
                target="_blank"
                rel="noopener"
              >
                <Linkedin aria-hidden="true" />
                LinkedIn
              </a>
            </div>
            <dl className="hero-proof glass" aria-label="Career highlights">
              <div>
                <dt>High-ticket deal closed in first 30 days</dt>
                <dd>$25K+</dd>
              </div>
              <div>
                <dt>Creator content output scaled</dt>
                <dd>400%</dd>
              </div>
              <div>
                <dt>CRM database accuracy maintained</dt>
                <dd>98%</dd>
              </div>
              <div>
                <dt>Manual work automated away, weekly</dt>
                <dd>10+ hrs</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ============ ABOUT ============ */}
        <section className="section" id="about">
          <div className="section-head">
            <h2>Engineer's mind, marketer's instinct.</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy glass panel">
              <p>
                I started in <strong>Informatics Engineering</strong> and spent
                years running mission-critical IT support in a 24/7 healthcare
                environment — 200+ staff, zero unresolved Priority-1 incidents.
                That's where I learned to stay calm, document everything, and
                fix problems before they escalate.
              </p>
              <p>
                Since 2023 I've brought that discipline to{" "}
                <strong>growth and operations for remote teams</strong>:
                closing high-ticket deals, running KOL and UGC outreach
                campaigns for 5+ global startups, and building n8n automations
                that eliminate hours of manual admin work every week.
              </p>
              <p>
                I work async-first across time zones, communicate clearly in
                English and Bahasa Indonesia, and treat every CRM row,
                follow-up, and deadline like it matters — because it does.
              </p>
            </div>
            <ul className="about-facts glass panel" aria-label="Quick facts">
              <li>
                <MapPin aria-hidden="true" />
                <span>Indonesia · fully remote, async-first</span>
              </li>
              <li>
                <Globe aria-hidden="true" />
                <span>
                  English (professional) · Bahasa Indonesia (native)
                </span>
              </li>
              <li>
                <Clock aria-hidden="true" />
                <span>Comfortable across US / EU / APAC time zones</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ============ WHAT I DO ============ */}
        <section className="section" id="work">
          <div className="section-head">
            <h2>What I do for remote teams</h2>
          </div>
          <div className="services">
            <article className="service glass panel">
              <div className="service-top">
                <Users aria-hidden="true" />
                <h3>KOL &amp; UGC Outreach</h3>
              </div>
              <p>
                End-to-end creator campaigns: market research, tiered vetting,
                contract follow-ups, and performance tracking. I coordinate 20+
                active creators at once and deliver qualified candidates within
                48-hour windows.
              </p>
              <p className="service-result">
                Scaled monthly output from 20 to 100+ posts for a client brand.
              </p>
            </article>
            <article className="service glass panel">
              <div className="service-top">
                <BarChart3 aria-hidden="true" />
                <h3>Sales &amp; Lead Conversion</h3>
              </div>
              <p>
                Inbound lead handling, conversational sales, objection
                handling, and structured follow-up sequences across email and
                DMs — 50+ conversations a day, in a voice that stays true to
                your brand.
              </p>
              <p className="service-result">
                Closed a $25K+ high-ticket deal within my first 30 days on a
                sales team.
              </p>
            </article>
            <article className="service glass panel">
              <div className="service-top">
                <Settings aria-hidden="true" />
                <h3>CRM &amp; Workflow Automation</h3>
              </div>
              <p>
                HubSpot and ClickUp pipelines kept at 98% accuracy, automated
                follow-up sequences, and n8n-powered reporting that removes
                repetitive admin from your team's week.
              </p>
              <p className="service-result">
                Cut lead response time by 40% and saved 10+ hours of manual
                work weekly.
              </p>
            </article>
          </div>
        </section>

        {/* ============ PROJECTS ============ */}
        <section className="section" id="experience">
          <div className="section-head">
            <h2>Selected projects</h2>
          </div>
          <div className="projects">
            <article className="project glass panel">
              <div className="project-top">
                <span className="project-tag">Sales · High-Ticket Closing</span>
                <Dumbbell aria-hidden="true" />
              </div>
              <h3>$25K+ deal in 30 days for a women's fitness brand</h3>
              <p>
                Joined a sales outreach team as a new member and closed a $25K+
                high-ticket deal within the first month — the fastest
                first-month client acquisition on record for the team. Owned
                the full cycle: prospecting, qualification, follow-ups, and
                negotiation to close.
              </p>
              <ul className="project-stats">
                <li><strong>$25K+</strong> deal value</li>
                <li><strong>30 days</strong> to close</li>
                <li><strong>#1</strong> team record</li>
              </ul>
              <ul className="chips project-chips">
                <li>Cold Outreach</li>
                <li>Qualification</li>
                <li>Negotiation</li>
                <li>HubSpot</li>
              </ul>
            </article>

            <article className="project glass panel">
              <div className="project-top">
                <span className="project-tag">KOL · Content Operations</span>
                <TrendingUp aria-hidden="true" />
              </div>
              <h3>Scaling a creator content pipeline from 20 to 100+ posts</h3>
              <p>
                Overhauled scheduling workflows, creator coordination, and
                content approval pipelines for a creator-led brand — growing
                monthly output by 400% while coordinating 20+ active creators
                and keeping brand consistency and deadlines intact.
              </p>
              <ul className="project-stats">
                <li><strong>400%</strong> output growth</li>
                <li><strong>100+</strong> posts / month</li>
                <li><strong>20+</strong> active creators</li>
              </ul>
              <ul className="chips project-chips">
                <li>UGC Campaigns</li>
                <li>Content Approval</li>
                <li>ClickUp</li>
                <li>Meta Business Suite</li>
              </ul>
            </article>

            <article className="project glass panel">
              <div className="project-top">
                <span className="project-tag">Outreach · Creator Vetting</span>
                <Search aria-hidden="true" />
              </div>
              <h3>48-hour creator sourcing system for 5+ global startups</h3>
              <p>
                Built high-conversion creator pipelines using structured market
                research and tiered vetting frameworks across TikTok and
                Instagram, consistently delivering qualified, brand-aligned
                creator candidates within 48-hour turnaround windows.
              </p>
              <ul className="project-stats">
                <li><strong>48 hrs</strong> turnaround</li>
                <li><strong>5+</strong> global startups</li>
                <li><strong>Tiered</strong> vetting framework</li>
              </ul>
              <ul className="chips project-chips">
                <li>Creator Sourcing</li>
                <li>Market Research</li>
                <li>TikTok</li>
                <li>Instagram</li>
              </ul>
            </article>

            <article className="project glass panel">
              <div className="project-top">
                <span className="project-tag">Email · Deliverability</span>
                <Send aria-hidden="true" />
              </div>
              <h3>Cold email system with 40% higher reply rates</h3>
              <p>
                Designed and ran multi-domain cold email infrastructure, with segmented sequences and A/B
                testing in Instantly and Lemlist. Lifted reply rates by 40% and
                generated $25K+ in revenue from targeted B2B campaigns.
              </p>
              <ul className="project-stats">
                <li><strong>40%</strong> more replies</li>
                <li><strong>$25K+</strong> revenue generated</li>
                <li><strong>Multi-domain</strong> infrastructure</li>
              </ul>
              <ul className="chips project-chips">
                <li>Instantly.ai</li>
                <li>Lemlist</li>
                <li>A/B Testing</li>
              </ul>
            </article>

            <article className="project glass panel">
              <div className="project-top">
                <span className="project-tag">Automation · n8n</span>
                <Workflow aria-hidden="true" />
              </div>
              <h3>n8n automations that gave a team 10+ hours back weekly</h3>
              <p>
                Engineered n8n-powered reporting and data-entry automations
                plus automated follow-up sequences across HubSpot and ClickUp, keeping CRM databases at 98% accuracy, cutting lead response
                time by 40%, and freeing capacity for revenue work.
              </p>
              <ul className="project-stats">
                <li><strong>10+ hrs</strong> saved weekly</li>
                <li><strong>98%</strong> CRM accuracy</li>
                <li><strong>40%</strong> faster responses</li>
              </ul>
              <ul className="chips project-chips">
                <li>n8n</li>
                <li>HubSpot</li>
                <li>ClickUp</li>
                <li>Reporting Automation</li>
              </ul>
            </article>

            <article className="project glass panel">
              <div className="project-top">
                <span className="project-tag">Social · DM Sales</span>
                <MessageCircle aria-hidden="true" />
              </div>
              <h3>DM sales pipeline handling 50+ conversations daily</h3>
              <p>
                Managed high-volume DM and comment interactions across
                Instagram, TikTok, and LinkedIn for personal brands. Aligning
                captions, CTAs, and DM flows, and converting inbound inquiries
                into qualified leads with structured follow-up systems.
              </p>
              <ul className="project-stats">
                <li><strong>50+</strong> conversations / day</li>
                <li><strong>3</strong> platforms managed</li>
                <li><strong>100%</strong> posting consistency</li>
              </ul>
              <ul className="chips project-chips">
                <li>Conversational Sales</li>
                <li>Lead Nurturing</li>
                <li>LinkedIn</li>
                <li>Canva</li>
              </ul>
            </article>
          </div>
        </section>

        {/* ============ TOOLBOX ============ */}
        <section className="section" id="toolbox">
          <div className="section-head">
            <h2>Toolbox</h2>
          </div>
          <div className="toolbox glass panel">
            <div className="tool-group">
              <h3>Growth &amp; Outreach</h3>
              <ul className="chips">
                <li>KOL Outreach</li>
                <li>UGC Campaigns</li>
                <li>Creator Partnerships</li>
                <li>Lead Generation</li>
                <li>High-Ticket Sales</li>
                <li>Cold Outreach</li>
                <li>Pipeline Management</li>
              </ul>
            </div>
            <div className="tool-group">
              <h3>CRM &amp; Automation</h3>
              <ul className="chips">
                <li>HubSpot</li>
                <li>ClickUp</li>
                <li>monday.com</li>
                <li>n8n</li>
                <li>Instantly.ai</li>
                <li>Lemlist</li>
                <li>GoHighLevel</li>
                <li>Reporting Automation</li>
              </ul>
            </div>
            <div className="tool-group">
              <h3>Content &amp; Social</h3>
              <ul className="chips">
                <li>Meta Business Suite</li>
                <li>Canva</li>
                <li>Figma</li>
                <li>Framer</li>
                <li>Instagram</li>
                <li>TikTok</li>
                <li>LinkedIn</li>
                <li>Notion</li>
              </ul>
            </div>
            <div className="tool-group">
              <h3>Communication</h3>
              <ul className="chips">
                <li>Google Workspace</li>
                <li>Slack</li>
                <li>Zoom</li>
                <li>Async Collaboration</li>
                <li>Cross-Cultural Communication</li>
                <li>Technical Documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section className="section section-contact" id="contact">
          <div className="contact-card glass panel">
            <h2>Let's build your pipeline.</h2>
            <p>
              Need someone who can run outreach, keep your CRM honest, and
              automate the busywork? I'm currently open to remote roles and
              projects worldwide.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href="mailto:detinadya.va@gmail.com">
                <Mail aria-hidden="true" />
                detinadya.va@gmail.com
              </a>
              <a
                className="btn btn-ghost"
                href="https://linkedin.com/in/detinadra"
                target="_blank"
                rel="noopener"
              >
                <Linkedin aria-hidden="true" />
                linkedin.com/in/detinadra
              </a>
            </div>
            <div className="contact-hover-text" aria-hidden="true">
              <TextHoverEffect
                text="Work With Deti"
                duration={0.2}
                textClassName="text-4xl"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <FooterBackgroundGradient />
        <p>
          © 2026 Deti Nadya Rahma · Built with care, coffee, and a very tidy
          CRM.
        </p>
      </footer>
    </>
  );
}
