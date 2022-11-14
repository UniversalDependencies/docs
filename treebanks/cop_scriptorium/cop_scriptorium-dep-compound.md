---
layout: base
title:  'Statistics of compound in UD_Coptic-Scriptorium'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Scriptorium: Relations: `compound`

This relation is universal.

28 nodes (0%) are attached to their parents as `compound`.

23 instances of `compound` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57142857142857.

The following 8 pairs of parts of speech are connected with `compound`: <tt><a href="cop_scriptorium-pos-NUM.html">NUM</a></tt>-<tt><a href="cop_scriptorium-pos-NUM.html">NUM</a></tt> (17; 61% instances), <tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> (3; 11% instances), <tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="cop_scriptorium-pos-NUM.html">NUM</a></tt>-<tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_scriptorium-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 compound	color:blue
1	ⲛ	ⲡ	DET	ART	Definite=Def|Number=Plur|PronType=Art	8	dislocated	_	Entity=(person
2	ⲉⲛⲧ	ⲉⲧⲉⲣⲉ	SCONJ	CREL	_	5	mark	_	_
3	ⲁ	ⲁ	AUX	APST	_	5	aux	_	_
4	ⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
5	ⲟⲩⲱⲙ	ⲟⲩⲱⲙ	VERB	V	VerbForm=Fin	1	acl:relcl	_	Entity=person)
6	ⲇⲉ	ⲇⲉ	PART	PTC	Foreign=Yes	8	advmod	_	OrigLang=grc
7	ⲛⲉ	ⲛⲉⲣⲉ	AUX	CPRET	_	8	aux	_	_
8	ⲩⲛ	ⲟⲩⲛ	VERB	EXIST	_	0	root	_	_
9	ⲁⲣⲁ	ⲁⲣⲁ	PART	PTC	Foreign=Yes	8	advmod	_	OrigLang=grc
10	ⲩ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	14	det	_	Entity=(person
11	ϭⲓⲥ	ϭⲓⲥ	NUM	NUM	NumType=Card	12	compound	_	_
12	ⲧⲃⲁ	ⲧⲃⲁ	NUM	NUM	NumType=Card	14	nummod	_	_
13	ⲛ	ⲛ	ADP	PREP	_	14	case	_	Orig=ⲣ
14	ⲣⲱⲙⲉ	ⲣⲱⲙⲉ	NOUN	N	_	8	nsubj	_	Entity=person)
15	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	ⲁ	ⲁ	AUX	APST	_	3	aux	_	Orig=[.]
2	ⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	3	compound	_	_
3	ⲉⲓ	ⲉⲓ	VERB	V	VerbForm=Fin	0	root	_	_
4	ⲇⲉ	ⲇⲉ	PART	PTC	Foreign=Yes	3	advmod	_	OrigLang=grc
5	ⲉϩⲣⲁⲓ	ⲉϩⲣⲁⲓ	ADV	ADV	_	3	advmod	_	_
6	ⲉ	ⲉ	ADP	PREP	_	7	case	_	_
7	ⲕⲁⲡⲁⲣⲛⲁⲟⲩⲙ	ⲕⲁⲡⲁⲣⲛⲁⲟⲩⲙ	PROPN	NPROP	Foreign=Yes	3	obl	_	Entity=(place-Capernaum)|OrigLang=grc
8	ⲁⲩⲱ	ⲁⲩⲱ	CCONJ	CONJ	_	18	cc	_	_
9	ⲛⲧⲉⲣⲉ	ⲛⲧⲉⲣⲉ	AUX	APREC	_	11	aux	_	_
10	ϥ	ⲛⲧⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
11	ⲃⲱⲕ	ⲃⲱⲕ	VERB	V	VerbForm=Fin	18	advcl	_	_
12	ⲉϩⲟⲩⲛ	ⲉϩⲟⲩⲛ	ADV	ADV	_	11	advmod	_	_
13	ⲉ	ⲉ	ADP	PREP	_	15	case	_	_
14	ⲡ	ⲡ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	Entity=(place
15	ⲏⲓ	ⲏⲓ	NOUN	N	_	11	obl	_	Entity=place)|Orig=ⲏⲉⲓ
16	ⲁ	ⲁ	AUX	APST	_	18	aux	_	_
17	ϥ	ⲛⲧⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	_
18	ϫⲛⲟⲩ	ϫⲛⲟⲩ	VERB	V	VerbForm=Fin	3	conj	_	_
19	ⲟⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERO	Definite=Def|Number=Plur|Person=3|PronType=Prs	18	obj	_	_
20	ϫⲉ	ϫⲉ	SCONJ	CONJ	_	23	mark	_	_
21	ⲉⲣⲉ	ⲉⲣⲉ	PART	CFOC	_	23	mark	_	_
22	ⲧⲛ	ⲛⲧⲱⲧⲛ	PRON	PPERS	Definite=Def|Number=Plur|Person=2|PronType=Prs	23	nsubj	_	_
23	ϣⲁϫⲉ	ϣⲁϫⲉ	VERB	V	VerbForm=Fin	18	ccomp	_	_
24	ⲙⲛ	ⲙⲛ	ADP	PREP	_	26	case	_	_
25	ⲛⲉⲧⲛ	ⲡⲉⲧⲛ	DET	PPOS	Definite=Def|Number=Plur|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	26	det	_	_
26	ⲉⲣⲏⲩ	ⲉⲣⲏⲩ	NOUN	N	PronType=Rcp	23	obl	_	_
27	ϩⲛ	ϩⲛ	ADP	PREP	_	29	case	_	_
28	ⲧⲉ	ⲡ	DET	ART	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	29	det	_	Entity=(place
29	ϩⲓⲏ	ϩⲓⲏ	NOUN	N	_	23	obl	_	Entity=place)
30	ⲉⲧⲃⲉ	ⲉⲧⲃⲉ	ADP	PREP	_	31	case	_	_
31	ⲟⲩ	ⲟⲩ	PRON	PINT	PronType=Int	23	obl	_	_
32	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound	color:blue
1	ⲱ	ⲱ	PART	PTC	Foreign=Yes	3	discourse	_	Orig=Ⲱ̅|OrigLang=grc
2	ⲡ	ⲡ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	Entity=(person
3	ⲛⲁⲏⲧ	ⲛⲁⲏⲧ	NOUN	N	_	0	root	_	Orig=ⲛⲁⲏⲧ`
4	ⲙⲁⲩⲁⲁ	ⲙⲁⲩⲁⲁ	ADV	IMOD	_	3	advmod	_	_
5	ϥ	ⲛⲧⲟϥ	PRON	PPERO	Definite=Def|Poss=Yes|PronType=Prs	4	det	_	_
6	·	·	PUNCT	PUNCT	_	9	punct	_	_
7	ⲁⲩⲱ	ⲁⲩⲱ	CCONJ	CONJ	_	9	cc	_	_
8	ⲡ	ⲡ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	ⲙⲁⲓ	ⲙⲁⲓ	NOUN	N	_	3	conj	_	Orig=ⲙⲁⲓ̅
10	ⲣⲱⲙⲉ	ⲣⲱⲙⲉ	NOUN	N	_	9	compound	_	Entity=(person
11	ⲛⲓⲙ	ⲛⲓⲙ	PRON	PINT	PronType=Ind	10	det	_	Entity=person)person)
12	·	·	PUNCT	PUNCT	_	3	punct	_	_

~~~


