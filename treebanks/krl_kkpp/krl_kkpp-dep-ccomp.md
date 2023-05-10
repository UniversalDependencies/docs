---
layout: base
title:  'Statistics of ccomp in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `ccomp`

This relation is universal.

26 nodes (1%) are attached to their parents as `ccomp`.

26 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.26923076923077.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (14; 54% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (5; 19% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="krl_kkpp-pos-ADV.html">ADV</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="krl_kkpp-pos-X.html">X</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Mie	mie	PRON	PRON	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	ušon	uškuo	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	jotta	jotta	SCONJ	SCONJ	_	8	mark	_	_
5	pahan	paha	ADJ	ADJ	Case=Gen|Number=Sing	8	obl	_	_
6	ieštä	ieštä	ADP	ADP	_	5	case	_	_
7	hiän	hiän	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	valiččou	valita	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
9	tämän	tämä	PRON	PRON	Case=Gen|Number=Sing|PronType=Dem	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Ihmini	ihmini	NOUN	NOUN	Case=Nom|Number=Sing	2	nsubj	_	_
2	ymmärtäy	ymmärteä	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	jotta	jotta	SCONJ	SCONJ	_	7	mark	_	_
5	hänen	hiän	PRON	PRON	Case=Gen|Number=Sing|Person=3|PronType=Prs	7	obl	_	_
6	rinnalla	rinnalla	ADP	ADP	_	5	case	_	_
7	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
8	šamanmoisie	šamanmoini	ADJ	ADJ	Case=Par|Number=Plur	9	amod	_	_
9	ihmisie	ihmini	NOUN	NOUN	Case=Par|Number=Plur	2	obj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 ccomp	color:blue
1	Omalla	oma	ADJ	ADJ	Case=Ade|Number=Sing	2	amod	_	_
2	ruavolla	ruado	NOUN	NOUN	Case=Ade|Number=Sing	3	obl	_	_
3	tahon	tahtoa	VERB	VERB	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	herättyä	herättyä	VERB	VERB	VerbForm=Inf	3	xcomp	_	_
5	ihmisissä	ihmini	NOUN	NOUN	Case=Ine|Number=Plur	4	obl	_	_
6	haluo	halu	NOUN	NOUN	Case=Par|Number=Sing	4	obj	_	_
7	tuntie	tuntie	VERB	VERB	VerbForm=Inf	6	ccomp	_	_
8	kotimuata	koti#mua	NOUN	NOUN	Case=Par|Number=Sing	7	obj	_	_
9	paremmin	paremmin	ADV	ADV	_	7	advmod	_	_
10	ta	ta	CCONJ	CCONJ	_	11	cc	_	_
11	käyvä	käyvä	VERB	VERB	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	7	conj	_	_
12	šitä	še	PRON	PRON	Case=Par|Number=Sing|PronType=Dem	11	obj	_	_
13	kaččomašša	kaččoa	VERB	VERB	Case=Ine|VerbForm=Inf	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No

~~~


