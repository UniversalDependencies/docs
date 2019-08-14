---
layout: base
title:  'Syntax'
udver: '2'
---

# Specific constructions

## Impersonal verbs

The small class of mostly Greek origin impersonal verbs takes subject clauses, such as ⲉⲝⲉⲥⲧⲓ 'it is appropriate', which points from main verb to subordinate verb with `csubj`:

~~~ sdparse
ⲟⲩⲕ ⲉⲝⲉⲥⲧⲓ/VERB ⲉ ⲁⲁ/VERB ϥ \n it is not appropriate to do it

csubj(ⲉⲝⲉⲥⲧⲓ, ⲁⲁ)
~~~

## Non-coordinating Greek conjunctions and particles

Greek conjunctions and particles that are non-coordinating (i.e. not meaning ‘and/or’) are labeled as `advmod` to their associated predicate, as in the following example:

~~~ sdparse
ⲙⲏ ⲁⲣⲁ ⲉ ⲓ ⲟⲩⲏϩ ⲟⲛ ϩⲓϫⲛ ⲧ ⲙⲏⲧⲉ ⲛ ϫⲱ ⲕ \n After all do I still sit upon the middle of your head?

advmod(ⲟⲩⲏϩ, ⲁⲣⲁ)
~~~

## Inverted modifying construction - ⲛⲟϭ ⲛϭⲟⲙ

Inverted modifiers of the type ⲛⲟϭ ⲛϭⲟⲙ ‘great power’ (lit. a ‘great of a power’), are analyzed in purely syntactic terms, such that the semantic modifier (ⲛⲟϭ, ⲕⲟⲩⲓ etc.) is the head, as shown below. The initial article also attaches to the syntactic head. The reason for this is primarily to allow for better parser performance, since making the second noun the head would be a very unusual exception. To find this construction we can look for the set of lexemes appearing in this configuration, most often ⲛⲟϭ and ⲕⲟⲩⲓ.

~~~ sdparse
ⲡⲓ ⲛⲟϭ ⲛ ⲃⲁⲣⲟⲥ \n this great burden

det(ⲛⲟϭ, ⲡⲓ)
nmod(ⲛⲟϭ, ⲃⲁⲣⲟⲥ)
case(ⲃⲁⲣⲟⲥ, ⲛ)
~~~

## Independent possessive pronoun construction – ⲡⲁ/ⲧⲁ/ⲛⲁ + noun phrase

The independent possessive pronoun ‘that, which is of X, belongs to X’ is analyzed as the head of the phrase, and the possessor is attached as nmod to this:

~~~ sdparse
ⲛⲁ ⲡⲉ ⲭⲣⲓⲥⲧⲟⲥ \n that which is Christ's

nmod(ⲛⲁ, ⲭⲣⲓⲥⲧⲟⲥ)
det(ⲭⲣⲓⲥⲧⲟⲥ, ⲡⲉ)
~~~

## Rather than - the preposition ⲉϩⲟⲩⲉ

The word ⲉϩⲟⲩⲉ ‘rather than’ is treated as a preposition modifying the nominal it is contrasted with:

~~~ sdparse
ⲁ ⲧⲉⲧⲛ ⲥⲱⲧⲡ ⲛⲏ ⲧⲛ ⲙ ⲡ ⲙⲟⲩ · ⲉϩⲟⲩⲉ/ADP ⲡ ⲱⲛϩ \n you have chosen for yourselves death, rather than life

nmod(ⲙⲟⲩ, ⲱⲛϩ)
case(ⲱⲛϩ,ⲉϩⲟⲩⲉ)
~~~

In cases having a double preposition, ⲉϩⲟⲩⲉ ⲉ, both are attached as `case` to the alternative:

~~~ sdparse
ⲁ ⲧⲉⲧⲛ ⲙⲉⲣⲉ ⲡ ⲕⲁⲕⲉ/N ⲉϩⲟⲩⲉ/ADP ⲉ/ADP ⲡ ⲟⲩⲟⲉⲓⲛ/N \n you have loved darkness, rather than light

nmod(ⲕⲁⲕⲉ, ⲟⲩⲟⲉⲓⲛ)
case(ⲟⲩⲟⲉⲓⲛ,ⲉϩⲟⲩⲉ)
case(ⲟⲩⲟⲉⲓⲛ,ⲉ)
~~~

## Multiple ACONJ chaining rule- ⲛ̄ⲧⲉ-, ⲛ̄= 

In constructions with multiple auxiliary conjunctives (ACONJ), link the clauses together in a chain rather than linking each clause seperately from the root.

Example from Corinthians 1:10:

~~~ sdparse
ϫⲱ ⲙ ⲡⲓ ϣⲁϫⲉ ... ⲛⲧⲉ/ACONJ ⲧⲙ ⲡⲱⲣϫ ϣⲱⲡⲉ ⲛϩⲏⲧ ⲧⲏⲩⲧⲛ. ⲛ/ACONJ ⲧⲉⲧⲛ ϣⲱⲡⲉ.. \n ...all speak the same thing and that there be no divisions among you

advcl(ϫⲱ, ϣⲱⲡⲉ)
aux(ϣⲱⲡⲉ,ⲛⲧⲉ)
advcl(ϣⲱⲡⲉ, ϣⲱⲡⲉ..)
aux(ϣⲱⲡⲉ..,ⲛ)

~~~

## Clauses and fragments with ϩⲱⲥ

The Greek conjunction ϩⲱⲥ introduces adverbial clauses which can be analyzed like any `advcl`:

~~~ sdparse
ϣϣⲉ ⲉⲣⲟ ⲛ ⲉ ⲙⲉⲉⲩⲉ ⲛ ⲧⲉⲓ ϩⲉ ϩⲱⲥ/SCONJ ⲉ ⲛ ⲛⲁ ϯⲗⲟⲅⲟⲥ/V ⲙ ⲡ ⲛⲟⲩⲧⲉ ⲙ ⲙⲏⲛⲉ \n it is fitting for us to think in this way, as if we will report to God daily

advcl(ⲙⲉⲉⲩⲉ,ϯⲗⲟⲅⲟⲥ)
mark(ϯⲗⲟⲅⲟⲥ,ϩⲱⲥ)
~~~

However, ϩⲱⲥ is also used sometimes to introduce an NP, similarly to native Coptic prepositions, despite the fact that it does not behave like a preposition in other respects (e.g. not tightly bound to the following noun). For consistency with the normal adverbial clause case, we annotate these as elliptical adverbial clauses, retaining the label `advcl` for the lexical item and `mark` for ϩⲱⲥ:

~~~ sdparse
ⲛⲉⲕ/DET ⲙⲏⲙⲟⲟⲩ/N ⲉⲧ/SCONJ ϩⲛ/ADP ϩⲉⲛ/DET ϣⲟϣⲟⲩ/N ϩⲱⲥ/SCONJ ⲏⲣⲡ/N \n your urine, which is in jars as wine [is]

acl(ⲙⲏⲙⲟⲟⲩ,ϣⲟϣⲟⲩ)
advcl(ϣⲟϣⲟⲩ,ⲏⲣⲡ)
mark(ⲏⲣⲡ,ϩⲱⲥ)
~~~

## ⲁϩⲣⲟ as the source of a clausal complement (ccomp)

The interrogative pronoun ⲁϩⲣⲟ 'why' can be the source of a clausal complement with `ccomp` pointing to the subordinate clause predicate

Example from Corinthians 4:7:

~~~ sdparse
ⲁϩⲣⲟ/VBD ⲕ/PPERS ⲕ/PPERS ϣⲟⲩϣⲟⲩ/V ⲙⲙⲟ/PREP ⲕ/PPERO ϩⲱⲥ/CONJ ⲉ/CFOC ⲙⲡ/ANEGPST ⲕ/PPERS ϫⲓ/V \n why do you boast as if you had not received it?

ccomp(ⲁϩⲣⲟ, ϣⲟⲩϣⲟⲩ)
advcl(ϣⲟⲩϣⲟⲩ, ϫⲓ)
nsubj(ⲁϩⲣⲟ,ⲕ)

~~~

## ⲙⲉϣⲉ ⲛⲓⲙ 'someone, you don't know who'

The rare irregular fossilized negative verb ⲙⲉϣⲉ can appear in a construction ⲙⲉϣⲉ ⲛⲓⲙ meaning 'someone', but literally composed of '(you) don't know who'. The UD analysis of this construction treats the interrogative ⲛⲓⲙ as `obj`, meaning that the entire complex is treated as clausal. This can be a subject clause:

~~~ sdparse
ⲙⲉϣⲉ/VERB ⲛⲓⲙ/PRON ⲛⲏⲩ/VERB ϣⲁⲣⲟ/ADP ⲕ/PRON \n someone is coming to you (lit. 'don't-know-who is coming to you')

csubj(ⲛⲏⲩ,ⲙⲉϣⲉ)
obj(ⲙⲉϣⲉ,ⲛⲓⲙ)

~~~

If the construction is oblique it can only be analyzed as `advcl`:

~~~
ⲃⲱⲕ/VERB ϣⲁ/ADP ⲙⲉϣⲉ/VERB ⲛⲓⲙ/PRON ⲛ/ADP ⲁⲣⲭⲓⲙⲁⲛⲇⲣⲓⲧⲏⲥ/NOUN \n go to some archmandrite

advcl(ⲃⲱⲕ,ⲙⲉϣⲉ)
mark(ⲙⲉϣⲉ,ϣⲁ)
obj(ⲙⲉϣⲉ,ⲛⲓⲙ)
nmod(ⲛⲓⲙ,ⲁⲣⲭⲓⲙⲁⲛⲇⲣⲓⲧⲏⲥ)
case(ⲁⲣⲭⲓⲙⲁⲛⲇⲣⲓⲧⲏⲥ,ⲛ)
~~~
