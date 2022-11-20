---
layout: feature
title: 'Gender'
shortdef: 'gender'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Com">Com</a></td>
  <td><a href="#Fem">Fem</a></td>
  <td><a href="#Masc">Masc</a></td>
  <td><a href="#Neut">Neut</a></td>
</tr>
</table>

Gender is a lexical feature of [nouns](el-pos/NOUN), [proper nouns](el-pos/PROPN), [adjectives](el-pos/ADJ), [determiners](el-pos/DET), [pronouns](el-pos/PRON),  [numerals ](el-pos/NUM) and [verbs](el-pos/VERB)(participles). There are three values of gender: masculine, feminine, and neuter.
In Modern Greek Gender is grammatical in general although in the case of annimates it is more likely that  grammatical gender denotes the sex. 

### <a name="Com">`Com`</a>: common gender

Some languages do not distinguish masculine/feminine most of the time
but they do distinguish neuter vs. non-neuter (Swedish neutrum /
utrum). The non-neuter is called common gender.

Note that it could also be expressed as a combined value
`Gender=Fem,Masc`. Nevertheless we keep `Com` also as a separate
value. Combined feature values should only be used in exceptional,
undecided cases, not for something that occurs systematically in the
grammar. Language-specific extensions to these guidelines should
determine whether the `Com` value is appropriate for a particular
language.

Note further that the `Com` value is not intended for cases where
we just cannot derive the gender from the word itself (without seeing the context),
while the language actually distinguishes `Masc` and `Fem`.
For example, in Spanish, nouns distinguish two genders, masculine and feminine, and
every noun can be classified as either `Masc` or `Fem`. Adjectives are supposed to
agree with nouns in gender (and number), which they typically achieve by alternating _-o / -a._
But then there are adjectives such as _grande_ or _feliz_ that have only one form for both genders.
So we cannot tell whether they are masculine or feminine unless we see the context.
Yet they are either masculine or feminine (feminine in _una ciudad grande,_ masculine in _un puerto grande)._
Therefore in Spanish we should not tag _grande_ with `Gender=Com`.
Instead, we should either drop the gender feature entirely
(suggesting that this word does not inflect for gender)
or tag individual instances of _grande_ as either masculine or feminine, depending on context.

#### Examples

* [sv] _<b>väg</b>_ "way"




### <a name="Fem">`Fem`</a>: feminine gender

Nouns denoting female persons are feminine. Other nouns may be also
grammatically feminine, without any relation to sex.

#### Examples

* _Μαρία_ "Mary"
* _γυναίκα_ “woman”
* _νοσοκόμα_ “(female) nurse”
* _αυλή_ “yard”

### <a name="Masc">`Masc`</a>: masculine gender

Nouns denoting male persons are masculine. Other nouns may be also
grammatically masculine, without any relation to sex.

#### Examples

* _Γιώργος_ “Geogre”
* _άντρας_ “man”
* _δικαστής_ “judge”
* _σωλήνας_ "pipe"

### <a name="Neut">`Neut`</a>: neuter gender

This third gender is for nouns that are neither
masculine nor feminine (grammatically). They still may denote humans of either sex.

#### Examples

* _αγόρι_ "boy"
* _κορίτσι_ "girl"
* _το Λενιώ_ "Helen (diminutive)"
* _χωριό_ "village"
* _σχολείο_ "school"
<!-- Interlanguage links updated Po lis 14 15:34:46 CET 2022 -->
