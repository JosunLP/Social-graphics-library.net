---
id: basic_call
title: Basic generation
sidebar_label: Basic generation
slug: /
---

## The basic generator call

The static function `generator` is used to generate a graphic
called on the class `SocialGraphicsLibrary`:

```
new SocialGraphicsLibrary
    .generator(
      teamName,
      mode,
      containerId,
      imgMode
      );

new SocialGraphicsLibrary
    .generator(
      userName,
      teamName,
      mode,
      containerId,
      imgMode
      );
```
___

From a technical point of view, the function takes the variables, calls the corresponding class and uses them to build a picture in the specified mode at the marked position.

___

### Modifiers

* Team name:
  * The user name
  * The team name
* Mode:
  * The mode of the image to be generated
    * youtube-title
      * Generates a Youtube cover picture
    * twitch-title
      * Generates a Twitch cover photo
    * twitter-title
      * Generates a Twitter cover photo
    * elavate-title
      * Generates a Youtube cover picture
    * gaming
      * Generates a gaming logo

* Container ID:
  * Indicates the ID of the container which is the target for
       the generated image is used

* Image mode:
  * The mode of the image to be generated
    * png
    * svg
    * jpeg
    * webp
