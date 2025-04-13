---
layout: base
title:  'Statistics of obl:agent in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-obl.html">obl</a></tt>.

18 nodes (0%) are attached to their parents as `obl:agent`.

18 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22222222222222.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (12; 67% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (6; 33% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:agent	color:blue
1	Saad	saama	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	enese	ise	PRON	P	Case=Gen|Number=Sing|PronType=Prs|Reflex=Yes	3	obl:agent	3:obl:agent	_
3	tahtmata	tahtma	VERB	V	Case=Abe|VerbForm=Sup|Voice=Act	1	advcl	1:advcl	_
4	-	-	PUNCT	Z	_	5	punct	5:punct	_
5	valikuta	valik	NOUN	S	Case=Abe|Number=Sing	3	conj	1:advcl|3:conj	_
6	õpetajaks	õpetaja	NOUN	S	Case=Tra|Number=Sing	1	xcomp	1:xcomp	_
7	-	-	PUNCT	Z	_	8	punct	8:punct	_
8	juhatajaks	juhataja	NOUN	S	Case=Tra|Number=Sing	6	conj	1:xcomp|6:conj	SpaceAfter=No
9	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:agent	color:blue
1	yehti	tegema	VERB	V	Mood=Ind|Tense=Past|Typo=Yes|VerbForm=Fin|Voice=Pass	0	root	0:root	CorrectForm=tehti
2	arvestus	arvestus	NOUN	S	Case=Nom|Number=Sing	1	obj	1:obj	_
3	aasta	aasta	NOUN	S	Case=Gen|Number=Sing	4	obl:agent	4:obl:agent	_
4	möödudes	mööduma	VERB	V	VerbForm=Conv	1	advcl	1:advcl	SpaceAfter=No
5	,	,	PUNCT	Z	_	7	punct	7:punct	_
6	aga	aga	CCONJ	J	_	7	cc	7:cc	_
7	praegu	praegu	ADV	D	_	1	conj	0:root|1:conj	_
8	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	7:aux	_
9	3	3	NUM	N	NumForm=Digit|NumType=Card	10	nummod	10:nummod	_
10	kuud	kuu	NOUN	S	Case=Par|Number=Sing	7	obl	7:obl	_
11	viirust	viirus	NOUN	S	Case=Par|Number=Sing	7	nsubj:cop	7:nsubj	_
12	olnud	olema	AUX	V	Tense=Past|VerbForm=Part|Voice=Act	7	cop	7:cop	_
13	ja	ja	CCONJ	J	_	17	cc	17:cc	_
14	juba	juba	ADV	D	_	17	advmod	17:advmod	_
15	nii	nii	ADV	D	_	16	advmod	16:advmod	_
16	palju	palju	ADV	D	_	17	advmod	17:advmod	_
17	surnud	surema	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	7	conj	0:root|7:conj	SpaceAfter=No
18	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


