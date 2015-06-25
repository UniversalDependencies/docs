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
In principle, instead of introducing null surface form for the parts, the word can be segmented. However, this is a non-trivial in some cases. Given that lemma, POS tag and features are set correctly, the surface information for the parts of the word can be recovered if needed.

METU-Sabancı treebank makes excessive use of IGs. In UD, we limit the suffixes/cases that introduce a new IG.

### -ki





