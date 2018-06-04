---
layout: base
title:  'Simple Noun Phrases'
udver: '2'
---

# Simple Noun Phrases

Noun phrases are syntactic constituents headed by a noun or pronoun. They occur as core arguments of predicates and typically refer to objects (in a wide sense), but they have a range of other functions as well (including predicative uses). 

## Nominal Heads

In the simplest case, a noun phrase consists of a single head word, which is typically a noun, proper noun or pronoun.

~~~ sdparse
hon såg **filmen** . \n she saw the-film
obj(såg, filmen)
~~~
~~~ sdparse
hon såg Batman \n she saw Batman
obj(såg, Batman)
~~~
~~~ sdparse
hon såg den \n she saw it
obj(såg, den)
~~~

Nominal head words are tagged as [NOUN]() ("filmen"), [PROPN]() ("Batman") or [PRON]() ("den"), respectively. Depending on the language, nominal head words may in addition carry a number of morphological features. For example, the noun "filmen" is a singular, definite common gender noun ([Definite]()=Yes, [Gender]()=Common, [Number]()=Sing), and "den" is a third-person, singular, definite, common gender personal pronoun ([Definite]()=Yes[Gender]()=Common, [Number]()=Sing, [Person]()=3,[PronType]=Prs). An important feature of nouns in many languages is [Case](), which normally gives information about the relation of the noun phrase to its syntactic head. The following examples illustrate different case forms of the Czech noun "?":

<span style="color: blue">**TODO:** Add relevant examples from Czech here (perhaps a nominative subject, an accusative objects, and a genitive nmod). </span>

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
