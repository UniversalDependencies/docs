---
layout: base
title:  'Tokenization'
permalink: it/overview/tokenization.html
---

# Tokenization

The tokenization in the Italian UD treebank is a straightforward segmentation based on whitespace and punctuation. The following special cases deserve to be mentioned:

    * Abbreviations are treated as single words regardless of whether they contain spaces and or dots or not. 
    Examples: _etc._, _ecc._, _es._, _art._, _tel._,, _U.S.A._, _a.C._, _S.O.S._, _L._, _sig._
    * Numerical expressions: dots (separating thousands), commas (separating decimals) and colons, (separating hours from minutes, and minutes from seconds) are part of the same token.
    Examples: _4.755.000_, _19,30_, _355.089,40_, _20:24:0_, _19:30_
    * Urls: are rendered as a single token
    * Proper names may contain a '-'
    Examples: _C-212-300_, _E-commerce_, _D-day_, _Yamate-dōri_ 
    * Punctuation: ...

## Multi-word tokens

The Italian UD treebank does not contain multiword tokens.

Verbs with clitic pronouns and articulated prepositions are split and result in separate tokens. As follows:

* _specializzarsi_ becomes _specializzare si_ (*to specialize oneself*)
* _andarsene_ becomes _andare se ne_ (*to go away*)
* _mangiarlo_ becomes _mangiare lo_ (*to eat it*)
* _mangiarselo_ becomes _mangiare se lo_ (*to eat it oneself*)
* _della_ becomes _di_ _la_ (*of the*)
* _all'_ becomes _a l'_ (*to the*)
* _degli_ becomes _di gli_ (*of the*)

## Sentence splitting

Each sentence contains only one root.
Splitting is usually performed after an end-of-sentence dot or after a colon or semicolon when these punctuation marks serve to separate unrelated subparts of a sentence. Items in a list may sometimes be rendered as separate sentences.
