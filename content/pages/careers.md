---
title: Careers
slug: careers
sections:
  - type: GenericSection
    title:
      text: Join Our Team
      color: text-dark
      type: TitleBlock
    subtitle: Be Part of Something Bigger
    text: >
      At Man and Man Enterprise, we are dedicated to innovation and sustainability. Our mission is to provide high-quality, efficient cookstoves that make a positive impact on the environment and the lives of our customers. Join us and help shape a better future.
    actions:
      - label: See Open Positions
        url: /careers
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    backgroundImage:
      type: BackgroundImage
      altText: Teamwork Background
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/teamwork-background.jpg

  - type: FeaturedPeopleSection
    title:
      text: Meet the Team
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    people:
      - content/data/person1.json
      - content/data/person2.json
      - content/data/person3.json
      - content/data/person4.json
      - content/data/person5.json
      - content/data/person6.json
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center

  - type: FeaturedItemsSection
    title:
      text: Open Positions
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: Join Our Growing Team
    items:
      - type: FeaturedItem
        title: Product Manager
        subtitle: Operations
        text: >
          We are looking for a dynamic Product Manager to oversee the development and management of our innovative cookstove products. Join us in creating solutions that make a difference.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center

      - type: FeaturedItem
        title: Open Source Engineer
        subtitle: Engineering
        text: >
          Join our engineering team to contribute to our open source projects. Work with cutting-edge technology and help us build sustainable solutions.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center

      - type: FeaturedItem
        title: Senior Software Engineer
        subtitle: Engineering
        text: >
          We are seeking a Senior Software Engineer to lead our development team. Bring your expertise and help us create innovative and efficient cooking solutions.
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row

    actions:
      - label: Apply Now
        url: /apply
        icon: arrowRight
        iconPosition: right
        style: primary
        type: Button
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-40
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center

seo:
  metaTitle: Careers - Man and Man Enterprise
  metaDescription: Join Man and Man Enterprise to contribute to innovative and efficient cookstove solutions that enhance cooking experiences and reduce environmental impact.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
