---
layout: base
title:  'Uzbek UD'
udver: '2'
---

# UD for Uzbek <span class="flagspan"><img class="flag" src="../../flags/svg/UZ.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* According to typographical rules, many punctuation marks are attached to a neighboring word. These are normally tokenized as separate tokens (words), with the following exception:
  * The period that marks an abbreviation is part of the abbreviation token: _mln._ “million”, _A._ Navoiy “A. Navoi” 

## Morphology

* Uzbek has a rich inflectional and derivational morphology.
* Question suffixes are written adjacent to the word in Uzbek. _-mi_

### Tags

* Uzbek uses all 17 UPOS categories: 
1. PRON: Men, sen, u. 
2. PUNCT: - ., ?, ; 
3. VERB: o‘qidi, kelmoqchi, ishla. 
4. NOUN: oila, do‘st, quyosh. 
5. AUX: kerak, mumkin, edi, emas. 
6. ADP: bilan, uchun, haqida.
7. CCONJ: va, yoki, hamda. 
8. SCONJ: agar, chunki, ya’ni. 
9. ADV: atayin, juda, tez. 
10. PROPN: Toshkent, Navoiy, Bobur. 
11. DET: bu, ayrim, barcha.
12. ADJ: qizil, tinch, aqlli. 
13. NUM: ikki, yuz, ming. 
14. INTJ: hoy, salom, ofarin. 
15. PART: -mi, -chi, -a/-ya  
16. SYM: $, +, = 
17. X 
* In Uzbek, there is a large number of constructions where a semantically weak verb combines with a non-finite form (infinitive or converb) of a lexically prominent verb. Traditional grammatical descriptions of Uzbek would label them as auxiliary constructions. However, most of them do not fall under the AUX category in UD. Instead, both parts — a non-finite verb and a finite verb are considered compounds and connected with compound:lvc relation.
* Uzbek has a limited number of auxiliary verbs (AUX). Currently modal verbs and copula verbs (edi, ekan, emish, emas) as well as _yo‘q_ ‘not’ are treated as auxiliaries.
* Uzbek does not have a specific word class for articles, but the numeral _bir_ “one” may act as an indefinite article and some pronoun types such as demonstrative (bu, o'sha, shu), total/collective (hamma, barcha), interrogative (qaysi, qancha) and negative (hech) pronouns may function as a definite article. We mark them as DET in this usage.

### Nominal Features

* Case has 6 possible values:  Nom,  Acc,  Gen,  Dat,  Loc,  Abl. It occurs with the nominal words, i.e., NOUN, PROPN, PRON, ADJ, DET, NUM. It also occurs with some non-finite forms of VERB and AUX such as participles and verbal nouns.
* Degree applies to adjectives (ADJ) and adverbs (ADV) and has only one value:  Cmp. The basic (positive) form is unmarked and unannotated.
* There is no grammatical gender in Uzbek, so we do not use Gender feature in Uzbek treebank.
* The two main values of the Number feature are Sing and Plur. For NOUN, PROPN and ADJ, only the Plur value is used if the plural suffix is present; the singular is unmarked and unannotated. Pronouns (PRON) have both values and they are treated as lexical, that is, the plural pronoun has its own lemma, distinct from the corresponding singular pronoun.
* Finite verbs (VERB, AUX) inflect for number and person to cross-reference the subject. Both values are explicitly annotated.

### Verbal Features

* There are four main verbal forms, distinguished by the value of the VerbForm feature:
   * Finite verb: Fin
   * Participle: Part
   * Converb: Conv
   * Verbal Noun: Vnoun, (it includes the citation forms with -moq, -ish, -uv, sometimes called the infinitive)
* Finite verbs are normally annotated with the habitual or perfect Aspect (Hab, Perf). Other values (Imp, Prog) can be observed with verbal nouns and converbs.
* Finite verbs always have one of four values of Mood:  Ind,  Imp,  Int or Opt . The conditional (Cnd) and desiderative (Des) moods are only used with conditional converbs. The purposive mood (Prp) is a language-specific value and applies to verbs with the suffix -moqchi.
* Verbs in the indicative mood always have one of three values of Tense:  Past, Pres, Fut.
* The Evident feature (evidentiality) distinguishes first-hand past tense (Fh, e.g., kelibdi) from evidentiality-neutral forms (unmarked, e.g., keldi).
* As for Voice, there are Act, Pass, Rcp, Cau and Rfl voices, the latter of which is a language-specific value.
* Polarity applies to verbs (VERB, AUX) and has only one value: Neg. The basic (positive) form is unmarked and unannotated.

### Lexical Features

* PronType is used with pronouns (PRON) and determiners (DET). We use seven different values: Prs, Dem, Rcp, Ind, Int, Neg and Tot.
* NumType is used only for numerals (NUM) and has six values: Card, Ord, Frac, Sets, Dist, Range.
* The Reflex feature marks reflexive pronouns (o‘z).
* Person is a lexical feature of personal pronouns (PRON) and has three values: 1, 2 and 3.
    * As a cross-reference to subject, person is also marked on finite verbs (VERB, AUX).
* Poss is marked on the possessor and has only “Yes” value, meaning that if the word is not possessive, the Poss feature will just not be mentioned. 


## Syntax

* The dominant word order in Uzbek is subject-object-verb, although other word orders are possible, too.

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject (nsubj) is a noun phrase in the nominative case, without adposition. 
  * A subordinate clause may serve as the subject and is labeled csubj. 
Nominal object (obj) is a noun phrase without adposition and typically in the accusative case, although it can be also nominative or ablative. 
  * A subordinate clause may serve as the object and is labeled ccomp. 

### Relations Overview

* The following relation subtypes are used in Uzbek:
  * advcl:cond for conditional adverbial clauses 
  * flat:name for compound names 
  * nmod:poss for possessive and genitive modifiers 
  * obl:agent for demoted agents in passive clauses 
  * compound:lvc for light-verb constructions 
* The following relation types are not used in Uzbek: clf, dislocated, expl.


## Treebanks

This is the first treebank in Uzbek.


There are [N](../treebanks/uz-comparison.html) Uzbek UD treebanks:

  * [Uzbek-A](../treebanks/uz_a/index.html)
  * [Uzbek-B](../treebanks/uz_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
