

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

6860 nodes (6%) are attached to their parents as `amod`.

6712 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18294460641399.

The following 8 pairs of parts of speech are connected with `amod`: [sk-pos/NOUN]()-[sk-pos/ADJ]() (6648; 97% instances), [sk-pos/PROPN]()-[sk-pos/ADJ]() (134; 2% instances), [sk-pos/PRON]()-[sk-pos/ADJ]() (48; 1% instances), [sk-pos/ADJ]()-[sk-pos/ADJ]() (10; 0% instances), [sk-pos/NUM]()-[sk-pos/ADJ]() (10; 0% instances), [sk-pos/X]()-[sk-pos/ADJ]() (8; 0% instances), [sk-pos/INTJ]()-[sk-pos/ADJ]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Ďalšie	ďalší	ADJ	AAip1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	kroky	krok	NOUN	SSip1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	5	nsubj	_	_
3	švajčiarskej	švajčiarský	ADJ	AAfs2x	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	sudkyne	sudkyňa	NOUN	SSfs2	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
5	povedú	poviesť	VERB	VKdpc+	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	do	do	ADP	Eu2	AdpType=Prep|Case=Gen	7	case	_	_
7	Belehradu	belehrad	PROPN	SSis2:r	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	*	*	PUNCT	#	_	3	punct	_	_
2	Ezopove	ezopov	ADJ	AFfp1x:r	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	3	amod	_	_
3	Bájky	bájka	PROPN	SSfp1:r	Case=Nom|Gender=Fem|Number=Plur	0	root	_	_
4	(	(	PUNCT	Z	_	3	punct	_	_
5	1530	1530	NUM	0	NumForm=Digit	3	dep	_	_
6	)	)	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	Uvidíme	uvidieť	VERB	VKdpa+	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	,	,	PUNCT	ZIP	VerbForm=Inf	6	punct	_	_
3	ako	ako	CONJ	O	_	6	advmod	_	_
4	do	to	PRON	PFns1:q	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs|Typo=Yes	6	nsubj	_	_
5	celé	celý	ADJ	AAns1x	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	amod	_	_
6	dopadne	dopadnúť	VERB	VKdsc+	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
7	.	.	PUNCT	ZIP	VerbForm=Inf	1	punct	_	_

~~~


