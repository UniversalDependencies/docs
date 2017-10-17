

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is universal.

19 nodes (0%) are attached to their parents as `aux`.

10 instances of `aux` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15789473684211.

The following 2 pairs of parts of speech are connected with `aux`: [hu-pos/VERB]()-[hu-pos/AUX]() (18; 95% instances), [hu-pos/AUX]()-[hu-pos/AUX]() (1; 5% instances).


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
5	fog	fog	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	aux	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 21 aux	color:blue
1	Ezzel	ez	PRON	_	Case=Ins|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	nmod:obl	_	_
2	csak	csak	ADV	_	_	5	advmod:mode	_	_
3	azt	az	PRON	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|PronType=Dem	5	obj	_	_
4	akarjuk	akar	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	mondani	mond	VERB	_	VerbForm=Inf|Voice=Act	4	xcomp	_	SpaceAfter=No
6	:	:	PUNCT	_	_	4	punct	_	_
7	ha	ha	SCONJ	_	_	12	mark	_	_
8	elbeszélésünk	elbeszélés	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Plur|Person[psor]=1	10	nmod:att	_	_
9	első	első	ADJ	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|NumType=Ord|Person[psor]=None	10	amod:att	_	_
10	embere	ember	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
11	magára	maga	PRON	_	Case=Sub|Number=Sing|Number[psed]=None|Number[psor]=None|Person=3|Person[psor]=None|Reflex=Yes	12	nmod:obl	_	_
12	ölti	ölt	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	advcl	_	_
13	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
14	partizán-módit	partizán-módi	NOUN	_	Case=Acc|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	12	obj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	12	punct	_	_
16	akár	akár	ADV	_	_	18	advmod:mode	_	_
17	még	még	ADV	_	_	18	advmod:tlocy	_	_
18	képviselő	képviselő	NOUN	_	Case=Nom|Number=Sing|Number[psed]=None|Number[psor]=None|Person[psor]=None	4	ccomp:obj	_	_
19	is	is	ADV	_	_	18	advmod:mode	_	_
20	lehetett	lehet	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	18	cop	_	_
21	volna	volna	AUX	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|Voice=Act	20	aux	_	SpaceAfter=No
22	.	.	PUNCT	_	_	4	punct	_	_

~~~


