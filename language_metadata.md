---
layout: base
title:  'Setting up a new language and its metadata'
---

# Coding metadata for the front page

The table on the front page is automatically generated from special lines in the `README.txt` or `README.md` file for every language. This means that in order to add a new language, also its repository must be created, minimally with the readme file. Here is an example of the language metadata block from the [Finnish README file](https://github.com/UniversalDependencies/UD_Finnish/blob/master/README.txt) 

    Documentation status: complete
    Data source: semi-automatic
    Data available since: UD v1.0
    License: CC BY-SA 4.0
    Genre: blog wiki legal news fiction
    Contributors: Ginter, Filip; Kanerva, Jenna; Laippala, Veronika; Missilä, Anna; Pyysalo, Sampo

This block can be anywhere in the readme file. The properties are as follows:

* `Documentation status` can be `complete`, `partial`, or `stub`.
* `Data source` can be `automatic`, `semi-automatic`, or `manual`. Here, as a rough guidance, `manual` means that every word of every sentence has been manually checked, whereas `semi-automatic` means an automatic conversion with major manual checks of various types of constructions.
* `Data available since` can be `UD v1.0`, `UD v1.1`, or `UD v1.2`. As the current release is 1.1, new languages which will be included in 1.2 should set this property accordingly, so that they are included in the upcoming automatic validation runs.
* `License`: anything containing the string `BY-NC-SA` will be given the CC non-commercial logo, `BY-SA` or `BY` the CC logo, and `GNU` the GNU logo. To add any other license, please provide a suitable icon to ginter@cs.utu.fi and sampo.pyysalo@gmail.com.
* `Genre`: this is simply a space-separated list of genres which gets mapped into symbols in the table. The possible genres are listed in [this file](https://github.com/UniversalDependencies/docs/blob/pages-source/gen_index/genre_symbols.json) in the repository. If you don't see yours, just edit the file on GitHub and add your genre, choosing one of the symbols from [the *FontAwesome* list](https://fortawesome.github.io/Font-Awesome/icons/). Please make sure you get the syntax right, since this is a machine-readable JSON file. It is also possible to not add the genre to the `genre_symbols.json` file, in which case the default symbol will be used automatically. The genre name will still remain visible in the mouse-over tooltip.
* `Contributors`: the list of contributors to be included with the data release and in the LINDAT download page. This is a semi-colon separated list where every name is in the `Last, First` form and the readme file should be utf-8 encoded to make sure special characters are preserved correctly.

# Adding a new language into the documentation

Adding a new language to the documentation is a more complex process than it might seem. Right now, please contact ginter@cs.utu.fi and sampo.pyysalo@gmail.com who will get you going.

