---
layout: base
title:  'Amharic UD'
udver: '2'
---

# UD for Amharic <span class="flagspan"><img class="flag" src="../../flags/svg/ET.svg" /></span>

## Tokenization and Word Segmentation

* In general, surface tokens (orthographic words) are separated by whitespace. Even sentence-terminating punctuation is separated from the last word.
* Many surface tokens are treated as consisting of multiple syntactic words (multiword tokens).
* The ATT treebank segments subject agreement morphemes from verbs as independent “syntactic words”, although they are not clitics (their position is fixed with respect to the verb stem, they cannot attach to other words, and they are present even when an overt nominal subject occurs in the sentence, hence they are bound agreement morphemes rather than pronoun clitics).
* In contrast, object pronouns are clitics. They are also segmented off the verb.

## Morphology

### Tags

* Amharic uses 15 of the 17 universal POS categories, including particles ([PART]()).
  The [SYM]() and [X]() categories do not occur in the present data.
* TODO: Auxiliaries.
* There are three main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Finite verb `Fin`, tagged [VERB]().
  * Converb `Conv`, tagged [VERB]().
  * Verbal noun `Vnoun`, tagged [VERB]() or [NOUN]().

### Nominal Features

* The Amharic UD annotation uses language-specific values for [Case]() and [Voice]().
* The three values of the [Number]() feature are `Sing`, `Dual`, and `Plur`. For [NOUN](), [PROPN]() and [ADJ](), only the `Plur` value is used
  if the plural suffix is present; the singular is unmarked and unannotated. Pronouns ([PRON]()) have all three values.
* [Case]() has 5 possible values: `Ben`, `Mal`, `Loc`, `Abl`, `Ins`.
  It occurs as a lexical feature of adpositions ([ADP]()).

### Verbal Features

* Finite verbs always have one of two values of [Mood](): `Ind` or `Jus`.
* There are four values of the [Voice]() feature: `Trans`, `Cau`, `Pass` and `Rcp`. The default active voice is not marked, such verbs omit the feature.
  Voice is treated as a lexical feature, that is, derived verbs with different voice have a different lemma.

Nonpast tense conjugation <!-- page 471 of Hudson 1997 -->

<pre>
እነግር	'ənägərə	I tell
ትነግር	tənägərə	you tell (Masc Sing)
ትነግሪ	tənägəri	you tell (Fem Sing)
ይነግር	jənägərə	he tells
ትነግር	tənägərə	she tells
እንነግር	'ənənägərə	we tell
ትነግሩ	tənägəru	you tell (Plur)
ይነግሩ	jənägəru	they tell
</pre>

Past tense conjugation <!-- page 470 of Hudson 1997 -->

<pre>
ነገርኩ	nägärəku	I told
ነገርክ	nägärəkə	you told (Masc Sing)
ነገርሽ	nägärəšə	you told (Fem Sing)
ነገረ	nägärä		he told
ነገረች	nägäräčə	she told
ነገርን	nägärənə	we told
ነገራችሁ	nägäračəhu	you told (Plur)
ነገሩ	nägäru		they told
</pre>

(The suffixes -ku/-k have alternates -hu/-h, respectively.)

### Personal Pronouns

Independent forms <!-- page 462 of Grover Hudson. 1997. Amharic and Argobba. In: Robert Hetzron (ed.) The Semitic Languages. Routledge, London/New York, ISBN 978-0-415-41266-7. -->

<pre>
እኔ	'əne		(əne)		PRON	Number=Sing|Person=1|PronType=Prs		I
አንተ	'änətä		(antä)		PRON	Gender=Masc|Number=Sing|Person=2|PronType=Prs	you
አንቺ	'änəči		(anči)		PRON	Gender=Fem|Number=Sing|Person=2|PronType=Prs	you
እሱ	'əsu		(əssu)		PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	he
እሷ	'əsă		(əsswa)		PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	she
እኛ	'əňa		(əňňa)		PRON	Number=Plur|Person=1|PronType=Prs		we
እናንተ	'ənanətä	(ənnantä)	PRON	Number=Plur|Person=2|PronType=Prs		you
እነሱ	'ənäsu		(ənnässu)	PRON	Number=Plur|Person=3|PronType=Prs		they
</pre>

Object clitics

<pre>
ኝ	ňə	me		ነገረኝ	nägäräňə	he told me
ህ	hə	you (Masc Sing)	ነገርኩህ	nägärəkuhə	I told you
ሽ	šə	you (Fem Sing)	ነገርኩሽ	nägärəkušə	I told you
ው	wə	him		ነገርኩው	nägärəkuwə	I told him
ኣት	'atə	her		ነገርኩዋት	nägärəkuwatə	I told her
ን	nə	us		ነገሩን	nägärunə	they told us
ኣችሁ	'ačəhu	you (Plur)	ነገርናችሁ	nägärənačəhu	we told you
ኣቸው	'ačäwə	them		ነገርናቸው	nägärənačäwə	we told them
</pre>

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a bare noun phrase (without preposition).
  * The verb morphologically cross-references the person, gender and number of its subject.
    However, the current annotation in the ATT treebank treats the agreement morphemes as if they were independent syntactic words (pronoun clitics).
  * A subordinate clause may serve as the subject and is labeled `csubj`.
* Nominal object ([obj]()) is a bare noun phrase (without preposition).
  * If the object is pronominalized, it gets encliticized to the verb. Unlike the subject agreement morphemes, these really are clitics and should be treated as pronouns.
* In passive clauses, the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.

### Relations Overview

* The following relation subtypes are used in Amharic:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [compound:svc]() for serial verb constructions
* The following relation types are not used in the current data at all:
  [vocative](), [dislocated](), [appos](), [list](), [orphan](), [reparandum]()

## Treebanks

There is [1](../treebanks/am-comparison.html) Amharic UD treebank:

  * [Amharic-ATT](../treebanks/am_att/index.html)
