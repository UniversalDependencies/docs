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

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

* Cebuano uses 16 of the UPOS tags. Auxiliary (AUX) is excluded.
* Several word types are classified as particles (PART). These fall under two categories:
  * Grammatical particles (linkers *nga* and *ka*)
  * Lexical particles (such as the question marker *ba*, negation marker *dili*, *ayaw*, *ambot*, *wala*)
* Quantifiers (including the plural marker *mga* and indefinite quantifiers such as *daghan* “many”) are classified as determiners (DET)
* Similar to other Philippine languages, Cebuano has nominal markers that function both as prepositions and articles. Calling these as markers is probably the safest classification instead of prepositions or articles or determiners, as the markers can function all of them. To parallel the Tagalog treebank, they are labeled as ADP. These markers are: 
  * The topic nominative/absolutive marker “ang”
  * The non-topic genitive/ergative marker “ug” or “sa”
  * The non-core oblique/dative marker that is also “ug” or “sa”

### Nominal Features

* Plurality is signaled, if overly stated, by the function word *mga*, hence *mga* expresses the *Number=Plur* feature and does not need for nouns (NOUN) and proper nouns (PROPN) to have Number=Plur. However, some affixation on nouns show number, and are not preceded with a *mga* marker anymore. In such occurences, the noun then has a *Number=Plur*.
* Pronouns (PRON) are marked for number with 3 possible values: *Sing*, *Dual*, *Plur*
* Some nouns (NOUN) and adjectives (ADJ) have Gender with 2 possible values: *Masc*, *Fem*.  This is usually loanwords from Spanish. Other nouns or adjectives do not have this feature.
* There is a debate about the names the case markers, depending to which morphosyntactic alignment you analyze Cebuano on. Some linguists would argue Philippine languages are ergative-absolutive, some would say nominative-accusative, and some would reject both and say there is an Austronesian alignment. To adopt the similarities of Tagalog, Cebuano has *Nom*, *Gen*, *Dat* as the 3 possible values for ADP.

### Degree and Polarity

* Degree applies to adjectives (ADJ) and has 2 possible values: *Pos*, *Sup*. *Cmp* (comparative form) is not formed morphologically
* Polarity is used to some existential verbs (VERBS), negation particles like *dili*, *ayaw*, *wala*, *ambot*, and response to interjection like *uu* and *dili*. It has 2 possible values: *Pos*, *Neg*.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---
### Verbal Features

* Verbs inflect according to Mood, Aspect (instead of Tense), and Voice.
* Verbs in the current data contains 3 possible mood values: *Ind* (indicative), *Imp* (imperative), *Pot* (potential).
* Aspect has 3 possible values: *Perf* (perfective), *Imp* (imperfective), *Prosp* (prospective)
* Voice is different in many Austronesian languages such as Cebuano as it does not follow the active-passive voice difference. Verbs “focus” on one specific argument, making it as the subject, but it does not transform the patient-like argument from a transitive clause to intransitive, and retains the agent-like argument, if present, is still a core argument. Since Tagalog has the same features, this is follows for Cebuano.  There are 4 possible values for Voice:
  * *Act* (actor-focused voice) where the actor is the topic of the sentence.
  * *Pass* (patient-focused voice) where the patient is the topic of the sentence.
  * *Lfoc* (locative-focused voice) where the location is the topic of the sentence.
  * *Ifoc* (instrumental-focused voice) where the instrument is the topic of the sentence.

### Pronouns, Determiners, Quantifiers

* PronType is used with pronouns (PRON), determiners (DET), and adverbs (ADV)
* NumType is used with cardinal numerals (NUM)
* Person is a feature for personal pronouns (PRON) and has 3 possible values: 1, 2, 3. Person is not marked on other types of pronouns or nouns, but they can be interpreted as they are in 3rd person.
* Clusivity is a feature in 1st personal plural and dual pronouns. It has 2 possible values: In (inclusive), Ex (exclusive).
* Deixis is a lexical feature of demonstratives (PRON, ADV) and has 3 possible values: Prox (proximate), Med (medial), Remt (remote or distal).

### Other Features

* PartType is used to distinguish the particles used in Cebuano. This excludes linkers even though they are considered as particles. For now, only *Int* (interrogative particles) such as ba or no are marked. 
* *Definitizer=Yes* feature is used for the definitizer suffix -a that attaches to words such as nouns, verbs or adjectives to make an object or modifier “definite”.
* *Neutral=Yes* feature is used for the neutral marker suffix -y that attaches to words like pronouns, verbs (especially existential verbs), adverbs and particles. 
* *Foreign=Yes* feature is used for words that are not natively Cebuano, usually English words that are used a substitute for Cebuano words. If an English word is naturally used in Cebuano and if there is a Cebuano translation but is not really commonly used (e.g. *travel document*) then it is not labeled as *Foreign=Yes* anymore

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

### Core Arguments and Adjuncts
* Like many Philippine languages, Cebuano uses the Austronesian voice system. In Cebuano, there are two core arguments, which are the topic argument and the non-topic argument. These are marked by prepositions (ADP), and affixation on the verb determines their semantic roles.
  * The core topic nominative/absolutive argument (usually marked by the ADP “ang” for common nouns or “si” for personal nouns) attaches to the predicate using nsubj relation.
  * The core non-topic genitive/ergative argument (usually marked by the ADP for common nouns “ug” or “sa” or for personal common nouns “ni”) attached to the predicate using the obj relation.
  * Non-core nominals are attached to the predicate using the *obl* relation.
  * Note that the ADP “ug” or “sa” can be both non-topic genitive/ergative argument and non-core dative/oblique argument, and can appear at the same in the sentence.


### Non-Verbal Predicates

* In cases of non-verbal clauses (such as noun, adverb, or adjective phrases), these may be used as predicates in Cebuano. The highest node of the clause is labeled as *root*, and all other nodes are connected to this node, similar to nodes connected to a verb. There is no copula.


---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

* In cases of non-verbal clauses (such as noun, adverb, or adjective phrases), these may be used as predicates in Cebuano. The highest node of the clause is labeled as root, and all other nodes are connected to this node, similar to nodes connected to a verb. There is no copula.


There are [N](../treebanks/ceb-comparison.html) Cebuano UD treebanks:

  * [Cebuano-A](../treebanks/ceb_a/index.html)
  * [Cebuano-B](../treebanks/ceb_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
