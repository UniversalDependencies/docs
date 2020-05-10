---
layout: base
title:  'Statistics of fixed in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `fixed`

This relation is universal.

17 nodes (0%) are attached to their parents as `fixed`.

17 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `fixed`: <tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (12; 71% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (3; 18% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 6% instances), <tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Bu	bu	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	2	det	_	_
2	dönemde	dönem	NOUN	NN	Case=Loc|Number=Sing	17	obl	_	_
3	Piaf	Piaf	PROPN	PROPN	Number=Sing	11	nsubj	_	Proper=True
4	ve	ve	CCONJ	CCONJ	_	5	cc	_	_
5	Mômone	Mômone	PROPN	PROPN	Case=Nom|Number=Sing	3	conj	_	Proper=True
6	sokaklarda	sokaklar	NOUN	NN	Case=Loc|Number=Plur	11	obl	_	_
7	ya	ya	CCONJ	CCONJ	_	9	cc	_	_
8	da	da	ADV	RB	_	7	fixed	_	_
9	kulüpte	kulüp	NOUN	NN	Case=Loc|Number=Sing	6	conj	_	_
10	şarkı	şarkı	NOUN	NN	Number=Sing	11	obj	_	_
11	söylerken	söyle	ADV	CRB	Polarity=Pos	17	advcl	_	_
12	Marcelle	Marcel	PROPN	PROPN	Case=Nom|Number=Sing	17	nsubj	_	Proper=True
13	genelde	genel	ADV	RB	_	17	advmod	_	_
14	odada	oda	NOUN	NN	Case=Loc|Number=Sing	17	obl	_	_
15	kendi	kendi	PRON	PRR	Number=Sing|Reflex=Yes	16	nmod:poss	_	_
16	başına	baş	NOUN	NN	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	17	obl	_	_
17	kalırdı	kal	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
18	.	.	PUNCT	.	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Tabii	tabii	ADJ	JJ	Number=Sing	10	discourse	_	_
2	ki	ki	SCONJ	SCONJ	_	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	,	_	1	punct	_	_
4	modern	modern	ADJ	JJ	Number=Sing	5	amod	_	_
5	Almanya'nın	Almanya	PROPN	PROPN	Case=Gen|Number=Sing	8	nsubj	_	Proper=True
6	Nazi	Nazi	PROPN	PROPN	Number=Sing	7	nmod:poss	_	Proper=True
7	rejiminden	rejim	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obl	_	_
8	ayrılması	ayrıl	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	9	nsubj	_	_
9	gerektiğini	gerek	NOUN	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	10	xcomp	_	_
10	anlıyorum	anla	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Neyse	neyse	ADV	RB	_	21	advmod	_	_
2	ki	ki	SCONJ	SCONJ	_	1	fixed	_	_
3	Sony	Sony	PROPN	PROPN	Number=Sing	5	obl	_	Proper=True
4	Avustralya'da	Avustralya	PROPN	PROPN	Case=Loc|Number=Sing	3	flat	_	Proper=True
5	birisi	biri	PRON	PRI	Case=Nom|Number=Sing|Person=3|Polarity=Pos	21	nsubj	_	_
6	"	"	PUNCT	``	_	13	punct	_	SpaceAfter=No
7	Hey	hey	INTJ	INTJ	_	13	discourse	_	SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	_	_
9	bu	bu	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	10	det	_	_
10	arada	ara	NOUN	NN	Case=Loc|Number=Sing	13	obl	_	SpaceAfter=No
11	,	,	PUNCT	,	_	10	punct	_	_
12	bunu	bu	PRON	PRI	Case=Acc|Number=Sing|Polarity=Pos	13	obj	_	_
13	fark	fark	NOUN	NN	Number=Sing	20	amod	_	_
14	ettiniz	et	VERB	VB	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past	13	compound	_	_
15	mi	mi	AUX	AUX	Number=Sing|Person=3	13	aux	_	SpaceAfter=No
16	?	?	PUNCT	.	_	13	punct	_	SpaceAfter=No
17	"	"	PUNCT	''	_	13	punct	_	_
18	gibi	gibi	ADP	IN	_	13	case	_	_
19	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	20	det	_	_
20	şey	şey	NOUN	NN	Number=Sing	21	obj	_	_
21	söyledi	söyle	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	22	ccomp	_	_
22	diyor	de	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
23	Pall	Pall	PROPN	PROPN	Case=Nom|Number=Sing	22	nsubj	_	Proper=True|SpaceAfter=No
24	.	.	PUNCT	.	_	22	punct	_	_

~~~


