---
layout: base
title:  'UD_Chinese-CFL'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Chinese CFL

Language: [Chinese](/zh/index.html) (code: `zh`)<br/>
Family: Sino-Tibetan

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: John Lee, Herman Leung, Keying Li.

Repository: [UD_Chinese-CFL](https://github.com/UniversalDependencies/UD_Chinese-CFL)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udzh_cfl25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-SA 4.0

Genre: learner-essays

Questions, comments?
General annotation questions (either Chinese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Chinese-CFL/issues).
If you want to collaborate, please contact [keyingli3-c&nbsp;(æt)&nbsp;my&nbsp;•&nbsp;cityu&nbsp;•&nbsp;edu&nbsp;•&nbsp;hk, tswong-c&nbsp;(æt)&nbsp;my&nbsp;•&nbsp;cityu&nbsp;•&nbsp;edu&nbsp;•&nbsp;hk, jsylee&nbsp;(æt)&nbsp;cityu&nbsp;•&nbsp;edu&nbsp;•&nbsp;hk].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | not available |
| Relations | annotated manually, natively in UD style |

## Description

The Chinese-CFL UD treebank is manually annotated by Keying Li with minor manual revisions by Herman Leung and John Lee at City University of Hong Kong, based on essays written by learners of Mandarin Chinese as a foreign language. The data is in Simplified Chinese.



.CONLLUX (extension files)

[NOTE: This is a temporary measure for procedures whose descriptions are not yet available in the UD guidelines.]

Included is an additional `.conllux` file for the `.conllu` file of the same name. The `.conllux` counterpart file contains extra information not ordinarily stored in any of the 10 columns in the CONLL-U format. The non-duplicate columns in `.conllux` for this treebank are columns 3 (distributional tag), 6 (distributional head), 7 (distributional relation), and 10 (alignment). [If data in columns 3, 6, and 7 in the `.conllux` file are the same as their counterparts in `.conllu`, that means the distributional annotation is the same as the morphological annotation. For more information on "distributional" vs. "morphological" annotation, see descriptions further below.]

ALIGNMENTS

Alignments are linked to native-Chinese-speaker corrections (by Keying Li) of the learner sentences; storage of the corrected sentences are to be determined. All sentences pertaining to the learner corpus have a sent_id beginning with `CFL-`; original learner sentences have the parallel-treebank extension `/ori` in the sent_id, whereas the corrected sentences have the extension `/crr` in the sent_id. Each alignment includes the full sent_id followed by '#' and the index of the token aligned. Additional alignments in a one-to-many alignment is offset by commas (e.g. `CFL_A_1-5/crr#5,CFL_A_1-5/crr#6` means the token is aligned to tokens 5 and 6 of the corrected ('crr') sentence of 'CFL_A_1-5').

BASIC STATISTICS

Tree count: 451
Word count: 7256
Token count: 7256
Dep. relations: 45 of which 13 language specific
POS tags: 15
Category=value feature pairs: 0

GENERAL COMMENTS

A "literal annotation" is preferred, i.e., one should annotate "as if the sentence were as syntactically well-formed as it can be, possibly ignoring meaning" (Ragheb and Dickinson, 2014).

WORD SEGMENTATION

Non-words are allowed only when there are spelling errors resulting from orthographic or phonetic confusion. An orthographic confusion must involve characters with similar appearance, e.g., between 了 and 子 in *花花公了.

Phonetic confusion must involve characters with the same pronunciation but different tones, e.g., between 關 and 管 in the sentence *不關多貴我也買; or, characters with easily confusable pairs such as {j, zh} and {x, sh}.

In these cases, the lemma of the misspelt word is its corrected version. For example, the lemma of *花花公了 is 花花公子, and the lemma of 不關 is 不管.

LEMMA

The lemma is the same as the word, except when the word contains a spelling error.

POS TAGGING

POS tagging is performed on the basis of the lemma, rather than the word. Hence, in the sentence *不關多貴我也買, 不關 is not tagged as VERB but rather as SCONJ, on account of its lemma 不管.

When determining the POS, one usually considers both the "morphological evidence", i.e., the linguistic form of the word, as well as the "distributional evidence", i.e., its syntactic use in the sentence. In a well-formed sentence, these two kinds of evidence should agree; in learner text, however, they may conflict (Ragheb and Dickinson, 2014).

Consider the word 可怕 _kepa_ "scary" in the sentence *我可怕他 "*I scary him". Morphological evidence suggests the word 可怕 _kepa_ "scary" should be tagged as an adjective (ADJ), reflecting its normal usage. Distributional evidence suggests it should be tagged as a verb, since the trailing pronoun 他 _ta_ "him" implies its use as a verb with a direct object.

When these two kinds of evidence contradict one another, the morphological evidence prevails. The example sentence is thus tagged as:

我/PN 可怕/ADJ 他/PN

However, we also include the "distributional POS tag" in column 3 of the `.conllux` file.

DEPENDENCY RELATIONS

Missing words

When a word seems missing in the learner sentence, we annotate according to the UD guidelines on promotion by head elision. For example, in the sentence fragment 在中國最近幾年 _zai zhongguo zuijin ji nian_ "in China recent few years", we promote 年 _nian_ "year" to be the root. Although both 中國 _zhongguo_ "China" and 年 _nian_ "year" would be `obl` dependents if a verb was present, 年 _nian_ "year" is promoted because it is closer to the expected location of the verb.

Word-order errors

The annotation should assume no word order error. For example, in the sentence *我被了他打一頓. The aspect particle 了 _le_ usually modifies the verb that precedes it immediately, and is probably misplaced in this sentence. It is most likely intended to modify 打 _da_ "hit", and should immediately follow da rather than 被 _bei_, the passive marker.

To adhere to the principle of "literal annotation", rather than annotating le as the child of 打 _da_ "hit" with the `aux` relation, we annotate 了 _le_ as the child of 被 _bei_ with the `dep` relation.

`dep` (unspecified dependency)

When learner errors make it difficult to characterize the grammatical relation between a word and the rest of the sentence, we use the `dep` relation. Typically, when the POS tag differs from the distributional POS tag, the `dep` relation is needed.

Consider the sentence *我可怕他 "*I scary him". From the point of view of its POS tag, it is unclear how the word 可怕 _kepa_ "scary", as an adjective, relates to the pronoun. We thus consider kepa as the head of 他 _ta_ "him" with the `dep` relation.

When a word has a different distributional POS tag, we also include a "distributional" dependency relation on the basis of the word's distributional POS tag. This relation is stored in column 4 of the `.conllux` file. In the example sentence above, the word 可怕 _kepa_ "scary", as a verb, is the head of 他 _ta_ "him" with the `obj` relation.

REFERENCES
Marwa Ragheb and Markus Dickinson. 2014. Developing a Corpus of Syntactically-annotated Learner Language for English. Proceedings of the 13th International Workshop on Treebanks and Linguistic Theories (TLT).

## Acknowledgments
This work is partially supported by a Strategic Research Grant (Project no. 7004494) from City University of Hong Kong.


# Statistics of UD Chinese CFL

## POS Tags

[ADJ](zh_cfl-pos-ADJ.html) – [ADP](zh_cfl-pos-ADP.html) – [ADV](zh_cfl-pos-ADV.html) – [AUX](zh_cfl-pos-AUX.html) – [CCONJ](zh_cfl-pos-CCONJ.html) – [DET](zh_cfl-pos-DET.html) – [INTJ](zh_cfl-pos-INTJ.html) – [NOUN](zh_cfl-pos-NOUN.html) – [NUM](zh_cfl-pos-NUM.html) – [PART](zh_cfl-pos-PART.html) – [PRON](zh_cfl-pos-PRON.html) – [PROPN](zh_cfl-pos-PROPN.html) – [PUNCT](zh_cfl-pos-PUNCT.html) – [SCONJ](zh_cfl-pos-SCONJ.html) – [VERB](zh_cfl-pos-VERB.html)

## Features



## Relations

[acl](zh_cfl-dep-acl.html) – [advcl](zh_cfl-dep-advcl.html) – [advmod](zh_cfl-dep-advmod.html) – [advmod:df](zh_cfl-dep-advmod-df.html) – [amod](zh_cfl-dep-amod.html) – [appos](zh_cfl-dep-appos.html) – [aux](zh_cfl-dep-aux.html) – [case](zh_cfl-dep-case.html) – [case:loc](zh_cfl-dep-case-loc.html) – [cc](zh_cfl-dep-cc.html) – [ccomp](zh_cfl-dep-ccomp.html) – [clf](zh_cfl-dep-clf.html) – [compound](zh_cfl-dep-compound.html) – [compound:dir](zh_cfl-dep-compound-dir.html) – [compound:ext](zh_cfl-dep-compound-ext.html) – [compound:vo](zh_cfl-dep-compound-vo.html) – [compound:vv](zh_cfl-dep-compound-vv.html) – [conj](zh_cfl-dep-conj.html) – [cop](zh_cfl-dep-cop.html) – [csubj](zh_cfl-dep-csubj.html) – [dep](zh_cfl-dep-dep.html) – [det](zh_cfl-dep-det.html) – [discourse](zh_cfl-dep-discourse.html) – [discourse:sp](zh_cfl-dep-discourse-sp.html) – [dislocated](zh_cfl-dep-dislocated.html) – [flat](zh_cfl-dep-flat.html) – [iobj](zh_cfl-dep-iobj.html) – [mark](zh_cfl-dep-mark.html) – [mark:adv](zh_cfl-dep-mark-adv.html) – [mark:rel](zh_cfl-dep-mark-rel.html) – [nmod](zh_cfl-dep-nmod.html) – [nsubj](zh_cfl-dep-nsubj.html) – [nsubj:pass](zh_cfl-dep-nsubj-pass.html) – [nummod](zh_cfl-dep-nummod.html) – [obj](zh_cfl-dep-obj.html) – [obl](zh_cfl-dep-obl.html) – [obl:agent](zh_cfl-dep-obl-agent.html) – [obl:patient](zh_cfl-dep-obl-patient.html) – [obl:tmod](zh_cfl-dep-obl-tmod.html) – [parataxis](zh_cfl-dep-parataxis.html) – [punct](zh_cfl-dep-punct.html) – [reparandum](zh_cfl-dep-reparandum.html) – [root](zh_cfl-dep-root.html) – [vocative](zh_cfl-dep-vocative.html) – [xcomp](zh_cfl-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 451 sentences and 7256 tokens.</li>
</ul>

<ul>
<li>This corpus contains 7256 tokens (100%) that are not followed by a space.</li>
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
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 11 word types tagged as particles (PART): 。, 了, 吗, 吧, 呢, 和, 啊, 嗬, 地, 得, 的</li>
</ul>

<ul>
<li>This corpus contains 44 lemmas tagged as pronouns (PRON): 一切, 为什么, 人, 人家, 什么, 他, 他们, 你, 你们, 其, 其中, 其他, 别, 别人, 到处, 另外, 各, 咱们, 哪个, 哪儿, 哪里, 大家, 女士们, 她, 她们, 它, 怎么样, 我, 我们, 我门, 所有, 有的, 每, 自己, 谁, 这, 这儿, 这样, 这里, 那, 那儿, 那样, 那里, 首先</li>
</ul>

<ul>
<li>This corpus contains 30 lemmas tagged as determiners (DET): 一些, 一点, 个, 什么, 以上, 几, 别的, 前, 另, 各, 哪, 哪个, 很多, 所有, 整, 有些, 有的, 本, 每, 许多, 许许多多, 这, 这些, 这样, 这里, 那, 那个, 那些, 那样, 那里</li>
</ul>

<ul>
<li>Out of the above, 12 lemmas occurred sometimes as PRON and sometimes as DET: 什么, 各, 哪个, 所有, 有的, 每, 这, 这样, 这里, 那, 那样, 那里</li>
</ul>

<ul>
<li>This corpus contains 30 lemmas tagged as auxiliaries (AUX): 不得, 了, 会, 似乎, 似的, 可以, 可能, 喜欢, 回, 好像, 宁愿, 希望, 应该, 得, 必须, 想, 愿意, 懒得, 敢, 是, 没, 没有, 爱, 着, 能, 要, 起来, 过, 这, 需要</li>
</ul>

<ul>
<li>Out of the above, 15 lemmas occurred sometimes as AUX and sometimes as VERB: 了, 会, 喜欢, 回, 好像, 希望, 得, 想, 是, 没有, 爱, 要, 起来, 过, 需要</li>
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
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: 是、 就是.</li>
</ul>

<ul>
<li>This corpus uses 30 lemmas as auxiliaries (<a>aux</a>). Examples: 了、 着、 要、 会、 能、 想、 过、 可以、 没、 应该、 爱、 得、 敢、 需要、 可能、 没有、 不得、 似乎、 似的、 喜欢、 回、 好像、 宁愿、 就、 希望、 必须、 愿意、 懒得、 起来、 这.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (126)</li>
      <li>VERB--NOUN-ADP(在) (1)</li>
      <li>VERB--PRON (393)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (394)</li>
      <li>VERB--PRON (90)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--PRON (5)</li>
      <li>VERB--PRON-ADP(给) (1)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 13 relation subtypes: <a>advmod:df</a>, <a>case:loc</a>, <a>compound:dir</a>, <a>compound:ext</a>, <a>compound:vo</a>, <a>compound:vv</a>, <a>discourse:sp</a>, <a>mark:adv</a>, <a>mark:rel</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:patient</a>, <a>obl:tmod</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>expl</a>, <a>fixed</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a></li>
</ul>
