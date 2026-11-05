import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { ArrowUpRight, FlaskConical } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col gap-y-8">
                <div className="flex flex-col gap-y-4 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">{DATA.sections.projects.label}</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{DATA.sections.projects.heading}</h2>
                        <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
                            {DATA.sections.projects.text}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
                <BlurFade
                    delay={BLUR_FADE_DELAY * 12 + DATA.projects.length * 0.05}
                    className="w-full max-w-[800px] mx-auto"
                >
                    <a
                        href="/labs"
                        className="flex w-full items-center gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <FlaskConical className="size-6 shrink-0 text-muted-foreground" aria-hidden />
                        <div className="flex-1">
                            <h3 className="font-semibold">Labs</h3>
                            <p className="mt-1 text-sm text-muted-foreground">Small tests and useful tools I make along the way.</p>
                        </div>
                        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                    </a>
                </BlurFade>
            </div>
        </section>
    );
}

