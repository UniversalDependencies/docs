---
layout: postag
title: 'X'
shortdef: 'other'
udver: '2'
---

### Definition

The tag `X` is used for words that cannot be assigned to a regular part-of-speech category.

A special use of `X` is in cases of code-switching where it is not possible (or meaningful) to analyze the intervening language grammatically (and where the dependency relation [flat]() is typically used in the syntactic analysis; on the morphological layer, these words should use the feature [Foreign=Yes](../feat/Foreign)). We also use `X` with the dependency relation [goeswith]().

This usage does not extend to ordinary loan words, which should instead be assigned their appropriate part of speech. For example, in _<b>վիտէօ</b> հարցազրոյցներու շարք_/_<b>vitēò</b> harc’azroyc’nerow šark’_ “A series of video interviews”, _վիտէօ_/_vitēò’_ is tagged [NOUN]().

Note that articles, prepositions, and filiation markers occurring in foreign names (_դը_/_dë_, _դե_/_de_, _դ՚_/_d՚_, _ֆոն_/_fon_, _դել_/_del_, _վան_/_van_, _օղլու_/_òġlow_, _աբու_/_abow_) are also tagged [X]().

### Examples

- _քունաֆէ <b>պըլ ճըպնէ</b> կը ծախէր_/_k’ownafē <b>pël č̣ëpnē</b> kë çaxēr_ “He used to sell knafeh with cheese”,
- _<b>Matomo Analytics</b> համակարգը_/_<b>Matomo Analytics</b> hamakargë_ “The Matomo Analytics system”,
- _Մուրատ <b>Ապու</b> Եուսէֆ_/_Mowrat <b>Apow</b> Eowsēf_ “Mourad Abu Youssef”.
<!-- Interlanguage links updated Út 30. června 2026, 10:58:39 CEST -->
