

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

25 nodes (5%) are attached to their parents as `advcl`.

25 instances of `advcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 5 pairs of parts of speech are connected with `advcl`: [kk-pos/VERB]()-[kk-pos/VERB]() (15; 60% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (3; 12% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (3; 12% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (2; 8% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (2; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 advcl	color:blue
1	Қанша	қанша	PRON	prn	Case=Nom|PronType=Int	2	advmod	_	_
2	жалынса	жалын	VERB	v	Mood=Cnd|Number=Sing|Person=3|VerbForm=Conv	11	advcl	_	_
3	да	да	ADV	postadv	_	2	advmod	_	_
4	,	,	PUNCT	cm	_	6	punct	_	_
5	қанша	қанша	PRON	prn	Case=Nom|PronType=Int	6	advmod	_	_
6	жыласа	жыла	VERB	v	Mood=Cnd|Number=Sing|Person=3|VerbForm=Conv	2	conj	_	_
7	да	да	ADV	postadv	_	6	advmod	_	_
8	Жасаған	Жасаған	PROPN	np	Case=Nom	11	nsubj	_	_
9	оған	ол	PRON	prn	Case=Dat|Number=Sing|Person=3|PronType=Prs	11	obl	_	_
10	бала	бала	NOUN	n	Case=Nom	11	obj	_	_
11	бермеді	бер	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
12	.	.	PUNCT	sent	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 advcl	color:blue
1	«	«	PUNCT	lquot	_	8	punct	_	SpaceAfter=No
2	бала	бала	NOUN	n	_	8	advcl	_	_
3	лы	лы	ADP	post	_	2	case	_	_
4	болсам	бол	AUX	v	Mood=Cnd|Number=Sing|Person=1|VerbForm=Conv	2	cop	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	2	punct	_	_
6	әдемі	әдемі	ADJ	adj	_	7	amod	_	_
7	өмірім	өмір	NOUN	n	Case=Nom|Number[psor]=Sing|Person[psor]=1	8	nsubj	_	_
8	бұз	бұз	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Aor|VerbForm=Fin|Voice=Pass	13	ccomp	_	_
9	ау	ау	PART	mod_emo	_	8	discourse	_	_
10	»	»	PUNCT	rquot	_	8	punct	_	SpaceAfter=No
11	,	,	PUNCT	cm	_	8	punct	_	_
12	–	–	PUNCT	guio	_	8	punct	_	_
13	деп	де	VERB	v	Aspect=Perf|VerbForm=Conv	14	advcl	_	_
14	ойлайтын	ойла	VERB	v	Aspect=Imp|VerbForm=Part	0	root	_	_
15	еді	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	cop	_	_
16	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	14	nsubj	_	SpaceAfter=No
17	...	...	PUNCT	sent	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 advcl	color:blue
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


