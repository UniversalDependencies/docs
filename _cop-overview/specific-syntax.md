---
layout: base
title:  'Syntax'
permalink: cop/overview/specific-syntax.html
---

# Specific constructions

## Impersonal verbs

The small class of mostly Greek origin impersonal verbs takes subject clauses, such as ⲉⲝⲉⲥⲧⲓ 'it is appropriate', which points from main verb to subordinate verb with `csubj`:

~~~ sdparse
ⲟⲩⲕ ⲉⲝⲉⲥⲧⲓ/VERB ⲉ ⲁⲁ/VERB ϥ \n it is not appropriate to do it

csubj(ⲉⲝⲉⲥⲧⲓ, ⲁⲁ)
~~~

**Non-coordinating Greek conjunctions and particles**

Greek conjunctions and particles that are non-coordinating (i.e. not meaning ‘and/or’) are labeled as `advmod` to their associated predicate, as in the following example:

~~~ sdparse
ⲙⲏ ⲁⲣⲁ ⲉ ⲓ ⲟⲩⲏϩ ⲟⲛ ϩⲓϫⲛ ⲧ ⲙⲏⲧⲉ ⲛ ϫⲱ ⲕ \n After all do I still sit upon the middle of your head? 

advmod(ⲟⲩⲏϩ, ⲙⲏ)
~~~

**Inverted modifying construction** - ⲛⲟϭ ⲛϭⲟⲙ

Inverted modifiers of the type ⲛⲟϭ ⲛϭⲟⲙ ‘great power’ (lit. a ‘great of a power’), are analyzed in purely syntactic terms, such that the semantic modifier (ⲛⲟϭ, ⲕⲟⲩⲓ etc.) is the head, as shown below. The initial article also attaches to the syntactic head. The reason for this is primarily to allow for better parser performance, since making the second noun the head would be a very unusual exception. To find this construction we can look for the set of lexemes appearing in this configuration, most often ⲛⲟϭ and ⲕⲟⲩⲓ.

~~~ sdparse
ⲡⲓ ⲛⲟϭ ⲛ ⲃⲁⲣⲟⲥ \n this great burden

det(ⲛⲟϭ, ⲡⲓ) 
nmod(ⲛⲟϭ, ⲃⲁⲣⲟⲥ)
case(ⲃⲁⲣⲟⲥ, ⲛ)
~~~

**Independent possessive pronoun construction** – ⲡⲁ/ⲧⲁ/ⲛⲁ + noun phrase

The independent possessive pronoun ‘that, which is of X, belongs to X’ is analyzed as the head of the phrase, and the possessor is attached as nmod to this:

~~~ sdparse 
ⲛⲁ ⲡⲉ ⲭⲣⲓⲥⲧⲟⲥ \n that which is Christ's

nmod(ⲛⲁ, ⲭⲣⲓⲥⲧⲟⲥ)
det(ⲭⲣⲓⲥⲧⲟⲥ, ⲡⲉ
~~~
