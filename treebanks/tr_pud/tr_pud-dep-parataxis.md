---
layout: base
title:  'Statistics of parataxis in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `parataxis`

This relation is universal.

15 nodes (0%) are attached to their parents as `parataxis`.

12 instances of `parataxis` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.66666666666667.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (2; 13% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 6 parataxis	color:blue
1	Mailis	Mailis	PROPN	PROPN	Case=Nom|Number=Sing	20	nsubj	_	Proper=True
2	"	"	PUNCT	``	_	17	punct	_	SpaceAfter=No
3	Doktorlar	doktor	NOUN	NN	Case=Nom|Number=Plur	6	nsubj	_	_
4	bu	bu	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	5	det	_	_
5	aletlere	aletlere	NOUN	NN	Case=Dat|Number=Plur	6	obl	_	_
6	sahip	sahip	ADJ	JJ	Number=Sing	17	parataxis	_	_
7	değil	değil	AUX	NOMP	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux	_	SpaceAfter=No
8	,	,	PUNCT	,	_	6	punct	_	_
9	yalnızca	yalnızca	ADV	RB	_	17	advmod	_	_
10	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	12	det	_	_
11	reçete	reçet	NOUN	NN	Number=Sing	12	nmod:poss	_	_
12	defteri	defter	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	17	nsubj	_	_
13	ve	ve	CCONJ	CCONJ	_	16	cc	_	_
14	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	16	det	_	_
15	enjeksiyon	enjeksiyon	NOUN	NN	Number=Sing	16	nmod:poss	_	_
16	iğneleri	iğne	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=3|Polarity=Pos	12	conj	_	_
17	var	var	ADJ	JJ	Polarity=Pos	20	ccomp	_	SpaceAfter=No
18	.	_	PUNCT	.	_	17	punct	_	SpaceAfter=No
19	"	_	PUNCT	''	_	17	punct	_	_
20	dedi	de	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
21	.	.	PUNCT	.	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 parataxis	color:blue
1	Şurası	Şura	PRON	PRI	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	2	nsubj	_	_
2	açık	açık	ADJ	JJ	Number=Sing	11	parataxis	_	SpaceAfter=No
3	:	:	PUNCT	:	_	2	punct	_	_
4	Gebeliği	Gebelik	NOUN	NN	Case=Acc|Number=Sing	5	obj	_	_
5	önleme	önle	NOUN	VN	Aspect=Perf|Mood=Ind|Tense=Pres|VerbForm=Ger	6	nmod:poss	_	_
6	konularında	konu	NOUN	NN	Case=Loc|Number=Plur|Number[psor]=Sing|Person[psor]=3	11	obl	_	_
7	erkekler	erkek	NOUN	NN	Case=Nom|Number=Plur	11	nsubj	_	_
8	daha	daha	ADV	RB	_	9	advmod	_	_
9	çok	çok	ADV	RB	_	11	advmod	_	_
10	sorumluluk	sorumluluk	NOUN	NN	Number=Sing	11	nmod:poss	_	_
11	sahibi	sahip	NOUN	NN	Number=Sing	0	root	_	_
12	olabilirler	ol	AUX	VB	Aspect=Hab|Mood=GenPot|Number=Plur|Person=3|Tense=Pres	11	cop	_	SpaceAfter=No
13	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 7 parataxis	color:blue
1	Amerikalı	Amerikalı	PROPN	PROPN	Case=Nom|Number=Sing	21	nsubj	_	Proper=True|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	"	"	PUNCT	``	_	18	punct	_	SpaceAfter=No
4	Andy'yi	Andy	PROPN	PROPN	Case=Acc|Number=Sing	5	obj	_	Proper=True
5	tebrik	tebrik	NOUN	NN	Number=Sing	7	xcomp	_	_
6	etmek	et	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	5	compound:lvc	_	_
7	zorunda	zorun	NOUN	NN	Case=Loc|Number=Sing	18	parataxis	_	_
8	yım	i	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres	7	cop	_	_
9	!	!	PUNCT	.	_	7	punct	_	_
10	Dünyada	dünya	NOUN	NN	Case=Loc|Number=Sing	12	obl	_	_
11	bir	bir	NUM	CD	Definite=Ind|Number=Sing|Polarity=Pos	12	nummod	_	_
12	numara	numar	NOUN	NN	Number=Sing	18	csubj	_	_
13	olmak	ol	AUX	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number=Sing|Person=3|Tense=Fut	12	cop	_	SpaceAfter=No
14	,	,	PUNCT	,	_	15	punct	_	_
15	bu	bu	PRON	PRP	Definite=Def|Number=Sing|Polarity=Pos	12	appos	_	_
16	inanılmaz	inan	ADJ	VJ	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	18	acl	_	_
17	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	18	det	_	_
18	başarı	başarı	NOUN	NN	Number=Sing	21	ccomp	_	SpaceAfter=No
19	!	!	PUNCT	.	_	18	punct	_	SpaceAfter=No
20	"	"	PUNCT	''	_	18	punct	_	_
21	dedi	de	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
22	.	.	PUNCT	.	_	21	punct	_	_

~~~


