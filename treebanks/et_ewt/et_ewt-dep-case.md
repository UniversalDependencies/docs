---
layout: base
title:  'Statistics of case in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `case`

This relation is universal.

509 nodes (2%) are attached to their parents as `case`.

415 instances of `case` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24950884086444.

The following 6 pairs of parts of speech are connected with `case`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (349; 69% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (114; 22% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (34; 7% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="et_ewt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_ewt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case	color:blue
1	7-8	7-8	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	4	nsubj	4:nsubj	_
2	peaks	pidama	AUX	V	Mood=Cnd|Number=Sing|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	üldiselt	üldiselt	ADV	D	_	4	advmod	4:advmod	_
4	tähendama	tähendama	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	0	root	0:root	_
5	degradeerimist	degradeerimine	NOUN	S	Case=Par|Number=Sing	4	obj	4:obj	_
6	rea	rida	NOUN	S	Case=Gen|Number=Sing	5	nmod	5:nmod	_
7	võrra	võrra	ADP	K	AdpType=Post	6	case	6:case	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Kuid	kuid	CCONJ	J	_	2	cc	2:cc	_
2	teie	sina	PRON	P	Case=Gen|Number=Plur|Person=2|PronType=Prs	0	root	0:root	_
3	seas	seas	ADP	K	AdpType=Post	2	case	2:case	_
4	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
5	mõned	mõni	PRON	P	Case=Nom|Number=Plur|PronType=Ind	2	nsubj:cop	2:nsubj	SpaceAfter=No
6	,	,	PUNCT	Z	_	9	punct	9:punct	_
7	kes	kes	PRON	P	Case=Nom|Number=Plur|PronType=Int,Rel	9	nsubj	9:nsubj	_
8	ei	ei	AUX	V	Polarity=Neg	9	aux	9:aux	_
9	usu	uskuma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl	SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	2:punct	_
11	»	»	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 case	color:blue
1	Mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	2	nsubj	2:nsubj	_
2	paneks	panema	VERB	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	sind	sina	PRON	P	Case=Par|Number=Sing|Person=2|PronType=Prs	2	obj	2:obj	_
4	uskuma	uskuma	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	2	xcomp	2:xcomp	SpaceAfter=No
5	,	,	PUNCT	Z	_	9	punct	9:punct	_
6	et	et	SCONJ	J	_	9	mark	9:mark	_
7	NASA	NASA	NOUN	Y	Abbr=Yes	9	nsubj	9:nsubj	_
8	ei	ei	AUX	V	Polarity=Neg	9	aux	9:aux	_
9	valetanud	valetama	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp	4:ccomp	_
10	Apollo	Apollo	PROPN	S	Case=Nom|Number=Sing	9	obl	9:obl	_
11	11	11	NUM	N	NumForm=Digit|NumType=Card	10	flat	10:flat	_
12	kohta	kohta	ADP	K	AdpType=Post	10	case	10:case	SpaceAfter=No
13	?	?	PUNCT	Z	_	2	punct	2:punct	_

~~~


