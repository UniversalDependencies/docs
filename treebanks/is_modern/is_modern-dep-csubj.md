---
layout: base
title:  'Statistics of csubj in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `csubj`

This relation is universal.

26 nodes (0%) are attached to their parents as `csubj`.

26 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.53846153846154.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (6; 23% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (6; 23% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (6; 23% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (4; 15% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-PART.html">PART</a></tt> (2; 8% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-VERB.html">VERB</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 17 csubj	color:blue
1	Eitt	einn	DET	ONE-N	Case=Nom|Number=Sing	3	det	_	_
2	það	sá	DET	D-N	Case=Nom	3	det	_	_
3	allra	allur	DET	Q-G	Case=Gen|Degree=Pos	0	root	_	_
4	galnasta	galinn	ADJ	ADJS-N	Case=Nom|Degree=Sup	3	amod	_	_
5	sem	sem	SCONJ	C	_	7	mark	_	_
6	menn	maður	NOUN	NS-N	Case=Nom|Definite=Ind|Number=Plur	7	nsubj	_	_
7	gerðu	gera	VERB	DODI	Mood=Ind|Tense=Past	3	acl:relcl	_	_
8	í	í	ADP	P	_	9	case	_	_
9	rugli	rugl	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	7	obl	_	_
10	sínu	sinn	PRON	PRO-D	Case=Dat	9	nmod:poss	_	_
11	á	á	ADP	P	_	12	case	_	_
12	árunum	ár	NOUN	NS-D	Case=Dat|Definite=Ind|Number=Plur	7	obl	_	_
13	2003	2003	NUM	NUM-D	Case=Dat	12	appos	_	_
14	2007	2007	NUM	NUM-D	Case=Dat	13	nummod	_	_
15	var	vera	AUX	BEDI	Mood=Ind|Tense=Past	3	cop	_	_
16	að	að	PART	TO	_	17	mark	_	_
17	fella	fella	VERB	VB	VerbForm=Inf	3	csubj	_	_
18	niður	niður	ADP	RP	_	17	compound:prt	_	_
19	hátekjuskattsþrepið	hátekjuskattsþrep	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	17	obj	_	SpaceAfter=No
20	.	.	PUNCT	.	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 csubj	color:blue
1	Annars	annar	PRON	OTHER-G	Case=Gen	2	det	_	_
2	vegar	vegur	NOUN	N-G	Case=Gen|Definite=Ind|Number=Sing	4	obl	_	_
3	er	vera	AUX	BEPI	Mood=Ind|Tense=Pres	4	cop	_	_
4	tilgangurinn	tilgangur	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
5	að	að	PART	TO	_	6	mark	_	_
6	vinna	vinna	VERB	VB	VerbForm=Inf	4	csubj	_	_
7	tölfræðiskýrslur	tölfræðiskýrsla	NOUN	NS-A	Case=Acc|Definite=Ind|Number=Plur	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	Önnur	annar	PRON	OTHER-N	Case=Nom	2	det	_	_
2	leið	leið	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	3	nsubj	_	_
3	hefði	hafa	VERB	HVDS	Mood=Sub|Tense=Past	0	root	_	_
4	verið	vera	AUX	BEN	Tense=Past|VerbForm=Part	3	cop	_	_
5	að	að	PART	TO	_	6	mark	_	_
6	hætta	hætta	VERB	VB	VerbForm=Inf	3	csubj	_	_
7	og	og	CCONJ	CONJ	_	8	cc	_	_
8	draga	draga	VERB	VB	VerbForm=Inf	6	csubj	_	_
9	úr	úr	ADP	P	_	11	case	_	_
10	þessu	þessi	DET	D-D	Case=Dat	11	det	_	_
11	verkefni	verkefni	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	8	obl	_	_
12	en	en	CCONJ	CONJ	_	14	cc	_	_
13	það	það	PRON	PRO-N	Case=Nom	14	nsubj	_	_
14	varð	verða	VERB	RDDI	Mood=Ind|Tense=Past	3	conj	_	OriginalHead=0
15	ekki	ekki	ADV	NEG	_	14	advmod	_	_
16	niðurstaðan	niðurstaða	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	14	xcomp	_	SpaceAfter=No
17	.	.	PUNCT	.	_	16	punct	_	_

~~~


