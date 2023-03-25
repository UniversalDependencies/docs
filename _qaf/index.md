---
layout: base
title:  'NArabizi UD'
udver: '2'
---

# UD for NArabizi 

## Tokenization and Word Segmentation

* Spaces, commas and periods are generally used as word delimiters. Algerian Arabic being a dialect that contains a lot of code-switching, tokenization rules usually follow the target languages, namely Modern Standard Arabic (MSA), Algerian Arabic and French. Exceptions are often due to the specificities of user-generated content.

* For French, see [the French documentation page](https://universaldependencies.org/fr/index.html). However, contracted prepositions are not considered multiword tokens, which is often the case in French treebanks. Thus, prepositions such as *au* **are not** split into *à*+*le*, but their particular status are specified in the XPOS and MISC fields.

* For MSA and Algerian Arabic,see [the Arabic documentation page](https://universaldependencies.org/ar/index.html). However, definite articles are considered as tokens, so when they are not delimited by a space,they are split. This often happens with nouns starting with [sun letters](https://simple.wikipedia.org/wiki/Sun_and_moon_letters). For instance, *essalam* --> *e*+*ssalam*.
The same rule applies for prepositions when they are governed by nouns, proper nouns and adjectives (*fdoute* --> *f*+*doute*), and it also applies recursively (*bilaranib* --> *bi*+*l*+*aranib*).

* Non-final punctuation symbols (such as *-* and */* ) are considered as tokens when they are used for football match scores and fractions (i.e. *3-0*  -> *3* *-* *0*, *100/100* -> *100* */* *100* )

---

## Morphology

### Tags

* All universal POS categories except SYM are used. Arabic Negation particles (both in MSA and Algerian Arabic) such as *ma* and *la*, and the restrictive particle *ghir* are tagged as PART.
* The following ferbs are tagged as AUX when they are used for composed tense and aspect constructions:
  * the French auxiliairies *être* et *avoir*
  * The Arabic auxiliary *kan*
  * The Algerian Arabic auxiliary *rah*
  
---

### Features

* Verbs have Gender (values: Masc and Fem), Number (values: Sing and Plur) and Person (values : 1,2 and 3) features. Verbs also have a Mood feature (values: Imp and Sub) for imperatives and for one specific subjunctive construction (*vive/tahia/viva* + *nominal*)
* Pronouns have a PronType feature (values : Dem, Int and Rel).
* Pronouns have an AdpType feature with the single value Prep.
* The polarity feature applies to particles and adverbs and verbs with the single value Neg.

---

## Syntax

* For Arabic, see the [Arabic documentation page](https://universaldependencies.org/ar/index.html#syntax). However, the language specific deep relations are not used.
* For French, see the [French documentation page](https://universaldependencies.org/fr/index.html#syntax). However, the language specific deep relations are not used. Some deep relations are specified in the MISC fields (*expl:subj*,*expl:comp* and *conj:coord*)

---
