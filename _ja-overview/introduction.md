---
layout: base
title:  'Introduction'
permalink: ja/overview/introduction.html
---

# Introduction

The Japanese corpora annotated according to the UD annotation scheme will be obtained by conversion from several resources.

As a first step, we construct conversion rules on 'NTT Japanese phrase structure treebank' (Tanaka and Nagata 2013) on Mainichi Newspaper.
We also try to construct conversion rules on 'Balanced Corpus of Contemporary Written Japanese'(BCCWJ) (Maekawa et al. 2014) with third party annotations (Mori et al. 2014).

# Basic Policy

UD annotation scheme is far from Japanese linguistic researches for several layers.

## Word Unit

### Overview of Word Unit
Japanese sentences are not split into words or morphemes by spaces.
We have several word unit standards by corpus annotation schema or morphological analyzers' outputs.
The representative word unit standards are the following subsubsections.

### JUMANdic word unit: 
This word unit standard was derived by the morphological analyzer JUMAN.
### IPADIC word unit: 
This word unit standard was derived by the morphological analyzer ChaSen. IPADIC is one of morphological information annotated lexicon used in ChaSen.  The morphological analyzer MeCab is developed in 2001-2004. MeCab is independently developped from the lexicon. However, the default lexicon is IPADIC. NAIST-jdic is a successor of IPADIC. NAIST-jdic resolves the license issues in IPADIC. NAIST-jdic inherits the word unit definitiosn and POS tagset of IPADIC. 
### NINJAL UniDic word units: 
NINJAL (National Institute for Japanese Language and Linguistics, Japan) proposed several word unit standards for Japanese corpus linguistics such as minimum word unit, \alpha word unit, \beta word unit, M word unit and so on.  From 2002, they maintain a morporlogical information annotated lexicon UniDic, and propose three sorts of word unit standard:
- Short Unit Word (SUW): 
The standard is used as the most fine grained morpheme for the corpus statistics. The word unit is derived by MeCab with UniDic.
- Middle Unit Word (MUW): The standard is based on the left branching compound word construction. The word unit is based on phonological construction such as accent phrase and/or sequential voicing(連濁).
- Long Unit Word (LUW): The standard is composed "Bunsetsu(文節)" unit.

## Bunsetsu Unit (Base phrase)
We use NINJAL Short Unit Word (SUW) in UniDic. (ref. UniDic)

## PoS Tag

UD PoS for Japanese is obtained by conversion rules from UniDic PoS Tagset.

## Dependency Links

## Dependency Relations

# Background 
(To be written)

Here, we describe Japanese language resources such as basic language resources, PoS tagged lexicon/corpus, morphological analyzers, syntactic dependency annotations, semantic dependency annotations (or case frame annotations), syntactic phrase structure tree annotations.

## Basic Language Resources
* RWCP Corpus
* Kyoto Corpus
* EDR Corpus
* CSJ
* BCCWJ
* KNBC Corpus (free)
* Others

## PoS Tagsets (with lexicon, corpus)
* IPADIC POS Tagset (RWCP Corpus)
* Masuoka Takubo POS Tagset (Kyoto Corpus/JUMAN)
* UniDic POS Tagset (CSJ, BCCWJ)

## Syntactic Dependency Annotation Schema (with corpus), Syntactic Dependency Parser
* Kyoto Corpus Schema
* CSJ Schema
* BCCWJ-DepPara Schema
* Word Dependency by Mori (Mori et al. 2014)

* KNP
* CaboCha

## Semantic Dependency Annotation Schema (with corpus), Semantic Dependency Parser
* Kyoto Corpus Schema (on Mainichi Newspaper)
* NAIST Corpus Schema (on Mainichi Newspaper and BCCWJ)

* KNP
* YuCha
* ChaPas

## Syntactic phrase structure tree annotations
* NTT Japanese phrase structure treebank

## Other annotations (syntax related only)
* Scope of Negation for BCCWJ
* Passive Auxiliary Verb for BCCWJ

# Issues
* Both of Mainichi Newspaper and BCCWJ are non-free resources.

# Contributors

* Yusuke Miyao
* Hiroshi Kanayama
* Takaaki Tanaka
* Shinsuke Mori
* Sumire Uematsu
* Masayuki Asahara

# References

* Takaaki Tanaka and Masaaki Nagata. 2013. '[Constructing a Practical Constituent Parser from a Japanese Treebank with Function Labels](http://www.aclweb.org/anthology/W13-4913)' In Proceedings of the Fourth Workshop on Statistical Parsing of Morphologically-Rich Languages
* Kikuo Maekawa, Makoto Yamazaki, Toshinobu Ogiso, Takehiko Maruyama, Hideki Ogura, Wakako Kashino, Hanae Koiso, Masaya Yamaguchi, Makiro Tanaka, and Yasuharu Den. 2014. '[Balanced corpus of contemporary written Japanese](http://link.springer.com/article/10.1007/s10579-013-9261-0)'. Language Resources and Evaluation 48 (2), pp.345-371
* Shinsuke Mori, and Hideki Ogura and Tetsuro Sasada. 2014. '[A Japanese Word Dependency Corpus](http://www.lrec-conf.org/proceedings/lrec2014/pdf/42_Paper.pdf)' In Proceedings of the Ninth International Conference on Language Resources and Evaluation (LREC'14)
