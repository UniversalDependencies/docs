---
layout: postag
title: 'DET'
shortdef: 'determiner'
---

### Definition

The `DET` tag is used for the articles _ein_ “a”, _der_ “the”, and for pronominal words that _can_ pre-modify nouns
(regardless whether they actually do so in the given sentence) and can express agreement in [Gender](), [Number]()
and [Case](). The traditional grammar would label these words as pronouns. In UD, we reserve the [PRON]() category
for pronouns that are always used substantively (as opposed to attributively).

Since the borderline between determiners (`DET`) and pronouns (`PRON`) is determined by the lexicon and not by the
sentence context, some determiners may occur in positions that are traditionally not associated with determiners in
English: they can constitute a nominal (without accompanying a noun) and act as core arguments in a clause. This is
not a problem, as the syntactic information is encoded in the dependency relations.

So the negative determiner _kein_ “no” acts attributively (i.e., as a syntactic determiner) in the following example
and is attached to the modified noun via the [det]() relation.

~~~ sdparse
Der Inhaber würdigt dem Kunden keines Blickes . \n The owner pays the customer no.Masc.Sing.Gen attention.Masc.Sing.Gen .
det(Blickes, keines)
det(attention.Masc.Sing.Gen, no.Masc.Sing.Gen)
~~~

However, in the next example, _keiner_ is directly the nominal occupying the subject position; it is still tagged `DET`
but it is attached via the [nsubj]() relation. We note that the same annotation would also result from positing a noun
phrase _kein Mensch_ “no man”, in which the noun _Mensch_ has been elided.

~~~ sdparse
Keiner interessierte sich für das auffällig ratlose Verhalten der Kunden . \n Nobody.Masc.Sing.Nom was-interested REFL in the conspicuously helpless behavior of-the customers .
nsubj(interessierte, Keiner)
nsubj(was-interested, Nobody.Masc.Sing.Nom)
~~~

Finally, in the third example, the accusative _keine_ is the head of the direct object nominal and it has its own
nominal dependent _von beiden Frauen_ “of the two women”.

~~~ sdparse
Er sagt , dass er keine von beiden Frauen heiraten wolle . \n He says , that he none.Fem.Sing.Acc of the-two women marry wants .
obj(heiraten, keine)
obj(marry, none.Fem.Sing.Acc)
nmod(keine, Frauen)
nmod(none.Fem.Sing.Acc, women)
case(Frauen, von)
case(women, of)
~~~

### Examples

* Articles: _ein_ “a”, _der_ “the”
* Possessive personal determiners: _mein_ “my”, _dein_ “your”, _sein_ “his, its”, _ihr_ “her, their”, _unser_ “our”, _euer_ “your”
* Demonstratives: _dieser_ “this”, _jener_ “that”
* Interrogative determiners: _welcher_ “which”
* Total determiners: _jeder_ “every”, _alle_ “all”
* Negative determiners: _kein_ “no”

### Determiners vs. Pronouns

What has been said above about _kein_ would apply to most of the other determiners, including the indefinite article
_ein_. However, there is the question of the subclass normally encoded by the [PronType]() feature: as an article,
_ein_ would be `PronType=Art`, as a self-standing pronoun it would get `PronType=Ind` (note that _kein_ receives
`PronType=Neg` in both contexts). To be consistent, we treat the `PronType` subclass as lexical (i.e. not changing
with context) and always keep _ein_ in the same subclass: `PronType=Art`. It thus receives a treatment analogous
to the treatment of _kein, mein, dein_.

The situation is even more complicated with the definite article _der_. A homonymous word functions as a relative
pronoun. Not only do we want to use `PronType=Rel` to recognize relative pronouns; some of the forms in the paradigm
are actually not homonymous (the paradigm of the relative pronoun includes the forms _dessen_, _deren_, _denen_, which
cannot be used as definite articles). Therefore, _der_ as a relative pronoun is considered a separate lexeme and its
UPOS tag is [PRON]().

### Determiners vs. Numerals

The word _ein_ can be either translated as the indefinite article “a” or as the numeral “one”. It is always tagged
`DET` and not [NUM](), i.e., we do not attempt to distinguish contexts in which the emphasis is on quantity and not
on indefiniteness. (The quantity is present in any case, as the indefinite article is never used in plural.) However,
note that the word form _eins_ “one” is treated as an independent lemma in the `NUM` category. It is the self-standing
numeral that does not accompany a counted noun (e.g. it can be the answer to the question “How many pieces do you
have?”) and it is different from all forms of the determiner _ein_.

### Determiners vs. Adjectives

TBA: Is _anderer_ a determiner, or an adjective?
