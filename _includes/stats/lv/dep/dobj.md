

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

895 nodes (4%) are attached to their parents as `dobj`.

614 instances of `dobj` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.72290502793296.

The following 18 pairs of parts of speech are connected with `dobj`: [lv-pos/VERB]()-[lv-pos/NOUN]() (661; 74% instances), [lv-pos/VERB]()-[lv-pos/PRON]() (90; 10% instances), [lv-pos/VERB]()-[lv-pos/PROPN]() (51; 6% instances), [lv-pos/VERB]()-[lv-pos/SCONJ]() (34; 4% instances), [lv-pos/NOUN]()-[lv-pos/NOUN]() (19; 2% instances), [lv-pos/ADV]()-[lv-pos/PRON]() (10; 1% instances), [lv-pos/VERB]()-[lv-pos/ADJ]() (6; 1% instances), [lv-pos/VERB]()-[lv-pos/VERB]() (5; 1% instances), [lv-pos/VERB]()-[lv-pos/SYM]() (4; 0% instances), [lv-pos/NOUN]()-[lv-pos/PRON]() (3; 0% instances), [lv-pos/ADJ]()-[lv-pos/NOUN]() (2; 0% instances), [lv-pos/ADV]()-[lv-pos/NOUN]() (2; 0% instances), [lv-pos/PUNCT]()-[lv-pos/NOUN]() (2; 0% instances), [lv-pos/VERB]()-[lv-pos/NUM]() (2; 0% instances), [lv-pos/INTJ]()-[lv-pos/NOUN]() (1; 0% instances), [lv-pos/NOUN]()-[lv-pos/PROPN]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/DET]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dobj	color:blue
1	Uzņēmums	uzņēmums	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	projekta	projekts	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
3	realizāciju	realizācija	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	4	dobj	_	_
4	sāka	sākt	VERB	vmnist130an	Mood=Ind|Negative=Neg|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	2001.	2001.	ADJ	xo	NumType=Ord	6	amod	_	SpaceAfter=No
6	gadā	gads	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dobj	color:blue
1	Jautājums	jautājums	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	ir	būt	VERB	vmnipii30an	Mood=Ind|Negative=Neg|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ko	kas	PRON	pq000an	Case=Acc|PronType=Int	4	dobj	_	_
4	liekam	likt	VERB	vmnipt11pan	Mood=Ind|Negative=Neg|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
5	caurulei	caurule	NOUN	ncfsd5	Case=Dat|Gender=Fem|Number=Sing	6	iobj	_	_
6	galā	gals	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dobj	color:blue
1	Dienas	diena	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
2	Bizness	bizness	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	6	parataxis	_	SpaceAfter=No
3	:	:	PUNCT	zo	_	2	punct	_	_
4	PF	PF	PROPN	y	_	5	nmod	_	_
5	Ķekava	Ķekava	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	_
6	saķeras	saķerties	VERB	vmyipi130an	Mood=Ind|Negative=Neg|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	ar	ar	ADP	spsan	_	8	case	_	_
8	Nordea	Nordea	PROPN	np_sa0	Case=Acc|Number=Sing	6	dobj	_	_

~~~


