---
layout: base
title:  'Spanish UD'
udver: '2'
---

<!-- Inspired by an old proposal for language-specific documentation here: http://universaldependencies.org/v2/minimaldoc.html
     If we agree on a scheme like this, the old proposal should be updated and made visible in the “How to Contribute” section;
     right now it is probably not linked from anywhere. -->

# UD for Spanish <span class="flagspan"><img class="flag" src="../../flags/svg/ES.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/MX.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/CO.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/PE.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/CL.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/AR.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word.
  We usually tokenize them as separate tokens (words)
  with the exception of abbreviations such as _etc._ “etc.” which are kept as one token with the period.
* There are two main classes of multi-word tokens:
  * Contractions of prepositions and definite articles.
    Example: _al = a + el_ “to the”, _del = de + el_ “of the”.
  * Certain verb forms (infinitives, imperatives, present participles) are writen together with
    object clitic pronouns, while with other verb forms the clitics are written as separate words.
    Examples: _convertirse = convertir + se_ “to become” (lit. “to convert itself”), _hacerlo_ “to do it”.

## Morphology

### Tags

* Spanish uses all 17 universal POS categories, including particles ([PART]()).
* The only word to be tagged as particle is _no_ “not”.
* TODO: rules for the PRON vs. DET distinction.
* Spanish auxiliary verbs ([AUX]()) are:
  * _ser_ and _estar_ “to be”, used as copulas
  * _ser_ “to be” for the passive (_la sentencia fue publicada_ “the sentence was published”)
  * _estar_ “to be” for the progressive (_mis hijos están estudiando inglés_ “my children are studying English”)
  * _haber_ “to be/have” for the perfect tenses (_ha venido hoy_ “he came today”)
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX](), e.g. _estudiar_ “to study”.
  * Finite verb `Fin`, tagged [VERB]() or [AUX](), e.g. _estudio_ “I study”.
  * Participle `Part`, tagged [VERB](), [AUX]() or [ADJ](), e.g. _estudiado_ “studied”.
  * Gerund `Ger` (Spanish _gerundio_) or present participle, e.g. _estudiando_ “studying”.
    The gerund can be used as a present participle together with the auxiliary _estar_:
    _Adidas está ayudando a limpiar los océanos._ “Adidas is helping to clean up the oceans.”
    It can also be used with a pseudo-copular verb such as _seguir_, in which case it is attached to the pseudo-copula as its [xcomp]():
    _Este gobierno seguirá teniendo que trabajar con él._ “This government will still have to work with him.”
    Finally, it can be used as a converb, in which case it is attached to the main verb as [advcl]():
    _Lo obtiene viendo a sus amigos._ “She obtains it seeing her friends.”

### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of two values: `Masc` or `Fem`.
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET]().
    Only a subset of adjectives can inflect for gender, with the suffix _-o_ indicating the masculine
    and _-a_ the feminine. A large group of adjectives (e.g. _grande_ “big” or _feliz_ “happy”)
    have just one form regardless of the gender of the modified noun. These adjectives have the
    gender feature empty.
* The two values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite and participles).
* [Case]() has 4 possible values: `Nom`, `Dat`, `Acc`, `Com`.
  It occurs only with personal pronouns ([PRON]()).
  The “case” (i.e., role w.r.t. predicates or other phrases) of other nominals is expressed using prepositions, not morphologically.
* [Definite]() has 2 values: `Ind`, `Def`. It is used to distinguish the indefinite and definite articles ([DET]()).

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Abs`.
  The absolute superlative is marked morphologically on adjectives.
  Otherwise, the comparative and superlative of most adjectives is formed periphrastically,
  and `Degree=Cmp` is only used with a few irregular forms.
* [Polarity]() is used to mark the negative particle _no,_ i.e., only the `Neg` value is used.

### Verbal Features

* Infinitives have only the `VerbForm=Inf` feature.
* Finite verbs always have one of four values of [Mood](): `Ind`, `Imp`, `Sub` and `Cnd`.
* Finite verbs can have one of four values of [Tense](): `Past`, `Imp`, `Pres`, `Fut`.
  * Imperative and conditional forms do not have the `Tense` feature.
    (In Spanish grammar, the conditional is itself often classified as a tense.
    However, it is a mood in Universal Dependencies.)
  * The `Tense` feature is also used with the past participles (_venido_ “come”).
* The [Aspect]() feature is currently not used in Spanish.
  It is not needed for the imperfect past tense because UD has the special value `Tense=Imp`.
  And it is not needed for the perfect tenses because they are constructed periphrastically.
* The [Voice]() feature is not used in Spanish because the passive voice is expressed periphrastically.
* Gerunds have only the `VerbForm=Ger` feature. They do not inflect for gender or number; the suffix is always _-ndo_.
* Participles have `VerbForm=Part`, `Tense=Past`, [Gender]() (`Masc` or `Fem`), and [Number]() (`Sing` or `Plur`).
  The gender and number is annotated also in periphrastic perfect constructions, where the form is obligatorily masculine singular.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()) and determiners ([DET]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _mi_ “my”),
  possessive personal pronouns (e.g. _mío_ “mine”), and
  possessive interrogative or relative determiners (e.g. _cuyo_ “whose”).
* The [Reflex]() feature is always used together with `PronType=Prs` and it marks reflexive pronouns _(me, te, se, nos, os)._
  Note that their forms in the first and second person are ambiguous with irreflexive accusative forms, and the `Reflex` feature
  must be decided by context.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* The [Polite]() feature distinguishes informal second-person pronouns (_tú, vosotros,_ `Polite=Infm`)
  from the formal _usted, ustedes_ (`Polite=Form`).
* There is one [layered feature](../../u/overview/feat-layers.html), [Number[psor]]().
  It appears with possessive determiners and encodes the lexical number of the possessor.
  The extra layer is needed to distinguish this lexical feature from the inflectional number
  that marks agreement with the modified (possessed) noun.

### Other Features

* The following universal features are not used in Spanish: [Animacy](), [Evident]().

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a bare noun phrase without preposition.
  If it is a personal pronoun, it must be in the nominative form
  (note however that Spanish is a pro-drop language, where pronominal subjects can be omitted).
* Direct nominal object ([obj]()) is either a bare noun phrase (for inanimate objects)
  or a prepositional phrase with the preposition _a_ (for animate objects)
  or a personal pronoun in the accusative form.
* Extra attention has to be paid to the reflexive pronoun _se_. It can function as:
  * Core object ([obj]() or [iobj]()): _él se vio en el espejo_ “he sighted himself in the mirror.”
  * Reciprocal core objects (`obj` or `iobj`): _se besaron_ “they kissed each other.”
  * Reflexive passive ([expl:pass]()): _se celebran los cien años del club_ “hundred years of the club are celebrated” (lit.  “celebrate themselves”); _se dice que la escribió en París_ “it is said that he wrote it in Paris.”
  * Inherently reflexive verb, cannot exist without the reflexive clitic, and the clitic cannot be substituted by an irreflexive pronoun
    or a noun phrase. In many cases, an irreflexive counterpart of the verb actually exists but its meaning is different because it
    denotes a different action performed by the agent.
    In accord with the current UD guidelines, we label the relation
    between the verb and the clitic as [expl:pv](), not `compound`. Example: _se trataba de un negocio nuevo_ “the matter is a new contract.”
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
  * The auxiliary verb in periphrastic passive is labeled [aux:pass]().

### Non-verbal Clauses

* The copula verbs _ser_ and _estar_ (be) are used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
  * Existential clauses use a different verb, _hay_ (be), and the entity whose existence is asserted is its object:
    _hay algo para comer_ “there is something to eat.”

### Relations Overview

* The following relation subtypes are used in Spanish:
  * [acl:relcl]() for relative clauses
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [aux:pass]() for passive auxiliaries
* The following relation types are not used in Spanish at all:
  [clf](), [dislocated]()

## Treebanks

There are [three](../../treebanks/es-comparison.html) Spanish UD treebanks:

  * [Spanish-GSD](../../treebanks/es_gsd/index.html)
  * [Spanish-AnCora](../../treebanks/es_ancora/index.html)
  * [Spanish-PUD](../../treebanks/es_pud/index.html)
