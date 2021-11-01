---
layout: base
title:  'Yakut UD'
udver: '2'
---

# UD for Yakut <span class="flagspan"><img class="flag" src="../../flags/svg/RU-SA.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespase characters.
* According to typographical rules, many punctuation marks are attached to a neighboring word. They are given as separate tokens (words).

---

### Tags

* Yakut uses all 17 universal POS categories.

Mapping UPOS to XPOS Yakut

 UPOS | XPOS |
:----: | :------: |
 NOUN  | n        |
 VERB  | v, vi, vt, vd|
 ADV   | adv      |
 ADJ   | adj       |
 INTJ  | intj     |
 PROPN | propn      |
 ADP   | adp       |
 AUX   | aux      |
 CCONJ | cconj       |
 DET   | det      |
 NUM   | num      |
 PART  | part      |
 PRON  | pron      |
 SCONJ | sconj       |
 PUNCT | punct    |
 SYM   | sym      |
 X     | x        |
 
---

## Morphology

* Yakut nouns are not marked for gender.
* `Number` is marked with a [sing](https://universaldependencies.org/u/feat/Number.html#sing-singular-number)-[plur](https://universaldependencies.org/u/feat/Number.html#plur-plural-number) distinction.
* The plural suffix -лар is used for both nouns and adjectives. The suffix yields 16 variants.

Terminal letter of the stem  |     Form of the affix         |           Example            |
:--------------------------: | :---------------------: | :-------------------------:  |
Vowels and diphthongs        |  -лар, -лэр, -лор, -лөр | паарталар, кинигэлэр, оҕолор, бөрөлөр |
Voiceless consonants: к, п, с, т, х|-тар, -тэр, -тор, -төр | харандаастар, түннүктэр, оһохтор  |
й, р  | -дар, -дэр, -дор, - дөр | сарайдар, үчүгэйдэр, томтордор |
Nasal consonants: м, н, ҥ  |-нар, -нэр, -нор, - нөр| ааннар, тииҥнэр, ороннор |


* There are 8 `cases`: [nominative](https://universaldependencies.org/u/feat/Case.html#nom-nominative--direct), [accusative](https://universaldependencies.org/u/feat/Case.html#acc-accusative--oblique), [dative](https://universaldependencies.org/u/feat/Case.html#dat-dative), [partitive](https://universaldependencies.org/u/feat/Case.html#par-partitive), [ablative](https://universaldependencies.org/u/feat/Case.html#abl-ablative), [instrumental](https://universaldependencies.org/u/feat/Case.html#ins-instrumental--instructive), [comitative](https://universaldependencies.org/u/feat/Case.html#com-comitative--associative), [comparative](https://universaldependencies.org/u/feat/Case.html#cmp-comparative).

Case                     | Form of the affix |       Examples      |
:----------------------: | :---------------: | :-----------------: |
Nominative               | -                 | таба, ат            |
Partitive                | -та               | табата, атта        |
Dative                   | -ҕа               | табаҕа, акка        |
Accusative               | -ны (ы)           | табаны, аты         |
Ablative                 | -ттан (-тан)      | табаттан, аттан     |
Instrumental             | -нан (-ынан)      | табанан, атынан     |
Comitative               | -лыын             | табалыын, аттыын    |
Comparative              | -тааҕар           | табатааҕар, аттаҕар |


* Possession is expressed by suffixes, which correspond to possessive pronouns my, your, and so on. The suffixes differ according to [person](https://universaldependencies.org/u/feat/Person.html) and [number](https://universaldependencies.org/u/feat/Number.html). It is often strengthenes by a personal pronoun standing in front of the noun that is in the possessive form. However, the personal pronoun of the first and the second person may be absent.

<b>Possessive declension: Singular</b>

Case             | First Person | Second Person | Third Person |
:--------------: | :--------:   | :-----------: |:-----------: |
Nominative       | атым         | атыҥ          | ата          |
Partitive        | -            | -             | -            |
Dative           | аппар        | аккар         | атыгар       |
Accusative       | аппын        | аккын         | атын         |
Ablative         | аппыттан     | аккыттан      | атыттан      |
Instrumental     | аппынан      | аккынан       | атынан       |
Comitative       | аппыныын     | аккыныын      | атыныын      |
Comparative      | аппынааҕар   | аккынааҕар    | атынааҕар    |



<b>Possessive declension: Plural</b>

Case             | First Person   | Second Person | Third Person |
:--------------: | :------------: | :-----------: |:-----------: |
Nominative       | аппыт          | аккыт         | ата          |
Partitive        | -              | -             | -            |
Dative           | аппытыгар      | аккытыгар     | аттарыгар    |
Accusative       | аппытын        | аккытын       | аттарын      |
Ablative         | аппытыттан     | аккытыттан    | аттарыттан   |
Instrumental     | аппытынан      | аккытынан     | аттарынан    |
Comitative       | аппытыныын     | аккытыныын    | аттапыныын   |
Comparative      | аппытынааҕар   | аккытынааҕар  | аттарынааҕар |

* `PronTypes` are [collective](https://universaldependencies.org/u/feat/PronType.html#tot-total-collective-pronoun-determiner-or-adverb), [demonstrative](https://universaldependencies.org/u/feat/PronType.html#dem-demonstrative-pronoun-determiner-numeral-or-adverb), [indefinite](https://universaldependencies.org/u/feat/PronType.html#ind-indefinite-pronoun-determiner-numeral-or-adverb), [interrogative](https://universaldependencies.org/u/feat/PronType.html#int-interrogative-pronoun-determiner-numeral-or-adverb), [personal/possessive](https://universaldependencies.org/u/feat/PronType.html#prs-personal-or-possessive-personal-pronoun-or-determiner).
* `NumType` distinguish [ordinal](https://universaldependencies.org/u/feat/NumType.html#ord-ordinal-number-or-corresponding-interrogative--relative--indefinite--demonstrative-word) and [cardinal](https://universaldependencies.org/u/feat/NumType.html#card-cardinal-number-or-corresponding-interrogative--relative--indefinite--demonstrative-word).
* The following valency change devices (`voice`) are found: [passive](https://universaldependencies.org/u/feat/Voice.html#pass-passive-or-patient-focus-voice), [causative](https://universaldependencies.org/u/feat/Voice.html#cau-causative-voice), [reciprocal](https://universaldependencies.org/u/feat/Voice.html#rcp-reciprocal-voice).
* As it is common among Turkic languages, there is a rich verbal system (`tense`): [present](https://universaldependencies.org/u/feat/Tense.html#pres-present--non-past-tense--aorist), [future](https://universaldependencies.org/u/feat/Tense.html#fut-future-tense), definite past, remote past, past imperfect, past episodic, resultative, [pluperfect](https://universaldependencies.org/u/feat/Tense.html#pqp-pluperfect),  pluperfect episodic.
* 10 `moods` are distinguished in Yakut: [indicative](https://universaldependencies.org/u/feat/Mood.html#ind-indicative-or-realis), [imperative](https://universaldependencies.org/u/feat/Mood.html#imp-imperative), [conditional](https://universaldependencies.org/u/feat/Mood.html#cnd-conditional), affirmative, obligative, habitual, dubitative, unrealized, [subjunctive](https://universaldependencies.org/u/feat/Mood.html#sub-subjunctive--conjunctive), suppositional.
* Non-finite verb forms include: perfect-participle, aorist-participle, future-participle, not-yet-participle.
* There are [converbs](https://universaldependencies.org/u/feat/VerbForm.html#conv-converb-transgressive-adverbial-participle-verbal-adverb).
*
*
* The second-person singular imperative of a verb is identical in form to the infinitive.
* If the subject has the plural form, the predicate takes that form as well.
* Certain nouns have double function of a noun and an adverb.
* Some words that imply plurality (e.g. body parts) are often used in the singular form, preserving the meaning of the whole.
* The form of the accusative case is used in situations, in which the object undergoing an action is understood concretely, as something known or determinated.
* Adjectival determination always stands directly before the noun that is determined. It does not agree with the determinandum, and takes no affixes.
---

### Features

*

---

## Syntax

* The following valency change devices (`voice`) are found: [passive](https://universaldependencies.org/u/feat/Voice.html#pass-passive-or-patient-focus-voice), [causative](https://universaldependencies.org/u/feat/Voice.html#cau-causative-voice), [reciprocal](https://universaldependencies.org/u/feat/Voice.html#rcp-reciprocal-voice).


---

## Treebanks

There is 1 Yakut UD treebank:

  * [Yakut-A](https://github.com/UniversalDependencies/UD_Yakut-YKTDT)

---
