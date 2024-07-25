---
layout: base
title:  'Pashto UD'
udver: '2'
---

# UD for Pashto <span class="flagspan"><img class="flag" src="../../flags/svg/AF.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/PK.svg" /></span>

Principles of transcription used in UD for Pashto will be described soon.

## Tokenization and Word Segmentation

* The words are delimited by whitespaces and punctuation. Any possible exceptions have not yet been established.
* Multiword tokens are used in several cases:
  * Partially separable verbs (see below) in forms, when the two parts are connected (بندوم _bandawë́m_ “I close” → کوم _band_ + بند _kawë́m_).
  * Separeted verb prefixes connected with negative particle (به **ونه** خورم _bë_ **wënë́** xorëm_ “I will not eat” → و _wë_ + نه _në_).

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
* Only the verb یم _yëm_ “to be” (used as copula and auxiliary verb for perfect tenses) and some uses of the verb کېدل _kedë́l_ “to become” (when used as auxiliary verb for passive voice or potential forms) are tagged as [AUX](). Modal verbs, such as غوښتل _ġox̌të́l_ “to want to”, are tagged as [VERB]() (besides that, some modal meanings are expressed using modal particles or the mentioned potential verb forms). Light verbs are tagged also as VERB, with the nominal part depending on them with `xcomp` relation.
* Pronouns that depend on nouns and behave similarly like their attributes (some of them even agree with the nouns in number, case and gender) are tagged as [DET](); possessive pronouns are mostly treated this way. Pronouns used individually (often as arguments of a verb) are tagged as PRON. This includes e.g. relative or non-possessive personal pronouns. Various interrogative, demonstrative or indefinite pronouns can be tagged both ways depending on the situation. Enclitic weak pronouns, used a objects or as alternative possessive pronouns, are always tagged as [PRON](), even when marking possession, because they do not have the sttributive relation to the noun, e.g. they follow the noun, while all other pronouns tagged as [DET]() precede it.
* The deverbal forms like infinitive or participles (sometimes behaving like verbal noun and verbal adjectives) are usually tagged as VERB. Only nouns and adjectives originally derived from infinitives or participles, but now perceived clearly as nouns and adjectives, are tagged as [NOUN]() and [ADJ]().
* Adjectives and adverbs derived from adjectives have often the same form. Their tagging as [ADJ]() or [ADV]() depends on the context.

### Features

* Nouns and some pronouns have inherent [Gender]() feature with two possible values: masculine `Masc` and feminine `Fem`. Adjectives, other pronouns and participles inflect for the gender in order to agree with nouns. Finite verb forms inflect for the gender only in the past forms for the third person (both singular and plural).
* Nominals, participles and infinitives inflect for [Case]() feature. There are four cases in Pashto: direct (marked as nominative) `Nom`, oblique (marked as accusative) `Acc`, ablative `Abl` and vocative `Voc`. The oblique and ablative are required by certain adpositions. The direct and the oblique case are used also for denoting the subject and object of transitive verbs, but their exact use depends on the part of speech and verb's tense (see Syntax section for more detail). 
* Generally all inlfectional parts of speech inflect for [Number]() taking a singular `Sing` or a plural `Plur` value. Infinitives always behave like plural, so they do not have the number marked. Non-past finite verb forms do not lack the number feature in the third person, since the forms for both numbers are always identical.
* The finite verb forms conjugate also for the [Person]() feature with the common three values, which is also an inherent feature of many personal pronouns.
* The finite verb forms inflect for [Mood]() feature with indicative `Ind`, imperative `Imp` and subjunctive `Sub` values and [Tense]() feature taking present `Pres`, past `Past` or future `Fut` mark.
* There are three [VerbForm]() values used in Pashto: finite `Fin`, infinitive `Inf` and participle `Part`.
* An important feature of Pashto verbs is [Aspect](), which strictly divides verb forms to imperfect `Imp` and perfecgt `Perf`.

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/ps-comparison.html) Pashto UD treebanks:

  * [Pashto-A](../treebanks/ps_a/index.html)
  * [Pashto-B](../treebanks/ps_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
