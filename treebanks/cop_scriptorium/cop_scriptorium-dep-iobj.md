---
layout: base
title:  'Statistics of iobj in UD_Coptic-Scriptorium'
udver: '2'
---

## Treebank Statistics: UD_Coptic-Scriptorium: Relations: `iobj`

This relation is universal.

85 nodes (0%) are attached to their parents as `iobj`.

85 instances of `iobj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12941176470588.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_scriptorium-pos-PRON.html">PRON</a></tt> (77; 91% instances), <tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_scriptorium-pos-NOUN.html">NOUN</a></tt> (6; 7% instances), <tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_scriptorium-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="cop_scriptorium-pos-VERB.html">VERB</a></tt>-<tt><a href="cop_scriptorium-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 iobj	color:blue
1	ⲛ	ⲡ	DET	ART	Definite=Def|Number=Plur|PronType=Art	9	dislocated	_	Entity=(person|Orig=Ⲛ
2	ⲉⲛⲧ	ⲉⲧⲉⲣⲉ	SCONJ	CREL	_	5	mark	_	_
3	ⲁ	ⲁ	AUX	APST	_	5	aux	_	_
4	ⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERS	Definite=Def|Number=Plur|Person=3|PronType=Prs	5	nsubj	_	_
5	ϩⲩⲡⲟⲙⲓⲛⲉ	ϩⲩⲡⲟⲙⲓⲛⲉ	VERB	V	Foreign=Yes|Mood=Ind|VerbForm=Fin	1	acl:relcl	_	Orig=ϩⲩⲡⲟⲙⲓ̇ⲛⲉ|OrigLang=grc
6	ⲅⲁⲣ	ⲅⲁⲣ	PART	PTC	Foreign=Yes	9	advmod	_	OrigLang=grc
7	ϩⲙ	ϩⲛ	ADP	PREP	_	8	case	_	Orig=ϩ̇ⲙ
8	ⲡⲁⲓ	ⲡⲁⲓ	DET	PDEM	Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	5	obl	_	Entity=(abstract)person)|Orig=ⲡⲁⲓ̇
9	ⲟⲩⲛⲧⲁ	ⲟⲩⲛⲧⲉ	VERB	EXIST	_	0	root	_	_
10	ⲩ	ⲛⲧⲟⲟⲩ	PRON	PPERO	Definite=Def|Number=Plur|Person=3|PronType=Prs	9	iobj	_	_
11	ⲙⲙⲁⲩ	ⲙⲙⲁⲩ	ADV	ADV	_	9	advmod	_	Orig=ⲙ̇ⲙⲁⲩ
12	ⲛ	ⲛ	ADP	PREP	_	14	case	_	_
13	ⲟⲩ	ⲟⲩ	DET	ART	Definite=Ind|Number=Sing|PronType=Art	14	det	_	Entity=(abstract
14	ⲑⲗⲓⲯⲓⲥ	ⲑⲗⲓⲯⲓⲥ	NOUN	N	Foreign=Yes	9	obl	_	Orig=ⲑ̇ⲗⲓ̇ⲯⲓ̇ⲥ|OrigLang=grc
15	ϩⲛ	ϩⲛ	ADP	PREP	_	17	case	_	Orig=ϩⲛ̇
16	ⲧ	ⲡ	DET	ART	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	Entity=(object|Orig=ⲧ̇
17	ⲥⲁⲣⲝ	ⲥⲁⲣⲝ	NOUN	N	Foreign=Yes	14	nmod	_	Entity=object)abstract)|Orig=ⲥⲁⲣⲝ̇|OrigLang=grc
18	·	·	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 iobj	color:blue
1	ⲙⲛ	ⲙⲛ	VERB	EXIST	Polarity=Neg	0	root	_	Cxn=Existential-ExistPred-Negative
2	ϭⲟⲙ	ϭⲟⲙ	NOUN	N	_	1	nsubj	_	CxnElt=1:Existential-ExistPred-Negative.Pivot
3	ⲅⲁⲣ	ⲅⲁⲣ	PART	PTC	Foreign=Yes	1	advmod	_	OrigLang=grc
4	ⲛ	ⲡ	DET	ART	Definite=Def|Number=Plur|PronType=Art	5	det	_	Entity=(person
5	ⲗⲁⲁⲩ	ⲗⲁⲁⲩ	NOUN	N	_	1	iobj	_	Entity=person)
6	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	7	mark	_	_
7	ⲕⲁ	ⲕⲱ	VERB	V	Mood=Ind|VerbForm=Fin	1	xcomp	_	_
8	ⲕⲉ	ⲕⲉ	DET	ART	PronType=Art	9	det	_	Entity=(object
9	ⲥⲛⲧⲉ	ⲥⲛⲧⲉ	NOUN	N	_	7	obj	_	Entity=object)
10	ⲉϩⲣⲁⲓ	ⲉϩⲣⲁⲓ	ADV	ADV	_	7	advmod	_	_
11	ⲡⲁⲣⲁ	ⲡⲁⲣⲁ	ADP	PREP	Foreign=Yes	12	case	_	OrigLang=grc
12	ⲧ	ⲡ	DET	ART	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	obl	_	Entity=(object
13	ⲉⲧ	ⲉⲧⲉⲣⲉ	SCONJ	CREL	_	14	mark	_	_
14	ⲕⲏ	ⲕⲱ	VERB	VSTAT	Mood=Ind|VerbForm=Fin	12	acl:relcl	_	_
15	ⲉϩⲣⲁⲓ	ⲉϩⲣⲁⲓ	ADV	ADV	_	14	advmod	_	_
16	ⲉⲧⲉ	ⲉⲧⲉⲣⲉ	SCONJ	CREL	_	17	mark	_	_
17	ⲡⲁⲓ	ⲡⲁⲓ	DET	PDEM	Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	12	acl:relcl	_	_
18	ⲡⲉ	ⲡⲉ	PRON	COP	Gender=Masc|Number=Sing|PronType=Dem	17	cop	_	_
19	ⲓⲏⲥⲟⲩⲥ	ⲓⲏⲥⲟⲩⲥ	PROPN	NPROP	Foreign=Yes	17	nsubj	_	Entity=(person-Jesus|OrigLang=heb
20	ⲡⲉ	ⲡ	DET	ART	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	ⲭⲣⲓⲥⲧⲟⲥ	ⲭⲣⲓⲥⲧⲟⲥ	NOUN	N	Foreign=Yes	19	appos	_	Entity=person-Jesus)object)|OrigLang=grc
22	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 iobj	color:blue
1	ⲡⲗⲏⲛ	ⲡⲗⲏⲛ	CCONJ	CONJ	Foreign=Yes	6	advmod	_	OrigLang=grc
2	ϣⲁⲣⲉ	ϣⲁⲣⲉ	AUX	AAOR	_	6	aux	_	_
3	ϩⲁϩ	ϩⲁϩ	NOUN	N	_	6	nsubj	_	Entity=(person
4	ⲛ	ⲛ	ADP	PREP	_	5	case	_	Orig=ⲛ̅
5	ⲣⲉϥⲧⲱϩ	ⲣⲉϥⲧⲱϩ	NOUN	N	_	3	nmod	_	Entity=person)|MSeg=ⲣⲉϥ-ⲧⲱϩ
6	ϫⲟⲟ	ϫⲱ	VERB	V	Mood=Ind|VerbForm=Fin	0	root	_	_
7	ⲥ	ⲛⲧⲟⲥ	PRON	PPERO	Definite=Def|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
8	ϫⲉ	ϫⲉ	SCONJ	CONJ	_	10	mark	_	_
9	ⲙⲏ	ⲙⲏ	CCONJ	CONJ	Foreign=Yes	10	advmod	_	OrigLang=grc
10	ⲙⲛⲧⲏ	ⲙⲛⲧⲉ	VERB	EXIST	Polarity=Neg	6	ccomp	_	Orig=ⲙⲛ̅ⲧⲉ
11	ⲡⲁⲓ	ⲡⲁⲓ	DET	PDEM	Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	10	iobj	_	Entity=(person)
12	ⲧⲉϥ	ⲡⲉϥ	DET	PPOS	Definite=Def|Gender=Fem|Gender[psor]=Masc|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	13	nmod:poss	_	Entity=(person|Orig=ⲧϥ̅
13	ⲥϩⲓⲙⲉ	ⲥϩⲓⲙⲉ	NOUN	N	_	10	nsubj	_	Entity=person)
14	ⲙⲙⲁⲩ	ⲙⲙⲁⲩ	ADV	ADV	_	10	advmod	_	Orig=ⲙ̅ⲙⲁⲩ
15	·	·	PUNCT	PUNCT	_	18	punct	_	_
16	ⲉ	ⲉⲣⲉ	SCONJ	CCIRC	_	18	mark	_	_
17	ϥ	ⲛⲧⲟϥ	PRON	PPERS	Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	_
18	ϫⲱ	ϫⲱ	VERB	V	Mood=Ind|VerbForm=Fin	10	advcl	_	_
19	ⲛ	ⲛ	ADP	PREP	_	21	case	_	Orig=ⲛ̅
20	ⲛⲉⲓ	ⲡⲉⲓ	DET	PDEM	Definite=Def|Number=Plur|PronType=Dem	21	det	_	Entity=(abstract
21	ϣⲁϫⲉ	ϣⲁϫⲉ	NOUN	N	_	18	obj	_	Entity=abstract)
22	ⲛ	ⲛ	ADP	PREP	_	24	case	_	Orig=ⲛ̅
23	ϯ	ⲡⲓ	DET	PDEM	Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	24	det	_	_
24	ϩⲉ	ϩⲉ	NOUN	N	_	18	obl	_	_
25	·	·	PUNCT	PUNCT	_	6	punct	_	_

~~~


