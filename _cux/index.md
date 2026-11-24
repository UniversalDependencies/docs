---
layout: base
title:  'Cuicatec UD'
udver: '2'
---

# UD for Cuicatec <span class="flagspan"><img class="flag" src="../../flags/svg/MX.svg" /></span>

Cuicatec (ISO 639-3 `cux`) is an Oto-Manguean language of the Mixtecan branch, spoken in the Cañada
region of Oaxaca, Mexico. The UD data is focused on Tepeuxila Cuicatec (_dbaku_), spoken around San Juan
Tepeuxila.
## Tokenization and Word Segmentation

* Words are delimited by whitespace. There are no multiword tokens and no words with spaces.
* Punctuation is split off as separate tokens, including the Spanish-style opening marks _¿_ and _¡_
  (e.g. _¿ A ichad ?_ "¿Tienes frío?").
* Possessive, person and other affixes and enclitics are written together with their host and are not
  split off (e.g. _bakud_ "tu casa", _kuchis_ "vino (él)").
* A small number of compound words are written with a hyphen in the source and are kept as one
  token (e.g. _naíd-yádi_).
* The glottal stop is written with the modifier letter apostrophe _ʼ_ (U+02BC). The original text, which
  often uses the ASCII apostrophe, is kept in the `text[orig]` sentence attribute, and a Spanish
  translation in `text[spa]`.
* Spelling follows each author's own orthographic choices, so the same word can appear with different
  diacritics. Non-standard spellings of a word are marked `Typo=Yes`, with the standard form given in
  MISC as `Normal` (e.g. _Un_ → `Normal=ú` "yo").

## Morphology

### Tags

* _SYM_ is not used. 
* _NOUN_: Nouns take possessive suffixes agreeing with the possessor (e.g. _baʼa_ "casa", _bakud_ "tu casa").
  [Relational nouns](feat/NounType.html#Relat) (`NounType=Relat`) are tagged NOUN, including the
  possessive base _ñeʼe_ "de (él)", which is inflected for its possessor (_ñeʼë_ "de mí", _ñeʼed_ "de ti").
  Nominal [classifiers](feat/NounType.html#Clf) such as _ta_ "señora", used before women's names, are
  also NOUN, with `NounType=Clf`.
* _VERB_: Verbs inflect for the person of the subject by suffixes, and in the third person
  distinguish masculine, feminine, human and animal referents (e.g. _kuchis_ "vino (él)",
  _jeakuta_ "llora (ella)"). Aspect and mood are marked by prefixes, such as completive, potential and
  progressive _ji-_ (e.g. _jiyadu_ "duermo").
* _ADJ_: Property words such as _cheatea_ "grande", _lï_ "pequeño" and _kuä_ "negro" are tagged ADJ.
  They are frequently used as predicates without a copula, and are then marked
  [VerbForm=Stat](feat/VerbForm.html#Stat).
* _AUX_: The verb _kane_/_kanu_ "estar" is tagged AUX when it is the copula of a locative predicate
  (see Syntax). The modal _jikadi_ "poder" (_chikadi_ "pude") is tagged AUX when it is followed by
  the main verb (e.g. _Gua jikadi jika dime._ "No puedo caminar solo.").
* _DET_ and _PRON_: Demonstratives that modify a noun are tagged DET and attached as `det`. They
  usually follow the noun: _kon_/_ko_/_kó_ "ese", _kun_/_ku_ "este", _mi_/_min_ "esa/esta"
  (e.g. _Baʼa kun cheatea._ "Esta casa es grande."). Demonstratives used on their own, personal pronouns
  and interrogatives are tagged PRON. The personal pronouns are _ú_ "yo", _dí_ "tú", _sakó_ "él",
  _takó_ "ella", _insú_ "nosotros", _insë_ "ustedes" and _iñsé_ "ellos"; the interrogatives include
  _duʼu_ "quién", _dae_ "qué" and _tabea_ "cuánto".
* _PART_: The polar question particle _a_ is tagged PART and attached as `discourse`
  (e.g. _¿A ichad?_ "¿Tienes frío?"). The emphatic particle _ne_ is also PART
  (e.g. _Úu ne chidi._ "Yo estornudé.").
* _ADV_: Besides manner, time and place adverbs (_iku_ "ayer", _muʼu_ "aquí", _yeabean_ "muy"), the
  negation _gua_ "no" is tagged ADV and attached as `advmod`.
* _ADP_: Prepositions such as _no_ "en" and _nuku_ "con" are tagged ADP and attached as `case`
  (e.g. _No camión kuchi._ "Vine en camión.").
* _SCONJ_: The complementizer _chi_ "que", and _tochi_ "cuando", _kat_ "porque" and _tumin_ "para que".
* _CCONJ_: Coordinating conjunctions are rare. They include _o_ "o" and the Spanish loan _per_ "pero".
* _NUM_: Cardinal numerals (`NumType=Card`) such as _ama_ "uno", _obe_ "dos" and _inu_ "tres" precede the noun.

### Features

* _Nominal features_: [NounType](feat/NounType.html) distinguishes relational nouns (`Relat`) and
  classifiers (`Clf`). Possession is marked by suffixes on the possessed noun, but it is not yet
  annotated with features.
* _Verbal features_: Finite verbs are marked `VerbForm=Fin`. Where agreement is annotated, verbs carry
  `Person` and `Number`, and third-person forms carry `Gender=Masc`/`Fem` or
  `Animacy=Hum`/`Aml`, following the masculine, feminine, human and animal categories of third-person
  agreement. Aspect (`Aspect=Perf` completive, `Aspect=Prog` progressive) and mood (`Mood=Pot`
  potential) are also marked, as is transitivity (`Subcat=Tran`/`Intr`).
* _Stative_: Predicative property words are marked [VerbForm=Stat](feat/VerbForm.html#Stat).
* _Pronouns and determiners_: `PronType=Prs` (personal), `Dem` (demonstrative) and `Int` (interrogative).
* _Spelling_: `Typo=Yes` marks non-standard spellings (see Tokenization).
* Morphological feature annotation is not yet complete. Only some finite verbs are annotated for
  person, number, aspect and mood, and lemmas are given for only part of the corpus.

## Syntax

* _Core arguments_: The subject is indexed on the verb by person suffixes, and an overt subject is
  often omitted (e.g. _Gua deanu._ "No sé."). Overt subjects (`nsubj`) may precede or follow the verb.
  Objects (`obj`) are unmarked and usually follow the verb. When both are present, the most frequent
  order is subject–verb–object (e.g. _Takó chikueta ú._ "Ella me enseñó."). In ditransitives, the
  recipient or addressee is `iobj` (e.g. _Kakued ú yuni._ "¡Enséñame el camino!").
* _Nonverbal clauses_: Adjectival, nominal and pronominal predicates take no copula. The predicate is
  the `root` and the subject is its `nsubj` (e.g. _Ú yaku._ "Yo soy alto.", _Ta Marian ndatata._ "María es
  mujer.", _¿Duʼu noʼöm?_ "¿Quién es el maestro?"). Locative predicates take the copula _kane_/_kanu_
  "estar", tagged AUX and attached as `cop` to the locative expression (e.g. _Chida kaneñ no nʼiba._
  "Mi papá está en el mercado."). When _kane_ is used without a locative complement, it is a VERB.
* _Existence and possession_: The existential verb _bea_ "hay" is the `root`, and the existing entity
  is its `nsubj` (e.g. _Muʼu bea nuni._ "Aquí hay agua."). Predicative possession uses the same
  construction, with the possessor expressed by the possessive base _ñeʼe_
  (e.g. _Bea ntiñu ñeʼë._ "Tengo trabajo.") or by a fronted noun phrase, attached as `dislocated`
  (e.g. _Uu bea yuchmee._ "Yo tengo cerebro.").
* _Adnominal possession_: The possessive base _ñeʼe_, inflected for the possessor, follows the possessed
  noun and is attached to it as `nmod:poss` (e.g. _Gua yana ñeʼë._ "No tengo perro.").
* _Questions and negation_: Polar questions are marked by the particle _a_ (`discourse`), and negation
  by _gua_ (`advmod`).
* _Complex predicates_: A verb followed by a second inflected verb sharing its subject (motion verbs,
  _neʼe_ "querer") takes the second verb as `xcomp` (e.g. _Kued kamad._ "Ve a leer.").
  Complement clauses introduced by _chi_ "que" are `ccomp` (e.g. _Gua deanu chi kuchid._ "No sabía que
  venías."), and adverbial clauses introduced by _tochi_ "cuando" are `advcl`.
* _Relation subtypes_: The only subtype used is `nmod:poss`, for possessors.

## Treebanks

There is 1 Cuicatec UD treebank:

  * [Cuicatec-MesoTree](../treebanks/cux_mesotree/index.html)
