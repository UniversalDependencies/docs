---
layout: postag
title: 'PROPN'
shortdef: 'proper noun'
udver: '2'
---

### Definition

A proper noun is a noun (or nominal content word) that is the name (or
part of the name) of a specific individual, place, or object. Armenian proper nouns are always written starting with an uppercase letter. 

Single-word named entities should be tagged `PROPN` though they originate from a common noun (Աշտարակ) (town) or an adjective (Սիզավետ) (village). Even if _սիզավետ_ “grassy” is originally an adjective, syntactically it behaves as a noun. As a geographical name it denotes a concrete location (rather than a property of something).

Personal names are typically treated as a sequence of proper nouns (one or more given names and one or more surnames). If the name contains prepositions, conjunctions or articles (foreign names), these are tagged as ADP, CCONJ and DET, respectively.

Note that names of languages (հայերեն, անգլերեն) and adjectives derived from geographical names (հայկական, հայոց, անգլիական, “Armenian, English”) are written in lowercase and are not tagged `PROPN`.

### Examples

- _Զիմզիմովներ_
- _Լոնդոն_
- _ՄԱԿ_
