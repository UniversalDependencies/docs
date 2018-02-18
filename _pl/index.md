---
layout: base
title:  'Polish UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

:zap: __ATTENTION: This page is currently (as of 18 February 2018) being revised, so it may be in an inconsistent state at the moment.  Please come back later.__ :zap:

# UD for Polish <span class="flagspan"><img class="flag" src="../../flags/svg/PL.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, a punctuation mark is attached to a neighbouring (usually preceding) word. Punctuation marks are usually tokenised as separate tokens (words), unless they are considered an integral part of the lemma (as in _Rolls-Royce_ “Rolls-Royce”, _O’Donellowie_ “the O'Donells”, or _85-lecie_ “85th anniversary”) or are used to express inflection (as in the accusative or genitive _Melville'a_ “Melville”).  On the other hand, hyphens in constructions such as _biało-czerwona_ “white-and-red” are treated as separate tokens.
* A whitespace separating digits in a large number is not treated as a word separator. For example, _1&nbsp;000&nbsp;000_ (“1,000,000” by English rules) is one token. (However, such tokens do not occur in Polish treebanks as of release 2.2.)
* There are two classes of contractions that are treated as multi-word tokens and segmented to individual syntactic words.
  * The most prominent type is an l-participle (or, rarely, another form) fused with a so-called “mobile inflection” auxiliary (e.g., _śmy_ expressing first person and plural number) or the conditional particle _by_ (also treated as an auxiliary), as in: _wyprodukowalibyśmy = wyprodukowali + by + śmy_ “we would have produced”.
  * Contractions of the other class consist of a preposition and a short (de-accented) pronouns, as in _czekał nań = czekałem na + ń_ “(he) waited for him”.

## Morphology

### Tags

* Polish in principle uses all 17 universal POS categories, although, as of release 2.2, [SYM]() is used in neither of the two available treebanks, [X]() is only used in the [Original](http://universaldependencies.org/treebanks/pl/index.html) treebank (to mark abbreviations), and [INTJ]() is only used in the [LFG](http://universaldependencies.org/treebanks/pl_lfg/index.html) treebank.
* The [NOUN]() tag is used not only for prototypical nouns, but also – somewhat arbitrarily – for gerunds (the so-called _-nie/-cie_ forms).
* Pronouns ([PRON]()) are here understood as personal pronouns, so-called reflexive pronouns (also in their non-reflexive and – generally – non-pronominal uses), and such nominal pronouns as _kto_ “who”, _nic_ “nothing” and _wszyscy_ “everybody”.
* As Polish grammars do not include a separate part of speech _determiner_, the [DET]() class is based on a word list and includes words treated by standard Polish tagsets as adjectives, numerals or even nouns:
  * determiners treated elsewhere as adjectives include possessive pronouns, as well as words such as _ten_ “this”, _każdy_ “each”, _taki_ “such”, _którykolwiek_ “whichever”, etc.,
  * determiners treated elsewhere as numerals include indefinite numerals (e.g., _wiele_ “many”, _niedużo_ “not much, not many”, _kilka_ “several”), as well as fractional numerals such as _pół_ “half”,
  * one determiner treated elsewhere as a noun is _mnóstwo_ “a lot”.
* The main auxiliary verb ([AUX]()) in Polish is _być_ (“to be”), with the aspectual variant _bywać_ “to be (habitual)”.
  The auxiliary verb is used in several types of constructions:
  * the copula with non-verbal predicates,
  * periphrastic future tense (future form of _być_ + infinitive or so-called l-participle form of the main verb),
  * periphrastic conditional (conditional form of _być_ + l-participle of the main verb),
  * (imperfective) periphrastic passive (any form of _być_, including periphrastic forms, + passive participle of the main verb).
  Another auxiliary, _zostać_ “become” (and its habitual version _zostawać_), is used for the perfective periphrastic passive (any form of _zostać_ + passive participle of the main verb).  Additionally, mood markers _by_ (conditional) and _niech_ (imperative, also its variant _niechaj_) are marked as `AUX`, as are the copular uses of _to_ (usually, but inappropriately in this context, translated as “this”).
* The words _być_, _bywać_, _zostać_ and _zostawać_ may also occur as normal [VERB]() if they are used in purely existential sentences
  (i.e. ones that don't even indicate location because if they do, then they shoul be treated as copulae).
* Verbs with modal meaning are not considered auxiliary in Polish.
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Converb `Conv` (an adverbial participle), tagged [VERB]() or (in principle, but not in release 2.2) [AUX]().
  * Participle `Part` (an adjectival participle), tagged [ADJ]().
  * Verbal noun `Vnoun` (a gerund), tagged [NOUN]().
* Inherently impersonal forms ending in _-no/-to_ (a specialty of Polish and Ukrainian) are marked as finite verbs with `Person=0` (and `Tense=Past`).

### Nominal Features

* Nouns words ([NOUN]() and [PROPN]()) have an inherent [Gender]() feature.  Five genders are standardly assumed in Polish linguistics (and in Polish tagsets): three masculine, one feminine and one neuter.  The three masculine genders are often called “human masculine”, “animate masculine” and “inanimate masculine”, but the correlation with the semantic animacy feature is far from perfect.  In particular, there are many “animate masculine” semantically inanimate nouns (including all masculine names of dances, and many more), as well as “animate masculine” nouns which are, semantically, human and feminine (some derogatory nouns for women, e.g., _babsztyl_) or which are human and no longer animate (_trup_ “corpse”).  For the sake of cross-linugal consistency, three values are assume for the `Gender` feature, i.e., `Masc`, `Fem` and `Neut`, but there must be another feature which distinguishes the three masculine genders.
  * In the [Original](http://universaldependencies.org/treebanks/pl/index.html) treebank, the masculine gender is further subclassified by the [Animacy]() values `Hum`, `Nhum` and `Inan`.
  * In the [LFG](http://universaldependencies.org/treebanks/pl_lfg/index.html) treebank, the masculine gender is further subclassified by the language-specific [SubGender]() feature with values `Masc1`, `Masc2` and `Masc3`.
  * The following parts of speech in general inflect for gender (they agree with nouns): [ADJ](), [DET](), [NUM](), [PRON](), [VERB](), [AUX](). In the case of pronouns, only personal pronouns inflect for gender; other nominal pronouns (as well as the nominal determiner _wszyscy_ “everybody”) have this feature defined lexically, and so-called reflexive pronouns lack this feature altogether.  In the case of tokens tagged as `VERB` or `AUX`, only past forms of finite verbs overtly inflect for gender.
* The two values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (only finite verbs and auxiliaries).
* [Case]() has 7 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Voc`, `Loc`, `Ins`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
  It can occur with de-verbal forms but only with those tagged as `ADJ` (adjectival participles) or `NOUN` (gerunds).  It never occurs with purely verbal forms.
  * Some tagsets also include `Case` as a feature of prepositions ([ADP]()), although in this case it is a valency (i.e., syntactic rather than morphological) feature.  As such, as of release 2.2, it is only present in the MISC column in the [LFG](http://universaldependencies.org/treebanks/pl_lfg/index.html) treebank (but still in the FEATS column in the [Original](http://universaldependencies.org/treebanks/pl/index.html) treebank).
* [Polite]() is used in Polish as a nominal feature, with the language-specific value `Depr` in case of special derogatory forms of some human masculine nouns, e.g., _profesory_ “professors (derogatory)”, as opposed to _profesorowie_ “professors (neutral)”.

### Pronouns, Determiners, Numerals

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()), as well as with the word _co_ when it plays the dual role of a complementiser ([SCONJ]()) introducing a special kind of relative clause (one that may involve resumptive pronouns).
* [NumType]() (`Card` or `Frac`) is used with numerals ([NUM]()) and determiners ([DET]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _mój_ “my”).
* The [Reflex]() feature marks so-called reflexive pronouns _(się, sobie)_ and determiners _(swój)_, even when they are not used reflexively.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* A [layered feature](../../u/overview/feat-layers.html), [Number[psor]](),
  appears with certain possessive determiners and encodes the lexical number of the possessor.
  The extra layer is needed to distinguish this lexical number from the inflectional number
  that marks agreement with the modified (possessed) noun.

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has two values, `Pos` and `Neg`, and applies to de-verbal adjectives ([ADJ](); i.e., adjectival participles) and nouns ([NOUN](); i.e., gerunds), which can be negated using the bound morpheme _nie_.
  * Often, _nie_ occurs as an independent negation particle ([PART]()) and is marked with `Polarity=Neg`.
  * The `Polarity` feature is not used with pronouns, determiners or adverbs, although there is a subset of traditional pronouns (hence, here, elements of various parts of speech) which are negative in the sense that they have a negative meaning when used as standalone utterances but do not introduce additional negation when they occur with negated verbs (i.e., when they participate in so-called negative concord).  The `PronType=Neg` feature is used for such cases.

### Verbal Features

* Typical Polish verbs (including auxiliaries) have lexical [Aspect](), either imperfective (`Imp`) or perfective (`Perf`). There is, however, a class of verb-like words, marked as [VERB]() with the universal `VerbType` feature with the language-specific `Quasi` value, which do not inflect for person and do not have aspect.
  * The `Aspect` feature is also used with the corresponding derived nouns (gerunds) and adjectives (participles), if they have the `VerbForm` feature.
* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Cnd`. The conditional mood is only used with conditional
  auxiliary _(by)_. The finite part of the auxiliary, if present _(m, ś, śmy, ście),_ as well as the l-participle of the main verb, needed to form a periphrastic conditional,
  are not marked with this feature.
* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Pres` or `Fut`.
  Note that `Tense=Pres` is also used with forms of perfective verbs, which are formally present, but semantically future.
  Hence both _idę do domu_ “I am going home” and _przyjdę do domu_ “I will come home” end up marked as `Tense=Pres`.
  On the other hand, a few imperfective verbs can form a genuine future form using prefixes, and they are marked `Tense=Fut`:
  _pójdę do domu_ “I will go home”.
  * Imperative and conditional forms do not have the `Tense` feature (note that past and present conditionals are distinguished analytically).
  * The `Tense` feature is also used to distinguish present and past converbs (_robiąc_ “while doing” vs. _zrobiwszy_ “having done”),
    and present and past participles (_robiący_ “doing” vs. _zrobiwszy_ “having done”).
    The l-participle (tagged `VERB` or `AUX`) also has `Tense=Past` because its primary function is to form the past tense.
    The passive participle does not have the `Tense` feature.
* There are two values of the [Voice]() feature: `Act` and `Pass`. Only the passive participle has `Voice=Pass`. All other verb forms have `Voice=Act`.

### Other Features

* Other universal features used in Polish include:
  * [AdpType]() – almost always `Prep`, but in the case of the adposition _temu_ “ago” it is `Post`.
  * [Hyph]() – marks forms such as _biało_ “white" in _biało-czerwony_ “white-and-red”.
  * [PartType]() – used (as of release 2.2, only in the [LFG](http://universaldependencies.org/treebanks/pl_lfg/index.html) treebank) only to mark question particles (`Int`).
  * [PrepCase]() – distinguishes those pronominal forms which may only occur as dependents of prepositions (`Pre`) from those which may only occur in other contexts (`Npr`).
  * [PunctSide]() and [PunctType]()
  * [Typo]() – marks typos (as of release 2.2, only used in the [Original](http://universaldependencies.org/treebanks/pl/index.html) treebank).
* The following universal features are not used in Polish: [Definite](), [Evident]().
* Apart from [SubGender](), other language-specific features include:
  * [Agglutination]() – distinguishes these rare situation where the l-participle has different forms depending on whether the “mobile inflection” auxiliary attaches to it or not, e.g., _on mógł_ “he could” (`Agglutination=Nagl`) vs. _mogł_ in _ja mogłem_ “I could” (`Agglutination=Agl`); as of release 2.2, only used in the [LFG](http://universaldependencies.org/treebanks/pl_lfg/index.html) treebank).
  * [Emphatic]() – present on those traditional pronouns (hence, various parts of speech here) which include the emphatic particle _ż(e)_, e.g., _co_ “what” (neutral) vs. _cóż_ “what” (emphatic); as of release 2.2, only used in the [LFG](http://universaldependencies.org/treebanks/pl_lfg/index.html) treebank).
  * [Variant]() – distinguishes short and long forms of adjectives, a Slavic-wide phenomenon; in Polish also used to distinguish basic from vocalised versions of some pronouns (e.g., _z_ vs. _ze_ “from”), basic from vocalised versions of the “mobile inflection” auxiliary (e.g., _m_ from _em_), and short (not accentable) from long (accentable) forms of some pronouns.


## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without preposition.
  * If the noun phrase is quantified, it may be in the genitive, which is required by the quantifier.
    If this is the case, then the quantifier is attached using a special relation, either [nummod:gov]() or [det:numgov]().
  * An infinitive verb may serve as the subject and is labeled as clausal subject, [csubj]().
    On the other hand, verbal nouns as subjects are just `nsubj`.
  * A finite subordinate clause may serve as the subject and is labeled `csubj`.
* Objects defined in the Polish grammar may be bare noun phrases in accusative, dative, genitive or instrumental,
  or prepositional phrases in accusative, dative, genitive, locative or instrumental.
  For the purpose of UD the objects are divided to core objects, labeled [obj]() or [iobj](),
  and oblique objects, labeled [obl:arg]().
  * Bare accusative, dative, genitive and instrumental objects are considered core.
  * All prepositional objects are considered oblique.
  * Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
  * If a verb subcategorizes for the infinitive (e.g. modal verbs or verbs of control), the infinitival complement is labeled [xcomp]().
  * If a verb subcategorizes for two core objects, one of them accusative (or `ccomp`) and the other non-accusative,
    then the non-accusative object is labeled [iobj]().
    Core nominal objects in other situations are labeled just [obj]().
* Adjuncts (or, following the Polish grammar, adverbial modifiers realized as noun phrases) are usually
  prepositional phrases, but they can be bare noun phrases as well. They are labeled [obl]():
  * Temporal modifiers realized as accusative noun phrases: _poszukiwania trwały całą niedzielę_ “the search lasted all Sunday.”
  * Instrumental noun phrases expressing the way or means with which something was done.
    Example: _wymalują je sprayami na chodnikach_ “they will spray them on the sidewalks.”
  * All prepositional phrases that are not prepositional objects (i.e., their role and form is not defined lexically by the predicate)
    are adjuncts.
* Extra attention has to be paid to clitic forms of reflexive pronouns _się_ (accusative). They can function as:
  * Core objects ([obj]()): _zobaczył się/siebie w lustrze_ “he sighted himself in the mirror.”
  * Reciprocal core objects (`obj`): _całowali się_ “they were kissing each other.”
  * Reflexive passive ([expl:pass]()): _kasa otwiera się_ “the ticket window is opening,” lit. “the ticket window opens itself.”
  * Inherently reflexive verb, cannot exist without the reflexive clitic. In accord with the current UD guidelines, we label the relation
    between the verb and the clitic as [expl:pv](), not `compound`. Example: _śmiała się_ “she laughed.”
* In passive clauses (both reflexive and periphrastic passive), the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().
  * If the demoted agent is present, it has the form of a bare instrumental phrase and its relation is labeled [obl:agent]().

### Non-verbal Clauses

* The copula verb _być_ (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  Purely existential clauses (without indicating location) use _być_ as well but it is treated as the head of the clause and tagged [VERB]().

### Relations Overview

* The following relation subtypes are used in Polish:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [obl:arg]() for prepositional objects
  * [expl:pv]() for reflexive clitics of inherently reflexive verbs
  * [expl:pass]() for reflexive clitics in reflexive passives
  * [aux:pass]() for passive auxiliaries
  * [nummod:gov]() for cardinal numbers that are attached as children of the counted noun but govern its case
  * [det:numgov]() for pronominal quantifiers that are attached as children of the quantified noun but govern its case
  * [det:nummod]() for pronominal quantifiers in cases in which they do not govern the case of the quantified noun
  * [advmod:emph]() for adverbs or particles that modify noun phrases and emphasize or negate them
* The following main types are not used alone and must be subtyped:
  [expl]()
* The following relation types are not used in Polish at all:
  [clf](), [dislocated]()

## Treebanks

There are two Polish UD treebanks:

  * [Original](http://universaldependencies.org/treebanks/pl/index.html)
  * [LFG](http://universaldependencies.org/treebanks/pl_lfg/index.html)

