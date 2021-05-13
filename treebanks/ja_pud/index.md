---
layout: base
title:  'UD_Japanese-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Japanese PUD

Language: [Japanese](/ja/index.html) (code: `ja`)<br/>
Family: Japanese

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Mai Omura, Yusuke Miyao, Hiroshi Kanayama, Hiroshi Matsuda, Aya Wakasa, Kayo Yamashita, Masayuki Asahara, Takaaki Tanaka, Yugo Murawaki, Yuji Matsumoto, Kaoru Ito, Taishi Chika, Shinsuke Mori, Sumire Uematsu, Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Atsuko Shimada, Anna Trukhina, Martin Popel, Daniel Zeman.

Repository: [UD_Japanese-PUD](https://github.com/UniversalDependencies/UD_Japanese-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udja_pud28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Japanese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Japanese-PUD/issues).
If you want to collaborate, please contact [masayu-a&nbsp;(æt)&nbsp;ninjal&nbsp;•&nbsp;ac&nbsp;•&nbsp;jp].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | not available |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the [CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies](http://universaldependencies.org/conll17/).




There are
1000 sentences in each language, always in the same order. (The sentence
alignment is 1-1 but occasionally a sentence-level segment actually consists
of two real sentences.) The sentences are taken from the news domain (sentence
id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are
usually only a few sentences from each document, selected randomly, not
necessarily adjacent. The digits on the second and third position in the
sentence ids encode the original language of the sentence. The first 750
sentences are originally English (01). The remaining 250 sentences are
originally German (02), French (03), Italian (04) or Spanish (05) and they
were translated to other languages via English. Translation into German,
French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese,
Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and
performed (except for German) by professional translators. Then the data has
been annotated morphologically and syntactically by Google according to Google
universal annotation guidelines; finally, it has been converted by members of
the UD community to UD v2 guidelines.

Additional languages have been provided (both translation and native UD v2
annotation) by other teams: Czech by Charles University, Finnish by University
of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the
shared task). If it is used for training in future research, the users should
employ ten-fold cross-validation.

In May 2020, we introduced the same coversion method used in UD_Japanese GSD v2.6 for UD_Japanese PUD.


## Acknowledgments

# Statistics of UD Japanese PUD

## POS Tags

[ADJ](ja_pud-pos-ADJ.html) – [ADP](ja_pud-pos-ADP.html) – [ADV](ja_pud-pos-ADV.html) – [AUX](ja_pud-pos-AUX.html) – [CCONJ](ja_pud-pos-CCONJ.html) – [DET](ja_pud-pos-DET.html) – [INTJ](ja_pud-pos-INTJ.html) – [NOUN](ja_pud-pos-NOUN.html) – [NUM](ja_pud-pos-NUM.html) – [PART](ja_pud-pos-PART.html) – [PRON](ja_pud-pos-PRON.html) – [PROPN](ja_pud-pos-PROPN.html) – [PUNCT](ja_pud-pos-PUNCT.html) – [SCONJ](ja_pud-pos-SCONJ.html) – [SYM](ja_pud-pos-SYM.html) – [VERB](ja_pud-pos-VERB.html)

## Features

[Polarity](ja_pud-feat-Polarity.html)

## Relations

[acl](ja_pud-dep-acl.html) – [advcl](ja_pud-dep-advcl.html) – [advmod](ja_pud-dep-advmod.html) – [amod](ja_pud-dep-amod.html) – [appos](ja_pud-dep-appos.html) – [aux](ja_pud-dep-aux.html) – [case](ja_pud-dep-case.html) – [cc](ja_pud-dep-cc.html) – [ccomp](ja_pud-dep-ccomp.html) – [compound](ja_pud-dep-compound.html) – [cop](ja_pud-dep-cop.html) – [csubj](ja_pud-dep-csubj.html) – [dep](ja_pud-dep-dep.html) – [det](ja_pud-dep-det.html) – [discourse](ja_pud-dep-discourse.html) – [dislocated](ja_pud-dep-dislocated.html) – [fixed](ja_pud-dep-fixed.html) – [mark](ja_pud-dep-mark.html) – [nmod](ja_pud-dep-nmod.html) – [nsubj](ja_pud-dep-nsubj.html) – [nummod](ja_pud-dep-nummod.html) – [obj](ja_pud-dep-obj.html) – [obl](ja_pud-dep-obl.html) – [punct](ja_pud-dep-punct.html) – [root](ja_pud-dep-root.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 28788 tokens.</li>
</ul>

<ul>
<li>This corpus contains 28354 tokens (98%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 10 types of words that contain both letters and punctuation. Examples: B.C., G.D.P., HerFatherDidn’tLikeMeAnyway, Thought’YaKnew, Wi-Fi, Zettel’s, イェルバ・ブエナ, セスト・サン・ジョヴァンニ, プンタ・デル・エステ, プンタ・ラサ</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: X</li>
</ul>

<ul>
<li>This corpus contains 14 word types tagged as particles (PART): い, か, がかっ, さ, たり, だけ, だらけ, っぽく, ね, ばかり, ほど, まで, 的, 風</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as pronouns (PRON): You, あなた, ある, いずれ, いつ, かれ, ここ, これ, そこ, それ, どこ, どちら, どれ, なん, 何, 君, 彼, 彼女, 我々, 私, 誰</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as determiners (DET): あの, あらゆる, この, その, どの</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 25 lemmas tagged as auxiliaries (AUX): いい, がましい, させる, しめる, する, せる, そう, た, たい, たり, だ, てる, できる, ない, なり, ぬ, べし, ます, やすい, よい, よう, らしい, られる, り, れる</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as AUX and sometimes as VERB: する, できる</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: ない, なかっ, ず, ん, なけれ, なく</li>
      <li>NOUN: 不, 未, 非, 反, 無</li>
      <li>SCONJ: ず</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: だ.</li>
</ul>

<ul>
<li>This corpus uses 22 lemmas as auxiliaries (<a>aux</a>). Examples: た, する, だ, れる, ます, ない, られる, よう, せる, ぬ, できる, たい, べし, させる, そう, たり, がましい, しめる, てる, なり, やすい, らしい.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-ADP(が) (389)</li>
      <li>VERB--NOUN-ADP(は) (403)</li>
      <li>VERB--NOUN-ADP(も) (40)</li>
      <li>VERB--PRON-ADP(が) (27)</li>
      <li>VERB--PRON-ADP(は) (127)</li>
      <li>VERB--PRON-ADP(も) (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-ADP(だけ)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(など)-ADP(を) (2)</li>
      <li>VERB--NOUN-ADP(を) (740)</li>
      <li>VERB--NOUN-ADP(を)-ADP(も) (1)</li>
      <li>VERB--PRON-ADP(を) (23)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 12 relation types are not used in this corpus at all: <a>iobj</a>, <a>xcomp</a>, <a>vocative</a>, <a>expl</a>, <a>clf</a>, <a>conj</a>, <a>flat</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
