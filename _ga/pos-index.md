---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ga/pos/index.html
---

# POS tags
<table>
<tr><td><strong>Open class words</strong></td><td><strong>Closed class words</strong></td><td><strong>Other</strong></td></tr>
<tr><td><a href="https://universaldependencies.org/ga/pos/ADJ.html">ADJ</a></td>
<td><a href="https://universaldependencies.org/ga/pos/ADP.html">ADP</a></td>
<td><a href="https://universaldependencies.org/ga/pos/PUNCT.html">PUNCT</a></td>
</tr>
<tr><td><a href="https://universaldependencies.org/ga/pos/ADV.html">ADV</a></td>
<td><a href="https://universaldependencies.org/ga/pos/AUX.html">AUX</a></td>
<td><a href="https://universaldependencies.org/ga/pos/SYM.html">SYM</a></td></tr>
<tr><td><a href="https://universaldependencies.org/ga/pos/INTJ.html">INTJ</a></td>
<td><a href="https://universaldependencies.org/ga/pos/CCONJ.html">CCONJ</a></td>
<td><a href="https://universaldependencies.org/ga/pos/X.html">X</a></td></tr>
<tr><td><a href="https://universaldependencies.org/ga/pos/NOUN.html">NOUN</a></td>
<td><a href="https://universaldependencies.org/ga/pos/SCONJ.html
">SCONJ</a></td><td></td></tr>
<tr><td><a href="https://universaldependencies.org/ga/pos/PROPN.html">PROPN</a></td>
<td><a href="https://universaldependencies.org/ga/pos/DET.html">DET</a></td><td></td></tr>
<tr><td><a href="https://universaldependencies.org/ga/pos/VERB.html">VERB</a></td>
<td><a href="https://universaldependencies.org/ga/pos/NUM.html">NUM</a></td><td></td></tr>
<tr><td></td><td><a href="https://universaldependencies.org/ga/pos/PART.html">PART</a></td><td></td></tr>
<tr><td></td><td><a href="https://universaldependencies.org/ga/pos/PRON.html">PRON</a></td><td></td></tr>
</table>

Here we highlight the unintuitive choices made for mapping the Irish data to Universal POS tags. More information on each of the 17 POS tags and their use in Irish can be found in their respective pages.

## AUX

Further documentation available here: [AUX]()

What could be considered "auxiliary" verbs in other languages (I _have_ to go, I _am_ going) are not labelled as AUX in the Irish data. However, as all copular verbs in UD are recognised as Auxiliaries, we tag the copula as AUX.

There are two verbs "to be" in Irish: the substantive verb _bí_ and the copula _is_. For that reason, the Irish POS tagset differentiates the copula by using the POS tag AUX and labelling the substantive verb as VERB. In the literature on Irish syntax, there is some discussion over the Irish copula's syntactic role, whether it is a verb or a linking particle (Carnie, 1997). The role normally played is that of a linking element between a subject and a predicate. 

## ADP

Further documentation available here: [ADP]()

All simple prepositions are tagged as ADP.

Compound prepositions have been split into two tokens to conform to UD guidelines. While the individual tokens are sometimes not standalone words, nor considered prepositions in their own right, they are both tagged as ADP.

e.g. _os\_cionn_ "above" is split into _os_ and _cionn_, both of which are individually tagged as ADP.

_in\_aice_ "beside" 


Pron-Prep is the Irish POS tag for pronominal prepositions, which are also referred to as prepositional pronouns. Characteristic of Celtic languages, they are prepositions inflected with their pronominal objects – compare, for example, _le mo chara_ "with my friend" with _leis_ "with him". While the Irish POS labelling scheme tags them as pronouns in the first instance (i.e. their coarse grained tag), the dependency labelling scheme treats the relationship between them and their syntactic heads as 'case'. Therefore, they have been mapped to ADP (adpositions) for UD.


## NOUN

Further documentation available here: [NOUN]()

The NOUN tag is used for both common nouns and verbal nouns. Verbal nouns are frequently used as they form both infinitive phrases _Ba mhaith liom leadóig a imirt_ "I'd like to play tennis" and progressive aspectual phrases _tá mé ag imirt leadóig_ "I am playing tennis".





