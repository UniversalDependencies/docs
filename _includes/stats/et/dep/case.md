

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

561 nodes (6%) are attached to their parents as `case`.

419 instances of `case` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14616755793226.

The following 6 pairs of parts of speech are connected with `case`: [et-pos/NOUN]()-[et-pos/ADP]() (498; 89% instances), [et-pos/PRON]()-[et-pos/ADP]() (28; 5% instances), [et-pos/PROPN]()-[et-pos/ADP]() (26; 5% instances), [et-pos/NUM]()-[et-pos/ADP]() (5; 1% instances), [et-pos/ADJ]()-[et-pos/ADP]() (2; 0% instances), [et-pos/ADV]()-[et-pos/ADP]() (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Ann	Ann+0	PROPN	prop/prop,sg,nom,.cap	Case=Nom|Number=Sing	2	nsubj	_	_
2	tatsas	tatsa+s	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	lauda	laut+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	2	nmod	_	_
4	juurest	juurest+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	3	case	_	_
5	toa	tuba+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	2	nmod	_	_
6	poole	poole+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	5	case	_	_
7	.	.	PUNCT	punc/Fst	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
1	Mitu	mitu+0	PRON	pron-def/inter,rel,indef,sg,nom,.cap	Case=Nom|Number=Sing|Poss=Yes|PronType=Ind,Neg	3	nmod	_	_
2	meest	mees+t	NOUN	n/com,sg,part	Case=Par|Number=Sing	1	nmod	_	_
3	viskusid	visku+sid	VERB	v-fin/main,indic,impf,ps2,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	0	root	_	_
4	minu	mina+0	PRON	pron-pers/pers,ps1,sg,gen	Case=Gen|Number=Sing|Person=1|PronType=Prs	3	nmod	_	_
5	poole	poole+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	4	case	_	_
6	.	.	PUNCT	punc/Fst	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Aeglaselt	aeglaselt+0	ADV	adv/.cap	_	2	advmod	_	_
2	liikus	liiku+s	VERB	v-fin/main,indic,impf,ps3,sg,ps,af,.FinV,.Intr	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	poisi	poiss+0	NOUN	n/com,sg,gen	Case=Gen|Number=Sing	4	nmod	_	_
4	käsi	käsi+0	NOUN	n/com,sg,nom	Case=Nom|Number=Sing	2	nsubj	_	_
5	Anne'i	Anne+i	PROPN	prop/prop,sg,gen,.cap,.?	Case=Gen|Number=Sing	2	nmod	_	_
6	poole	poole+0	ADP	pst/post,.gen	AdpType=Post|Case=Gen	5	case	_	_
7	.	.	PUNCT	punc/Fst	PunctType=Peri	2	punct	_	_

~~~


