

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

192 nodes (1%) are attached to their parents as `appos`.

159 instances of `appos` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.56770833333333.

The following 7 pairs of parts of speech are connected with `appos`: [hu-pos/NOUN]()-[hu-pos/PROPN]() (85; 44% instances), [hu-pos/PROPN]()-[hu-pos/NOUN]() (58; 30% instances), [hu-pos/NOUN]()-[hu-pos/NOUN]() (30; 16% instances), [hu-pos/PROPN]()-[hu-pos/PROPN]() (16; 8% instances), [hu-pos/ADJ]()-[hu-pos/ADJ]() (1; 1% instances), [hu-pos/ADJ]()-[hu-pos/NOUN]() (1; 1% instances), [hu-pos/PROPN]()-[hu-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 appos	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	rendezvény	rendezvény	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nmod:att	_	_
3	szónoka	szónok	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
4	Tamás	Tamás	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	flat:name	_	_
5	Gáspár	Gáspár	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	flat:name	_	_
6	Miklós	Miklós	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	7	appos	_	_
7	filozófus	filozófus	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
8	lesz	lesz	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 appos	color:blue
1	Szent-Györgyi	Szent-Györgyi	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	nsubj	_	_
2	Albert	Albert	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	1	flat:name	_	_
3	segített	segít	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	rajta	rajta	PRON	_	Case=Sup|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	3	nmod:obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	apja	apa	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	7	nmod:att	_	_
7	barátja	barát	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	1	appos	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 appos	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	kétoldalú	kétoldalú	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	amod:att	_	_
3	viszony	viszony	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	nmod:att	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
6	magyar-orosz	magyar-orosz	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
7	gazdasági	gazdasági	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	amod:att	_	_
8	együttműködés	együttműködés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	3	appos	_	_
9	egyik	egyik	DET	_	Definite=Def|PronType=Ind	10	det	_	_
10	problémája	probléma	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	14	nsubj	_	_
11	az	az	DET	_	Definite=Def|PronType=Art	13	det	_	_
12	orosz	orosz	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	amod:att	_	_
13	államadósság	államadósság	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	14	nmod:att	_	_
14	rendezetlensége	rendezetlenség	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	0	root	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


