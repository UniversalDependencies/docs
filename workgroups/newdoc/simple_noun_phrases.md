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

<span style="color: blue">**TO DO:** Decide on groupings and provide links to later chapters (above).</span>

This chapter is structured as follows:

* [Nominal Heads](#nominal-heads)
* [Case Markers](#case-markers)
* [Determiners](#determiners)
* [Numerals](#numerals)
* [Classifiers](#classifiers)
* [Adjectival Modifiers](#adjectival-modifiers)
* [Nominal Modifiers](#nominal-modifiers)

## Nominal Heads

In the simplest case, a noun phrase consists of a single head word, which is typically a noun, proper noun or pronoun.

~~~ sdparse
hon/PRON såg/VERB filmen/NOUN \n she saw the-film
nsubj(såg, hon)
obj(såg, filmen)
~~~
~~~ sdparse
hon/PRON såg/VERB Batman/PROPN \n she saw Batman
nsubj(såg, hon)
obj(såg, Batman)
~~~
~~~ sdparse
hon/PRON såg/VERB den/PRON \n she saw it
nsubj(såg, hon)
obj(såg, den)
~~~

In all of the Swedish examples above, the subject is the pronoun "hon" (she), while the object is respectively the noun "filmen" (the-movie), the proper noun "Batman", and the pronoun "den" (it). 

### Morphological Annotation of Nominal Heads

Nominal head words should normally be tagged [NOUN](), [PROPN](), or [PRON](). 

Depending on the language, nominal head words may in addition carry a number of morphological features, of which the most common are: 

* For NOUN: [Case](), [Definite](), [Gender](), [Number]()
* For PRON: [Case](), [Definite](), [Gender](), [Number](), [Person](), [Poss](), [PronType](), [Reflex]()

For example, in the Swedish examples above, we find the following morphological analyses:

* For "filmen" (the-movie): <span style="color: blue">NOUN:Case=Nom\|Definite=Yes\|Gender=Com\|Number=Sing</span>
* For "Batman" (the-movie): <span style="color: blue">NOUN:Case=Nom</span>
* For "den": <span style="color: blue">PRON:Definite=Yes\|Gender=Com\|Number=Sing\|Person=3\|PronType=Prs</span>

## Case Markers

Case marking is one of the strategies that languages use to encode the grammatical function of a noun phrase. Case marking can be realized through morphological inflection (captured by the feature [Case]() mentioned above) or by clitics or adpositions (prepositions and postpositions). In the interest of cross-linguistic parallelism, UD takes a radical approach and treats all adpositions as case markers, attaching them to the nominal head with the [case]() relation.
This allows us to analyze the following examples as both having a direct dependency relation from the predicate to the noun phrase filling the (oblique) agent role of a passive, despite the fact that Czech uses a noun in the instrumental case ("kočkou") while Swedish adds a preposition ("av"):

~~~ sdparse
pes/NOUN byl/AUX honěn/VERB kočkou/NOUN:Case=Ins \n dog was chased by cat
nsubj:pass(honěn, pes)
obl(honěn, kočkou)
aux:pass(honěn, byl)
~~~

~~~ sdparse
hunden/NOUN jagades/NOUN av/ADP katten/NOUN \n the-dog was-chased by the-cat
nsubj:pass(jagades, hunden)
case(katten, av)
obl(jagades, katten)
~~~

This means that prepositional (and postpositional) phrases are treated in UD as extended noun phrases, where the nominal head is the referential core while the adposition is a functional marker. This can be seen as an instantiation of Tesnière's notion of a dissociated nucleus (Tesnière, 1959) and does not entail that the adposition is seen as a syntactic dependent of the noun in the narrow sense.

<span style="color: blue">**TO DO:** Provide links to a central bibliography?</span>

### Morphological Analysis of Case Markers

While adpositions are normally tagged [ADP](), the tag [PART]() may be more appropriate for case markers that differ from morphological case markers only by being clitics instead of inflectional morphemes. For example, in Ungarinjin (an Australian language), locative case is marked by a phrase-final clitic (Rumsey, 1978; cited in Velupillai, 2012):

~~~ sdparse
dambun/NOUN nininga/PRON ra/PART:Case=Loc \n camp my LOC
nmod:poss(dambun, nininga)
case(dambun, ra)
~~~

The clitic "ra" will be tagged [PART]() and carry the feature <span style="color: blue">Case=Loc</span> feature, whereas ordinary adpositions do not have a [Case]() feature.

## Determiners

Noun phrases headed by nouns often contain determiners, which can be roughly divided into four classes:

* Articles
* Demonstratives
* Interrogatives
* Quantifiers

Articles, like English "a(n)" and "the", specify definiteness or related properties. They are obligatory in some languages (at least with some types of nouns), and completely absent in others. Demonstratives, like Latin "hic", "ille" and "ist", anchors the noun phrase deictically and seem to be available in all languages. Interrogatives, like English "which", are used to form noun phrases that can be used in interrogative (and sometimes relative) clauses. Quantifiers, like French "tout", "quelque", and "aucun", specify quantity or existence of the referent.  

~~~ sdparse
the/DET:PronType=Art book/NOUN
det(book, the)
~~~

~~~ sdparse
this/DET:PronType=Dem book/NOUN
det(book, this)
~~~

~~~ sdparse
which/DET:PronType=Int book/NOUN
det(book, which)
~~~

~~~ sdparse
every/DET:PronType=Tot book/NOUN
det(book, every)
~~~

~~~ sdparse
all/DET:PronType=Tot books/NOUN
det(books, all)
~~~

~~~ sdparse
all/DET:PronType=Tot the/DET:PronType=Art books/NOUN
det(books, all)
det(books, the)
~~~

~~~ sdparse
all/DET:PronType=Tot these/DET:PronType=Dem books/NOUN 
det(books, all)
det(books, these)
~~~

In many languages, different determiners are in complementary distribution or have special constraints on their cooccurrence and possible order. Regardless of whether a noun phrase contains one or more determiners, the syntactic [det]() relation is used to connect them all directly to the nominal head, as illustrated in the examples above. However, in languages where this is relevant, the subtype [det:predet]() may be used to distinguish determiners that have to precede other determiners (such as "all" in the last two examples above). 

**NB:** The [det]() relation is not used for numerals ("three books") nor for possessives ("my books"); see below.

### Morphological Analysis of Determiners

Determiners will typically be tagged [DET](), but the tag [PRON]() is also possible for words that are used both as determiners and as full (pronominal) noun phrases and where the pronominal use is predominant. <span style="color: blue">**QUESTION:** Is this the right recommendation?</span>

Regardless of whether determiners are tagged [DET]() or [PRON](), they should normally carry a [PronType]() feature indicating the type of determiner (`Art` for articles, `Dem` for demonstratives, `Int`for interrogatives, and so on). Depending on the language, determiners may also carry additional features that indicate agreement with the head noun,
such as [Gender](), [Number](), and [Case]().
 
## Numerals

Noun phrases headed by nouns may also contain numerals, which express exact numerical quantities (1, 2, 3, ...). Numerals resemble determiners and can often replace them ("one book" vs. "a book" or "this book") but have special properties in many languages, in particular in relation to classifiers (see below). UD uses the [nummod]() relation to connect a numeral to the head noun. 

~~~ sdparse
three/NUM  books/NOUN
nummod(books, three)
~~~

~~~ sdparse
these/DET three/NUM  books/NOUN
nummod(books, three)
det(books, these)
~~~

~~~ sdparse
all/DET these/DET three/NUM books/NOUN 
nummod(books, three)
det(books, these)
det(books, all)
~~~

**NB:** The [nummod]() relation is only used for cardinal numerals ("one", "two", "three"). Ordinal numerals ("first", "second", "third") are instead treated as adjectives both morphologically and syntactically. 

### Morphological Analysis of Numerals

Cardinal numerals will be tagged [NUM]() and may carry features like [Number](), [NumType](), [NumForm]() and [NumValue](). <span style="color: blue">**QUESTIONS:** Should Number be obligatory? Are other features relevant?</span> 

## Classifiers

A classifier is a word which accompanies a noun in certain grammatical contexts. The prototypical case is that of numeral classifiers, where the word is used with a numeral for counting objects and where the numeral normally cannot occur without the classifier. A classifier generally reflects some kind of conceptual classification of nouns, based principally on features of their referents. UD uses the [clf]() relation to connect the classifier to the numeral (or determiner) together with which it modifies the noun. Examples below are from Chinese.

~~~sdparse
sān gè xuéshēng \n three CLF student
nummod(xuéshēng, sān)
clf(sān, gè)
~~~

~~~sdparse
zhè liàng bāshì \n this CLF bus
det(bāshì, zhè)
clf(zhè, liàng)
~~~

<span style="color: blue">**TO DO:** Add Chinese characters to examples.</span>

### Morphological Analysis of Classifiers

The morphological analysis of classifiers is debated. Etymologically, classifiers are normally nouns, and UD generally recommends using the [NOUN]() tag. It has been suggested that a special feature should be added to distinguish the classifier use, since the words can normally also be used as regular nouns, but there is currently no such feature.

## Adjectival Modifiers

Adjectives modifying the head of a noun phrase are linked to the head noun with the [amod]() relation. Unlike case markers, determiners, numerals and classifiers, adjectives can be multiplies and can themselves be the head of complex phrases involving modifiers of various kinds, as illustrated in the examples below. 

~~~ sdparse
a hard problem
det(problem, a)
amod(problem, hard)
~~~
~~~ sdparse
a new hard problem
det(problem, a)
amod(problem, hard)
amod(problem, new)
~~~
~~~ sdparse
a very hard problem
det(problem, a)
amod(problem, hard)
advmod(hard, very)
~~~
~~~ sdparse
a much harder problem [ than I expected ]
det(problem, a)
amod(problem, harder)
advmod(harder, much)
advcl(harder, expected)
~~~

### Ordinals

A special case of adjectival modifiers are ordinal numerals, which are generally analyzed as adjectives in UD.

~~~ sdparse
the third man
det(man, the)
amod(man, third)
~~~

<span style="color: blue">**TO DO:** Add link to chapter describing the structure of adjective phrases (including morphological analysis, which does not have to be duplicated here).</span>

## Nominal Modifiers

The head of a noun phrase may be modified by another noun phrase. The head of the modifying noun phrase is then linked to the higher noun with the [nmod]() relation. A typical case is the genitive construction, which may occur with or without overt case markers. 

~~~ sdparse
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
det(Chair-5, the-4)
case(Chair-5, of-3)
~~~

~~~ sdparse
the Chair 's office
det(office-4, the-1)
nmod(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

### Possessives

Possessive pronouns, when used to modify nouns, are treated as a special case of nominal modifiers (and not as determiners), given that they are noun phrases and alternate with full noun phrases in the genitive construction. In many treebanks, the subtype [nmod:poss]() is used both for possessive pronouns and full genitive noun phrases.

~~~ sdparse
her office
nmod:poss(office-2, her-1)
~~~

~~~ sdparse
the Chair 's office
det(office-4, the-1)
nmod:poss(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

<span style="color: blue">**TO DO:** Add partitive constructions (and other tricky nmod cases).</span>

