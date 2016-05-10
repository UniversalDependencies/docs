

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

703 nodes (0%) are attached to their parents as `xcomp`.

609 instances of `xcomp` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.80796586059744.

The following 17 pairs of parts of speech are connected with `xcomp`: [ro-pos/VERB]()-[ro-pos/ADJ]() (218; 31% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (194; 28% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (169; 24% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (33; 5% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (29; 4% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (12; 2% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (10; 1% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (10; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (7; 1% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (6; 1% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (4; 1% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (3; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	Doamna	doamnă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	_
2	Parsons	Parsons	PROPN	Np	_	1	nmod	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pv	_	_
4	uita	uita	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
5	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	4	nmod	_	_
7	neajutorată	neajutorat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	xcomp	_	_
8	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Alexandru	alexandru	PROPN	Np	_	5	nsubj	_	_
2	ar	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	putea	putea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	devie	deveni	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	3	csubj	_	_
6	bărbatul	bărbat	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	5	xcomp	_	_
7	meu	meu	PRON	Ps1ms-s	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
8	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp	color:blue
1	Adevărul	adevăr	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
2	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	că	că	SCONJ	Csssp	Negative=Pos	6	mark	_	_
4	biata	biet	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
5	fată	fată	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nsubj	_	_
6	plângea	plânge	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	xcomp	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	rușine	rușine	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nmod	_	_
9	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


