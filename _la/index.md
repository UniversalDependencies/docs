---
layout: base
title:  'Latin UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Latin <span class="flagspan"><img class="flag" src="../../flags/svg/VA.svg" /></span>



## Tokenization and Word Segmentation

### _Index Thomisticus_ Treebank, LLCT and UDante

* The tokenization of the _Index Thomisticus_ Treebank (IT-TB) is inherited from that of the original _Index Thomisticus_ corpus by father Roberto Busa. In general, words are delimited by whitespace characters. Punctuations are assigned a token on their own. Description of exceptions follows.
* Words that include enclitics _-que_, _-ve_ or _-ne_ are split into two tokens, namely one for the word without the enclitics and one for the enclitics.
  Example: the word _corporique_ (lit. “and to the body”) is split into two tokens: _corpori_ and _que_.
  In the IT-TB, this is the only exception to the original tokenization provided by the _Index Thomisticus_. As of yet, mutliword tokens are missing from the IT-TB (but not LLCT nor UDante).
* Hyphenated compounds such as _necesse-esse_ are not split into two tokens. They are considered one token.
* Dots are not assigned a token on their own when they are part of an abbreviation (e.g., _etc._ and _metaph._).

### PROIEL

* In general, words are delimited by whitespace characters. There is no punctuation in the syntactic trees. The exception is words that include enclitics _-que_, _-ve_ or _-ne_ are split into two tokens, namely one for the word without the enclitics and one for the enclitics. Example: the word _corporique_ (lit. “and to the body”) is split into two tokens: _corpori_ and _que_.


### Perseus

* Tokenization is whitespace-based, with the exception of enclitic _-que_, _-ve_, and _-ne_ being split.


## Morphology

### Tags

**_Index Thomisticus_ Treebank, LLCT and UDante**

* The IT-TB uses 15 universal POS categories.
  Interjections ([`INTJ`](u-pos/INTJ)) and Symbols ([`SYM`](u-pos/SYM)) are not used.
* Among determiners ([`DET`](la-pos/DET)), we notice the peculiar  proto-article _ly_ (only IT-TB).
* We generally register only one main auxiliary verb ([`AUX`](la-pos/AUX)), the Classical _sum_ ("to be"). The form _iri_ (present passive infinitive of the verb _eo_, "to go"), Classically attested for the periphrastic future passive infinitive, is never used in the IT-TB and neither in the LLCT nor UDante. Also *habeo* 'to have', a later Romance innovation, does not appear as an auxiliary in the IT-TB nor in UDante, despite the time period, but does in the LLCT. The auxiliary *sum* is used in several types of constructions:
    * The copula with non-verbal predicates.
    * Periphrastic future active infinitive.
    * Periphrastic passive perfect indicative.
    * Periphrastic passive pluperfect indicative.
    * Periphrastic passive future perfect indicative.
    * Periphrastic passive perfect subjunctive.
    * Periphrastic passive plusperfect subjunctive.
    * Periphrastic perfect passive infinitive.
* In the IT-TB, _sum_ is the only lemma that occurs with the [`AUX`](la-pos/AUX) tag, and it always occurs as such. In some contexts, though (e.g. purely existential sentences), it is considered the head of the predication.
* Verbs with modal meaning are not considered auxiliaries in Latin.

**PROIEL**

* PROIEL uses 14 universal POS categories. Punctuation ([`PUNCT`](la-pos/PUNCT)), Particles ([`PART`](la-pos/PART)) and Symbols ([`SYM`](la-pos/SYM)) are not used.
* Among the traditional pronouns of Latin grammar, those that can occur adnominally are treated as detererminers [`DET`](la-pos/DET).
* The only intended auxiliary verb ([`AUX`](la-pos/AUX)) is _sum_ ("to be"), although in a few cases other verbs have ended up as auxiliaries due to errors in the conversion.


**Perseus**

* Perseus uses 12 POS tags. Notably, `DET`, `PART`, and `AUX` are not used.


### Nominal Features

**_Index Thomisticus_ Treebank, LLCT and UDante**

* Nominal words (common/proper nouns [`NOUN`](la-pos/NOUN)/[`PROPN`](la-pos/PROPN)) have an inherent [`Gender`](la-feat/Gender) feature with one of three values: `Masc`, `Fem` or `Neut`; pronouns [`PRON`](la-pos/PRON) might have one, but can also not express one (e.g. *ego* 'I', first singular person).
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [`ADJ`](la-pos/ADJ), [`DET`](la-pos/DET), [`NUM`](la-pos/NUM) (some),
    [`VERB`](la-pos/VERB) and possibly [AUX](la-pos/AUX) ([nominal forms](la-feat/VerbForm)).Only participles (including gerundives) inflect for gender in agreement with some head; so-called finite forms do not express this category.
* The two values of the [`Number`](la-feat/Number) feature are `Sing` and `Plur`. The following parts of speech inflect for number: [`NOUN`](la-pos/NOUN), [`PROPN`](la-pos/PROPN), [`PRON`](la-pos/PRON), [`ADJ`](la-pos/ADJ), [`DET`](la-pos/DET), [`NUM`](la-pos/NUM), [`VERB`](la-pos/VERB), [`AUX`](la-pos/AUX).
* [`Case`](la-feat/Case) has 7 possible values: nominative `Nom`, genitive `Gen`, dative `Dat`, accusative `Acc`, vocative `Voc` (marginal), locative `Loc` (marginal), ablative `Abl`.
  It occurs with nominal words, i.e., [`NOUN`](la-pos/NOUN), [`PROPN`](la-pos/PROPN), [`PRON`](la-pos/PRON), [`ADJ`](la-pos/ADJ), [`DET`](la-pos/DET), [`NUM`](la-pos/NUM), and also with attributive nominal forms of verbs ([`VERB`](la-pos/VERB)/[`AUX`](la-pos/AUX)) (participles, including gerundives/gerunds).

**PROIEL**

* As for _Index Thomisticus_, except PROIEL does not recognize a locative case in Latin.

**Perseus**

TODO

### Degree

**_Index Thomisticus_ Treebank, LLCT and UDante**

* [`Degree`](la-feat/Degree) applies to adjectives ([`ADJ`](la-pos/ADJ)), some adverbs ([`ADV`](la-pos/ADV)), and possibly determiners ([`DET`](la-pos/DET)), with the values of comparative `Cmp` and absolute superlative `Abs` (positive `Pos` is also traditionally considered a degree, but it is rather the absence of one). All these classes and nouns ([`NOUN`](la-pos/NOUN)) can show a diminutive degree; verbs ([`VERB`](la-pos/VERB)), in their nominal forms, can take any of the above mentioned values analogously.

**PROIEL**

* [`Degree`](la-feat/Degree) applies to adjectives ([`ADJ`](la-pos/ADJ)) and adverbs ([`ADV`](la-pos/ADV)).

**Perseus**

TODO


### Verbal Features

**_Index Thomisticus_ Treebank, LLCT and UDante**

* Verbs (both finite and non finite forms) have a lexical [`Aspect`](la-feat/Aspect), either imperfective (`Imp`; traditionally *infectum*), perfective (`Perf`), prospective (`Prosp`; traditionally also "future"; only on nominal forms), and possibly inchoative (`Inch`, if considered inflectional and not derivational).
* Finite verbs always bear one of three values of [`Mood`](la-feat/Mood): indicative `Ind` (*realis*), imperative `Imp` or subjunctive `Sub` (*irrealis*).
* There are five values of [`Tense`](la-feat/Tense): past `Past`, present `Pres`, pluperfect `Pqp` or future `Fut`.
* There are two values of the [`Voice`](la-feat/Voice) feature: active `Act` and passive `Pass`. Diathesis (voice) is tied to morphology, not syntax: this means that deponent verbs are always tagged for a passive voice.
* Verb forms are annotated by means of [VerbForm](la-feat/VerbForm), which distinguishes the so-called finite form `Fin` from nominal forms, oriented towards the possible other lexical parts of speech: participles `Part` (verbal `ADJ`; including gerundives and also gerunds), verb nouns (verbal `NOUN`; traditionally infinitives `Inf`, and possibly also supines) and converbs (verbal `ADV`; traditionally the active supine `Sup`).
* Since the annotation of verbal features in the UD formalism deviates in some points from traditional denominations, `TraditionalMood` and `TraditionalTense` features are implemented in the `MISC` field so as to ease the retrieval of verb forms according to a more classical schema.

**PROIEL**

* There are four values of [`Tense`](la-feat/Tense): `Past`, `Pres`, `Pqp` or `Fut`.
* There are two values of [`Aspect`](la-feat/Aspect): `Imp` and `Perf`.
* Traditional categories like the imperfect and the future perfect are decomposed into `Aspect=Imp|Tense=Past` and `Aspect=Perf|Tense=Fut`.

**Perseus**

TODO

### Pronouns, Determiners, Quantifiers

**_Index Thomisticus_ Treebank, LLCT and UDante**

* [`PronType`](la-feat/PronType) is used with pronouns ([`PRON`](la-pos/PRON)), determiners ([`DET`](la-pos/DET)), some numerals ([`NUM`](la-pos/NUM)), derived adverbs ([`ADV`](la-pos/ADV)), and in a more etymological sense also conjunctions ([`CCONJ`](la-pos/CCONJ)/[`SCONJ`](la-pos/SCONJ)).
* [`NumType`](la-feat/NumType) has four values: cardinal `Card`, distributive `Dist`, multiplicative `Mult`, ordinal `Ord`. `NumType` is used with numerals ([`NUM`](la-pos/NUM)), adjectives ([`ADJ`](la-pos/ADJ)) and adverbs ([`ADV`](la-pos/ADV)).
* The [`Poss`](la-feat/Poss) feature marks possessive personal adjectives (e.g. _noster_ 'ours').
* The [`Reflex`](la-feat/Reflex) feature marks reflexive elements such as _(sui)_.
* [`Person`](la-feat/Person) is a feature of finite verbs ([`VERB`](la-pos/VERB)/[`AUX`](la-pos/AUX)) and has three values, `1`, `2` and `3`.
* Also other features, mostly of lexical type, are used.

**PROIEL**

* [`PronType`](la-feat/PronType) is used with pronouns ([`PRON`](la-pos/PRON)) and relative and interrogative adverbs ([`ADV`](la-pos/ADV)).

**Perseus**

TODO

### Other Features

**_Index Thomisticus_ Treebank, LLCT and UDante**

Besides the layered features listed above, there are also the following language-specific features:

  * [`Abbr`](la-feat/Abbr) for abbreviations. One value: `Yes`. Example: _metaph._ (standing for _metaphysica_)
  * [`NumForm`](la-feat/NumForm) for Roman numerals. One value: `Roman`. Example: _VIII_ (Roman number for '8')
  * [`VerbType`](la-feat/VerbType) has been used for modals. One value: `Mod`. Example: _potest_ '(it/she/he) can'.


**Perseus**

TODO

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

**_Index Thomisticus_ Treebank, LLCT and UDante**

* Nominal subject ([`nsubj`](la-dep/nsubj)) is a noun phrase (possibly headed by a verbal nominal form) mostly in the nominative, but also in the accusative or ablative case (and actually not limited to that), without preposition.
  * Clausal subjects [`csubj`](la-dep/csubj) are very often expressed by means of [verb nouns](la-feat/VerbForm) ("infinitives"), but can also be finite predications and then nearly always introduced by a (subordinating) conjunction.
* Objects ([`obj`](la-dep/obj)) (core arguments) are bare noun phrases in the accusative. Secondary nominal objects ([iobj](la-dep/iobj)), also in the accusative, are a marginal and very restricted phenomenon in Latin (but the combination `obj` + [`ccomp`](la-dep/ccomp) is slightly more frequent).
    * A complement/adjunct distinction (not part of the UD formalism) is maintained by means of the subtyped relation [`obl:arg`](la-dep/obl-arg) for those complements which are not expressed as core arguments.
* All other arguments (usually other cases than nominative/accusative or prepositional phrases) are oblique ([obl](la-dep/obl)). Being in the accusative case is a necessary, but not sufficient condition to be `obj`: a particular case are for example the relational ("Greek-style") accusative noun phrases, but also temporal or locative arguments in the bare accusative.
* If a verb subcategorizes for the infinitive (e.g. modal verbs or verbs of control), the infinitival complement is labeled [xcomp](la-dep/xcomp).
* In passive clauses:
    * the subject is labeled with either [`nsubj:pass`](la-dep/nsubj-pass) or [`csubj:pass`](la-dep/csubj-pass);
    * the auxiliary verb in periphrastic passives is labeled with [`aux:pass`](la-dep/aux-pass);
    * if the agent is present, it has the form of an ablative noun phrase, possibly introduced by the preposition _ab_ 'by', and it is labeled [obl:agent](la-dep/obl-agent).

**PROIEL**

PROIEL maintains the following differences, more proper to the original LDT formalism, with respect to the points explained above. 

* Objects may be bare noun phrases in accusative, dative, genitive or ablative, or prepositional phrases. For the purpose of UD the objects are divided to core objects, labeled `obj` or `iobj`, and oblique objects, labeled `obl:arg`.
    * A bare accusative is considered core.
    * All prepositional objects are considered oblique.
    * If a verb subcategorizes for two core objects, one of them accusative (or `ccomp`) and the other non-accusative, then the non-accusative object is labeled `iobj`. Core nominal objects in other situations are labeled just `obj`.
* Adjuncts (or adverbial modifiers realized as noun phrases) are usually prepositional phrases, but they can be bare noun phrases as well. They are labeled `obl`. e.g.:
    * dative noun phrases with benefactive or possessive role (i.e. if the verb does not subcategorize for a single dative object and if it is not a verb of giving or similar, where the dative could be interpreted as the recipient).
    * ablative noun phrases expressing the way or means with which something was done.
    * all prepositional phrases that are not prepositional objects (i.e., their role and form is not defined lexically by the predicate) are adjuncts.
* In passive clauses, the agent is labeled with `obl:arg`.



**Perseus**

TODO

### Non-verbal Clauses

**_Index Thomisticus_ Treebank and PROIEL**

* The copula verb _sum_ 'to be' is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
* Purely existential clauses (without indicating location) use _sum_ as well, but this is treated as the head of the clause (and tagged [`VERB`](la-pos/VERB) instead of [`AUX`](la-pos/AUX) in PROIEL).

**LLCT and UDante**

The copula *sum* 'to be' is always [`AUX`](la-pos/AUX) and always annotated as a functional dependent with [cop](la-dep/cop) of the given (more) lexical word, barring elliptic constructions.


**Perseus**

TODO

### Relations Overview

**_Index Thomisticus_ Treebank, LLCT and UDante**

A selection of the more specific (and interesting) relation subtypes used in these treebanks:

  * [`acl:relcl`](la-dep/acl-relcl) for adnominal clauses functioning as relative clauses (which in Latin means that they contain a reference to the head by means of a so-called relative pronoun)
    * Note: adnominal clauses headed by participial verb forms do not receive the `:relcl` subtype.
* [`advcl:abs`](la-dep/advcl-abs) to highlight *ablativi absoluti* (embedded non-finite clauses whose subject does not also appear as argument in the matrix clause)
* [`advcl:cmp`](la-dep/advcl-cmp) for the standard of comparison expressed as a(n elliptic) clause
    * and similarly [`obl:cmp`](la-dep/obl-cmp) for purely nominal standards of comparisons
* [`advcl:pred`](la-dep/advcl-pred) secondary predications of all kind, including e.g. "conjunct participles" or "floating quantifiers" (embedded non-finite, possibly nominal, clauses whose subject is co-referent to an argument in the matrix clause)
    * [`xcomp:pred`](la-dep/xcomp-pred) secondary predications which is a core extension of the main predication
* [`ccomp:reported`](la-dep/ccomp-reported) for object clauses expressing direct speech
    * [`parataxis:reporting`](la-dep/parataxis-reporting) for the reversed phenomenon 
* [`csubj:relcl`](la-dep/csubj-relcl) for so-called free relatives acting as subjects, containing a "double pronoun"
    * so similarly [`ccomp:relcl`](la-dep/ccomp-relcl), [`xcomp:relcl`](la-dep/xcomp-relcl), [`advcl:relcl`](la-dep/advcl-relcl)
* [`advmod:emph`](la-dep/advmod-emph) for adverbs or particles that modify noun phrases and emphasize or negate them (focalisers)
* [`expl:pass`](la-dep/expl-pass) for reflexive clitics in reflexive passives (only IT-TB)
* [`obl:arg`](la-dep/obl-arg) for oblique arguments which are considered complements
* [`conj:expl`](la-dep/conj-expl) for appositive additions functioning as a expansions (also by repetition) of any element(the _scilicet 'that is' type)
* various subtypes of [`dislocated`](la-dep/dislocated) according to the original relation of the displaced element
* The following relation types are not used at all:
  [`clf`](), [`list`]()


**PROIEL**

 * [`aux:pass`](la-dep/aux:pass) for passive auxiliaries
 * [`csubj:pass`](la-dep/csubj:pass) for clausal subjects of passive verbs
 * [`flat:foreign`](la-dep/flat:foreign) for passages not in Latin (typically quoted passages in Greek)
 * [`flat:name`](la-dep/flat:name) for multi-token names
 * [`nsubj:pass`](la-dep/nsubj:pass) for nominal subjects of passive verbs
 * [`obl:agent`](la-dep/obl:agent) for the agent of passive verbs

**Perseus**

No subtypes are used.


## Treebanks

There are five Latin UD treebanks:

  * [Latin-ITTB](../treebanks/la_ittb/index.html)
  * [Latin-Perseus](../treebanks/la_perseus/index.html)
  * [Latin-PROIEL](../treebanks/la_proiel/index.html)
  * [Latin-LLCT](../treebanks/la_llct/index.html)
  * [Latin-UDante](../treebanks/la_udante/index.html)

## Documentation

The writing up of the Latin-specific documentation, detailing the guide lines pursued by the three currently active Latin treebanks (ITTB, LLCT and UDante), is a work in (slow) progress and has been focusing on the more language-specific issues and values, before going into the details of more universally defined elements. As of now, all research, setting of the guide lines and compilation of documentation pages is being performed by **Flavio M. Cecchini** (Università Cattolica del Sacro Cuore di Milano), so send any question, doubt or critic to `flavio.cecchini[at]unicatt[.]it`, or, better, open an issue on UD's [GitHub](https://github.com/UniversalDependencies/docs)!  




