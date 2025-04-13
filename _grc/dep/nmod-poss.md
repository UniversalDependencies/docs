---
layout: relation
title: 'nmod:poss'
shortdef: 'possessive modifier'
udver: '2'
---

Possessors of noun phrases, such as genitive noun phrases and pronouns, receive the `poss` subtype.

~~~ conllu
1	καὶ	καί	CCONJ	_	_	2	cc	_	Gloss=and,also,even,then,next
2	εἶπαν	λέγω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-say
3	αὐτῇ	αὐτός	PRON	_	Case=Dat|Gender=Fem|Number=Sing|PronType=Prs	2	iobj	_	Gloss=she,-self,same|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	μετὰ	μετά	ADP	_	_	6	case	_	Gloss=+G=with;-+A=after
6	σου	σύ	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	7	obl	_	Gloss=you,your
7	ἐπιστρέφομεν	ἐπιστρέφω	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	Gloss=to-return
8	εἰς	εἰς	ADP	_	_	10	case	_	Gloss=into,unto,for
9	τὸν	ὁ	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	10	det	_	Gloss=the
10	λαόν	λαός	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	7	obl	_	Gloss=people
11	σου	σύ	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	10	nmod:poss	_	Gloss=you,your|SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_
~~~
