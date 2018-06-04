---
layout: base
title:  'Simple Noun Phrases'
udver: '2'
---

# Simple Noun Phrases

Noun phrases are a fundamental type of linguistic structure that we expect to find in all languages. Noun phrases occur as core arguments of predicates and typically refer to objects (in a wide sense), but they have a range of other functions as well (including predicative uses). This chapter focuses on noun phrases headed by a noun or pronoun, possibly accompanied by grammatical markers and modifier phrases. Later chapters will cover more complex and atypical types of noun phrases:

* Noun phrases with clausal modifiers
* Apposition and flat structures in noun phrases (names, titles)
* Elliptical noun phrases 

<span style="color: blue">**TO DO:** Decide on groupings and provide links to later chapters.</span>

## Nominal Heads

In the simplest case, a noun phrase consists of a single head word, which is typically a noun, proper noun or pronoun.

~~~ sdparse
hon/PRON såg filmen/NOUN \n she saw the-film
nsubj(såg, hon)
obj(såg, filmen)
~~~
~~~ sdparse
hon/PRON såg Batman/PROPN \n she saw Batman
nsubj(såg, hon)
obj(såg, Batman)
~~~
~~~ sdparse
hon/PRON såg den/PRON \n she saw it
nsubj(såg, hon)
obj(såg, den)
~~~

In all of the Swedish examples above, the subject is the pronoun "hon" (she), while the object is respectively the noun "filmen" (the-movie), the proper noun "Batman", and the pronoun "den" (it). 

### Morphological Analysis of Nominal Heads

Nominal head words should be tagged [NOUN](), [PROPN](), or [PRON](). 

Depending on the language, nominal head words may in addition carry a number of morphological features, of which the most common are: 

* For NOUN: [Case](), [Definite](), [Gender](), [Number]()
* For PRON: [Case](), [Definite](), [Gender](), [Number](), [Person](), [Poss](), [PronType](), [Reflex]()

For example, in the Swedish examples above, we find the following morphological analyses:

* For "filmen" (the-movie): <span style="color: blue">NOUN + Case=Nom\|Definite=Yes\|Gender=Com\|Number=Sing</span>
* For "Batman" (the-movie): <span style="color: blue">NOUN + Case=Nom</span>
* For "den": <span style="color: blue">PRON + Definite=Yes\|Gender=Com\|Number=Sing\|Person=3\|PronType=Prs</span>

## Case Marking 

Case marking is one of the strategies that languages use to encode the grammatical function of a noun phrase. Case marking can be realized through morphological inflection (captured by the feature [Case]() mentioned above) or by various kinds of clitics or adpositions (prepositions and postpositions). In the interest of cross-linguistic parallelism, UD takes a radical approach and treats all adpositions as case markers, attaching them to the nominal head with the [case]() relation.
This allows us to analyze the three following examples as all having direct dependency relations from the predicate to the noun phrase filling the (oblique) agent role in a passivized sentence:

~~~ sdparse
pes/Case=Nom byl honěn kočkou/Case=Ins \n (a/the) cat was chased by (a/the) dog
nsubj:pass(3, 1)
obl(3, 4)
aux:pass(3, 2)
~~~

~~~ sdparse
hunden jagades av katten \n the-dog was-chased by the-cat
nsubj:pass(2, 1)
case(4, 3)
obl(2, 4)
~~~

This means that prepositional (and postpositional) phrases are treated in UD as extended noun phrases, where the nominal head is the referential core while the adposition is a functional marker. This can be seen as an instantiation of Tesnière's notion of a dissociated nucleus (Tesnière, 1959), and does not entail that the adposition is a syntactic dependent of the noun in the narrow sense.

<span style="color: blue">**TO DO:** Provide links to a central bibliography?</span>

## Determiners

<span style="color: blue">**CONTINUE HERE!** </span>

A nominal head does not take any core arguments but may be associated with different types of modifiers:

1. An `nmod` is a nominal phrase modifying the head of another nominal phrase, with or without a special case marker. Treebanks may optionally use `nmod:poss` to distinguish non-adpositional possessives.
2. An `appos` is a nominal phrase that follows the head of another nominal phrase and stands in a co-reference or other equivalence relation to it.
3. An `amod` is an adjective modifying the head of a nominal phrase.
4. A `nummod` is a numeral modifying the head of a nominal phrase.
5. An `acl` is a clause modifying the head of a nominal phrase, with the relative clause `acl:relcl` as an important subtype.

~~~ sdparse
the office of the Chair
nmod(office-2, Chair-5)
~~~

~~~ sdparse
the Chair 's office
nmod:poss(office-4, Chair-2)
~~~

~~~ sdparse
Sam , the manager
appos(Sam, manager)
~~~

~~~ sdparse
Sam eats red meat
amod(meat, red)
~~~

~~~ sdparse
Sam spent forty dollars
nummod(dollars, forty)
~~~

~~~ sdparse
Sam spent everything he had
acl:relcl(everything, had)
~~~

~~~ sdparse
Sam spent everything that he had
acl:relcl(everything, had)
obj(had, that)
~~~

## Function Word Dependents

Nominals may also contain the following typical function word dependents:

* Determiners attach to the head of the nominal with the `det` relation.
* Adpositions attach to the head of the nominal with the `case` relation.
* Classifiers attach to a numeral or possessive with the `clf` relation.

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

~~~ sdparse
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
~~~

~~~sdparse
sān gè xuéshēng \n three clf student
nummod(xuéshēng, sān)
clf(sān, gè)
~~~
