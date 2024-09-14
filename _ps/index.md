---
layout: base
title:  'Pashto UD'
udver: '2'
---

# UD for Pashto <span class="flagspan"><img class="flag" src="../../flags/svg/AF.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/PK.svg" /></span>

For the principles of transliteration of Pashto used in UD see the [Transliteration page](transliteration.html).

## Tokenization and Word Segmentation

* The words are delimited by whitespaces and punctuation. Any possible exceptions have not yet been established.
* Multiword tokens are used in several cases:
  * Partially separable verbs (see below) in forms, when the two parts are connected (بندوم _bandawë́m_ “I close” → کوم _band_ + بند _kawë́m_).
  * Separeted verb prefixes connected with negative particle (به **ونه** خورم _bë **wënë́** xorëm_ “I will not eat” → و _wë_ + نه _në_).

## Morphology

### Lemmatization

* Direct (nominative) singular form is used as lemma for nominals.
* Infinitive is used as lemma for verbs, with these exceptions:
  * The verb “to be”, used as copula and auxiliary verb for perfect tenses, does not have the infitinive, so the form of first person singular of the present tense یم _yëm_ “I am” is used instead.
  * The existential word شته _šta_ “there is / there are”, tagged as [VERB](), has only one form, so it is used as the lemma.

### Tags

* Pashto uses all 17 universal tags.
* Several words are tagged as [PART]():
  * Negative particles نه _në_ and مه _ma_ “no/not” and the affirmative particle هو _ho_ “yes”.
  * Modal particles: باید _bấyad_ (necessity “must / have to”), وای wây (past irreality).
  * Separeted verb prefixes: و _wë_.
* Only the verb یم _yëm_ “to be” (used as copula and auxiliary verb for perfect tenses) and some uses of the verb کېدل _kedë́l_ “to become” (when used as auxiliary verb for passive voice or potential forms) are tagged as [AUX](). Modal verbs, such as غوښتل _ġox̌të́l_ “to want to”, are tagged as [VERB]() (besides that, some modal meanings are expressed using modal particles or using the mentioned potential verb forms). Light verbs are tagged also as VERB, with the nominal part depending on them with `xcomp` relation.
* Pronouns that depend on nouns and behave similarly like their attributes (some of them even agree with the nouns in number, case and gender) are tagged as [DET](); possessive pronouns are mostly treated this way. Pronouns used individually (often as arguments of a verb) are tagged as [PRON](). This includes e.g. relative or non-possessive personal pronouns. Various interrogative, demonstrative or indefinite pronouns can be tagged both ways depending on the situation. Enclitic weak pronouns, used a objects or as alternative possessive pronouns, are always tagged as PRON, even when marking possession, because they do not have the attributive relation to the noun, e.g. they follow the noun, while all other pronouns tagged as [DET]() precede it.
* The deverbal forms like infinitive or participles (sometimes behaving like verbal noun and verbal adjectives) are usually tagged as VERB. Only nouns and adjectives originally derived from infinitives or participles, but now perceived clearly as nouns and adjectives, are tagged as [NOUN]() and [ADJ]().
* Adjectives and adverbs derived from adjectives have often the same form. Their tagging as [ADJ]() or [ADV]() depends on the context.

### Features

* There are three [VerbForm]() values used in Pashto: finite `Fin`, infinitive `Inf` and participle `Part`.
* An important feature of Pashto verbs is [Aspect](), which strictly divides verb forms to imperfect `Imp` and perfecgt `Perf`.
* The finite verb forms inflect for [Mood]() feature with indicative `Ind`, imperative `Imp` and subjunctive `Sub` values.
* The finite verb forms conjugate for [Tense]() feature taking present `Pres`, past `Past` or future `Fut` mark.
* The finite verb forms inflect also for the [Person]() feature with the common three values, which is also an inherent feature of many personal pronouns.
* Generally all inlfectional parts of speech inflect for [Number]() taking a singular `Sing` or a plural `Plur` value. Infinitives always behave like plural, so they do not have the number tagged. Non-past finite verb forms do not have the number feature in the third person, since the forms for both numbers are always identical.
* Nominals, participles and infinitives inflect for [Case]() feature. There are four cases in Pashto: direct (marked as nominative) `Nom`, oblique (marked as accusative) `Acc`, ablative `Abl` and vocative `Voc`.
* Nouns and some pronouns have inherent [Gender]() feature with two possible values: masculine `Masc` and feminine `Fem`. Adjectives, other pronouns and participles inflect for the gender in order to agree with nouns. Finite verb forms inflect for the gender only in the past forms in the third person (both singular and plural).
  
## Syntax

### Core Arguments
* Core arguments (subjects and objects) in Pashto are mostly nouns, pronouns or infinitives (behaving like verbal nouns) in either bare direct case `Nom` or bare oblique case `Acc`. The exact use of these cases depends on the part of speech of the arguments, the inherent transitivity of the verb and the voice and tense used (phenomenon often calld _split ergativity_):
  * The only arguments (i.e. the subjects) of intransitive verbs or of transitive verbs used in the passive voice are always in the direct case `Nom`.
  * For transitive verbs in the active voice holds:
    * The **subject** in **non-past** tenses is always in the **direct** case `Nom`.
    * The **object** in **non-past** tenses is in the **direct** case `Nom` if it is a **noun**, but in the **oblique** case `Acc` if it is a **pronoun**.
    * The **subject** in **past** tenses is always in the **oblique** case `Acc`.
    * The **object** in **past** tenses is always in the **direct** case `Nom`.
    * The subject usually comes before the object regardless of the case.
* Other occurrences of the direct and oblique case are generally accompanied by an adposition, altghough various exceptions of nominals in the bare direct and oblique case, that are not a core argument, may exist:
  * Temporal range (دوه ساعته خوب کوم _dwa **sâáta** xob kawë́m_ “I sleep for two hours”).
  * Nominal part of a light verb !!!
  * Fixed phrases.

### Non-verbal Clauses
* The copula verb یم _yëm_ “be” (or more precisely “I am”) is used in most non-verbal clauses.
* In the existential non-verbal clauses the word شته _šta_ “there is / there are” is used, but it is tagged [VERB]()

### Relations Overview
* The following relation subtypes are used in Pashto:
  * aux:pass
  * nsubj:pass
  * compound:prt
  * orphan:nsubjobj

---
**Instruction**: Include links to language-specific relations definitions if any.
---

## Treebanks

There is currently no Pashto UD treebank.


---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
