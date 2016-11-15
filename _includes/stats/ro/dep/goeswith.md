

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

156 nodes (0%) are attached to their parents as `goeswith`.

153 instances of `goeswith` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.04487179487179.

The following 33 pairs of parts of speech are connected with `goeswith`: [ro-pos/NUM]()-[ro-pos/NUM]() (68; 44% instances), [ro-pos/NOUN]()-[ro-pos/SYM]() (11; 7% instances), [ro-pos/NUM]()-[ro-pos/PUNCT]() (10; 6% instances), [ro-pos/PUNCT]()-[ro-pos/NUM]() (10; 6% instances), [ro-pos/ADV]()-[ro-pos/DET]() (7; 4% instances), [ro-pos/SYM]()-[ro-pos/NOUN]() (5; 3% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (4; 3% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (3; 2% instances), [ro-pos/NOUN]()-[ro-pos/PUNCT]() (3; 2% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (3; 2% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (3; 2% instances), [ro-pos/PUNCT]()-[ro-pos/NOUN]() (3; 2% instances), [ro-pos/SYM]()-[ro-pos/NUM]() (3; 2% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (2; 1% instances), [ro-pos/AUX]()-[ro-pos/NUM]() (2; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (2; 1% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/ADP]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/PUNCT]() (1; 1% instances), [ro-pos/ADV]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/AUX]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/DET]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/PUNCT]() (1; 1% instances), [ro-pos/PUNCT]()-[ro-pos/PROPN]() (1; 1% instances), [ro-pos/PUNCT]()-[ro-pos/PUNCT]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/X]()-[ro-pos/X]() (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 goeswith	color:blue
1	Cumpăr	cumpăra	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	Dacia	Dacia	PROPN	Np	_	1	dobj	_	_
3	1310	1310	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	2	nummod	_	_
4	,	,	PUNCT	COMMA	_	6	punct	_	_
5	orice	orice	DET	Di3--r---e	Case=Acc,Nom|Person=3|Position=Prenom|PronType=Ind	6	amod	_	_
6	stare	stare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	nmod	_	_
7	,	,	PUNCT	COMMA	_	1	punct	_	_
8	ofer	oferi	VERB	Vmm-2s----y	Mood=Imp|Number=Sing|Person=2|Variant=Short|VerbForm=Fin	1	conj	_	_
9	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	8	advmod	_	_
10	loc	loc	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	mwe	_	_
11	12	12	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	15	nummod	_	_
12	000	000	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	11	goeswith	_	_
13	000	000	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	12	goeswith	_	_
14	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
15	lei	leu	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	8	dobj	_	_
16	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 goeswith	color:blue
1	Mulțimea	mulțime	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	_
2	Q	Q	NOUN	Ncm--n	Definite=Ind|Gender=Masc	1	nmod	_	_
3	+	+	SYM	PLUS	_	2	goeswith	_	_
4	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	_
5	numerelor	număr	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	1	nmod	_	_
6	raționale	rațional	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	5	amod	_	_
7	pozitive	pozitiv	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	5	amod	_	_
8	este	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	numărabilă	numărabil	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
10	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	Seringile	seringă	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	2	nsubj	_	_
2	conțin	conține	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	0	0	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	6	nummod	_	_
4	,	,	PUNCT	COMMA	_	3	goeswith	_	_
5	5	5	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	4	goeswith	_	_
6	ml	ml	NOUN	Yn	Abbr=Yes	11	nmod	_	_
7	(	(	PUNCT	LPAR	_	9	punct	_	_
8	1000	1000	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	9	nummod	_	_
9	UI	UI	NOUN	Yn	Abbr=Yes	6	nmod	_	_
10	)	)	PUNCT	RPAR	_	9	punct	_	_
11	soluție	soluție	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	nmod	_	_
12	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


