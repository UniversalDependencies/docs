

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [cc]().

125 nodes (0%) are attached to their parents as `cc:preconj`.

119 instances of `cc:preconj` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.328.

The following 15 pairs of parts of speech are connected with `cc:preconj`: [en-pos/NOUN]()-[en-pos/CONJ]() (38; 30% instances), [en-pos/PROPN]()-[en-pos/CONJ]() (27; 22% instances), [en-pos/VERB]()-[en-pos/CONJ]() (16; 13% instances), [en-pos/VERB]()-[en-pos/ADV]() (11; 9% instances), [en-pos/ADJ]()-[en-pos/CONJ]() (8; 6% instances), [en-pos/NOUN]()-[en-pos/ADV]() (7; 6% instances), [en-pos/ADV]()-[en-pos/CONJ]() (5; 4% instances), [en-pos/PROPN]()-[en-pos/ADV]() (3; 2% instances), [en-pos/ADJ]()-[en-pos/ADV]() (2; 2% instances), [en-pos/PRON]()-[en-pos/CONJ]() (2; 2% instances), [en-pos/PROPN]()-[en-pos/DET]() (2; 2% instances), [en-pos/CONJ]()-[en-pos/CONJ]() (1; 1% instances), [en-pos/DET]()-[en-pos/ADV]() (1; 1% instances), [en-pos/NUM]()-[en-pos/CONJ]() (1; 1% instances), [en-pos/PRON]()-[en-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc:preconj	color:blue
1	Al	Al	PROPN	NNP	Number=Sing	2	compound	_	_
2	Qaeda	Qaeda	PROPN	NNP	Number=Sing	3	nsubj	_	_
3	had	have	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	both	both	CONJ	CC	_	6	cc:preconj	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
6	means	means	NOUN	NNS	Number=Plur	3	dobj	_	_
7	and	and	CONJ	CC	_	6	cc	_	_
8	opportunity	opportunity	NOUN	NN	Number=Sing	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	2	nsubj	_	_
2	know	know	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	that	that	SCONJ	IN	_	9	mark	_	_
4	both	both	CONJ	CC	_	5	cc:preconj	_	_
5	o'neal	o'neal	PROPN	NNP	Number=Sing	9	nsubj	_	_
6	and	and	CONJ	CC	_	5	cc	_	_
7	matt	matt	PROPN	NNP	Number=Sing	5	conj	_	_
8	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	out	out	ADV	RB	_	2	ccomp	_	SpaceAfter=No
10	?	?	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	Expect	expect	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	either	either	CONJ	CC	_	3	cc:preconj	_	_
3	undercooked	undercook	VERB	VBN	Tense=Past|VerbForm=Part	6	amod	_	_
4	or	or	CONJ	CC	_	3	cc	_	_
5	mushy	mushy	ADJ	JJ	Degree=Pos	3	conj	_	_
6	food	food	NOUN	NN	Number=Sing	1	dobj	_	_
7	and	and	CONJ	CC	_	6	cc	_	_
8	lackluster	lackluster	ADJ	JJ	Degree=Pos	9	amod	_	_
9	service	service	NOUN	NN	Number=Sing	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	1	punct	_	_

~~~


