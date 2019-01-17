---
layout: base
title:  'Irish UD'
udver: '2'
---

# UD for Irish <span class="flagspan"><img class="flag" src="../../flags/svg/AQ.svg" /></span>

## Tokenization and Word Segmentation

In Irish, in general, words are delimited by whitespace characters. Description of exceptions follows:

* Some punctuation marks are attached to a neighbouring word. The word and the punctuation mark are taken together as one token. For example,  _D'_  (contraction for _do_ in _d'ith_ "ate"), _b'_ (in _b'fhearr_ "would prefer") and _O'_ (in surnames) are recognised as single tokens. Abbreviations surch as _srl._ "etc." or _i.n._ "p.m." are also recognised as one token. 

* Note that compound prepositions (_os\_cionn_ "above", _in\_aice_ "beside", etc)  are split into two tokens for UD v2, as are some placenames that the tagger recognises (e.g. _Cill\_Dara_) or a limited number of mwes (_chomh\_fada\_is_ "as long as; _cé\_is\_moite_ "except for"). 
The Irish POS-tagger used in the Irish Dependency Treebank retains these as single tokens and so must be mapped accordingly.

## Morphology

### POS Tags

The UD part-of-speech (POS) tagset is an extension of the The Google Universal POS tagset (Petrov
et al., 2012) and contains 17 POS tags. 
The tags for the Irish Dependency Treebank is based on the PAROLE Morphosyntactic Tagset (ITÉ,
2002). 

(Table to be inserted here) A mapping from this tagest to the UD tagset for use in the IUDT is given in: Lynn, Teresa and Jennifer Foster, _Universal Dependencies for Irish_ In Proceedings of the 2nd Celtic Language Technology Workshop 2016, Paris, France.

The following is a summary of some specific/ unintuitive choices made to map Irish data conform to Universal POS tags for UDv2:

* The AUX tag is used for the Copula only. All other verbs (including substantive verb _bí_ "to be" are tagged as VERB).
* Verbal adjectives are tagged as ADJ
* The following particles are tagged as PART: adverbial (_go mall_), verbal (_ná déan_), vocative (_a Sheosamh_), comparative (níos déanaí), superlative (_is déanaí_), numeral (_a haon_), relative (_a chonaic sé_), infinitive (_a dhéanamh_), degree (_a luaithe), name (Seosamh Mac Grianna)
* Verbal nouns are tagged as NOUN
* _ag_ in use with verbal nouns to form a gerund in progressive aspectual phrases are tagged as ADP
* demonstrative pronouns are tagged as PRON (_sin an fadhb_, _Thug sé sin faoi deara_)
* demonstrative determiners, on the other hand, are tagged as DET along with all other determiners (_an leabhar sin_)



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
