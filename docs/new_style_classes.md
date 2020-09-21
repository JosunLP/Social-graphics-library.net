---
id: new_style_classes
title: Creating a new style class
---


New classes are created in the 'src' folder according to the scheme NAME.template.ts

___

## The structure

Within the SVG, the corresponding text entries for names and / or team names are replaced by the JS variables.

```

export class Twitch_Template {

    static width = 1920;
    static height = 480;

    static template(teamName: string, playerName:string): string {

        return '<svg></svg>';

    }
}

```

___

## The integration

The new class is integrated in the `generator` method in the`SocialGraphicsLibrary` as a `case` in the `glc.ts` file.

```

public static generator(teamName: string, playerName:string, mode: string, containerId: string, imgMode: string): void {
        let svgString: string;
        let width: number;
        let height: number;

        if (teamName === "" ) {
            teamName = "Community";
        }

        if (playerName === "") {
            playerName = "Player";
        }

        switch (mode) {
            case 'youtube-title':
                svgString = Youtube_Template.template(teamName, playerName);
                width = Youtube_Template.width;
                height = Youtube_Template.height;
                break;

------------------------------------------------------------------------------
 Here ->


------------------------------------------------------------------------------

            default:
                svgString = False_Template.template();
                width = False_Template.width;
                height = False_Template.height;
                break;
        }

        this.printImage(svgString, width, height, containerId, imgMode);

    }

```