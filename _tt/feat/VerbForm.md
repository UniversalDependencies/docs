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
  <td><a href="#Vnoun">Vnoun</a></td>
</tr>
</table>

The feature `VerbForm` can be used for verbal or deverbal elements in matrix and embedded clauses.
As of now, the Tatar treebank makes use of  `Conv`, `Fin`, `Part`, and `Vnoun`.


### <a name="Conv">`Conv`</a>: converb

The converb, also called transgressive or adverbial participle,
is a non-finite verb form that shares properties of verbs and adverbs.
Different converbs of Tatar are distinguished by their aspect value.
Converb also includes a conditional form *-са/сә*, with the specification of `Mood=Cnd`, like Kazakh UD, although Turkish UD considers this form as a finite verb (cf. rule of thumb: if the verb and all of its dependents can be uttered alone without a conversational context, the verb should be finite).
(**TODO:** this needs more discussion)

#### Examples

- _Ул <b>язып</b> утыра_ "He is sitting and writing" (this form does not entail any aspectual feature)
- _Мин <b>сөйли-сөйли</b> <b>арып</b> беттем._ "I’m tired of speaking" `Aspect=Prog|VerbForm=Conv`
- _Яңгыр <b>туктагач</b>, барырбыз_ "We will go after the rain stops" `Aspect=Perf|VerbForm=Conv`
- _Әти <b>килгәнче</b>, озак көттем_ "I had waited long till my father came" `Aspect=Imp|VerbForm=Conv`
- _Казанга <b>барсак</b>, тарихи урыннарны карарбыз_ "If we go to Kazan, we will visit historical places" `Mood=Cnd|VerbForm=Conv`

### <a name="Fin">`Fin`</a>: finite verb

Verbs that are marked for mood ([Mood]()), tense ([Tense]()) or
person ([Person]()) are finite and are assigned the `VerbForm` value `Fin`.
Either embedded or matrix verbs can be finite.
Rule of thumb: If the verb and all of its dependents can be uttered alone without a conversational context, the verb should be finite.

#### Examples

- _Өйгә <b>кайтты</b>._ "He/She came home."

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form which functions like an adjective.
The participles are introduced using a number of subordinating suffixes.

Tatar has past participle, present participle, and future participle.
There are three forms of future participle, *-ачак/әчәк*, *-асы/әсе*, and *-ыр/ер*, which have a slight difference in `Mood`.
Present participle *-учы/үче* usually modifies a noun denoting its agent, typically a person, and often stands by itself without its head to mean Nomen Agensis (like English *-er* in *writer*)

#### Examples

- _мин <b>укыячак</b> китап_ "the book that I will read"
- _Марат <b>укыган</b> китап_ "the book that Marat read"
- _китап <b>укучы</b> кеше_ "the person reading a book"
- _<b>укучы</b>_ "student, pupil" (lit. "the one who reads")

### <a name="Vnoun">`Vnoun`</a>: verbal noun

Verbal nouns are derived from verbs. 
In Tatar, verbal nouns are formed by the suffix *-у/ү*.

#### Examples

- _бар<b>у</b>_ "to go, going, the act of going"

### <a name="Inf">`Inf`</a>: infinitive

Infinitive is a non-finite verb form that may be used together with auxiliaries or verbs to entail additional modal, aspectual, etc. meaning.

Tatar infinitive is marked by the suffix *-ырга/ергә*.

#### Examples

- _бар<b>ырга</b> кирәк "it is necessary to go"
<!-- Interlanguage links updated St lis 3 20:58:32 CET 2021 -->
