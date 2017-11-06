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
1	1912'de	_	NOUN	NN	Case=Loc|Number=Sing	4	orphan	_	orig_deprel=obl:tmod
2	ilk	_	ADJ	JJ	Number=Sing	4	amod	_	_
3	film	_	NOUN	NN	Number=Sing	4	compound	_	_
4	şirketi	_	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	orig_deprel=nsubj
5	(	_	PUNCT	(	_	7	punct	_	SpaceAfter=No
6	Athina	_	PROPN	PROPN	Number=Sing	7	compound	_	Proper=True
7	Film	_	NOUN	NN	Number=Sing	4	appos	_	Proper=True|SpaceAfter=No
8	)	_	PUNCT	)	_	7	punct	_	_
9	ve	_	CCONJ	CCONJ	_	13	cc	_	ToDo=cc-after-conj
10	1916'da	_	NOUN	NN	Case=Loc|Number=Sing	13	obl:tmod	_	_
11	Asty	_	PROPN	PROPN	Number=Sing	12	compound	_	Proper=True
12	Film	_	NOUN	NN	Case=Nom|Number=Sing	13	nsubj	_	Proper=True
13	kuruldu	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	4	conj	_	SpaceAfter=No
14	.	_	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 appos	color:blue
1	M.S.	_	NOUN	NN	Number=Sing	3	compound	_	_
2	833	_	NUM	CD	Number=Sing	3	compound	_	_
3	yılında	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	18	obl:tmod	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	Nitra	_	PROPN	PROPN	Number=Sing	6	compound	_	Proper=True
6	Prensliği'nin	_	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nmod:poss	_	Proper=True
7	(	_	PUNCT	(	_	10	punct	_	SpaceAfter=No
8	günümüzde	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Plur|Person[psor]=1	10	amod	_	_
9	ki	_	ADP	JJ	_	8	case	_	_
10	Slovakya	_	PROPN	PROPN	Number=Sing	6	appos	_	Proper=True|SpaceAfter=No
11	)	_	PUNCT	)	_	10	punct	_	_
12	fethi	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	18	obl	_	_
13	ile	_	ADP	IN	_	12	case	_	_
14	Büyük	_	ADJ	JJ	Number=Sing	16	amod	_	Proper=True
15	Moravya	_	PROPN	PROPN	Number=Sing	16	compound	_	Proper=True
16	devleti	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	17	compound	_	Proper=True
17	haline	_	NOUN	NN	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	18	advmod	_	_
18	gelmiştir	_	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
19	.	_	PUNCT	.	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	Baş	_	NOUN	NN	Number=Sing	2	compound	_	_
2	karakterlerden	_	NOUN	NN	Case=Abl|Number=Plur	3	compound	_	_
3	biri	_	PRON	PRI	Number=Sing|Polarity=Pos	5	acl:relcl	_	_
4	olan	_	AUX	VJ	Number=Sing|Polarity=Pos	3	cop	_	_
5	Negan	_	PROPN	PROPN	Case=Nom|Number=Sing	13	nsubj	_	Proper=True
6	(	_	PUNCT	(	_	7	punct	_	SpaceAfter=No
7	Jeffrey	_	PROPN	PROPN	Number=Sing	5	appos	_	Proper=True
8	Dean	_	PROPN	PROPN	Number=Sing	7	flat:name	_	Proper=True
9	Morgan	_	PROPN	PROPN	Number=Sing	7	flat:name	_	Proper=True|SpaceAfter=No
10	)	_	PUNCT	)	_	7	punct	_	_
11	bazı	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	12	det	_	_
12	özgürlüklere	_	NOUN	NN	Case=Dat|Number=Plur	13	advmod	_	_
13	sahip	_	ADJ	JJ	Number=Sing	0	root	_	SpaceAfter=No
14	.	_	PUNCT	.	_	13	punct	_	_

~~~


