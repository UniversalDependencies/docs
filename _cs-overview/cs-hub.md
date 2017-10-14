---
layout: base
title:  'Introduction'
permalink: cs/overview/cs-hub.html
udver: '2'
---

# UD for Czech <span class="flagspan"><img class="flag" src="flags/svg/CZ.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words);
  that holds even for hyphenated compounds such as _česko-slovenský_ “Czech-Slovak” (three tokens) and for abbreviations such as _atd._ “etc.”
  (two tokens).
* A whitespace separating digits in a large number is not treated as a word separator. For example, _1&nbsp;000&nbsp;000_ (“1,000,000” by English
  rules) is one token.
* There are several closed classes of contractions that are treated as multi-word tokens and segmented to individual syntactic words.
  The most prominent type is a subordinating conjunction fused with a conditional auxiliary: _kdybych = když + bych_ “if I”.
  For more details, see [tokenization](tokenization.html).
