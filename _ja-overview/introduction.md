---
layout: base
title:  'Introduction'
permalink: ja/overview/introduction.html
---

# Introduction

The Japanese corpora annotated according to the UD annotation scheme will be obtained by conversion from several resources.

As a first step, we construct conversion rules on 'NTT Japanese phrase structure treebank' (Tanaka and Nagata 2013) on Mainichi Newspaper.

We also try to construct conversion rules on 'Balanced Corpus of Contemporary Written Japanese'(BCCWJ) (Maekawa et al. 2014) with third party annotations.

# Basic Policy

Universal Dependency scheme does not suit for Japanese dependency annotation.
Their dependency annotation label set includes several different layers such as morphology, syntax dependency and semantic dependency.

Japanese language is written without word boundaries. We tend to define smaller morpheme unit than word unit in order to keep the unit uniformity. Therefore, when we define the morpheme unit as the Universal Dependency word unit, we have to annotate the compound word construction which is defined in the morphology layer of Japanese linguistics.

To split between the morphology issue and syntactic dependency issue, we define Japanese base phrase unit --- Bunsetsu (文節) --- for the syntactic dependency annotation.  The morphology issue includeing multi-word expression issue is encapsulated within the bunsetsu definition.  We can concentrate to annotate purely syntactic phenomena.  

The Part-of-speech in Japanese corpora can be split two philosophies: lexicon-based (語彙主義) and usage-based (用法主義).
Lexicon-based is to extract all possible categories for one word as a label.  For example, the label "名詞-普通名詞-サ変形状詞可能" means that the word can be Noun or Verbal Noun or Adjective. The label for the word is maintained in a large-scale PoS tagged lexicon and used in semi-markov model based morphological analyzers.
Usage-based is a label determined by the contextual information in the sentence.
We used Usage-based PoS tags from UniDic based lexicon/corpora/morphological analysers to align the Universal POS tags.

We also separate some issues --- such as coordination structures, surface case frame, and scope of negation --- from the Bunsetsu based dependency annotation.  

Coordination structures cannot be expressed straightforwardly in the dependency structures.
We lose some information related to nested coordination, non-constituent conjunct coordination and different syntactic category coordination by projecting the coordination structure to the dependency structures.
Therefore, we keep the coordinate structure information in the different layer annotation from the Bunsetsu based dependency annotation.
We also keep the surface case frame structures and the scope of negation in the different layer annotation.

The labels related to "PASSIVE" are defined in the Universal Dependency label set.  Hopefully, Japanese language has only two morphemes Reru(れる) and Rareru(られる). Though the morphemes are polysemy including the passive sense, 90% of them are passive sense.  We also have the annotation of the sense of Reru/Rareru.

The Universal Dependency label set discriminates whether the target is a clause or not.
Unfortunately, the definition of the clause is vague.
We defined some heuristic rules to define the clause.
For example, the difference between acl (adjectival clause) and amod (adjectival modifier) is defined by whether the adjective has any overt case or not.

The discrepancy between the syntactic phrases and phonetic (accent) phrases is another issues on the word-based dependency annotation.
We focus not on speech corpora but on written corpora.  We leave this issue from Universal Dependency annotation schema.

# Background

Here, we describe Japanese language resources such as basic language resources, PoS tagged lexicon/corpus, morphological analyzers, syntactic dependency annotations, semantic dependency annotations (or case frame annotations), syntactic phrase structure tree annotations.

## Corpora with annotations

* RWCP Corpus
'RWCP Corpus' is a Newspaper corpus from Mainichi Shinbun in 1994.
The corpus includes human-maintained Japanese word segmentation, morphological information and Part of Speech based on 'IPADIC POS Tagset'.
The model of IPADIC and NAIST-jdic for ChaSen/MeCab are trained by RWCP Corpus.
 
* Kyoto Text Corpus
'Kyoto Text Corpus' is a Newspaper corpus from Mainichi Shinbun in 1995.
The corpus includes human-maintained Japanese word segmentation, morphological information and Part of Speech based on 'Juman POS Tagset'.
The corpus also includes human-maintained syntactic dependency annotation ('Kyoto Text Corpus Standard') and case frame annotation. The 'NTT Japanese phrase structure treebank' is a phrase structure treebank based on the Kyoto Text Corpus.
'NAIST Text Corpus' is a case frame and coreference annotations on the Kyoto Text Corpus.

Kyoto Text Corpus: [page](http://nlp.ist.i.kyoto-u.ac.jp/index.php?%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%B3%E3%83%BC%E3%83%91%E3%82%B9)

NAIST Text Corpus: [https://sites.google.com/site/naisttextcorpus/](https://sites.google.com/site/naisttextcorpus/)

* EDR Corpus
'EDR Corpus' includes Japanese and English corpora.
The Japanese part of the corpora includes human-maintained  morphological information, Part of Speech based on 'EDR POS Tagset', syntactic phrase structure, and semantic frame information.

* CSJ
'Corpus of Spontaneous Japanese' (CSJ) is a monologue speech corpus.
The corpus includes the original speech sound files, transcripted text, clause boundaries, morphological information, and Part of Speech based on 'UniDic POS Tagset'.
CSJ defines several layers of word segmentation such as 'Short Unit Word' which is the morphological unit for uniformity, 'Middle Unit Word' which is compound word left branching tree to form an accent phrase, and 'Long Unit Word' which composes a maximal content word and some functional words with in a syntactic base phrase --- Bunsetsu.
The corpus also includes Bunsetsu-based dependency ('CSJ standard').

Corpus of Spontaneous Japanese: [http://pj.ninjal.ac.jp/corpus_center/csj/](http://pj.ninjal.ac.jp/corpus_center/csj/)

* BCCWJ
'Balanced Corpus of Contemporary Written Japanese' (BCCWJ) is a 100 million scale corpus which consists of three subcorpora. The first one is called the Publication Subcorpus. Samples of this corpus are extracted randomly from the population of all books, magazines, and major newspapers published in the years 2001-2005.
The second one is called the Library Subcorpus. Its population consists of all books that are catalogued at more than 13 metropolitan libraries in Tokyo.
The third one is called the Special-purpose Subcorpus. This corpus contains a series of mutually unrelated mini corpora that are required for specific research purposes of the NINJAL research groups. The mini corpora include governmental white papers, textbooks, laws, bestselling books, and text from the Internet (provided by the courtesy of Yahoo! Japan Inc). Each of these mini corpora contains text of several million words.
A part of BCCWJ is called "CORE" data which contains one million words from newspaper, books, magazines, whitepaper, Yahoo! Answers, and Yahoo! Blog.
The CORE part includes hand-maintained sentence boundaries, word boundaries, morphological information and Part of Speech based on 'UniDic POS Tagset'.  Some researchers provide annotations on BCCWJ CORE data in several layers such as Bunsetsu-based dependency ('BCCWJ-DepPara standard'), coordination structure, usage of passive auxiliary verb, scope of negation, aspects, TimeML TIMEX3, TimeML TLINK, predicate argument structure, case frame structure, Japanese framenet, extended named entities, and word senses.

Balanced Corpus of Contemporary Written Japanese: [http://pj.ninjal.ac.jp/corpus_center/bccwj/](http://pj.ninjal.ac.jp/corpus_center/bccwj/)

* KNBC Corpus (free)
'KNBC Corpus' is a copyright free Blog corpus.  The corpus includes JUMAN POS tags and Bunsetsu-based dependency in Kyoto Text corpus standard.

## Word Unit

### Overview of Word Unit
Japanese sentences are not split into words or morphemes by spaces.
We have several word unit standards by corpus annotation schema or morphological analysers' outputs.
The representative word unit standards are the following subsubsections.

### IPADIC word unit: 
This word unit standard was derived by the morphological analyzer ChaSen. IPADIC is one of morphological information annotated lexicon used in ChaSen.  The morphological analyzer MeCab is developed in 2001-2004. MeCab is independently developped from the lexicon. However, the default lexicon is IPADIC. NAIST-jdic is a successor of IPADIC. NAIST-jdic resolves the license issues in IPADIC. NAIST-jdic inherits the word unit definitiosn and POS tagset of IPADIC. 

IPADIC legacy: [http://sourceforge.jp/projects/ipadic/](http://sourceforge.jp/projects/ipadic/)

NAIST-jdic: [http://sourceforge.jp/projects/naist-jdic/](http://sourceforge.jp/projects/naist-jdic/)

### NINJAL UniDic word units: 
NINJAL (National Institute for Japanese Language and Linguistics, Japan) proposed several word unit standards for Japanese corpus linguistics such as minimum word unit, \alpha word unit, \beta word unit, M word unit and so on.  From 2002, they maintain a morporlogical information annotated lexicon UniDic, and propose three sorts of word unit standard:
* Short Unit Word (SUW): 
The standard is used as the most fine grained morpheme for the corpus statistics. The word unit is derived by MeCab with UniDic.
* Middle Unit Word (MUW): The standard is based on the left branching compound word construction. The word unit is based on phonological construction such as accent phrase and/or sequential voicing(連濁). The unit is derived by Comainu which is a wrapper program of MST parsing.
* Long Unit Word (LUW): The standard is composed "Bunsetsu(文節)" unit. LUW is nearly same as content or functional words bounded by bunsetsu boundaries and The unit is derives by SVM-based chunker such as YamCha or linear chain CRF chunker such as CRF++.
The UniDic are maintained diachronically. NINJAL published versions of UniDic in several eras.

* UniDic (contemporary): [http://sourceforge.jp/projects/unidic/](http://sourceforge.jp/projects/unidic/) will be moved to [http://download.unidic.org/](http://download.unidic.org/)
* UniDic (modern): [http://www2.ninjal.ac.jp/lrc/index.php?UniDic%2F%B6%E1%C2%E5%CA%B8%B8%ECUniDic](http://www2.ninjal.ac.jp/lrc/index.php?UniDic%2F%B6%E1%C2%E5%CA%B8%B8%ECUniDic)
* UniDic (early middle): [http://www2.ninjal.ac.jp/lrc/index.php?UniDic%2F%C3%E6%B8%C5%CF%C2%CA%B8UniDic](http://www2.ninjal.ac.jp/lrc/index.php?UniDic%2F%C3%E6%B8%C5%CF%C2%CA%B8UniDic)

### JUMANdic word unit: 
This word unit standard was derived by the morphological analyzer JUMAN. The unit is longer than SUW in UniDic.
See also 'Morphological Analyser, JUMAN'.
The unit includes several compound words as one word unit.

[http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/corpus/KyotoCorpus4.0/doc/syn_guideline.pdf](http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/corpus/KyotoCorpus4.0/doc/syn_guideline.pdf)


### Morphological Analysers

* MeCab: lexicon-based morphological analyzer by CRFs.

MeCab: [http://mecab.googlecode.com/svn/trunk/mecab/doc/index.html](http://mecab.googlecode.com/svn/trunk/mecab/doc/index.html)

* JUMAN: lexicon-based morphological analyzer by hand maintained cost table.

JUMAN: [http://nlp.ist.i.kyoto-u.ac.jp/index.php?JUMAN](http://nlp.ist.i.kyoto-u.ac.jp/index.php?JUMAN)

* Comainu: compound word construction by chunking (CRF or history-based SVM) and dependency parsing model.

Comainu: [http://comainu.org/](http://comainu.org/)

* CRF chunker (used in Comainu)
CRF++: [http://taku910.github.io/crfpp/](http://taku910.github.io/crfpp/)

* History based chunker (used in Comainu)
YamCha: [http://chasen.org/~taku/software/yamcha/](http://chasen.org/~taku/software/yamcha/)

* MSTParser (used in Comainu)
MSTParser: [http://sourceforge.net/projects/mstparser/](http://sourceforge.net/projects/mstparser/)

## Bunsetsu Unit (Base phrase)

### Overview of Bunsetsu Unit
Japanese dependency structures tends to be annotated by Bunsetsu Unit.
This is because to separate compound word construction issues (morphology) from syntactic dependency.
However, the bunsetsu-based dependency annotation leaves the NP attachments for compound verbs.

We have two Bunsetsu unit standards: Kyoto Corpus Standard and NINJAL Standard.

### Kyoto Corpus Standard

The Kyoto Corpus Standard is based on 'Prefix + Content Word + Suffix or Function word' as a Bunsetsu based on JUMAN word units. Some functional multi-word expressions are treated as one Bunsetsu such as 'しようとする', 'Vざるをえない', 'Vつつある' and so on.

[http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/corpus/KyotoCorpus4.0/doc/syn_guideline.pdf](http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/corpus/KyotoCorpus4.0/doc/syn_guideline.pdf)

### NINJAL Standard

NINJAL standard is based on UniDic Long Unit Words definition.
The main rule is 'Content word + Functional Word' in UniDic LUW.
They also define several functional multi-word expressions as one Bunsetsu such as 'という', 'といった', 'かもしれない', 'ことができる'.

## PoS Tag

### IPADIC POS Tagset
IPADIC and NAIST-jdic are shared the same POS tagset.
- The English Translation of POS Tagset by Dr. Francis Bond: [link](http://sourceforge.jp/projects/ipadic/docs/postag.txt/ja/1/postag.txt.txt)
- English Manual: [link](http://sourceforge.jp/projects/ipadic/docs/ipadic-2.7.0-manual-en.pdf/en/1/)

### Juman POS Tagset

### UniDic POS Tagset

- The English Translation of POS Tagset by Dr. Irena Srdanovic
[https://gist.github.com/masayu-a/e3eee0637c07d4019ec9](https://gist.github.com/masayu-a/e3eee0637c07d4019ec9)
- The English Translation of Inflection Type by Dr. Irena Srdanovic
[https://gist.github.com/masayu-a/b3ce862336e47736e84f](https://gist.github.com/masayu-a/b3ce862336e47736e84f)
- The English Translation of Inflection Form by Dr. Irena Srdanovic
[https://gist.github.com/masayu-a/3e11168f9330e2d83a68](https://gist.github.com/masayu-a/3e11168f9330e2d83a68)

### Lexicon-based or Usage-based

The term 'usage-based' is not exactly same as Langacker's Usage-based model.

### Issues on UD PoS tagset

The UD doesn't define lexicon-based or usage-based PoS tagset.

## Dependency Links

### General Description
* Strictly Head Final
* Arrow from modifier to head 
### Annotation Schema
* Kyoto Corpus Schema
Label: D, P, I, A
* CSJ Schema
* BCCWJ-DepPara Schema
* Word Dependency by Mori (Mori et al. 2014)

### Bunsetsu-based Syntactic Dependency Parser
* KNP: [http://nlp.ist.i.kyoto-u.ac.jp/index.php?KNP](http://nlp.ist.i.kyoto-u.ac.jp/index.php?KNP)
* CaboCha: [http://taku910.github.io/cabocha/](http://taku910.github.io/cabocha/)
* jdepp: [http://www.tkl.iis.u-tokyo.ac.jp/~ynaga/jdepp/](http://www.tkl.iis.u-tokyo.ac.jp/~ynaga/jdepp/)
* Yahoo! API: [http://developer.yahoo.co.jp/webapi/jlp/da/v1/parse.html](http://developer.yahoo.co.jp/webapi/jlp/da/v1/parse.html)
## Other Dependency Relations


## Semantic Dependency Annotation Schema (with corpus), Semantic Dependency Parser
* Kyoto Corpus Schema (on Mainichi Newspaper)
* NAIST Corpus Schema (on Mainichi Newspaper and BCCWJ)


## Other annotations (syntax related only)
* Scope of Negation for BCCWJ
* Passive Auxiliary Verb for BCCWJ

## Issues General
* Both of Mainichi Newspaper and BCCWJ are non-free resources.




# Contributors

* Yusuke Miyao
* Hiroshi Kanayama
* Takaaki Tanaka
* Shinsuke Mori
* Sumire Uematsu
* Masayuki Asahara

# References

## Lexicon
* Yasuharu Den, Junichi Nakamura, Toshinobu Ogiso and Hideki Ogura. 2008. '[A proper approache to Japanese morphological analysis: Dictionary, model and evaluation.](http://www.lrec-conf.org/proceedings/lrec2008/pdf/258_paper.pdf)'. In Proceedings of the 6th Language Resources and Evaluation Conference (LREC-2008).
* Toshinobu Ogiso, Mamoru Komachi, Yasuharu Den and Yuji Matsumoto, 2012 '[UniDic for Early Middle Japanese: a Dictionary for Morphological Analysis of Classical Japanese](http://www.lrec-conf.org/proceedings/lrec2012/pdf/906_Paper.pdf)'. In Proceedings of the Eighth International Conference on Language Resources and Evaluation Conference (LREC-2012).
 
## Corpora
* Takaaki Tanaka and Masaaki Nagata. 2013. '[Constructing a Practical Constituent Parser from a Japanese Treebank with Function Labels](http://www.aclweb.org/anthology/W13-4913)' In Proceedings of the Fourth Workshop on Statistical Parsing of Morphologically-Rich Languages
* Kikuo Maekawa, Makoto Yamazaki, Toshinobu Ogiso, Takehiko Maruyama, Hideki Ogura, Wakako Kashino, Hanae Koiso, Masaya Yamaguchi, Makiro Tanaka, and Yasuharu Den. 2014. '[Balanced corpus of contemporary written Japanese](http://link.springer.com/article/10.1007/s10579-013-9261-0)'. Language Resources and Evaluation 48 (2), pp.345-371




