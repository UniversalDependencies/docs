---
layout: base
title:  'Morphology'
permalink: ja/overview/morphology.html
---

# Morphology

As described in Introduction, the parts-of-speech of Japanese are defined as a
mapping from UniDic POS tags, because the UniDic guideline is fully
established and widely used in Japanese NLP.

The following table defines a mapping from UniDic SUW POS tags into
Universal Dependencies POS tags (this table is not finalized yet; any
suggestions are welcome).

<table>
  <tr><th>UD POS<th>UniDic SUW POS</tr>
  <tr><td>ADJ<td>形容詞(adjective), 連体詞(adnomial), 形状詞(adjectival noun)</tr>
  <tr><td>ADV<td>副詞(adverb)</tr>
  <tr><td>INTJ<td>感動詞(interjection)</tr>
  <tr><td>NOUN<td>名詞-普通名詞(common noun), 接頭辞(prefix), 接尾辞(suffix)</tr>
  <tr><td>PROPN<td>名詞-固有名詞(proper noun)</tr>
  <tr><td>VERB<td>動詞(verb)</tr>
  <tr><td>ADP<td>助詞-格助詞(case particle), 助詞-係助詞(binding particle)</tr>
  <tr><td>AUX<td>助動詞(auxiliary verb)</tr>
  <tr><td>CONJ<td>接続詞(conjunction), 助詞-格助詞(case particle)</tr>
  <tr><td>DET<td>連体詞(adnomial)</tr>
  <tr><td>NUM<td>名詞-数詞(numeral noun)</tr>
  <tr><td>PART<td>助詞-副助詞(adverbial particle), 助詞-終助詞(phrase final particle)</tr>
  <tr><td>PRON<td>代名詞(pronoun)</tr>
  <tr><td>SCONJ<td>助詞-接続助詞(conjunctive particle), 助詞-準体助詞(nominal particle)</tr>
  <tr><td>PUNCT<td>補助記号(supplementary symbol)</tr>
  <tr><td>SYM<td>記号(symbol), 補助記号(supplementary symbol)</tr>
  <tr><td>X<td>空白(white space)</tr>
</table>


Several UniDic POS tags are mapped into different UD POS tags
depending on additional information like lemmas, and/or syntactic
context.

* 連体詞(adnomial): demonstrative determiners (e.g. この/this) are
  DET, while other adnomials are ADJ
* 名詞-普通名詞(common noun)
  * 名詞-普通名詞-サ変可能(can be "suru" verbal): tagged as VERB if it is
    used as a verb (typically accompanied with する/suru); tagged as
    NOUN otherwise.
  * 名詞-普通名詞-形状詞可能(can be adjectival): tagged as ADJ if it
    is used as an adjective; tagged as NOUN otherwise.
* 動詞-非自立可能(verb - can be functional), 形容詞-非自立可能
  (adjective - can be functional): tagged as AUX if used as a
  functional word (typically preceded by another verb/adjective);
  tagged as VERB/ADJ otherwise.
* 助詞-格助詞(case particle): noun conjunctions (と/to, か/ka) are
  CONJ, while others are ADP.
* 補助記号(supplementary symbol): period, comma, open/close bracket
  are tagged PUNCT, while others are SYM.

Currently, we do not use features in Japanese.

