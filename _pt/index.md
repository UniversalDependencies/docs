---
layout: base
title:  'Portuguese UD'
udver: '2'
---

# UD for Portuguese <span class="flagspan"><img class="flag" src="../../flags/svg/PT.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/BR.svg" /></span>

Preliminary documentation for Portuguese treebanks.

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. A description of some exceptions follows.
* Compounds with hyphen are annotated as MWT (multi-word tokens) and split into tokens without the hyphen. That is, `homen-aranha` becomes two tokens `homen` and `aranha`.
* Mesoclisis (like `contar-lhe-ei` would be `contar`, `lhe` and `ei`) and enclisis (e.g. `sentem-se` becomes `sentem` and `se`) follow the same rule.

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

### Features

More later.

### Lemmas

* For NOUN, we use the singular form.
* For PROPN, we use the same form, preserving the capitalization.
* For ADJ and DET, the masculine and singular form is used.
* For VERB and AUX, the infinitive of the verb is used.
* For PRON, if noun, follow the NOUN rule, if an adjective pronoun,
  follow the ADJ rule.

## Syntax


* Only `ser` and `estar` should be considered copulas.

More later.

---

## Treebanks

There are [3](../treebanks/pt-comparison.html) Portuguese UD treebanks:

  * [Portuguese-Bosque](../treebanks/pt_bosque/index.html)
  * [Portuguese-GSD](../treebanks/pt_gsd/index.html)
  * [Portuguese-PUD](../treebanks/pt_pud/index.html)
  * [Portuguese-DHBB](../treebanks/pt_dhbb/index.html)
