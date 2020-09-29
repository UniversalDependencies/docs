---
layout: feature
title: 'Gender[psor]'
shortdef: 'possessor’s gender'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Fem">Fem</a></td>
  <td><a href="#Masc">Masc</a></td>
</tr>
</table>

Possessive adjectives and pronouns may have two different genders: that of the
possessed object (gender agreement with modified noun) and that of
the possessor (lexical feature, inherent gender). The `Gender[psor]`
feature captures the possessor's gender.

In the Czech examples below, the masculine gender implies using
one of the suffixes _-ův, -ova, -ovo,_
and the feminine gender implies using
one of _-in, -ina, -ino._

### <a name="Masc">`Masc`</a>: masculine possessor

#### Examples

* _<b>otcův syn</b>_ “father's son” `Gender[psor]=Masc|Gender=Masc`
* _<b>otcova dcera</b>_ “father's daughter” `Gender[psor]=Masc|Gender=Fem`
* _<b>otcovo dítě</b>_ “father's child” `Gender[psor]=Masc|Gender=Neut`

### <a name="Fem">`Fem`</a>: feminine possessor

#### Examples

* _<b>matčin syn</b>_ “mother's son” `Gender[psor]=Fem|Gender=Masc`
* _<b>matčina dcera</b>_ “mother's daughter” `Gender[psor]=Fem|Gender=Fem`
* _<b>matčino dítě</b>_ “mother's child” `Gender[psor]=Fem|Gender=Neut`
<!-- Interlanguage links updated Út zář 29 20:23:08 CEST 2020 -->
