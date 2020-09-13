---
layout: base
title:  'Japanese UD'
udver: '2'
---

# UD for Japanese <span class="flagspan"><img class="flag" src="../../flags/svg/JP.svg" /></span>

## Tokenization and Word Segmentation

* In Japanese there is no obvious word boundary. So we need a definition of words.
  As the word definition for universal dependency (UD), we adopt short-unit word
  (SUW) by NINJAL [1,3]. SUW is also adopted to tokenize sentences in Balanced Corpus of
  Contemporary Written Japanese (BCCWJ) [2] containing more than 50,000 sentences
  in various domains and it has been shown that the SUW definition covers various
  language phenomena in real texts.


---



[1] A Proper Approach to Japanese Morphological Analysis: Dictionary, Model, and Evaluation,
Yasuharu Den, Junpei Nakamura, Toshinobu Ogiso, and Hideki Ogura,
In Proceedings of the Sixth International Conference on Language Resources and Evaluation, pp. 1019-1024, 2008.

[2] Balanced corpus of contemporary written Japanese,
Kikuo Maekawa, Makoto Yamazaki, Toshinobu Ogiso, Takehiko Maruyama, Hideki Ogura, Wakako Kashino, Hanae Koiso, Masaya Yamaguchi, Makiro Tanaka, and Yasuharu Den
Language Resources and Evaluation Vol. 48 345-371, May 2014.

[3] 『現代日本語書き言葉均衡コーパス』形態論情報規程集(上)(下)
小椋 秀樹, 小磯 花絵, 冨士池 優美, 宮内 佐夜香, 小西 光, and 原 裕,
独立行政法人国立国語研究所, 2011.

<!-- **Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.-->

---

## Morphology

### Tags

The UD PoS tags in Japanese are converted from UniDic PoS tagset.

The UniDic defines two layered PoS tagsets, one for Short Unit Words and the other for Long Unit Words.
The PoS tagset for Short Unit Words is a 'lexicon-based label'(語彙主義) tagset in which PoS labels imply all possible usages in a context.
In contrast, BCCWJ annotates the 'usage' of PoS as other PoS information.
The PoS tagset for Long Unit Words uses 'usage-based labels'(用法主義) disambiguated by contextual information.
[(小椋ほか 2010a)](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-01.pdf) 
[(小椋ほか 2010b)](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-02.pdf)
Note that , the term 'usage-based' here does not mean the same as in Langacker's Usage-Based model. 

- The English Translation of POS Tagset by Dr. Irena Srdanovic
[link](https://gist.github.com/masayu-a/e3eee0637c07d4019ec9)

---
<!-- **Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.-->

---

### Features

* No features are provided.

---
<!-- **Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any. -->

---

## Syntax

Japanese syntactic dependency has the following properties.

* Strictly Head Final:
Bunsetsu-based dependencies in Japanese are strictly head final except for apposition and anastrophe (倒置).

* Projective:
Bunsetsu-based dependencies in Japanese are projective except for apposition and non-constituent conjunct coordinations (部分並列).

* Arrow from modifier to head:
In Japanese the NLP community, we depict the dependency arrows from modifier to head.
This is opposite from the standard elsewhere in the world.

We have several annotation schema for dependency annotation.  They are labelled but contain very limited syntactic information.
Some syntactic labels in UD are in case frame or semantic role annotation in and are only available in Japanese (see next section).

* Conversion from BCCWJ-DepPara schema:

The BCCWJ-DepPara schema is two-sided: bunsetsu-based dependency using four labels: D for normal dependency, F for filler or no head or face mark, Z for sentence boundary in nested sentences, B for resolution of discrepancy between bunsetsu units; and nested coordination structure and apposition annotation, as in '[Coordination Annotation for the Penn Treebank](https://catalog.ldc.upenn.edu/LDC2015T08)'.

---
<!-- **Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any. -->

---

## Treebanks

There are [five](../treebanks/ja-comparison.html) Japanese UD treebanks:

  * [Japanese-GSD](../treebanks/ja_gsd/index.html)
  * [Japanese-BCCWJ](../treebanks/ja_bccws/index.html)
  * [Japanese-KTC](../treebanks/ja_ktc/index.html)
  * [Japanese-Modern](../treebanks/ja_modern/index.html)
  * [Japanese-PUD](../treebanks/ja_pud/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
