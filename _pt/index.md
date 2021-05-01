---
layout: base
title:  'Portuguese UD'
udver: '2'
---

# UD for Portuguese <span class="flagspan"><img class="flag" src="../../flags/svg/PT.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/BR.svg" /></span>

UD Portuguese contains data from multiple treebanks created by different teams at different times and with often different conversion tools.  As a result, differences may sometimes be found across treebanks, though we are making efforts to harmonize them when issues are identified.

## Tokenization and Word Segmentation

Words are generally delimited by whitespace or punctuation. No tokens in any of the UD Portuguese corpora currently contain whitespace. Most corpora do use multiword tokens, since contractions in Portuguese are uniquitous, from verbs to prepositions. For example forms like `do` = `de`+`o` (of+the)  or `fi-lo` = `fiz`+`o` (did+it).

Units that are generally tokenized apart include:

  * Contractions of determiners/prepositions (pelo=por+o, dele=de+ele, em+o=no, ...)
  * Hyphenated words are under review, some are treated as one token (pré-histórico, sul-coreana,	wi-fi,... ) but we intend to split them. That is, compounds with hyphen should be annotated as MWT (multi-word tokens) and split into tokens without the hyphen. That is, `homen-aranha` becomes two tokens `homen` and `aranha`.
  * Mesoclisis (like `contar-lhe-ei` would be `contar`, `lhe` and `ei`) and enclisis (e.g. `sentem-se` becomes `sentem` and `se`).

Units that are not tokenized apart include:

  * Acronyms (STF, E.U.)
  * Abbreviations without spaces (e.g., i.e.)

## Morphology

### Tags

This is an overview only. We are following the UD rules as close as
possible. Moreover, we are using MWEPOS in the Misc field to specify
the POS tag of multi-word expressions as a whole.

* Portuguese uses all 17 universal POS categories, including particles ([PART]()).
* The particle tag is used for prefixes _anti, pré, pós_ when they appear as separate tokens.
* TODO: rules for the PRON vs. DET distinction.
* Portuguese auxiliary verbs ([AUX]()) are:
  * _ser_ and _estar_ “to be”, used as copulas
  * _ser_ “to be” for the passive (_a frase foi publicada_ “the sentence was published”)
  * _estar_ “to be” for the progressive (_meus filhos estão estudando inglês_ “my children are studying English”)
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX](), e.g. _estudar_ “to study”.
  * Finite verb `Fin`, tagged [VERB]() or [AUX](), e.g. _estudo_ “I study”.
  * Participle `Part`, tagged [VERB]() or [AUX](), e.g. _estudado_ “studied”.
  * Gerund `Ger` or present participle, tagged [VERB]() or [AUX](), e.g. _estudando_ “studying”.
  
### Multiword expressions

As documented in [1], the indication of the POS tags in the case of 'fixed' MWEs is particularly relevant, as these ex-pressions are
crystallized in such way that their components can have completely different POStags from the total expression.  Having the information about the POS-tag of the entire MWE inthe MISC field helps to justify some dependency relations. We use adopted the `MWEPOS=VAL` for such cases, where val is any valid value for the UPOSTAG field.

### Features

Morphological features are included in all corpora, partially in some cases. In some corpora these are added automatically using [MorphoBr](https://github.com/LR-POR/MorphoBr) and in some cases supplemented using information from other annotation layers (e.g. Bosque).

### Lemmas

* For NOUN, we use the singular form.
* For PROPN, we use the same form, preserving the capitalization.
* For ADJ and DET, the masculine and singular form is used.
* For VERB and AUX, the infinitive of the verb is used.
* For PRON, if noun, follow the NOUN rule, if an adjective pronoun,
  follow the ADJ rule.

## Syntax

Only `ser` and `estar` should be considered copulas.

Passives are distinguished (`nsubj:pass`, `csubj:pass`), possessived (`nmod:poss`), predeterminers (`det:predet` for "ambos" in "ambos os filhos), preconj (`cc:preconj` for "ou" in "ou X ou Y").

### auxiliaries verbs

TODO 

## Treebanks

There are [4](../treebanks/pt-comparison.html) Portuguese UD treebanks:

  * [Portuguese-Bosque](../treebanks/pt_bosque/index.html)
  * [Portuguese-GSD](../treebanks/pt_gsd/index.html)
  * [Portuguese-PUD](../treebanks/pt_pud/index.html)
  * [Portuguese-DHBB](../treebanks/pt_dhbb/index.html)

## References

- [1] Rademaker, Alexandre, Fabricio Chalub, Livy Real, Cláudia
  Freitas, Eckhard Bick, and Valeria de Paiva. "Universal dependencies
  for Portuguese." In Proceedings of the Fourth International
  Conference on Dependency Linguistics (Depling 2017),
  pp. 197-206. 2017. https://www.aclweb.org/anthology/W17-6523/
