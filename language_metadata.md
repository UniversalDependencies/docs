---
layout: base
title:  'Setting up a new language and its metadata'
---

# Coding metadata for the front page

The table on the front page is automatically generated from special lines in the `README.txt` or `README.md` file for every language. This means that in order to add a new language, also its repository must be created, minimally with the readme file. Here is an example of the language metadata block from the [Finnish README file](https://github.com/UniversalDependencies/UD_Finnish/blob/master/README.txt) 

    Documentation status: complete
    Data source: automatic conversion + manual check
    Data available since: UD v1.0
    License: CC BY-SA 4.0

This block can be anywhere in the readme file. The properties are as follows:

* `Documentation status` can be `complete`, `partial`, or `stub`.
* `Data source` can be `automatic conversion`, `automatic conversion + manual check`, or `native UD annotation`.
* `Data available since` can be `UD v1.0`, `UD v1.1`, or `UD v1.2`. As the current release is 1.1, new languages which will be included in 1.2 should set this property accordingly, so that they are included in the upcoming automatic validation runs.
* `License`: anything containing the string `BY-NC-SA` will be given the CC non-commercial logo, `BY-SA` or `BY` the CC logo, and `GNU` the GNU logo. To add any other license, please provide a suitable icon to ginter@cs.utu.fi and sampo.pyysalo@gmail.com.

# Adding a new language into the documentation

Adding a new language to the documentation is a more complex process than it might seem. Right now, please contact ginter@cs.utu.fi and sampo.pyysalo@gmail.com who will get you going.

