---
layout: base
title: 'Number'
shortdef: 'number'
---

## {{ page.title }}: {{ page.shortdef }}

## Number

Number is usually inflectional feature
of nouns and, depending on language, other parts of speech
(adjectives, verbs) that mark agreement with nouns.

### Sing: singular number

A singular noun denotes one person, animal or thing.

Example: [en]
<I>car</I>

### Plur: plural number

A plural noun denotes several persons, animals or things.

Example:
[en] <I>cars</I>

### Dual: dual number

A dual noun denotes two persons, animals or things.

Example: [sl] singular <I>glas</I>
(voice),
dual
<I>glasova</I>
(voices),
plural
<I>glasovi</I>
(voices);
[ar]
singular
سَنَةٌ
<I>sanatun</I>
(year), dual سَنَتَانِ
<I>sanatāni</I>
(years), plural سِنُونَ
<I>sinūna</I>
(years).

### Ptan: plurale tantum

Some nouns
appear only in the plural form even though they denote one thing
(semantic singular); some tagsets mark this distinction.
Grammatically they behave like plurals, so &ldquo;Plur&rdquo; is
obviously the back-off value here; however, if the language also
marks gender, the non-existence of singular form sometimes means that
the gender is unknown. In
Czech, special type of numerals is used when counting nouns that are
plurale tantum (NumType
= Sets).

Example: [en]
<I>scissors, pants;</I>
[cs] <I>nůžky, kalhoty</I>

### Coll: collective / mass / singulare tantum

Collective or
mass or singulare tantum is a special case of singular. It
applies to words that use grammatical singular to describe sets of
objects, i.e. semantic plural. Although in theory they might be able
to form plural, in practice it would be rarely semantically
plausible. Sometimes, the plural form exists and means &ldquo;several
sorts of&rdquo; or
&ldquo;several packages of&rdquo;.

Although mass nouns exist in various
languages (because of their semantic nature), they are rarely marked
in tagsets. I found the value in one tagset of Czech and in Italian
(CoNLL data).

Example: [cs]
<I>lidstvo</I>
(mankind)
