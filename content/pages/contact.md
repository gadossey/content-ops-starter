---
title: Contact Us
slug: /contact
sections:
  
  - type: GenericSection
    title:
      text: Contact Us
      color: text-dark
      type: TitleBlock
      styles:
        self:
          textSize: lg:text-3xl md:text-2xl sm:text-xl
    subtitle: Get in Touch
    text: |-
      Have any questions or want to learn more about our initiatives? Reach out to us using the form below.
  
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
          styles:
            self:
              textSize: lg:text-lg md:text-base sm:text-sm
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
          styles:
            self:
              textSize: lg:text-lg md:text-base sm:text-sm
        - name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
          type: TextareaFormControl
          styles:
            self:
              textSize: lg:text-lg md:text-base sm:text-sm
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
          textSize: lg:text-lg md:text-base sm:text-sm
      type: FormBlock
    submitButton:
      type: SubmitButtonFormControl
      label: Submit
      showIcon: false
      icon: arrowRight
      iconPosition: right
      style: primary
      elementId: null
      styles:
        self:
          textSize: lg:text-lg md:text-base sm:text-sm
    badge:
      label: Contact Us
      color: text-primary
      type: Badge
      styles:
        self:
          textSize: lg:text-xl md:text-lg sm:text-base
    colors: bg-light-fg-dark

seo:
  metaTitle: Contact Us
  metaDescription: Discover Man and Man Enterprise Limited's innovative and efficient cookstoves designed to enhance cooking experiences while reducing environmental impact.
  socialImage: /images/main-hero.jpg
  type: Seo

type: PageLayout
---
