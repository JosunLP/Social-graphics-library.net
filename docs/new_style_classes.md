---
id: new_style_classes
title: Creating a new style class
---


New classes are created in the 'src' folder according to the scheme NAME.template.ts

___

## The structure

Within the SVG, the corresponding text entries for names and / or team names are replaced by the JS variables.

    export class Example_Template {

        static readonly width: number = 1000;

        static readonly height: number = 1000;

        static template(teamName: string, playerName: string): string {
            teamName;
            playerName;
            return 'svg string';
        }
        }


___

## The integration

The new class is integrated in the `generator` method in the`SocialGraphicsLibrary` as a `case` in the `glc.ts` file.

___

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

___

Here ->
___

            default:
                svgString = False_Template.template();
                width = False_Template.width;
                height = False_Template.height;
                break;
        }

        this.printImage(svgString, width, height, containerId, imgMode);

    }

> The class always(!) has a field for the width, one for the height and a method which returns the SVG string.

Various templates for the large social media platforms in .afpub format are available in the `assetes` folder for creating and adapting. These can be opened and edited with programs from the
[Affinity Family of Serif](http://affinity.serif.com/). Alternatively, the files generated from it are located in the `svg` directory.

### Caution!

> When creating an SVG file, it must be ensured that the later dynamic parts are stored as TEXT and not as a vector.

After the SVG is ready, it can be saved in the `svg` directory and the source code of the SVG is entered as a string in the `template()` method. The corresponding test points are replaced by the variables that are transferred to the method.

As long as the name of the file (and the class) is one of the existing ones, with the exception of the example, the example template can now simply be replaced and it will work with the new one. Should the name be different
the class must be entered in the glc file in the `generator` methods.

Then just compile, integrate and it's done.

![Example Gif](https://raw.githubusercontent.com/JosunLP/Social-graphics-library/master/assets/Demo.gif)
