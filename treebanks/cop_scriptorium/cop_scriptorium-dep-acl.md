---
layout: base
title:  'Statistics of acl in UD_Coptic-Scriptorium'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Scriptorium: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="cop_scriptorium-dep-acl-relcl.html">acl:relcl</a></tt>.

9 nodes (0%) are attached to their parents as `acl`.

9 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.88888888888889.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt> (8; 89% instances), <tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt>-<tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 17 acl	color:blue
1	ⲁ	ⲁ	AUX	APST	_	3	aux	_	Orig=ⲁ̇
2	ϥ	ⲛⲧⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	ⲁϩⲉ	ⲱϩⲉ	VERB	V	VerbForm=Fin	0	root	_	Orig=ⲁ̇ϩⲉ
4	ⲣⲁⲧ	ⲣⲁⲧ	NOUN	N	_	3	obj	_	_
5	ϥ	ⲛⲧⲟϥ	PRON	PPERO	Definite=Def|Poss=Yes|PronType=Prs	4	nmod:poss	_	Orig=ϥ̇
6	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	8	mark	_	Orig=ⲉ̇
7	ϥ	ⲛⲧⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	ⲟⲕⲙ	ⲱⲕⲙ	VERB	VSTAT	VerbForm=Fin	3	advcl	_	Orig=ⲟ̇ⲕⲙ̇
9	.	.	PUNCT	PUNCT	_	3	punct	_	Orig=·
10	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	11	mark	_	Orig=ⲉ̇
11	ⲙⲛⲧ	ⲙⲛⲧⲉ	VERB	EXIST	Polarity=Neg	3	advcl	_	Orig=ⲙⲛ̇ⲧ
12	ϥ	ⲛⲧⲟϥ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	iobj	_	Orig=ϥ̇
13	ⲗⲁⲁⲩ	ⲗⲁⲁⲩ	NOUN	N	_	11	nsubj	_	Entity=(abstract|Orig=ⲗⲁⲁ̇ⲩ
14	ⲛ	ⲛ	ADP	PREP	_	15	case	_	_
15	ⲁⲡⲟⲗⲟⲅⲓⲁ	ⲁⲡⲟⲗⲟⲅⲓⲁ	NOUN	N	Foreign=Yes	13	nmod	_	Entity=abstract)|Orig=ⲁⲡⲟⲗⲟⲅⲓ̇ⲁ̇|OrigLang=grc
16	ⲉ	ⲉ	PART	PREP	_	17	mark	_	Orig=ⲉ̇
17	ϫⲱ	ϫⲱ	VERB	V	VerbForm=Inf	13	acl	_	_
18	ⲛⲁ	ⲛⲁ	ADP	PREP	_	19	case	_	_
19	ⲥ	ⲛⲧⲟⲥ	PRON	PPERO	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	17	obl	_	_
20	.	.	PUNCT	PUNCT	_	3	punct	_	Orig=·

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 acl	color:blue
1	ⲁ	ⲁ	AUX	APST	_	6	aux	_	Orig=Ⲁ
2	ⲟⲩⲁ	ⲟⲩⲁ	NUM	NUM	NumType=Card	6	nsubj	_	Entity=(person|Orig=ⲟⲩⲁ̇
3	ⲛ	ⲛ	ADP	PREP	_	5	case	_	Orig=ⲛ̇
4	ⲛⲉ	ⲡ	DET	ART	Definite=Def|Number=Plur|PronType=Art	5	det	_	Entity=(person
5	ⲥⲛⲏⲩ	ⲥⲟⲛ	NOUN	N	_	2	nmod	_	Entity=person)person)
6	ϫⲛⲉ	ϫⲛⲟⲩ	VERB	V	VerbForm=Fin	0	root	_	Orig=ϫ̇ⲛⲉ
7	ⲁⲡⲁ	ⲁⲡⲁ	NOUN	N	Foreign=Yes	6	obj	_	Entity=(person|Orig=ⲁ̇ⲡⲁ|OrigLang=he
8	ⲡⲁⲥⲧⲁⲙⲱⲛ	ⲡⲁⲥⲧⲁⲙⲱⲛ	PROPN	NPROP	_	7	flat	_	Entity=person)|Orig=ⲡⲁ̇ⲥⲧⲁⲙⲱⲛ
9	ϫⲉ	ϫⲉ	SCONJ	CONJ	_	10	mark	_	_
10	ⲟⲩ	ⲟⲩ	PRON	PINT	PronType=Int	6	ccomp	_	_
11	ⲡⲉ	ⲡⲉ	PRON	COP	Gender=Masc|Number=Sing	10	cop	_	_
12	ϯ	ⲁⲛⲟⲕ	PRON	PPERS	Definite=Def|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	Orig=ϯ̇
13	ⲛⲁ	ⲛⲁ	AUX	FUT	_	14	aux	_	_
14	ⲁⲁ	ⲉⲓⲣⲉ	VERB	V	VerbForm=Fin	10	acl	_	Orig=ⲁ̇ⲁ
15	ϥ	ⲛⲧⲟϥ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	obj	_	_
16	ϫⲉ	ϫⲉ	SCONJ	CONJ	_	18	mark	_	_
17	ⲥⲉ	ⲛⲧⲟⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	18	nsubj	_	_
18	ⲑⲗⲓⲃⲉ	ⲑⲗⲓⲃⲉ	VERB	V	Foreign=Yes|VerbForm=Fin	10	advcl	_	Orig=ⲑ̇ⲗⲓ̇ⲃⲉ|OrigLang=grc
19	ⲙⲙⲟ	ⲛ	ADP	PREP	_	20	case	_	Orig=ⲙ̇ⲙⲟ
20	ⲓ	ⲁⲛⲟⲕ	PRON	PPERO	Definite=Def|Number=Sing|Person=1|PronType=Prs	18	obj	_	Orig=ⲓ̇
21	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	23	mark	_	_
22	ⲓ	ⲁⲛⲟⲕ	PRON	PPERS	Definite=Def|Number=Sing|Person=1|PronType=Prs	23	nsubj	_	Orig=ⲓ̇
23	ϯ	ϯ	VERB	V	VerbForm=Fin	18	advcl	_	Orig=ϯ̇
24	ⲙ	ⲛ	ADP	PREP	_	26	case	_	Orig=ⲙ̇
25	ⲡⲁ	ⲡⲁ	DET	PPOS	Definite=Def|Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	26	nmod:poss	_	Entity=(object
26	ϩⲱⲃ	ϩⲱⲃ	NOUN	N	_	23	obj	_	_
27	ⲛ	ⲛ	ADP	PREP	_	28	case	_	Orig=ⲛ̇
28	ϭⲓϫ	ϭⲓϫ	NOUN	N	_	26	nmod	_	Entity=object)|Orig=ϭⲓ̇ϫ
29	ⲉⲃⲟⲗ	ⲉⲃⲟⲗ	ADV	ADV	_	23	advmod	_	Orig=ⲉ̇ⲃⲟⲗ
30	.	.	PUNCT	PUNCT	_	6	punct	_	Orig=·

~~~


