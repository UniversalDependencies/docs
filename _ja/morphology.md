---
layout: base
title:  'Morphology'
---

# Morphology

As described in Introduction, the parts-of-speech of Japanese are defined as a
mapping from UniDic POS tags, because the UniDic guideline is fully
established and widely used in Japanese NLP.

The following table defines a mapping from UniDic SUW POS tags into
Universal Dependencies POS tags (this table is not finalized yet; any
suggestions are welcome).

<table border="1">
  <tr><th>UD POS</th><th>UniDic SUW POS</th></tr>
  <tr><td>ADJ</td><td>形容詞(adjective), 連体詞(adnomial), 形状詞(adjectival noun)</td></tr>
  <tr><td>ADV</td><td>副詞(adverb)</td></tr>
  <tr><td>INTJ</td><td>感動詞(interjection)</td></tr>
  <tr><td>NOUN</td><td>名詞-普通名詞(common noun), 接頭辞(prefix), 接尾辞(suffix)</td></tr>
  <tr><td>PROPN</td><td>名詞-固有名詞(proper noun)</td></tr>
  <tr><td>VERB</td><td>動詞(verb)</td></tr>
  <tr><td>ADP</td><td>助詞-格助詞(case particle), 助詞-係助詞(binding particle)</td></tr>
  <tr><td>AUX</td><td>助動詞(auxiliary verb)</td></tr>
  <tr><td>CONJ</td><td>接続詞(conjunction), 助詞-格助詞(case particle)</td></tr>
  <tr><td>DET</td><td>連体詞(adnomial)</td></tr>
  <tr><td>NUM</td><td>名詞-数詞(numeral noun)</td></tr>
  <tr><td>PART</td><td>助詞-副助詞(adverbial particle), 助詞-終助詞(phrase final particle)</td></tr>
  <tr><td>PRON</td><td>代名詞(pronoun)</td></tr>
  <tr><td>SCONJ</td><td>助詞-接続助詞(conjunctive particle), 助詞-準体助詞(nominal particle)</td></tr>
  <tr><td>PUNCT</td><td>補助記号(supplementary symbol)</td></tr>
  <tr><td>SYM</td><td>記号(symbol), 補助記号(supplementary symbol)</td></tr>
  <tr><td>X</td><td>空白(white space)</td></tr>
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

