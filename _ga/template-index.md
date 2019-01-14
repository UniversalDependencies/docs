---
layout: base
title:  'Irish UD'
udver: '2'
---

# UD for Irish <span class="flagspan"><img class="flag" src="../../flags/svg/AQ.svg" /></span>

## Tokenization and Word Segmentation

* In Irish, in general, words are delimited by whitespace characters. Description of exceptions follows.
* Some punctuation marks are attached to a neighbouring word. The word and the punctuation mark are taken together as one token. For example,  _D'_  (contraction for _do_ in _d'ith_ "ate"), _b'_ (in _b'fhearr_ "would prefer") and _O'_ (in surnames) are recognised as single tokens. Abbreviations surch as _srl._ "etc." or _i.n._ "p.m." are also recognised as one token. 

* Note that compound prepositions (_os\_cionn_ "above", _in\_aice_ "beside", etc)  are split into two tokens for UD v2, as are some placenames that the tagger recognises (e.g. _Cill\_Dara_) or a limited number of mwes (_chomh\_fada\_is_ "as long as; _cé\_is\_moite_ "except for"). 
The Irish POS-tagger used in the Irish Dependency Treebank retains these as single tokens and so must be mapped accordingly.

## Morphology

### Tags

*

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/LCODE-comparison.html) LANGUAGE UD treebanks:

  * [LANGUAGE-A](../treebanks/LCODE_a/index.html)
  * [LANGUAGE-B](../treebanks/LCODE_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
