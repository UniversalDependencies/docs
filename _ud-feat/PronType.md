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

See also the <a href="Poss">Poss</a> feature that distinguishes normal
personal pronouns from possessives. Note that `Prs` also includes reflexive
personal/possessive pronouns (e.g. [cs] "se" / "svůj"; see the
<a href="Reflex">Reflex</a> feature).

Examples: [en] _I, you, he, she, it, we, they, my, your, his, her,
its, our, their, mine, yours, hers, ours, theirs_

### Rcp: reciprocal pronoun

Examples: [de] _einander,_ [da] _hinanden_ (= each other)

### Art: article

Article is a special case of determiner that bears the feature of
<a href="Definiteness">definiteness</a> (in other languages, the feature may be marked directly
on nouns).

Examples: [en] _a, an, the;_ [de] _ein, eine, der, die, das;_ [es] _un, una, el, la_

### Int: interrogative pronoun, determiner, numeral or adverb

Note that possessive interrogative determiners ("whose") can be
distinguished by the "poss" feature.

Examples: [cs/en] _kdo / who, co / what, který / which, čí / whose,
kolik / how many, how much, kolikátý / how-maniest_ (ordinal number),
_kolikrát / how many times, kde / where, kam / where to, kdy / when,
jak / how, proč / why_

### Rel: relative pronoun, determiner, numeral or adverb

Note that in many languages this class heavily overlaps with
interrogatives, yet there are pronouns that are only relative, and in
some languages (Bulgarian, Hindi) the two classes seem to be distinct.

Examples: [cs] _jenž, což_ (= "which", "that") are relative but not
interrogative pronouns; _jehož_ (= "whose") is a possessive relative
pronoun.

### Dem: demonstrative pronoun, determiner, numeral or adverb

These are often parallel to interrogatives. Some tagsets might also
distinguish a separate feature of distance ("here" / "there"; [es]
"aquí" / "ahí" / "allí").

Examples: [cs/en] _tento / this, tamten / that, takový / such, týž /
same, tolik / so much, tolikátý / so-maniest_ (ordinal number),
_tolikrát / so many times, tady / here, tam / there, teď / now, tehdy / then,
tak / so_

### Tot: totality (collective) pronoun, determiner or adverb

Examples: [cs/en] _každý / every, everybody, everyone, each, všechno /
everything, all, všude / everywhere, vždy / always_

### Neg: negative pronoun, determiner or adverb

Examples: [cs/en] _nikdo / nobody, nic / nothing, nijaký / no, ničí /
no one's_ (possessive negative pronoun), _žádný / no, none, nikde /
nowhere, nikdy / never, nijak / no way_ (lit. "no-how")

### Ind: indefinite pronoun, determiner, numeral or adverb

Note that some tagsets might further subclassify this category to
distinguish "some" from "any" etc. Such distinctions are not part of
universal features but may be added in language-specific extensions.

Examples 1: [cs/en] _někdo / somebody, něco / something, některý /
some, něčí / someone's_ (possessive indefinite pronoun), _několik / a
few, several_ (indefinite numeral/quantifier), _několikátý / "a fewth", "severalth"_
(indefinite ordinal numeral), _několikrát / a few times, several times,
někde / somewhere, někdy / sometimes, nějak / somehow_

Examples 2: [cs/en] _kdokoli / anybody, cokoli / anything, kterýkoli /
any, číkoli / anyone's_ (possessive indefinite pronoun), _kdekoli /
anywhere, kdykoli / any time, jakkoli / anyhow_

Examples 3: [cs/en] _málokdo / few people, leckdo / quite a few people,
kdosi / somebody…_
