

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:poss]().

9 nodes (2%) are attached to their parents as `nmod`.

9 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.88888888888889.

The following 3 pairs of parts of speech are connected with `nmod`: [kk-pos/NOUN]()-[kk-pos/NOUN]() (7; 78% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (1; 11% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (1; 11% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod	color:blue
1	Бала	бала	NOUN	n	Case=Nom	2	nsubj	_	_
2	туса	ту	VERB	v	Mood=Cnd|Number=Sing|Person=3|VerbForm=Conv	9	advcl	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	2	punct	_	_
4	күйеуімен	күйеу	NOUN	n	Case=Ins|Number[psor]=Plur,Sing|Person[psor]=3	6	nmod	_	_
5	екеуінің	екеу	NUM	num	Case=Gen|Number[psor]=Plur,Sing|NumType=Coll|Person[psor]=3	6	nmod:poss	_	_
6	ортасында	орта	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	9	obl	_	_
7	бір	бір	DET	det	PronType=Ind	8	det	_	_
8	тікенек	тікенек	NOUN	n	Case=Nom	9	nsubj	_	_
9	өсетіндей	өс	VERB	v	Aspect=Imp|VerbForm=Part	0	root	_	_
10	болушы	бол	AUX	v	Mood=Pot|VerbForm=Part	9	cop	_	_
11	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	cop	_	SpaceAfter=No
12	...	...	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 16 nmod	color:blue
1	Ақ	ақ	ADJ	adj	_	2	amod	_	_
2	отаудың	отау	NOUN	n	Case=Gen	3	nmod:poss	_	_
3	ішінде	іш	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	5	obl	_	_
4	оңаша	оңаша	ADJ	adj	_	5	advcl	_	_
5	жатса	жат	VERB	v	Mood=Cnd|Number=Sing|Person=3|VerbForm=Conv	30	advcl	_	_
6	да	да	CCONJ	cnjcoo	_	11	cc	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	5	punct	_	_
8	яки	яки	CCONJ	cnjcoo	_	11	cc	_	_
9	күйеуін	күйеу	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	10	obj	_	_
10	құшақтап	құшақта	VERB	v	Aspect=Perf|VerbForm=Conv	11	advcl	_	_
11	жатса	жат	VERB	v	Mood=Cnd|Number=Sing|Person=3|VerbForm=Conv	5	conj	_	_
12	да	да	ADV	postadv	_	11	cc	_	SpaceAfter=No
13	,	,	PUNCT	cm	_	11	punct	_	_
14	ол	ол	PRON	prn	Case=Nom|Number=Sing|Person=3|PronType=Prs	30	nsubj	_	_
15	ылғи	ылғи	ADV	adv	_	30	advmod	_	_
16	ішінен	іш	NOUN	n	Case=Abl|Number[psor]=Plur,Sing|Person[psor]=3	30	nmod	_	SpaceAfter=No
17	:	:	PUNCT	sent	_	16	punct	_	_
18	«	«	PUNCT	lquot	_	23	punct	_	SpaceAfter=No
19	Жасаған	Жасаған	PROPN	np	Case=Nom	23	vocative	_	_
20	ау	ау	PART	mod_emo	_	19	discourse	_	_
21	,	,	PUNCT	cm	_	19	punct	_	_
22	бала	бала	NOUN	n	Case=Nom	23	obj	_	_
23	бере	бер	VERB	v	Aspect=Imp|VerbForm=Cov	29	ccomp	_	_
24	көрме	көр	AUX	vaux	Mood=Imp|Number=Sing|Person=2|Polarity=Neg|VerbForm=Fin	23	aux	_	SpaceAfter=No
25	?	?	PUNCT	sent	_	23	punct	_	SpaceAfter=No
26	!	!	PUNCT	sent	_	23	punct	_	SpaceAfter=No
27	»	»	PUNCT	rquot	_	23	punct	_	_
28	–	–	PUNCT	guio	_	23	punct	_	_
29	деп	де	VERB	v	Aspect=Perf|VerbForm=Conv	30	advcl	_	_
30	тілейтін	тіле	VERB	v	Aspect=Imp|VerbForm=Part	0	root	_	_
31	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	30	cop	_	SpaceAfter=No
32	.	.	PUNCT	sent	_	30	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod	color:blue
1	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	24	nsubj	_	_
2	Сәрсенбайға	Сәрсенбай	PROPN	np	Case=Dat|Gender=Masc	3	obl	_	_
3	шыққан	шық	VERB	v	Tense=Past|VerbForm=Part	4	acl:relcl	_	_
4	жылы	жыл	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	24	obl	_	_
5	өзіндей	өз	PRON	prn	Number[psor]=Plur,Sing|Person[psor]=3|PronType=Ref	7	nmod	_	_
6	жас	жас	ADJ	adj	_	7	amod	_	_
7	келіншектермен	келіншек	NOUN	n	Case=Ins|Number=Plur	9	obl	_	_
8	аулақта	аулақ	ADJ	adj	Case=Loc	9	obl	_	_
9	кеңескенде	кеңес	VERB	v	Case=Loc|Tense=Past|VerbForm=Ger	24	advcl	_	SpaceAfter=No
10	:	:	PUNCT	sent	_	9	punct	_	_
11	«	«	PUNCT	lquot	_	16	punct	_	SpaceAfter=No
12	бала	бала	NOUN	n	_	14	nmod	_	_
13	сыз	сыз	ADP	post	_	12	case	_	_
14	өмірдің	өмір	NOUN	n	Case=Gen	15	nmod:poss	_	_
15	қызығы	қызық	ADJ	adj	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	16	nsubj	_	_
16	жоқ	жоқ	ADJ	adj	_	21	ccomp	_	_
17	қой	ғой	PART	mod_ass	_	16	discourse	_	_
18	»	»	PUNCT	rquot	_	16	punct	_	SpaceAfter=No
19	,	,	PUNCT	cm	_	16	punct	_	_
20	–	–	PUNCT	guio	_	16	punct	_	_
21	деп	де	VERB	v	Aspect=Perf|VerbForm=Conv	24	advcl	_	_
22	аузымен	ауыз	NOUN	n	Case=Ins|Number[psor]=Plur,Sing|Person[psor]=3	24	obl	_	_
23	ғана	ғана	ADV	postadv	_	22	advmod	_	_
24	айтушы	айт	VERB	v	Mood=Pot|VerbForm=Part	0	root	_	_
25	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	24	cop	_	SpaceAfter=No
26	.	.	PUNCT	sent	_	24	punct	_	_

~~~


