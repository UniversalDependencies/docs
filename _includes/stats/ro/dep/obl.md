

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

10730 nodes (5%) are attached to their parents as `obl`.

8495 instances of `obl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.40438024231128.

The following 30 pairs of parts of speech are connected with `obl`: [ro-pos/VERB]()-[ro-pos/NOUN]() (8400; 78% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (770; 7% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (655; 6% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (423; 4% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (133; 1% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (60; 1% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (59; 1% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (49; 0% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (35; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (28; 0% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (24; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (24; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (15; 0% instances), [ro-pos/AUX]()-[ro-pos/NOUN]() (13; 0% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (5; 0% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (5; 0% instances), [ro-pos/VERB]()-[ro-pos/CCONJ]() (4; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/DET]() (3; 0% instances), [ro-pos/AUX]()-[ro-pos/ADP]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/PART]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/X]() (3; 0% instances), [ro-pos/ADV]()-[ro-pos/ADP]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/AUX]()-[ro-pos/ADV]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/SCONJ]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/CCONJ]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Cum	cum	ADV	Rw	PronType=Int,Rel	2	advmod	_	_
2	puteai	putea	VERB	Vmii2s	Mood=Ind|Number=Sing|Person=2|Tense=Imp|VerbForm=Fin	0	root	_	_
3	să	să	PART	Qs	Mood=Sub	4	mark	_	_
4	comunici	comunica	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	viitorul	viitor	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
7	?	?	PUNCT	QUEST	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl	color:blue
1	Secundele	secundă	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	2	nsubj	_	_
2	treceau	trece	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	una	unul	PRON	Pi3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	2	obl	_	_
4	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	alta	altul	PRON	Pi3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	2	obl	_	SpaceAfter=No
6	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 obl	color:blue
1	Cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	10	advmod	_	_
2	toate	tot	PRON	Pi3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	1	fixed	_	_
3	astea	acesta	PRON	Pd3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	1	fixed	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	1	punct	_	_
5	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	locul	loc	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	10	obl	_	_
7	unde	unde	ADV	Rw	PronType=Int,Rel	8	advmod	_	_
8	stătea	sta	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	acl	_	_
9	era	fi	AUX	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
10	invizibil	invizibil	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


