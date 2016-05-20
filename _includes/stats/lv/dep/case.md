

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

789 nodes (4%) are attached to their parents as `case`.

784 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.41444866920152.

The following 14 pairs of parts of speech are connected with `case`: [lv-pos/NOUN]()-[lv-pos/ADP]() (599; 76% instances), [lv-pos/PRON]()-[lv-pos/ADP]() (56; 7% instances), [lv-pos/PROPN]()-[lv-pos/ADP]() (46; 6% instances), [lv-pos/SYM]()-[lv-pos/ADP]() (33; 4% instances), [lv-pos/NUM]()-[lv-pos/ADP]() (15; 2% instances), [lv-pos/ADJ]()-[lv-pos/ADP]() (12; 2% instances), [lv-pos/SCONJ]()-[lv-pos/ADP]() (12; 2% instances), [lv-pos/VERB]()-[lv-pos/ADP]() (7; 1% instances), [lv-pos/ADV]()-[lv-pos/ADP]() (2; 0% instances), [lv-pos/NOUN]()-[lv-pos/ADV]() (2; 0% instances), [lv-pos/PRON]()-[lv-pos/ADV]() (2; 0% instances), [lv-pos/NOUN]()-[lv-pos/PUNCT]() (1; 0% instances), [lv-pos/SYM]()-[lv-pos/ADV]() (1; 0% instances), [lv-pos/X]()-[lv-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	Arī	arī	PART	qs	_	3	discourse	_	_
2	ar	ar	ADP	sppdn	_	3	case	_	_
3	konkurentiem	konkurents	NOUN	ncmpd1	Case=Dat|Gender=Masc|Number=Plur	0	root	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 case	color:blue
1	Lai	lai	SCONJ	css	_	2	mark	_	_
2	domātu	domāt	VERB	vmnc0t200an	Mood=Cnd|Negative=Neg|VerbForm=Fin|Voice=Act	6	advcl	_	_
3	par	par	ADP	spsan	_	4	case	_	_
4	attīstību	attīstība	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	2	dobj	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	2	punct	_	_
6	gribētos	gribēties	VERB	voyc0t300an	Mood=Cnd|Negative=Neg|Reflex=Yes|VerbForm=Fin|Voice=Act	0	root	_	_
7	saprast	saprast	VERB	vmnn0t1000n	Negative=Neg|VerbForm=Inf	6	xcomp	_	_
8	virzību	virzība	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	7	dobj	_	SpaceAfter=No
9	,	,	PUNCT	zc	_	12	punct	_	_
10	uz	uz	ADP	spsay	_	11	case	_	_
11	ko	kas	PRON	pi000an	Case=Acc|PronType=Ind	12	nmod	_	_
12	ejam	iet	VERB	vmnipii1pan	Mood=Ind|Negative=Neg|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl	_	SpaceAfter=No
13	.	.	PUNCT	zs	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Dienas	diena	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	Bizness	bizness	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	6	parataxis	_	SpaceAfter=No
3	:	:	PUNCT	zo	_	2	punct	_	_
4	PF	PF	PROPN	y	_	5	nmod	_	_
5	Ķekava	Ķekava	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
6	saķeras	saķerties	VERB	vmyipi130an	Mood=Ind|Negative=Neg|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	ar	ar	ADP	spsan	_	8	case	_	_
8	Nordea	Nordea	PROPN	np_sa0	Case=Acc|Number=Sing	6	dobj	_	_

~~~


