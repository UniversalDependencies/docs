---
layout: base
title:  'UD_Japanese-PUDLUW'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Japanese PUDLUW

Language: [Japanese](/ja/index.html) (code: `ja`)<br/>
Family: Japanese

This treebank has been part of Universal Dependencies since the UD v2.9 release.

The following people have contributed to making this treebank part of UD: Mai Omura, Yusuke Miyao, Hiroshi Kanayama, Hiroshi Matsuda, Aya Wakasa, Kayo Yamashita, Masayuki Asahara, Takaaki Tanaka, Yugo Murawaki, Yuji Matsumoto, Kaoru Ito, Taishi Chika, Shinsuke Mori, Sumire Uematsu, Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Atsuko Shimada, Anna Trukhina, Martin Popel, Daniel Zeman.

Repository: [UD_Japanese-PUDLUW](https://github.com/UniversalDependencies/UD_Japanese-PUDLUW)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udja_pudluw29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Japanese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Japanese-PUDLUW/issues).
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



There are 1000 sentences in each language, always in the same order. (The
sentence alignment is 1-1 but occasionally a sentence-level segment actually
consists of two real sentences.) The sentences are taken from the news domain
(sentence id starts in `n') and from Wikipedia (sentence id starts with `w').
There are usually only a few sentences from each document, selected randomly,
not necessarily adjacent. The digits on the second and third position in the
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

In May 2021, we introduce UD_Japanese-PUDLUW the other word segmentation (**Long
Unit Word**; LUW) version of UD_Japanese-PUD.


## Acknowledgments

# Statistics of UD Japanese PUDLUW

## POS Tags

[ADJ](ja_pudluw-pos-ADJ.html) – [ADP](ja_pudluw-pos-ADP.html) – [ADV](ja_pudluw-pos-ADV.html) – [AUX](ja_pudluw-pos-AUX.html) – [CCONJ](ja_pudluw-pos-CCONJ.html) – [DET](ja_pudluw-pos-DET.html) – [INTJ](ja_pudluw-pos-INTJ.html) – [NOUN](ja_pudluw-pos-NOUN.html) – [NUM](ja_pudluw-pos-NUM.html) – [PART](ja_pudluw-pos-PART.html) – [PRON](ja_pudluw-pos-PRON.html) – [PROPN](ja_pudluw-pos-PROPN.html) – [PUNCT](ja_pudluw-pos-PUNCT.html) – [SCONJ](ja_pudluw-pos-SCONJ.html) – [SYM](ja_pudluw-pos-SYM.html) – [VERB](ja_pudluw-pos-VERB.html)

## Features

[Polarity](ja_pudluw-feat-Polarity.html)

## Relations

[acl](ja_pudluw-dep-acl.html) – [advcl](ja_pudluw-dep-advcl.html) – [advmod](ja_pudluw-dep-advmod.html) – [amod](ja_pudluw-dep-amod.html) – [appos](ja_pudluw-dep-appos.html) – [aux](ja_pudluw-dep-aux.html) – [case](ja_pudluw-dep-case.html) – [cc](ja_pudluw-dep-cc.html) – [ccomp](ja_pudluw-dep-ccomp.html) – [compound](ja_pudluw-dep-compound.html) – [cop](ja_pudluw-dep-cop.html) – [csubj](ja_pudluw-dep-csubj.html) – [dep](ja_pudluw-dep-dep.html) – [det](ja_pudluw-dep-det.html) – [discourse](ja_pudluw-dep-discourse.html) – [dislocated](ja_pudluw-dep-dislocated.html) – [fixed](ja_pudluw-dep-fixed.html) – [mark](ja_pudluw-dep-mark.html) – [nmod](ja_pudluw-dep-nmod.html) – [nsubj](ja_pudluw-dep-nsubj.html) – [nummod](ja_pudluw-dep-nummod.html) – [obj](ja_pudluw-dep-obj.html) – [obl](ja_pudluw-dep-obl.html) – [parataxis](ja_pudluw-dep-parataxis.html) – [punct](ja_pudluw-dep-punct.html) – [root](ja_pudluw-dep-root.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences and 22910 tokens.</li>
</ul>

<ul>
<li>This corpus contains 22508 tokens (98%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 197 types of words that contain both letters and punctuation. Examples: ドナルド・トランプ, クリストファー・コロンブス, ボグド・ハーン, ジョン・バーゴイン将軍, ティナ・アンセルミ, マルコ・アントニオ, 1％以上, 3％レート, 66％以上, 70％以上, 80%分, 90％分, B.C., B.C.警察, G.D.P.成長, HerFatherDidn’tLikeMeAnyway, Thought’YaKnew, Wi-Fi, Z.Amin, Zettel’sTraum, アビバ・インベスターズ, アムネスティ・インターナショナル, アレハンドラ・ゴンザレス・アナヤ, アンデス・デ・ティポ・アンドイノ, アントニ・ガウディ, アンドリュー・マー, アンドレ・プライス, アンヘル・ピンタド, アーネスト・シャックルトン卿, イェルバ・ブエナ・ガーデンズ, イヤー・オブ・ザ・リバー, イレーヌ・ジョリオ＝キュリー, インターネット・ディスカッション, インド・オーストラリア断層線, イヴ・サンローラン, ウェディング・ベル, ウォルト・ディズニー, エディンバラ・イーブニング・クーラント, エリック・ソルヘイム氏, エル・グレコ, エル・ムンド氏, エンニオ・モリコーネ, オバマ大統領特別補佐コリ・シューマン, オート・ガロンヌ地域, オードリー・ヘプバーン主演, カサ・サンタ・マルタ, カステルフランコ・ヴェネト, カンバーランド・ストラサーン公, ガース・ジェニングス, キキ・ディー</li>
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
<li>This corpus contains 8 word types tagged as particles (PART): い, か, たり, だけ, ね, ばかり, ほど, まで</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as pronouns (PRON): You, 何, 何れ, 何処, 何方, 何時, 其れ, 其れ等, 其処, 君達, 彼, 彼女, 彼等, 我々, 本の, 此れ, 此れ等, 此処, 私, 私達, 誰, 貴方, 貴方方</li>
</ul>

<ul>
<li>This corpus contains 6 lemmas tagged as determiners (DET): あらゆる, 何の, 其の, 彼の, 或る, 此の</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 13 lemmas tagged as auxiliaries (AUX): させる, しめる, せる, そう, た, たい, だ, なり, べし, ます, よう, られる, れる</li>
</ul>

<ul>
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
      <li>SCONJ: ない, なかっ, ず, ん, なければならない, なく, なければならなかっ, なければならなく</li>
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
<li>This corpus uses 13 lemmas as auxiliaries (<a>aux</a>). Examples: た, だ, れる, ます, られる, よう, せる, たい, べし, させる, そう, しめる, なり.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN-ADP(が) (367)</li>
      <li>VERB--NOUN-ADP(は) (357)</li>
      <li>VERB--NOUN-ADP(も) (32)</li>
      <li>VERB--PRON-ADP(が) (31)</li>
      <li>VERB--PRON-ADP(は) (145)</li>
      <li>VERB--PRON-ADP(も) (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-ADP(だけ)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(など)-ADP(を) (1)</li>
      <li>VERB--NOUN-ADP(など)-ADP(を通じて) (1)</li>
      <li>VERB--NOUN-ADP(を) (723)</li>
      <li>VERB--NOUN-ADP(を)-ADP(も) (1)</li>
      <li>VERB--NOUN-ADP(を始める) (1)</li>
      <li>VERB--NOUN-ADP(を持って) (1)</li>
      <li>VERB--NOUN-ADP(を通じて) (1)</li>
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
<li>The following 11 relation types are not used in this corpus at all: <a>iobj</a>, <a>xcomp</a>, <a>vocative</a>, <a>expl</a>, <a>clf</a>, <a>conj</a>, <a>flat</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
