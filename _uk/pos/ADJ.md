---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
---
### Definition

Adjectives are words that typically modify nouns and specify their
properties or attributes. They may also function as predicates, as in

_Ця машина є зелена.&nbsp;_ “The car is green.”

The `ADJ` tag is intended for ordinary adjectives only. See [DET]()
for determiners and [NUM]() for cardinal numerals.

In accord with the UD approach,
adjectival ordinal numerals _(перший, сьомий, стошістдесятий)&nbsp;_
are tagged as adjectives, although the traditional grammar classifies
them as numerals. They behave like adjectives both morphologically and
syntactically, with the exception that they cannot be compared and
negated.

Most Ukrainian adjectives inflect for
[uk-feat/Gender]() _(великий – велика – велике)&nbsp;_ “big”,
[uk-feat/Number]() _(великий – великі),&nbsp;_ and
[uk-feat/Case]() _(великий – великого – великому – великим – великім),&nbsp;_
[uk-feat/Degree]() _(великий – більший – найбільший).&nbsp;_

### Examples

- _великий&nbsp;_ “big”
- _старий&nbsp;_ “old”
- _зелений&nbsp;_ “green”
- _батьків, материн&nbsp;_ “father's, mother's” (possessive adjectives)
- _перший, другий, третій&nbsp;_ “first, second, third”
- _зроблений &nbsp;_ “done” (passive perfective participial adjective)
- _роблений&nbsp;_ “being done” (passive imperfective participial adjective)
- _роблячий&nbsp;_ “doing” (present participial adjective - it is considered ungrammatical but still used occasionally, which is why it is encoded)
- _зробивший&nbsp;_ “having done” (past participial adjective - it is considered ungrammatical but still used occasionally, which is why it is encoded)

<!--### Border cases-->

<!--Passive participles lie on the border between verbs and adjectives.-->
<!--Core participial forms (ending in consonant or short vowel) are tagged `VERB`.-->
<!--Long forms are participial adjectives and they are tagged `ADJ`.-->
<!--For example:-->

<!--- Verb: _несен, несена, несене, несені, несено_ &nbsp;“carried”-->
<!--- Adjective: _несений, несеная, несенеє, несенії, несено_ &nbsp;“carried”-->

<!--Their meaning is almost identical but the usage slightly varies.-->
<!--Both groups can be used in nominal predication with [copula](uk-dep/cop).-->
<!--Only true participles (verbs) can be used to form the passive voice-->
<!--(but it may be sometimes difficult to distinguish from copula constructions, see [AUX]()).-->
<!--On the other hand, the participial adjectives inflect for case and thus-->
<!--can modify nouns.-->

<!--There is an analogy with some adjectives that preserved so called nominal (short) forms.-->
<!--And these adjectives are not derived from verbs. Example:-->

<!--- Short (nominal) forms: _зелен, зелена, зелене_ &nbsp;“green”-->
<!--- Normal (pronominal) forms: _зелений, зеленая, зеленеє_ &nbsp;“green”-->

<!--Here both groups are `ADJ`. The nominal forms are used in predication,-->
<!--the standard forms both in predication and to modify nouns.-->
<!-- Interlanguage links updated Út zář 29 20:31:25 CEST 2020 -->
