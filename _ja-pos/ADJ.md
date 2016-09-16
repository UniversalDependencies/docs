---
layout: postag
title: 'ADJ'
shortdef: 'adjective'
---

### Definition

Adjectives are words that typically modify nouns and specify their
properties or attributes. They may also function as predicates, as in

_その 車 は <b>赤い</b>.&nbsp;_ “The car is red.”

The `ADJ` tag is intended for ordinary adjectives only. See [DET]()
for determiners and [NUM]() for cardinal numerals.

Nominal adjectives (_自由&nbsp;_ “free”) are also classified into `ADJ`,
which are a kind of noun but behave like
ordinary adjectives in being followed by an auxiliary verb (e.g. だ). 
In UniDic, this kind of nouns is tagged with `noun (common.adjectival)`/名詞-普通名詞-形状詞可能.
Note that they are tagged [NOUN]() when they are used as nouns 
(e.g. _<b>自由</b>&nbsp;を&nbsp;手に入れる&nbsp;_ “gain <b>freedom</b>”).

Japanese has a small group of adnominal words (`adnominal`) that
usually precede noun phrases like adjectives, but do not conjugate.
In Universal PoS, th limited number of pronominal adjectives (e.g. _あの&nbsp;_ “that”, _どの&nbsp;_ “which”)
are classified into determiner [DET](),
but the other adnimonal words are tagged [ADJ]() (e.g. _同じ&nbsp;_ “same”, _大きな&nbsp;_ “big”).

### Examples

- _<b>赤い</b>&nbsp;_ “red”, _<b>大きい</b>&nbsp;_ “big”  (`adjective_i (general)` / 形容詞-一般)
- _<b>必要</b>(+だ)&nbsp;_ “necessary”, _<b>簡単</b>(+だ)&nbsp;_“easy”(`adjectival_noun` / 形状詞-一般)
- _<b>自由</b>(+だ)&nbsp;_ “free” (`noun(common.adjectival)` / 名詞-普通名詞-形状詞可能)
- _<b>同じ</b>&nbsp;_ “same” (`adnominal` / 連体詞)
- _<b>いろんな</b>&nbsp;_ “various” (`adnominal` / 連体詞)
- indefinite determiners: _<b>ある</b>&nbsp;_ “a/one” (`adnominal` / 連体詞)
- possessive determiners: _<b>我が</b>&nbsp;_ “my” (`adnominal` / 連体詞)


### References

- [Loos, Eugene E., et al. 2003. Glossary of linguistic terms: What is an adjective?](http://www-01.sil.org/linguistics/GlossaryOfLinguisticTerms/WhatIsAnAdjective.htm)
- [Wikipedia](http://en.wikipedia.org/wiki/Adjective)
