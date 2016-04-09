

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

314 nodes (0%) are attached to their parents as `goeswith`.

251 instances of `goeswith` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36942675159236.

The following 17 pairs of parts of speech are connected with `goeswith`: [en-pos/NOUN]()-[en-pos/X]() (184; 59% instances), [en-pos/X]()-[en-pos/X]() (62; 20% instances), [en-pos/ADJ]()-[en-pos/X]() (17; 5% instances), [en-pos/ADV]()-[en-pos/X]() (17; 5% instances), [en-pos/VERB]()-[en-pos/X]() (11; 4% instances), [en-pos/ADP]()-[en-pos/X]() (6; 2% instances), [en-pos/PRON]()-[en-pos/X]() (4; 1% instances), [en-pos/ADV]()-[en-pos/ADV]() (2; 1% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (2; 1% instances), [en-pos/PUNCT]()-[en-pos/X]() (2; 1% instances), [en-pos/AUX]()-[en-pos/X]() (1; 0% instances), [en-pos/NUM]()-[en-pos/X]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/X]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/X]() (1; 0% instances), [en-pos/SYM]()-[en-pos/SYM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 goeswith	color:blue
1	-	-	PUNCT	NFP	_	7	punct	_	_
2	ENRON-CPS	enron-cps	X	GW	_	7	goeswith	_	_
3	(	(	X	GW	_	7	goeswith	_	SpaceAfter=No
4	GISB	gisb	X	GW	_	7	goeswith	_	_
5	rev1	rev1	X	GW	_	7	goeswith	_	SpaceAfter=No
6	)	)	X	GW	_	7	goeswith	_	SpaceAfter=No
7	.doc	.doc	NOUN	NN	Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	Robert	robert	X	GW	_	0	root	_	_
2	Bryngelson@AZURIX	bryngelson@azurix	X	ADD	_	1	goeswith	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 goeswith	color:blue
1	when	when	ADV	WRB	PronType=Int	3	mark	_	_
2	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	_
3	turn	turn	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	7	advcl	_	_
4	21	21	NUM	CD	NumType=Card	3	dobj	_	_
5	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	7	nsubj	_	_
6	can	can	AUX	MD	VerbForm=Fin	7	aux	_	_
7	party	party	VERB	VB	VerbForm=Inf	0	root	_	_
8	any	any	X	GW	_	9	goeswith	_	_
9	were	were	ADV	RB	_	7	advmod	_	_
10	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	11	nsubj	_	_
11	want	want	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	9	acl:relcl	_	_

~~~


