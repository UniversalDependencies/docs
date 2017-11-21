---
layout: base
title:  'Tokenization'
---

# Tokenization

In Japanese there is no obvious word boundary. So we need a definition of words.
As the word definition for universal dependency (UD), we adopt short-unit word
(SUW) [1]. SUW is also adopted to tokenize sentences in Balanced corpus of
contemporary written Japanese (BCCWJ) [2] containing more than 60,000 sentences
in various domains and it has been shown that the SUW definition covers various
language phenomena in real texts.

Many SUWs correspond to a single English word but they tend to be shorter than
English counterparts. An example is "フランス 語" (French; French language).
For detailed definition please refer to [3] written in Japanese.

The automatic tokenization accuracy is more than 98% on in-domain data (BCCWJ)
[4].


[1] A Proper Approach to Japanese Morphological Analysis: Dictionary, Model, and Evaluation,
Yasuharu Den, Junpei Nakamura, Toshinobu Ogiso, and Hideki Ogura,
In Proceedings of the Sixth International Conference on Language Resources and Evaluation, pp. 1019-1024, 2008.

[2] Balanced corpus of contemporary written Japanese,
Kikuo Maekawa, Makoto Yamazaki, Toshinobu Ogiso, Takehiko Maruyama, Hideki Ogura, Wakako Kashino, Hanae Koiso, Masaya Yamaguchi, Makiro Tanaka, and Yasuharu Den
Language Resources and Evaluation Vol. 48 345-371, May 2014.

[3] 『現代日本語書き言葉均衡コーパス』形態論情報規程集(上)(下)
小椋 秀樹, 小磯 花絵, 冨士池 優美, 宮内 佐夜香, 小西 光, and 原 裕,
独立行政法人国立国語研究所, 2011.

[4] Language Resource Addition: Dictionary or Corpus?,
Shinsuke Mori and Graham Neubig,
In Proceedings of the Nineth International Conference on Language Resources and Evaluation, pp. 1631-1636, 2014.


