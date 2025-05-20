---
layout: base
title:  'Khoekhoe UD'
udver: '2'
---

# UD for Khoekhoe <span class="flagspan"><img class="flag" src="../../flags/svg/NA.svg" /></span>

## Tokenization and Word Segmentation

<!--
---

**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---
-->

* Words are generally delimited by whitespace. Description of exceptions follows.

* There are several cases of multiword-tokens (clitics):

    * Subject person-gender-number markers are placed in the second position in clauses. If something other than the subject root is in the first place, and the subject person-gender-number marker is non-syllabic, then the subject person-gender-number marker is written together with the previous word, but they are two separate words. Example: _Tsîb = xawe + s_ "but she."

    * In coordinate conjunctions, an additional conjunction contracted with a person-gender-number marker is sometimes added. For example, _tsîra = tsî + ra_ "and they."

    * Clause nominalization (usually _s_, but could be other person-gender-number markers) is written right after the clause without a whitespace and can take the oblique suffix _-a_. For example, _ǁgoesa = ǁgoe + sa_ "lying down."

    * Some subordinate clause markers (_se_ for clause of manner, _ga_ for clause of purpose, _o_ "when/if") are written at the end of the clause without a whitespace in between.

* According to typographical rules, punctuation marks are attached to a neighboring word. We usually tokenize them as separate tokens (words) with the exception of hyphens, which are sometimes used for compounds (_ǁkhopa-amgua_ "keys") and nominal suffixes (_ǁgam-i_ "water").

* There are no words with whitespace.

## Morphology

### Tags

<!--
---

**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV, or NOUN. Include links to language-specific tag definitions if any.

---
-->

<!-- This is an overview only. For more detailed discussion and examples, see the list of [Khoekhoe POS tags]() -->

* Khoekhoe uses 16 universal tags; the current data does not contain any occurrences of the `SYM` category.

* There are 6 word types marked as [PART](naq-pos/PART):

    * Quotation marker _ti_

    * Nominalizer _s_ preceding _tsîn(a)_ 'also'

    * Negation particle _tama_

    * Emphatic markers (e.g., _kha_ emphatic interrogative marker)

    * Negative tag question particle _tama-e_ 'NEG.TAGQ'

    * Temporal genitive linker _kam_

* Most auxiliaries ([AUX](naq-pos/AUX)) in Khoekhoe are not verbal. The only two verbal auxiliaries are _mâ_ "stand" and _sī_ "come." These are marked as [AUX](naq-pos/AUX) whenever they are not in the clause final position and have an indirect meaning. Most modal verbs act similarly to regular verbs (e.g., _ǁkhā_ "be able" and _ǁoa_ "be unable"), thus they are tagged [VERB](naq-pos/VERB). The exception is _moet_ "must", borrowed from Afrikaans, is allways in the auxiliary position, therefore it is tagged [AUX](naq-pos/AUX).

* In most cases, Khoekhoe determiners ([DET](naq-pos/DET)) do not have person-gender-number suffixes and precede a nominal (the same is true about adjectives), whereas pronouns ([PRON](naq-pos/PRON)) have person-gender-number suffixes. For example, the proximate demonstrative _nē_ in _nē ǂnamipeb_ "this area" is tagged as [DET](naq-pos/DET), whereas a proximate demonstrative pronoun _nēs_ is tagged as [PRON](naq-pos/PRON). The only exception to the rule is the determiner _hoa_ "all, both," which can follow the nominal that it modifies and get the same person-gender-number marker. For example, _tsaudi hoadi_ "all wells."

* No (de)verbal forms are present in Khoekhoe.

### Features

<!--
---

**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---
-->

<!-- This is an overview only. For more detailed discussion and examples, see the list of [Khoekhoe features]()-->

#### Nominal features

* Nominal words ([NOUN](naq-pos/NOUN), [PROPN](naq-pos/PROPN), [PRON](naq-pos/PRON)) inflect for [Case](naq-feat/Case) (`Nom`, `Acc`, `Voc`), [Gender](naq-feat/Gender) (`Masc`, `Neut`, `Fem`), [Number](naq-feat/Number) (`Sing`, `Dual`, `Plur`), [Assoc](naq-feat/Assoc) (`Yes`) and [Person](naq-feat/Person) (`1`, `2`, `3`) features.

    * [ADJ](naq-pos/ADJ) and [DET](naq-pos/DET) that follow nouns they modify also get those four features.

    * [NUM](naq-pos/NUM) that function as a nominal in a sentence also get those 4 features.

    * Some nominal [ADV](naq-pos/ADV) (like _tsîn(a)_ "also", _on(a)_ "too") and nominalizer _s_ (as [PART](naq-pos/PART) or [SCONJ](naq-pos/SCONJ)) have the [Case](naq-feat/Case) feature (only `Acc`, `Nom`), because they take the case of the whole noun phrase.

    * Some nominal [ADV](naq-pos/ADV) (like _ǀgui_ "only") may have all four nominal features, when they follow the nominal they modify.

* The [Degree](naq-feat/Degree) (`Dim`) feature can occur with [NOUN](naq-pos/NOUN). It can also occur with [ADJ](naq-pos/ADJ) and [VERB](naq-pos/VERB).

#### Verbal features

* [VERB](naq-pos/VERB) may have the [Voice](naq-feat/Voice) (`Act`, `Appl`, `ApplPass`, `ApplRcp`, `ApplRfl`, `Pass`, `Rcp`, `Rfl`) feature.

* [AUX](naq-pos/AUX) has one or more of the following features: [Aspect](naq-feat/Aspect) (`Imp`, `Perf`, `Punct`), [Evident](naq-feat/Evident) (`Nfh`), [Mood](naq-feat/Mood) (`App`, `Ass`, `Imp`, `Ind`, `Int`, `Pot`, `Prh`), and [Tense](naq-feat/Tense) (`Fut`, `Past`, `Pres`, `RecPast`).

#### Pronouns, Determiners, Quantifiers

* [PronType](naq-feat/PronType) (`Dem`, `Emp`, `Ind`, `Int`, `Neg`, `Prs`, `Rel`, `Tot`) is used with [PRON](naq-pos/PRON), [DET](naq-pos/DET), and [ADV](naq-pos/ADV).

* [Deixis](naq-feat/Deixis) (`Contr`, `Prox`, `Remt`) is used with [PRON](naq-pos/PRON), [DET](naq-pos/DET), and [ADV](naq-pos/ADV).

* [NumType](naq-feat/NumType) (`Card`, `Ord`) is used with [NUM](naq-pos/NUM) and [ADJ](naq-pos/ADJ).

* [Poss](naq-feat/Poss) (`Yes`) is used with [DET](naq-pos/DET) (_ti_ "my", _sa_ "your (sg.)") and associative [PRON](naq-pos/PRON) (_âta_, _âb_, etc.).

* [Clusivity](naq-feat/Clusivity) (`Ex`, `In`) is used with first-person plural personal [PRON](naq-pos/PRON).

#### Polarity

* [Polarity](naq-feat/Polarity) (`Neg`, `Pos`) is used to mark the negative [PART](naq-pos/PART) _tama_, the negative future [AUX](naq-pos/AUX) _tite_, the negative [INTJ](naq-pos/INTJ) _hî-î, nee_, and the positive [INTJ](naq-pos/INTJ) _ā, î, ja_.

#### Other features

* [Typo](naq-feat/Typo) (`Yes`) and [Abbr](naq-feat/Abbr) (`Yes`)  can be used with every part of speech.

* [ExtPos](naq-feat/ExtPos) (`ADP`, `ADV`, `CCONJ`, `DET`, `SCONJ`) can be used with [ADP](naq-pos/ADP), [DET](naq-pos/DET), [NOUN](naq-pos/NOUN), [PART](naq-pos/PART)

* The following universal features are not used in Khoekhoe: [Definite](naq-feat/Definite), [DeixisRef](naq-feat/DeixisRef), [Evident](naq-feat/Evident), [Foreign](naq-feat/Foreign), [NounClass](naq-feat/NounClass), [Polite](naq-feat/Polite), [VerbForm](naq-feat/VerbForm), [Voice](naq-feat/Voice).

## Syntax

<!--
---

**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---
-->

<!-- For more information, see the list of [Khoekhoe relations]().-->

### Core Arguments, Oblique Arguments and Adjuncts

* In Khoekhoe, the nominal subject is identified based on its person-gender-number marker. This marker appears in the second clause position as a suffix attached to the subject root if present. Otherwise, it's a separate clitic word. The actual lexical subject noun phrase ([nsubj](naq-dep/nsubj)) shares the same person-gender-number as the marker and lacks a postposition. It can appear in the first position with the nominative case or within the clause with the accusative (oblique) case. Omission of the lexical subject is also possible. When only the person-gender-number marker exists, it assumes the [nsubj](naq-dep/nsubj) role. However, if both the marker and the lexical subject are present, the person-gender-number marker is [expl](naq-dep/expl).

* The direct nominal object ([obj](naq-dep/obj)) appears in either of two forms:

    * with the accusative (oblique) case and no postposition, typically placed before the predicate;

    * as an object pronoun following the main predicate.

* If both object forms from above are present in the clause, then the object pronoun is typically an indirect nominal object ([iobj](naq-dep/iobj)) of the ditransitive verb. Otherwise, the indirect nominal object is one of the nominals with the accusative (oblique) case and no postposition, depending on the meaning.

* Adjuncts are usually postpositional phrases, but they can be bare noun phrases as well. They are labeled [obl](naq-dep/obl):

    * Temporal modifiers realized as accusative noun phrases: _ǁîb ge ǂû-e hō tamase **ǃnona tsēde** ge ǀgore._ "He prayed **for three days** without getting any food."

### Non-verbal Clauses

* The copula auxiliaries _a_ (present, could be omitted) and _i_ (non-present) are used for copulas of equation, attribution, possession, benefaction. Location and existance clauses use verbs _hâ_ "stay" or _ǀkhai_ 'be absent', which are treated as the head of the clause and tagged [VERB](naq-pos/VERB).

### Relations Overview

* The 13 relation subtypes used in Khoekhoe are:

    * [acl:relcl]() relative clause modifier
    * [advmod:emph]() emphasizing word, intensifier
    * [csubj:outer]() outer clausal subjects of predicates that are clauses
    * [csubj:pass]() clausal subjects of passive clauses
    * [expl:impers]() impersonal expletive
    * [flat:name]() names
    * [flat:num]() flat multiword number
    * [flat:reparandum]() repeated reparandum
    * [flat:title]() title
    * [iobj:appl]() applied indirect object
    * [nmod:poss]() possessive nominal modifier
    * [nsubj:outer]() outer clause nominal subject
    * [nsubj:pass]() for nominal subjects of passive clauses
    * [obj:appl]() applied direct object
    * [obl:agent]() for demoted agents in passive clauses

* The following relation types are not currently used in Khoekhoe: [clf](naq-dep/clf), [compound](naq-dep/compound), [dep](naq-dep/dep), [dislocated](naq-dep/dislocated).


## Treebanks

<!--
---

**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
-->

There is one Khoekhoe UD treebanks:

  * [Khoekhoe-KDT](../treebanks/naq_kdt/index.html)
