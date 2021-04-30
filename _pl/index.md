---
layout: base
title:  'Polish UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: https://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Polish <span class="flagspan"><img class="flag" src="../../flags/svg/PL.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, a punctuation mark is attached to a neighbouring (usually preceding) word. Punctuation marks are usually tokenised as separate tokens (words), unless they are considered an integral part of the lemma (as in _Rolls-Royce_ “Rolls-Royce”, _O’Donellowie_ “the O'Donells”, or _85-lecie_ “85th anniversary”) or are used to express inflection (as in the accusative or genitive _Melville'a_ “Melville”).  On the other hand, hyphens in constructions such as _biało-czerwona_ “white-and-red” are treated as separate tokens.
* A whitespace separating digits in a large number is not treated as a word separator. For example, _1&nbsp;000&nbsp;000_ (“1,000,000” by English rules) is one token. (However, such tokens do not occur in Polish treebanks as of release 2.2.)
* There are two classes of “orthographic words” (sequences of letters without spaces inside) that are split into several syntactic tokens.
  * The most prominent type is an l-participle (or, rarely, another form) fused with a so-called “mobile inflection” auxiliary (e.g., _śmy_ expressing first person and plural number) or the conditional particle _by_ (also treated as an auxiliary), as in: _wyprodukowalibyśmy = wyprodukowali + by + śmy_ “we would have produced”.
  * Orthographic words of the other class consist of a preposition and a short (not accentable) pronoun, as in _czekał nań = czekał na + ń_ “(he) waited for him”.

## Morphology

### Tags

* Polish in principle uses all 17 universal POS categories: [SYM]() is only used in the [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html) treebank to mark symbols, e.g. _%_ (percent), _°_ (degree), _+_ (plus), _-_ (minus), _$_ (dollar), or emojis, e.g. _:-)_, and [X]() is only used in the [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html) treebank (to mark abbreviations and digits).
* The [NOUN]() tag is used not only for prototypical nouns, but also – somewhat arbitrarily – for gerunds (the so-called _-nie/-cie_ forms), which have both nominal and verbal properties.
* Pronouns ([PRON]()) are here understood as personal pronouns, so-called reflexive pronouns (also in their non-reflexive and – generally – non-pronominal uses), and such nominal pronouns as _kto_ “who”, _nic_ “nothing” and _wszyscy_ “everybody”.
* As Polish grammars do not include a separate part of speech _determiner_, the [DET]() class is based on a word list and includes words treated by standard Polish tagsets as adjectives, numerals or even nouns:
  * determiners treated elsewhere as adjectives include possessive pronouns, as well as words such as _ten_ “this”, _każdy_ “each”, _taki_ “such”, _którykolwiek_ “whichever”, etc.,
  * determiners treated elsewhere as numerals include indefinite numerals (e.g., _wiele_ “many”, _niedużo_ “not much, not many”, _kilka_ “several”), as well as fractional numerals such as _pół_ “half”,
  * one determiner treated elsewhere as a noun is _mnóstwo_ “a lot”.
* The main auxiliary verb ([AUX]()) in Polish is _być_ (“to be”), with the aspectual variant _bywać_ “to be (habitual)”.
  This auxiliary verb is used in several types of constructions:
  * the copula with predicative phrases,
  * periphrastic future tense (future form of _być_ + infinitive or so-called l-participle form of the main verb),
  * periphrastic conditional (any form of _być_ + the conditional mood marker _by_ + l-participle of the main verb),
  * (imperfective) periphrastic passive (any form of _być_, including periphrastic forms, + passive participle of the main verb).
* Another auxiliary, _zostać_ “become” (and its habitual version _zostawać_), is used for the perfective periphrastic passive (any form of _zostać_ + passive participle of the main verb).  Additionally, mood markers _by_ (conditional) and _niech_ (imperative, also its variants _niechaj_, _niechże_, _niechby_) are marked as `AUX`, as are “mobile inflections” and the copular uses of _to_ (usually, but inappropriately in this context, translated as “this”).
* The words _być_, _bywać_, _zostać_ and _zostawać_ may also occur as normal [VERB]() if they are used in purely existential sentences
  (i.e., ones that do not even indicate location because if they do, then they should be treated as copulas).
* Verbs with modal meaning are not considered auxiliary in Polish.
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Converb `Conv` (an adverbial participle), tagged [VERB]() or (in principle, but not in release 2.2) [AUX]().
  * Participle `Part` (an adjectival participle), tagged [ADJ]().
  * Verbal noun `Vnoun` (a gerund), tagged [NOUN]().
* Inherently impersonal forms ending in _-no/-to_ (a specialty of Polish and Ukrainian) are marked as finite verbs with `Person=0` (and `Tense=Past`).

### Nominal Features

* Nouns ([NOUN]() and [PROPN]()) have an inherent [Gender]() feature.  Five genders are standardly assumed in Polish linguistics (and in Polish tagsets): three masculine, one feminine and one neuter.  The three masculine genders are often called “human masculine”, “animate masculine” and “inanimate masculine”, but the correlation with the semantic animacy feature is far from perfect.  In particular, there are many “animate masculine” semantically inanimate nouns (including all masculine names of dances, and many more), as well as “animate masculine” nouns which are, semantically, human and feminine (some derogatory nouns for women, e.g., _babsztyl_), or which are human and, well, no longer animate (_trup_ “corpse”), or which are “superhuman” (e.g., _diabeł_ “devil” and _anioł_ “angel”, but not _bóg_ “god”, which is “human masculine”).  For the sake of cross-linuguistic consistency, three values are assumed for the `Gender` feature, i.e., `Masc`, `Fem` and `Neut`, but there must be another feature which distinguishes the three masculine genders.
  * In the [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html) treebank, the masculine gender is further subclassified by the [Animacy]() values `Hum`, `Nhum` and `Inan`.
  * In the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank, the masculine gender is further subclassified by the language-specific [SubGender]() feature with values `Masc1`, `Masc2` and `Masc3`.
* The following parts of speech in general inflect for gender: [ADJ](), [DET](), [NUM](), [PRON](), [VERB](), [AUX](). In the case of pronouns, only personal pronouns inflect for gender; other nominal pronouns (as well as the nominal determiner _wszyscy_ “everybody”) have this feature defined lexically, and so-called reflexive pronouns lack this feature altogether.  In the case of tokens tagged as `VERB` or `AUX`, only past forms of finite verbs overtly inflect for gender.
* The two values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (only finite verbs and auxiliaries).
* [Case]() has 7 possible values: `Nom`, `Acc`, `Gen`, `Dat`, `Loc`, `Ins`, `Voc`.
  It occurs on broadly nominal categories, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [NUM]().
  It can occur with de-verbal forms but only with those tagged as `ADJ` (adjectival participles) or `NOUN` (gerunds).  It never occurs with purely verbal forms.
  * Some tagsets also include `Case` as a feature of prepositions ([ADP]()), although in this case it is a valency (i.e., syntactic rather than morphological) feature.  As such, as of release 2.2 for the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank and release 2.4 for the [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html) treebank, it is present in the MISC column.
* [Polite]() is used in Polish (in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank of release 2.2) as a nominal feature, with the language-specific value `Depr` in case of special derogatory forms of some human masculine nouns, e.g., _profesory_ “professors (derogatory)”, as opposed to _profesorowie_ “professors (neutral)”.

### Pronouns, Determiners, Numerals

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()), as well as with the word _co_ when it plays the dual role of a complementiser ([SCONJ]()) introducing a special kind of relative clause (one that may involve resumptive pronouns).
* [NumType]() (`Card` or `Frac`) is used with numerals ([NUM]()) and determiners ([DET]()).
* The [Poss]() feature marks possessive personal determiners (e.g., _mój_ “my”).
* The [Reflex]() feature marks so-called reflexive pronouns _(się, siebie)_ and determiners _(swój)_, even when they are not used reflexively or reciprocally.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  On the other hand, it is marked on finite verbs ([VERB](), [AUX]()).
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

* Typical Polish verbs (including auxiliaries) have lexical [Aspect](), either imperfective (`Imp`) or perfective (`Perf`).
  * There is, however, a class of verb-like words, marked as [VERB]() with the universal `VerbType` feature with the language-specific `Quasi` value, which do not inflect for person and do not have aspect.
  * On the other hand, the `Aspect` feature is used with de-verbal nouns (gerunds) and adjectives (participles), if they have the `VerbForm` feature.
* Finite verbs have one of three values of [Mood](): `Ind`, `Imp` or `Cnd`. The conditional mood is only used with the conditional auxiliary (_by_). The imperative mood is marked on imperative forms of verbs, as well as on the imperative auxiliary (_niech_, and its variant _niechaj_).  All other finite verb forms, but not the “mobile inflection” auxiliaries (_m_, _śmy_, etc.), are marked for the indicative mood.
* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Pres` or `Fut`.
  * Imperative forms of verbs do not have the `Tense` feature.
  * The `Tense` feature is also used to distinguish contemporary and anterior adverbial participles (sometimes called “converbs”), e.g., _robiąc_ “while doing” (`Tense=Pres`) vs. _zrobiwszy_ “having done” (`Tense=Past`).
  * The l-participle (tagged `VERB` or `AUX`) also has `Tense=Past` because its primary function is to form the past tense.
  * De-verbal adjectives (adjectival participles) and nouns (gerunds) do not have `Tense`.
* There are two values of the [Voice]() feature: `Act` and `Pass`. Only the passive participle has `Voice=Pass`. All other verb forms have `Voice=Act`.

### Other Features

* Other universal features used in Polish include:
  * [AdpType]() – almost always `Prep`, but in the case of the adposition _temu_ “ago” it is `Post`.
  * [Hyph]() – marks forms such as _biało_ “white" in _biało-czerwony_ “white-and-red”.
  * [PartType]() – used (as of release 2.2, only in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank) only to mark question particles (`Int`).
  * [PrepCase]() – distinguishes those pronominal forms which may only occur as dependents of prepositions (`Pre`) from those which may only occur in other contexts (`Npr`).
  * [PunctSide]() and [PunctType]()
* The following universal features are not used in Polish: [Definite](), [Evident]().
* Apart from [SubGender](), other language-specific features include:
  * [Agglutination]() – distinguishes these rare situations where the l-participle has different forms depending on whether the “mobile inflection” auxiliary directly attaches to it or not, e.g., _on mógł_ “he could” (`Agglutination=Nagl`) vs. _mogł_ in _ja mogłem_ “I could” (`Agglutination=Agl`); as of release 2.2, only used in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank.
  * [Emphatic]() – present on those traditional pronouns (hence, various parts of speech here) which include the emphatic particle _ż(e)_, e.g., _co_ “what” (neutral) vs. _cóż_ “what” (emphatic); as of release 2.2, only used in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank.
  * [Variant]() – distinguishes short and long forms of adjectives, a Slavic-wide phenomenon; in Polish primarily used to distinguish basic from vocalised versions of some pronouns (e.g., _z_ vs. _ze_ “from”), basic from vocalised versions of the “mobile inflection” auxiliary (e.g., _m_ from _em_), and short (not accentable) from long (accentable) forms of some pronouns.


## Syntax

### Core and Oblique Dependents

* Prototypically, nominal subjects ([nsubj]()) are bare noun phrases in the nominative case.  In the case of typical numeral phrases in the subject position, the noun itself occurs in the genitive case.  The issue of the case of the numeral is more controversial: it is nominative on some theories (and in the [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html) treebank) and accusative on other (and in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank).  This special numeral construction, where the noun is in the genitive case, is marked in both release 2.2 treebanks:
  * in the [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html) treebank, the dependency relation is [nummod:gov](https://universaldependencies.org/pl/dep/nummod-gov.html) or [det:numgov](https://universaldependencies.org/pl/dep/det-numgov.html),
  * in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank, the MISC column contains the `[DepType=Rec]` feature (it is `[DepType=Congr]` in the case of those numerals which do not assign the genitive case but rather agree with the noun).
* Clausal subjects ([csubj]()) are typically infinitival phrases or subordinate clauses.
  * On the other hand, verbal nouns in the subject position are just `nsubj`.
  * However, it is possible to have a `csubj` dependency to a nominal word (a noun or an adjective), namely, when this word heads a copular clause.
* In passive clauses, the subject is labelled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labelled [aux:pass]().
  * If the demoted agent is present, it has the form of a prepositional phrase headed by _przez_ “by”, and its relation is labelled [obl:agent]().
* Direct objects are those dependents of verbs which may passivise, i.e., which become subjects in the passive voice.  Nominal direct objects are marked as [obj]().  They usually occur in the accusative case (but not all bare accusative nominals are objects), but also some instrumental and genitive nominals may be direct objects.
  * Since only nominal dependents may be considered objects according to current UD guidelines, passivisable clauses are marked as [ccomp:obj]().
  * In the case of typical numeral phrases in the accusative object position, the noun actually occurs in the genitive case, similarly to subject positions, and the numeral is uncontroversially accusative.  Such constructions are marked as in the case of numeral subjects (see above).
* All required dependents of verbs in the dative case are indirect objects ([iobj]()).
* All other bare nominal phrases, e.g. _Pies merdał ogonem_ "The dog wagged its tail", are treated as indirect objects ([iobj]()) in the [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html) treebank and as obliques ([obl]()) in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank.
* All adpositional phrases, when they are dependents of verbs, are treated as obliques ([obl]()).
* Required clausal dependents of verbs are marked as [ccomp](), unless they are subjects (`csubj`) or direct objects (`ccomp:obj`).
* Open (“controlled”) dependents are marked as [xcomp](); they are either infinitival phrases or predicative complements of verbs such as _stać się_ “become”.
* Extra attention has to be paid to the so-called reflexive pronoun _się_. It may function as:
  * reflexive direct object ([obj]()): _zobaczył się w lustrze_ “he saw himself in the mirror” (in such cases _się_ may alternate with the longer form _siebie_),
  * reciprocal direct object (`obj`): _całowali się_ “they were kissing each other”,
  * impersonal ([expl:impers]()): _oddycha się historią_ “one breathes with history”, lit. “breathe _się_ history.INS”,
  * an inherent part of a verb (usually included in the lemma in dictionaries). In accord with the current UD guidelines, we label the relation between the verb and the clitic as [expl:pv](), not `compound`. Example: _śmiała się_ “she laughed.”

### Non-verbal (Predicative) Clauses

* The copula verb _być_ “be” (and the habitual variant _bywać_) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  Purely existential clauses (without indicating location) use this copula as well, but it is treated as the head of the clause and tagged [VERB]().
  Another copula word in Polish is the quasi-verbal _to_ (inflects periphrasitically for tense, but not for person, etc.).

### Relations Overview

This is an overview only. For more detailed discussion and examples, see the list of [Polish relations](dep/index.html).

* The following relation subtypes are used in Polish:
  * [acl:relcl]() for relative clauses,
  * [advcl:cmpr]() for comparative clauses (as of release 2.5, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html))
  * [advcl:relcl]() for relative clause modifiers of clauses (as of release 2.5, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [advmod:arg]() for adverbial complements of verbs (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [advmod:emph]() for emphasizing adverbial modifiers (as of release 2.5, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [advmod:neg]() for negation particles (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [amod:flat]() for adjectival parts of named entities (as of release 2.5, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [aux:clitic]() for “mobile inflection” auxiliaries,
  * [aux:cnd]() for conditional marker auxiliaries (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [aux:imp]() for imperative marker auxiliaries (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html)),
  * [aux:mood]() for mood marker auxiliaries (as of release 2.2, only in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank),
  * [aux:pass]() for passive auxiliaries,
  * [cc:preconj]() for preconjunctions,
  * [ccomp:cleft]() for required clausal dependents of the pronoun _to_ (as of release 2.5, in [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [ccomp:obj]() for clausal objects of verbs,
  * [cop:locat]() for locative uses of copulas (as of release 2.2, only in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank),
  * [csubj:pass]() for clausal subjects of passive verbs (does not occur in release 2.2),
  * [det:numgov]() for pronominal quantifiers that are attached as children of the quantified noun but govern its case (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [det:nummod]() for pronominal quantifiers in cases in which they do not govern the case of the quantified noun (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [discourse:emo]() for emoticons and emojis (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html)),
  * [discourse:intj]() for interjections (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html)),
  * [expl:pv]() for inherent uses of the so-called reflexive pronoun _się_,
  * [expl:impers]() for impersonal uses of the so-called reflexive pronoun _się_ (as of release 2.2, only in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank),
  * [flat:foreign]() for foreign words (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [nmod:arg]() for required nominal dependents of nouns (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [nmod:flat]() for nominal parts of named entities (as of release 2.5, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [nmod:poss]() for possessive nominal modifiers, including 3rd person possessive pronouns (as of release 2.2, only in the [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html) treebank),
  * [nmod:pred]() for predicative expressions depending on the gerund form of the copula _być_ ("to be"), (as of release 2.5, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [nummod:flat]() for numeral parts of named entities (as of release 2.5, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html)),
  * [nummod:gov]() for numerals that are attached as dependents of the noun but govern its case, in contrast to nummerals [nummod]() which agree with the noun case (as of release 2.5, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [nsubj:pass]() for nominal subjects of passive verbs,
  * [obl:agent]() for agents of passive verbs,
  * [obl:arg]() for adpositional arguments of verbs (as of release 2.4, in [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [obl:cmpr]() for comparative phrases (as of release 2.5, only in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html)),
  * [obl:orphan]() for adpositional dependents with the elided noun (as of release 2.5, only in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html)),
  * [parataxis:insert]() for parenthetical clauses or comments (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [parataxis:obj]() for direct speech (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [xcomp:cleft]() for required open dependents (non-finite clauses) of the pronoun _to_ (as of release 2.5, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html)),
  * [xcomp:obj]() for objects realized as infinitival clauses (in [PDB-LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html)),
  * [xcomp:pred]() for predicative dependents of non-copular verbs (as of release 2.4, in [PDB-UD](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)),
  * [xcomp:subj]() for subjects realized as infinitival or adverbial phrases (as of release 2.5, in [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html) and [PUD-PL](https://universaldependencies.org/treebanks/pl_pud/index.html)).
* The following main types are not used alone and must be subtyped:
  [expl]().
* The following relation types are not used in Polish at all (as of release 2.2):
  [clf](), [dislocated]().

## Treebanks

There are three Polish UD treebanks:

  * [PDB](https://universaldependencies.org/treebanks/pl_pdb/index.html)
  * [LFG](https://universaldependencies.org/treebanks/pl_lfg/index.html)
  * [PUD](https://universaldependencies.org/treebanks/pl_pud/index.html)

