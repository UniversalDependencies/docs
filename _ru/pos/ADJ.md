---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
---

### Definition

Adjectives are words that typically modify nouns and specify their
properties or attributes. They may also function as predicates, as in

_Машина зеленая_ “The car is green.”

The `ADJ` tag is intended for ordinary adjectives only. See [DET]()
for determiners and [NUM]() for cardinal numerals.

In accord with the UD approach,
adjectival ordinal numerals _(первый, седьмой, стопятидесятый)&nbsp;_
are tagged as adjectives, although the traditional grammar classifies
them as numerals. They behave like adjectives both morphologically and
syntactically, with the exception that they cannot be compared and
negated.

Most Russian adjectives inflect for
[ru-feat/Gender]() _(большой – большое – большая)_ “big”,
[ru-feat/Number]() _(большой – большие)_,
[ru-feat/Case]() _(большой – большого – большому – большим – большом)_,
[ru-feat/Degree]() _(большой – больше – наибольший)_ and
[Negation](ru-feat/Negative) _(большой – небольшой)_.

### Examples

- _большой_ “big”
- _старый_ “old”
- _зеленый_ “green”
- _студенческий, учительский_ “student's, teacher's” (possessive adjectives)
- _первый, второй, третий_ “first, second, third”
- _сделанный_ “done” (passive participial adjective)
- _делающий_ “doing” (present participial adjective, derived from present transgressive)
- _сделавший_ “having done” (past participial adjective, derived from past transgressive)

### Border cases

Passive participles lie on the border between verbs and adjectives.
Core participial forms (ending in consonant or short vowel) are tagged `VERB`.
Long forms are participial adjectives and they are tagged `ADJ`.
For example:

- Verb: _писан, писано, писана, писаны_ &nbsp;“written”
- Adjective: _писанный, писанное, писанная, писанные_ &nbsp;“written”

Only true participles (verbs) can be used to form the passive voice
(but it may be sometimes difficult to distinguish from copula constructions, see [AUX]()).
On the other hand, the participial adjectives inflect for case and thus
can modify nouns.

There is an analogy with some adjectives that preserved so called nominal (short) forms.
And these adjectives are not derived from verbs. Example:

- Short (nominal) forms: _стар, старо, стара_ &nbsp;“old”
- Normal (pronominal) forms: _старый, старое, старая_ &nbsp;“old”

Here both groups are `ADJ`. The nominal forms are used in predication,
the standard forms both in predication and to modify nouns.
<!-- Interlanguage links updated Út zář 29 20:31:25 CEST 2020 -->
