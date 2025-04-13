---
layout: base
title:  'UD_Korean-KSL'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Korean KSL

Language: [Korean](/ko/index.html) (code: `ko`)<br/>
Family: Korean

This treebank has been part of Universal Dependencies since the UD v2.14 release.

The following people have contributed to making this treebank part of UD: Hakyung Sung, Gyu-Ho Shin.

Repository: [UD_Korean-KSL](https://github.com/UniversalDependencies/UD_Korean-KSL)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udko_ksl215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-SA 4.0

Genre: learner-essays

Questions, comments?
General annotation questions (either Korean-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Korean-KSL/issues).
If you want to collaborate, please contact [hsung&nbsp;(æt)&nbsp;uoregon&nbsp;•&nbsp;edu].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description

UD_Korean-KSL is a dependency treebank of L2 Korean, featuring morpheme and Universal Dependency manual annotations for six hundred randomly sampled texts from the Kyung Hee Korean Learner Corpus (which is no longer available).



- Language-specific morpheme tags (XPOS) are based on the [Sejong tag set](https://github.com/NLPxL2Korean/L2KW-corpus) and were manually annotated.
- Dependency annotations adhere to the Universal Dependencies (version 2.0) framework and were manually annotated (initially tagged automatically by Stanza, then corrected).
- Universal part of speech (UPOS) tags were automatically added using Stanza, which was trained on the [UD_Korean-GSD](https://github.com/UniversalDependencies/UD_Korean-GSD) dataset and then corrected.
- The current version contains a total of 7,530 sentences: 6,024 in the training set, 753 in the test set, and 753 in the development set. The data also includes details on classroom proficiency levels (ranging from A1 to C2, serving as a proxy for learner proficiency).

## References

- Sung, H., & Shin, G-H. (2023). [Towards L2-friendly pipelines for learner corpora: A case of written production by L2-Korean learners](https://aclanthology.org/2023.bea-1.6/). In *Proceedings of the 18th Workshop on Innovative Use of NLP for Building Educational Applications (BEA 2023)*, 72-82, Association for Computational Linguistics.
- Sung, H., & Shin, G-H. (2024). [Constructing a Dependency Treebank for Second Language Learners of Korean](https://aclanthology.org/2024.lrec-main.332/). In *Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)* (pp. 3747-3758).

## Acknowledgments

# Statistics of UD Korean KSL

## POS Tags

[ADJ](ko_ksl-pos-ADJ.html) – [ADP](ko_ksl-pos-ADP.html) – [ADV](ko_ksl-pos-ADV.html) – [AUX](ko_ksl-pos-AUX.html) – [CCONJ](ko_ksl-pos-CCONJ.html) – [DET](ko_ksl-pos-DET.html) – [NOUN](ko_ksl-pos-NOUN.html) – [NUM](ko_ksl-pos-NUM.html) – [PART](ko_ksl-pos-PART.html) – [PRON](ko_ksl-pos-PRON.html) – [PROPN](ko_ksl-pos-PROPN.html) – [PUNCT](ko_ksl-pos-PUNCT.html) – [SYM](ko_ksl-pos-SYM.html) – [VERB](ko_ksl-pos-VERB.html) – [X](ko_ksl-pos-X.html)

## Features



## Relations

[acl](ko_ksl-dep-acl.html) – [advcl](ko_ksl-dep-advcl.html) – [advmod](ko_ksl-dep-advmod.html) – [amod](ko_ksl-dep-amod.html) – [appos](ko_ksl-dep-appos.html) – [aux](ko_ksl-dep-aux.html) – [case](ko_ksl-dep-case.html) – [cc](ko_ksl-dep-cc.html) – [ccomp](ko_ksl-dep-ccomp.html) – [compound](ko_ksl-dep-compound.html) – [conj](ko_ksl-dep-conj.html) – [cop](ko_ksl-dep-cop.html) – [csubj](ko_ksl-dep-csubj.html) – [dep](ko_ksl-dep-dep.html) – [det](ko_ksl-dep-det.html) – [discourse](ko_ksl-dep-discourse.html) – [dislocated](ko_ksl-dep-dislocated.html) – [fixed](ko_ksl-dep-fixed.html) – [flat](ko_ksl-dep-flat.html) – [goeswith](ko_ksl-dep-goeswith.html) – [list](ko_ksl-dep-list.html) – [mark](ko_ksl-dep-mark.html) – [nmod](ko_ksl-dep-nmod.html) – [nmod:poss](ko_ksl-dep-nmod-poss.html) – [nsubj](ko_ksl-dep-nsubj.html) – [nummod](ko_ksl-dep-nummod.html) – [obj](ko_ksl-dep-obj.html) – [obl](ko_ksl-dep-obl.html) – [parataxis](ko_ksl-dep-parataxis.html) – [punct](ko_ksl-dep-punct.html) – [root](ko_ksl-dep-root.html) – [vocative](ko_ksl-dep-vocative.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 7530 sentences and 66989 tokens.</li>
</ul>

<ul>
<li>This corpus contains 8410 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 19 types of words that contain both letters and punctuation. Examples: 10일-17일에, K-POP을, T-EXPRESS, 남주인공-카일, 성인-199,000원, 아동-174,000원, 여주인공-사라, 용산-목포-홍도-흑산도까지, 용산-목포-홍도-흑산도다, 용산-목포-홍도-흑산도와, 용산-목포-홍도-흑산도이라는, 용산-목포-홍도-흑산도입니다, 용산-목표-홍도-족산도, 용산-목표-홍도-흑단도이다, 용산-목표-홍도-흑산도, 용산-목표-홍도-흑산도이다, 있., 청.훙의, 초.한으로</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SCONJ, INTJ</li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): 에는</li>
</ul>

<ul>
<li>This corpus contains 95 lemmas tagged as pronouns (PRON): 거기+는, 그, 그+는, 그+들+은, 그+들+의, 그+들+이, 그+를, 그+의, 그거+도, 그것, 그것+ㄴ, 그것+도, 그것+들+도, 그것+은, 그것+을, 그것+이, 그녀+가, 그녀+는, 그녀+를, 그녀+의, 그때+의, 나, 나+ㄴ, 나+는, 나+도, 나+를, 나+의, 남+이, 내+가, 너, 너+ㄴ, 너+는, 너+도, 너+의, 네+가, 누구+가, 누구+나, 누구+도, 누구+를, 누구+이+ㄴ가, 니+는, 다+들, 당신+은, 둘째+는, 무엇+을, 무엇+이, 뭐+가, 비, 어디, 어디+가, 여기, 여기+는, 여러분, 여러분+들+은, 영, 우리, 우리+가, 우리+는, 우리+도, 우리+들+이, 우리+를, 우리+만+의, 우리+의, 이, 이+는, 이+를, 이거, 이것, 이것+도, 이것+들+은, 이것+들+을, 이것+은, 이것+을, 이것+이, 자+기, 자기, 자기+가, 자기+도, 자기+를, 자기+만, 자기+의, 자신+들+의, 자신+을, 자신+의, 자신+이, 저, 저+는, 저+도, 저+랑, 저+를, 저+와, 저+의, 저희, 저희+는, 제+가</li>
</ul>

<ul>
<li>This corpus contains 33 lemmas tagged as determiners (DET): 각, 그, 그떤, 그러+ㄹ, 그런, 그런+한, 너+ㄴ, 몇, 모든, 무슨, 아무, 어누, 어느, 어던, 어떤, 어러, 어쩌+ㄹ, 여러, 예기, 오+ㄴ, 이, 이+들, 이러하+ㄴ, 이런, 이런+저런, 이런+하+ㄴ, 이럼, 이렇, 이번, 일, 저, 저런, 한</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as PRON and sometimes as DET: 그, 너+ㄴ, 이, 저</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): 싶, 않, 이, 있, 하</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: 있</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>










<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: 이.</li>
</ul>

<ul>
<li>This corpus uses 5 lemmas as auxiliaries (<a>aux</a>). Examples: 싶, 하, 있, 않, 이.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (5107)</li>
      <li>VERB--NOUN-ADP(가) (1)</li>
      <li>VERB--NOUN-ADP(는) (4)</li>
      <li>VERB--NOUN-ADP(도) (7)</li>
      <li>VERB--NOUN-ADP(들+이) (1)</li>
      <li>VERB--NOUN-ADP(등) (3)</li>
      <li>VERB--NOUN-ADP(등+뿐+만) (1)</li>
      <li>VERB--NOUN-ADP(등+은) (1)</li>
      <li>VERB--NOUN-ADP(등+의) (1)</li>
      <li>VERB--NOUN-ADP(따위+도) (1)</li>
      <li>VERB--NOUN-ADP(만) (1)</li>
      <li>VERB--NOUN-ADP(밖에) (2)</li>
      <li>VERB--NOUN-ADP(반+쯤) (1)</li>
      <li>VERB--NOUN-ADP(뿐+만) (7)</li>
      <li>VERB--NOUN-ADP(와) (1)</li>
      <li>VERB--NOUN-ADP(은) (1)</li>
      <li>VERB--NOUN-ADP(을) (1)</li>
      <li>VERB--NOUN-ADP(이) (1)</li>
      <li>VERB--NOUN-ADP(쫌) (1)</li>
      <li>VERB--NOUN-ADP(쯤) (2)</li>
      <li>VERB--PRON (1052)</li>
      <li>VERB--PRON-ADP(뿐+만) (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (4975)</li>
      <li>VERB--NOUN-ADP(대신+에) (1)</li>
      <li>VERB--NOUN-ADP(도) (4)</li>
      <li>VERB--NOUN-ADP(등) (3)</li>
      <li>VERB--NOUN-ADP(등+을) (4)</li>
      <li>VERB--NOUN-ADP(라는) (1)</li>
      <li>VERB--NOUN-ADP(로) (1)</li>
      <li>VERB--NOUN-ADP(를) (4)</li>
      <li>VERB--NOUN-ADP(만) (1)</li>
      <li>VERB--NOUN-ADP(을) (4)</li>
      <li>VERB--NOUN-ADP(정도+로) (1)</li>
      <li>VERB--NOUN-ADP(하고) (2)</li>
      <li>VERB--PRON (48)</li>
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
<li>This corpus uses 1 relation subtypes: <a>nmod:poss</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>iobj</a>, <a>xcomp</a>, <a>expl</a>, <a>clf</a>, <a>orphan</a>, <a>reparandum</a></li>
</ul>
