---
layout: base
title: 'Number'
shortdef: 'number'
---

## {{ page.title }}: {{ page.shortdef }}

Number is usually an inflectional feature of [nouns](u-pos/NOUN) and,
depending on language, other parts of speech ([adjectives](u-pos/ADJ),
[verbs](u-pos/VERB)) that mark agreement with nouns.

### Sing: singular number

A singular noun denotes one person, animal or thing.

Examples: [en] <I><span style='color:red'>car</span></I>

### Plur: plural number

A plural noun denotes several persons, animals or things.

Examples: [en] <I><span style='color:red'>cars</span></I>

### Dual: dual number

A dual noun denotes two persons, animals or things.

Examples:
[sl] singular <I>glas</I> (voice), dual <I><span style='color:red'>glasova</span></I> (voices), plural <I>glasovi</I> (voices);
[ar] singular سَنَةٌ <I>sanatun</I> (year), dual <span style='color:red'>سَنَتَانِ <I>sanatāni</I></span> (years), plural سِنُونَ <I>sinūna</I> (years).

### Ptan: plurale tantum

Some nouns
appear only in the plural form even though they denote one thing
(semantic singular); some tagsets mark this distinction.
Grammatically they behave like plurals, so `Plur` is
obviously the back-off value here; however, if the language also
marks gender, the non-existence of singular form sometimes means that
the gender is unknown. In
Czech, special type of numerals is used when counting nouns that are
plurale tantum ([NumType]() = Sets).

Example:
[en] <I><span style='color:red'>scissors, pants</span>;</I>
[cs] <I><span style='color:red'>nůžky, kalhoty</span></I>

### Coll: collective / mass / singulare tantum

Collective or
mass or singulare tantum is a special case of singular. It
applies to words that use grammatical singular to describe sets of
objects, i.e. semantic plural. Although in theory they might be able
to form plural, in practice it would be rarely semantically
plausible. Sometimes, the plural form exists and means &ldquo;several
sorts of&rdquo; or
&ldquo;several packages of&rdquo;.

Example: [cs] <I><span style='color:red'>lidstvo</span></I> (mankind)
