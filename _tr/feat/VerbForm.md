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
As of now, Turkish treebanks make use of  `Conv`, `Fin`, `Part`, and `Vnoun`.


### <a name="Conv">`Conv`</a>: converb

The converb, also called transgressive or adverbial participle,
is a non-finite verb form that shares properties of verbs and adverbs.

#### Examples

- _<b>yürürken</b> gördüm_ "I saw it while I was walking"
- _<b>okuyarak</b> daha iyi öğreniyor_ "She/he learns better by reading"
- _raporu yazılı <b>olarak</b> istiyorlar_ "They want the report in written form"
- _<b>okuyunca</b> anlayacaksın_ "You will understand when you read it"


### <a name="Fin">`Fin`</a>: finite verb

Verbs that are marked for mood ([Mood]()), tense ([Tense]()) or
person ([Person]()) are finite and are assigned the `VerbForm` value `Fin`.
Either embedded or matrix verbs can be finite.
Rule of thumb: If the verb and all of its dependents can be uttered alone without a conversational context, the verb should be finite.

#### Examples

- _Eve <b>geldi</b>._ "She came home."
- _Eve <b>geldin</b> sanıyordum._ "I thought you came home."
- _Eve <b>geldin</b> diye duydum._ "I heard that you came home."
- _Eve <b>geldin</b> ya problem kalmadı._ "You came home, so there is no problem."

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form which functions like an adjective.
The participles are introduced using a number of subordinating suffixes.

If the head of the relative clause is omitted (so-called "headless relative clauses"),
we treat the word like a verbal noun.

#### Examples

- _<b>okuyacağım</b> kitap_ "the book that I will read"
- _Ali'nin <b>okuduğu</b> kitap_ "the book that I have read"
- _okuyor <b>olduğun</b> kitap_ "the book that you are reading"

### <a name="Vnoun">`Vnoun`</a>: verbal noun

Verbal nouns are derived from verbs. Such words in Turkish take the following suffixes:
_-mA, -(y)Iş, -DIK, -(y)AcAK, -mAK._ Note that the forms with _-mAK_ are often called
the **infinitive** (Göksel and Kerslake, p. 412) and used as the citation form of the
verb. Nevertheless, we annotate them as `VerbForm=Vnoun`, not `Inf`.

#### Examples

- _<b>Gitmeni</b> istiyorum._ "I want you to go"
- _<b>Kalkış</b> yapalım._ "Let’s take off"
- _<b>Bitirdiğini</b> sanmıştım._ "I thought you were finished"
- _Oradan <b>geçmek</b> istemiyordum._ "I didn’t want to pass there"

### References
- Aslı Göksel and Celia Kerslake. Turkish: A Comprehensive Grammar.  London: Routledge, 2005.

<!-- Interlanguage links updated Čt lis 12 09:43:08 CET 2020 -->
