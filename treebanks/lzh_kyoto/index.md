---
layout: base
title:  'UD_Classical_Chinese-Kyoto'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Classical Chinese Kyoto

Language: [Classical Chinese](/lzh/index.html) (code: `lzh`)<br/>
Family: Sino-Tibetan

This treebank has been part of Universal Dependencies since the UD v2.4 release.

The following people have contributed to making this treebank part of UD: Koichi Yasuoka, Christian Wittern, Tomohiko Morioka, Takumi Ikeda, Naoki Yamazaki, Yoshihiro Nikaido, Shingo Suzuki, Shigeki Moro, Yuan Li, Hiroyuki Shirasu, Kazunori Fujita.

Repository: [UD_Classical_Chinese-Kyoto](https://github.com/UniversalDependencies/UD_Classical_Chinese-Kyoto)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udlzh_kyoto26)<br />
Download all treebanks: [UD 2.6](/#download)

License: PD

Genre: nonfiction

Questions, comments?
General annotation questions (either Classical Chinese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Classical_Chinese-Kyoto/issues).
If you want to collaborate, please contact [yasuoka&nbsp;(æt)&nbsp;kanji&nbsp;•&nbsp;zinbun&nbsp;•&nbsp;kyoto-u&nbsp;•&nbsp;ac&nbsp;•&nbsp;jp].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually, natively in UD style |

## Description

Classical Chinese Universal Dependencies Treebank annotated and converted by Institute for Research in Humanities, Kyoto University.



This Treebank is taken under the full text of 論語 (Lunyu, 20 volumes), 孟子 (Mencius, 14 volumes), and 43 volumes from 禮記. In Classical Chinese we had no spaces or punctuations between words or sentences, so we did not include any spaces or punctuations in Treebank files:

* lzh_kyoto-ud-test.conllu
- 學而篇第一 為政篇第二 and 八佾篇第三 from 論語
- 梁惠王上 and 梁惠王下 from 孟子
- 中庸 from 禮記

* lzh_kyoto-ud-dev.conllu
- 顏淵篇第十二 子路篇第十三 and 憲問篇第十四 from 論語
- 告子上 and 告子下 from 孟子
- 大學 from 禮記

* lzh_kyoto-ud-train.conllu
- 論語 (except for 學而篇第一 為政篇第二 八佾篇第三 顏淵篇第十二 子路篇第十三 憲問篇第十四)
- 孟子 (except for 梁惠王上 梁惠王下 告子上 告子下)
- 曲禮上 to 樂記 and 經解 to 喪服四制 from 禮記 (except for 中庸 大學)

## Acknowledgments

# Statistics of UD Classical Chinese Kyoto

## POS Tags

[ADP](lzh_kyoto-pos-ADP.html) – [ADV](lzh_kyoto-pos-ADV.html) – [AUX](lzh_kyoto-pos-AUX.html) – [CCONJ](lzh_kyoto-pos-CCONJ.html) – [INTJ](lzh_kyoto-pos-INTJ.html) – [NOUN](lzh_kyoto-pos-NOUN.html) – [NUM](lzh_kyoto-pos-NUM.html) – [PART](lzh_kyoto-pos-PART.html) – [PRON](lzh_kyoto-pos-PRON.html) – [PROPN](lzh_kyoto-pos-PROPN.html) – [SCONJ](lzh_kyoto-pos-SCONJ.html) – [SYM](lzh_kyoto-pos-SYM.html) – [VERB](lzh_kyoto-pos-VERB.html)

## Features

[AdvType](lzh_kyoto-feat-AdvType.html) – [Aspect](lzh_kyoto-feat-Aspect.html) – [Case](lzh_kyoto-feat-Case.html) – [Degree](lzh_kyoto-feat-Degree.html) – [Mood](lzh_kyoto-feat-Mood.html) – [NameType](lzh_kyoto-feat-NameType.html) – [NounType](lzh_kyoto-feat-NounType.html) – [NumType](lzh_kyoto-feat-NumType.html) – [Person](lzh_kyoto-feat-Person.html) – [Polarity](lzh_kyoto-feat-Polarity.html) – [PronType](lzh_kyoto-feat-PronType.html) – [Reflex](lzh_kyoto-feat-Reflex.html) – [Tense](lzh_kyoto-feat-Tense.html) – [VerbForm](lzh_kyoto-feat-VerbForm.html) – [VerbType](lzh_kyoto-feat-VerbType.html) – [Voice](lzh_kyoto-feat-Voice.html)

## Relations

[acl](lzh_kyoto-dep-acl.html) – [advcl](lzh_kyoto-dep-advcl.html) – [advmod](lzh_kyoto-dep-advmod.html) – [amod](lzh_kyoto-dep-amod.html) – [aux](lzh_kyoto-dep-aux.html) – [case](lzh_kyoto-dep-case.html) – [cc](lzh_kyoto-dep-cc.html) – [ccomp](lzh_kyoto-dep-ccomp.html) – [clf](lzh_kyoto-dep-clf.html) – [compound](lzh_kyoto-dep-compound.html) – [compound:redup](lzh_kyoto-dep-compound-redup.html) – [conj](lzh_kyoto-dep-conj.html) – [cop](lzh_kyoto-dep-cop.html) – [csubj](lzh_kyoto-dep-csubj.html) – [csubj:pass](lzh_kyoto-dep-csubj-pass.html) – [det](lzh_kyoto-dep-det.html) – [discourse](lzh_kyoto-dep-discourse.html) – [discourse:sp](lzh_kyoto-dep-discourse-sp.html) – [dislocated](lzh_kyoto-dep-dislocated.html) – [expl](lzh_kyoto-dep-expl.html) – [fixed](lzh_kyoto-dep-fixed.html) – [flat](lzh_kyoto-dep-flat.html) – [flat:vv](lzh_kyoto-dep-flat-vv.html) – [iobj](lzh_kyoto-dep-iobj.html) – [list](lzh_kyoto-dep-list.html) – [mark](lzh_kyoto-dep-mark.html) – [nmod](lzh_kyoto-dep-nmod.html) – [nsubj](lzh_kyoto-dep-nsubj.html) – [nsubj:pass](lzh_kyoto-dep-nsubj-pass.html) – [nummod](lzh_kyoto-dep-nummod.html) – [obj](lzh_kyoto-dep-obj.html) – [obl](lzh_kyoto-dep-obl.html) – [obl:lmod](lzh_kyoto-dep-obl-lmod.html) – [obl:tmod](lzh_kyoto-dep-obl-tmod.html) – [orphan](lzh_kyoto-dep-orphan.html) – [parataxis](lzh_kyoto-dep-parataxis.html) – [root](lzh_kyoto-dep-root.html) – [vocative](lzh_kyoto-dep-vocative.html) – [xcomp](lzh_kyoto-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 26631 sentences and 130714 tokens.</li>
</ul>

<ul>
<li>This corpus contains 128754 tokens (99%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus does not contain words that contain both letters and punctuation.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 13 UPOS tags out of 17 possible: <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: ADJ, DET, PUNCT, X</li>
</ul>

<ul>
<li>This corpus contains 35 word types tagged as particles (PART): 乎, 也, 于, 侯, 兮, 其, 只, 哉, 夫, 如, 居, 已, 思, 所, 攸, 斯, 歟, 止, 焉, 然, 爾, 甫, 疇, 矣, 者, 而, 耳, 聿, 與, 若, 蓋, 記, 諸, 載, 逝</li>
</ul>

<ul>
<li>This corpus contains 40 lemmas tagged as pronouns (PRON): 乃, 之, 予, 他, 伊, 何, 余, 其, 厥, 吾, 夫, 奚, 女, 子, 孰, 它, 害, 己, 彼, 惟, 我, 或, 斯, 是, 時, 朕, 某, 此, 汝, 焉, 爰, 爾, 瑕, 維, 而, 自, 茲, 言, 誰, 諸</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): 儀, 可, 宜, 得, 敢, 欲, 爲, 能, 見, 足</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: 可, 宜, 得, 敢, 欲, 爲, 見, 足</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>ADV: 以, 然, 無, 對, 始, 凡, 問, 親, 大, 與</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: 大, 主, 小, 有, 庶, 以, 長, 齊, 寡, 仁</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>





<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>NOUN: 天, 下, 上, 地, 先, 中, 門, 廟, 位, 外</li>
      <li>PROPN: 周, 齊, 殷, 魯, 夏, 衛, 楚, 滕, 宋, 燕</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tem
    <ul>
      <li>NOUN: 日, 後, 年, 今, 月, 時, 古, 后, 昔, 世</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADV: 滋, 質</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Equ
    <ul>
      <li>ADP: 如</li>
      <li>ADV-Conv: 如, 猶, 若</li>
      <li>VERB: 如, 若, 猶, 奈, 區</li>
      <li>VERB-Part: 若</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADV: 然, 凡, 大, 善, 小, 獨, 難, 易, 私, 誠</li>
      <li>ADV-Conv: 然, 凡, 大, 善, 小, 獨, 難, 易, 私, 誠</li>
      <li>NOUN: 高</li>
      <li>VERB: 大, 正, 同, 小, 明, 仁, 可, 貴, 然, 和</li>
      <li>VERB-Part: 大, 小, 庶, 寡, 仁, 賢, 明, 遠, 異, 善</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADV: 已, 特, 報, 寔, 實, 備</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: 不, 非, 未, 弗, 毋, 莫, 無, 勿, 匪, 微</li>
      <li>ADV-Conv: 無, 微, 末, 罔, 靡</li>
      <li>VERB: 無, 微, 末, 靡, 罔</li>
      <li>VERB-Part: 無, 微, 末, 靡</li>
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
      <li>ADV: 既, 已</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Des
    <ul>
      <li>AUX: 敢, 欲</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>AUX: 宜, 儀</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pot
    <ul>
      <li>AUX: 可, 能, 得, 足</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>ADV: 將, 且, 倡, 更, 鄉</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADV: 嘗, 曾, 曩, 鄉</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADV: 方</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX: 見</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: 是, 此, 斯, 彼, 某, 焉, 他, 夫, 惟, 茲</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: 何, 孰, 誰, 奚, 害, 瑕</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: 之, 其, 吾, 諸, 我, 或, 自, 子, 己, 予</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: 丁, 甲, 辛, 丙, 乙, 壬, 庚, 癸, 卯, 壬午</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: 自, 己</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>PRON: 吾, 我, 予, 朕, 余, 言</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: 子, 爾, 女, 汝, 而</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>PRON: 之, 其, 厥</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>AdvType</a>
    <ul>
      <li>Cau
        <ul>
          <li>ADV: 何, 奚, 寧, 盍, 胡, 曷</li>
        </ul>
      </li>
      <li>Deg
        <ul>
          <li>ADV: 已, 特, 粗, 報, 寔, 滋, 實, 備, 質</li>
        </ul>
      </li>
      <li>Tim
        <ul>
          <li>ADV: 則, 乃, 將, 既, 斯, 遂, 已, 嘗, 常, 曾</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NameType</a>
    <ul>
      <li>Geo
        <ul>
          <li>PROPN: 鄒, 泰山, 顓臾, 亳, 岐, 平陸, 晝, 有庳, 漢, 豐</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>PROPN: 舜, 子貢, 子路, 堯, 子夏, 子游, 湯, 禹, 子張, 子思</li>
        </ul>
      </li>
      <li>Nat
        <ul>
          <li>PROPN: 周, 齊, 殷, 魯, 夏, 衛, 楚, 滕, 宋, 燕</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: 孔子, 孟子, 曾子, 文, 武, 文子, 哀, 伯夷, 桓, 宣</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>PROPN: 季, 顏, 管, 萬, 孟, 陳, 公孫, 伊, 虞, 冉</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NounType</a>
    <ul>
      <li>Class
        <ul>
          <li>NOUN: 里, 方, 尺, 寸, 畝, 升, 步, 个, 尋, 扶</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>VerbType</a>
    <ul>
      <li>Cop
        <ul>
          <li>AUX: 為</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: 爲.</li>
</ul>

<ul>
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: 可、 能、 敢、 欲、 得、 足、 宜、 見、 儀.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (7498)</li>
      <li>VERB--NOUN-ADP(之) (607)</li>
      <li>VERB--NOUN-ADP(也) (13)</li>
      <li>VERB--NOUN-ADP(於) (1)</li>
      <li>VERB--NOUN-ADP(爲) (3)</li>
      <li>VERB--NOUN-ADP(由) (3)</li>
      <li>VERB--NOUN-ADP(者) (1)</li>
      <li>VERB--NOUN-ADP(與) (3)</li>
      <li>VERB--NOUN-Loc (652)</li>
      <li>VERB--NOUN-Loc-ADP(之) (71)</li>
      <li>VERB--NOUN-Loc-ADP(也) (2)</li>
      <li>VERB--NOUN-Tem (155)</li>
      <li>VERB--NOUN-Tem-ADP(之) (15)</li>
      <li>VERB--PRON (1610)</li>
      <li>VERB--PRON-ADP(之) (18)</li>
      <li>VERB--PRON-ADP(也) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (9659)</li>
      <li>VERB--NOUN-ADP(之) (1)</li>
      <li>VERB--NOUN-ADP(乎) (1)</li>
      <li>VERB--NOUN-ADP(于) (1)</li>
      <li>VERB--NOUN-ADP(於) (11)</li>
      <li>VERB--NOUN-ADP(與) (1)</li>
      <li>VERB--NOUN-Loc (1641)</li>
      <li>VERB--NOUN-Loc-ADP(于) (1)</li>
      <li>VERB--NOUN-Loc-ADP(於) (2)</li>
      <li>VERB--NOUN-Tem (253)</li>
      <li>VERB--PRON (2721)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (51)</li>
      <li>VERB--NOUN-ADP(之) (1)</li>
      <li>VERB--NOUN-Loc (1)</li>
      <li>VERB--NOUN-Tem (1)</li>
      <li>VERB--PRON (329)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 63 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: 稱 自、 以 自、 曰 自、 求 己、 稱 己、 正 己、 脩 己、 知 己、 行 己、 使 己、 使 自、 克 己、 勝 己、 如 己、 成 己、 暴 自、 枉 己、 棄 自、 歸 己、 答 己、 以 己、 伐 自、 侮 自、 入 自、 別 自、 動 己、 卑 己、 卑 自、 厲 己、 受 自、 名 自、 執 自、 好 自、 害 己、 後 己、 得 己、 從 自、 御 自、 徹 自、 怨 自、 恭 己、 愈 己、 拯 己、 施 己、 有 己、 殺 己、 毀 自、 無 己、 由 己、 盡 自</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>compound:redup</a>, <a>csubj:pass</a>, <a>discourse:sp</a>, <a>flat:vv</a>, <a>nsubj:pass</a>, <a>obl:lmod</a>, <a>obl:tmod</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>appos</a>, <a>goeswith</a>, <a>reparandum</a>, <a>punct</a>, <a>dep</a></li>
</ul>
