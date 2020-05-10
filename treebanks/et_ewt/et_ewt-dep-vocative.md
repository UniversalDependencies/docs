---
layout: base
title:  'Statistics of vocative in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `vocative`

This relation is universal.

44 nodes (0%) are attached to their parents as `vocative`.

30 instances of `vocative` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.18181818181818.

The following 11 pairs of parts of speech are connected with `vocative`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (15; 34% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (12; 27% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (4; 9% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (3; 7% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 vocative	color:blue
1	KaptenTrumm	Kapten_Trumm	PROPN	S	Case=Nom|Number=Sing	7	vocative	7:vocative	SpaceAfter=No
2	,	,	PUNCT	Z	_	7	punct	7:punct	_
3	mille	mis	PRON	P	Case=Gen|Number=Sing|PronType=Int,Rel	7	obl	7:obl	_
4	suhtes	suhtes	ADP	K	AdpType=Post	3	case	3:case	_
5	meie	mina	PRON	P	Case=Gen|Number=Plur|Person=1|PronType=Prs	6	nmod	6:nmod	_
6	maailmavaade	maa_ilma_vaade	NOUN	S	Case=Nom|Number=Sing	7	nsubj	7:nsubj	_
7	kivistunud	kivistuma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	_
8	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	7:aux	SpaceAfter=No
9	?	?	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 vocative	color:blue
1	XeoX	XeoX	PROPN	S	Case=Nom|Number=Sing	5	parataxis	5:parataxis	SpaceAfter=No
2	:	:	PUNCT	Z	_	1	punct	1:punct	_
3	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	5:nsubj	_
4	ei	ei	AUX	V	Polarity=Neg	5	aux	5:aux	_
5	püüdnuki	püüdma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	su	sina	PRON	P	Case=Gen|Number=Sing|Person=2|PronType=Prs	7	nmod	7:nmod	_
7	väidet	väide	NOUN	S	Case=Par|Number=Sing	9	obj	9:obj	_
8	ümber	ümber	ADV	D	_	9	compound:prt	9:compound	_
9	lükata	lükkama	VERB	V	VerbForm=Inf	5	xcomp	5:xcomp	SpaceAfter=No
10	,	,	PUNCT	Z	_	11	punct	11:punct	_
11	koolondee	koolondee	NOUN	S	Case=Par|Number=Sing	5	vocative	5:vocative	SpaceAfter=No
12	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 vocative	color:blue
1	Aga	aga	CCONJ	J	_	2	cc	2:cc	_
2	Chris	Chris	PROPN	S	Case=Nom|Number=Sing	6	vocative	6:vocative	_
3	...	...	PUNCT	Z	_	6	punct	6:punct	_
4	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	6	nsubj:cop	6:nsubj	_
5	siis	siis	ADV	D	_	6	advmod	6:advmod	_
6	katki	katki	ADV	D	_	0	root	0:root	_
7	saab	saama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
8	olla	olema	AUX	V	VerbForm=Inf	6	cop	6:cop	_
9	kui	kui	SCONJ	J	_	13	mark	13:mark	_
10	kõik	kõik	DET	P	Case=Nom|Number=Plur|PronType=Tot	11	det	11:det	_
11	asjad	asi	NOUN	S	Case=Nom|Number=Plur	13	nsubj	13:nsubj	_
12	ilusti	ilusti	ADV	D	_	13	advmod	13:advmod	_
13	töötavad	töötama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	6:advcl	SpaceAfter=No
14	?	?	PUNCT	Z	_	6	punct	6:punct	_

~~~


