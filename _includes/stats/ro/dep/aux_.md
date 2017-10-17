

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

4432 nodes (2%) are attached to their parents as `aux`.

4405 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26331227436823.

The following 17 pairs of parts of speech are connected with `aux`: [ro-pos/VERB]()-[ro-pos/AUX]() (4182; 94% instances), [ro-pos/NOUN]()-[ro-pos/AUX]() (82; 2% instances), [ro-pos/ADJ]()-[ro-pos/AUX]() (65; 1% instances), [ro-pos/ADV]()-[ro-pos/AUX]() (32; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (19; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (16; 0% instances), [ro-pos/PRON]()-[ro-pos/AUX]() (11; 0% instances), [ro-pos/NUM]()-[ro-pos/AUX]() (6; 0% instances), [ro-pos/PROPN]()-[ro-pos/AUX]() (5; 0% instances), [ro-pos/VERB]()-[ro-pos/PART]() (5; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/CCONJ]() (2; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/AUX]() (1; 0% instances), [ro-pos/DET]()-[ro-pos/AUX]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	P-	pe	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	2	case	_	SpaceAfter=No
2	ăsta	acesta	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	7	obj	_	_
3	ar	avea	AUX	Va--3	Person=3	4	aux	_	_
4	trebui	trebui	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	SpaceAfter=No
6	-l	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	7	expl	_	_
7	luați	lua	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	4	csubj	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	11	punct	_	_
9	nu	nu	PART	Qz	Polarity=Neg	11	advmod	_	_
10	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	mine	eu	PRON	Pp1-sa--------s	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	2	conj	_	SpaceAfter=No
12	!	!	PUNCT	EXCL	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Dacă	dacă	SCONJ	Csssp	Polarity=Pos	5	mark	_	_
2	ar	avea	AUX	Va--3	Person=3	5	aux	_	_
3	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	5	aux	_	_
4	fost	fi	AUX	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	5	cop	_	_
5	scrisul	scris	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	12	advcl	_	_
6	lui	lui	DET	Ds3---s	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	5	det	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	5	punct	_	_
8	n-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	12	advmod	_	SpaceAfter=No
9	ai	avea	AUX	Va--2s	Number=Sing|Person=2	12	aux	_	_
10	mai	mai	ADV	Rp	_	12	advmod	_	_
11	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	12	aux	_	_
12	descoperit	descoperi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
13	nimic	nimic	PRON	Pz3-sr	Case=Acc,Nom|Number=Sing|Person=3|PronType=Neg	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 aux	color:blue
1	Conducătorii	conducător	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubj:pass	_	_
2	locali	local	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	amod	_	_
3	au	avea	AUX	Va--3p	Number=Plur|Person=3	7	aux	_	_
4	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	aux:pass	_	_
5	și	și	CCONJ	Crssp	Polarity=Pos	6	advmod	_	_
6	ei	el	PRON	Pp3mpr--------s	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	7	expl	_	_
7	menținuți	menținut	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


