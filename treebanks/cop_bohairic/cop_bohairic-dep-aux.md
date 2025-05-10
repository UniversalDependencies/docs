---
layout: base
title:  'Statistics of aux in UD_Coptic-Bohairic'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Bohairic: Relations: `aux`

This relation is universal.

2294 nodes (7%) are attached to their parents as `aux`.

2294 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16608544027899.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="cop_bohairic-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_bohairic-pos-AUX.html">AUX</a></tt> (2257; 98% instances), <tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_bohairic-pos-AUX.html">AUX</a></tt> (20; 1% instances), <tt><a href="cop_bohairic-pos-PRON.html">PRON</a></tt>-<tt><a href="cop_bohairic-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="cop_bohairic-pos-ADV.html">ADV</a></tt>-<tt><a href="cop_bohairic-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cop_bohairic-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cop_bohairic-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cop_bohairic-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cop_bohairic-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="cop_bohairic-pos-ADP.html">ADP</a></tt>-<tt><a href="cop_bohairic-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cop_bohairic-pos-DET.html">DET</a></tt>-<tt><a href="cop_bohairic-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	ⲟⲩⲟϩ	ⲟⲩⲟϩ	CCONJ	CONJ	_	4	cc	_	_
2	ⲁ	ⲁ	AUX	APST	_	4	aux	_	_
3	ϥ	ⲛⲑⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	ⲓ	ⲓ	VERB	V	VerbForm=Fin	0	root	_	_
5	ⲉ	ⲉ	ADP	PREP	_	6	case	_	_
6	ⲙⲏⲣ	ⲙⲏⲣ	NOUN	N	_	4	obl	_	Entity=(place
7	ⲉ	ⲉ	ADP	PREP	_	9	case	_	_
8	ⲫ	ⲡ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	Entity=(place
9	ⲓⲟⲙ	ⲓⲟⲙ	NOUN	N	_	6	nmod	_	Entity=place)place)
10	ⲉ	ⲉ	ADP	PREP	_	12	case	_	_
11	ⲧ	ⲡ	DET	ART	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	Entity=(place
12	ⲭⲱⲣⲁ	ⲭⲱⲣⲁ	NOUN	N	Foreign=Yes	4	obl	_	OrigLang=grc
13	ⲛⲧⲉ	ⲛⲧⲉ	ADP	PREP	_	15	case	_	_
14	ⲛⲓ	ⲡⲓ	DET	ART	Definite=Def|Number=Plur|PronType=Art	15	det	_	Entity=(person-Gadara
15	ⲅⲉⲣⲅⲉⲥⲏⲛⲟⲥ	ⲅⲉⲣⲅⲉⲥⲏⲛⲟⲥ	PROPN	NPROP	Foreign=Yes	12	nmod	_	Entity=person-Gadara)place)|OrigLang=heb

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	ⲛⲑⲟϥ	ⲛⲑⲟϥ	PRON	PPERI	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	dislocated	_	Orig=ⲛ̀ⲑⲟϥ
2	ϩⲱ	ϩⲱⲱ	NOUN	IMOD	_	1	nmod:unmarked	_	_
3	ϥ	ⲛⲑⲟϥ	PRON	PPERO	Definite=Def|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
4	ⲛⲉ	ⲛⲁⲣⲉ	AUX	CPRET	_	6	aux	_	_
5	ⲟⲩ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	6	det	_	_
6	ⲣⲱⲙⲓ	ⲣⲱⲙⲓ	NOUN	N	_	0	root	_	_
7	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	9	mark	_	_
8	ϥ	ⲛⲑⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
9	ⲟⲩⲁⲃ	ⲟⲩⲁⲃ	VERB	VSTAT	VerbForm=Fin	6	acl:relcl	_	_
10	ⲡⲉ	ⲡⲉ	PRON	COP	Gender=Masc|Number=Sing	6	cop	_	_
11	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	13	mark	_	_
12	ϥ	ⲛⲑⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
13	ⲙⲟϣⲓ	ⲙⲟϣⲓ	VERB	V	VerbForm=Fin	6	acl:relcl	_	_
14	ϧⲉⲛ	ϧⲉⲛ	ADP	PREP	_	15	case	_	_
15	ⲛⲁ	ⲫⲁ	DET	PPOS	_	13	obl	_	_
16	ⲫ	ⲡ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	ⲛⲟⲩϯ	ⲛⲟⲩϯ	NOUN	N	_	15	nmod:poss	_	Orig=ϯ

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 22 aux	color:blue
1	ⲟⲩⲟϩ	ⲟⲩⲟϩ	CCONJ	CONJ	_	12	cc	_	_
2	ⲉⲧ	ⲉⲧ	AUX	APREC	_	5	aux	_	_
3	ⲁ	ⲁ	AUX	APST	_	5	aux	_	_
4	ⲩ	ⲛⲑⲱⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
5	ⲭⲁ	ⲭⲱ	VERB	V	VerbForm=Fin	12	advcl	_	_
6	ⲡⲓ	ⲡⲓ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Entity=(person
7	ⲙⲏϣ	ⲙⲏϣ	NOUN	N	_	5	obj	_	Entity=person)
8	ⲛⲥⲱ	ⲛⲥⲁ	ADP	PREP	_	9	case	_	_
9	ⲟⲩ	ⲛⲑⲱⲟⲩ	PRON	PPERO	Definite=Def|Number=Plur|Person=3|PronType=Prs	5	obl	_	_
10	ⲁ	ⲁ	AUX	APST	_	12	aux	_	_
11	ⲩ	ⲛⲑⲱⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	12	nsubj	_	_
12	ⲟⲗ	ⲱⲗⲓ	VERB	V	VerbForm=Fin	0	root	_	_
13	ϥ	ⲛⲑⲟϥ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obj	_	_
14	ⲛⲉⲙⲱ	ⲛⲉⲙ	ADP	PREP	_	15	case	_	_
15	ⲟⲩ	ⲛⲑⲱⲟⲩ	PRON	PPERO	Definite=Def|Number=Plur|Person=3|PronType=Prs	12	obl	_	_
16	ϩⲱ	ϩⲱⲱ	NOUN	IMOD	_	12	obl:unmarked	_	_
17	ϥ	ⲛⲑⲟϥ	PRON	PPERO	Definite=Def|Poss=Yes|PronType=Prs	16	nmod:poss	_	_
18	ϩⲓ	ϩⲓ	ADP	PREP	_	20	case	_	_
19	ⲡⲓ	ⲡⲓ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	20	det	_	Entity=(object
20	ϫⲟⲓ	ϫⲟⲓ	NOUN	N	_	12	obl	_	Entity=object)
21	ⲟⲩⲟϩ	ⲟⲩⲟϩ	CCONJ	CONJ	_	27	cc	_	_
22	ⲛⲁⲣⲉ	ⲛⲁⲣⲉ	AUX	CPRET	_	27	aux	_	_
23	ϩⲁⲛ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	25	det	_	Entity=(object
24	ⲕⲉ	ⲕⲉ	DET	ART	PronType=Art	25	det	_	_
25	ⲉϫⲏⲟⲩ	ϫⲟⲓ	NOUN	N	_	27	nsubj	_	Entity=object)
26	ⲛⲉⲙⲁ	ⲛⲉⲙ	ADP	PREP	_	27	case	_	_
27	ϥ	ⲛⲑⲟϥ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	conj	_	_
28	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


