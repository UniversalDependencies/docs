---
layout: base
title:  'Armenian UD'
udver: '2'
---

# UD for Armenian (Eastern) <span class="flagspan"><img class="flag" src="../../flags/svg/AM.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words);
  that holds even for hyphenated compounds such as *անգլո-ամերիկյան* “anglo-american” (three tokens) and for abbreviations such as *թ.* “year”
  (two tokens).
* Numerical expressions (including dates) are treated as single words and may contain punctuation or whitespace: *1.1.1970*, *1/1/1970*, *11:00*, *2 000*, *10-15*.
* There are several closed classes of contractions that are treated as multi-word tokens and segmented to individual syntactic words.
  The most prominent type are words that contain “infixed” punctuation (question, exclamation, emphasis and Armenian abbreviation marks), as in *ինչո՞ւ = ինչու + ՞* “why?”. For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Armenian POS tags](pos/index.html)
and [Armenian features](feat/index.html).

* Armenian uses all 17 universal POS categories, including particles ([PART]()). The exact list of particles yet to be worked out.
* The tag [DET]() is used for articles and pronominal words used with a determiner function, including possessives (the traditional grammar does not define determiners, but distinguish pronominal modifiers). The tag [PRON]() is reserved for pronouns occurring as the head of a noun phrase. Pronominal quantifiers (which the traditional grammar includes in pronouns) are [DET]() as well.

* Verbs with modal meaning are not considered auxiliary in Armenian.
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX]() (in so-called secondary periphrastic tenses).
  * Converb `Conv`, tagged [VERB]() or [AUX]().
  * Gerundive `Gdv`, tagged [VERB]().
* Though participles can be used adjectivally in Armenian they are generally tagged [VERB]().
