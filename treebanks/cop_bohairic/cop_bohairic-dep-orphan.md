---
layout: base
title:  'Statistics of orphan in UD_Coptic-Bohairic'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Bohairic: Relations: `orphan`

This relation is universal.

23 nodes (0%) are attached to their parents as `orphan`.

19 instances of `orphan` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.08695652173913.

The following 10 pairs of parts of speech are connected with `orphan`: <tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt> (8; 35% instances), <tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_bohairic-pos-NUM.html">NUM</a></tt> (4; 17% instances), <tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_bohairic-pos-PART.html">PART</a></tt> (2; 9% instances), <tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_bohairic-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="cop_bohairic-pos-NUM.html">NUM</a></tt>-<tt><a href="cop_bohairic-pos-NUM.html">NUM</a></tt> (2; 9% instances), <tt><a href="cop_bohairic-pos-DET.html">DET</a></tt>-<tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_bohairic-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_bohairic-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_bohairic-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="cop_bohairic-pos-NUM.html">NUM</a></tt>-<tt><a href="cop_bohairic-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 orphan	color:blue
1	ϣⲁⲣⲉ	ϣⲁⲣⲉ	AUX	AAOR	_	6	aux	_	_
2	ⲡⲓ	ⲡⲓ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	Entity=(place
3	ⲕⲁϩⲓ	ⲕⲁϩⲓ	NOUN	N	_	6	nsubj	_	Entity=place)
4	ⲙⲙⲁⲩⲁⲧ	ⲙⲙⲁⲩⲁⲧ	NOUN	IMOD	_	3	nmod:unmarked	_	_
5	ϥ	ⲛⲑⲟϥ	PRON	PPERO	Definite=Def|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
6	ϯⲟⲩⲧⲁϩ	ϯⲟⲩⲧⲁϩ	VERB	V	VerbForm=Fin	0	root	_	MSeg=ϯ-ⲟⲩⲧⲁϩ
7	ⲛ	ⲛ	ADP	PREP	_	8	case	_	_
8	ϣⲟⲣⲡ	ϣⲟⲣⲡ	NOUN	N	_	11	orphan	_	_
9	ⲛ	ⲛ	ADP	PREP	_	11	case	_	_
10	ⲟⲩ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	11	det	_	Entity=(plant
11	ⲥⲓⲙ	ⲥⲓⲙ	NOUN	N	_	6	parataxis	_	Entity=plant)
12	ⲓⲧⲁ	ⲓⲧⲁ	CCONJ	CONJ	_	14	case	_	_
13	ⲟⲩ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	14	det	_	Entity=(plant
14	ϧⲉⲙⲥ	ϧⲉⲙⲥ	NOUN	N	_	11	conj	_	Entity=plant)
15	ⲓⲧⲁ	ⲓⲧⲁ	CCONJ	CONJ	_	18	cc	_	_
16	ϣⲁ	ϣⲁⲣⲉ	AUX	AAOR	_	18	aux	_	_
17	ϥ	ⲛⲑⲟϥ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	_
18	ⲙⲟϩ	ⲙⲟϩ	VERB	V	VerbForm=Fin	11	conj	_	_
19	ⲛϫⲉ	ⲛϫⲉ	PART	PTC	_	20	case	_	_
20	ⲫⲏ	ⲫⲏ	DET	PDEM	Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	18	dislocated	_	Entity=(plant
21	ⲉⲧ	ⲉⲧⲉ	SCONJ	CREL	_	24	mark	_	_
22	ϧⲉⲛ	ϧⲉⲛ	ADP	PREP	_	24	case	_	_
23	ⲡⲓ	ⲡⲓ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	Entity=(plant
24	ϧⲉⲙⲥ	ϧⲉⲙⲥ	NOUN	N	_	20	acl:relcl	_	Entity=plant)plant)

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 27 orphan	color:blue
1	ⲛⲑⲱⲟⲩ	ⲛⲑⲱⲟⲩ	ADV	ADV	_	4	dislocated	_	_
2	ⲁ	ⲁ	AUX	APST	_	4	aux	_	_
3	ⲩ	ⲛⲑⲱⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
4	ϫⲟ	ϫⲟ	VERB	V	VerbForm=Fin	0	root	_	_
5	ⲥ	ⲛⲑⲟⲥ	PRON	PPERO	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
6	ⲛⲁ	ⲛⲁ	ADP	PREP	_	7	case	_	_
7	ϥ	ⲛⲑⲟϥ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	obl	_	_
8	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	10	mark	_	_
9	ⲩ	ⲛⲑⲱⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
10	ϫⲱ	ϫⲱ	VERB	V	VerbForm=Fin	4	advcl	_	_
11	ⲙⲙⲟ	ⲛ	ADP	PREP	_	12	case	_	_
12	ⲥ	ⲛⲑⲟⲥ	PRON	PPERO	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	expl	_	_
13	ϫⲉ	ϫⲉ	SCONJ	CONJ	_	14	mark	_	_
14	ⲓⲱⲁⲛⲛⲏⲥ	ⲓⲱⲁⲛⲛⲏⲥ	PROPN	NPROP	Foreign=Yes	10	ccomp	_	Entity=(person-John_the_Baptist|OrigLang=heb
15	ⲡⲓ	ⲡⲓ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	ⲣⲉϥϯⲱⲙⲥ	ⲣⲉϥϯⲱⲙⲥ	NOUN	N	_	14	appos	_	Entity=person-John_the_Baptist)|MSeg=ⲣⲉϥ-ϯ-ⲱⲙⲥ
17	ⲟⲩⲟϩ	ⲟⲩⲟϩ	CCONJ	CONJ	_	20	cc	_	_
18	ϩⲁⲛ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	20	det	_	Entity=(person
19	ⲕⲉ	ⲕⲉ	DET	ART	PronType=Art	20	det	_	_
20	ⲭⲱⲟⲩⲛⲓ	ⲭⲱⲟⲩⲛⲓ	NOUN	N	_	14	conj	_	Entity=person)
21	ϫⲉ	ϫⲉ	SCONJ	CONJ	_	22	mark	_	_
22	ⲏⲗⲓⲁⲥ	ⲏⲗⲓⲁⲥ	PROPN	NPROP	Foreign=Yes	20	orphan	_	Entity=(person-Elijah)|OrigLang=heb
23	ϩⲁⲛ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	25	det	_	Entity=(person
24	ⲕⲉ	ⲕⲉ	DET	ART	PronType=Art	25	det	_	_
25	ⲭⲱⲟⲩⲛⲓ	ⲭⲱⲟⲩⲛⲓ	NOUN	N	_	14	conj	_	Entity=person)
26	ϫⲉ	ϫⲉ	SCONJ	CONJ	_	27	mark	_	_
27	ⲟⲩⲁⲓ	ⲟⲩⲁⲓ	NUM	NUM	NumType=Card	25	orphan	_	Entity=(person
28	ⲛⲧⲉ	ⲛⲧⲉ	ADP	PREP	_	30	case	_	_
29	ⲛⲓ	ⲡⲓ	DET	ART	Definite=Def|Number=Plur|PronType=Art	30	det	_	Entity=(person
30	ⲡⲣⲟⲫⲏⲧⲏⲥ	ⲡⲣⲟⲫⲏⲧⲏⲥ	NOUN	N	Foreign=Yes	27	nmod	_	Entity=person)person)|OrigLang=grc
31	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 42 38 orphan	color:blue
1	ⲛ	ⲛ	ADP	PREP	_	2	case	_	_
2	ϣⲟⲣⲡ	ϣⲟⲣⲡ	NOUN	N	_	6	obl	_	_
3	ⲙⲉⲛ	ⲙⲉⲛ	PART	PTC	Foreign=Yes	6	advmod	_	OrigLang=grc
4	ⲁ	ⲁ	AUX	APST	_	6	aux	_	_
5	ϥ	ⲛⲑⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	ⲱⲗⲓ	ⲱⲗⲓ	VERB	V	VerbForm=Fin	0	root	_	_
7	ⲛ	ⲛ	ADP	PREP	_	9	case	_	_
8	ⲛⲓ	ⲡⲓ	DET	ART	Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	ⲯⲁⲗⲙⲟⲥ	ⲯⲁⲗⲙⲟⲥ	NOUN	N	Foreign=Yes	6	obj	_	OrigLang=grc
10	ⲛ	ⲛ	ADP	PREP	_	11	case	_	_
11	ⲁⲡⲟⲥⲧⲏⲑⲏⲥ	ⲁⲡⲟⲥⲧⲏⲑⲏⲥ	NOUN	N	Foreign=Yes	6	obl	_	OrigLang=grc
12	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	14	mark	_	_
13	ϥ	ⲛⲑⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	_
14	ⲉⲣⲛⲏⲥⲧⲉⲩⲉⲓⲛ	ⲉⲣⲛⲏⲥⲧⲉⲩⲉⲓⲛ	VERB	V	Foreign=Yes|VerbForm=Fin	6	advcl	_	MSeg=ⲉⲣ-ⲛⲏⲥⲧⲉⲩⲉⲓⲛ|OrigLang=grc
15	ϣⲁ	ϣⲁ	ADP	PREP	_	16	case	_	_
16	ⲣⲟⲩϩⲓ	ⲣⲟⲩϩⲓ	NOUN	N	_	14	obl	_	_
17	ⲙ	ⲛ	ADP	PREP	_	18	case	_	_
18	ⲙⲏⲛⲓ	ⲙⲏⲛⲓ	NOUN	N	_	14	obl	_	_
19	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	21	mark	_	_
20	ϥ	ⲛⲑⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	21	nsubj	_	_
21	ⲙⲏⲛ	ⲙⲟⲩⲛ	VERB	VSTAT	VerbForm=Fin	6	advcl	_	_
22	ⲉ	ⲉ	ADP	PREP	_	24	case	_	_
23	ⲛⲓ	ⲡⲓ	DET	ART	Definite=Def|Number=Plur|PronType=Art	24	det	_	_
24	ⲥⲩⲛⲁⲝⲓⲥ	ⲥⲩⲛⲁⲝⲓⲥ	NOUN	N	Foreign=Yes	21	obl	_	OrigLang=grc
25	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	27	mark	_	_
26	ϥ	ⲛⲑⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	27	nsubj	_	_
27	ⲉⲣⲫⲟⲣⲉⲓⲛ	ⲉⲣⲫⲟⲣⲉⲓⲛ	VERB	V	Foreign=Yes|VerbForm=Fin	6	advcl	_	MSeg=ⲉⲣ-ⲫⲟⲣⲉⲓⲛ|OrigLang=grc
28	ⲛ	ⲛ	ADP	PREP	_	30	case	_	_
29	ⲟⲩ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	30	det	_	_
30	ϣⲑⲏⲛ	ϣⲑⲏⲛ	NOUN	N	_	27	obj	_	_
31	ⲛ	ⲛ	ADP	PREP	_	32	case	_	_
32	ϥⲱⲓ	ϥⲟⲓ	NOUN	N	_	30	nmod	_	_
33	ⲉⲃⲟⲗ	ⲉⲃⲟⲗ	ADV	ADV	_	27	advmod	_	_
34	ⲥⲁϧⲟⲩⲛ	ⲥⲁϧⲟⲩⲛ	ADV	ADV	ExtPos=ADP	36	case	_	_
35	ⲙⲙⲟ	ⲛ	ADP	PREP	_	34	fixed	_	_
36	ϥ	ⲛⲑⲟϥ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	27	obl	_	_
37	ⲥⲁⲃⲟⲗ	ⲥⲁⲃⲟⲗ	ADV	ADV	_	42	orphan	_	_
38	ⲇⲉ	ⲇⲉ	PART	PTC	Foreign=Yes	42	orphan	_	OrigLang=grc
39	ⲛ	ⲛ	ADP	PREP	_	40	case	_	_
40	ⲑⲁⲓ	ⲫⲁⲓ	DET	PDEM	Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	37	obl	_	_
41	ⲟⲩ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	42	det	_	_
42	ϩⲉⲃⲥⲱ	ϩⲉⲃⲥⲱ	NOUN	N	_	27	conj	_	_
43	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	45	mark	_	_
44	ⲥ	ⲛⲑⲟⲥ	PRON	PPERS	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	45	nsubj	_	_
45	ⲫⲉⲣⲓⲱⲟⲩ	ⲫⲓⲣⲓ	VERB	VSTAT	VerbForm=Fin	42	acl:relcl	_	_
46	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


