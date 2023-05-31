---
layout: base
title:  'Tokenization'
udver: '2'
---

# Tokenization

## Overview of Word Units
Written Japanese sentences are not split into words or morphemes by the use of spaces or any other technique.
We have several word unit standards that can be found in corpus annotation schema or the outputs of morphological analysers.
Currently, we use NINJAL UniDic Short Unit Word as the UD tokenization.

## [IPADIC](https://sourceforge.jp/projects/ipadic/) 
This word unit standard (morphological informatino-annotated lexicon) was derived by the morphological analyser ChaSen. 
The morphological analyser [MeCab](http://taku910.github.io/mecab/), developed in 2001-2004, is independently developped from the lexicon; however, the default lexicon is IPADIC. [NAIST-jdic](http://sourceforge.jp/projects/naist-jdic/) is the successor of IPADIC. NAIST-jdic resolves the license issues in IPADIC. NAIST-jdic inherits the word unit definitions and PoS tagset of IPADIC. 

## NINJAL UniDic 
NINJAL proposed several word unit standards for Japanese corpus linguistics such as minimum word unit, \alpha word unit, \beta word unit, M word unit and so on [(小椋ほか 2010a)](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-01.pdf) [(小椋ほか 2010b)](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-02.pdf).  
Since 2002, they maintain a morporlogical information annotated lexicon UniDic, and propose three sorts of word unit standard:

* Short Unit Word (SUW): 
 the most fine-grained morpheme leel for corpus statistics, derived by MeCab with UniDic.
* Middle Unit Word (MUW): 
 based on the right-branching compound word construction and on phonological constructions such as accent phrase and/or sequential voicing (連濁), using Comainu, which is a wrapper program for MST parsing.
* Long Unit Word (LUW): a standard composed of 'bunsetsu(文節)' units. LUW is nearly the same in content and functional words bounded by bunsetsu boundaries. The unit is derived by SVM-based chunkers such as YamCha or linear chain CRF chunkers such as CRF++.


* UniDic : [https://unidic.ninjal.ac.jp/](https://unidic.ninjal.ac.jp/)

## JUMANdic 
This word unit standard was derived by the morphological analyser JUMAN. The unit is longer than SUW in UniDic.
See also 'Morphological Analyser, JUMAN'.
The unit includes several compound words as single word units. See the [manual](http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/corpus/KyotoCorpus4.0/doc/syn_guideline.pdf).

## Morphological Analysers

* [MeCab](https://mecab.googlecode.com/svn/trunk/mecab/doc/index.html): lexicon-based morphological analyser using CRFs.

* [JUMAN](https://nlp.ist.i.kyoto-u.ac.jp/index.php?JUMAN): lexicon-based morphological analyser using a hand-maintained cost table.

* [Comainu](https://comainu.org/): compound word constructions derived by chunking (CRF or history-based SVM) and dependency parsing.

* CRF chunker (used in Comainu): [CRF++](https://taku910.github.io/crfpp/)

* History based SVM chunker (used in Comainu): [YamCha](http://chasen.org/~taku/software/yamcha/)

* [MSTParser](https://sourceforge.net/projects/mstparser/) (used in Comainu)

