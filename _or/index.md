---
layout: base
title:  'Odia UD'
udver: '2'
---

# UD for Odia <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* ​Similar to other Indian languages, words are separated by whitespace characters​ in Odia.
* Following typographical guidelines, certain punctuation marks (like commas) are connected to adjacent words, whereas others (such as period marks) are separate. We treat punctuation as distinct tokens (words).


## Morphology

### Tags

* Odia uses all 17 universal POS categories, including particles ([PART]()).
* Odia’s verb morphology is rich with a three-tier tense system, person, number, and honorific markers.
* Odia nominal morphology differentiates between plural and singular numbers, case marking on nouns, and first, second, and third-person pronouns. However, it does not have grammatical gender marking, which reduces the complexity of learning the language.
* Odia has the following auxiliary verbs ([AUX]()):

* Primary Auxiliaries: 
	 - Present tense ଅଛ୍ - ଅଛି, ଅଛନ୍ତି, ଅଛ, ଅଛୁ
	- Past tense ଥ - ଥିଲା, ଥିଲେ, ଥିଲୁ, ଥିଲି 
	- Future tense ଥ - ଥିବ, ଥିବୁ, ଥିବେ, ଥିବି, ଥିବା, ଥିବି
	- Hypothetical tense ଥା - ଥାଆନ୍ତି, ଥାଆନ୍ତା, ଥାଆନ୍ତୁ
                             
 * Modal Auxiliaries ପାର୍ : - ପାରେ ,ପାରିବି, ପାରିଲି, ପାରିବ, ପାରୁ, ପାରିବେ, ପାର, ପାରନ୍ତି, ପାରିଥାନ୍ତି, ପାରୁଥାଆନ୍ତି, ପାରୁଥିଲା, ପାରୁଥିଲେ, ପାରୁଥିବି, ପାରୁଥିଲି, ପାରୁଥିବେ, ପାରୁଥିବ

### Features

The morphological features haven't been used in the current Odia treebank. We will add this feature in the next edition.

## Syntax

* Odia is an agglutinative language, and it follows the subject-object-verb order. 
* The major word classes found in Odia are nouns, pronouns, verbs, adjectives, and postpositions. Minor categories, like classifiers, complementizers, and conjunctions, are also found. 
* The objects occur between the subject and the verb; the Indirect Object precedes the Direct Object. The modifier precedes the item it modifies: the adjective precedes the substantive it qualifies, and the adverb precedes the verb. Although scrambling is allowed, usually, the word order sticks to the V-final constructions except for poetic inversion.
* Odia has two numbers: singular and plural; and three persons: 1st person, 2nd person, and 3rd person.
* The subject NP agrees with the verb in person, number, and honorific. Honorificity goes along with person and number and it is marked in various word classes like nouns, pronouns, verbs, and, interestingly enough, with some of the post-positions that function as genitive, locative, and ablative markers.
* Odia has eight cases: nominative, accusative, instrumental, dative, ablative, genitive, locative, and vocative. Except for the nominative case, all the other cases are marked morphologically.
* Adverbs: Like English and Hindi, Odia also has Time, Place, and Manner adverbials.

## Treebanks

There is only one Odia UD treebank at present:

  * [Odia-ODTB](../treebanks/or_odtb/index.html)
