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
  <td><a href="#Part">Part</a></td>
  <td><a href="#Vnoun">Vnoun</a></td>
</tr>
</table>

The feature `VerbForm` can be used for verbal or deverbal elements in matrix and embedded clauses.
As of now, Kyrgyz treebanks make use of  `Conv`, `Fin`, `Part`, and `Vnoun`.


### <a name="Conv">`Conv`</a>: converb

The converb, also called transgressive or adverbial participle,
is a non-finite verb form that shares properties of verbs and adverbs.

#### Examples

- _Мен аны <b>басып баратканын</b> көрдүм._ "I saw it while I was walking"
- _Ал <b>окуу менен</b> жакшыраак үйрөнөт._ "She/he learns better by reading"

### <a name="Fin">`Fin`</a>: finite verb

Verbs that are marked for mood ([Mood]()), tense ([Tense]()) or
person ([Person]()) are finite and are assigned the `VerbForm` value `Fin`.
Either embedded or matrix verbs can be finite.
Rule of thumb: If the verb and all of its dependents can be uttered alone without a conversational context, the verb should be finite.

#### Examples

- _Ал үйгө <b>келди</b>._ "She came home."
- _Мен сени үйгө <b>келдин</b> деп ойлогом.._ "I thought you came home."
- _Үйгө <b>келгениңди</b> уктум._ "I heard that you came home."
- _Үйгө <b>келдиң</b>, эч кандай маселе жок._ "You came home, so there is no problem."

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form which functions like an adjective.
The participles are introduced using a number of subordinating suffixes.

If the head of the relative clause is omitted (so-called "headless relative clauses"),
we treat the word like a verbal noun.

#### Examples

- _Мен <b>окуй турган</b> китеп_ "the book that I will read"
- _мен <b>окуган</b> китеп_ "the book that I have read"
- _сен <b>окуп жаткан</b> китеп_ "the book that you are reading"

### <a name="Vnoun">`Vnoun`</a>: verbal noun

Verbal nouns are derived from verbs. Such words in Kyrgyz take the following suffixes:
_-уу, -оо are often called the **infinitive**  and used as the citation form of the
verb. Nevertheless, we annotate them as `VerbForm=Vnoun`, not `Inf`.

#### Examples

- _Мен сенин <b>кетиш</b>-иңди каалайм._ "I want you to go"
- _<b>Учуп</b> кетебиз._ "Let’s take off"
- _<b>Бүттү</b>деп ойлогом._ "I thought you were finished"
- _Мен ал жерден <b>өткүм</b> келген жок._ "I didn’t want to pass there"

