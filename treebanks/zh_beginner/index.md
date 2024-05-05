---
layout: base
title:  'UD_Chinese-Beginner'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Chinese Beginner

Language: [Chinese](/zh/index.html) (code: `zh`)<br/>
Family: Sino-Tibetan

This treebank has been part of Universal Dependencies since the UD v2.13 release.

The following people have contributed to making this treebank part of UD: Kirian Guiller, Yidi Huang, Yixuan Li, Qishen Wu, Bruno Guillaume, Sylvain Kahane, Kim Gerdes.

Repository: [UD_Chinese-Beginner](https://github.com/UniversalDependencies/UD_Chinese-Beginner)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udzh_beginner214)<br />
Download all treebanks: [UD 2.14](/#download)

License: CC BY-NC-SA 3.0

Genre: grammar-examples

Questions, comments?
General annotation questions (either Chinese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Chinese-Beginner/issues).
If you want to collaborate, please contact [kiriangui&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description
A treebank of Chinese sentences adapted for learner of level A1 to C1 (HSK1 to 5) collected on the [Chinese Grammar Wiki](https://resources.allsetlearning.com/chinese/grammar/\) (CC BY-NC-SA 3.0 License) website. The treebank was manually annotated by researchers of Paris Nanterre University (Modyco) in the mSUD annotation schema (morpheme level Surface Universal Dependencies).



The syntactic analysis is originally done in SUD on the character level under the name SUD_Chinese-PatentChar. See SUD Guidelines : https://surfacesyntacticud.github.io/guidelines/u/

## Structure of the Treebank
The Treebank is partitioned in 5 parts A1, A2, B1, B2 and C1 that represents different level of difficulty (from easiest to hardest).

/!\ At the day of October 12th of 2023, 2295 sentences have been hand annotated (around 20k tokens in total). But below is the complete distribution of the corpus when it will be finished.

The corpus is made of around 4300 sentences, with the following distribution :
- A1 : 382 sentences (3456 tokens , ~ 9.05 tokens per sentences)
- A2 : 1103 sentences (11920 tokens, ~ 10.80 tokens per sentences)
- B1 : 1347 sentences (18236 tokens, ~ 15.54 tokens per sentences)
- B2 : 1441 sentences (24419 tokens, ~ 16.95 tokens per sentences)
- C1 : 300 sentences (5482 tokens, ~ 18.27 tokens per sentences)

## Data Split
The treebank is still being annotated and around 40% of the sentences are yet to be annotated or validated. Therefore, the current version is not representative of the final distribution which prevent us for doing a representative data split that would be stable across release ([see UD data split guidelines](https://universaldependencies.org/release_checklist.html#data-split)). Until the treebank is fully annotated, we will not split the data and release all sentences in a single test folder. Please perform 10 fold cross validation if you are using this treebank for any machine learning task.



## Structure of a sentence
Here an example of the meta data that each sentences contains :
```
## Acknowledgments
This annotation work is supported by the [Autogramm project](https://autogramm.github.io/) and rely on the extensive work done by AllSetLearning contributors to the Chinese Grammar wiki.

## References

* Please cite any of this github repo, the original mSUD repo or the SUD conversion as well as the original content [Chinese Grammar Wiki](https://resources.allsetlearning.com/chinese/grammar/\).



# Statistics of UD Chinese Beginner

## POS Tags

[ADJ](zh_beginner-pos-ADJ.html) – [ADP](zh_beginner-pos-ADP.html) – [ADV](zh_beginner-pos-ADV.html) – [AUX](zh_beginner-pos-AUX.html) – [CCONJ](zh_beginner-pos-CCONJ.html) – [DET](zh_beginner-pos-DET.html) – [INTJ](zh_beginner-pos-INTJ.html) – [NOUN](zh_beginner-pos-NOUN.html) – [NUM](zh_beginner-pos-NUM.html) – [PART](zh_beginner-pos-PART.html) – [PRON](zh_beginner-pos-PRON.html) – [PROPN](zh_beginner-pos-PROPN.html) – [PUNCT](zh_beginner-pos-PUNCT.html) – [SCONJ](zh_beginner-pos-SCONJ.html) – [VERB](zh_beginner-pos-VERB.html)

## Features

[Aspect](zh_beginner-feat-Aspect.html) – [Case](zh_beginner-feat-Case.html) – [Number](zh_beginner-feat-Number.html) – [NumType](zh_beginner-feat-NumType.html) – [Person](zh_beginner-feat-Person.html) – [Polarity](zh_beginner-feat-Polarity.html) – [PronType](zh_beginner-feat-PronType.html)

## Relations

[acl](zh_beginner-dep-acl.html) – [advcl](zh_beginner-dep-advcl.html) – [advmod](zh_beginner-dep-advmod.html) – [amod](zh_beginner-dep-amod.html) – [appos](zh_beginner-dep-appos.html) – [aux](zh_beginner-dep-aux.html) – [case](zh_beginner-dep-case.html) – [cc](zh_beginner-dep-cc.html) – [ccomp](zh_beginner-dep-ccomp.html) – [clf](zh_beginner-dep-clf.html) – [compound](zh_beginner-dep-compound.html) – [compound:svc](zh_beginner-dep-compound-svc.html) – [compound:vv](zh_beginner-dep-compound-vv.html) – [conj](zh_beginner-dep-conj.html) – [cop](zh_beginner-dep-cop.html) – [csubj](zh_beginner-dep-csubj.html) – [dep](zh_beginner-dep-dep.html) – [det](zh_beginner-dep-det.html) – [discourse](zh_beginner-dep-discourse.html) – [discourse:sp](zh_beginner-dep-discourse-sp.html) – [fixed](zh_beginner-dep-fixed.html) – [flat](zh_beginner-dep-flat.html) – [iobj](zh_beginner-dep-iobj.html) – [mark](zh_beginner-dep-mark.html) – [nmod](zh_beginner-dep-nmod.html) – [nsubj](zh_beginner-dep-nsubj.html) – [nsubj:outer](zh_beginner-dep-nsubj-outer.html) – [nummod](zh_beginner-dep-nummod.html) – [obj](zh_beginner-dep-obj.html) – [obl](zh_beginner-dep-obl.html) – [obl:arg](zh_beginner-dep-obl-arg.html) – [obl:lmod](zh_beginner-dep-obl-lmod.html) – [obl:tmod](zh_beginner-dep-obl-tmod.html) – [parataxis](zh_beginner-dep-parataxis.html) – [punct](zh_beginner-dep-punct.html) – [reparandum](zh_beginner-dep-reparandum.html) – [root](zh_beginner-dep-root.html) – [vocative](zh_beginner-dep-vocative.html) – [xcomp](zh_beginner-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2295 sentences and 19999 tokens.</li>
</ul>

<ul>
<li>This corpus contains 19999 tokens (100%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1 types of words that contain both letters and punctuation. Examples: 漂亮”</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 26 word types tagged as particles (PART): 之, 之前, 之后, 之类, 了, 什么的, 们, 儿, 吗, 吧, 呗, 呢, 啊, 啦, 嘛, 地, 它, 得, 所有, 来着, 的, 的话, 等, 等等, 罢了, 那</li>
</ul>

<ul>
<li>This corpus contains 26 lemmas tagged as pronouns (PRON): 为什么, 什么, 他, 他们, 你, 你们, 你自己, 其, 几, 别, 咱们, 哪, 哪儿, 多少, 她, 她们, 它, 干吗, 怎么, 您, 我, 我们, 是否, 自己, 谁, 这么</li>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as determiners (DET): 一, 一点, 些, 其, 其他, 几, 所有, 整, 本, 某, 每, 点, 这, 这儿, 这里, 那, 那么, 那儿</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: 其, 几</li>
</ul>

<ul>
<li>This corpus contains 16 lemmas tagged as auxiliaries (AUX): 了, 会, 可以, 应该, 得, 必须, 想, 是, 有, 用, 着, 能, 被, 要, 过, 需要</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as AUX and sometimes as VERB: 了, 会, 得, 想, 是, 有, 用, 被, 要, 过, 需要</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>




<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>PART: 们</li>
      <li>PRON: 我们, 他们, 你们, 咱们, 她们</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>PART: 的, 什么的, 的话</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: 不, 没, 不怎么, 不管, 再不</li>
      <li>VERB: 没, 没办法</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: 过</li>
      <li>PART: 了</li>
    </ul>
  </li>
</ul>





<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>PRON: 什么, 谁</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: 怎么, 什么, 谁, 为什么, 多少, 哪儿, 哪, 几</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 一, 两, 十, 三, 几, 五, 1, 二, 八, 四</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: 第</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: 我, 我们, 咱们</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: 你, 你们, 您, 你自己</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: 他, 她, 他们, 她们</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: 是.</li>
</ul>

<ul>
<li>This corpus uses 15 lemmas as auxiliaries (<a>aux</a>). Examples: 要、 了、 想、 会、 过、 可以、 能、 应该、 有、 得、 着、 用、 必须、 需要、 被.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (382)</li>
      <li>VERB--PRON (1185)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1292)</li>
      <li>VERB--NOUN-ADP(的) (2)</li>
      <li>VERB--NOUN-ADP(通过) (1)</li>
      <li>VERB--PRON (172)</li>
      <li>VERB--PRON-ADP(的) (6)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>compound:svc</a>, <a>compound:vv</a>, <a>discourse:sp</a>, <a>nsubj:outer</a>, <a>obl:arg</a>, <a>obl:lmod</a>, <a>obl:tmod</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a></li>
</ul>
