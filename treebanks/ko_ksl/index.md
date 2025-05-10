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

This treebank has been part of Universal Dependencies since the UD v2.15 release.

The following people have contributed to making this treebank part of UD: Hakyung Sung, Gyu-Ho Shin.

Repository: [UD_Korean-KSL](https://github.com/UniversalDependencies/UD_Korean-KSL)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udko_ksl216)<br />
Download all treebanks: [UD 2.16](/#download)

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
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually, natively in UD style |

## Description

UD_Korean-KSL is a dependency treebank of second-language (L2) Korean.



The treebank contains 12,977 sentences—10,323 in the training set, 1,311 in the dev set, and 1,343 in the test set. These sentences are sourced from two datasets: (1) the Kyung Hee dataset, with sentence IDs starting with “KH” and annotated with classroom proficiency levels (A1–C2); and (2) the KoLLA dataset, with sentence IDs starting with “KL” and grouped as fb (foreign beginners), fi (foreign intermediates), and hb (heritage beginners).

## Acknowledgments

We acknowledge the original data contributors: the Kyung Hee dataset (credit to Jungyeul Park and Jung Hee Lee; note that this dataset is no longer maintained and its sentences are no longer used for further annotation) and the KoLLA dataset (credit to Markus Dickinson, Ross Israel, and Sun-Hee Lee). We also acknowledge our annotators: Hee-June Koh, Chanyoung Lee, and Youkyung Sung.


# Statistics of UD Korean KSL

## POS Tags

[ADJ](ko_ksl-pos-ADJ.html) – [ADP](ko_ksl-pos-ADP.html) – [ADV](ko_ksl-pos-ADV.html) – [AUX](ko_ksl-pos-AUX.html) – [CCONJ](ko_ksl-pos-CCONJ.html) – [DET](ko_ksl-pos-DET.html) – [NOUN](ko_ksl-pos-NOUN.html) – [NUM](ko_ksl-pos-NUM.html) – [PART](ko_ksl-pos-PART.html) – [PRON](ko_ksl-pos-PRON.html) – [PROPN](ko_ksl-pos-PROPN.html) – [PUNCT](ko_ksl-pos-PUNCT.html) – [SYM](ko_ksl-pos-SYM.html) – [VERB](ko_ksl-pos-VERB.html) – [X](ko_ksl-pos-X.html)

## Features

[Typo](ko_ksl-feat-Typo.html)

## Relations

[acl](ko_ksl-dep-acl.html) – [advcl](ko_ksl-dep-advcl.html) – [advmod](ko_ksl-dep-advmod.html) – [amod](ko_ksl-dep-amod.html) – [appos](ko_ksl-dep-appos.html) – [aux](ko_ksl-dep-aux.html) – [case](ko_ksl-dep-case.html) – [cc](ko_ksl-dep-cc.html) – [ccomp](ko_ksl-dep-ccomp.html) – [compound](ko_ksl-dep-compound.html) – [conj](ko_ksl-dep-conj.html) – [cop](ko_ksl-dep-cop.html) – [csubj](ko_ksl-dep-csubj.html) – [dep](ko_ksl-dep-dep.html) – [det](ko_ksl-dep-det.html) – [discourse](ko_ksl-dep-discourse.html) – [dislocated](ko_ksl-dep-dislocated.html) – [flat](ko_ksl-dep-flat.html) – [goeswith](ko_ksl-dep-goeswith.html) – [list](ko_ksl-dep-list.html) – [mark](ko_ksl-dep-mark.html) – [nmod](ko_ksl-dep-nmod.html) – [nmod:poss](ko_ksl-dep-nmod-poss.html) – [nsubj](ko_ksl-dep-nsubj.html) – [nummod](ko_ksl-dep-nummod.html) – [obj](ko_ksl-dep-obj.html) – [obl](ko_ksl-dep-obl.html) – [parataxis](ko_ksl-dep-parataxis.html) – [punct](ko_ksl-dep-punct.html) – [reparandum](ko_ksl-dep-reparandum.html) – [root](ko_ksl-dep-root.html) – [vocative](ko_ksl-dep-vocative.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 12977 sentences and 108072 tokens.</li>
</ul>

<ul>
<li>This corpus contains 14232 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 26 types of words that contain both letters and punctuation. Examples: 없어.라고, 1.명동에, 10일-17일에, 2.동대문어, Duluth., K-POP을, Ph.D.를, T-EXPRESS, choco-pie를, 남주인공-카일, 성인-199,000원, 아동-174,000원, 여주인공-사라, 용산-목포-홍도-흑산도까지, 용산-목포-홍도-흑산도다, 용산-목포-홍도-흑산도와, 용산-목포-홍도-흑산도이라는, 용산-목포-홍도-흑산도입니다, 용산-목표-홍도-족산도, 용산-목표-홍도-흑단도이다, 용산-목표-홍도-흑산도, 용산-목표-홍도-흑산도이다, 있., 전자사전,mp3인터넷, 청.훙의, 초.한으로</li>
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
<li>This corpus contains 115 lemmas tagged as pronouns (PRON): 거기+는, 그, 그+는, 그+대, 그+도, 그+들+도, 그+들+은, 그+들+을, 그+들+의, 그+들+이, 그+를, 그+의, 그거+도, 그것, 그것+ㄴ, 그것+도, 그것+들+도, 그것+은, 그것+을, 그것+이, 그녀+가, 그녀+는, 그녀+를, 그녀+만+의, 그녀+의, 그때+의, 나, 나+ㄴ, 나+는, 나+도, 나+를, 나+의, 남+이, 내, 내+가, 너, 너+ㄴ, 너+는, 너+도, 너+의, 네+가, 누구+ㄴ+가, 누구+가, 누구+나, 누구+도, 누구+를, 누구+이+ㄴ가, 니+는, 다+들, 당신, 당신+은, 당신+의, 둘째+는, 모두+가, 무엇+을, 무엇+이, 무엇+이+ㄴ가, 뭐+ㄹ, 뭐+가, 비, 어디, 어디+가, 여기, 여기+가, 여기+는, 여러분, 여러분+들+은, 여러분+들+이, 영, 용+은, 우리, 우리+가, 우리+는, 우리+도, 우리+들+은, 우리+들+이, 우리+를, 우리+만+의, 우리+의, 이, 이+는, 이+를, 이거, 이것, 이것+도, 이것+들+은, 이것+들+을, 이것+만, 이것+은, 이것+을, 이것+이, 자+기, 자기, 자기+가, 자기+도, 자기+를, 자기+만, 자기+의, 자신+들+의, 자신+을, 자신+의, 자신+이, 저, 저+는, 저+도, 저+랑, 저+를, 저+와, 저+의, 저기+는, 저희, 저희+는, 전, 제+가, 중</li>
</ul>

<ul>
<li>This corpus contains 39 lemmas tagged as determiners (DET): 각, 그, 그떤, 그러+ㄹ, 그런, 그런+한, 너+ㄴ, 몇, 몇+개, 모든, 무슨, 아무, 약, 어누, 어느, 어던, 어떤, 어러, 어려, 어쩌+ㄹ, 여러, 여려, 예기, 오+ㄴ, 이, 이+들, 이+번+에+는, 이러하+ㄴ, 이런, 이런+저런, 이런+하+ㄴ, 이럼, 이렇, 이번, 일, 저, 저런, 지지난, 한</li>
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


<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: 만습니다, 중용한, 경재적인, 관찮아요, 다뜻합니다, 다향한, 달리다, 됬다, 마싯었습니다, 맜습니다</li>
          <li>ADP: 떄문에, 두, 동해, 때, 땜누에, 떼문에, 슾에, 은, 이을, 장도</li>
          <li>ADV: 그레서, 고리고, 대, 외냐하면, 그래고, 도, 때, 아프로, 재일, 하지마</li>
          <li>AUX: 싶어니다, 했는, 싶어, 않는, 않을면, 않있습니다, 않했습니다, 있엇다고, 하겠말이다, 하지마</li>
          <li>DET: 그떤, 그런한, 어누, 어던, 어러, 어려, 여려, 예기, 이, 이럼</li>
          <li>NOUN: 궁무원이, 웃이, 훠꿔를, 가경이, 땋알, 부모니는, 성물을, 음막이, 진고가, 홍상을</li>
          <li>NUM: 만, 이, 이홉</li>
          <li>PRON: 그대, 내, 니는, 자기, 자기를</li>
          <li>PROPN: 우치</li>
          <li>SYM: 훠꿔</li>
          <li>VERB: 유면한, 조세요, 보릅니다, 해어지고, 거옙니다, 건다, 논다, 다서, 도와, 배옵니다</li>
          <li>X: 하고</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

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
      <li>VERB--NOUN (7920)</li>
      <li>VERB--NOUN-ADP(가) (2)</li>
      <li>VERB--NOUN-ADP(는) (5)</li>
      <li>VERB--NOUN-ADP(도) (9)</li>
      <li>VERB--NOUN-ADP(들+은) (1)</li>
      <li>VERB--NOUN-ADP(들+이) (1)</li>
      <li>VERB--NOUN-ADP(등) (5)</li>
      <li>VERB--NOUN-ADP(등+뿐+만) (1)</li>
      <li>VERB--NOUN-ADP(등+은) (1)</li>
      <li>VERB--NOUN-ADP(등+의) (1)</li>
      <li>VERB--NOUN-ADP(등+이) (1)</li>
      <li>VERB--NOUN-ADP(따위) (1)</li>
      <li>VERB--NOUN-ADP(따위+도) (1)</li>
      <li>VERB--NOUN-ADP(때문+이) (1)</li>
      <li>VERB--NOUN-ADP(만) (4)</li>
      <li>VERB--NOUN-ADP(밖에) (2)</li>
      <li>VERB--NOUN-ADP(반+쯤) (1)</li>
      <li>VERB--NOUN-ADP(뿐+만) (10)</li>
      <li>VERB--NOUN-ADP(와) (1)</li>
      <li>VERB--NOUN-ADP(은) (2)</li>
      <li>VERB--NOUN-ADP(을) (1)</li>
      <li>VERB--NOUN-ADP(이) (2)</li>
      <li>VERB--NOUN-ADP(이상) (1)</li>
      <li>VERB--NOUN-ADP(쫌) (1)</li>
      <li>VERB--NOUN-ADP(쯤) (4)</li>
      <li>VERB--NOUN-ADP(하+고) (1)</li>
      <li>VERB--NOUN-ADP(하고) (6)</li>
      <li>VERB--PRON (1668)</li>
      <li>VERB--PRON-ADP(뿐+만) (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (8171)</li>
      <li>VERB--NOUN-ADP(과) (1)</li>
      <li>VERB--NOUN-ADP(대신+에) (1)</li>
      <li>VERB--NOUN-ADP(도) (5)</li>
      <li>VERB--NOUN-ADP(두) (2)</li>
      <li>VERB--NOUN-ADP(등) (4)</li>
      <li>VERB--NOUN-ADP(등+을) (7)</li>
      <li>VERB--NOUN-ADP(라는) (1)</li>
      <li>VERB--NOUN-ADP(로) (1)</li>
      <li>VERB--NOUN-ADP(를) (13)</li>
      <li>VERB--NOUN-ADP(만) (3)</li>
      <li>VERB--NOUN-ADP(을) (5)</li>
      <li>VERB--NOUN-ADP(이+을) (1)</li>
      <li>VERB--NOUN-ADP(정도+로) (1)</li>
      <li>VERB--NOUN-ADP(쯤) (1)</li>
      <li>VERB--NOUN-ADP(하고) (10)</li>
      <li>VERB--NOUN-ADP(학고) (1)</li>
      <li>VERB--PRON (63)</li>
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
<li>The following 6 relation types are not used in this corpus at all: <a>iobj</a>, <a>xcomp</a>, <a>expl</a>, <a>clf</a>, <a>fixed</a>, <a>orphan</a></li>
</ul>
