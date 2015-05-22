---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
---

### Definition

Adjectives are words that typically modify nouns and specify their
properties or attributes. They may also function as predicates, as in

_その 車 は *赤い* .&nbsp;_ “The car is red.”

The `ADJ` tag is intended for ordinary adjectives only. See [DET]()
for determiners and [NUM]() for cardinal numerals.

Nominal adjectives (_自由&nbsp;_ “free”) are also classified into `ADJ`,
which are a kind of noun and behave like
ordinary adjectives in being followed by an auxiliary verb (e.g. だ). 
This kind of nouns is tagged with `noun (common.adjectival)`/名詞-普通名詞-形状詞可能
in UniDic.
Note that they are tagged [NOUN](), when they are used as nouns 
(e.g. _*自由*&nbsp;を&nbsp;手に入れる&nbsp;_ “gain freedom”).

Japanese has a small group of adnominal words (`adnominal`) that
usually precede noun phrases.
Although most of them are pronominal adjectives (e.g. _あの&nbsp;_ “that”, _どの&nbsp;_ “which”)
and classified as determiner [DET](),
some words are tagged [ADJ]() (e.g. _同じ&nbsp;_ “same”, _大きな&nbsp;_ “big”).

### Examples

- _*赤い*&nbsp;_ “red”, _*大きい*&nbsp;_ “big”  (`adjective_i (general)` / 形容詞-一般)
- _*必要*&nbsp;_ “necessary”, _*簡単*&nbsp;_“easy”(`adjectival_noun` / 形状詞-一般)
- _*自由*(+だ)&nbsp;_ “free” (`noun(common.adjectival)` / 名詞-普通名詞-形状詞可能)
- _*同じ*&nbsp;_ “same” (`adniminal` / 連体詞)
- _*いろんな*&nbsp;_ “various” (`adnominal` / 連体詞)
- indefinite determiners: _*ある*&nbsp;_ “a/one” (`adnominal` / 連体詞)
- possessive determiners: _*我が*&nbsp;_ “my” (`adnominal` / 連体詞)


### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is an adjective?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAnAdjective.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Adjective)
