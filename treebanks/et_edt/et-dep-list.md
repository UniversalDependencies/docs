---
layout: base
title:  'Statistics of list in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `list`

This relation is universal.

19 nodes (0%) are attached to their parents as `list`.

13 instances of `list` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.57894736842105.

The following 7 pairs of parts of speech are connected with `list`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (5; 26% instances), <tt><a href="et-pos-X.html">X</a></tt>-<tt><a href="et-pos-X.html">X</a></tt> (5; 26% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (4; 21% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (2; 11% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="et-pos-SYM.html">SYM</a></tt>-<tt><a href="et-pos-SYM.html">SYM</a></tt> (1; 5% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 list	color:blue
1	2.	2.	ADJ	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Ord	6	list	_	_
2	Edasine	edasine	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	_	_
3	töö	töö	NOUN	S	Case=Nom|Number=Sing	6	nsubj	_	_
4	kontseptsiooni	kontseptsioon	NOUN	S	Case=Gen|Number=Sing	5	nmod	_	_
5	loomisel	loomine	NOUN	S	Case=Ade|Number=Sing	3	nmod	_	_
6	toimus	toimuma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	paralleelselt	paralleelselt	ADV	D	_	6	advmod	_	_
8	nii	nii	ADV	D	_	10	cc:preconj	_	_
9	kirjanduse	kirjandus	NOUN	S	Case=Gen|Number=Sing	10	nmod	_	_
10	läbitöötamise	läbi_töötamine	NOUN	S	Case=Gen|Number=Sing	6	obl	_	_
11	kui	kui	CCONJ	J	_	13	cc	_	_
12	ekspertide	ekspert	NOUN	S	Case=Gen|Number=Plur	13	nmod	_	_
13	ümarlaudade	ümar_laud	NOUN	S	Case=Gen|Number=Plur	10	conj	_	_
14	kaudu	kaudu	ADP	K	AdpType=Post	10	case	_	SpaceAfter=No
15	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 list	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	_
2	Prosniiss	Prosniiss	X	T	Foreign=Yes	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	2	punct	_	_
4	dorohoi	dorohoi	X	T	Foreign=Yes	2	list	_	SpaceAfter=No
5	!	!	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 36 list	color:blue
1	Töö	töö	NOUN	S	Case=Gen|Number=Sing	3	nmod	_	_
2	ajaline	ajaline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	_	_
3	paindlikkus	paindlikkus	NOUN	S	Case=Nom|Number=Sing	4	nsubj	_	_
4	väljendub	väljenduma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	tööturu	töö_turg	NOUN	S	Case=Gen|Number=Sing	6	nmod	_	_
6	parameetrites	parameeter	NOUN	S	Case=Ine|Number=Plur	4	obl	_	_
7	nagu	nagu	SCONJ	J	_	13	mark	_	SpaceAfter=No
8	:	:	PUNCT	Z	_	4	punct	_	_
9	·	·	PUNCT	Z	_	13	punct	_	_
10	täis-	täis	ADJ	A	Case=Nom|Degree=Pos|Hyph=Yes|Number=Sing	13	amod	_	_
11	ja	ja	CCONJ	J	_	12	cc	_	_
12	osaajaga	osa_aeg	NOUN	S	Case=Com|Number=Sing	10	conj	_	_
13	töö	töö	NOUN	S	Case=Nom|Number=Sing	6	appos	_	SpaceAfter=No
14	;	;	PUNCT	Z	_	17	punct	_	_
15	osaajaga	osa_aeg	NOUN	S	Case=Com|Number=Sing	16	nmod	_	_
16	töötamise	töötamine	NOUN	S	Case=Gen|Number=Sing	17	nmod	_	_
17	põhjused	põhjus	NOUN	S	Case=Nom|Number=Plur	13	conj	_	_
18	·	·	PUNCT	Z	_	19	punct	_	_
19	kõrvaltöö	kõrval_töö	NOUN	S	Case=Nom|Number=Sing	13	list	_	_
20	·	·	PUNCT	Z	_	21	punct	_	_
21	tööaeg	töö_aeg	NOUN	S	Case=Nom|Number=Sing	13	list	_	SpaceAfter=No
22	;	;	PUNCT	Z	_	26	punct	_	_
23	rohkem	rohkem	ADV	D	_	26	advmod	_	_
24	ja	ja	CCONJ	J	_	25	cc	_	_
25	vähem	vähem	ADV	D	_	23	conj	_	_
26	töötamine	töötamine	NOUN	S	Case=Nom|Number=Sing	21	conj	_	_
27	ja	ja	CCONJ	J	_	29	cc	_	_
28	nende	see	PRON	P	Case=Gen|Number=Plur|PronType=Dem	29	nmod	_	_
29	põhjused	põhjus	NOUN	S	Case=Nom|Number=Plur	26	conj	_	_
30	·	·	PUNCT	Z	_	26	punct	_	_
31	alaline	alaline	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	34	amod	_	_
32	ja	ja	CCONJ	J	_	33	cc	_	_
33	ajutine	ajutine	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	31	conj	_	_
34	töö	töö	NOUN	S	Case=Nom|Number=Sing	13	list	_	_
35	·	·	PUNCT	Z	_	36	punct	_	_
36	vaheajad	vahe_aeg	NOUN	S	Case=Nom|Number=Plur	13	list	_	_
37	töötamises	töötamine	NOUN	S	Case=Ine|Number=Sing	36	nmod	_	_
38	·	·	PUNCT	Z	_	39	punct	_	_
39	jt	jt	ADV	Y	Abbr=Yes	13	list	_	_

~~~


