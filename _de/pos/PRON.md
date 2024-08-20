---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
udver: '2'
---

### Definition

Pronouns are words that substitute for [nouns](NOUN) or noun phrases,
whose meaning is recoverable from the linguistic or extralinguistic
context.

Pronouns under this definition function like nouns. Note that the
German grammar traditionally extends the term _pronoun_ to words that
behave more like articles or [adjectives](ADJ). Such words are not tagged `PRON`
under our universal scheme. They are tagged as [determiners](DET).
For more details on the borderline between `PRON` and `DET`, see the documentation of [DET]().

The most prominent category of pronouns is the personal pronouns, which identify their referent by signaling its
[Person]() and [Number]() (and sometimes [Gender]()), and which usually occur as subjects or objects in a clause.

Other [pronominal types](PronType) are interrogatives (the referent is the topic of an open question), relatives
(used in a relative clause, signal coreference with the noun modified by the clause), indefinites (the identity
or quality of the referent is unknown), totals (refering to all members in a set) and negatives (signaling
non-existence of a referent).

Every pronoun should have a non-empty value of the [PronType]() feature. Pronouns do not have the [Polarity]()
feature, thus negative pronouns are annotated with `PronType=Neg` but not with `Polarity=Neg`.

### Examples

- personal pronouns: _ich_ “I”, _du_ “you”, _er_ “he”, _sie_ “she”, _es_ “it”, _wir_ “we”, _ihr_ “you”, _sie_ “they”, _sich_ “himself, herself, itself”
- interrogative pronouns: _wer_ “who”, _was_ “what” as in _<b>Was</b> denkst du?_ “<b>What</b> do you think?”
- relative pronouns: _der_ “the one who” as in _Ich sehe den Mann, <b>der</b> gestern im Hotel war._  “I see the man <b>who</b> was yesterday in the hotel.”
- indefinite pronouns: _jemand_ “somebody”, _etwas_ “something”, _man_ “one”
- total pronouns: _jedermann_ “everybody”
- negative pronouns: _niemand_ “nobody”, _nichts_ “nothing”

<!-- Interlanguage links updated Ne 5. května 2024, 18:19:39 CEST -->
