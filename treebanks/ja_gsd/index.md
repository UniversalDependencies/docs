---
layout: base
title:  'UD_Japanese-GSD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Japanese GSD

Language: [Japanese](/ja/index.html) (code: `ja`)<br/>
Family: Japanese

This treebank has been part of Universal Dependencies since the UD v1.4 release.

The following people have contributed to making this treebank part of UD: Mai Omura, Yusuke Miyao, Hiroshi Kanayama, Hiroshi Matsuda, Aya Wakasa, Kayo Yamashita, Masayuki Asahara, Takaaki Tanaka, Yugo Murawaki, Yuji Matsumoto, Shinsuke Mori, Sumire Uematsu, Ryan McDonald, Joakim Nivre, Daniel Zeman.

Repository: [UD_Japanese-GSD](https://github.com/UniversalDependencies/UD_Japanese-GSD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udja_gsd26)<br />
Download all treebanks: [UD 2.6](/#download)

License: CC BY-SA 4.0

Genre: news, blog

Questions, comments?
General annotation questions (either Japanese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Japanese-GSD/issues).
If you want to collaborate, please contact [hkana&nbsp;(æt)&nbsp;jp&nbsp;•&nbsp;ibm&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | not available |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

This Universal Dependencies (UD) Japanese treebank is based on the definition of UD Japanese convention described in the UD documentation. The original sentences are from Google UDT 2.0.




The Japanese UD treebank contains the sentences from Google Universal Dependency Treebanks v2.0 (legacy): https://github.com/ryanmcd/uni-dep-tb. First, Google UDT v2.0 was converted to UD-style with bunsetsu-based word units (say "master" corpus).

The word units in "master" is significantly different from the definition of the documents based on Short Word Unit (SWU) [1], then the sentences are automatically re-processed by Hiroshi Kanayama in Feb 2017. It is the Japanese_UD v2.0 and used in the CoNLL 2017 shared task.
In November 2017, UD_Japanese v2.0 is merged with the "master" data so that the manual annotations for dependencies can be reflected to the corpus. It reduced the errors in the dependency structures and relation labels.

Still there are slight differences in the word unit between UD_Japanese v2.1 and UD_Japanese-KTC 1.3.

In May 2020, we introduce UD_Japanese BCCWJ[3] like coversion method for UD_Japanese GSD v2.6.

## Acknowledgments

The original treebank was provided by:

- Adam LaMontagne
- Milan Souček
- Timo Järvinen
- Alessandra Radici

via

- Dan Zeman.

The corpus was converted by:

- Mai Omura
- Yusuke Miyao
- Hiroshi Kanayama
- Hiroshi Matsuda

through annotation, discussion and validation with

- Aya Wakasa
- Kayo Yamashita
- Masayuki Asahara
- Takaaki Tanaka
- Yugo Murawaki
- Yuji Matsumoto
- Shinsuke Mori
- Sumire Uematsu


# Statistics of UD Japanese GSD

## POS Tags

[ADJ](ja_gsd-pos-ADJ.html) – [ADP](ja_gsd-pos-ADP.html) – [ADV](ja_gsd-pos-ADV.html) – [AUX](ja_gsd-pos-AUX.html) – [CCONJ](ja_gsd-pos-CCONJ.html) – [DET](ja_gsd-pos-DET.html) – [INTJ](ja_gsd-pos-INTJ.html) – [NOUN](ja_gsd-pos-NOUN.html) – [NUM](ja_gsd-pos-NUM.html) – [PART](ja_gsd-pos-PART.html) – [PRON](ja_gsd-pos-PRON.html) – [PROPN](ja_gsd-pos-PROPN.html) – [PUNCT](ja_gsd-pos-PUNCT.html) – [SCONJ](ja_gsd-pos-SCONJ.html) – [SYM](ja_gsd-pos-SYM.html) – [VERB](ja_gsd-pos-VERB.html)

## Features

[Polarity](ja_gsd-feat-Polarity.html)

## Relations

[acl](ja_gsd-dep-acl.html) – [advcl](ja_gsd-dep-advcl.html) – [advmod](ja_gsd-dep-advmod.html) – [amod](ja_gsd-dep-amod.html) – [aux](ja_gsd-dep-aux.html) – [case](ja_gsd-dep-case.html) – [cc](ja_gsd-dep-cc.html) – [ccomp](ja_gsd-dep-ccomp.html) – [compound](ja_gsd-dep-compound.html) – [cop](ja_gsd-dep-cop.html) – [csubj](ja_gsd-dep-csubj.html) – [dep](ja_gsd-dep-dep.html) – [det](ja_gsd-dep-det.html) – [discourse](ja_gsd-dep-discourse.html) – [dislocated](ja_gsd-dep-dislocated.html) – [fixed](ja_gsd-dep-fixed.html) – [mark](ja_gsd-dep-mark.html) – [nmod](ja_gsd-dep-nmod.html) – [nsubj](ja_gsd-dep-nsubj.html) – [nummod](ja_gsd-dep-nummod.html) – [obj](ja_gsd-dep-obj.html) – [obl](ja_gsd-dep-obl.html) – [punct](ja_gsd-dep-punct.html) – [root](ja_gsd-dep-root.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 8071 sentences and 192605 tokens.</li>
</ul>

<ul>
<li>This corpus contains 192374 tokens (100%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 31 types of words that contain both letters and punctuation. Examples: Wi-Fi, 一、二塁, 80’s, D.C., E.T., IT’S, L.E.D., L’Arc, L’Orateur, MR., No., O’Malley, ぼ・っ・ち・, ウィルダネス・タバーン, エル・ドラード, カハ・デュエロ, カムデン・ヤーズ, パパ’S, ピーク・ウィルダーネス, ブローム・ウント・フォス, ベア・ビュット, ベル・フーシェ, ペルリー・セルトゥ, マハメド・スベール, マリィ・トロステネツ, メ〜テレ, ラ・サール, ル・マン, ロギー・バイユー, ・ふ・た・り・, 一、三塁</li>
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
<li>This corpus contains 50 word types tagged as particles (PART): か, かしらん, かね, がかっ, がち, がっ, がら, がり, がる, くらい, ぐらい, げ, さ, さえ, しか, すぎ, すら, ぞ, ぞお, たり, だけ, だり, って, っぱなし, っぽ, っぽい, っぽく, どころ, な, なぁ, なあ, など, なんて, なー, ね, ねえ, の, のみ, ばかり, ほど, まで, まとい, や, よ, よぉ, よー, わ, 的, 程, 風</li>
</ul>

<ul>
<li>This corpus contains 56 lemmas tagged as pronouns (PRON): You, あちこち, あちら, あなた, あらゆる, ある, あれ, いずこ, いずれ, いつ, おまえ, おめー, お前, か, かれ, ここ, こちら, こっち, これ, こんな, そこ, そちら, そらあ, それ, そんな, どこ, どちら, どなた, どれ, どんな, なに, なん, ぼく, わしゃ, わたし, われわれ, オタク, キミ, ボク, ヲタク, 何, 何処, 何時, 余, 俺, 僕, 君, 己, 彼, 彼女, 彼方, 我, 我々, 私, 誰, 貴様</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as determiners (DET): あの, この, その, どの</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 109 lemmas tagged as auxiliaries (AUX): ある, いい, いく, いける, いたす, いただく, いただける, いらっしゃる, いる, える, おく, おける, おる, かかる, がたい, がましい, きる, きれる, くださる, くる, くれる, ごとし, させる, しまう, しれる, じゃ, す, すぎる, する, せる, そう, た, たい, たがる, たり, だ, だす, ちゃう, っつう, つくす, つづける, づける, づらい, てく, てる, できる, でる, とく, ない, なさる, なり, なる, にくい, ぬ, ぬく, はじめる, べし, ほしい, まい, まいる, まう, まじ, ます, みたい, みたく, みる, む, もらう, もらえる, や, やすい, やる, ゆく, よい, よう, らしい, らる, られる, り, れる, わたる, 亘る, 付ける, 出す, 切る, 参る, 合う, 回る, 始める, 尽くす, 忘れる, 慣れる, 抜く, 損ねる, 易い, 来る, 果てる, 渡る, 直す, 終わる, 続く, 続ける, 置く, 致す, 行く, 行ける, 込む, 遅れる, 難い</li>
</ul>

<ul>
<li>Out of the above, 55 lemmas occurred sometimes as AUX and sometimes as VERB: ある, いく, いける, いたす, いただく, いただける, いらっしゃる, いる, える, おく, おる, かかる, くださる, くる, くれる, しまう, しれる, すぎる, する, そう, だす, つづける, できる, でる, なる, はじめる, まいる, みる, もらう, もらえる, やる, わたる, 亘る, 付ける, 出す, 切る, 参る, 合う, 回る, 始める, 尽くす, 忘れる, 慣れる, 抜く, 来る, 渡る, 直す, 終わる, 続く, 続ける, 置く, 致す, 行く, 行ける, 遅れる</li>
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
      <li>ADJ: 無い, 無く, 無かっ</li>
      <li>AUX: ない, なかっ, なく, なけれ, なきゃ, 無い, な, 無く</li>
      <li>NOUN: 不, 非, 反, 無, 未, 異</li>
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
<li>This corpus uses 107 lemmas as auxiliaries (<a>aux</a>). Examples: た, する, だ, いる, れる, ます, ある, ない, られる, ぬ, よう, できる, おる, せる, たい, くる, しまう, なる, くれる, いく, てる, そう, くださる, もらう, みる, いただく, べし, やすい, らしい, しれる, 続ける, 始める, すぎる, みたい, ちゃう, いい, える, なり, もらえる, おく, す, いただける, させる, ほしい, にくい, よい, いたす, きれる, っつう, でる.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-ADP(か)-ADP(が) (1)</li>
      <li>VERB--NOUN-ADP(か)-ADP(は) (3)</li>
      <li>VERB--NOUN-ADP(から)-ADP(が) (2)</li>
      <li>VERB--NOUN-ADP(から)-ADP(の) (1)</li>
      <li>VERB--NOUN-ADP(が) (2586)</li>
      <li>VERB--NOUN-ADP(だけ)-ADP(が) (4)</li>
      <li>VERB--NOUN-ADP(だけ)-ADP(は) (3)</li>
      <li>VERB--NOUN-ADP(で)-ADP(の) (1)</li>
      <li>VERB--NOUN-ADP(と)-ADP(が) (1)</li>
      <li>VERB--NOUN-ADP(など)-ADP(が) (37)</li>
      <li>VERB--NOUN-ADP(など)-ADP(は) (7)</li>
      <li>VERB--NOUN-ADP(の) (90)</li>
      <li>VERB--NOUN-ADP(の)-ADP(で) (2)</li>
      <li>VERB--NOUN-ADP(の)-ADP(で)-ADP(は) (1)</li>
      <li>VERB--NOUN-ADP(の)-ADP(と) (4)</li>
      <li>VERB--NOUN-ADP(の)-ADP(に) (4)</li>
      <li>VERB--NOUN-ADP(の)-ADP(は) (2)</li>
      <li>VERB--NOUN-ADP(のみ)-ADP(が) (1)</li>
      <li>VERB--NOUN-ADP(は) (1719)</li>
      <li>VERB--NOUN-ADP(まで)-ADP(が) (3)</li>
      <li>VERB--NOUN-ADP(まで)-ADP(は) (13)</li>
      <li>VERB--NOUN-ADP(や)-ADP(が) (1)</li>
      <li>VERB--NOUN-ADP(等)-ADP(が) (1)</li>
      <li>VERB--PRON-ADP(か)-ADP(が) (1)</li>
      <li>VERB--PRON-ADP(か)-ADP(は) (1)</li>
      <li>VERB--PRON-ADP(が) (46)</li>
      <li>VERB--PRON-ADP(だけ)-ADP(が) (1)</li>
      <li>VERB--PRON-ADP(の) (3)</li>
      <li>VERB--PRON-ADP(は) (90)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-ADP(か)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(が)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(が)-ADP(を)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(だけ)-ADP(を) (2)</li>
      <li>VERB--NOUN-ADP(と)-ADP(か)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(と)-ADP(を) (3)</li>
      <li>VERB--NOUN-ADP(など)-ADP(を) (47)</li>
      <li>VERB--NOUN-ADP(に)-ADP(を) (2)</li>
      <li>VERB--NOUN-ADP(の)-ADP(の)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(の)-ADP(を) (3)</li>
      <li>VERB--NOUN-ADP(のみ)-ADP(を) (3)</li>
      <li>VERB--NOUN-ADP(まで)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(を) (4494)</li>
      <li>VERB--NOUN-ADP(を)-ADP(で)-ADP(も) (1)</li>
      <li>VERB--NOUN-ADP(を)-ADP(も) (2)</li>
      <li>VERB--NOUN-ADP(ノ)-ADP(を) (1)</li>
      <li>VERB--PRON-ADP(か)-ADP(を) (4)</li>
      <li>VERB--PRON-ADP(まで)-ADP(を) (1)</li>
      <li>VERB--PRON-ADP(を) (79)</li>
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
<li>The following 13 relation types are not used in this corpus at all: <a>iobj</a>, <a>xcomp</a>, <a>vocative</a>, <a>expl</a>, <a>appos</a>, <a>clf</a>, <a>conj</a>, <a>flat</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
