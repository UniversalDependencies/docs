---
layout: feature
title: 'VerbForm'
shortdef: 'form of verb or deverbative'
---

We use `VerbForm` with non-finite verbs that function as heads of adjectival and adverbial clauses.

The verb forms that function as noun phrases (verbal nouns) are not marked with the `VerbForm` feature.
These verb forms are considered two separate syntactic tokens.
See [overview/tokenization]()

### `Part`: participle

Participle is a non-finite verb form which functions as adjectivals.
The participles are introduced using a number of subordinating suffixes.

If the head of the relative clause is omitted (so-called "headless relative clauses"),
we treat the word like a verbal noun.


#### Examples

- _okuyacağım kitap_ "the book that I will read"
- _Ali'nin okuduğu kitap_ "the book that I has read"
- _okuyour olduğun kitap_ "the book that you are reading"

### `Trans`: transgressive

The transgressive, also called adverbial participle,
is a non-finite verb form that shares properties of verbs and adverbs.
In Turkish linguistics, these words are normally called _converbs_.
However, since the UD definition `Trans` covers the use of converbs,
we use the same label.

- _yürürken gördüm_ "I saw it while I was walking"
- _okuyarak daha iyi öğreniyor_ "She/he learns better by reading"
- _raporu yazılı olarak istiyorlar_ "They want the report in written form"
- _okuyunca anlayacaksın_ "You will understand when you read it"
<!-- Interlanguage links updated Út zář 29 20:31:39 CEST 2020 -->
