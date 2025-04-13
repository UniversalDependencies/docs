---
layout: base
title:  'Statistics of list in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `list`

This relation is universal.

11 nodes (0%) are attached to their parents as `list`.

11 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.27272727272727.

The following 5 pairs of parts of speech are connected with `list`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 64% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 list	color:blue
1	Teenuse	teenus	NOUN	S	Case=Gen|Number=Sing	2	nmod	2:nmod	_
2	kasutamiseks	kasutamine	NOUN	S	Case=Tra|Number=Sing	4	obl	4:obl	_
3	tuleb	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Verb=tulema_4
4	saata	saatma	VERB	V	VerbForm=Inf	3	csubj	3:csubj	Arg=tulema_Arg_1|Verb=saatma_3
5	SMS	SMS	NOUN	Y	Abbr=Yes	6	nmod	6:nmod	_
6	sõnum	sõnum	NOUN	S	Case=Nom|Number=Sing	4	obj	4:obj	Arg=saatma_Arg_1|NE=B-Unk
7	kujul	kuju	NOUN	S	Case=Ade|Number=Sing	4	obl	4:obl	_
8	"	"	PUNCT	Z	_	9	punct	9:punct	SpaceAfter=No
9	PEATUS	peatus	NOUN	S	Case=Nom|Number=Sing	7	appos	7:appos	_
10	peatuse	peatus	NOUN	S	Case=Gen|Number=Sing	11	nmod	11:nmod	_
11	nimi	nimi	NOUN	S	Case=Nom|Number=Sing	9	list	9:list	_
12	liini	liin	NOUN	S	Case=Gen|Number=Sing	13	nmod	13:nmod	_
13	number	number	NOUN	S	Case=Nom|Number=Sing	9	list	9:list	SpaceAfter=No
14	"	"	PUNCT	Z	_	9	punct	9:punct	_
15	lühinumbrile	lühi_number	NOUN	S	Case=All|Number=Sing	4	obl	4:obl	Arg=saatma_Arg_4
16	1311	1311	NUM	N	NumForm=Digit|NumType=Card	15	nummod	15:nummod	SpaceAfter=No
17	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 39 list	color:blue
1	Töö	töö	NOUN	S	Case=Gen|Number=Sing	3	nmod	3:nmod	_
2	ajaline	ajaline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	paindlikkus	paindlikkus	NOUN	S	Case=Nom|Number=Sing	4	nsubj	4:nsubj	_
4	väljendub	väljenduma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	tööturu	töö_turg	NOUN	S	Case=Gen|Number=Sing	6	nmod	6:nmod	_
6	parameetrites	parameeter	NOUN	S	Case=Ine|Number=Plur	4	obl	4:obl	_
7	nagu	nagu	SCONJ	J	_	13	mark	13:mark	SpaceAfter=No
8	:	:	PUNCT	Z	_	13	punct	13:punct	_
9	·	·	PUNCT	Z	_	13	punct	13:punct	_
10	täis-	täis	ADJ	A	Case=Nom|Degree=Pos|Hyph=Yes|Number=Sing	13	amod	13:amod	_
11	ja	ja	CCONJ	J	_	12	cc	12:cc	_
12	osaajaga	osa_aeg	NOUN	S	Case=Com|Number=Sing	10	conj	10:conj|13:amod	_
13	töö	töö	NOUN	S	Case=Nom|Number=Sing	6	appos	6:appos	SpaceAfter=No
14	;	;	PUNCT	Z	_	17	punct	17:punct	_
15	osaajaga	osa_aeg	NOUN	S	Case=Com|Number=Sing	16	nmod	16:nmod	_
16	töötamise	töötamine	NOUN	S	Case=Gen|Number=Sing	17	nmod	17:nmod	_
17	põhjused	põhjus	NOUN	S	Case=Nom|Number=Plur	13	conj	6:appos|13:conj	_
18	·	·	PUNCT	Z	_	19	punct	19:punct	_
19	kõrvaltöö	kõrval_töö	NOUN	S	Case=Nom|Number=Sing	13	list	13:list	_
20	·	·	PUNCT	Z	_	21	punct	21:punct	_
21	tööaeg	töö_aeg	NOUN	S	Case=Nom|Number=Sing	13	list	13:list	SpaceAfter=No
22	;	;	PUNCT	Z	_	26	punct	26:punct	_
23	rohkem	rohkem	ADV	D	_	26	advmod	26:advmod	_
24	ja	ja	CCONJ	J	_	25	cc	25:cc	_
25	vähem	vähem	ADV	D	_	23	conj	23:conj|26:advmod	_
26	töötamine	töötamine	NOUN	S	Case=Nom|Number=Sing	21	conj	13:list|21:conj	_
27	ja	ja	CCONJ	J	_	29	cc	29:cc	_
28	nende	see	PRON	P	Case=Gen|Number=Plur|PronType=Dem	29	nmod	29:nmod	_
29	põhjused	põhjus	NOUN	S	Case=Nom|Number=Plur	26	conj	13:list|26:conj	_
30	·	·	PUNCT	Z	_	26	punct	26:punct	_
31	alaline	alaline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	34	amod	34:amod	_
32	ja	ja	CCONJ	J	_	33	cc	33:cc	_
33	ajutine	ajutine	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	31	conj	31:conj|34:amod	_
34	töö	töö	NOUN	S	Case=Nom|Number=Sing	13	list	13:list	_
35	·	·	PUNCT	Z	_	36	punct	36:punct	_
36	vaheajad	vahe_aeg	NOUN	S	Case=Nom|Number=Plur	13	list	13:list	_
37	töötamises	töötamine	NOUN	S	Case=Ine|Number=Sing	36	nmod	36:nmod	_
38	·	·	PUNCT	Z	_	39	punct	39:punct	_
39	jt	jt	ADV	Y	Abbr=Yes	13	list	13:list	_

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 31 list	color:blue
1	Kui	kui	SCONJ	J	_	8	mark	8:mark	_
2	väiksema	väiksem	ADJ	A	Case=Gen|Degree=Cmp|Number=Sing	3	amod	3:amod	_
3	sissetulekuga	sisse_tulek	NOUN	S	Case=Com|Number=Sing	4	nmod	4:nmod	_
4	elanike	elanik	NOUN	S	Case=Gen|Number=Plur	5	nmod	5:nmod	_
5	sissetulekud	sisse_tulek	NOUN	S	Case=Nom|Number=Plur	8	nsubj:cop	8:nsubj	_
6	oleksid	olema	AUX	V	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
7	veidi	veidi	ADV	D	_	8	advmod	8:advmod	_
8	suuremad	suurem	ADJ	A	Case=Nom|Degree=Cmp|Number=Plur	10	advcl	10:advcl	SpaceAfter=No
9	,	,	PUNCT	Z	_	10	punct	10:punct	_
10	kulutataks	kulutama	VERB	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	Verb=kulutama
11	täiendav	täiendav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	12	acl	12:acl	_
12	sissetulek	sisse_tulek	NOUN	S	Case=Nom|Number=Sing	10	obj	10:obj	Arg=kulutama_Arg_1
13	tarbimisele	tarbimine	NOUN	S	Case=All|Number=Sing	10	obl	10:obl	Arg=kulutama_Arg_2|SpaceAfter=No
14	,	,	PUNCT	Z	_	23	punct	23:punct	_
15	suurema	suurem	ADJ	A	Case=Gen|Degree=Cmp|Number=Sing	16	amod	16:amod	_
16	sissetulekuga	sisse_tulek	NOUN	S	Case=Com|Number=Sing	17	nmod	17:nmod	_
17	elanike	elanik	NOUN	S	Case=Gen|Number=Plur	19	nmod	19:nmod	_
18	täiendav	täiendav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	19	acl	19:acl	_
19	sissetulek	sisse_tulek	NOUN	S	Case=Nom|Number=Sing	23	obj	23:obj	Arg=säästma_Arg_1
20	aga	aga	ADV	D	_	23	advmod	23:advmod	_
21	suure	suur	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	22	amod	22:amod	_
22	tõenäosusega	tõe_näosus	NOUN	S	Case=Com|Number=Sing	23	obl	23:obl	_
23	säästetakse	säästma	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	10	conj	0:root|10:conj	Verb=säästma
24	(	(	PUNCT	Z	_	25	punct	25:punct	SpaceAfter=No
25	Champernowne	Champernowne	PROPN	S	Case=Nom|Number=Sing	23	parataxis	23:parataxis	NE=B-Per
26	ja	ja	CCONJ	J	_	27	cc	27:cc	_
27	Cowell	Cowell	PROPN	S	Case=Nom|Number=Sing	25	conj	23:parataxis|25:conj	NE=B-Per|SpaceAfter=No
28	,	,	PUNCT	Z	_	27	punct	27:punct	_
29	1998	1998	NUM	N	NumForm=Digit|NumType=Card	27	parataxis	27:parataxis	SpaceAfter=No
30	,	,	PUNCT	Z	_	27	punct	27:punct	_
31	lk.	lk	NOUN	Y	Abbr=Yes	27	list	27:list	_
32	15	15	NUM	N	NumForm=Digit|NumType=Card	31	nummod	31:nummod	SpaceAfter=No
33	)	)	PUNCT	Z	_	25	punct	25:punct	SpaceAfter=No
34	.	.	PUNCT	Z	_	10	punct	10:punct	_

~~~


