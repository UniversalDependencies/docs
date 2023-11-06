---
layout: relation
title: 'flat'
shortdef: 'flat expression'
udver: '2'
---

The `flat` relation is used to combine the elements of an expression where none of the immediate components can be identified as the sole head using standard substitution tests.
This includes both cases where more than one component passes the head test – as in the name _<b>John Smith</b>_, where either _John_ or _Smith_ can replace the whole in most contexts – and cases where no component does – as in _<b>San Francisco</b>_ (in English).
Note also that the `flat` relation is appropriate in such cases only when no more specific relation applies.
For example, in coordination structures annotated with the [conj]() relation, any of the conjuncts can usually replace the whole.

Flat expressions are annotated with a flat structure, where all subsequent components in the expression are attached to the 
first one using the `flat` label. The assumption is that in these expressions, the `flat` relations
are not syntactic head-modifier relations, and that the structural annotation is in principle arbitrary.
The components of a flat expression may have their own dependents, including nested flat structures.
For example, in the name _<b>Mary Jane Tyler Smith</b>_, both the first name (_<b>Mary Jane</b>_) and the last name
(_<b>Tyler Smith</b>_) are flat expressions, which are combined into a larger flat name (the tree appears [below](#names)).

The prototypes for flat are: (i) [personal names](#names), (ii) [foreign expressions](#foreign-expressions), (iii) [iconic sequences](#iconic-sequences), and (iv) [items separated for readability](#items-separated-for-readability).
These are illustrated in the sections below.
The application of `flat` may extend beyond these prototypes to, e.g., various kinds of name and number expressions.
However, even if an expression is idiosyncratic or follows a specialized pattern, every effort should be made to find a head rather than employing `flat`.
If a head can be found but no substantive dependency relation is appropriate, [dep]() can be used.

Note that what is considered to be transparent linguistic syntax (as opposed to flat structure) is subject to treebank-specific policies.
(E.g., some treebanks might provide proper grammatical analyses in the presence of code-switching,
or treat mathematical notation as following linguistic strategies like predication.)

## Names

A person’s name (or parts thereof) may lack the hallmarks of general constructions in the language, such that no single word can be identified as the head, in which case a flat structure applies. The subtyped relation [flat:name]() is recommended for flat names.

~~~ sdparse
Hillary Rodham Clinton
flat:name(Hillary, Rodham)
flat:name(Hillary, Clinton)
~~~

Nesting is possible:

~~~ sdparse
Mary Jane Tyler Smith
flat:name(Mary, Jane)
flat:name(Tyler, Smith)
flat:name(Mary, Tyler)
~~~

On occasion, an expression with no clear head at the top level will have internal syntactic modifiers or punctuation:

~~~ sdparse
Dwayne " The Rock " Johnson
flat:name(Dwayne, Rock)
flat:name(Dwayne, Johnson)
det(Rock, The)
punct(Rock, "-2)
punct(Rock, "-5)
~~~

The scope of [flat:name]() may extend beyond names of persons to names of other kinds of entities that depart from general headed structure.
The expressions under this category must be established by language-specific criteria.

### Flat vs. non-flat names

<!-- NO LONGER (NECESSARILY) FLAT - MISCHIEVOUS NOMINALS:
~~~ sdparse
Carl XVI Gustaf
flat(Carl-1, Gustaf-3)
flat(Carl-1, XVI-2)
~~~

~~~ sdparse
New York
flat(New, York)
~~~

Titles/honorifics are also analyzed using the `flat` relation. Note that some titles are complex
and have their own internal syntactic structure. Such structure is shown with regular relations embedded under `flat`:

~~~ sdparse
Mr. Smith
flat(Mr., Smith)
~~~

~~~ sdparse
President Obama
flat(President, Obama)
~~~

~~~ sdparse
French actor Gaspard Ulliel
amod(actor-2, French-1)
flat(actor-2, Gaspard-3)
flat(actor-2, Ulliel-4)
~~~

~~~ sdparse
Milliardär Ross Perot \n billionaire Ross Perot
flat(Milliardär-1, Ross-2)
flat(Milliardär-1, Perot-3)
~~~

However if the two halves of a descriptive title and a name appear to be two separate nominals, 
then analysis with `flat` is not appropriate, and [u-dep/appos]() is appropriate. These cases are often set off by
punctuation, such as a comma, but no punctuation may appear in more informal text. 
You can generally test for such examples by asking if the two halves can be reversed; if they can, it is probably an `appos`; 
see the examples there.
-->

Names that have a regular syntactic structure, like _The Lord of the Rings_ and _Captured By
Aliens_, should be annotated with regular syntactic relations rather than flat structures:

~~~ sdparse
The Lord of the Rings
det(Lord, The)
nmod(Lord, Rings)
case(Rings, of)
det(Rings, the)
~~~

~~~ sdparse
The king of Sweden
det(king-2, The-1)
nmod(king-2, Sweden-4)
case(Sweden-4, of-3)
~~~

For organization names with clear syntactic modification structure, the dependencies should 
also reflect the syntactic modification structure using regular syntactic relations, as in:

~~~ sdparse
Natural Resources Conservation Service
amod(Resources-2, Natural-1)
compound(Conservation-3, Resources-2)
compound(Service-4, Conservation-3)
~~~

In addition, regular syntactic relations are used: (i) for a modifying determiner or similar function word and (ii) to connect 
together the words of a description or name which involve embedded prepositional phrases, sentences, etc.,
when these relations are (i) recognized in the language being annotated (i.e., the analyses below are for
French, German, and Spanish, not English) and (ii) deemed not to be grammaticalized to the extent that the original role
of the function words has been lost.

~~~ sdparse
Le Japon
det(Japon-2, Le-1)
~~~

~~~ sdparse
Ludwig van Beethoven
case(Beethoven, van)
nmod(Ludwig, Beethoven)
~~~

~~~ sdparse
Miguel de Cervantes y Saavedra
conj(Cervantes, Saavedra)
cc(Saavedra, y)
case(Cervantes, de)
nmod(Miguel, Cervantes)
~~~

~~~ sdparse
Río de la Plata
case(Plata-4, de-2)
det(Plata-4, la-3)
nmod(Río-1, Plata-4)
~~~

A name may combine flat and non-flat structure. In a Portuguese text, the surname _Paulo da Silva_ would be analyzed as follows:

<!-- REMOVED Júnior -->

~~~ sdparse
Roberto Paulo da Silva
flat:name(Roberto, Paulo)
nmod(Paulo, Silva)
case(Silva, da)
~~~

The above analyses of _Ludwig van Beethoven_ and _Miguel de Cervantes y Saavedra_ assume that _van_ resp. _de_ are prepositions.
This is true in the languages of the names' origin, but it can be expected to change when the name is used in foreign text 
or when sufficient grammaticalization has taken place. For example,
when names like this are annotated in English, the appropriate analysis is as a `flat` name:

~~~ sdparse
Ludwig van Beethoven was a famous German composer .
flat:name(Ludwig, van)
flat:name(Ludwig, Beethoven)
det(composer, a)
amod(composer, famous)
amod(composer, German)
cop(composer, was)
nsubj(composer, Ludwig)
punct(composer, .)
~~~

~~~ sdparse
Río de la Plata
flat:name(Río-1, de-2)
flat:name(Río-1, la-3)
flat:name(Río-1, Plata-4)
~~~

~~~ sdparse
Al Arabiya is a Saudi-owned news organization
flat:name(Al-1, Arabiya-2)
nsubj(organization-7, Al-1)
~~~

And in Modern German or French, these prepositions have generally just become a fossilized part of a family name 
and regularly appear without the given name. Again, here, the flat analysis seems correct:

~~~ sdparse
Von Hohenlohe gewann das Rennen . \n Von Hohenlohe won the race .
flat:name(Von-1, Hohenlohe-2)
nsubj(gewann-3, Von-1)
~~~

<!-- TODO: attachment of Jr.
In the case of proper entities named after people, e.g. _Leland Stanford Jr. University_, the `flat` relation 
should only be used inside the person name, with the rest of the construction analyzed compositionally using 
normal syntactic relations:

~~~ sdparse
Leland Stanford Jr. University
compound(University-4, Leland-1)
flat(Leland-1, Stanford-2)
flat(Leland-1, Jr.-3)
~~~
-->


<!-- ALREADY COVERED BY Mary Jane Tyler Smith
A flat structure can even be nested under another flat structure. For example, the words of an embedded nickname would be treated as a nested flat expression:

~~~ sdparse
Denise " Dee Dee " Bridgewater
flat(Denise, Dee-3)
flat(Dee-3, Dee-4)
flat(Denise, Bridgewater)
punct(Dee-3, "-2)
punct(Dee-3, "-5)
~~~
-->

<!-- MISCHIEVOUS NOMINALS - let's not articulate a policy here, at least not yet
### Some further notes on relations for names

_This paragraph briefly records some of the arguments that have been made in the past on relations for name structure. It is an issue over which there has historically been variation and about which there is some continuing debate._ Examples like 
_French actor Gaspard Ulliel:_ Some treebanks have used `nmod` for titles and honorifics like _Mr._ or _French actor_. Most people think this is inappropriate, since an `nmod` dependent should be a full phrase, which will typically take its own case as a modifier in a cased language. In contrast, these titles seem to be part of the same phrase as the name that follows them; they show case agreement concord in a cased language. Some grammatical traditions, descending from Latin, call _French actor_ in such cases a "fixed (or close) apposition" and take the name as the head. UD has restricted the `appos` relation to following appositives (corresponding to "loose (or wide) apposition" in the Latin tradition). The relation `appos` is only used when you have two full nominals, typically joined loosely, and often separated by a punctuation mark like a comma. So `appos` is not correct for these cases. Sometimes the relation `compound` has been used, but this does not seem right. It implies headedness, and titles do not usually behave like compounds: in German, they are not joined to the following words, as compounds are normally joined in German, and they appear at the beginning of names in both German and Hebrew, even though German compounds are head last and Hebrew compounds are head first. So `compound` does not seem appropriate either. Some UDv1 treebanks used `name` for honorifics like _Mr._, although some felt that was wrong and `name` should be restricted to joining the proper nouns of multi-word names. In UDv2, `name` was removed and replaced by `flat`, which allowed a broader notion of a chunk of unheaded material. In the UDv2 guidelines, cases of both titles and honorifics are joined to names with `flat`.


## Dates and Complex Numerals

Date expressions come in many shapes and forms across languages. In some cases, they have a very clear syntactic
structure, as in _the 4th of July_, and should be annotated with regular dependency relations. In other cases, they
have a flat structure with no clearly discernible head, as in _1 December 2016_, in which case the `flat` relation 
should be used. 

~~~ sdparse
the 4th of July
det(4th, the)
nmod(4th, July)
case(July, of)
~~~

~~~ sdparse
1 December 2016
flat(1, December)
flat(1, 2016)
~~~

The `flat` relation can also be used for other numerals and other numerical expressions that lack phrasal structure.

~~~ sdparse
four thousand
flat(four, thousand)
~~~
-->

## Foreign expressions

This encompasses expressions that may have been borrowed or quoted, but whose original grammatical structure is not necessarily accessible to speakers of the language(s) being annotated.

~~~ sdparse
And then she went : gjiko frac zen .
parataxis(went, gjiko)
flat(gjiko, frac)
flat(gjiko, zen)
~~~

"Foreign" includes not just natural languages but also notational systems that are considered external to natural language proper and are governed by separate rules (e.g., musical chord progressions, software code excerpts).

~~~ sdparse
The Vienna Game move order is 1. e4 e5 2. Nc3 .
nsubj(1., order)
cop(1., is)
flat(1., e4)
flat(1., e5)
flat(1., 2.)
flat(1., Nc3)
~~~

Note that foreign word status (with or without `flat`) should be indicated with the morphological feature [Foreign]()`=Yes`.

**History:** UD v1 had a `foreign` relation, but this is no longer part of the relation taxonomy and has been subsumed under `flat`.

## Iconic sequences

Sequences for which neither head-dependent nor coordination relationships apply include onomatopoeia (_<b>quack quack quack</b>_), “filler” words (_<b>do re mi</b>_), and gibberish (_<b>blargety blarg blarg</b>_).

~~~ sdparse
The duck said quack quack quack
obj(said, quack-4)
flat(quack-4, quack-5)
flat(quack-4, quack-6)
~~~

## Items separated for readability

Here the units separated by spaces or punctuation cannot really be construed as separate lexemes. A common case is telephone numbers:

~~~ sdparse
Call 0118 999 881 999 119 725 3
obj(Call, 0118)
flat(0118, 999-3)
flat(0118, 881)
flat(0118, 999-5)
flat(0118, 119)
flat(0118, 725)
flat(0118, 3)
~~~

But not all “unnecessary” spaces are flat:
- improper spacing within a word should be addressed with [goeswith]()
- space-separated numerals like _1 000 000_ [may be treated as single words](/u/overview/tokenization.html)


<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:56 CET -->
