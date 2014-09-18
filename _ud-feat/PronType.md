---
layout: base
title: 'PronType'
shortdef: 'pronominal type'
---

## {{ page.title }}: {{ page.shortdef }}

This feature typically applies to
<a href="../ud-pos/PRON.html">pronouns</a>,
<a href="../ud-pos/DET.html">determiners</a>,
pronominal <a href="../ud-pos/NUM.html">numerals</a> (quantifiers) and
pronominal <a href="../ud-pos/ADV.html">adverbs</a>.

### Prs: personal or possessive personal pronoun or determiner 
(see also the "poss" feature). Note that this also includes reflexive
personal/possessive pronouns (e.g. [cs] "se" / "svůj"; see the
"reflex" feature)

English examples: I, you, he, she, it, we, they, my, your, his, her,
its, our, their, mine, yours, hers, ours, theirs

### Rcp: reciprocal pronoun

Examples: [de] einander, [da] hinanden (= each other)

### Art: article

Article is a special case of determiner that bears the feature of
<a href="Definiteness">definiteness</a> (in other languages, the feature may be marked directly
on nouns).

Examples: [en] _a, an, the;_ [de] _ein, eine, der, die, das;_ [es] _un, una, el, la_

### Int: interrogative pronoun, determiner, numeral or adverb

Note that possessive interrogative determiners ("whose") can be
distinguished by the "poss" feature.

Examples [cs/en]: kdo / who, co / what, který / which, čí / whose,
kolik / how many, how much, kolikátý / how-maniest (ordinal number),
kolikrát / how many times, kde / where, kam / where to, kdy / when,
jak / how, proč / why

### Rel: relative pronoun, determiner, numeral or adverb

Note that in many languages this class heavily overlaps with
interrogatives, yet there are pronouns that are only relative, and in
some languages (Bulgarian, Hindi) the two classes seem to be distinct.

Example [cs]: jenž, což (= "which", "that") are relative but not
interrogative pronouns; jehož (= "whose") is a possessive relative
pronoun.

### Dem: demonstrative pronoun, determiner, numeral or adverb

These are often parallel to interrogatives. Some tagsets might also
distinguish a separate feature of distance ("here" / "there"; [es]
"aquí" / "ahí" / "allí").

Examples [cs/en]: tento / this, tamten / that, takový / such, týž /
same, tolik / so much, tolikátý / so-maniest (ordinal number),
tolikrát / so many times, tady / here, tam / there, teď / now, tak /
so

### Tot: totality (collective) pronoun, determiner or adverb

Examples [cs/en]: každý / every, everybody, everyone, each, všechno /
everything, all, všude / everywhere, vždy / always

### Neg: negative pronoun, determiner or adverb

Examples [cs/en]: nikdo / nobody, nic / nothing, nijaký / no, ničí /
no one's (possessive negative pronoun), žádný / no, none, nikde /
nowhere, nikdy / never, nijak / no way (lit. "no-how")

### Ind: indefinite pronoun, determiner, numeral or adverb

Note that some tagsets might further subclassify this category to
distinguish "some" from "any" etc. At the moment I do not remember
whether and where I really saw it.

Examples 1 [cs/en]: někdo / somebody, něco / something, některý /
some, něčí / someone's (possessive indefinite pronoun), několik / a
few, several (indefinite numeral), několikátý / "a fewth", "severalth"
(indefinite ordinal numeral), několikrát / a few times, several times,
někde / somewhere, někdy / sometimes, nějak / somehow

Examples 2 [cs/en]: kdokoli / anybody, cokoli / anything, kterýkoli /
any, číkoli / anyone's (possessive indefinite pronoun), kdekoli /
anywhere, kdykoli / any time, jakkoli / anyhow

Examples 3 [cs/en]: málokdo / few people, leckdo / quite a few people,
kdosi / somebody…
