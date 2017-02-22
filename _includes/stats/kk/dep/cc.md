

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

13 nodes (2%) are attached to their parents as `cc`.

11 instances of `cc` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.30769230769231.

The following 8 pairs of parts of speech are connected with `cc`: [kk-pos/VERB]()-[kk-pos/CCONJ]() (3; 23% instances), [kk-pos/NOUN]()-[kk-pos/CCONJ]() (2; 15% instances), [kk-pos/NOUN]()-[kk-pos/SCONJ]() (2; 15% instances), [kk-pos/VERB]()-[kk-pos/SCONJ]() (2; 15% instances), [kk-pos/ADJ]()-[kk-pos/CCONJ]() (1; 8% instances), [kk-pos/PRON]()-[kk-pos/CCONJ]() (1; 8% instances), [kk-pos/PROPN]()-[kk-pos/CCONJ]() (1; 8% instances), [kk-pos/VERB]()-[kk-pos/ADV]() (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 cc	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	Бала	бала	NOUN	n	Case=Nom	2	obj	_	_
2	сұрады	сұра	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	7	punct	_	_
4	қалай	қалай	X	x	_	5	dep	_	_
5	да	да	SCONJ	cnjadv	_	7	cc	_	_
6	бала	бала	NOUN	n	Case=Nom	7	nsubj	_	_
7	болмады	бол	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	2	conj	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


