---
layout: base
title:  'Naga UD'
udver: '2'
---

<!-- Notes: 
* Should 'Suansu' be changed to 'Naga' everywhere? 
-->

# UD for Naga <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

<!--
---

**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---
-->

* Words in Suansu are generally delimited by whitespace or punctuation. Exceptions:

    * Multiword tokens occur in the case of clitics. The nominalizer _di_ is written after the verb complex without whitespace. For example, _mazokwoan ngamme<b>di</b>_ ("think.arrive + be able to + NMLZ = memory").

    * No words with internal whitespace appear in the current data.

## Morphology

### Tags

<!--
---

**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---
-->

<!-- This is an overview only. For more detailed discussion and examples, see the list of [Suansu POS tags]()-->

* Suansu employs 16 universal POS tags. The `SYM` category does not appear in the current dataset.


#### Adjectives

Definition: Adjectives are words that typically modify nouns and specify their properties or attributes. In Suansu, most adjectives are verbs. In Suansu, they follow nouns, for example _Peter <b>za tra</b> mohn mule_ ("Peter likes hot tea") and they can be used predicatively, where they behave like verbs, carrying tense and aspect values (_za trale_, "the tea is hot").

Suansu has no gender (see Features) and case and number markers occur at the end of the NP.


#### Adverbs

Definition: Adverbs are words that typically modify verbs for such categories as place, time, or manner. 

Suansu examples:
- _hano_ "here"
- _athwenan_ "now"
- _daichu_ "only"


#### Interjections

Definition: An interjection is a word that is used most often as an exclamation or part of an exclamation. It typically expresses an emotional reaction, is not syntactically related to other accompanying expressions, and may include a combination of sounds not otherwise found in the language.

Examples include borrowing like _ok_ "ok", _ay_ "yes", _wi_ and _dinan_, expressing frustration in the context of the respective clauses, and _ugh_ "ugh".

#### Nouns

Definition: Nouns are a part of speech typically denoting a person, place, thing, animal or idea.

The `NOUN` tag is intended for common nouns only. See [PROPN]() for proper nouns and [PRON]() for pronouns.

Gender is not a category in Suansu. There are remnants of gender specification on two nouns, _baneo_ "boy" and _leneo_ "girl". Given the exceptionality of these forms, we code the tokens as two distinct lemmas without including gender marking.

Nouns inflect for [Number]() (zero marked singular and overt plural) and [Case]().

Nominalization is a very productive process in Suansu, cf. _runghapha<b>di</b>_ "say.PST-PL-NMLZ" (the said things)

#### Verbs

Definition: A verb is a member of the syntactic class of words that typically signal events and actions, can constitute a minimal predicate in a clause, and govern the number and types of other constituents which may occur in the clause.

In the Suansu treebank we distinguish between content verbs and auxiliaries [AUX](). Suansu verbs do not take person nor number agreement: _A/Bu thale_ "I/They know".


See Verbal Features for detailed information on verbal categories.


#### Particles ([PART]())

* Negative particles, used for emphatic negation (_khama_) and tag questions and negative answers (_garhe_)
* Discourse particle: _lagu_ (marks pragmatic force)
* Reportative particles: _re_, _reha_ (used after quotes and labels)

#### Auxiliaries ([AUX]())

Suansu has eight non-verbal auxiliaries:

* Evidential markers: _gu_ (first-hand), _ga_ (non-first-hand)
* Imperative markers: _dai_, _ra_
* Hortative marker: _diga_
* Interrogative markers: _dima_, _la_
* Obligatory modality marker: _geraha_

The only verbal auxiliary is _la_ "be", which is used to express progressive with simultaneous converbs:

* _Peter Mariadi nungganan <b>lale</b>_ "Peter is fighting with Maria" – [progressive]

#### Determiners vs. Pronouns

* The [DET]() tag applies to words functioning as determiners, including demonstratives (_hai_, _tye_), indefinites (_kwehn_, _za_), total quantifiers (_mazohm_), reflexives (_drekhalai_, _khalailehnda_), and interrogatives (_mwe_, _gare_).
* The [PRON]() tag is reserved for words serving as the head of a noun phrase, including personal, demonstrative, indefinite, total, and interrogative pronouns.

#### (De)verbal Forms

Suansu distinguishes four main (de)verbal forms based on the [VerbForm]() feature:

* Finite verbs (`Fin`), tagged as [VERB]() or [AUX]()
* Infinitives (`Inf`), tagged as [VERB]() or [AUX]()
* Converbs (`Conv`), tagged as [VERB]() or [AUX]()
* Verbal nouns (`Vnoun`), tagged as [NOUN]()

### Features

<!--
---

**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---
-->

<!-- This is an overview only. For more detailed discussion and examples, see the list of [Suansu features]() -->

#### Nominal Features

* Nominals ([NOUN](), [PRON](), [PROPN]()) carry [Number]() (`Sing`, `Plur`), and can carry [Case]() (`Abl`, `Agn`, `Dat`, `DatAgn`, `Gen`, `GenAbl`, `Loc`, `Top`) and [Definite]() (`Def`).
* [ADJ]() and [NUM]() inherit nominal features of the whole noun phrase.
* [DET]() gets nominal features when it is the final element in a noun phrase.

#### Verbal Features

* [VERB]() and verbal auxiliary _la_ "be" ([AUX]()) may have features such as [Aspect]() (`Imp`, `Perf`, `Sim`), [Modal]() (`Abil`, `Perm`, `Poss`), [Mood]() (`Imp`, `Ind`), and [Tense]() (`Past`, `Pres`).
* All verbal features also appear on [ADP]() and [ADV]() in phrasal verb particles.
* Mood auxiliaries have [Mood]() (`Des`, `Jus`, `Hort`, `Imp`, `Int`, `Irr`) feature.
* The evidential auxiliaries _gu_ and _ga_ use the [Evident]() (`Fh`, `Nfh`) feature.

* The obligatory modal auxiliary _geraha_ has the [Modal]() (`Obl`) feature.

#### Pronouns, Determiners, and Quantifiers

* [PronType]() (`Dem`, `Ind`, `Int`, `Prs`, `Tot`) is used with [PRON](), [DET](), and [ADV]().
* Personal pronouns have the [Person]() feature in addition to [Case](), [Definite](), and [Number]().
* Demonstratives have [Deixis]() (`Prox`, `Remt`).
* [Reflex]() is used with reflexive [DET]()


#### Other Features

* [Degree]() (`Cmp`, `Pos`) is used with [ADJ]().
* [Polarity]() (`Neg`) is used on negative [PART]() and [INTJ]() and on the last word in the clause ([VERB](), [AUX](), etc.). [Polarity]() (`Pos`) is used on positive [INTJ]() (e.g., _ay_ "yes").
* The [Foreign]() feature is applied to foreign words tagged as [X]().
* The following universal features are currently not used in Suansu: [Animacy](), [Clusivity](), [DeixisRef](), [ExtPos](), [Gender](), [NounClass](), [Polite](), [Poss](), [Typo](), [Voice]().

## Syntax

<!--
 ---

**Instruction**: Provide criteria for identifying core arguments (subjects and objects) and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---
-->

<!-- For more information, see the list of [Suansu relations](). -->

### Core Arguments, Oblique Arguments, and Adjuncts

<!-- TODO check: -->

* A nominal subject ([nsubj]()) is a noun phrase, typically in the first position of a clause. It can have an Agent case (_-nan_), a Topic case (_-di_), or no case marking, and it does not have a postposition.

    * Intransitive predicates usually have subjects with the Topic case, though it can be omitted.

    * Transitive predicates usually have subjects with the Agent case, though it can be omitted.

    * A finite subordinate clause can serve as the subject and is labeled [csubj]().

* For transitive predicates, the other argument (the one that is not the subject) is the direct object ([obj]()). It is usually in the second position of the clause, has a Topic case or no case marking, and does not have a postposition.

* Indirect nominal objects ([iobj]()) of ditransitive predicates usually have the Dative case (_-la_), though it can be omitted.

* Adjuncts are either postpositional phrases or bare nominals with cases other than Agent, Topic, or Dative, or with omitted case marking. They are labeled [obl]().

### Non-verbal Clauses

<!-- TODO: Confirm non-verbal clause structure -->

Nominalized clauses



### Relations Overview

* The following relation subtypes are used in Suansu:

    * [acl:relc]() - relative clause modifier
    * [advmod:emph]() - emphasizing word, intensifier
    * [compound:prt]() - phrasal verb particle
    * [compound:svc]() - serial verb compounds
    * [csubj:outer]() - outer clause clausal subject
    * [flat:foreign]() - foreign words
    * [flat:name]() - multiword names
    * [nmod:poss]() - possessive nominal modifier
    * [nsubj:outer]() - outer clause nominal subject

* The following relation types are not currently used in Suansu: [clf](), [cop](), [dep](), [dislocated](), [expl](), [fixed](), [goeswith](), [list]().

## Treebanks

<!--
---

**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
-->

There i [one](../treebanks/nmf-comparison.html) Naga UD treebanks:

  * [Naga-Suansu](../treebanks/nmf_suansu/index.html)
