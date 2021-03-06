---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
udver: '2'
---

The feature `VerbForm` can be used for verbal or deverbal elements in matrix and embedded clauses. 
As of now, Turkish treebanks make us of `Fin`, `Part`, `Conv`, and `Vnoun`. 

### <a name="Fin">`Fin`</a>: participle

Verbs that are marked for ([Mood]()), tense ([Tense]()) or 
person ([Person]()) are finite and are assigned the `VerbForm` value `Fin`.
Either embedded or matrix verbs can be finite. 
Rule of thumb: If the verb and all of its dependents can be uttered alone without a conversational context, the verb should be finite.

#### Examples

- _Eve **geldi**._ "She came home."
- _Eve **geldin** sanıyordum._ "I thought you came home."
- _Eve **geldin** diye duydum._ "I heard that you came home."
- _Eve **geldin** ya problem kalmadı._ "You came home, so there is no problem."

### <a name="Part">`Part`</a>: participle

Participle is a non-finite verb form which functions as adjectivals.
The participles are introduced using a number of subordinating suffixes.

If the head of the relative clause is omitted (so-called "headless relative clauses"),
we treat the word like a verbal noun.

#### Examples

- _okuyacağım kitap_ "the book that I will read"
- _Ali'nin okuduğu kitap_ "the book that I has read"
- _okuyor olduğun kitap_ "the book that you are reading"

### <a name="Conv">`Conv`</a>: converb

The converb, also called transgressive or adverbial participle,
is a non-finite verb form that shares properties of verbs and adverbs.

#### Examples

- _yürürken gördüm_ "I saw it while I was walking"
- _okuyarak daha iyi öğreniyor_ "She/he learns better by reading"
- _raporu yazılı olarak istiyorlar_ "They want the report in written form"
- _okuyunca anlayacaksın_ "You will understand when you read it"

<!-- Interlanguage links updated Čt lis 12 09:43:08 CET 2020 -->

### <a name="Vnoun">`Vnoun`</a>: verbal noun

Verbalnouns are derived from verbs. Such words in Turkish take the following suffixes: -mA, -(y)Iş, -DIK, -(y)AcAK, -mAK

#### Examples

- _<b>Gitmeni</b> istiyorum._ "I want you to go"
- _<b>Kalkış</b> yapalım._ "Let’s take off"
- _<b>Bitirdiğini</b> sanmıştım._ "I thought you were finished"
- _Oradan <b>geçmek</b> istemiyordum._ "I didn’t want to pass there"

### References
- Aslı Göksel and Celia Kerslake. Turkish: A Comprehensive Grammar.  London: Routledge, 2005.

<!-- Fin and References added March 6, 08:00 CET 2020 -->
