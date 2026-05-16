---
layout: base
title:  'Tagabawa UD'
udver: '2'
---

# UD for Tagabawa <span class="flagspan"><img class="flag" src="../../flags/svg/PH.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace but with exceptions:
* Compound words and full reduplications that are separated by a hyphen are tokenized as multi-word tokens if each word can be taken as a separate semantic expression forming a whole.
  * Contractions are tokenized independently whenever possible (e.g. *ke'd* into *ke* + *'d*)
  * Words with spaces do not regularly occur in Tagabawa.

## Morphology
* Tagabawa uses 16 of the UPOS tags. Auxiliary ([AUX](https://universaldependencies.org/u/pos/all.html#al-u-pos/AUX)) is excluded.
* Several word types are classified as particles ([PART](https://universaldependencies.org/u/pos/PART.html)). These fall under two categories:
  * Grammatical particles (linkers *na* and *ka*)
  * Lexical particles (such as the question marker *baʔ*, negation marker *direʔ*, *ʔándaʔ*)
* Quantifiers (including the plural marker *mga* and indefinite quantifiers such as *madita* “many”) are classified as determiners ([DET](https://universaldependencies.org/u/pos/DET.html)).
* Similar to other Philippine-type languages, Tagabawa has nominal markers that function both as prepositions and articles. Calling these as markers is probably the safest classification instead of prepositions, articles or determiners, as the markers can function all of them. To parallel other Philippine language treebanks, they are labeled as ([ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP)). These markers are: 
  * The topic nominative/absolutive marker *ang* or *toʔ*
  * The non-topic genitive/ergative marker *ni* or *ka*
  * The non-core oblique/dative marker that is also *kay* or *ka*

### Nominal Features

* Plurality is signaled, if explicitly stated, by the function word *mga*, hence *mga* expresses the `Number=Plur` feature and does not need for nouns ([NOUN](https://universaldependencies.org/u/pos/all.html#al-u-pos/NOUN)) and proper nouns ([PROPN](https://universaldependencies.org/u/pos/all.html#al-u-pos/PROPN)) to have `Number=Plur`. However, some affixations on nouns show number, and are not preceded with a *mga* marker anymore. In such occurences, the noun then has a `Number=Plur`.
* Pronouns ([PRON](https://universaldependencies.org/u/pos/all.html#al-u-pos/PRON)) are marked for number with 2 possible values: `Sing`, `Plur`
* Some nouns ([NOUN](https://universaldependencies.org/u/pos/all.html#al-u-pos/NOUN)) and adjectives ([ADJ](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADJ)) have [Gender](https://universaldependencies.org/u/feat/all.html#al-u-feat/Gender) with 2 possible values: `Masc`, `Fem`. These are usually loanwords from Spanish. Other nouns or adjectives do not have this feature.
* There is a debate about the names of the case markers, depending to which morphosyntactic alignment is subscribed to when analyzing Tagabawa. Some linguists would argue Philippine-type languages are ergative-absolutive, some would say nominative-accusative, and some would reject both and say there is an Austronesian alignment. To adopt the similarities of other Philippine-type languages, Tagabawa has `Nom`, `Gen`, `Dat` as the 3 possible values for [ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP).



Degree and Polarity

* [Degree](https://universaldependencies.org/u/feat/all.html#al-u-feat/Degree) applies to adjectives ([ADJ](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADJ)) and has 2 possible values: `Pos`, `Sup`. `Cmp` (comparative form) is not formed morphologically.
* [Polarity](https://universaldependencies.org/u/feat/all.html#al-u-feat/Polarity) is used to some existential verbs ([VERBS](https://universaldependencies.org/u/pos/all.html#al-u-pos/VERB)), negation particles like *di*, *dire*, *ʔándaʔ* and response to interjection like *oʔoʔ* and *dire*. It has 2 possible values: `Pos`, `Neg`.

### Verbal Features

* Verbs ([VERBS](https://universaldependencies.org/u/pos/all.html#al-u-pos/VERB)) inflect according to [Mood](https://universaldependencies.org/u/feat/all.html#al-u-feat/Mood), [Aspect](https://universaldependencies.org/u/feat/all.html#al-u-feat/Aspect) (instead of [Tense](https://universaldependencies.org/u/feat/all.html#al-u-feat/Tense)), and [Voice](https://universaldependencies.org/u/feat/all.html#al-u-feat/Voice).
* Verbs ([VERBS](https://universaldependencies.org/u/pos/all.html#al-u-pos/VERB)) in the current data contains 3 possible mood values: `Ind` (indicative), `Imp` (imperative), `Pot` (potential).
* [Aspect](https://universaldependencies.org/u/feat/all.html#al-u-feat/Aspect) has 3 possible values: `Perf` (perfective), `Imp` (imperfective), `Prosp` (prospective).
* [Voice](https://universaldependencies.org/u/feat/all.html#al-u-feat/Voice) is different in many Austronesian languages such as Tagabawa as it does not follow the active-passive voice difference. [Verbs](https://universaldependencies.org/u/pos/all.html#al-u-pos/VERB) “focus” on one specific argument, making it as the subject, but it does not transform the patient-like argument from a transitive clause to intransitive, and retains the agent-like argument, if present, is still a core argument. This feature is similar to Tagalog or Cebuano, and other Philippine-type languages. There are 4 possible values for `Voice`:
  * `Act` (actor-focused voice) where the actor is the topic of the sentence.
  * `Pass` (patient-focused voice) where the patient is the topic of the sentence.
  * `Lfoc` (locative-focused voice) where the location is the topic of the sentence.
  * `Ifoc` (instrumental-focused voice) where the instrument is the topic of the sentence.

### Pronouns, Determiners, Quantifiers

* [PronType](https://universaldependencies.org/u/feat/all.html#al-u-feat/PronType) is used with pronouns ([PRON](https://universaldependencies.org/u/pos/all.html#al-u-pos/PRON)), determiners ([DET](https://universaldependencies.org/u/pos/DET.html)), and adverbs ([ADV](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADV)).
* [NumType](https://universaldependencies.org/u/feat/all.html#al-u-feat/NumType) is used with cardinal numerals ([NUM](https://universaldependencies.org/u/pos/all.html#al-u-pos/NUM)).
* [Person](https://universaldependencies.org/u/feat/all.html#al-u-feat/Person) is a feature for personal pronouns ([PRON](https://universaldependencies.org/u/pos/all.html#al-u-pos/PRON)) and has 3 possible values: `1`, `2`, `3`. Person is not marked on other types of pronouns or nouns, but they can be interpreted as they are in 3rd person.
* [Clusivity](https://universaldependencies.org/u/feat/all.html#al-u-feat/Clusivity) is a feature in 1st personal plural pronouns. It has 2 possible values: `In` (inclusive), `Ex` (exclusive).
* [Deixis](https://universaldependencies.org/u/feat/all.html#al-u-feat/Deixis) is a lexical feature of demonstratives (PRON, ADV) and has 3 possible values: `Prox` (proximate), `Med` (medial), `Remt` (remote or distal).

### Other Features

* [PartType](https://universaldependencies.org/u/feat/all.html#al-u-feat/PartType) is used to distinguish the particles used in Tagabawa. This excludes linkers even though they are considered as particles.
* [Foreign](https://universaldependencies.org/u/feat/all.html#al-u-feat/Foreign)`=Yes` feature is used for words that are not natively Tagabawa, usually English or Spanish words that are used a substitute for Tagabawa words. If a loaned word is already part of the common lexicon in Tagabawa regardless if they have foreign spelling (e.g. *passport* is in English but considered a Tagabawa word) then it is not labeled as `Foreign=Yes`.

## Syntax

### Core Arguments and Adjuncts
* Like many Philippine-type languages, Tagabawa uses the Austronesian voice system. In Tagabawa, there are two core arguments, which are the topic argument and the non-topic argument. These are marked by prepositions ([ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP)), and affixation on the verb determines their semantic roles.
  * The core topic nominative/absolutive argument (usually marked by the [ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP) *toʔ* for common nouns or *si* for personal nouns) attaches to the predicate using [nsubj](https://universaldependencies.org/u/dep/all.html#al-u-dep/nsubj) relation.
  * The core non-topic genitive/ergative argument (usually marked by the [ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP) for common nouns *ka* or for personal common nouns *ni*) attached to the predicate using the [obj](https://universaldependencies.org/u/dep/all.html#al-u-dep/obj) relation.
  * Non-core nominals are attached to the predicate using the [obl](https://universaldependencies.org/u/dep/all.html#al-u-dep/obl) relation (for common nouns *ka* or for personal common nouns *kay*).

### Non-Verbal Predicates

* In cases of non-verbal clauses (such as noun, adverb, or adjective phrases), these may be used as predicates in Tagabawa. The highest node of the clause is labeled as [root](https://universaldependencies.org/u/dep/all.html#al-u-dep/root), and all other nodes are connected to this node, similar to nodes connected to a verb. There is no copula.

## Treebanks

There are [N](../treebanks/bgs-comparison.html) Tagabawa UD treebanks:

  * [Tagabawa-A](../treebanks/bgs_a/index.html)
  * [Tagabawa-B](../treebanks/bgs_b/index.html)

## References
* DuBois, Carl & DuBois, Lauretta (1991). Tagabawa Grammar Essentials. Summer Insitute of Linguistics.
* Marfa, Geoffrey & Cooke, Mary Jane (2023). “Gemo Ni”: A Grammar Note on Tagabawa Verbs. In Journal of Social Work and Science Education. Vol 4 (2). Page 373-384. E-ISSN 2723-6919, P-ISSN 2746-0827
