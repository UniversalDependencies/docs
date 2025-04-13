---
layout: base
title:  'Statistics of obl:agent in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-obl.html">obl</a></tt>.

175 nodes (0%) are attached to their parents as `obl:agent`.

175 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21142857142857.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (83; 47% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (45; 26% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (24; 14% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (10; 6% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (6; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:agent	color:blue
1	Davosi	Davos	PROPN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	NE=B-Gep
2	analüütikute	analüütik	NOUN	S	Case=Gen|Number=Plur	3	obl:agent	3:obl:agent	_
3	arvates	arvama	VERB	V	VerbForm=Conv	4	advcl	4:advcl	Verb=arvama
4	toetuvad	toetuma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=toetuma
5	riigid	riik	NOUN	S	Case=Nom|Number=Plur	4	nsubj	4:nsubj	Arg=toetuma_Arg_0
6	neljale	neli	NUM	N	Case=All|Number=Sing|NumForm=Word|NumType=Card	7	nummod	7:nummod	_
7	sambale	sammas	NOUN	S	Case=All|Number=Sing	4	obl	4:obl	Arg=toetuma_Arg_1|SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:agent	color:blue
1	Minu	mina	PRON	P	Case=Gen|Number=Sing|Person=1|PronType=Prs	2	obl:agent	2:obl:agent	_
2	arvates	arvama	VERB	V	VerbForm=Conv	8	advcl	8:advcl	Verb=arvama
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
4	Eesti	Eesti	PROPN	S	Case=Gen|Number=Sing	5	nmod	5:nmod	NE=B-Gep
5	pangandus	pangandus	NOUN	S	Case=Nom|Number=Sing	8	nsubj:cop	8:nsubj	_
6	tehnoloogiliselt	tehnoloogilise=lt	ADV	D	_	7	advmod	7:advmod	_
7	maailma	maa_ilm	NOUN	S	Case=Gen|Number=Sing	8	nmod	8:nmod	_
8	tasemel	tase	NOUN	S	Case=Ade|Number=Sing	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	Z	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obl:agent	color:blue
1	Häda	häda	NOUN	S	Case=Nom|Number=Sing	2	nsubj	2:nsubj	_
2	sai	saama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	Otsmani	Otsman	PROPN	S	Case=Gen|Number=Sing	4	obl:agent	4:obl:agent	NE=B-Per
4	arvates	arvama	VERB	V	VerbForm=Conv	2	advcl	2:advcl	Verb=arvama
5	otsa	otsa	ADV	D	_	2	compound:prt	2:compound	_
6	siis	siis	ADV	D	_	2	advmod	2:advmod	SpaceAfter=No
7	,	,	PUNCT	Z	_	10	punct	10:punct	_
8	kui	kui	SCONJ	J	_	10	mark	10:mark	_
9	sõda	sõda	NOUN	S	Case=Nom|Number=Sing	10	nsubj	10:nsubj	Arg=lõppema_Arg_1
10	lõppes	lõppema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	2:advcl	SpaceAfter=No|Verb=lõppema
11	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


