---
id: inject_template
title: Inject Template (Experimental Feature)
sidebar_label: Inject Template (Experimental Feature)
---

## Inject Template (Experimental Feature)

As an alternative to forking the project, it is possible to inject your own templates locally. To do this, simply install the NPM package with `npm i social-graphics-library`, then after the initialization a template can be injected with the following method:

    new SocialGraphicsLibrary.inject([
      {
        "callName": "template_name",
        "template": new Template()
      }