---
layout: base
title:  'Statistics of appos in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `appos`

This relation is universal.

18 nodes (0%) are attached to their parents as `appos`.

18 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11111111111111.

The following 3 pairs of parts of speech are connected with `appos`: <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (9; 50% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt> (8; 44% instances), <tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	PART	discprt	_	1	advmod	_	_
4	_	_	PART	illocprt	_	1	advmod	_	_
5	_	_	VERB	vi	Person[subj]=3|Subcat=Int	0	root	_	_
6	_	_	NOUN	n	_	7	nmod	_	_
7	_	_	NOUN	n	_	9	nmod	_	_
8	_	_	NOUN	n	_	7	appos	_	_
9	_	_	NOUN	n	_	5	obl	_	_
10	_	_	ADP	post	_	9	case	_	_
11	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 appos	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	7	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	NOUN	n	_	5	nsubj	_	_
4	_	_	NOUN	n	_	3	appos	_	_
5	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	7	advcl	_	_
6	_	_	SCONJ	subordconn	_	5	mark	_	_
7	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
8	_	_	PART	focprt	_	7	advmod	_	_
9	_	_	NOUN	n	_	10	nmod	_	_
10	_	_	NOUN	n	_	7	obj	_	_
11	_	_	PROPN	nprop	_	10	appos	_	_
12	_	_	NOUN	n	_	7	obl	_	_
13	py	py	ADP	post	_	12	case	_	in
14	_	_	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 appos	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	16	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	advmod	_	_
4	_	_	PUNCT	punct	_	5	punct	_	_
5	_	_	NOUN	n	Number[psor]=Sing	9	parataxis:rep	_	_
6	_	_	PART	focprt	_	5	amod	_	_
7	_	_	PART	intprt	_	5	amod	_	_
8	_	_	PUNCT	punct	_	5	punct	_	_
9	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	16	advcl	_	_
10	_	_	PART	aspprt	_	9	advmod	_	_
11	_	_	ADP	post	_	9	case	_	_
12	_	_	PROPN	nprop	_	16	nsubj	_	_
13	_	_	PRON	pro	Person=3|PronType=Prs	12	appos	_	_
14	_	_	ADV	adv	_	13	amod	_	_
15	_	_	PART	illocprt	_	12	amod	_	_
16	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	0	root	_	_
17	_	_	PUNCT	punct	_	16	punct	_	_
18	_	_	PUNCT	punct	_	41	punct	_	_
19	_	_	NOUN	n	_	41	nsubj	_	_
20	_	_	PART	focprt	_	19	amod	_	_
21	_	_	PART	intprt	_	19	amod	_	_
22	_	_	PUNCT	punct	_	38	punct	_	_
23	_	_	NUM	num	_	25	nummod	_	_
24	_	_	NUM	num	_	23	goeswith	_	_
25	_	_	NOUN	n	_	29	nmod	_	_
26	_	_	NOUN	n	_	25	nmod	_	_
27	_	_	VERB	vt	Clusivity[subj]=In|Person[subj]=1|Subcat=Tran	25	acl	_	_
28	_	_	SCONJ	rel	_	27	mark	_	_
29	_	_	NOUN	n	_	31	obl	_	_
30	_	_	ADP	post	_	29	case	_	_
31	_	_	VERB	vt	Clusivity[subj]=In|Person[subj]=1|Subcat=Tran	38	advcl	_	_
32	_	_	SCONJ	subordconn	_	31	mark	_	_
33	_	_	SCONJ	subordconn	_	31	mark	_	_
34	_	_	NOUN	n	_	35	obj	_	_
35	_	_	VERB	vt	Clusivity[subj]=In|Person[subj]=1|Subcat=Tran	38	advcl	_	_
36	_	_	SCONJ	subordconn	_	35	mark	_	_
37	_	_	SCONJ	subordconn	_	35	mark	_	_
38	_	_	VERB	vi	Person[subj]=3|Subcat=Int	41	parataxis:rep	_	_
39	_	_	SCONJ	rel	_	38	mark	_	_
40	_	_	PUNCT	punct	_	38	punct	_	_
41	_	_	VERB	vt	Person[subj]=3|Subcat=Tran	16	parataxis:rep	_	_
42	_	_	ADV	adv	_	41	advmod	_	_
43	_	_	PUNCT	punct	_	41	punct	_	_
44	he'i	he'i	VERB	vt	Person[subj]=3|Subcat=Tran	41	parataxis	_	A3.say
45	_	_	PART	illocprt	_	44	advmod	_	_
46	_	_	PUNCT	punct	_	16	punct	_	_

~~~


