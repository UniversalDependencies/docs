

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is a language-specific subtype of [acl]().

12 nodes (2%) are attached to their parents as `acl:relcl`.

12 instances of `acl:relcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16666666666667.

The following 3 pairs of parts of speech are connected with `acl:relcl`: [kk-pos/NOUN]()-[kk-pos/VERB]() (7; 58% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (4; 33% instances), [kk-pos/PROPN]()-[kk-pos/VERB]() (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl:relcl	color:blue
1	Көл	көл	NOUN	n	Case=Nom	3	advcl	_	_
2	болып	бол	AUX	v	Aspect=Perf|VerbForm=Conv	1	cop	_	_
3	төгілген	төк	VERB	v	Tense=Past|VerbForm=Part|Voice=Pass	5	acl:relcl	_	_
4	көздің	көз	NOUN	n	Case=Gen	5	nmod:poss	_	_
5	жасы	жас	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	nsubj	_	_
6	жерге	жер	NOUN	n	Case=Dat	7	obl	_	_
7	сіңді	сің	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
8	,	,	PUNCT	cm	_	7	punct	_	_
9	тілек	тілек	NOUN	n	Case=Nom	10	nsubj	_	_
10	тозды	тоз	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
11	,	,	PUNCT	cm	_	10	punct	_	_
12	өмір	өмір	NOUN	n	Case=Nom	13	nsubj	_	_
13	озды	оз	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
14	,	,	PUNCT	cm	_	13	punct	_	_
15	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	17	nsubj	_	_
16	бала	бала	X	x	_	17	dep	_	_
17	көтермеді	көтер	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
18	.	.	PUNCT	sent	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl:relcl	color:blue
1	Дүниеде	дүние	NOUN	n	Case=Loc	5	obl	_	_
2	адамнан	адам	NOUN	n	Case=Abl	3	obl	_	_
3	қиын	қиын	ADJ	adj	_	4	acl:relcl	_	_
4	жұмбақ	жұмбақ	NOUN	n	Case=Nom	5	nsubj	_	_
5	жоқ	жоқ	ADJ	adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 acl:relcl	color:blue
1	Мал	мал	NOUN	n	Case=Nom	2	nmod:poss	_	_
2	орнына	орын	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	3	obl	_	_
3	сатылып	сат	VERB	v	Aspect=Perf|VerbForm=Conv|Voice=Pass	12	acl:relcl	_	SpaceAfter=No
4	,	,	PUNCT	cm	_	3	punct	_	_
5	жаны	жан	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	6	nsubj	_	_
6	сүймеген	сүй	VERB	v	Polarity=Neg|Tense=Past|VerbForm=Part	7	acl:relcl	_	_
7	жанға	жан	NOUN	n	Case=Dat	8	obl	_	_
8	жар	жар	NOUN	n	Case=Nom	3	conj	_	_
9	болатын	бол	AUX	v	Aspect=Imp|VerbForm=Part	8	cop	_	_
10	қазақтың	қазақ	NOUN	n	Case=Gen	12	nmod:poss	_	_
11	сансыз	сансыз	ADJ	adj	_	12	amod	_	_
12	қыздарының	қыз	NOUN	n	Case=Gen|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	13	nmod:poss	_	_
13	ішінен	іш	NOUN	n	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	17	obl	_	_
14	әлдеқалай	әлдеқалай	ADV	adv	_	17	advmod	_	_
15	өзінің	өз	PRON	prn	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3|PronType=Ref	16	nsubj	_	_
16	сүйгеніне	сүй	VERB	v	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3|Tense=Past|VerbForm=Ger	17	ccomp	_	_
17	тиген	ти	VERB	v	Tense=Past|VerbForm=Part	18	acl:relcl	_	_
18	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	24	nsubj	_	_
19	шынында	шынында	ADV	adv	_	24	advmod	_	_
20	бастапқы	бастапқы	ADJ	adj	_	21	amod	_	_
21	жылы	жыл	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	24	obl	_	_
22	бала	бала	NOUN	n	Case=Nom	24	obj	_	_
23	керек	керек	X	x	_	24	dep	_	_
24	қылмады	қыл	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
25	.	.	PUNCT	sent	_	24	punct	_	_

~~~


