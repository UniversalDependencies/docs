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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udlzh_kyoto29)<br />
Download all treebanks: [UD 2.9](/#download)

License: PD

Genre: nonfiction, poetry

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



This Treebank is taken under the full text of 論語 (Lunyu, [20 volumes](https://corpus.kanji.zinbun.kyoto-u.ac.jp/gitlab/Kanbun/ud-kanbun/-/tree/master/kanripo/kR1h0004)), 孟子 (Mencius, [14 volumes](https://corpus.kanji.zinbun.kyoto-u.ac.jp/gitlab/Kanbun/ud-kanbun/-/tree/master/kanripo/kR1h0001)), 禮記 (Liji, [50 volumes](https://corpus.kanji.zinbun.kyoto-u.ac.jp/gitlab/Kanbun/ud-kanbun/-/tree/master/kanripo/kR1d0052)), 十八史略 (18shi-lue, [19 eras](https://corpus.kanji.zinbun.kyoto-u.ac.jp/gitlab/Kanbun/ud-kanbun/-/tree/master/18shilue)), and 楚辭 (Chuci, [9 poetries](https://corpus.kanji.zinbun.kyoto-u.ac.jp/gitlab/Kanbun/ud-kanbun/-/tree/master/kanripo/kR4a0001)). In Classical Chinese we had no spaces or punctuations between words or sentences, so we did not include any spaces or punctuations in Treebank files:

* lzh_kyoto-ud-test.conllu
- 學而篇第一 為政篇第二 and 八佾篇第三 from 論語
- 梁惠王上 and 梁惠王下 from 孟子
- 中庸 from 禮記
- 春秋戰國 from 十八史略
- 離騷 from 楚辭

* lzh_kyoto-ud-dev.conllu
- 顏淵篇第十二 子路篇第十三 and 憲問篇第十四 from 論語
- 告子上 and 告子下 from 孟子
- 大學 from 禮記
- 唐 from 十八史略
- 遠遊 from 楚辭

* lzh_kyoto-ud-train.conllu
- 論語 (except for 學而篇第一 為政篇第二 八佾篇第三 顏淵篇第十二 子路篇第十三 憲問篇第十四)
- 孟子 (except for 梁惠王上 梁惠王下 告子上 告子下)
- 禮記 (except for 中庸 大學)
- 十八史略 (except for 春秋戰國 唐)
- 九歌 天問 九章 卜居 漁父 九辯 and 招魂 from 楚辭

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
<li>This corpus contains 58301 sentences and 283166 tokens.</li>
</ul>

<ul>
<li>This corpus contains 280328 tokens (99%) that are not followed by a space.</li>
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
<li>This corpus contains 43 word types tagged as particles (PART): 乎, 也, 于, 云, 些, 來, 侯, 兮, 其, 只, 哉, 夫, 如, 子, 寧, 居, 已, 思, 所, 攸, 斯, 歟, 止, 焉, 然, 爾, 甫, 疇, 矣, 者, 而, 耳, 耶, 聿, 與, 若, 蓋, 記, 諸, 載, 逝, 邪, 馨</li>
</ul>

<ul>
<li>This corpus contains 49 lemmas tagged as pronouns (PRON): 乃, 之, 予, 云, 他, 伊, 何, 佗, 余, 僕, 公, 其, 厥, 吾, 夫, 奚, 女, 子, 孤, 孰, 它, 害, 己, 彼, 惟, 我, 或, 斯, 是, 時, 朕, 某, 此, 汝, 焉, 爰, 爾, 瑕, 甚, 維, 而, 自, 若, 茲, 言, 許, 誰, 諸, 輩</li>
</ul>

<ul>
<li>This corpus contains 0 lemmas tagged as determiners (DET): </li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as auxiliaries (AUX): 儀, 可, 宜, 得, 應, 敢, 欲, 爲, 肯, 能, 被, 見, 足, 須</li>
</ul>

<ul>
<li>Out of the above, 12 lemmas occurred sometimes as AUX and sometimes as VERB: 可, 宜, 得, 應, 敢, 欲, 爲, 肯, 被, 見, 足, 須</li>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>ADV: 以, 大, 始, 然, 無, 親, 凡, 對, 當, 反</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: 大, 太, 皇, 主, 小, 有, 以, 長, 庶, 孝</li>
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
      <li>NOUN: 天, 上, 下, 中, 位, 州, 地, 先, 門, 東</li>
      <li>PROPN: 周, 秦, 齊, 漢, 晉, 魏, 楚, 夏, 宋, 燕</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tem
    <ul>
      <li>NOUN: 年, 後, 日, 時, 今, 月, 初, 古, 世, 歲</li>
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
      <li>ADV: 滋, 良, 愈, 益, 差, 浸, 質</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Equ
    <ul>
      <li>ADP: 如</li>
      <li>ADV-Conv: 如, 若, 猶, 奈, 區, 恰</li>
      <li>VERB: 如, 若, 猶, 奈, 區, 亞, 柰</li>
      <li>VERB-Part: 若, 亞, 區, 如, 猶</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADV: 大, 然, 凡, 獨, 善, 多, 甚, 難, 毎, 小</li>
      <li>ADV-Conv: 大, 然, 凡, 獨, 善, 多, 甚, 難, 毎, 小</li>
      <li>VERB: 大, 太, 同, 明, 正, 皇, 平, 重, 可, 多</li>
      <li>VERB-Part: 大, 太, 皇, 小, 庶, 寡, 明, 賢, 仁, 長</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADV: 實, 頗, 最, 愼, 已, 酷, 報, 寔, 特, 細</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: 不, 未, 非, 弗, 莫, 毋, 無, 勿, 匪, 微</li>
      <li>ADV-Conv: 無, 微, 罔, 末, 靡</li>
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
      <li>ADV: 既, 已, 旣</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Des
    <ul>
      <li>AUX: 欲, 敢, 肯</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nec
    <ul>
      <li>AUX: 宜, 須, 儀, 應</li>
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
      <li>ADV: 將, 且, 預, 倡, 更, 鄉</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADV: 嘗, 曾, 向, 曩, 鄉</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADV: 方, 甫, 屬</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX: 被, 見</li>
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
      <li>PRON: 是, 此, 斯, 某, 彼, 他, 焉, 夫, 惟, 茲</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PRON: 何, 孰, 誰, 奚, 害, 瑕, 甚</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: 之, 其, 吾, 自, 我, 諸, 或, 子, 己, 予</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: 丁, 己, 庚申, 戊, 甲, 己卯, 戊寅, 甲子, 辛, 丁丑</li>
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
      <li>PRON: 吾, 我, 予, 余, 朕, 言</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: 子, 爾, 汝, 女, 若, 而</li>
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
          <li>ADV: 何, 寧, 奚, 盍, 胡, 曷, 聊</li>
        </ul>
      </li>
      <li>Deg
        <ul>
          <li>ADV: 實, 聊, 頗, 最, 滋, 粗, 良, 愼, 已, 酷</li>
        </ul>
      </li>
      <li>Tim
        <ul>
          <li>ADV: 則, 乃, 遂, 將, 嘗, 既, 已, 常, 尋, 旣</li>
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
          <li>PROPN: 長安, 洛陽, 江, 沛, 京師, 汴, 漢, 荊, 建康, 關中</li>
        </ul>
      </li>
      <li>Giv
        <ul>
          <li>PROPN: 舜, 堯, 禹, 光, 湯, 子貢, 子路, 亮, 羽, 信</li>
        </ul>
      </li>
      <li>Nat
        <ul>
          <li>PROPN: 周, 秦, 齊, 晉, 漢, 魏, 楚, 夏, 宋, 燕</li>
        </ul>
      </li>
      <li>Prs
        <ul>
          <li>PROPN: 孔子, 孟子, 文, 曾子, 武, 太, 高, 宣, 桓, 哀</li>
        </ul>
      </li>
      <li>Sur
        <ul>
          <li>PROPN: 王, 李, 劉, 張, 陳, 趙, 呂, 名, 楊, 韓</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NounType</a>
    <ul>
      <li>Clf
        <ul>
          <li>NOUN: 里, 尺, 寸, 方, 畝, 升, 步, 兩, 丈, 斗</li>
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
          <li>AUX: 爲, 為</li>
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
<li>This corpus uses 13 lemmas as auxiliaries (<a>aux</a>). Examples: 可、 能、 欲、 敢、 得、 足、 宜、 被、 見、 肯、 須、 儀、 應.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (14253)</li>
      <li>VERB--NOUN-ADP(之) (842)</li>
      <li>VERB--NOUN-ADP(也) (14)</li>
      <li>VERB--NOUN-ADP(于)-ADP(之) (1)</li>
      <li>VERB--NOUN-ADP(兮) (9)</li>
      <li>VERB--NOUN-ADP(於) (1)</li>
      <li>VERB--NOUN-ADP(爲) (4)</li>
      <li>VERB--NOUN-ADP(由) (4)</li>
      <li>VERB--NOUN-ADP(者) (1)</li>
      <li>VERB--NOUN-ADP(與) (10)</li>
      <li>VERB--NOUN-Loc (2062)</li>
      <li>VERB--NOUN-Loc-ADP(之) (112)</li>
      <li>VERB--NOUN-Loc-ADP(也) (2)</li>
      <li>VERB--NOUN-Loc-ADP(由) (1)</li>
      <li>VERB--NOUN-Loc-ADP(自) (1)</li>
      <li>VERB--NOUN-Tem (250)</li>
      <li>VERB--NOUN-Tem-ADP(之) (28)</li>
      <li>VERB--PRON (2688)</li>
      <li>VERB--PRON-ADP(之) (26)</li>
      <li>VERB--PRON-ADP(乎) (1)</li>
      <li>VERB--PRON-ADP(也) (1)</li>
      <li>VERB--PRON-ADP(爲) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (19800)</li>
      <li>VERB--NOUN-ADP(之) (1)</li>
      <li>VERB--NOUN-ADP(乎) (2)</li>
      <li>VERB--NOUN-ADP(于) (1)</li>
      <li>VERB--NOUN-ADP(所) (3)</li>
      <li>VERB--NOUN-ADP(於) (13)</li>
      <li>VERB--NOUN-ADP(與) (3)</li>
      <li>VERB--NOUN-Loc (4653)</li>
      <li>VERB--NOUN-Loc-ADP(于) (2)</li>
      <li>VERB--NOUN-Loc-ADP(於) (3)</li>
      <li>VERB--NOUN-Tem (695)</li>
      <li>VERB--PRON (5218)</li>
      <li>VERB--PRON-ADP(與) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (288)</li>
      <li>VERB--NOUN-ADP(之) (6)</li>
      <li>VERB--NOUN-Loc (22)</li>
      <li>VERB--NOUN-Loc-ADP(於) (1)</li>
      <li>VERB--NOUN-Tem (2)</li>
      <li>VERB--PRON (483)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 141 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: 殺 自、 以 自、 稱 自、 剄 自、 曰 自、 稱 己、 求 己、 安 自、 正 己、 脩 己、 行 己、 謂 自、 以 己、 使 自、 娛 自、 歸 己、 焚 自、 知 己、 議 己、 責 自、 使 己、 克 己、 勝 己、 反 己、 如 己、 怨 自、 恣 自、 成 己、 戴 己、 投 自、 暴 自、 有 自、 枉 己、 棄 自、 樂 自、 殺 己、 由 己、 答 己、 終 自、 經 自、 總 己、 若 自、 苦 自、 下 自、 仍 自、 代 己、 令 自、 伐 自、 佞 己、 侮 自</li>
    <ul>
      <li>Out of those, 1 lemmas occurred more than once, but never without a reflexive dependent. Examples: 剄</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>compound:redup</a>, <a>csubj:pass</a>, <a>discourse:sp</a>, <a>flat:vv</a>, <a>nsubj:pass</a>, <a>obl:lmod</a>, <a>obl:tmod</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>appos</a>, <a>goeswith</a>, <a>reparandum</a>, <a>punct</a>, <a>dep</a></li>
</ul>
