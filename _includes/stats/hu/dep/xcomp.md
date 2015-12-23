

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

195 nodes (1%) are attached to their parents as `xcomp`.

183 instances of `xcomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.86153846153846.

The following 6 pairs of parts of speech are connected with `xcomp`: [hu-pos/VERB]()-[hu-pos/VERB]() (167; 86% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (24; 12% instances), [hu-pos/AUX]()-[hu-pos/VERB]() (1; 1% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (1; 1% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	miniszter	miniszter	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
3	fel	fel	ADV	_	Degree=Pos	5	compound:preverb	_	_
4	akarja	akar	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	menteni	ment	VERB	_	VerbForm=Inf|Voice=Act	4	xcomp	_	_
6	Kovácsot	Kovács	PROPN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	dobj	_	_
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp	color:blue
1	Jó	jó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
2	lenne	lesz	VERB	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	ezt	ez	DET	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	det	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	tendenciát	tendencia	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	dobj	_	_
6	folytatni	folytat	VERB	_	VerbForm=Inf|Voice=Act	1	xcomp	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
8	2000.	2000.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	9	amod:att	_	_
9	évben	év	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
10	is	is	CONJ	_	_	9	cc	_	_
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	Hazudik	hazudik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	aki	aki	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Rel	5	nsubj	_	_
4	azt	az	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	dobj	_	_
5	állítja	állít	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	csubj	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	hogy	hogy	SCONJ	_	_	9	mark	_	_
8	nem	nem	ADV	_	PronType=Neg	9	neg	_	_
9	akar	akar	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp:obj	_	_
10	sikeres	sikeres	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	9	xcomp	_	_
11	lenni	lesz	VERB	_	VerbForm=Inf|Voice=Act	10	cop	_	_
12	vagy	vagy	CONJ	_	_	5	cc	_	_
13	hogy	hogy	SCONJ	_	_	16	mark	_	_
14	számára	számára	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	16	advmod:mode	_	_
15	nem	nem	ADV	_	PronType=Neg	16	neg	_	_
16	fontos	fontos	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	conj	_	_
17	,	,	PUNCT	_	_	16	punct	_	_
18	hogy	hogy	SCONJ	_	_	22	mark	_	_
19	minél	minél	ADV	_	_	20	advmod:mode	_	_
20	több	több	DET	_	Definite=Ind|PronType=Ind	21	det	_	_
21	visszajelzést	visszajelzés	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	22	dobj	_	_
22	kapjon	kap	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	csubj	_	_
23	.	.	PUNCT	_	_	1	punct	_	_

~~~


