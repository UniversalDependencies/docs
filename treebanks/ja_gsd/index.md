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

The following people have contributed to making this treebank part of UD: Hiroshi Kanayama, Masayuki Asahara, Yusuke Miyao, Takaaki Tanaka, Ryan McDonald, Joakim Nivre, Daniel Zeman, Yuji Matsumoto, Shinsuke Mori, Sumire Uematsu.

Repository: [UD_Japanese-GSD](https://github.com/UniversalDependencies/UD_Japanese-GSD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udja_gsd25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-SA 4.0

Genre: news, blog

Questions, comments?
General annotation questions (either Japanese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Japanese-GSD/issues).
If you want to collaborate, please contact [hkana&nbsp;(æt)&nbsp;jp&nbsp;•&nbsp;ibm&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Features | not available |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description

This Universal Dependencies (UD) Japanese treebank is based on the definition of UD Japanese convention described in the UD documentation. The original sentences are from Google UDT 2.0.




The Japanese UD treebank contains the sentences from Google Universal Dependency Treebanks v2.0 (legacy): https://github.com/ryanmcd/uni-dep-tb. First, Google UDT v2.0 was converted to UD-style with bunsetsu-based word units (say "master" corpus).

The word units in "master" is significantly different from the definition of the documents based on Short Word Unit (SWU) [1], then the sentences are automatically re-processed by Hiroshi Kanayama in Feb 2017. It is the Japanese_UD v2.0 and used in the CoNLL 2017 shared task.
In November 2017, UD_Japanese v2.0 is merged with the "master" data so that the manual annotations for dependencies can be reflected to the corpus. It reduced the errors in the dependency structures and relation labels.

Still there are slight differences in the word unit between UD_Japanese v2.1 and UD_Japanese-KTC 1.3. The manual segmentation work is ongoing by the group of Masayuki Asahara so that the divergence of the two Japanese treebanks should be fixed in the future.



## Acknowledgments

The original treebank was provided by:

- Adam LaMontagne
- Milan Souček
- Timo Järvinen
- Alessandra Radici

via

- Dan Zeman.

The corpus was converted by:

- Hiroshi Kanayama

through discussion and validation with

- Yusuke Miyao
- Masayuki Asahara
- Takaaki Tanaka
- Yuji Matsumoto
- Shinsuke Mori
- Sumire Uematsu


# Statistics of UD Japanese GSD

## POS Tags

[ADJ](ja_gsd-pos-ADJ.html) – [ADP](ja_gsd-pos-ADP.html) – [ADV](ja_gsd-pos-ADV.html) – [AUX](ja_gsd-pos-AUX.html) – [CCONJ](ja_gsd-pos-CCONJ.html) – [DET](ja_gsd-pos-DET.html) – [INTJ](ja_gsd-pos-INTJ.html) – [NOUN](ja_gsd-pos-NOUN.html) – [NUM](ja_gsd-pos-NUM.html) – [PART](ja_gsd-pos-PART.html) – [PRON](ja_gsd-pos-PRON.html) – [PROPN](ja_gsd-pos-PROPN.html) – [PUNCT](ja_gsd-pos-PUNCT.html) – [SCONJ](ja_gsd-pos-SCONJ.html) – [SYM](ja_gsd-pos-SYM.html) – [VERB](ja_gsd-pos-VERB.html)

## Features

[NumType](ja_gsd-feat-NumType.html)

## Relations

[acl](ja_gsd-dep-acl.html) – [advcl](ja_gsd-dep-advcl.html) – [advmod](ja_gsd-dep-advmod.html) – [amod](ja_gsd-dep-amod.html) – [aux](ja_gsd-dep-aux.html) – [case](ja_gsd-dep-case.html) – [cc](ja_gsd-dep-cc.html) – [ccomp](ja_gsd-dep-ccomp.html) – [compound](ja_gsd-dep-compound.html) – [cop](ja_gsd-dep-cop.html) – [csubj](ja_gsd-dep-csubj.html) – [dep](ja_gsd-dep-dep.html) – [det](ja_gsd-dep-det.html) – [discourse](ja_gsd-dep-discourse.html) – [dislocated](ja_gsd-dep-dislocated.html) – [fixed](ja_gsd-dep-fixed.html) – [iobj](ja_gsd-dep-iobj.html) – [mark](ja_gsd-dep-mark.html) – [nmod](ja_gsd-dep-nmod.html) – [nsubj](ja_gsd-dep-nsubj.html) – [nummod](ja_gsd-dep-nummod.html) – [obj](ja_gsd-dep-obj.html) – [obl](ja_gsd-dep-obl.html) – [punct](ja_gsd-dep-punct.html) – [root](ja_gsd-dep-root.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 8186 sentences and 184072 tokens.</li>
</ul>

<ul>
<li>This corpus contains 183425 tokens (100%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 76 types of words that contain both letters and punctuation. Examples: 、と, 、という, SETI@home, ”と, が、, ら・むうん, スター・ウォーズ, ルイ・ヴィトン, (株), )し, A&M, A.T, D.C.I, E.T, IT'SFRIDAY, J.Z, Jr., L'Arc, L'Orateurdu, L.E.D, O'Malley, PaulKantner's, S&P, ZYX-α, ”する, ”に, 、で, 、といった, 、など, 、の, 、を, 」し, アテナ&ロビケロッツ, アル・パチーノ, アンディ・ウォーホル, アンドレ・アガシ, イー・モバイル, ウォール・ストリート・ジャーナル, エル・ドラード, エール・フランス, オードリー・ヘップバーン, カール・ツァイス, クリーブランド・ブラウンズ, ゴールドマン・サックス, サム・シェパード, シラノ・ド・ベルジュラック, ジェームズ・ブキャナン, ジェームズ・ワトソン, ジャネット・ジャクソン, ジョン・レノン</li>
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
<li>This corpus contains 61 word types tagged as particles (PART): +, -, ~, およそ, か, かしらん, かどうか, か否か, がな, さ, ぞ, ぞお, な, なぁ, なあ, なー, ね, ねえ, の, のよ, ほぼ, よ, よぉ, よー, わ, ナンバー, ベスト, マイナス, マッハ, 丸, 人口, 全長, 分の, 南緯, 各, 同, 夜, 対, 平成, 年, 延べ, 昭和, 最低, 最多, 最大, 最高, 残り, 毎時, 直径, 第, 築, 紀元前, 約, 総計, 翌, 計, 金, 長さ, 高さ, 齢, ～</li>
</ul>

<ul>
<li>This corpus contains 55 lemmas tagged as pronouns (PRON): あちこち, あちら, あなた, あれ, いずれ, おまえ, おめーら, お前, かれ, ここ, こちら, この方, これ, これら, そこ, そちら, その他, それ, それぞれ, それら, どこ, どちら, どなた, どれ, なん, ぼく, みなさま, みなさん, みんな, わしゃ, わたし, われわれ, 他所, 何か, 何処, 俺, 僕, 僕ら, 君, 奴, 彼, 彼ら, 彼女, 彼女たち, 彼方, 彼等, 我々, 手前, 皆, 皆さま, 皆さん, 皆様, 私, 私たち, 誰</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as determiners (DET): あの, この, その, どの</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 118 lemmas tagged as auxiliaries (AUX): あう, あげる, ある, いく, いける, いただく, いらっしゃる, いる, う, うる, える, おく, おる, かける, かす, かねる, かもしれる, かも知れる, がたい, がちだ, がる, きる, くださる, くれる, ける, げだ, げる, こむ, ございる, させる, ざるをえる, ざるを得る, しまう, すぎる, する, せる, そうだ, た, たい, たっ, たら, たろ, たー, だ, だす, だめ, ちゃう, っぱい, っぱなし, っぽい, つづける, づめる, づらい, て, てる, できる, でした, ない, なければ, なさる, なら, なる, にくい, ぬく, ね, はじめる, ふうだ, べし, べる, ほしい, ま~す, まい, まいる, まう, ます, みせる, みたいだ, みる, める, もらう, もらえる, やすい, やっ, やる, ゆく, よい, よう, ようだ, らしい, らす, らるる, られる, れる, わす, 下さる, 出す, 出来る, 切る, 化, 参る, 合う, 回る, 始める, 尽くす, 得る, 易い, 来る, 欲しい, 済み, 直す, 終わる, 続ける, 良い, 行く, 込む, 過ぎる, 難い, 頂く</li>
</ul>

<ul>
<li>Out of the above, 49 lemmas occurred sometimes as AUX and sometimes as VERB: あう, あげる, ある, いく, いける, いただく, いらっしゃる, いる, おく, おる, かける, きる, くださる, くれる, こむ, しまう, すぎる, する, せる, だす, つづける, できる, なさる, なる, はじめる, ます, みせる, みる, もらう, やる, ゆく, 下さる, 出す, 出来る, 切る, 化, 参る, 合う, 回る, 始める, 尽くす, 得る, 来る, 直す, 終わる, 続ける, 行く, 過ぎる, 頂く</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>








<h3>Degree and Polarity</h3>





<h3>Verbal Features</h3>







<h3>Pronouns, Determiners, Quantifiers</h3>



<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 1, 2, 3, 4, 一, 5, 10, 6, 二, 7</li>
    </ul>
  </li>
</ul>







<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: だ.</li>
</ul>

<ul>
<li>This corpus uses 116 lemmas as auxiliaries (<a>aux</a>). Examples: た, する, いる, れる, だ, ます, ない, ようだ, られる, なる, おる, せる, う, 来る, できる, たい, しまう, くれる, いく, そうだ, たら, もらう, みる, える, べし, なら, やすい, ける, くださる, 続ける, いただく, らしい, める, でした, 始める, 行く, かもしれる, みたいだ, 出す, 出来る, 合う, すぎる, 頂く, ある, ちゃう, おく, なければ, 込む, もらえる, させる.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-ADP(から)-ADP(が) (3)</li>
      <li>VERB--NOUN-ADP(が) (2516)</li>
      <li>VERB--NOUN-ADP(が)-ADP(に) (1)</li>
      <li>VERB--NOUN-ADP(だけ)-ADP(が) (4)</li>
      <li>VERB--NOUN-ADP(だけ)-ADP(は) (3)</li>
      <li>VERB--NOUN-ADP(など)-ADP(が) (35)</li>
      <li>VERB--NOUN-ADP(など)-ADP(は) (7)</li>
      <li>VERB--NOUN-ADP(のみ)-ADP(が) (1)</li>
      <li>VERB--NOUN-ADP(は) (1751)</li>
      <li>VERB--NOUN-ADP(まで)-ADP(が) (2)</li>
      <li>VERB--NOUN-ADP(まで)-ADP(も)-ADP(が) (1)</li>
      <li>VERB--PRON-ADP(が) (50)</li>
      <li>VERB--PRON-ADP(は) (109)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-ADP(だけ)-ADP(を) (2)</li>
      <li>VERB--NOUN-ADP(と)-ADP(を) (3)</li>
      <li>VERB--NOUN-ADP(という)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(といった)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(とか)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(など)-ADP(を) (53)</li>
      <li>VERB--NOUN-ADP(に当たる)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(のみ)-ADP(を) (5)</li>
      <li>VERB--NOUN-ADP(ほど)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(まで)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(を) (4498)</li>
      <li>VERB--NOUN-ADP(を)-ADP(と)-ADP(も) (2)</li>
      <li>VERB--NOUN-ADP(を)-ADP(はじめ) (4)</li>
      <li>VERB--NOUN-ADP(を)-ADP(も) (2)</li>
      <li>VERB--PRON-ADP(まで)-ADP(を) (1)</li>
      <li>VERB--PRON-ADP(を) (85)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-ADP(くらい)-ADP(に) (3)</li>
      <li>VERB--NOUN-ADP(だけ)-ADP(に) (2)</li>
      <li>VERB--NOUN-ADP(と)-ADP(に) (1)</li>
      <li>VERB--NOUN-ADP(など)-ADP(に) (21)</li>
      <li>VERB--NOUN-ADP(など)-ADP(に)-ADP(は) (1)</li>
      <li>VERB--NOUN-ADP(など)-ADP(に)-ADP(も) (3)</li>
      <li>VERB--NOUN-ADP(なり)-ADP(に) (1)</li>
      <li>VERB--NOUN-ADP(に) (3527)</li>
      <li>VERB--NOUN-ADP(に)-ADP(しか) (2)</li>
      <li>VERB--NOUN-ADP(に)-ADP(だけ)-ADP(で)-ADP(も) (1)</li>
      <li>VERB--NOUN-ADP(に)-ADP(だけ)-ADP(は) (2)</li>
      <li>VERB--NOUN-ADP(に)-ADP(と) (1)</li>
      <li>VERB--NOUN-ADP(に)-ADP(は) (394)</li>
      <li>VERB--NOUN-ADP(に)-ADP(は)-ADP(と) (1)</li>
      <li>VERB--NOUN-ADP(に)-ADP(まで) (10)</li>
      <li>VERB--NOUN-ADP(に)-ADP(も) (107)</li>
      <li>VERB--NOUN-ADP(のみ)-ADP(に) (1)</li>
      <li>VERB--NOUN-ADP(は)-ADP(に) (1)</li>
      <li>VERB--NOUN-ADP(ほど)-ADP(に) (1)</li>
      <li>VERB--NOUN-ADP(まで)-ADP(に) (23)</li>
      <li>VERB--NOUN-ADP(まで)-ADP(に)-ADP(は) (1)</li>
      <li>VERB--PRON-ADP(に) (72)</li>
      <li>VERB--PRON-ADP(に)-ADP(しか) (1)</li>
      <li>VERB--PRON-ADP(に)-ADP(は) (10)</li>
      <li>VERB--PRON-ADP(に)-ADP(も) (6)</li>
      <li>VERB--PRON-ADP(まで)-ADP(に) (3)</li>
      <li>VERB--PRON-ADP(まで)-ADP(に)-ADP(も) (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus does not use relation subtypes.</li>
<li>The following 12 relation types are not used in this corpus at all: <a>xcomp</a>, <a>vocative</a>, <a>expl</a>, <a>appos</a>, <a>clf</a>, <a>conj</a>, <a>flat</a>, <a>list</a>, <a>parataxis</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
