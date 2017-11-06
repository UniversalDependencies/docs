---
layout: base
title:  'Statistics of dep:ig in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `dep:ig`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-dep.html">dep</a></tt>.

5 nodes (0%) are attached to their parents as `dep:ig`.

5 instances of `dep:ig` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 5 pairs of parts of speech are connected with `dep:ig`: <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (1; 20% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 dep:ig	color:blue
1	Cumberland	_	PROPN	PROPN	Number=Sing	4	compound	_	Proper=True
2	ve	_	CCONJ	CCONJ	_	3	cc	_	_
3	Strathearn	_	PROPN	PROPN	Number=Sing	1	conj	_	Proper=True
4	Dükü	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	6	acl:relcl	_	_
5	olan	_	AUX	VJ	Number=Sing|Polarity=Pos	4	cop	_	_
6	kardeşi	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	8	compound	_	_
7	Prens	_	NOUN	NN	Number=Sing	8	compound	_	_
8	Henry	_	PROPN	PROPN	Case=Nom|Number=Sing	14	nsubj	_	Proper=True
9	1770'te	_	NOUN	NN	Case=Loc|Number=Sing	14	obl:tmod	_	SpaceAfter=No
10	,	_	PUNCT	,	_	9	punct	_	_
11	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	12	det	_	_
12	zinacı	_	NOUN	NN	Number=Sing	14	advcl	_	_
13	olarak	_	AUX	CRB	Polarity=Pos	12	cop	_	_
14	ifşa	_	NOUN	NN	Number=Sing	0	root	_	_
15	edilmiş	_	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	14	fixed	_	_
16	ve	_	CCONJ	CCONJ	_	27	cc	_	_
17	Cumberland	_	PROPN	PROPN	Case=Nom|Number=Sing	27	nsubj	_	Proper=True
18	sonra	_	ADP	IN	_	19	dep:ig	_	_
19	ki	_	ADP	IN	_	20	case	_	_
20	yıl	_	NOUN	NN	Number=Sing	27	obl:tmod	_	_
21	genç	_	ADJ	JJ	Number=Sing	23	amod	_	_
22	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	23	det	_	_
23	dul	_	NOUN	NN	Number=Sing	25	acl:relcl	_	_
24	olan	_	AUX	VJ	Number=Sing|Polarity=Pos	23	cop	_	_
25	Anne	_	PROPN	PROPN	Number=Sing	27	advmod	_	Proper=True
26	Horton'la	_	PROPN	PROPN	Case=Ins|Number=Sing	25	flat:name	_	Proper=True
27	evlenmişti	_	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Pqp	14	conj	_	SpaceAfter=No
28	.	_	PUNCT	.	_	27	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep:ig	color:blue
1	Kirleticiler	_	NOUN	VN	Case=Nom|Number=Plur|Polarity=Pos	18	csubj	_	_
2	küçük	_	ADJ	JJ	Number=Sing	3	amod	_	_
3	yaşta	_	NOUN	NN	Case=Loc|Number=Sing	4	dep:ig	_	_
4	kilerin	_	NOUN	NN	Case=Gen|Number=Plur	6	nmod:poss	_	_
5	gelişmemiş	_	ADJ	VJ	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	6	acl:relcl	_	_
6	akciğerlerine	_	NOUN	NN	Case=Dat|Number=Plur|Number[psor]=Sing|Person[psor]=3	7	obj	_	_
7	saldırmanın	_	NOUN	VN	Aspect=Perf|Case=Gen|Mood=Ind|Tense=Pres|VerbForm=Ger	8	nmod:poss	_	_
8	yanı	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	9	compound	_	_
9	sıra	_	NOUN	NN	Number=Sing	15	advmod	_	_
10	ergen	_	NOUN	NN	Number=Sing	11	compound	_	_
11	beyninin	_	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nmod:poss	_	_
12	gelişiminde	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	15	advmod	_	_
13	uzun	_	ADJ	JJ	Number=Sing	14	amod	_	_
14	vadeli	_	ADJ	JJ	Number=Sing	15	amod	_	_
15	bozulmaya	_	NOUN	VN	Aspect=Perf|Case=Dat|Mood=Ind|Tense=Pres|VerbForm=Ger	18	advcl	_	_
16	da	_	ADV	RB	_	15	advmod:emph	_	_
17	yol	_	NOUN	NN	Number=Sing	18	obj	_	_
18	açabilirler	_	VERB	VB	Aspect=Hab|Mood=AbilGen|Number=Plur|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
19	.	_	PUNCT	.	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 dep:ig	color:blue
1	Cadıcılık	_	NOUN	NN	Number=Sing	2	compound	_	_
2	saati	_	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	nsubj	_	SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	örneğin	_	NOUN	NN	Case=Gen|Number=Sing	9	advmod	_	_
5	60'lı	_	ADJ	JJ	Number=Sing	6	amod	_	_
6	yıllarda	_	NOUN	NN	Case=Loc|Number=Plur	9	obl:tmod	_	_
7	Monster	_	PROPN	PROPN	_	9	obj	_	Proper=True
8	Mash'ı	_	PROPN	PROPN	Case=Acc|Number=Sing	7	flat:name	_	Proper=True
9	vurması	_	NOUN	VN	Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	10	compound	_	_
10	örneğinde	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	dep:ig	_	_
11	ki	_	PRON	PRF	_	19	obl	_	_
12	gibi	_	ADP	IN	_	11	case	_	_
13	en	_	ADV	RB	_	14	advmod	_	_
14	azından	_	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=2	17	advmod	_	_
15	korkunç	_	ADJ	JJ	Number=Sing	16	amod	_	_
16	orgun	_	NOUN	NN	Case=Gen|Number=Sing	17	nmod:poss	_	_
17	çalındığı	_	ADJ	VJ	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	18	acl:relcl	_	_
18	zaman	_	NOUN	NN	Number=Sing	19	obl:tmod	_	_
19	başlar	_	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
20	.	_	PUNCT	.	_	19	punct	_	_

~~~


