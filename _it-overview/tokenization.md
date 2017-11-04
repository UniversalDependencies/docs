---
layout: base
title:  'Tokenization'
permalink: it/overview/tokenization.html
---

# Tokenization

The tokenization in the Italian UD treebank is a straightforward segmentation based on whitespace and punctuation. The following special cases deserve to be mentioned:

* Abbreviations are treated as single words regardless of whether they contain dots or other punctuation symbols. 
Examples: _etc._, _ecc._, _es._, _art._, _tel._, _U.S.A._, _a.C._, _S.O.S._, _L._, _sig._
* Numerical expressions: dots (separating thousands), commas (separating decimals) and colons, (separating hours from minutes, and minutes from seconds) are part of the same token. 
Examples: _4.755.000_, _19,30_, _355.089,40_, _20:24:0_
* Urls: are rendered as a single token
* Proper names may contain a dash "-"
Examples: _C-212-300_, _E-commerce_, _D-day_, _Yamate-dōri_ 
* Punctuation: "..." is single token

## Multi-word tokens

The Italian UD treebank does not contain multiword tokens.

## Fused words

According to the UD guidelines, the basic units of annotation are syntactic words (not phonological or orthographic words), therefore we systematically split off clitics and articulated prepositions. Examples follow:

* _specializzarsi_ = _specializzare si_ = "to specialize oneself"
* _andarsene_ = _andare se ne_ = "to go away"
* _mangiarlo_ = _mangiare lo_ = "to eat it"
* _mangiarselo_ = _mangiare se lo_ = "to eat it oneself"
* _della_ = _di_ _la_ = "of the"
* _all'_ = _a l'_ = "to the"
* _degli_ = _di gli_ = "of the"

# Sentence splitting

Each sentence contains only one root.
Splitting is usually performed after an end-of-sentence dot or after a colon or semicolon when these punctuation marks separate unrelated subparts of a sentence. Items in a list may sometimes be rendered as separate sentences.
