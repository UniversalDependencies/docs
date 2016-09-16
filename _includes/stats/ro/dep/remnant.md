

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

103 nodes (0%) are attached to their parents as `remnant`.

101 instances of `remnant` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.48543689320388.

The following 22 pairs of parts of speech are connected with `remnant`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (46; 45% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (10; 10% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (5; 5% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (5; 5% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (5; 5% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (4; 4% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (4; 4% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (3; 3% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (3; 3% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (3; 3% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (2; 2% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (2; 2% instances), [ro-pos/SYM]()-[ro-pos/SYM]() (2; 2% instances), [ro-pos/ADP]()-[ro-pos/ADP]() (1; 1% instances), [ro-pos/AUX]()-[ro-pos/PUNCT]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (1; 1% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/PUNCT]()-[ro-pos/CONJ]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 remnant	color:blue
1	Jurnalul	jurnal	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
2	avea	avea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	aux	_	_
3	să	să	PART	Qs	Mood=Sub	4	mark	_	_
4	ajungă	ajunge	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	scrum	scrum	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	xcomp	_	_
6	,	,	PUNCT	COMMA	_	4	punct	_	_
7	iar	iar	ADV	Rc	_	4	cc	_	_
8	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	1	remnant	_	_
9	vapori	vapori	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	5	remnant	_	_
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 remnant	color:blue
1	Eminescu	Eminescu	PROPN	Np	_	2	nsubj	_	_
2	domina	domina	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	naiva	naiv	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	_
4	lui	el	PRON	Pp3mso--------s	Case=Dat,Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	5	nmod	_	_
5	contemporaneitate	contemporaneitate	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	dobj	_	_
6	,	,	PUNCT	COMMA	_	2	punct	_	_
7	altfel	altfel	ADV	Rgp	Degree=Pos	2	advmod	_	_
8	decât	decât	ADV	Rc	_	7	advmod	_	_
9	Arghezi	Arghezi	PROPN	Np	_	1	remnant	_	_
10	,	,	PUNCT	COMMA	_	2	punct	_	_
11	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
12	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	13	det	_	_
13	domniei-sale	domniei-sale	NOUN	Yn	Abbr=Yes	4	remnant	_	_
14	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 remnant	color:blue
1	Cine	cine	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	2	nsubj	_	_
2	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	csubj	_	_
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	oase	os	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	dobj	_	_
5	roade	roade	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	,	,	PUNCT	COMMA	_	5	punct	_	_
7	cine	cine	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	1	remnant	_	_
8	nu	nu	PART	Qz	Negative=Neg	2	remnant	_	_
9	,	,	PUNCT	COMMA	_	5	punct	_	_
10	nici	nici	ADV	Rz	PronType=Neg	11	advmod	_	_
11	carne	carne	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	remnant	_	_
12	moale	moale	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
13	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


