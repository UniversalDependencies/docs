---
layout: base
title:  'Western Sierra Puebla Nahuatl UD'
udver: '2'
---

# UD for Western Sierra Puebla Nahuatl <span class="flagspan"><img class="flag" src="../../flags/svg/MX.svg" /></span>

## Tokenization and Word Segmentation

* Generally, words are delimited by whitespace characters. Exceptions to this rule are documented below.
* When one or more punctuation characters is used to introduce or end quoted speech (such as "-¿Keni tika?"), the sequence of punctuation characters are typically treated as a single unit, and tokenized (separated from the preceding or following word).
* There are three words that are often written together with an adjacent word in some Nahuatl texts, and we tokenize them. These are:
- The "augment" o, which is often written on the left-hand side of the following verb (e.g. onimitztlahtlanih => o nimitztlahtlanih `I asked you`)
- The optative auxiliary "ma" or "mo" (e.g. amo mapinauican => amo ma pinauican "May they not be embarrased." )
- The determiner/subordinator `in` (often written `n`), which can attach orthographically to the following NOUN, PRON, or VERB (e.g. nitskuintli => n itskuintli "the dog").
* In addition, given the high frequency of Spanish in Nahuatl data, we recognize the two main classes of multi-word tokens from Spanish:
  * Contractions of prepositions and definite articles.
    Example: _al = a + el_ “to the”, _del = de + el_ “of the”.
  * Certain verb forms (infinitives, imperatives, present participles) are writen together with
    object clitic pronouns, while with other verb forms the clitics are written as separate words.
    Examples: _convertirse = convertir + se_ “to become” (lit. “to convert itself”), _hacerlo_ “to do it”.


## Morphology


### Tags

* _NOUN_: Most nouns take one of a small set of Absolutive endings in the singular, unpossessed form (`-tl`, `-tli`, `-li`) and can be inflected for number and diminution. There are generally two distinct plural suffixes depending on whether the noun is possessed (_-wan/huan/uan_ if possessed, _-meh/mej_ otherwise).

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

There are [N](../treebanks/nhi-comparison.html) Western Sierra Puebla Nahuatl UD treebanks:

  * [Western Sierra Puebla Nahuatl-A](../treebanks/nhi_a/index.html)
  * [Western Sierra Puebla Nahuatl-B](../treebanks/nhi_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
