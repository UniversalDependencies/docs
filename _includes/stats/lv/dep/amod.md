

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Latvian)

This relation is universal.

1212 nodes (6%) are attached to their parents as `amod`.

1212 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53712871287129.

The following 11 pairs of parts of speech are connected with `amod`: [lv-pos/NOUN]()-[lv-pos/ADJ]() (954; 79% instances), [lv-pos/NOUN]()-[lv-pos/VERB]() (227; 19% instances), [lv-pos/SYM]()-[lv-pos/ADJ]() (15; 1% instances), [lv-pos/PROPN]()-[lv-pos/ADJ]() (8; 1% instances), [lv-pos/PROPN]()-[lv-pos/VERB]() (2; 0% instances), [lv-pos/ADJ]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/NUM]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/SYM]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/VERB]()-[lv-pos/VERB]() (1; 0% instances), [lv-pos/X]()-[lv-pos/ADJ]() (1; 0% instances), [lv-pos/X]()-[lv-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Uzņēmums	uzņēmums	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
2	projekta	projekts	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
3	realizāciju	realizācija	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	4	dobj	_	_
4	sāka	sākt	VERB	vmnist130an	Mood=Ind|Negative=Neg|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	2001.	2001.	ADJ	xo	NumType=Ord	6	amod	_	SpaceAfter=No
6	gadā	gads	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Zināmā	zināt	VERB	vmnpdmslppn	Case=Loc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	2	amod	_	_
2	mērā	mērs	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	3	nmod	_	_
3	parādās	parādīties	VERB	vmyipi330an	Mood=Ind|Negative=Neg|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	šī	šī	DET	pd0fsnn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
5	starpindustriju	starpindustriju	NOUN	ncfps4	Gender=Fem|Number=Plur	6	nmod	_	_
6	konkurence	konkurence	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Rīga	Rīga	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	zc	_	4	punct	_	_
3	5.	5.	ADJ	xo	NumType=Ord	4	amod	_	SpaceAfter=No
4	jūn.	jūn.	SYM	y	_	1	parataxis	_	SpaceAfter=No
5	,	,	PUNCT	zc	_	6	punct	_	_
6	LETA	LETA	PROPN	y	_	1	parataxis	_	SpaceAfter=No
7	.	.	PUNCT	zs	_	1	punct	_	_

~~~


