

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

28 nodes (0%) are attached to their parents as `aux`.

18 instances of `aux` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10714285714286.

The following 2 pairs of parts of speech are connected with `aux`: [hu-pos/VERB]()-[hu-pos/AUX]() (27; 96% instances), [hu-pos/NOUN]()-[hu-pos/AUX]() (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	nettó	nettó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	adósságállomány	adósságállomány	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	nsubj	_	_
4	növekedni	növekedik	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
5	fog	fog	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	aux	_	_
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 aux	color:blue
1	Jorge	Jorge	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	name	_	_
2	Faliba	Faliba	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	appos	_	_
3	atya	atya	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nsubj	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	rendőrségen	rendőrség	NOUN	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
6	bevallotta	be+vall	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	,	,	PUNCT	_	_	6	punct	_	_
8	hogy	hogy	SCONJ	_	_	14	mark	_	_
9	ez	ez	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	14	nsubj	_	_
10	már	már	ADV	_	_	14	advmod:tlocy	_	_
11	az	az	DET	_	Definite=Def|PronType=Art	14	det	_	_
12	ötödik	ötödik	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	14	amod:att	_	_
13	nemzetközi	nemzetközi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	amod:att	_	_
14	csempészútja	csempészút	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	6	ccomp:obj	_	_
15	lett	lesz	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	14	cop	_	_
16	volna	volna	AUX	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|Voice=Act	14	aux	_	_
17	,	,	PUNCT	_	_	14	punct	_	_
18	ám	ám	CONJ	_	_	14	cc	_	_
19	jó	jó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	20	amod:att	_	_
20	ügyet	ügy	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	21	dobj	_	_
21	szolgál	szolgál	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	14	conj	_	_
22	.	.	PUNCT	_	_	6	punct	_	_

~~~


