---
layout: base
title:  'English UD'
udver: '2'
---

# UD for English <span class="flagspan"><img class="flag" src="../../flags/svg/GB.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/US.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/CA.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/AU.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/NZ.svg" /></span>

UD English contains data from multiple treebanks created by different teams at different times and with often different conversion tools (from gold constituent treebanks, such as the English Web Treebank for English-EWT, or from different gold dependency treeebanks, such as English-GUM). As a result, differences may sometimes be found across treebanks, though an effort is made to harmonize them when issues are identified.

## Tokenization and Word Segmentation

Words are generally delimited by whitespace or punctuation. No tokens in any of the UD English corpora currently contain whitespace. Multiword tokens should be used for English clitics, such as _'ll_ (reduced form of the auxiliary _will), _n't_ (reduced form of _not_) and _'s_ (possessive clitic). For example, _don't_ = _do_ + _n't_). As of mid 2021, multiword tokens are used in the following English corpora: GUM, GUMReddit, and EWT, are partially used in ParTUT (used for forms like _ain't_ and _can't_ but not for forms that are concatenative like _John's_ or _she'll_), but are not used in: PUD, LinES, Pronouns, or ESL. If multiword tokens are not present, clitics in English can usually be identified by using the `SpaceAfter=No` annotation and it also allows distinguishing between otherwise identical token sequences, such as "can not" versus "cannot".

Units that should be regarded as separate syntactic words include:

  * Clitic auxiliaries ('ll, 'm, 's, 've, 'd, …)
  * Possessive genitive markers ('s, ')
  * Clitic negation (n't, and also not in cannot)
  * Most hyphenated terms (search-engine becomes 3 words: search, -, engine)

Units that are not tokenized apart include:

  * Acronyms (FBI, U.S.)
  * Abbreviations without spaces (e.g., i.e.)
  * Some hyphenated words, with common prefixes or occasionally suffixes, such as _e-mail_ or _co-ordinated_

## Morphology

### [Tags](pos/)

All corpora use the full range of UPOS tags. The XPOS column uses the Penn Treebank tagset (as extended in subsequent LDC corpus releases). Note that XPOS does not have a simple mapping to UPOS tags, as UD guidelines enforce complex relations between dependency relations and POS tags: for example, since the relation `advmod` must generally have the tag `ADV`, UPOS may have `ADV` for some non-adverbial XPOS tags, and vice versa.

Some of the closed-class categories have detailed English-specific documentation pages: [AUX](), [DET](), [PART](), [PRON](). For other tags, the English-specific pages may be less informative than the universal pages.

### [Features](feat/)

All treebanks currently contain whitespace information, except for English-ESL. Morphological features are included in all corpora except English-ESL. In some corpora these are added automatically using CoreNLP (EWT, GUM) and in some cases supplemented using information from other annotation layers (e.g. GUM).

The English-specific documentation pages for the tags [AUX](), [DET](), and [PRON]() also discuss morphological features.

## Syntax

Standard deprels are used, except for `clf` which is not used in any treebank. Commonly used custom subtypes include `obl:npmod` for oblique nominals (corresponds to Stanford Dependencies `npadvmod`), `nmod:tmod` and `obl:tmod` for temporal nouns used adverbially (e.g. "today"), based on the Stanford Dependencies label `tmod`. Additionally, passives are distinguished (`nsubj:pass`, `csubj:pass`), pre-nominal possessives (`nmod:poss`), predeterminers (`det:predet` for "both" in "both the children), preconj (`cc:preconj` for "either" in "either X or Y") and a special compound subtype for phrasal verb particles (`compound:prt` for "up" in "pick up").

For more information, see the list of [English relations](dep/index.html).

## Treebanks

There are [ten](../treebanks/en-comparison.html) active English UD treebanks:

  * [English-Atis](../treebanks/en_atis/index.html)
  * [English-ESLSpok](../treebanks/en_eslspok/index.html)
  * [English-EWT](../treebanks/en_ewt/index.html)
  * [English-GENTLE](../treebanks/en_gentle/index.html)
  * [English-GUM](../treebanks/en_gum/index.html)
  * [English-GUMReddit](../treebanks/en_gumreddit/index.html)
  * [English-LinES](../treebanks/en_lines/index.html)
  * [English-ParTUT](../treebanks/en_partut/index.html)
  * [English-Pronouns](../treebanks/en_pronouns/index.html)
  * [English-PUD](../treebanks/en_pud/index.html)

The following treebank is **retired** (no longer being maintained or included in releases):

  * [English-ESL](../treebanks/en_esl/index.html)

Comparative statistics for tags in the treebanks are available here:

[https://universaldependencies.org/treebanks/en-comparison.html](/treebanks/en-comparison.html)
