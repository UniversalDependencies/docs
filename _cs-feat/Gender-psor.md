---
layout: feature
title: 'Gender[psor]'
shortdef: 'possessor’s gender'
---

Possessive adjectives and pronouns may have two different genders: that of the
possessed object (gender agreement with modified noun) and that of
the possessor (lexical feature, inherent gender). The `Gender[psor]`
feature captures the possessor's gender.

In the Czech examples below, the masculine gender implies using
one of the suffixes _-ův, -ova, -ovo,_
and the feminine gender implies using
one of _-in, -ina, -ino._

### `Masc`: masculine possessor

#### Examples

* _<b>otcův syn</b>_ “father's son” `Gender[psor]=Masc|Gender=Masc`
* _<b>otcova dcera</b>_ “father's daughter” `Gender[psor]=Masc|Gender=Fem`
* _<b>otcovo dítě</b>_ “father's child” `Gender[psor]=Masc|Gender=Neut`

### `Fem`: feminine possessor

#### Examples

* _<b>matčin syn</b>_ “mother's son” `Gender[psor]=Fem|Gender=Masc`
* _<b>matčina dcera</b>_ “mother's daughter” `Gender[psor]=Fem|Gender=Fem`
* _<b>matčino dítě</b>_ “mother's child” `Gender[psor]=Fem|Gender=Neut`
