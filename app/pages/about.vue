<template>
    <div class="mt-12 flex flex-col gap-8 justify-center max-w-2xl mx-auto">
      <h1>About Me</h1>
      <span class="relative after:absolute after:top-0 after:left-0 after:size-full after:bg-primary/15">
        <NuxtImg
            fit="cover"
            src="/images/hero.jpg"
            height="700"
            width="900"
            preload
            class="w-full sm:w-[750px] aspect-3/2 object-cover"
        />
      </span>
      <span class="text-justify">I’m a software developer with a background in engineering, passionate about creating flexible, user-friendly web solutions. I enjoy working on projects that help small businesses bring their stories to life and showcase their work in a way that captures attention and supports growth. Working across WordPress, Vue, React, and PHP, I build websites, custom plugins, and web apps that are reliable, scalable, and designed to make complex tasks feel simple.</span>
      <div class="flex flex-row w-full justify-between">
        <UIcon name="mdi:vuejs" class="size-10 text-primary"/>
        <UIcon name="mdi:language-typescript" class="size-10 text-primary"/>
        <UIcon name="mdi:language-php" class="size-10 text-primary"/>
        <UIcon name="mdi:wordpress" class="size-10 text-primary"/>
        <UIcon name="mdi:react" class="size-10 text-primary"/>
        <UIcon name="mdi:sql-query" class="size-10 text-primary"/>
      </div>
      <h2>Work Experience</h2>
        <UTimeline
            color="primary"
            :default-value="4"
            :items="workItems"
            size="2xl"
            :ui="{ item: 'md:text-justify' }"
          />
      <h2>Education</h2>
      <span class="relative after:absolute after:top-0 after:left-0 after:size-full after:bg-secondary/5">
        <NuxtImg
            fit="cover"
            src="/images/graduation.jpg"
            height="700"
            width="900"
            loading="lazy"
            class="w-full sm:w-[750px] aspect-3/2 object-cover"
        />
      </span>
      <span class="text-justify">My engineering education taught me to think beyond simply solving a problem—considering why the problem exists, how it impacts people, and what long-term solutions are most effective. I was drawn to this field not just for the technical challenge, but because I’m people-focused and motivated to create solutions that make a positive difference, including contributing to sustainability and protecting the environment. Through hands-on projects and internships, I learned to combine technical skill with thoughtful design, ensuring that solutions are practical, impactful, and responsible.</span>
        <UTimeline
            color="secondary"
            :default-value="4"
            :items="educationItems"
            size="2xl"
            :ui="{ item: 'md:text-justify' }"
          />
    </div>
</template>

<script setup lang="ts">

const workItems = ref<TimelineItem[]>([
  {
    date: 'Aug 2024 – Current',
    title: 'Developer - Hoppstudio',
    description: 'Developing modern web solutions across WordPress, Vue, GraphQL, and APIs, including a white-label learning platform, a headless PWA, and a customisable match centre, while leading workflow improvements and deployment practices.',
    icon: 'lucide:laptop'
  },
  {
    date: 'Jul 2024 – Aug 2024',
    title: 'Venture Data Bootcamp',
    description: 'Analysed, cleaned, and visualised datasets using Python (pandas, Matplotlib) and Power BI, gaining hands-on experience with DAX and PowerQuery.',
    icon: 'lucide:database'
  },
  {
    date: 'Feb 2024 – Jun 2024',
    title: 'Junior Intern',
    description: 'Built a React + Firebase blog application with CRUD functionality, while improving DevOps skills through Git workflows and agile practices.',
    icon: 'i-lucide-code'
  },
  {
    date: 'Jan 2024 – Feb 2024',
    title: 'Data Consultant',
    description: 'Delivered BI dashboards and database solutions, including government traffic data analysis in Power BI and a PostgreSQL football league ER model.',
    icon: 'lucide:database'
  }
])

const educationItems = ref<TimelineItem[]>([
  {
    date: 'Sept 2022 – July 2023',
    title: 'MEng Mechanical & Electrical Engineering (1st Class) - University of Bristol',
    description: 'Y4 Industrial Group Project: Autonomous solar-powered vehicle for last-mile delivery',
    icon: 'lucide:graduation-cap'
  },
  {
    date: 'Summer 2023',
    title: 'Frazer-Nash EC&I Internship',
    description: 'Contributed to engineering projects through research presentations, AutoCAD drawings, component selection, and project management support.',
    icon: 'lucide:building'
  },
  {
    date: 'Sept 2019 – July 2022',
    title: 'BEng Mechanical & Electrical Engineering - University of Bristol',
    description: 'Y3 Individual Research Project: Design and optimisation of a bi-directional battery charger for next-gen EVs',
    icon: 'lucide:university'
  },
  {
    date: 'Jan 2016 – Feb 2018',
    title: 'Whitchurch High School Sixth Form',
    description: 'Further Mathematics (A*), Mathematics (A), Physics (A), Welsh Baccalaureate (B), Chemistry AS Level (A)',
    icon: 'lucide:school'
  }
])
</script>