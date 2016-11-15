

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

142 nodes (0%) are attached to their parents as `remnant`.

140 instances of `remnant` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.49295774647887.

The following 24 pairs of parts of speech are connected with `remnant`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (67; 47% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (11; 8% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (8; 6% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (6; 4% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (6; 4% instances), [ro-pos/SYM]()-[ro-pos/SYM]() (5; 4% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (5; 4% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (4; 3% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (4; 3% instances), [ro-pos/VERB]()-[ro-pos/PART]() (4; 3% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (3; 2% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (3; 2% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (2; 1% instances), [ro-pos/ADP]()-[ro-pos/ADP]() (2; 1% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (2; 1% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (2; 1% instances), [ro-pos/ADV]()-[ro-pos/ADP]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/NUM]()-[ro-pos/SYM]() (1; 1% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/SYM]()-[ro-pos/NUM]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (1; 1% instances).


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
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 26 remnant	color:blue
1	(	(	PUNCT	LPAR	_	2	punct	_	_
2	9	9	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	7	parataxis	_	_
3	)	)	PUNCT	RPAR	_	2	punct	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	7	advmod	_	_
5	consecință	consecință	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	mwe	_	_
6	,	,	PUNCT	COMMA	_	4	punct	_	_
7	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	modificate	modificat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	csubj	_	_
9	Regulamentele	regulament	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	8	nsubjpass	_	_
10	(	(	PUNCT	LPAR	_	11	punct	_	_
11	CE	CE	NOUN	Yn	Abbr=Yes	9	nmod	_	_
12	)	)	PUNCT	RPAR	_	11	punct	_	_
13	nr.	nr.	NOUN	Yn	Abbr=Yes	19	nmod	_	_
14	136	136	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	13	nummod	_	_
15	/	/	SYM	SLASH	AdpType=Prep	9	punct	_	_
16	66	66	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	9	nmod	_	_
17	/	/	SYM	SLASH	AdpType=Prep	9	punct	_	_
18	CEE4	CEE4	PROPN	Np	_	9	nmod	_	_
19	,	,	PUNCT	COMMA	_	9	punct	_	_
20	(	(	PUNCT	LPAR	_	21	punct	_	_
21	CEE	CEE	PROPN	Np	_	11	conj	_	_
22	)	)	PUNCT	RPAR	_	21	punct	_	_
23	nr.	nr.	NOUN	Yn	Abbr=Yes	13	remnant	_	_
24	1308	1308	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	23	nummod	_	_
25	/	/	SYM	SLASH	AdpType=Prep	15	remnant	_	_
26	705	705	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	16	remnant	_	_
27	și	și	CONJ	Crssp	Negative=Pos	9	cc	_	_
28	(	(	PUNCT	LPAR	_	29	punct	_	_
29	CE	CE	NOUN	Yn	Abbr=Yes	11	remnant	_	_
30	)	)	PUNCT	RPAR	_	29	punct	_	_
31	nr.	nr.	NOUN	Yn	Abbr=Yes	13	remnant	_	_
32	2275	2275	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	31	nummod	_	_
33	/	/	SYM	SLASH	AdpType=Prep	14	remnant	_	_
34	966	966	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	15	remnant	_	_
35	;	;	PUNCT	SCOLON	AdpType=Prep	7	punct	_	_

~~~


