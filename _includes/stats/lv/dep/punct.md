

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

3716 nodes (18%) are attached to their parents as `punct`.

2380 instances of `punct` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.02852529601722.

The following 17 pairs of parts of speech are connected with `punct`: [lv-pos/VERB]()-[lv-pos/PUNCT]() (1839; 49% instances), [lv-pos/NOUN]()-[lv-pos/PUNCT]() (723; 19% instances), [lv-pos/PROPN]()-[lv-pos/PUNCT]() (637; 17% instances), [lv-pos/SYM]()-[lv-pos/PUNCT]() (149; 4% instances), [lv-pos/ADJ]()-[lv-pos/PUNCT]() (104; 3% instances), [lv-pos/X]()-[lv-pos/PUNCT]() (99; 3% instances), [lv-pos/ADV]()-[lv-pos/PUNCT]() (48; 1% instances), [lv-pos/PART]()-[lv-pos/PUNCT]() (27; 1% instances), [lv-pos/PRON]()-[lv-pos/PUNCT]() (25; 1% instances), [lv-pos/NUM]()-[lv-pos/PUNCT]() (23; 1% instances), [lv-pos/PUNCT]()-[lv-pos/PUNCT]() (22; 1% instances), [lv-pos/SCONJ]()-[lv-pos/PUNCT]() (7; 0% instances), [lv-pos/VERB]()-[lv-pos/SYM]() (5; 0% instances), [lv-pos/INTJ]()-[lv-pos/PUNCT]() (3; 0% instances), [lv-pos/PROPN]()-[lv-pos/SYM]() (3; 0% instances), [lv-pos/ADJ]()-[lv-pos/SYM]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Dienas	diena	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	Bizness	bizness	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	7	parataxis	_	SpaceAfter=No
3	:	:	PUNCT	zo	_	2	punct	_	_
4	Lai	lai	SCONJ	css	_	5	mark	_	_
5	attīstītos	attīstīties	VERB	vmyc0i300an	Mood=Cnd|Negative=Neg|Reflex=Yes|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No
6	,	,	PUNCT	zc	_	5	punct	_	_
7	jāsadarbojas	sadarboties	VERB	vmyd0i200an	Mood=Nec|Negative=Neg|Reflex=Yes|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	zs	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 punct	color:blue
1	Dienas	diena	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	Bizness	bizness	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	6	parataxis	_	SpaceAfter=No
3	:	:	PUNCT	zo	_	2	punct	_	_
4	PF	PF	PROPN	y	_	5	nmod	_	_
5	Ķekava	Ķekava	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
6	saķeras	saķerties	VERB	vmyipi130an	Mood=Ind|Negative=Neg|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	ar	ar	ADP	spsan	_	8	case	_	_
8	Nordea	Nordea	PROPN	np_sa0	Case=Acc|Number=Sing	6	dobj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 punct	color:blue
1	Rīga	Rīga	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	zc	_	4	punct	_	_
3	5.	5.	ADJ	xo	NumType=Ord	4	amod	_	SpaceAfter=No
4	jūn.	jūn.	SYM	y	_	1	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	6	punct	_	_
6	LETA	LETA	PROPN	y	_	1	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	1	punct	_	_

~~~


