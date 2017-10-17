---
layout: relation
title: 'flat'
shortdef: 'flat multiword expression'
udver: '2'
---

The `flat` relation is one of three relations for multiword expressions multiword expressions (MWEs) in UD 
(the other two being [fixed]() and [compound]()). It is used for exocentric (headless) semi-fixed MWEs like
names (_Hillary Rodham Clinton_) and dates (_24 December_). It contrasts with [fixed](), which applies to
completely fixed grammaticized (function word-like) MWEs (like _in spite of_), and with [compound](), which applies to
endocentric (headed) MWEs (like _apple pie_).

Flat MWEs are annotated with a flat structure, where all subsequent words in the expression are attached to the 
first one using the `flat` label. The assumption is that these expressions do not have any internal syntactic structure 
and that the structural annotation is in principle arbitrary. In practice, however, it is highly desirable to use 
a consistent annotation of all flat MWEs in all languages.

Below we describe some of the most common uses of [flat]() across languages. Note that semantically
equivalent expressions in different languages (or even in the same language) may require a different analysis if sometimes
there is and sometimes there is not a regular compositional syntactic structure.

## Names 

In many languages, there are multiword proper names with no clear internal syntactic structure and no clear 
evidence that one of the words is the syntactic head. Such names are annotated using the `flat` relation, 
with the optional subtype `flat:name`.

~~~ sdparse
Hilary Rodham Clinton
flat(Hilary, Rodham)
flat(Hilary, Clinton)
~~~

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

In contrast to the above, names that have a regular syntactic structure, like _The Lord of the Rings_ and _Captured By
Aliens_, should be annotated with regular syntactic relations.

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

The above analyses of _Ludwig van Beethoven_ and _Miguel de Cervantes y Saavedra_ assume that _van_ resp. _de_ are prepositions.
This is true in the languages of the names' origin, but it can be expected to change when the name is used in foreign text 
or when sufficient grammaticalization has taken place. For example,
when names like this are annotated in English, the appropriate analysis is as a `flat` name:

~~~ sdparse
Ludwig van Beethoven was a famous German composer .
flat(Ludwig, van)
flat(Ludwig, Beethoven)
det(composer, a)
amod(composer, famous)
amod(composer, German)
cop(composer, was)
nsubj(composer, Ludwig)
punct(composer, .)
~~~

~~~ sdparse
Río de la Plata
flat(Río-1, de-2)
flat(Río-1, la-3)
flat(Río-1, Plata-4)
~~~

~~~ sdparse
Al Arabiya is a Saudi-owned news organization
flat(Al-1, Arabiya-2)
nsubj(organization-7, Al-1)
~~~

And in Modern German or French, these prepositions have generally just become a fossilized part of a family name 
and regularly appear without the given name. Again, here, analysis as `flat` seems correct:

~~~ sdparse
Von Hohenlohe gewann das Rennen . \n Von Hohenlohe won the race .
flat(Von-1, Hohenlohe-2)
nsubj(gewann-3, Von-1)
~~~

In the case of proper entities named after people, e.g. _Leland Stanford Jr. University_, the `flat` relation 
should only be used inside the person name, with the rest of the construction analyzed compositionally using 
normal syntactic relations:

~~~ sdparse
Leland Stanford Jr. University
compound(Leland-1, University-4)
flat(Leland-1, Stanford-2)
flat(Leland-1, Jr.-3)
~~~

### Some further notes on relations for names

_This paragraph briefly records some of the arguments that have been made in the past on relations for name structure. It is an issue over which there has historically been variation and about which there is some continuing debate._ Examples like 
_French actor Gaspard Ulliel:_ Some treebanks have used `nmod` for titles and honorifics like _Mr._ or _French actor_. Most people think this is inappropriate, since an `nmod` dependent should be a full phrase, which will typically take its own case as a modifier in a cased language. In contrast, these titles seem to be part of the same phrase as the name that follows them; they show case agreement concord in a cased language. Some grammatical traditions, descending from Latin, call _French actor_ in such cases a "fixed (or close) apposition" and take the name as the head. UD has restricted the `appos` relation to following appositives (corresponding to "loose (or wide) apposition" in the Latin tradition). The relation `appos` is only used when you have two full nominals, typically joined loosely, and often separated by a punctuation mark like a comma. So `appos` is not correct for these cases. Sometimes the relation `compound` has been used, but this does not seem right. It implies headedness, and titles do not usually behave like compounds: in German, they are not joined to the following words, as compounds are normally joined in German, and they appear at the beginning of names in both German and Hebrew, even though German compounds are head last and Hebrew compounds are head first. So `compound` does not seem appropriate either. Some UDv1 treebanks used `flat` for honorifics like _Mr._, although some felt that was wrong and `flat` should be restricted to joining the proper nouns of multi-word names. In UDv2, `flat` was removed and replaced by `flat`, which allowed a broader notion of a chunk of unheaded material. In the UDv2 guidelines, cases of both titles and honorifics are joined to names with `flat`.


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

## Foreign Phrases

The `flat` relation, with the optional subtype `flat:foreign` should also be used when a foreign phrase
cannot be given a compositional analysis. In this case, it replaces the `foreign` relation, which was used
in v1 but is no longer part of the relation taxonomy.

~~~ sdparse
And then she went : gjiko frac zen .
parataxis(went, gjiko)
flat(gjiko, frac)
flat(gjiko, zen)
~~~
