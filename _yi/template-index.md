---
layout: base
title:  'Yiddish UD'
udver: '2'
---

# UD for Yiddish <span class="flagspan"><img class="flag" src="../../flags/svg/YIDDISH.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* Tokens are written in Hebrew script with transliterations provided as metadata.
* Hyphenated compounds are analyzed as one word – we do not split them.
* Contracted words are analyzed as two separated tokens. Example(s): _tsum_ = _tsu_ + _dem_; _s'iz_ = _es_ + _iz_

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* Yiddish uses all universal POS categories, except SYM.
* The following words in Yiddish are particles and are tagged PART: _halevay_ 'if only'; _ni(sh)t_ 'not'; _sakh_ used only in fixed expressions _a sakh_ 'many', _aza sakh_ 'so many', and _keyn sakh_ 'not many'; the question particle _tsi_; and the infinitive marker _tsu_ 'to'
* In general, words that inflect for gender to agree with a modified noun are tagged DET (e.g., _der/di/dos_ 'the', _yeder_ 'each'). The class of possessive adjectives are tagged DET, even though they do not inflect for gender in prenominal position. When used as a noun or in constructions such as _mayner a khaver_ 'a friend of mine', they are tagged PRON.
* The Yiddish auxiliaries are:  
  * _zayn_ 'be' for past tense of some verbs and as a copula 
  * _hobn_ 'have' for past tense of most verbs
  * _veln_ 'will' for future tense
  * _vern_ 'become' for passive voice
  * _volt_ 'would' for conditional 
  * modal verbs: _darfn_ 'need', _zoln_ 'should', _muzn_ 'must', _kern_ 'ought, might', _torn_ + _nit_ 'ought not', _megn_ 'may', _kenen_ 'can', _veln_ 'want', _flegn_ 'used to' with zero-inflection in 3SG 
  * The verbs _hobn_, _vern_, _darfn_, _kenen_, _veln_ can occur as normal verbs. _zayn_ in periphrastic verbs is tagged VERB.
* The (de)verbal forms and their tags are as follows:
  * Infinitive, VERB or AUX
  * Finite verb, VERB or AUX
  * Participle, VERB, AUX, or ADJ
  * Verbs used as nonus are tagged VERB, including infinitive forms preceded by a definite article (e.g., _dos trinken_  'drinking') and verbal stems preceded by an indefinite article in the stem construction (e.g., _a kuk ton/gebn_ 'to look')

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

* Morphological features are not provided at this time.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax
### Core and Oblique Arguments
* A nominal subject (nsubj) is a noun phrase in nominative case.
* A nominal object (obj) is a noun phrase in accusative case.
* If a verb licenses two accusative objects, the relation iobj is used for the second one, usually a recipient.
* The object of a preposition (obl) is in dative case.
* An object in dative case without a preposition has the relation obl:arg.
* A clause is labeled csubj when it serves as the subject of its matrix clause.
* Clausal complements with a unique subject are labeled ccomp.
* Clausal complements with a subject determined by the next higher clause are labeled xcomp. This also goes for secondary predicates.

### Non-verbal Clauses
* The copula verb _zayn_ (be) is used in equational, attributional, locative, possessive, benefactory and existential nonverbal clauses.

### Relations Overview
* Yiddish uses all universal syntactic relations, except clf.
* The following relation subtypes are also used in Yiddish:
  * acl:relcl for adnominal relative clauses
  * advcl:relcl for relative clauses whose antecedent is a clause
  * aux:pass for passive auxiliaries
  * compound:lvc for periphrastic verbs
  * compound:prt for separable verb prefixes
  * csubj:pass for clausal subjects of passive verbs
  * det:poss for possessive adjectives
  * expl:pv for reflexive clitics of inherently reflexive verbs
  * flat:foreign for foreign expressions
  * flat:name for multi-word proper noun
  * nmod:poss for possessive modifier phrases
  * nsubj:outer for subject of copular clause whose predicate is also a clause
  * nsubj:pass for nominal subjects of passive verbs
  * obl:agent for agents of passive verbs
  * obl:arg for dative objects

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is [one](../treebanks/yi-comparison.html) Yiddish UD treebanks:

  * [Yiddish-YiTB](../treebanks/yi_yitb/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
