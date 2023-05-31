---
layout: base
title:  'Statistics of reparandum in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `reparandum`

This relation is universal.

8 nodes (0%) are attached to their parents as `reparandum`.

5 instances of `reparandum` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.625.

The following 7 pairs of parts of speech are connected with `reparandum`: <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (2; 25% instances), <tt><a href="et_ewt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (1; 13% instances), <tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et_ewt-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_ewt-pos-INTJ.html">INTJ</a></tt> (1; 13% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 13% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 reparandum	color:blue
1	Üllatavalt	üllatavalt	ADV	D	_	2	advmod	2:advmod	_
2	kerge	kerge	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	amod	4:amod	_
3	kerge	kerge	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	reparandum	2:reparandum	_
4	teema	teema	NOUN	S	Case=Nom|Number=Sing	5	nsubj	5:nsubj	_
5	oli	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 reparandum	color:blue
1	Kuigi	kuigi	SCONJ	J	_	4	mark	4:mark	_
2	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	_
3	ei	ei	AUX	V	Polarity=Neg	4	aux	4:aux	_
4	saa	saama	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	advcl	16:advcl	_
5	aru	aru	NOUN	S	Case=Par|Number=Sing	4	obj	4:obj	_
6	küll	küll	ADV	D	_	4	advmod	4:advmod	_
7	mis	mis	DET	P	Case=Nom|Number=Sing|PronType=Int,Rel	8	det	8:det	_
8	moodi	moodi	ADV	D	_	4	advmod	4:advmod	SpaceAfter=No
9	,	,	PUNCT	Z	_	16	punct	16:punct	_
10	aga	aga	CCONJ	J	_	16	cc	16:cc	_
11	kõik	kõik	PRON	P	Case=Nom|Number=Sing|PronType=Tot	16	nsubj	13:nsubj|16:nsubj	_
12	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	13	nsubj	11:ref	_
13	liigub	liikuma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	11:acl	_
14	kiiremini	kiiremini	ADV	D	_	13	advmod	13:advmod	SpaceAfter=No
15	,	,	PUNCT	Z	_	16	punct	16:punct	_
16	liigub	liikuma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
17	tema	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	16	obl	16:obl	SpaceAfter=No|CorrectSpaceAfter=Yes
18	jaoks	jaoks	ADP	K	AdpType=Post	17	case	17:case	_
19	ka	ka	ADV	D	_	20	advmod	20:advmod	_
20	aeg	aeg	ADV	D	_	21	reparandum	21:reparandum	_
21	aeglasemini	aeglasemini	ADV	D	_	16	advmod	16:advmod	SpaceAfter=No
22	.	.	PUNCT	Z	_	16	punct	16:punct	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 22 reparandum	color:blue
1	Enne	enne	ADP	K	AdpType=Prep	3	case	3:case	_
2	paastu	paast	NOUN	S	Case=Add|Number=Sing	3	nmod	3:nmod	_
3	minekut	minek	NOUN	S	Case=Par|Number=Sing	5	obl	5:obl	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	5:cop	_
5	ùlitàhtis	üli_tähtis	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Typo=Yes	0	root	0:root	CorrectForm=ülitähtis
6	oma	oma	PRON	P	Case=Gen|Number=Sing|Poss=Yes|PronType=Prs	7	nmod	7:nmod	_
7	kehale	keha	NOUN	S	Case=All|Number=Sing	8	obl	8:obl	_
8	òelda	ütlema	VERB	V	Typo=Yes|VerbForm=Inf	5	csubj:cop	5:csubj	SpaceAfter=No|CorrectForm=öelda
9	,	,	PUNCT	Z	_	12	punct	12:punct	_
10	et	et	SCONJ	J	_	12	mark	12:mark	_
11	homsest	homne	ADJ	A	Case=Ela|Degree=Pos|Number=Sing	12	obl	12:obl	_
12	làheme	minema	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Typo=Yes|VerbForm=Fin|Voice=Act	8	ccomp	8:ccomp	CorrectForm=läheme
13	paastule	paast	NOUN	S	Case=All|Number=Sing	12	obl	12:obl	SpaceAfter=No
14	,	,	PUNCT	Z	_	17	punct	17:punct	_
15	et	et	SCONJ	J	_	17	mark	17:mark	_
16	keha	keha	NOUN	S	Case=Par|Number=Sing	17	obj	17:obj	_
17	puhastada	puhastama	VERB	V	VerbForm=Inf	12	advcl	12:advcl	SpaceAfter=No
18	,	,	PUNCT	Z	_	20	punct	20:punct	_
19	jààkainetest	jääk_aine	NOUN	S	Case=Ela|Number=Plur|Typo=Yes	20	obl	20:obl	CorrectForm=jääkainetest
20	puhastada	puhastama	VERB	V	VerbForm=Inf	17	conj	17:conj	_
21	vòi	või	CCONJ	J	Typo=Yes	25	cc	25:cc	CorrectForm=või
22	vòi	või	CCONJ	J	Typo=Yes	21	reparandum	21:reparandum	CorrectForm=või
23	misiganes	mis_iganes	ADV	D	_	24	advmod	24:advmod	_
24	eesmàrgil	ees_märk	NOUN	S	Case=Ade|Number=Sing|Typo=Yes	25	obl	25:obl	CorrectForm=eesmärgil
25	paastume	paastuma	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	17	conj	17:conj	SpaceAfter=No
26	.	.	PUNCT	Z	_	5	punct	5:punct	_

~~~


