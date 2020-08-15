---
layout: base
title:  'Morphology'
udver: '2'
---

# Morphology

As described in Introduction, the parts-of-speech of Japanese are defined as a
mapping from UniDic POS tags of SUW (short unit word), LUW (long unit word) and their syntactic positions, because the UniDic guideline is fully established and widely used in Japanese NLP.
The rule is defined cabocha2ud/conf/bccwj_pos_suw_rule.json

The following table defines a mapping from UniDic SUW POS tags into
Universal Dependencies POS tags (this table is not finalized yet; any
suggestions are welcome).

<table border="1">
  <tr><th>UD POS</th><th>UniDic SUW POS</th></tr>
  <tr><td>ADJ</td><td>形容詞(adjective), 連体詞(adnomial), 形状詞(adjectival noun), 名詞-普通名詞-形状詞可能, 名詞-普通名詞-サ変形状詞可能</td></tr>
  <tr><td>ADV</td><td>副詞(adverb), 名詞-普通名詞-副詞可能</td></tr>
  <tr><td>INTJ</td><td>感動詞(interjection)</td></tr>
  <tr><td>NOUN</td><td>名詞-普通名詞(common noun), 接頭辞(prefix), 接尾辞(suffix), 名詞-普通名詞-サ変形状詞可能, 名詞-普通名詞-副詞可能, 名詞-普通名詞-助数詞可能, 形状詞-助動詞語幹, 記号, 外国語, 接尾辞</td></tr>
  <tr><td>PROPN</td><td>名詞-固有名詞(proper noun), 外国語</td></tr>
  <tr><td>VERB</td><td>動詞(verb), 名詞-普通名詞-サ変可能, 名詞-普通名詞-サ変形状詞可能</td></tr>
  <tr><td>ADP</td><td>助詞-格助詞(case particle), 助詞-係助詞(binding particle), 助詞-副助詞</td></tr>
  <tr><td>AUX</td><td>助動詞(auxiliary verb), 形容詞-非自立可能, 接尾辞-形容詞的, 動詞-非自立可能, 助詞-副助詞</td></tr>
  <tr><td>CCONJ</td><td>接続詞(conjunction), 助詞-格助詞(case particle)</td></tr>
  <tr><td>DET</td><td>連体詞(adnomial)</td></tr>
  <tr><td>NUM</td><td>名詞-数詞(numeral noun), 名詞-普通名詞-助数詞可能</td></tr>
  <tr><td>PART</td><td>助詞-副助詞(adverbial particle), 助詞-終助詞(phrase final particle), 助動詞, 接尾辞-形容詞的, 接尾辞-名詞的, 接尾辞-動詞的</td></tr>
  <tr><td>PRON</td><td>代名詞(pronoun)</td></tr>
  <tr><td>SCONJ</td><td>助詞-接続助詞(conjunctive particle), 助詞-準体助詞(nominal particle)</td></tr>
  <tr><td>PUNCT</td><td>補助記号(supplementary symbol)</td></tr>
  <tr><td>SYM</td><td>記号(symbol), 補助記号(supplementary symbol)</td></tr>
  <tr><td>X</td><td>空白(white space)</td></tr>
</table>

Several UniDic POS tags of SUW are mapped into different UD POS tags
depending on additional information like lemmas, LUW POS tags and/or syntactic
context (HEAD or not).



