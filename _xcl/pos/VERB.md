---
layout: postag
title: 'VERB'
shortdef: 'verb'
udver: '2'
---

### Definition

A verb is a member of the syntactic class of words that typically signal events and actions, can constitute a minimal predicate in a clause, and govern the number and types of other constituents which
may occur in the clause.

Note that the `VERB` tag covers main verbs _(content verbs)_, but it does not cover _auxiliary verbs_ and _copulas,_ for which there is the [AUX](xcl-pos/AUX) tag.

Classical Armenian verbs can have the following forms:

* Finite verb `Fin` (forms inflected for person)
* Infinitive `Inf` (uninflected form coding the secondary predication)
* Converb `Conv` (uninflected form with an optative meaning)
* Participle `Part` (inflected past participle)
* Verbal noun `Vnoun` (inflected deverbal noun; the nominative counsides with the infinitive)

Although the verbal noun functions as a nominal and the past participle can be used adjectivally, they are consistently tagged [VERB](xcl-pos/VERB) or [AUX](xcl-pos/AUX).

Finite verbs can be marked for: [Person](xcl-feat/Person), [Number](xcl-feat/Number), [Aspect](xcl-feat/Aspect), [Mood](xcl-feat/Mood), [Polarity](xcl-feat/Polarity), [Tense](xcl-feat/Tense), and [Voice](xcl-feat/Voice). Participles and verbal nouns have [Case](xcl-feat/Case).

### Examples

* Finate verb: գրեմ/_grem_ ‘I write’
* Infinitive: գրել/_grel_ ‘to write’
* Converb: գալոց/_galocʽ_ ‘for coming’
* Participle: մտեալ/_mteal_ ‘entering’
* Verbal noun: գրել/_grel_ ‘writing’

### References

Jensen, Hans. 1959. Altarmenische Grammatik. Heidelberg: Winter.

Meillet, Antoine. 1913. _Altarmenisches Elementarbuch._ Heidelberg: Winters (<a href="https://archive.org/details/altarmenischesel00meil/page/n5/mode/2up" target="_blank">Internet Archive</a>)

Klingenschmitt, Gert. 1982. _Das Altarmenische Verbum._ Wiesbaden: Reichert Verlag.
