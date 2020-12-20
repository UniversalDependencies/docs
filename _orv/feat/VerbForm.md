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
Participles are treated as [verbs](orv-pos/VERB) and not [adjectives](orv-pos/ADJ) in Old East Slavic treebanks.

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite.
In East Slavic this applies to indicative and imperative forms.

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs.
It is also used with the auxiliary _быти_ to form periphrastic future tense,
and it appears as the argument of modal and other verbs.

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form that shares properties of verbs
and adjectives. Old East Slavic has two types of participles:

- The active past participle
  is used to form the active voice.
- The passive participle
  is used to form the passive voice.

Participles inflect for [Gender]() and [Number]() but not for [Person]().

### <a name="PartRes">`Part`</a>: resultative participle, l-form

This is a special case of participles. The value `PartRes` reflects the use of the l-form as transitional 
from perfective/resultative participle in Old Russian to the simple past form in Modern Russian, Belarussian and Ukrainian. 
Just as other verb forms, l-forms differentiate between the imperfective and perfective aspect losing their original 
resultative meaning in Old and Middle East Slavic period. 
Since the feature `Aspect` is taken, we use a language-specific value `VerbForm=PartRes` for l-forms. We also use the value 
`Tense=Past` for them to make annotations consistent in Middle and Modern treebanks. 

Resultative participles inflect for [Gender]() and [Number]() but not for [Person]().

#### Examples

- _послалъ, послала, послало, послали_ &nbsp;“sent”
- _посылалъ, посылала, посылало, посылали_ &nbsp;“was sending”


### <a name="Conv">`Conv`</a>: converb, transgressive

The converb, also called transgressive, adverbial participle or gerund, is a non-finite
verb form that shares properties of verbs and adverbs.

Imperfective verbs form present converb, meaning “while doing”.

Perfective verbs form past converb, meaning “having done”.

## Diff 

In the TOROT treebank, l-forms are annotated as `VerbForm=Part` and `Aspect=Res`. 
In the Old Russian-RNC and Ruthenian treebanks , l-forms are annotated as `VerbForm=PartRes`, `Tense=Past`, and `Aspect=Imp` or `Aspect=Perf`, depending their aspect. 
