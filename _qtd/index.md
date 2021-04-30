---
layout: base
title:  'Turkish German UD'
udver: '2'
---

# UD for Turkish-German <span class="flagspan"><img class="flag" src="../../flags/svg/TR.svg" /></span>

In general the Turkish-German code-switching treebank follows the guidelines of individual Turkish and German treebanks. 

## Language IDs and Intra-word Code-switching

* All sentences in the treebank include at least one intrasentential code-switching point. The language information of tokens are represented in the MISC column with the 
`LangID` feature. The values of this feature are: `TR` for Turkish, `DE` for German, `MIXED` for intra-word code-switching (see below), `LANG3` for non-Turkish, non-German languages (mostly English in the treebank), and `OTHER` for punctuation.

* Some tokens employ intra-word code-switching, e.g. _Terminim_, where _Termin_ 'appointment' is in German and _-im_ ‘my’ is a Turkish possessive suffix.
Code-switching points are marked on the surface forms as the values of the `CSPoint` feature in the MISC column, e.g., `CSPoint=Termin§im`. `§` indicates the switch point.

---

## Tokenization and Word Segmentation

* In general, words are delimited by white spaces or punctuation. Punctuation may appear in some abbreviations or numeric expressions.
* German compounds are written as one word, and they are kept as is in the treebank.
* Contractions of German prepositions and definite articles are segmented, e.g., _zum_  _zu_ →  _dem_ 'to the'.
* Turkish copular suffix and a group of productive derivational suffixes are segmented, e.g., _-lI_ deriving nouns and adjectives from a noun (N) with the meaning of 'with N'
(_mavi elbise_ "blue dress" → _mavi elbiseli_ '(the one) with a blue dress'.

Segmentation, code-switching points, and their interaction are described and exemplified in (Çetinoğlu and Çöltekin, 2016)

---

## Morphology

### Tags

* Turkish uses all 17 universal POS categories, German uses all except `SYM`.
* The Turkish and German negation particles, _değil_ and _nicht_ respectively are `PART`. German infinitive marker _zu_ 'to' is also `PART`.
* The Turkish question particle _mI_ is tagged as `AUX`.
* The Turkish copular suffix _-(y)-_, which is treated as a syntactic word, and its clitic counterpart _i_ is marked as `AUX`.
* The German `AUX` are _dürfen_, _haben_, _können_, _mögen_, _müssen_, _sein_, _sollen_, _tun_, _werden_, _wollen_. 

---

### Features

* The treebank uses the features of individual [Turkish](https://github.com/UniversalDependencies/docs/blob/pages-source/_tr/index.md) and [German](https://github.com/UniversalDependencies/docs/blob/pages-source/_de/index.md) treebanks.
* Features introduced with this treebank are `LangID` and `CSPoint` as described in Section _Language IDs and Intra-word Code-switching_

---

## Syntax

* The treebank uses the standard UD relations and the subtype relations of individual [Turkish](https://github.com/UniversalDependencies/docs/blob/pages-source/_tr/index.md) and [German](https://github.com/UniversalDependencies/docs/blob/pages-source/_de/index.md) treebanks.

* Subtype relations introduced with this treebank are [appos:trans]() and [parataxis:trans](). Both are introduced to handle translation pairs , that is, a word, phrase or
clause in one language and its repetition as a translation in the other language. Further description and examples can be found in (Çetinoğlu and Çöltekin, 2019)

---

## Treebanks

There is one Turkish-German UD treebank:

  * [Turkish-German-SAGT](../treebanks/qtd_sagt/index.html)
  
---

## References

* Özlem Çetinoğlu and Çağrı Çöltekin (2016). Part-of-speech annotation of a Turkish-German code-switching corpus. In _Proceedings of the 10th Linguistic Annotation Workshop (LAW-X)_. Berlin, Germany.
https://www.aclweb.org/anthology/W16-1714.pdf

* Özlem Çetinoğlu and Çağrı Çöltekin (2019). "Challenges of Annotating a Code-Switching Treebank". In _Proceedings of the 18th International Workshop on Treebanks and Linguistic Theories (TLT, SyntaxFest 2019)_. Paris, France.
<https://www.aclweb.org/anthology/W19-7809.pdf>
