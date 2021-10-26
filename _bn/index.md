---
layout: base
title:  'Bengali UD'
udver: '2'
---

# UD for Bengali <span class="flagspan"><img class="flag" src="../../flags/svg/BD.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/IN.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, some punctuation marks (e.g., comma) are attached to a neighboring word,
  while others (e.g., the sentence-terminating danda) are not.
  We tokenize punctuation as separate tokens (words).

## Morphology

### Tags

* Bengali uses all 17 universal POS categories, including particles ([PART]()).
* At present, only some modal verbs are treated as auxiliaries ([AUX]()):
  * পারা _pārā_ (“be able, can, could”) combines with the imperfect participle (also called the infinitive) of the main verb
  * হওয়া _haoŷā_ (“be, become”) combines with the imperfect participle (also called the infinitive) of the main verb to create a necessitative meaning (“to have to”)
  * চাওয়া _cāoŷā_ (“want”) combines with the infinitive (also called the verbal noun) of the main verb
* There are verb-verb compounds, where the semantically more salient verb comes first in the form
  of a participle, and the semantically less salient verb comes second and has a finite form.
  There is a restricted set of verbs that can occur at the second position of verb-verb compounds.
  Note that these are not considered auxiliary verbs in UD.
  * যাওয়া _yāoŷā_ (“to go”)
  * নেয়া _neŷā_ (“to take”)
  * দেত্তয়া _dettaŷā_ (“to give”)
  * বসা _basā_ (“to sit”)
  * আসা _āsā_ (“to come”)
* There are noun-verb compounds where the noun is the semantically more salient part and it comes first.
  These are treated as light-verb constructions, i.e., the noun is attached to the verb as [compound:lvc]()
  rather than an object. The verb is not treated as auxiliary. Examples:
  * শেষ করা _śeṣa karā_ “to finish” (lit. “end do”)
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX](). This is the citation form (lemma) of the verb.
    When used in a nominal position (as a subject of another verb, with a case suffix, with possessive modifiers etc.),
    it is instead tagged [NOUN]() and its `VerbForm` is `Vnoun` (verbal noun) rather than `Inf`.
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [AUX](). It does not express person.
    The two main types of participles are distinguished by [Aspect](). The third type, conditional participle, is distinguished by [Mood]().
    * Imperfect participle. Some sources (e.g., Wiktionary) may use the term infinitive for this form and verbal noun for what we call infinitive.
    * Perfect participle.
    * Conditional participle: `Mood=Cnd`.

### Verbal Features

* Two participle types are distinguished by [Aspect](), either imperfective (`Imp`) or perfective (`Perf`).
  `Aspect=Perf` is further used with finite verbs in the present perfect form.
  Similarly, present continuous (progressive) finite forms will get `Aspect=Prog`.
* Finite verbs always have one of two values of [Mood](): `Ind` or `Imp`.
  The conditional mood `Cnd` is only used with the conditional participle.
* Finite verbs distinguish the [Person]() of the subject but not its `Number`.
  Infinitives and participles do not distinguish `Person`.
* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Pres` or `Fut`.
* There are two values of the [Voice]() feature: `Act` and `Pass`.

### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()), determiners ([DET]()) and adverbs ([ADV]()).
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* Personal pronouns also have one of two values of [Number](): `Sing` or `Plur`.
  They are lemmatized to the singular form, i.e., grammatical number is treated as (irregular) inflection.
  Note that the number of subject is not cross-referenced by finite verbs.
* Personal pronouns have up to three [Case]() forms: `Nom` (the base form), `Acc` (the objective form, also used in contexts where other languages use dative), and
  `Gen` (the genitive form).
  * There is no specific category of possessive pronouns. Instead, the genitive form of personal pronouns is used to encode possession.

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [2](../treebanks/bn-comparison.html) Bengali UD treebanks:

  * [Bengali-BRU](../treebanks/bn_bru/index.html)
  * [Bengali-PUD](../treebanks/bn_pud/index.html)
