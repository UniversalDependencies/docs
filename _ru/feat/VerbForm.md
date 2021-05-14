---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Conv">Conv</a></td>
  <td><a href="#Fin">Fin</a></td>
  <td><a href="#Inf">Inf</a></td>
  <td><a href="#Part">Part</a></td>
  <td><a href="#PartRes">PartRes</a></td>
</tr>
</table>

The feature is used exclusively with [verbs](orv-pos/VERB) and [auxiliaries](orv-pos/VERB). 
Participles are treated as [verbs](orv-pos/VERB) and not [adjectives](orv-pos/ADJ) in Russian treebanks.

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite.
In Russian this applies to indicative and imperative forms,
and to the special conditional forms of the [auxiliary verb](ru-pos/AUX) _быть_.

#### Examples

- _несу, несёшь, несёт, несём, несёте, несут_ &nbsp;“I carry, you carry, he/she/it carries, we carry, you carry, they carry”
- _неси, несите_ &nbsp;“carry” (imperative in different persons and numbers)
- _буду, будешь, будет, будем, будете, будут_ &nbsp;“I will be, you will be, he/she/it will be, we will be, you will be, they will be”
- _будь, будьте_ &nbsp;“be” (imperative in different persons and numbers)

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs.
It is also used with the auxiliary _быть&nbsp;_ to form periphrastic future tense,
and it appears as the argument of modal and other verbs.

#### Examples

- _нести_ &nbsp;“to carry”
- _быть_ &nbsp;“to be”

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form that shares properties of verbs
and adjectives. Russian has two types of participles:

- The active past participle
  is used to form the active voice.
- The passive participle
  is used to form the passive voice.

Participles inflect for [Gender]() and [Number]() but not for [Person]().

#### Examples

- _пишущий, пишущая, пишущее, пишущие_ &nbsp;“writing”
- _писаный, писаная, писаное, писаные_ &nbsp;“carried”

### <a name="Conv">`Conv`</a>: converb

The transgressive, also called adverbial participle, is a non-finite
verb form that shares properties of verbs and adverbs.

Imperfective verbs form present transgressive, meaning “while doing”.

Perfective verbs form past transgressive, meaning “having done”.

#### Examples

- _неся;“carrying”)
- _принеся_ &nbsp;“having brought”

- _собака подошла ко мне <b>виляя</b> хвостом;_ “the dog came to me <b>wagging</b> its tail”
- _<b>приготовив</b> обед, она позвала семью к столу;_ “<b>having
  prepared</b> the dinner, she called her family to the table”
<!-- Interlanguage links updated Pá kvě 14 11:08:43 CEST 2021 -->
