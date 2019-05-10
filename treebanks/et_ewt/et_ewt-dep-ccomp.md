---
layout: base
title:  'Statistics of ccomp in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `ccomp`

This relation is universal.

230 nodes (1%) are attached to their parents as `ccomp`.

229 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.7.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (148; 64% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (32; 14% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (26; 11% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (11; 5% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (6; 3% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 ccomp	color:blue
1	Arvan	arvama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	et	et	SCONJ	J	_	7	mark	7:mark	_
3	kõik	kõik	PRON	P	Case=Nom|Number=Plur|PronType=Tot	7	nsubj:cop	7:nsubj	_
4	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
5	sanyaku	sanyaku	NOUN	S	Case=Gen|Number=Sing	6	obl	6:obl	_
6	väärilised	vääriline	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	7	amod	7:amod	_
7	rikishid	rikishi	NOUN	S	Case=Nom|Number=Plur	1	ccomp	1:ccomp	SpaceAfter=No
8	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Samamoodi	sama_moodi	ADV	D	_	2	advmod	2:advmod	_
2	eeldan	eeldama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	7:punct	_
4	et	et	SCONJ	J	_	7	mark	7:mark	_
5	mees	mees	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	7:nsubj	_
6	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
7	viisakas	viisakas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	ccomp	2:ccomp	_
8	ja	ja	CCONJ	J	_	9	cc	9:cc	_
9	avab	avama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	7:conj	_
10	uksi	uks	NOUN	S	Case=Par|Number=Plur	9	obj	9:obj	_
11	jne	jne	ADV	Y	Abbr=Yes	7	conj	7:conj	SpaceAfter=No
12	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


