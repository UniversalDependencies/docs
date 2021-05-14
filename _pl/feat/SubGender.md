---
layout: feature
title: 'Animacy'
shortdef: 'animacy'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Masc1">Masc1</a></td>
  <td><a href="#Masc2">Masc2</a></td>
  <td><a href="#Masc3">Masc3</a></td>
</tr>
</table>

Polish masculine nouns can be subclassified into three subgenders based on the forms
of words such as adjectives, which show morphological agreement with nouns. Most forms
are still shared among all masculine subgenders. Semantically, the subgenders align
relatively well with [Animacy](); however, as with all noun classes (including gender
and animacy), there are exceptions that are semantically different from the prototypical
elements of the class they grammatically belong to.

The `SubGender` feature is used only in the LFG treebank of Polish.
The other Polish treebanks, as well as treebanks of other Slavic languages,
encode this phenomenon using the standard feature of `Animacy`.

The following table is an example of a three-way animacy distinction
(human – animate nonhuman – inanimate) in the declension of the masculine
determiner _który_ "which" in Polish (boldface forms in the upper and lower
rows differ from the middle row):

|------------------------------------------------------------------------------------------------------------------------------------------------|
| gender            | sg-nom | sg-gen  | sg-dat  | sg-acc      | sg-ins | sg-loc | pl-nom     | pl-gen  | pl-dat | pl-acc      | pl-ins  | pl-loc  |
|------------------------------------------------------------------------------------------------------------------------------------------------|
| animate human     | który  | którego | któremu | którego     | którym | którym | **którzy** | których | którym | **których** | którymi | których |
| animate non-human | który  | którego | któremu | **którego** | którym | którym | **które**  | których | którym | **które**   | którymi | których |
| inanimate         | który  | którego | któremu | **który**   | którym | którym | które      | których | którym | które       | którymi | których |
|------------------------------------------------------------------------------------------------------------------------------------------------|
{: cellpadding="2" cellspacing="0" }

### <a name="Masc1">`Masc1`</a>: animate human

Human beings, fictional characters, names of professions etc.

#### Examples

* [pl] _<b>mali chłopcy</b>_ “small boys”

### <a name="Masc2">`Masc2`</a>: animate non-human

Animals etc.

#### Examples

* [pl] _<b>małe psy</b>_ “small dogs”

### <a name="Masc3">`Masc3`</a>: inanimate

Nouns that are not animate are inanimate.

#### Examples

* [pl] _<b>małe domy</b>_ “small houses”
<!-- Interlanguage links updated Pá kvě 14 11:08:41 CEST 2021 -->
