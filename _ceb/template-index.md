---
layout: base
title:  'Cebuano UD'
udver: '2'
---

# UD for Cebuano <span class="flagspan"><img class="flag" src="../../flags/svg/PH.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace but with exceptions:
  * Compound words and full reduplications that are separated by a hyphen are tokenized as multi-word tokens (e.g. *adis* + *-* + *adis*) if each word can be taken as a separate semantic expression forming a whole.
  * Occurrences of the linker *nga*, and case markers *ug* and *ang*, that are supposed to be attached to a word are tokenized as multi-word tokens (e.g. *ako* + *-ng*).
  * Occurrences of the definitizer suffix (-a in “lenggwahe<b>a</b>”) and neutral marker (-y in “ika<b>y</b>”) are part of the tokens but marked as a feature.
  * Words with spaces do not regularly occur in Cebuano.

## Morphology

* Cebuano uses 16 of the UPOS tags. Auxiliary ([AUX](https://universaldependencies.org/u/pos/all.html#al-u-pos/AUX)) is excluded.
* Several word types are classified as particles ([PART](https://universaldependencies.org/u/pos/PART.html)). These fall under two categories:
  * Grammatical particles (linkers *nga* and *ka*)
  * Lexical particles (such as the question marker *ba*, negation marker *dili*, *ayaw*, *ambot*, *wala*)
* Quantifiers (including the plural marker *mga* and indefinite quantifiers such as *daghan* “many”) are classified as determiners ([DET](https://universaldependencies.org/u/pos/DET.html))
* Similar to other Philippine-type languages, Cebuano has nominal markers that function both as prepositions and articles. Calling these as markers is probably the safest classification instead of prepositions, articles or determiners, as the markers can function all of them. To parallel the Tagalog treebank, they are labeled as ([ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP)). These markers are: 
  * The topic nominative/absolutive marker *ang*
  * The non-topic genitive/ergative marker *ug* or *sa*
  * The non-core oblique/dative marker that is also *ug* or *sa*

### Nominal Features

* Plurality is signaled, if explicitly stated, by the function word *mga*, hence *mga* expresses the `Number=Plur` feature and does not need for nouns ([NOUN](https://universaldependencies.org/u/pos/all.html#al-u-pos/NOUN)) and proper nouns ([PROPN](https://universaldependencies.org/u/pos/all.html#al-u-pos/PROPN)) to have `Number=Plur`. However, some affixations on nouns show number, and are not preceded with a *mga* marker anymore. In such occurences, the noun then has a `Number=Plur`.
* Pronouns ([PRON](https://universaldependencies.org/u/pos/all.html#al-u-pos/PRON)) are marked for number with 3 possible values: `Sing`, `Dual`, `Plur`
* Some nouns ([NOUN](https://universaldependencies.org/u/pos/all.html#al-u-pos/NOUN)) and adjectives ([ADJ](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADJ)) have [Gender](https://universaldependencies.org/u/feat/all.html#al-u-feat/Gender) with 2 possible values: `Masc`, `Fem`. This is usually loanwords from Spanish. Other nouns or adjectives do not have this feature.
* There is a debate about the names of the case markers, depending to which morphosyntactic alignment is subscribed to when analyzing Cebuano. Some linguists would argue Philippine-type languages are ergative-absolutive, some would say nominative-accusative, and some would reject both and say there is an Austronesian alignment. To adopt the similarities of Tagalog, Cebuano has `Nom`, `Gen`, `Dat` as the 3 possible values for ([ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP)).

### Degree and Polarity

* ([Degree](https://universaldependencies.org/u/feat/all.html#al-u-feat/Degree)) applies to adjectives ([ADJ](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADJ)) and has 2 possible values: `Pos`, `Sup`. `Cmp` (comparative form) is not formed morphologically
* ([Polarity](https://universaldependencies.org/u/feat/all.html#al-u-feat/Polarity)) is used to some existential verbs ([VERBS](https://universaldependencies.org/u/pos/all.html#al-u-pos/VERB)), negation particles like *dili*, *ayaw*, *wala*, *ambot*, and response to interjection like *uu* and *dili*. It has 2 possible values: `Pos`, `Neg`.

### Verbal Features

* Verbs ([VERBS](https://universaldependencies.org/u/pos/all.html#al-u-pos/VERB)) inflect according to [Mood](https://universaldependencies.org/u/feat/all.html#al-u-feat/Mood), [Aspect](https://universaldependencies.org/u/feat/all.html#al-u-feat/Aspect) (instead of [Tense](https://universaldependencies.org/u/feat/all.html#al-u-feat/Tense)), and [Voice](https://universaldependencies.org/u/feat/all.html#al-u-feat/Voice).
* Verbs ([VERBS](https://universaldependencies.org/u/pos/all.html#al-u-pos/VERB)) in the current data contains 3 possible mood values: `Ind` (indicative), `Imp` (imperative), `Pot` (potential).
* [Aspect](https://universaldependencies.org/u/feat/all.html#al-u-feat/Aspect) has 3 possible values: `Perf` (perfective), `Imp` (imperfective), `Prosp` (prospective)
* [Voice](https://universaldependencies.org/u/feat/all.html#al-u-feat/Voice) is different in many Austronesian languages such as Cebuano as it does not follow the active-passive voice difference. [Verbs](https://universaldependencies.org/u/pos/all.html#al-u-pos/VERB) “focus” on one specific argument, making it as the subject, but it does not transform the patient-like argument from a transitive clause to intransitive, and retains the agent-like argument, if present, is still a core argument. This feature is similar to Tagalog. There are 4 possible values for `Voice`:
  * `Act` (actor-focused voice) where the actor is the topic of the sentence.
  * `Pass` (patient-focused voice) where the patient is the topic of the sentence.
  * `Lfoc` (locative-focused voice) where the location is the topic of the sentence.
  * `Ifoc` (instrumental-focused voice) where the instrument is the topic of the sentence.

### Pronouns, Determiners, Quantifiers

* [PronType](https://universaldependencies.org/u/feat/all.html#al-u-feat/PronType) is used with pronouns ([PRON](https://universaldependencies.org/u/pos/all.html#al-u-pos/PRON)), determiners ([DET](https://universaldependencies.org/u/pos/DET.html)), and adverbs ([ADV](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADV))
* [NumType](https://universaldependencies.org/u/feat/all.html#al-u-feat/NumType) is used with cardinal numerals ([NUM](https://universaldependencies.org/u/pos/all.html#al-u-pos/NUM))
* [Person](https://universaldependencies.org/u/feat/all.html#al-u-feat/Person) is a feature for personal pronouns ([PRON](https://universaldependencies.org/u/pos/all.html#al-u-pos/PRON)) and has 3 possible values: `1`, `2`, `3`. Person is not marked on other types of pronouns or nouns, but they can be interpreted as they are in 3rd person.
* [Clusivity](https://universaldependencies.org/u/feat/all.html#al-u-feat/Clusivity) is a feature in 1st personal plural pronouns. It has 2 possible values: `In` (inclusive), `Ex` (exclusive).
* [Deixis](https://universaldependencies.org/u/feat/all.html#al-u-feat/Deixis) is a lexical feature of demonstratives (PRON, ADV) and has 3 possible values: `Prox` (proximate), `Med` (medial), `Remt` (remote or distal).

### Other Features

* [PartType](https://universaldependencies.org/u/feat/all.html#al-u-feat/PartType) is used to distinguish the particles used in Cebuano. This excludes linkers even though they are considered as particles. For now, only `Int` (interrogative particles) such as ba or no are marked. 
* *Definitizer*`=Yes` feature is used for the definitizer suffix -a that attaches to words such as nouns, verbs or adjectives to make an object or modifier “definite”.
* *Neutral*`=Yes` feature is used for the neutral marker suffix -y that attaches to words like pronouns, verbs (especially existential verbs), adverbs and particles. 
* [Foreign](https://universaldependencies.org/u/feat/all.html#al-u-feat/Foreign)`=Yes` feature is used for words that are not natively Cebuano, usually English or Spanish words that are used a substitute for Cebuano words. If an English word is naturally used in Cebuano sentences and if there is a Cebuano translation but is not really commonly used (e.g. *travel document*) then it is not labeled as `Foreign=Yes` anymore

## Syntax

### Core Arguments and Adjuncts
* Like many Philippine-type languages, Cebuano uses the Austronesian voice system. In Cebuano, there are two core arguments, which are the topic argument and the non-topic argument. These are marked by prepositions ([ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP)), and affixation on the verb determines their semantic roles.
  * The core topic nominative/absolutive argument (usually marked by the [ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP) *ang* for common nouns or *si* for personal nouns) attaches to the predicate using [nsubj](https://universaldependencies.org/u/dep/all.html#al-u-dep/nsubj) relation.
  * The core non-topic genitive/ergative argument (usually marked by the [ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP) for common nouns *ug* or *sa* or for personal common nouns *ni*) attached to the predicate using the [obj](https://universaldependencies.org/u/dep/all.html#al-u-dep/obj) relation.
  * Non-core nominals are attached to the predicate using the [obl](https://universaldependencies.org/u/dep/all.html#al-u-dep/obl) relation.
  * Note that the [ADP](https://universaldependencies.org/u/pos/all.html#al-u-pos/ADP) *ug* or *sa* can be both non-topic genitive/ergative argument and non-core dative/oblique argument, and can appear at the same instance in the sentence.


### Non-Verbal Predicates

* In cases of non-verbal clauses (such as noun, adverb, or adjective phrases), these may be used as predicates in Cebuano. The highest node of the clause is labeled as [root*](https://universaldependencies.org/u/dep/all.html#al-u-dep/root), and all other nodes are connected to this node, similar to nodes connected to a verb. There is no copula.



## Treebanks


There are [N](../treebanks/ceb-comparison.html) Cebuano UD treebanks:

  * [Cebuano-A](../treebanks/ceb_a/index.html)
  * [Cebuano-B](../treebanks/ceb_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
