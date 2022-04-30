---
layout: feature
title: 'Number'
shortdef: 'number'
udver: '2'
---

`Number` is an inflectional feature of nouns and other parts of speech (adjectives, verbs) that mark agreement with nouns.

In Turkish, nouns (`NOUN`, `PROPN`, `PRON`) and verbs (`VERB`, `AUX`) may have the feature `Number`.
Note that the number agreement between a subject noun and the predicate is not straightforward.
Plural nouns agree with predicates with both singular and plural marking,
but singular nouns disagree with predicates with plural marking.
When a subject is explicit, the singular form of the verb is preferred.
Otherwise, the person/number agreement marker indicates the `Number` feature of the subject (as well as [Person]()).

In case plurality is indicated by a modifier (e.g., `NUM`), the noun does not get an explicit plural marker (see example 2 for `Sing`).

We mark `Number=Plur` only if there is an explicit morphological marker.

The `Number` feature should not be confused with [Number\[psor\]](Number_psor),
which indicates the whether the <b>possessor</b> of a noun is singular or plural.

### <a name="Sing">`Sing`</a>: singular number

A single person or thing. There is no morphological marker for singular for nouns and verbs in 3rd person singular form.

#### Examples

* *бер алма* "one/an apple"
* *өч алма* "three apples" -- note the missing plural marker.
 _\*өч <b>алмалар</b>_ is ungrammatical.
* *укыдым* "(I) read (Past)" `Number=Sing|Person=1|Tense=Past|VerbForm=Fin`

### <a name="Plur">`Plur`</a>: plural number

More than one person or thing.
On nouns plurality is indicated by suffix *-лар/ләр*.
Plurality on verbs is indicated by a person/number suffix which varies depending on its preceding suffixes.

#### Examples

* *алма<b>лар</b>* "apples"
* *укыды<b>к</b>* '(We) read-PAST' `Number=Plur|Person=1|Tense=Past|VerbForm=Fin`
* *Укучы<b>лар</b> китап укыячак(<b>лар</b>)* "The students will read books" -- the plural marker on the verb is optional.
* *Китап укыячак<b>лар</b>* "(They) will read books" -- Plurality of the subject is inferred from the agreement marker on the verb.
<!-- Interlanguage links updated St lis 3 20:58:24 CET 2021 -->
