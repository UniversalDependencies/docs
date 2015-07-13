---
layout: base
title:  'Introduction'
permalink: ja/overview/introduction.html
---

# Introduction

Japanese corpora annotated according to the Universal Dependency annotation scheme will be obtained by conversion from multiple linguistic resources.

As a first step, we construct conversion rules on using the 'NTT Japanese Phrase Structure Treebank' [(Tanaka and Nagata 2013)](http://www.aclweb.org/anthology/W13-4913) for the Mainichi Shimbun Newspaper.

We also try to construct conversion rules for the 'Balanced Corpus of Contemporary Written Japanese' (BCCWJ) [(Maekawa et al. 2014)](http://link.springer.com/article/10.1007/s10579-013-9261-0) with third-party annotations.

# Basic Policy

The Japanese language is written without spaces or other clear divisions to show word boundaries. We tend to define morphemic units smaller than the word unit in order to maintain unit uniformity. Therefore, when we define the morpheme unit as the Universal Dependency word unit, we have to annotate the compound word construction, as defined in the morphological layer of Japanese linguistics.

The Universal Dependency scheme is not suited for Japanese dependency annotation.
This is because the dependency annotation label set used by Universal Dependency includes several different layers such as morphological, syntactic and semantic dependency.
To address the issue of the split between the morphology and syntactic levels, we define a Japanese base phrase unit --- bunsetsu (文節) --- for syntactic dependency annotation.  The morphology level including for multi-word expressions is encapsulated within bunsetsu.  Therefore we can concentrate on the annotate of purely syntactic phenomena.  

The discrepancy between syntactic phrases and phonetic (accent) phrases is another issues in word-based dependency annotation.
Since we focus not on speech corpora but on written corpora, we omit this issue from the Universal Dependency annotation schema.

The understanding of parts-of-speech (PoSs) in Japanese corpora can be split into two philosophies: lexicon-based (語彙主義) and usage-based (用法主義).
The lexicon-based approach involves extracting all possible categories for one word as labels.  For example, the label '名詞-普通名詞-サ変形状詞可能' means that the word can be a Noun, Verbal Noun or Adjective. 
The labels are maintained in a large-scale PoS-tagged lexicon and used in semi-Markov model-based morphological analysers.
Usage-based labelling is determined by the contextual information in a sentence;
we used Usage-based PoS tags from UniDic based lexicon/corpora/morphological analysers to align the Universal PoS tags.

We also separate certain issues --- such as coordination structures, surface case frame, and scope of negation --- from the bunsetsu-based dependency annotation.  

Coordination structures cannot be expressed straightforwardly as dependency structures.
Thus, we lose some information related to nested coordination, non-constituent conjunct coordination, and coordination between different syntactic categories when we project the coordination structure to the dependency structures.
Therefore, we keep the coordinate structure information in a different layer of annotation from the bunsetsu-based dependency annotation.
We also keep the surface case frame structures and the scope of negation in different layers.

The Universal Dependency label set includes syntactic roles such as '[nsubj](http://universaldependencies.github.io/docs/ja/dep/nsubj.html)', '[dobj](http://universaldependencies.github.io/docs/ja/dep/dobj.html)', '[iobj](http://universaldependencies.github.io/docs/ja/dep/iobj.html)'.
These annotations are not provided under bunsetsu-based dependency annotation, and are instead served from predicate-argument relation annotations.

Labels related to 'PASSIVE' such as '[nsubjpass](http://universaldependencies.github.io/docs/ja/dep/nsubjpass.html)', '[csubjpass](http://universaldependencies.github.io/docs/ja/dep/csubjpass.html)' and '[auxpass](http://universaldependencies.github.io/docs/ja/dep/auxpass.html)' are defined in the Universal Dependency label set.  Hopefully, the Japanese language has only two passive auxiliary verbs reru(れる) and rareru(られる). Though these morphemes are polysemous, 90% of them are passive.  We also featured annotation of the sense of these morphemes.

However, whereas the Universal Dependency label set handles 'PASSIVE', it does not handle 'CAUSATIVE'.
The Japanese language has two causative auxiliary verbs seru(せる) and saseru(させる) which raise the issue of case alternation. 
The case alternation of causatives should be handled in the Universal Dependency label set.

The Universal Dependency label set discriminates whether the target is a clause or not.
Unfortunately, the definition of 'clause' here is vague.
We defined some heuristic rules to define clauses:
for example, the difference between [acl](http://universaldependencies.github.io/docs/ja/dep/acl.html) (adjectival clause) and [amod](http://universaldependencies.github.io/docs/ja/dep/amod.html) (adjectival modifier) is defined by whether the adjective has any overt case or not.
Aside from these syntactic dependency annotations,

# Background

Here, we describe Japanese basic language resources, PoS-tagged lexicon/corpus, morphological analysers, syntactic dependency annotations, semantic dependency annotations (or case frame annotations), and syntactic phrase structure tree annotations.

## Corpora with Annotations

* RWCP Corpus.
This is a newspaper corpus covering the Mainichi Shimbun for 1994.
The corpus includes human-maintained Japanese word segmentation, morphological information, and PoS tagging based on the 'IPADIC PoS Tagset'.
The models of IPADIC and NAIST-jdic for ChaSen/MeCab are trained by the RWCP Corpus.
 
* [Kyoto Text Corpus](http://nlp.ist.i.kyoto-u.ac.jp/index.php?%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%82%B3%E3%83%BC%E3%83%91%E3%82%B9).
This corpus covers the Mainichi for 1995.
It includes human-maintained Japanese word segmentation, morphological information and Part of Speech based on 'Juman POS Tagset'.
The corpus also includes human-maintained syntactic dependency annotation ('Kyoto Text Corpus Standard') and case frame annotation. The 'NTT Japanese phrase structure treebank' is a phrase structure treebank based on the Kyoto Text Corpus.
The '[NAIST Text Corpus](https://sites.google.com/site/naisttextcorpus/)' is a case frame and a body of coreference annotations on the Kyoto Text Corpus.

* EDR Corpus.
This includes both Japanese and English corpora.
The Japanese part includes human-maintained  morphological information, PoS tagging using the 'EDR PoS Tagset', syntactic phrase structure, and semantic frame information.

* [Corpus of Spontaneous Japanese](http://pj.ninjal.ac.jp/corpus_center/csj/).
This is a monologue speech corpus including the original speech sound files, transcribed text, clause boundaries, morphological information, and PoS tagging using the 'UniDic PoS Tagset'.
CSJ defines several layers of word segmentation, such as 'Short Unit Word', which is the morphological unit for uniformity, 'Middle Unit Word', which is the compound word left-branching tree to form an accented phrase, and 'Long Unit Word', which composes a maximal content word with functional words with in a syntactic base phrase (bunsetsu).
The corpus also includes bunsetsu-based dependency ('CSJ standard').

* [Balanced Corpus of Contemporary Written Japanese (BCCWJ)](http://pj.ninjal.ac.jp/corpus_center/bccwj/).
This is a 100-million-scale corpus which consisting of three subcorpora: 
the Publication Subcorpus, consisting of samples extracted randomly from all books, magazines, and major newspapers published in the years 2001-2005;
the Library Subcorpus, consisting of all books catalogued at any of the more than 13 metropolitan libraries in Tokyo;
and the Special-Purpose Subcorpus, containing a series of mutually unrelated mini-corpora required for the specific research purposes of the NINJAL (National Institute for Japanese Language and Linguistics, Japan) research groups. 
The mini corpora include government white papers, textbooks, legal bills, bestselling books, and text from the Internet (provided courtesy of Yahoo! Japan, Inc). 
Each of these mini corpora contains several million words of text.
The part of the BCCWJ called 'CORE' consists of one million words from newspapers, books, magazines, white papers, Yahoo! Answers, and Yahoo! Blog, annotated for hand-maintained sentence boundaries, word boundaries, morphological information, and PoS information using 'UniDic PoS Tagset'.  
Some researchers provide annotations on BCCWJ CORE data in several layers, such as bunsetsu-based dependency ('BCCWJ-DepPara standard'), coordination structure, usage of passive auxiliary verb, scope of negation, aspects, TimeML TIMEX3, TimeML TLINK, predicate argument structure, case frame structure, Japanese framenet, extended named entities, and word senses.

* [KNBC Corpus](http://nlp.ist.i.kyoto-u.ac.jp/kuntt/#ga739fe2).
This is a copyright-free blog corpus that includes JUMAN PoS tags and bunsetsu-based dependency information following the Kyoto Text corpus standard.

## Word Units

### Overview of Word Units
Written Japanese sentences are not split into words or morphemes by the use of spaces or any other technique.
Thus, we have several word unit standards that can be found in corpus annotation schema or the outputs of morphological analysers.
They are described below.

### [IPADIC](http://sourceforge.jp/projects/ipadic/) 
This word unit standard (morphological informatino-annotated lexicon) was derived by the morphological analyser ChaSen. 
The morphological analyser [MeCab](http://taku910.github.io/mecab/), developed in 2001-2004, is independently developped from the lexicon; however, the default lexicon is IPADIC. [NAIST-jdic](http://sourceforge.jp/projects/naist-jdic/) is the successor of IPADIC. NAIST-jdic resolves the license issues in IPADIC. NAIST-jdic inherits the word unit definitions and PoS tagset of IPADIC. 

### NINJAL UniDic 
NINJAL proposed several word unit standards for Japanese corpus linguistics such as minimum word unit, \alpha word unit, \beta word unit, M word unit and so on [(小椋ほか 2010a)](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-01.pdf) [(小椋ほか 2010b)](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-02.pdf).  
Since 2002, they maintain a morporlogical information annotated lexicon UniDic, and propose three sorts of word unit standard:

* Short Unit Word (SUW): 
 the most fine-grained morpheme leel for corpus statistics, derived by MeCab with UniDic.
* Middle Unit Word (MUW): 
 based on the right-branching compound word construction and on phonological constructions such as accent phrase and/or sequential voicing (連濁), using Comainu, which is a wrapper program for MST parsing.
* Long Unit Word (LUW): a standard composed of 'bunsetsu(文節)' units. LUW is nearly the same in content and functional words bounded by bunsetsu boundaries. The unit is derived by SVM-based chunkers such as YamCha or linear chain CRF chunkers such as CRF++.

The UniDic has been maintained diachronically, and NINJAL has published versions of UniDic for several eras.

* UniDic (contemporary): [http://sourceforge.jp/projects/unidic/](http://sourceforge.jp/projects/unidic/) will be moved to [http://download.unidic.org/](http://download.unidic.org/)
* [UniDic (modern)](http://www2.ninjal.ac.jp/lrc/index.php?UniDic%2F%B6%E1%C2%E5%CA%B8%B8%ECUniDic)
* [UniDic (early middle)](http://www2.ninjal.ac.jp/lrc/index.php?UniDic%2F%C3%E6%B8%C5%CF%C2%CA%B8UniDic)

### JUMANdic 
This word unit standard was derived by the morphological analyser JUMAN. The unit is longer than SUW in UniDic.
See also 'Morphological Analyser, JUMAN'.
The unit includes several compound words as single word units. See the [manual](http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/corpus/KyotoCorpus4.0/doc/syn_guideline.pdf).

### Morphological Analysers

* [MeCab](http://mecab.googlecode.com/svn/trunk/mecab/doc/index.html): lexicon-based morphological analyser using CRFs.

* [JUMAN](http://nlp.ist.i.kyoto-u.ac.jp/index.php?JUMAN): lexicon-based morphological analyser using a hand-maintained cost table.

* [Comainu](http://comainu.org/): compound word constructions derived by chunking (CRF or history-based SVM) and dependency parsing.

* CRF chunker (used in Comainu): [CRF++](http://taku910.github.io/crfpp/)

* History based SVM chunker (used in Comainu): [YamCha](http://chasen.org/~taku/software/yamcha/)

* [MSTParser](http://sourceforge.net/projects/mstparser/) (used in Comainu)

## Bunsetsu Unit (Base Phrase)

### Overview of the Bunsetsu Unit
Japanese dependency structures tends to be annotated by bunsetsu unit,
 to separate compound word construction issues (morphology) from syntactic dependency.
However, the bunsetsu-based dependency annotation leaves the NP attachments for compound verbs.

We have two bunsetsu unit standards: Kyoto Corpus Standard and NINJAL Standard.

### Kyoto Corpus Standard

The Kyoto Corpus Standard is based on 'Prefix + Content Word + Suffix or Function word'; that is, it is bunsetsu standard based on JUMAN word units. 
Some functional multi-word expressions are treated as one bunsetsu such as 'しようとする', 'Vざるをえない', 'Vつつある' and so on. 
[(Manual)](http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/corpus/KyotoCorpus4.0/doc/syn_guideline.pdf)

### NINJAL Standard

The NINJAL standard is based on the UniDic Long Unit Words definition.
The main rule is 'Content word + Functional Word' in UniDic LUW.
It also defines several functional multi-word expressions as one bunsetsu, such as 'という', 'といった', 'かもしれない', or 'ことができる'.
[(小椋ほか 2010a)](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-01.pdf) [(小椋ほか 2010b)](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-02.pdf)

## PoS Tagging

### IPADIC PoS Tagset
IPADIC and NAIST-jdic share the same PoS tagset. Currently, the lexicon based on this PoS tagset is not maintained.
- The English translation of this PoS Tagset, by Dr. Francis Bond: [link](http://sourceforge.jp/projects/ipadic/docs/postag.txt/ja/1/postag.txt.txt)
- The English Manual: [link](http://sourceforge.jp/projects/ipadic/docs/ipadic-2.7.0-manual-en.pdf/en/1/)

### Juman PoS Tagset
The JUMAN PoS Tagset is based on the Masuoka-Takubo PoS tagset [(Masuoka and Takubo 1992)](http://www.amazon.co.jp/dp/4874240666/).

### UniDic PoS Tagset

The UniDic defines two layered PoS tagsets, one for Short Unit Words and the other for Long Unit Words.
The PoS tagset for Short Unit Words is a 'lexicon-based label'(語彙主義) tagset in which PoS labels imply all possible usages in a context.
In contrast, BCCWJ annotates the 'usage' of PsS as other PoS information.
The PoS tagset for Long Unit Words uses 'usage-based labels'(用法主義) disambiguated by contextual information.
[(小椋ほか 2010a)](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-01.pdf) 
[(小椋ほか 2010b)](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-02.pdf)
Note that , the term 'usage-based' here does not mean the same as in Langacker's Usage-Based model. 

- The English Translation of POS Tagset by Dr. Irena Srdanovic
[link](https://gist.github.com/masayu-a/e3eee0637c07d4019ec9)
- The English Translation of Inflection Type by Dr. Irena Srdanovic
[link](https://gist.github.com/masayu-a/b3ce862336e47736e84f)
- The English Translation of Inflection Form by Dr. Irena Srdanovic
[link](https://gist.github.com/masayu-a/3e11168f9330e2d83a68)

### Issues with Universal Dependency PoS Tagset

The Universal Dependency PoS tagset doesn't clarify whether it is lexicon-based or usage-based PoS tagset.
The Universal Dependency for Japanese with BCCWJ uses the Short Unit Word for the word unit and 'usage' of SUW for PoS.

## Dependency Links

### General Description
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

* Kyoto Corpus Schema
* CSJ Schema
* BCCWJ-DepPara Schema
* Word Dependency in CSJ 

### Kyoto Corpus Schema
The Kyoto Corpus Schema is bunsetsu-based.
The dependency tree is strictly head-final and projective.
The schema defines four labels: D for normal dependency, P for coordination structure, I for dependency in non-constituent conjunct coordination (部分並列), and A for apposition.

### CSJ Schema
CSJ is a speech corpus, also bunsetsu-based.
The dependency structure is based on the Kyoto Corpus Schema and extends some labels: A2 for generic apposition (総称), R for anastrophe (倒置), B+ for resolution of discrepancy between bunsetsu unit and Accent Phrase Unit, F for filler (フィラー), C for conjunctive, E for interjection or exclamation, Y for greetings or apostrophe (呼びかけ), N for no head in ungrammatical sentence, X for non-projective arc, and D for disfluency (言いよどみ).
They define the label K to indicate ancient Japanese (古典) to escape the annotation.
They also define the label S to indicate ungrammatical case postposition assignment (格表示誤り).

### BCCWJ-DepPara Schema
The BCCWJ-DepPara schema is two-sided: bunsetsu-based dependency using four labels: D for normal dependency, F for filler or no head or face mark, Z for sentence boundary in nested sentences, B for resolution of discrepancy between bunsetsu units; and nested coordination structure and apposition annotation, as in '[Coordination Annotation for the Penn Treebank](https://catalog.ldc.upenn.edu/LDC2015T08)'.

### Word Dependency in CSJ
[Uchimoto (2008)](http://www.lrec-conf.org/proceedings/lrec2008/summaries/790.html) proposed a word-based dependency annotation schema for CSJ. This is an extension for of the schema.
They annotated the internal dependency structure of the bunsetsu to resolve the discrepancy between accent phrases (maximal right-branching subtree with in bunsetsu) and bunsetsu units.
The annotation is related to the definition of Middle Unit Word.

### Bunsetsu-Based Syntactic Dependency Parsers
* [KNP](http://nlp.ist.i.kyoto-u.ac.jp/index.php?KNP)
* [CaboCha](http://taku910.github.io/cabocha/)
* [jdepp](http://www.tkl.iis.u-tokyo.ac.jp/~ynaga/jdepp/)
* [Yahoo! API](http://developer.yahoo.co.jp/webapi/jlp/da/v1/parse.html)

## Semantic Dependency Annotation Schema 

The dependency label set in the syntactic dependency annotated corpora is limited.
We use case frame annotation or semantic role annotation, in which predicate-argument structures are annotated.

* Kyoto Corpus Schema:
Kyoto Corpus includes a Case frame (格関係) annotation between a predicate and arguments.
They define case labels inside a clause: ガ (ga, subj), ヲ (wo, dobj), ニ (ni, iobj), デ (de), カラ (kara, from), ヨリ (yori, from), マデ (to), マデニ (to), 時間格 (temporal), ガ２ (second ga) and a case label (外の関係) for interclause relations.
They also define ノ(no, genitive) between two nouns.
Zero pronouns often appear in Japanese, and provide zero pronoun information and coreference relations.
See [(manual)](http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/corpus/KyotoCorpus4.0/doc/rel_guideline.pdf)

* NAIST Corpus Schema:
The NAIST Corpus also includes semantic role information. Iida et al. (2007) defines case labels: ガ(ga, subj), ヲ(wo, dobj), ニ(ni, iobj)。
They also provide the zero pronoun information and correference relations.
[link](https://sites.google.com/site/naisttextcorpus/)

## Other Annotations (Syntax-Related Only)
* Scope of negation for BCCWJ:
[Matsuyoshi et al. (2014)](http://www.lrec-conf.org/proceedings/lrec2014/pdf/777_Paper.pdf) describe the annotation of scope of negation for BCCWJ at 
[http://cl.cs.yamanashi.ac.jp/nldata/negation/](http://cl.cs.yamanashi.ac.jp/nldata/negation/).

* Passive auxiliary verbs for BCCWJ:
NINJAL describes the annotation of passive auxiliary verbs for BCCWJ.
The information will be embedded in BCCWJ-DepPara, shortly.

* Japanese 'to' (と) particle corpus:
[Hanaoka et al. (2010)](http://www.lrec-conf.org/proceedings/lrec2010/summaries/617.html) annotated the functions of Japanese particle (postposition) 'と' (to) as complementizer, subordinating conjunction, coordination conjunction, and case marker.

## Phrase Structure Treebank

### CCG Resources Derived from Multiple Dependency Corpora 
Japanese phrase structure resources are limited.  One study [(Uematsu 2013)](http://www.aclweb.org/anthology/P13-1103) compiled CCG resources from several dependency corpora, including bunsetsu-based dependency from Kyoto Text Corpus, predicate argument structures from the NAIST Text Corpus, and the functions of particle 'と' from a Japanese particle corpus.  They proposed a method to integrate these resources into binary phrase structure trees with argument relations and convert CCG resources. The CCG theory is based on [Bekki (2010)](http://www.amazon.co.jp/dp/4874244688/).

### 'NTT Japanese Phrase Structure Treebank'

[Tanaka and Nagata (2013)](http://www.aclweb.org/anthology/W13-4913) proposed a method to construct a phrase structure by retagging the examples in the work of [Uematsu (2013)](http://www.aclweb.org/anthology/P13-1103).
They also provide an n-ary version of a treebank, 
introducing phrase and functional tags as follows:
* Phrase tags: NP, PP, VP, ADJP, ADVP, CONJP; S, IP (IP-MAT, IP-ADV, IP-REL, IP-ADN), CP (CP-THT) | 
* Function tags for semantic roles: -ARG0, -ARG1, -ARG2
* Function tags for grammatical roles: -SBJ, -OBJ, -OB2
* Function tags for arbitrary arguments: -TMP, -LOC 
* Function tags for coordinate structures and apposition: -COORD, -NCOORD, -VCOORD, -APPOS, -QUE

### Other treebanks
* EDR Corpus:
The EDR corpus includes a 'Japanese Treebank', word-based dependency tree using semantic frames.
See [manual](http://www2.nict.go.jp/out-promotion/techtransfer/EDR/JPN/TG/Doc/EDR_J09a.pdf)

* TITECH CFG Corpus:
[Noro et al. (2005)](http://www.cl.cs.titech.ac.jp/_media/publication/565.pdf) proposed a method to construct a CFG treebank from the EDR and RWCP corpora.

* Hinoki Treebank:
NTT [(Bond 2008)](http://link.springer.com/article/10.1007/s10579-008-9062-z) built a HPSG-based treebank: the 'Hinoki Treebank'.

* Keyaki Treebank:
Tohoku University [(Butler 2012)](http://nlp.nii.ac.jp/tawc/papers/W04_butler.pdf) is building a 'Keyaki Treebank' following the annotation manual for the Penn Historical Corpora and PCEEC.

# Contributors
* Yusuke Miyao
* Hiroshi Kanayama
* Takaaki Tanaka
* Shinsuke Mori
* Sumire Uematsu
* Masayuki Asahara

# References

## Corpora
* Kikuo Maekawa, Hideaki Kikuchi and Wataru Tsukahara. '[Corpus of Spontaneous Japanese: Design, Annotation and XML Representation](http://www.researchgate.net/profile/Kikuo_Maekawa/publication/228943335_Corpus_of_Spontaneous_Japanese_design_annotation_and_XML_representation/links/02e7e523253397a70c000000.pdf)', In Proceedings of the International Symposium on Large-scale Knowledge Resources (LKR2004), Tokyo: Tokyo Institute of Technology, pp.19-24, 2004:3.
* Kikuo Maekawa, Makoto Yamazaki, Toshinobu Ogiso, Takehiko Maruyama, Hideki Ogura, Wakako Kashino, Hanae Koiso, Masaya Yamaguchi, Makiro Tanaka, and Yasuharu Den. 2014. '[Balanced Corpus of Contemporary Written Japanese](http://link.springer.com/article/10.1007/s10579-013-9261-0)'. Language Resources and Evaluation 48(2), pp.345-371

## Lexicon and PoS Tagsets
* Takashi Masuoka and Yukinori Takubo.(益岡 隆志, 田窪 行則) 1992. '[基礎日本語文法・改訂版](http://www.amazon.co.jp/dp/4874240666)' (In Japanese)
* 黒橋 禎夫, 居蔵 由衣子, 坂口 昌子. 2000. '[形態素・構文タグ付きコーパス作成の作業基準 version 1.8](http://nlp.ist.i.kyoto-u.ac.jp/nl-resource/corpus/KyotoCorpus4.0/doc/syn_guideline.pdf)' (In Japanese)
* Yasuharu Den, Junichi Nakamura, Toshinobu Ogiso and Hideki Ogura. 2008. '[A proper approach to Japanese morphological analysis: Dictionary, model and evaluation.](http://www.lrec-conf.org/proceedings/lrec2008/pdf/258_paper.pdf)'. In Proceedings of the 6th Language Resources and Evaluation Conference (LREC-2008).
* 小椋 秀樹, 小磯 花絵, 冨士池 優美, 宮内 佐夜香, 小西 光 and 原 裕. 2010.
「[『現代日本語書き言葉均衡コーパス』形態論情報規程集 第４版（上）](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-01.pdf)」 (In Japanese)
* 小椋 秀樹, 小磯 花絵, 冨士池 優美, 宮内 佐夜香, 小西 光 and 原 裕. 2010.
「[『現代日本語書き言葉均衡コーパス』形態論情報規程集 第４版（下）](http://pj.ninjal.ac.jp/corpus_center/bccwj/doc/report/JC-D-10-05-02.pdf)」 (In Japanese)
* Toshinobu Ogiso, Mamoru Komachi, Yasuharu Den and Yuji Matsumoto. 2012. '[UniDic for Early Middle Japanese: a Dictionary for Morphological Analysis of Classical Japanese](http://www.lrec-conf.org/proceedings/lrec2012/pdf/906_Paper.pdf)'. In Proceedings of the Eighth International Conference on Language Resources and Evaluation Conference (LREC-2012).

## Dependency Annotation Schemata
* Daisuke Kawahara, Sadao Kurohashi, and Kôiti Hasida. "[Construction of a Japanese Relevance-Tagged Corpus](http://www.lrec-conf.org/proceedings/lrec2002/pdf/302.pdf)." In Proceedings of LREC. 2002.
* Sadao Kurohashi and Makoto Nagao. 2003. 'Building a Japanese Parsed Corpus --- While Improving the Parsing System'. In Abeille (ed.) [Treebanks: Building and Using parsed corpora](http://www.springer.com/gp/book/9781402013348), pp. 249-260. Alphen aan den Rijn, the Netherlands: Kluwer Academic Publisher.
* Ryu Iida, Mamoru Komachi, Kentaro Inui, and Yuji Matsumoto. 2007. '[Annotating a Japanese text
corpus with predicate-argument and coreference relations](http://www.aclweb.org/anthology/W07-1522). In Proceedings of Linguistic Annotation
Workshop, pages 132–139.
* K. Uchimoto, and Y. Den. 2008. '[Word-level Dependency-structure Annotation to Corpus of Spontaneous Japanese and Its Application](http://www.lrec-conf.org/proceedings/lrec2008/summaries/790.html)', In Proceedings of LREC 2008.
* Emiko Yamada, Eiji Aramaki, Takeshi Imai, and Kazuhiko Ohe. 2010. 'Internal Structure of a Disease
Name and Its Application for ICD Coding'. Studies in Health Technology and Informatics, 160(2), 1010–1014.

## Treebanking
* Takao Gunji. 1987. '[Japanese Phrase Structure Grammar: A Unification-Based Approach](http://www.amazon.co.jp/dp/1556080204/).' D. Reidel.
* Tomoya Noro, Taiichi Hashimoto, Takenobu Tokunaga, and Hozumi Tanaka. 2005. '[Building a large-scale Japanese syntactically annotated corpus for deriving a CFG](http://www.cl.cs.titech.ac.jp/_media/publication/565.pdf)'. Proceedings of Symposium on Large-Scale Knowledge Resources (LKR2005).
* Francis Bond, Sanae Fujita, and Takaaki Tanaka. 2008. '[The Hinoki syntactic and semantic treebank of Japanese](http://link.springer.com/article/10.1007/s10579-008-9062-z)'. Language Resources and Evaluation 42(2), pp. 243-251.
* Daisuke Bekki.(戸次 大介). 2010. '[Formal Theory of Japanese Syntax ((日本語研究叢書24) 日本語文法の形式理論 - 活用体系・統語構造・意味合成)](http://www.amazon.co.jp/dp/4874244688/). Tokyo: Kuroshio Shuppan. (In Japanese)
* Alastair Butler, Zhu Hong, Tomoko Hotta, Ruriko Otomo, Kei Yoshimoto and Zhen Zhou. 2012. '[Keyaki Treebank: Phrase Structure with Functional Information for Japanese](http://nlp.nii.ac.jp/tawc/papers/W04_butler.pdf). In Proceedings of Text Annotation Workshop.
* Sumire Uematsu, Takuya Matsuzaki, Hiroaki Hanaoka, Yusuke Miyao, and Hideki Mima. 2013. '[Integrating Multiple Dependency Corpora for Inducing Wide Coverage Japanese CCG Resources](http://www.aclweb.org/anthology/P13-1103). In Proceedings of the 51st Annual Meeting of the Association for Computational Linguistics (ACL 2013), pp. 1042-1051.
* Takaaki Tanaka and Masaaki Nagata. 2013. '[Constructing a Practical Constituent Parser from a Japanese Treebank with Function Labels](http://www.aclweb.org/anthology/W13-4913)'. In Proceedings of the Fourth Workshop on Statistical Parsing of Morphologically-Rich Languages.

## Other Annotations
* Hanaoka, Hiroki, Hideki Mima, and Jun'ichi Tsujii. 2010. '[A Japanese Particle Corpus Built by Example-Based Annotation](http://www.lrec-conf.org/proceedings/lrec2010/summaries/617.html)'. In Proceedings of LREC. 2010.
* Suguru Matsuyoshi, Ryo Otsuki, Fumiyo Fukumoto. 2014. '[Annotating the Focus of Negation in Japanese Text](http://www.lrec-conf.org/proceedings/lrec2014/pdf/777_Paper.pdf)'. In Proceedings of LREC. 2014.
