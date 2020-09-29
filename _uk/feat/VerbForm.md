---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
---

Even though the name of the feature seems to suggest that it is used exclusively with [verbs](uk-pos/VERB), it is not the case. The `Part` value can be used also with [adjectives](uk-pos/ADJ). It distinguishes participles from other verb forms, and participial adjectives from other adjectives.

### `Fin`: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite. In Ukrainian this applies to indicative and imperative forms, and to the special conditional forms of the auxiliary verb _бути_.

#### Examples

- _несу, несеш, несе, несемо, несете, несуть_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _матиму,&nbsp; матимеш,&nbsp; матиме,&nbsp;_ _матимемо,&nbsp;_ _матимете,&nbsp;_ _матимуть_ (the future synthetic forms of _мати&nbsp;_“to have” in different genders and numbers)
- _робитиму,&nbsp;_ _робитимеш,&nbsp;_ _робитиме,&nbsp;_ _робитимемо,&nbsp;_ _робитимете,&nbsp;_ _робитимуть_ (the future synthetic forms of _робити&nbsp;_ “to do” in different genders and numbers)
- _ніс, несла, несло, несли_ &nbsp;“carried” (past tense forms in different genders and numbers)
- _неси, несімо, несіть_ &nbsp;“carry” (imperative in different persons and numbers)
- _є, *єси_ &nbsp;the present form of “be”, (*the form with asterisk is archaic)
- _буду, будеш, буде, будемо, будете, будуть_ &nbsp;“I will be, you will be, he/she/it will be, we will be, you will be, they will be”
- _би, б, *бим, *бис, *бисми, *бисте_ &nbsp;“would, I would, you would, we would, you would” (*the forms with asterisks are dialectal)
- _будь, будьмо, будьте_ &nbsp;“be” (imperative in different persons and numbers)

### `Inf`: infinitive

Infinitive is the citation form of verbs. It is also used with the auxiliary _бути&nbsp;_ to form periphrastic future tense, and it appears as the argument of modal and other verbs.

#### Examples

- _нести_ &nbsp;“to carry”
- _бути_ &nbsp;“to be”

### `Imps`: impersonal

Impersonal form ending with _-но/-то_. In Slavic languages other than Ukrainian and Polish this form coincides with the neutral passive adjectival participle, but in those two languages the participle has a different ending: _-не_ in Ukrainian and _-ne_ in Polish, which is why it is treated as a separate verbal form.

#### Examples

- _несено_&nbsp;“(it was/somebody) carried” (passive impersonal form), cf. also _писане правило_ “a written rule” vs _писано правило_ “a rule was/is written”.


### `Part`: participle

The adverbial participle, also called transgressive, is a non-finite verb form that shares properties of verbs and adverbs.

- Imperfective verbs form present adverbial participle, meaning “while doing”.
- Perfective verbs form past adverbial participle, meaning “having done”.

The adjectival participle is a non-finite verb form that shares properties of verbs and adjectives. It inflects for [Gender]() and [Number]() but not for [Person](). Ukrainian has two types of participles:
- Passive adjectival participle is used to construct passive voice. It is also used separately as an adjective: _ношений, драний_ &nbsp;“carried, torn/ragged”. Their meaning is almost identical but the usage slightly varies. Both groups can be used in nominal predication with [copula](uk-dep/cop). Only true participles can be used to form the passive voice but it is sometimes difficult to distinguish them from copula constructions, see [AUX](). On the other hand, the deverbal (participial) adjectives inflect for case and thus can modify nouns.
- Active participle (it is considered ungrammatical but still used occasionally, which is why it is encoded).

#### Examples

- _несучи, нісши_ &nbsp;“carrying” (present and past adverbial participles)
- _принісши_ &nbsp;“having brought” (past adverbial participle)
- _несений, несена, несене, несені_ &nbsp;“carried” (passive adjectival participle in different genders and numbers)
- _несучий, несуча, несуче, несучі_ &nbsp;“carrying” (present adjectival participle in different genders and numbers)
<!-- Interlanguage links updated Út zář 29 18:41:01 CEST 2020 -->
