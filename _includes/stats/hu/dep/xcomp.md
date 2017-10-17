

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

237 nodes (1%) are attached to their parents as `xcomp`.

215 instances of `xcomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.69198312236287.

The following 6 pairs of parts of speech are connected with `xcomp`: [hu-pos/VERB]()-[hu-pos/VERB]() (201; 85% instances), [hu-pos/ADJ]()-[hu-pos/VERB]() (26; 11% instances), [hu-pos/AUX]()-[hu-pos/VERB]() (7; 3% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADJ]() (1; 0% instances), [hu-pos/VERB]()-[hu-pos/ADV]() (1; 0% instances).


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
6	Kovácsot	Kovács	PROPN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 xcomp	color:blue
1	Bülent	Bülent	PROPN	_	Case=Nom|Number=Sing	4	nmod:att	_	_
2	Ecevit	Ecevi	PROPN	_	Case=Acc|Number=Sing	1	flat:name	_	_
3	török	török	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod:att	_	_
4	kormányfő	kormányfő	NOUN	_	Case=Nom|Number=Sing	6	nsubj	_	_
5	pedig	pedig	CCONJ	_	_	6	cc	_	_
6	jelezte	jelez	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	_
8	szeptember	szeptember	NOUN	_	Case=Nom|Number=Sing	9	nmod:att	_	_
9	végi	végi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	11	amod:att	_	_
10	washingtoni	washingtoni	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	11	amod:att	_	_
11	látogatásán	látogatás	NOUN	_	Case=Sup|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nmod:obl	_	_
12	kérni	kér	VERB	_	VerbForm=Inf|Voice=Act	13	xcomp	_	_
13	fogja	fog	AUX	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
14	az	az	DET	_	Definite=Def|PronType=Art	15	det	_	_
15	Egyesült	Egyesült	PROPN	_	Case=Nom|Number=Sing	17	nmod:att	_	_
16	Államok	Államok	PROPN	_	Case=Nom|Number=Sing	15	flat:name	_	_
17	segítségét	segítség	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	obj	_	_
18	török	török	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	20	amod:att	_	_
19	építési	építési	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	20	amod:att	_	_
20	kötvény	kötvény	NOUN	_	Case=Nom|Number=Sing	22	nmod:att	_	_
21	tengerentúli	tengerentúli	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	22	amod:att	_	_
22	kibocsátásához	kibocsátás	NOUN	_	Case=All|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nmod:obl	_	_
23	5	5	NUM	_	Case=Nom|Number=Sing|NumType=Card	24	compound	_	_
24	milliárd	milliárd	NUM	_	Case=Nom|Number=Sing|NumType=Card	25	amod:att	_	_
25	dollár	dollár	NOUN	_	Case=Nom|Number=Sing	26	nmod:att	_	_
26	értékben	érték	NOUN	_	Case=Ine|Number=Sing	12	nmod:obl	_	SpaceAfter=No
27	.	.	PUNCT	_	_	6	punct	_	_

~~~


