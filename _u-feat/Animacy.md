---
layout: feature
title: 'Animacy'
shortdef: 'animacy'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Anim">Anim</a></td>
  <td><a href="#Hum">Hum</a></td>
  <td><a href="#Inan">Inan</a></td>
  <td><a href="#Nhum">Nhum</a></td>
</tr>
</table>

Similarly to [Gender]() (and to the African noun classes), animacy is
usually a lexical feature of [nouns](u-pos/NOUN) and inflectional feature
of other parts of speech ([pronouns](u-pos/PRON),
[adjectives](u-pos/ADJ), [determiners](u-pos/DET), [numerals](u-pos/NUM),
[verbs](u-pos/VERB)) that mark agreement with
nouns. Some languages distinguish only gender, some only animacy,
and in some languages both gender and animacy play a role in the grammar.
(Some non-UD tagsets then combine the two features into an extended system
of genders; however, in UD the two features are annotated separately.)

Similarly to gender, the values of animacy refer to semantic properties of the
noun, but this is only an approximation, referring to the prototypical members
of the categroy. There are nouns that are treated as grammatically animate,
although semantically the are inanimate.

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

In the corresponding paradigm of Czech, only two values are distinguished:
masculine animate and masculine inanimate:

|------------------------------------------------------------------------------------------------------------------------------------------------|
| gender            | sg-nom | sg-gen  | sg-dat  | sg-acc      | sg-ins | sg-loc | pl-nom     | pl-gen  | pl-dat | pl-acc      | pl-ins  | pl-loc  |
|------------------------------------------------------------------------------------------------------------------------------------------------|
| animate           | který  | kterého | kterému | **kterého** | kterým | kterém | **kteří**  | kterých | kterým | které       | kterými | kterých |
| inanimate         | který  | kterého | kterému | **který**   | kterým | kterém | **které**  | kterých | kterým | které       | kterými | kterých |
|------------------------------------------------------------------------------------------------------------------------------------------------|
{: cellpadding="2" cellspacing="0" }


More generally: Some languages distinguish animate vs. inanimate (e.g. Czech
masculines), some languages distinguish human vs. non-human (e.g. Yuwan, a
Ryukyuan language), and others distinguish three values, human vs. non-human
animate vs. inanimate (e.g. Polish masculines).

### <a name="Anim">`Anim`</a>: animate

Human beings, animals, fictional characters, names of professions
etc. are normally animate. Even nouns that are normally inanimate can be
inflected as animate if they are personified. And some words in some
languages can grammatically behave like animates although there is no
obvious semantic reason for that.

### <a name="Inan">`Inan`</a>: inanimate

Nouns that are not animate are inanimate.

### <a name="Hum">`Hum`</a>: human

A subset of animates where the prototypical member is a human being but not
an animal. Again, there may be exceptions that do not fit the class semantically
but belong to it grammatically.

### <a name="Nhum">`Nhum`</a>: non-human

In languages that only distinguish human from non-human, this value includes
inanimates. In languages that distinguish human animates, non-human animates
and inanimates, this value is used only for non-human animates, while `Inan`
is used for inanimates.
