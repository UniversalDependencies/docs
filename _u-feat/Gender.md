---
layout: feature
title: 'Gender'
shortdef: 'gender'
---

`Gender` is usually a lexical feature of [nouns](u-pos/NOUN) and inflectional feature
of other parts of speech ([pronouns](u-pos/PRON),
[adjectives](u-pos/ADJ), [determiners](u-pos/DET), [numerals](u-pos/NUM),
[verbs](u-pos/VERB)) that mark agreement with
nouns. In English gender affects only the choice of the personal
pronoun _(he / she / it)_ and the feature is usually not encoded in
English tagsets.

See also the related feature of [Animacy]().

African languages have an analogous feature of noun classes: there
might be separate grammatical categories for flat objects, long thin
objects etc. African noun classes are not covered in the current
proposal because none of the tagsets on which the proposal is based
are for a language with noun classes. They might be added in future.

### `Masc`: masculine gender

Nouns denoting male persons are masculine. Other nouns may be also
grammatically masculine, without any relation to sex.

#### Examples

* [cs] _<b>hrad</b>_ "castle"

### `Fem`: feminine gender

Nouns denoting female persons are feminine. Other nouns may be also
grammatically feminine, without any relation to sex.

#### Examples

* [de] _<b>Burg</b>_ "castle"

### `Neut`: neuter gender

Some languages have only the masculine/feminine distinction while
others also have this third gender for nouns that are neither
masculine nor feminine (grammatically).

#### Examples

* [cs] _<b>dítě</b>_ "child"

### `Com`: common gender

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
