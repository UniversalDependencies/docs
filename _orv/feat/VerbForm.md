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
  <td><a href="#Sup">Sup</a></td>  
</tr>
</table>

The feature is used exclusively with [verbs](orv-pos/VERB) and [auxiliaries](orv-pos/VERB). 
Participles are treated as [verbs](orv-pos/VERB) and not [adjectives](orv-pos/ADJ) in Old East Slavic treebanks.

### <a name="Fin">`Fin`</a>: finite verb

Rule of thumb: if it has non-empty [Mood](), it is finite.
In East Slavic this applies to indicative and imperative forms.

#### Examples

- _да ѧзъ ти тѹ <b>сѣжѹ</b>_ &nbsp;“I sit here”


### <a name="Inf">`Inf`</a>: infinitive

Infinitive is the citation form of verbs.
It is also used with the auxiliary _быти_ to form periphrastic future tense,
and it appears as the argument of modal and other verbs.

#### Examples

- _велѣно <b>сбирать</b> пошлины_ &nbsp;“it was ordered to collect the fee”


### <a name="Sup">`Sup`</a>: supine

Supine is a rare verb form that is used instead of infinitive as the argument of
the motion verbs.

#### Examples

- _кѹрѧнꙑ съ половьци <b>идоша<b> на пльсковъ <b>прогонитъ</b> всѣволода_ &nbsp;“Kursk people and Cumans went to Pskov to drive Vsevolod away”


### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form that shares properties of verbs
and adjectives. Old East Slavic has two types of participles:

- The active present and past participle
  is used to form the active voice.
- The passive present and past participle
  is used to form the passive voice.

Participles inflect for [Gender]() and [Number]() but not for [Person]().

#### Examples

- _добре <b>правяй</b> скипетро_ &nbsp;“properly governing scepter”
- _<b>писавы</b>_ &nbsp;“who wrote”
- _<b>любимъ</b> отьцемъ_ &nbsp;“he is loved by his father”
- _<b>велѣно</b> сбирать пошлины_ &nbsp;“it was ordered to collect the fee”


### <a name="PartRes">`PartRes`</a>: resultative participle, l-form

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

#### Examples

- _<b>будучи</b> головою_ &nbsp;“being the head”
- _и вы_, _то <b>услышавъ</b>_, _тои товаръ отъималѣ</b>_ &nbsp;“and you, hearing (having heard) this, took away that product”


## Diff 

In the TOROT treebank, l-forms are annotated as `VerbForm=Part` and `Aspect=Res`. 
In the Old Russian-RNC and Ruthenian treebanks , l-forms are annotated as `VerbForm=PartRes`, `Tense=Past`, and `Aspect=Imp` or `Aspect=Perf`, depending their aspect. 

Converbs are annotated as participles in TOROT. (These forms originate in the Proto-Slavic participles but are interpreted as adverbial forms in later texts, see Zalizniak 2004, Lyashevskaya 2010). 
<!-- Interlanguage links updated St lis 3 20:58:32 CET 2021 -->
