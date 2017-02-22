

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is a language-specific subtype of [nmod]().

34 nodes (6%) are attached to their parents as `nmod:poss`.

34 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08823529411765.

The following 7 pairs of parts of speech are connected with `nmod:poss`: [kk-pos/NOUN]()-[kk-pos/NOUN]() (17; 50% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (9; 26% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (3; 9% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (2; 6% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (1; 3% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (1; 3% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Бес	бес	NUM	num	NumType=Card	2	nummod	_	_
2	жылдың	жыл	NOUN	n	Case=Gen	3	nmod:poss	_	_
3	ішінде	іш	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	6	obl	_	_
4	үш	үш	NUM	num	NumType=Card	5	nummod	_	_
5	баласы	бала	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	6	nsubj	_	_
6	бар	бар	ADJ	adj	_	0	root	_	_
7	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	:	:	PUNCT	sent	_	6	punct	_	_
9	екеуі	екеу	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	10	nsubj	_	_
10	ұл	ұл	NOUN	n	Case=Nom	6	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	cm	_	10	punct	_	_
12	біреуі	біреу	NUM	num	Case=Nom|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	13	nsubj	_	_
13	қыз	қыз	NOUN	n	Case=Nom	6	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	sent	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	II	II	NUM	num	NumType=Ord	6	nsubj	_	_
2	Елизавета	Елизавета	PROPN	np	Case=Nom|Gender=Fem	1	flat:name	_	_
3	ханшайым	ханшайым	NOUN	n	Case=Nom	1	flat:name	_	_
4	Виндзор	Виндзор	PROPN	np	Case=Nom	5	nmod:poss	_	_
5	әулетінен	әулет	NOUN	n	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	6	obl	_	_
6	шыққан	шық	VERB	v	Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Өзінің	өз	PRON	prn	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3|PronType=Ref	2	nmod:poss	_	_
2	атын	ат	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	19	obj	_	_
3	анасының	ана	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	18	nmod:poss	_	_
4	(	(	PUNCT	lpar	_	5	punct	_	SpaceAfter=No
5	Елизавета	Елизавета	PROPN	np	Case=Nom|Gender=Fem	3	appos	_	SpaceAfter=No
6	)	)	PUNCT	rpar	_	5	punct	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	14	punct	_	_
8	апасының	апа	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	3	conj	_	_
9	(	(	PUNCT	lpar	_	10	punct	_	SpaceAfter=No
10	Мария	Мария	PROPN	np	Case=Nom|Gender=Fem	8	appos	_	SpaceAfter=No
11	)	)	PUNCT	rpar	_	10	punct	_	_
12	және	және	CCONJ	cnjcoo	_	14	cc	_	_
13	арғы	арғы	ADJ	adj	_	14	amod	_	_
14	әжесінің	әже	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	3	conj	_	_
15	(	(	PUNCT	lpar	_	16	punct	_	SpaceAfter=No
16	Александра	Александра	PROPN	np	Case=Nom|Gender=Fem	14	appos	_	SpaceAfter=No
17	)	)	PUNCT	rpar	_	16	punct	_	_
18	құрметіне	құрмет	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	19	obl	_	_
19	алған	ал	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
20	.	.	PUNCT	sent	_	19	punct	_	_

~~~


