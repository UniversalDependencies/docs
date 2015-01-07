# Introduction

The Japanese corpora annotated according to the UD annotation scheme will be obtained by conversion from several resources.

As a first step, we construct conversion rules on 'NTT Japanese phrase structure treebank' (Tanaka and Nagata 2013) on Mainichi Newspaper.
We also try to construct conversion rules on 'Balanced Corpus of Contemporary Written Japanese'(BCCWJ) (Maekawa et al. 2014) with third party annotations (Mori et al. 2014).

# Basic Policy
(To be written)
## Word Unit

We use NINJAL Short Unit Word (SUW) in UniDic. (ref. UniDic)

## PoS Tag

UD PoS for Japanese is obtained from UniDic PoS Tagset.

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
