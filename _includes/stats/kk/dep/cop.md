

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

23 nodes (4%) are attached to their parents as `cop`.

23 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17391304347826.

The following 4 pairs of parts of speech are connected with `cop`: [kk-pos/NOUN]()-[kk-pos/AUX]() (10; 43% instances), [kk-pos/VERB]()-[kk-pos/AUX]() (8; 35% instances), [kk-pos/ADJ]()-[kk-pos/AUX]() (4; 17% instances), [kk-pos/PRON]()-[kk-pos/AUX]() (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 cop	color:blue
1	Бірақ	бірақ	CCONJ	cnjcoo	_	4	cc	_	_
2	тілек	тілек	NOUN	n	Case=Nom	4	nsubj	_	_
3	іске	іске	X	x	_	4	dep	_	_
4	аспай	ас	VERB	v	Aspect=Perf|Polarity=Neg|VerbForm=Conv	8	advcl	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	4	punct	_	_
6	аяғы	аяқ	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
7	жоқ	жоқ	ADJ	adj	_	8	acl:relcl	_	_
8	жыр	жыр	NOUN	n	Case=Nom	0	root	_	_
9	болды	бол	AUX	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	cop	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Шешуі	шеш	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	3	xcomp	_	_
2	деп	деп	X	x	_	3	dep	_	_
3	атауға	ата	VERB	v	Case=Dat|VerbForm=Ger	4	ccomp	_	_
4	болатын	бол	VERB	v	Aspect=Imp|VerbForm=Part	10	advcl	_	_
5	болса	бол	AUX	v	Mood=Cnd|Number=Sing|Person=3|VerbForm=Conv	4	cop	_	SpaceAfter=No
6	,	,	PUNCT	cm	_	5	punct	_	_
7	адамның	адам	NOUN	n	Case=Gen	8	nmod:poss	_	_
8	шешуі	шеш	VERB	v	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3|VerbForm=Ger	10	nsubj	_	_
9	жалғыз	жалғыз	ADJ	adj	_	10	amod	_	_
10	өлім	өлім	NOUN	n	Case=Nom	0	root	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
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


