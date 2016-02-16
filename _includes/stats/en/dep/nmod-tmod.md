

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:npmod](), [nmod:poss]().

1039 nodes (0%) are attached to their parents as `nmod:tmod`.

896 instances of `nmod:tmod` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66410009624639.

The following 27 pairs of parts of speech are connected with `nmod:tmod`: [en-pos/VERB]()-[en-pos/NOUN]() (505; 49% instances), [en-pos/NUM]()-[en-pos/NOUN]() (188; 18% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (83; 8% instances), [en-pos/VERB]()-[en-pos/PROPN]() (54; 5% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (42; 4% instances), [en-pos/PROPN]()-[en-pos/NUM]() (34; 3% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (32; 3% instances), [en-pos/ADV]()-[en-pos/NOUN]() (28; 3% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (13; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (11; 1% instances), [en-pos/NOUN]()-[en-pos/NUM]() (10; 1% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (10; 1% instances), [en-pos/NUM]()-[en-pos/NUM]() (9; 1% instances), [en-pos/VERB]()-[en-pos/ADJ]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (2; 0% instances), [en-pos/ADV]()-[en-pos/NUM]() (2; 0% instances), [en-pos/AUX]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/ADV]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/NUM]() (1; 0% instances), [en-pos/ADV]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SYM]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/X]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/X]()-[en-pos/NUM]() (1; 0% instances), [en-pos/X]()-[en-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:tmod	color:blue
1	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	going	go	VERB	VBG	VerbForm=Ger	0	root	_	_
4	out	out	ADV	RB	_	3	advmod	_	_
5	tonight	tonight	NOUN	NN	Number=Sing	3	nmod:tmod	_	_
6	to	to	PART	TO	_	8	mark	_	_
7	get	get	VERB	VB	VerbForm=Inf	8	aux	_	_
8	wasted	wasted	ADJ	JJ	Degree=Pos	3	xcomp	_	_
9	if	if	SCONJ	IN	_	12	mark	_	_
10	anyone	anyone	NOUN	NN	Number=Sing	12	nsubj	_	_
11	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	interested	interested	ADJ	JJ	Degree=Pos	3	advcl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:tmod	color:blue
1	02/13/2001	02/13/2001	NUM	CD	NumType=Card	0	root	_	_
2	08:02	08:02	NUM	CD	NumType=Card	3	nummod	_	_
3	PM	pm	NOUN	NN	Number=Sing	1	nmod:tmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:tmod	color:blue
1	Game	game	NOUN	NN	Number=Sing	0	root	_	_
2	tonight	tonight	NOUN	NN	Number=Sing	1	nmod:tmod	_	_
3	at	at	ADP	IN	_	4	case	_	_
4	7	7	NUM	CD	NumType=Card	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	_	_
6	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	SpaceAfter=No
7	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	time	time	NOUN	NN	Number=Sing	1	parataxis	_	_
9	to	to	PART	TO	_	10	mark	_	_
10	kick	kick	VERB	VB	VerbForm=Inf	8	acl	_	_
11	some	some	DET	DT	_	12	det	_	_
12	ass	ass	NOUN	NN	Number=Sing	10	dobj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	_

~~~


