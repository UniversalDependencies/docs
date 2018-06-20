---
layout: base
title:  'Statistics of appos in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `appos`

This relation is universal.

36 nodes (0%) are attached to their parents as `appos`.

36 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.08333333333333.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (12; 33% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (7; 19% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (4; 11% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (3; 8% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (2; 6% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	1912'de	1912	NOUN	NN	Case=Loc|Number=Sing	4	orphan	_	orig_deprel=obl:tmod
2	ilk	ilk	ADJ	JJ	Number=Sing	4	amod	_	_
3	film	film	NOUN	NN	Number=Sing	4	compound	_	_
4	şirketi	şirket	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	orig_deprel=nsubj
5	(	(	PUNCT	(	_	7	punct	_	SpaceAfter=No
6	Athina	Athina	PROPN	PROPN	Number=Sing	7	compound	_	Proper=True
7	Film	film	NOUN	NN	Number=Sing	4	appos	_	Proper=True|SpaceAfter=No
8	)	)	PUNCT	)	_	7	punct	_	_
9	ve	ve	CCONJ	CCONJ	_	13	cc	_	ToDo=cc-after-conj
10	1916'da	1916	NOUN	NN	Case=Loc|Number=Sing	13	obl:tmod	_	_
11	Asty	Asty	PROPN	PROPN	Number=Sing	12	compound	_	Proper=True
12	Film	film	NOUN	NN	Case=Nom|Number=Sing	13	nsubj	_	Proper=True
13	kuruldu	kur	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	4	conj	_	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 appos	color:blue
1	M.S.	M.s.	NOUN	NN	Number=Sing	3	compound	_	_
2	833	833	NUM	CD	Number=Sing	3	compound	_	_
3	yılında	yıl	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	18	obl:tmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	Nitra	Nitra	PROPN	PROPN	Number=Sing	6	compound	_	Proper=True
6	Prensliği'nin	Prensliği	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nmod:poss	_	Proper=True
7	(	(	PUNCT	(	_	10	punct	_	SpaceAfter=No
8	günümüzde	gün	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Plur|Person[psor]=1	10	amod	_	_
9	ki	ki	ADP	JJ	_	8	case	_	_
10	Slovakya	Slovakya	PROPN	PROPN	Number=Sing	6	appos	_	Proper=True|SpaceAfter=No
11	)	)	PUNCT	)	_	10	punct	_	_
12	fethi	feth	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	18	obl	_	_
13	ile	ile	ADP	IN	_	12	case	_	_
14	Büyük	büyük	ADJ	JJ	Number=Sing	16	amod	_	Proper=True
15	Moravya	Moravya	PROPN	PROPN	Number=Sing	16	compound	_	Proper=True
16	devleti	devlet	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	17	compound	_	Proper=True
17	haline	hal	NOUN	NN	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	18	advmod	_	_
18	gelmiştir	gel	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
19	.	.	PUNCT	.	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	Baş	baş	NOUN	NN	Number=Sing	2	compound	_	_
2	karakterlerden	karakter	NOUN	NN	Case=Abl|Number=Plur	3	compound	_	_
3	biri	bir	PRON	PRI	Number=Sing|Polarity=Pos	5	acl:relcl	_	_
4	olan	ol	AUX	VJ	Number=Sing|Polarity=Pos	3	cop	_	_
5	Negan	Negan	PROPN	PROPN	Case=Nom|Number=Sing	13	nsubj	_	Proper=True
6	(	(	PUNCT	(	_	7	punct	_	SpaceAfter=No
7	Jeffrey	Jeffrey	PROPN	PROPN	Number=Sing	5	appos	_	Proper=True
8	Dean	Dean	PROPN	PROPN	Number=Sing	7	flat:name	_	Proper=True
9	Morgan	Morgan	PROPN	PROPN	Number=Sing	7	flat:name	_	Proper=True|SpaceAfter=No
10	)	)	PUNCT	)	_	7	punct	_	_
11	bazı	bazı	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	12	det	_	_
12	özgürlüklere	özgürlük	NOUN	NN	Case=Dat|Number=Plur	13	advmod	_	_
13	sahip	sah	ADJ	JJ	Number=Sing	0	root	_	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


