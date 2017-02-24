

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

128 nodes (0%) are attached to their parents as `cop`.

95 instances of `cop` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.421875.

The following 6 pairs of parts of speech are connected with `cop`: [hu-pos/ADJ]()-[hu-pos/AUX]() (57; 45% instances), [hu-pos/NOUN]()-[hu-pos/AUX]() (51; 40% instances), [hu-pos/PRON]()-[hu-pos/AUX]() (9; 7% instances), [hu-pos/ADV]()-[hu-pos/AUX]() (4; 3% instances), [hu-pos/PROPN]()-[hu-pos/AUX]() (4; 3% instances), [hu-pos/NUM]()-[hu-pos/AUX]() (3; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Jó	jó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	0	root	_	_
2	lenne	lesz	AUX	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	ezt	ez	DET	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	det	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	tendenciát	tendencia	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	obj	_	_
6	folytatni	folytat	VERB	_	VerbForm=Inf|Voice=Act	1	xcomp	_	_
7	a	a	DET	_	Definite=Def|PronType=Art	9	det	_	_
8	2000.	2000.	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	9	amod:att	_	_
9	évben	év	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	nmod:obl	_	_
10	is	is	CCONJ	_	_	9	cc	_	SpaceAfter=No|ToDo=cc-without-conj
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 cop	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	1992-ben	1992	NUM	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Card|Person[psor]=None	2	nmod:obl	_	_
2	ő	ő	PRON	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Prs	0	root	_	_
3	volt	van	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	_
4	az	az	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	Öregasszony	öregasszony	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	2	nsubj	_	_
6	Spiró	Spiró	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	8	nmod:att	_	_
7	György	György	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	6	flat:name	_	_
8	Csirkefejének	Csirkefej	PROPN	_	Case=Dat|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	10	nmod:att	_	_
9	Szamos-parti	szamos-parti	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	10	amod:att	_	_
10	előadásában	előadás	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	2	nmod:obl	_	_
11	az	az	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	Anya	anya	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	13	nmod:att	_	_
13	szerepét	szerep	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	14	obj	_	_
14	alakította	alakít	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
15	Camus	Camus	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	nmod:att	_	_
16	A	A	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	18	nmod:att	_	_
17	félreértés	félreértés	PROPN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	16	flat:name	_	_
18	című	című	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	19	amod:att	_	_
19	színművében	színmű	NOUN	_	Case=Ine|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	14	nmod:obl	_	SpaceAfter=No
20	.	.	PUNCT	_	_	2	punct	_	_

~~~


