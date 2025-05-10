---
layout: base
title:  'Statistics of case in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `case`

This relation is universal.

11 nodes (1%) are attached to their parents as `case`.

11 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `case`: <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-ADP.html">ADP</a></tt> (7; 64% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-ADP.html">ADP</a></tt> (2; 18% instances), <tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="az_tuecl-pos-ADP.html">ADP</a></tt> (1; 9% instances), <tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="az_tuecl-pos-ADP.html">ADP</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 case	color:blue
1	O	O	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
2	Tüklərin	tük	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	obj	_	_
3	cürləməliydi	cürləmə	VERB	_	Mood=Nec|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	amma	amma	CCONJ	_	_	11	cc	_	_
6	neçə	neçə	NUM	_	PronType=Int	7	nummod	_	_
7	dəlilə	dəlil	NOUN	_	Case=Dat|Number=Sing	11	advcl	_	_
8	görə	görə	ADP	_	_	7	case	_	_
9	o	o	DET	_	PronType=Dem	10	det	_	_
10	gün	gün	NOUN	_	Number=Sing	11	obl	_	_
11	eləmədi	elə	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	O	O	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	çox	çox	ADV	_	_	3	advmod	_	_
3	yeyin	yeyin	ADV	_	_	4	advmod	_	_
4	qaçdığı	qaç	VERB	_	Case=Gen|Number=Sing|Person=3|Tense=Past|VerbForm=Part	7	advcl	_	_
5	için	için	ADP	_	_	4	case	_	_
6	ona	o	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	7	obl	_	_
7	çata	çata	VERB	_	VerbForm=Conv	0	root	_	_
8	bilmədim	bil	AUX	_	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	7	aux	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	Kiçik	kiçik	ADJ	_	_	2	amod	_	_
2	pəncərəli	pəncərə	NOUN	_	_	3	nmod	_	Derivation=Li
3	evlərdə	ev	NOUN	_	Case=Loc|Number=Plur	7	obl	_	_
4	kifayət	kifayət	ADJ	_	_	6	amod	_	_
5	qədər	qədər	ADP	_	_	4	case	_	_
6	işıq	işıq	NOUN	_	Case=Nom|Number=Sing	7	nsubj	_	_
7	yoxdur	yox	VERB	_	Number=Sing|Person=3|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


