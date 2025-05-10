---
layout: base
title:  'Statistics of obl:unmarked in UD_Coptic-Bohairic'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Bohairic: Relations: `obl:unmarked`

This relation is a language-specific subtype of <tt><a href="cop_bohairic-dep-obl.html">obl</a></tt>.

140 nodes (0%) are attached to their parents as `obl:unmarked`.

72 instances of `obl:unmarked` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.69285714285714.

The following 5 pairs of parts of speech are connected with `obl:unmarked`: <tt><a href="cop_bohairic-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt> (114; 81% instances), <tt><a href="cop_bohairic-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_bohairic-pos-PRON.html">PRON</a></tt> (14; 10% instances), <tt><a href="cop_bohairic-pos-DET.html">DET</a></tt>-<tt><a href="cop_bohairic-pos-NOUN.html">NOUN</a></tt> (10; 7% instances), <tt><a href="cop_bohairic-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_bohairic-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="cop_bohairic-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_bohairic-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:unmarked	color:blue
1	ⲟⲩⲟϩ	ⲟⲩⲟϩ	CCONJ	CONJ	_	4	cc	_	_
2	ⲁ	ⲁ	AUX	APST	_	4	aux	_	_
3	ⲩ	ⲛⲑⲱⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
4	ⲣⲱⲧⲉⲃ	ⲣⲱⲧⲉⲃ	VERB	V	VerbForm=Fin	0	root	_	_
5	ⲧⲏⲣ	ⲧⲏⲣ	NOUN	IMOD	PronType=Tot	4	obl:unmarked	_	_
6	ⲟⲩ	ⲛⲑⲱⲟⲩ	PRON	PPERO	Definite=Def|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
7	ⲙ	ⲛ	ADP	PREP	_	8	case	_	_
8	ⲙⲁ	ⲙⲁ	NOUN	N	_	4	obl	_	Entity=(place
9	ⲙⲁ	ⲙⲁ	VERB	V	VerbForm=Fin	8	nmod:unmarked	_	Entity=place)
10	ⲕⲁⲧⲁ	ⲕⲁⲧⲁ	ADP	PREP	Foreign=Yes	11	case	_	OrigLang=grc
11	ⲣ	ⲣ	NUM	NUM	NumType=Card	4	obl	_	Entity=(abstract|Orig=ⲣ︦
12	ⲣ	ⲣ	NUM	NUM	NumType=Card	11	nmod:unmarked	_	Entity=abstract)|Orig=ⲣ︦
13	ⲛⲉⲙ	ⲛⲉⲙ	ADP	PREP	_	14	cc	_	_
14	ⲕⲁⲧⲁ	ⲕⲁⲧⲁ	ADP	PREP	Foreign=Yes	15	case	_	OrigLang=grc
15	ⲛ	ⲛ	NUM	NUM	NumType=Card	11	conj	_	Entity=(abstract|Orig=ⲛ︦
16	ⲛ	ⲛ	NUM	NUM	NumType=Card	15	nmod:unmarked	_	Entity=abstract)|Orig=ⲛ︦
17	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obl:unmarked	color:blue
1	ⲡⲉϫⲏ	ⲡⲉϫⲏ	VERB	VBD	VerbForm=Fin	0	root	_	_
2	ⲓ	ⲁⲛⲟⲕ	PRON	PPERS	Definite=Def|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
3	ⲛⲁ	ⲛⲁ	ADP	PREP	_	4	case	_	_
4	ϥ	ⲛⲑⲟϥ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	obl	_	_
5	ϫⲉ	ϫⲉ	SCONJ	CONJ	_	8	mark	_	_
6	ⲛⲁ	ⲛⲁⲣⲉ	AUX	CPRET	_	8	aux	_	_
7	ⲓ	ⲁⲛⲟⲕ	PRON	PPERS	Definite=Def|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	ⲟⲩⲱϣ	ⲟⲩⲱϣ	VERB	V	VerbForm=Fin	1	ccomp	_	_
9	ϩⲱ	ϩⲱⲱ_ⲁⲛⲟⲕ	PRON	IMOD_PPERO	Definite=Def|Number=Sing|Person=1|PronType=Prs	8	obl:unmarked	_	_
10	ⲡⲉ	ⲡⲉ	PRON	COP	Gender=Masc|Number=Sing	8	cop	_	_
11	ⲉ	ⲉ	PART	PREP	_	12	mark	_	Orig=ⲉ̀
12	ⲛⲁⲩ	ⲛⲁⲩ	VERB	V	VerbForm=Inf	8	xcomp	_	_
13	ⲉⲣⲟ	ⲉ	ADP	PREP	_	14	case	_	Orig=ⲉ̀ⲣⲟ
14	ϥ	ⲛⲑⲟϥ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obl	_	_
15	ⲟⲩⲟϩ	ⲟⲩⲟϩ	CCONJ	CONJ	_	18	cc	_	_
16	ⲛⲧⲉ	ⲛⲧⲉ	AUX	ACONJ	_	18	aux	_	Orig=ⲛ̀ⲧⲉ
17	ϥ	ⲛⲑⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	_
18	ⲥⲙⲟⲩ	ⲥⲙⲟⲩ	VERB	V	VerbForm=Fin	8	conj	_	_
19	ⲉⲣⲟ	ⲉ	ADP	PREP	_	20	case	_	Orig=ⲉ̀ⲣⲟ
20	ⲓ	ⲁⲛⲟⲕ	PRON	PPERO	Definite=Def|Number=Sing|Person=1|PronType=Prs	18	obl	_	_
21	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:unmarked	color:blue
1	ⲛⲁⲓ	ⲫⲁⲓ	DET	PDEM	Definite=Def|Number=Plur|PronType=Dem	8	dislocated	_	Entity=(abstract
2	ⲧⲏⲣ	ⲧⲏⲣ	NOUN	IMOD	PronType=Tot	1	obl:unmarked	_	_
3	ⲟⲩ	ⲛⲑⲱⲟⲩ	PRON	PPERO	Definite=Def|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
4	ⲉⲧ	ⲉⲧⲉ	SCONJ	CREL	_	5	mark	_	_
5	ϩⲱⲟⲩ	ϩⲱⲟⲩ	VERB	VSTAT	VerbForm=Fin	1	acl:relcl	_	Entity=abstract)
6	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	8	mark	_	_
7	ⲩ	ⲛⲑⲱⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	_
8	ⲛⲏⲟⲩ	ⲓ	VERB	VSTAT	VerbForm=Fin	0	root	_	_
9	ⲉⲃⲟⲗ	ⲉⲃⲟⲗ	ADV	ADV	_	10	case	_	_
10	ⲥⲁϧⲟⲩⲛ	ⲥⲁϧⲟⲩⲛ	ADV	ADV	_	8	advmod	_	_
11	ⲟⲩⲟϩ	ⲟⲩⲟϩ	CCONJ	CONJ	_	13	cc	_	_
12	ⲥⲉ	ⲛⲑⲱⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	13	nsubj	_	_
13	ⲥⲱϥ	ⲥⲱϥ	VERB	V	VerbForm=Fin	8	conj	_	_
14	ⲙ	ⲛ	ADP	PREP	_	16	case	_	_
15	ⲡⲓ	ⲡⲓ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	Entity=(person
16	ⲣⲱⲙⲓ	ⲣⲱⲙⲓ	NOUN	N	_	13	obj	_	Entity=person)
17	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


