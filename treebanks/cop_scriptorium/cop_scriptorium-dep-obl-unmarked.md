---
layout: base
title:  'Statistics of obl:unmarked in UD_Coptic-Scriptorium'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Scriptorium: Relations: `obl:unmarked`

This relation is a language-specific subtype of <tt><a href="cop_scriptorium-dep-obl.html">obl</a></tt>.

191 nodes (0%) are attached to their parents as `obl:unmarked`.

144 instances of `obl:unmarked` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.08900523560209.

The following 7 pairs of parts of speech are connected with `obl:unmarked`: <tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt> (139; 73% instances), <tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> (26; 14% instances), <tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt>-<tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt> (20; 10% instances), <tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt>-<tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt>-<tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_scriptorium-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 obl:unmarked	color:blue
1	ⲁ	ⲁ	AUX	APST	_	3	aux	_	Orig=ⲁ̇
2	ϥ	ⲛⲧⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	ⲕⲁ	ⲕⲱ	VERB	V	VerbForm=Fin	0	root	_	_
4	ϩⲉⲛ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	5	det	_	Entity=(abstract|Orig=ϩⲛ̇
5	ⲕⲟⲩⲓ	ⲕⲟⲩⲓ	NOUN	N	_	3	obj	_	Entity=abstract)|Orig=ⲕⲟⲩⲓ̇
6	ⲛⲁ	ⲛⲁ	ADP	PREP	_	7	case	_	_
7	ϥ	ⲛⲧⲟϥ	PRON	PPERO	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
8	ⲉⲧⲃⲉ	ⲉⲧⲃⲉ	ADP	PREP	_	10	case	_	Orig=ⲉ̇ⲧⲃⲉ
9	ⲧⲉϥ	ⲡⲉϥ	DET	PPOS	Definite=Def|Gender=Fem|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod:poss	_	Entity=(abstract
10	ⲭⲣⲉⲓⲁ	ⲭⲣⲉⲓⲁ	NOUN	N	Foreign=Yes	3	obl	_	Orig=ⲭⲣⲓ̇ⲁ̇|OrigLang=grc
11	ⲙⲁⲩⲁⲁ	ⲙⲁⲩⲁⲁ	NOUN	IMOD	_	3	obl:unmarked	_	Orig=ⲙⲁⲩⲁ̇ⲁ
12	ϥ	ⲛⲧⲟϥ	PRON	PPERO	Definite=Def|Poss=Yes|PronType=Prs	11	nmod:poss	_	Entity=abstract)
13	·	·	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 obl:unmarked	color:blue
1	ⲡⲉϫⲁ	ⲡⲉϫⲉ	VERB	VBD	VerbForm=Fin	0	root	_	_
2	ϥ	ⲛⲧⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	_
3	ⲛⲁ	ⲛⲁ	ADP	PREP	_	4	case	_	_
4	ⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERO	Definite=Def|Number=Plur|Person=3|PronType=Prs	1	obl	_	_
5	ϫⲉ	ϫⲉ	SCONJ	CONJ	_	10	mark	_	_
6	ⲡⲱⲥ	ⲡⲱⲥ	PRON	PINT	PronType=Int	10	obl:unmarked	_	CxnElt=10:Interrogative-Polar-Direct.WHWord
7	ϭⲉ	ϭⲉ	PART	PTC	_	10	advmod	_	_
8	ⲛ	ⲛ	ADV	NEG	Polarity=Neg	10	advmod	_	_
9	ⲧⲉⲧⲛ	ⲛⲧⲱⲧⲛ	PRON	PPERS	Definite=Def|Number=Plur|Person=2|PronType=Prs	10	nsubj	_	_
10	ⲛⲟⲉⲓ	ⲛⲟⲉⲓ	VERB	V	Foreign=Yes|VerbForm=Fin	1	ccomp	_	Cxn=Interrogative-WHInfo-Indirect|CxnElt=10:Interrogative-Polar-Direct.Clause|Orig=ⲛⲟⲉⲓⲉ|OrigLang=grc
11	ⲁⲛ	ⲁⲛ	ADV	NEG	Polarity=Neg	10	advmod	_	_
12	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:unmarked	color:blue
1	ⲛⲁⲓ	ⲡⲁⲓ	DET	PDEM	Definite=Def|Number=Plur|PronType=Dem	8	dislocated	_	Entity=(abstract
2	ⲧⲏⲣ	ⲧⲏⲣ	NOUN	IMOD	PronType=Tot	1	obl:unmarked	_	_
3	ⲟⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERO	Definite=Def|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
4	ⲉⲧ	ⲉⲧ	SCONJ	CREL	_	5	mark	_	_
5	ϩⲟⲟⲩ	ϩⲟⲟⲩ	VERB	VSTAT	VerbForm=Fin	1	acl:relcl	_	Entity=abstract)
6	ⲉ	ⲉⲣⲉ	PART	CFOC	_	8	mark	_	_
7	ⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	8	nsubj	_	_
8	ⲛⲏⲩ	ⲉⲓ	VERB	VSTAT	VerbForm=Fin	0	root	_	_
9	ⲉⲃⲟⲗ	ⲉⲃⲟⲗ	ADV	ADV	_	8	advmod	_	_
10	ϩⲓ	ϩⲓ	ADP	PREP	_	11	case	_	_
11	ϩⲟⲩⲛ	ϩⲟⲩⲛ	NOUN	N	_	8	obl	_	_
12	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	14	mark	_	_
13	ⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	_
14	ϫⲱϩⲙ	ϫⲱϩⲙ	VERB	V	VerbForm=Fin	8	advcl	_	_
15	ⲙ	ⲛ	ADP	PREP	_	17	case	_	_
16	ⲡ	ⲡ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	Entity=(person
17	ⲣⲱⲙⲉ	ⲣⲱⲙⲉ	NOUN	N	_	14	obj	_	Entity=person)
18	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


