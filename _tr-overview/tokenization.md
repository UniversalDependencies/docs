---
layout: base
title:  'Tokenization'
permalink: tr/overview/tokenization.html
---

# Tokenization

**This document is a work-in-progress proposal. See http://universaldependencies.github.io/docs for current/accepted specification** 

Word tokenization of Turkish is similar to the other languages writting using Latin alphabet. However, syntactic analysis of Turkish requires sub-word units as syntactic tokens. These tokens are called *inflectional groups* (IGs), and typically determined at the time of morphological analysis.

## Inflectional Groups

In Turkish (and some/all other Turkic languages), the POS of a word may change with suffixation a way that diverge from derivational morphology observed in other lanuages. The important difference is that parts of the word may refer to different entities and/or predicates that carry their own inflectional features and participate in different syntactic relations.

A typical example is the following sentence:
```
Mavi arabadakiler   gazete    okuyor.
blue car-LOC-KI-PLU newspaper read-PROG
`the ones in the blue car are reading newspapers'
```
In this example, the suffix *-ki* in word *arabadakiler* creates a new IG. The first IG refers to a car, while the second IG refers to people (in the car). The set of inflections attached to these two IG's are different. *araba* 'car' is singular (not marked for plural) and marked for locative case, while *arabadaki* 'the one/person in the car' is not marked for case, and receives the plural suffix. In other words, the locative marker only applies to the first IG, and plural marker to the second. Furhermore, the adjective *mavi* 'blue' modifies *araba*, the car is blue not not the people inside. And the subject of the verb *oku* 'read' is the second IG.

During tokenization, we introduce two syntactic words, and tokenize the above sentence in CoNLL-U as follows:

```
1   Mavi            mavi
2-3 arabadakiler    _
2   _               araba
3   _               ki
4   gazete          gazete
5   okuyor          oku
6   .               .
```
In principle, instead of introducing null surface form for the parts, the word can be segmented. However, this is non-trivial in some cases. Given that lemma, POS tag and features are set correctly, the surface information for the parts of the word can be recovered if needed.

METU-Sabancı treebank makes excessive use of IGs. In UD, we limit the suffixes/cases that introduce a new IG to the following.

#### -ki 

(see above example for the reason)

#### Copular markers 

Copular suffixes attached to nouns an adjectives
create predicates. For example, the word/sentence *arabadaydım*
```
Arabada -ydık.
car-LOC -is.PAST.1PL
I was in the car.
```
Note that the `Number` feature on the noun is `Sing`, while the
predicate agrees with a `Plur` subject. If both IG's are combined
resulting feature values would be confusing. Furthermore, in
combination with the plural markers, we end up with situations with
multiple subjects (see below for an example).

#### Subordinating suffixes
    
A set of suffixes in Turksih form subordinated clauses that functin as nouns, adjectives or adverbs.
```
(Benim) eve        dün        götür-düklerimden 
I.GEN   house.DAT  yesterday  take.PAST.1SG-VN.PLU.ABL
Some of the things I took home yesterday.
```
Here, if we do not split off the subordinating suffix, we end up an
`Case` feature (`Abl`) on a verb, or `Tense` feature on a noun (which
may be fine if the noun was a predicate, but not in this case).
Also note that predicate *götür* 'take' needs `Number=Sing`, while the resulting nominal phrase is plural. 

This becomes even more complicated if a copula is attached to the verbal noun:
```
(O)    (benim) eve       dün        götür-düklerimden-miş.
It     I.GEN   house.DAT yesterday  take.PAST.1SG-VN.PLU.ABL-cop.EVID.3SG
It was (aparently) one of those I took home yesterday.
```
Now, not only that all sorts of feature conflicts between two predicates and the intervening nominal are possible, 
the two predicates have different subjects.

Spliting these suffixes also makes syntactic relation parallel to other languages, where the word that causes the subodintaion marked with relation `mark`.

### Some other (derivational) suffixes

Some (derivational) suffixes in Turksih scope over complete phrases/clauses rahter than a single word.
Not spliting these suffixes results in dependencies relating wrong words.
The following lists the suffixes that should be split.

Some of these suffixes have multiple functions/meaningns,
and in some these functions it splitting may not be necessary.
However, this decision is generally difficult to make.
We always split the suffixes listed below,
with the exception when the derived form is lexicalized.
For example the suffix -lIk in *çantamda üç kitap<b>lık</b> yer var* 'I have
space for three books in my bag' should be split, 
but not in *bir kitap<b>lık</b> aldım* 'I bought a book shelf'.

##### The suffix -lI

This is a productive derivational suffix that derives adjectives and nouns from nouns. It has multiple functions. In some of these functions we can perfectly do without splitting, but for the sake of ease of annotation we split all, except clearly lexiaclized cases, e.g., *akıl<b>lı</b>* 'mind-lI = clever', *köy<b>lü</b>* 'village-lI = villager', *üç-lü* 'three-lI = trio'.

*üç yatak odalı ev* 'a/the house with three bedrooms'.
Note that the correct bracketing is *[üç [yatak oda]]-lı ev* not 

##### The suffix -sIz

This suffix affects noun phrases, roughly meaning 'without'. It can
also be attached to inflected nouns.

*spor arabam<b>sız</b> yapamam* 'I cannot do without [my sports car]'.

##### The suffix -CI

**-CI** derives nouns from nouns, typically it derives "occupation nouns", e.g.
*şarap-çı* 'the wine maker/seller' but also someone who has a taste/preference
for something, so the example could also mean 'person who prefers wine (over
beer)'. Although not very frequent, the non-derived noun can be modified by
other words: *[kırmızı şarap]-çı* 'person preferring red wine (over white
wine)'/'red wine seller'.

##### The suffix -lIk

This adds the meaning of 'sufficient/suitable for'.

Repeating the example above: *çantamda üç kitap<b>lık</b> yer var* 'I have
<b>space for</b> [three books] in my bag'.

##### The suffix -DIr forming time adverbials

Suffix -DIr has a number of different functions, one of which is
deriving adverbials from time expressions, e.g., *yıllar-dır*
'for/since years'. If the time expression is modified, this
modification is local. For exmaple *üç yıl-dır* 'for/since three
years' be analyzed as *[üç yıl]-dır* 'for [three years]'.

