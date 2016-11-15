

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

4847 nodes (2%) are attached to their parents as `aux`.

4812 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.24654425417784.

The following 23 pairs of parts of speech are connected with `aux`: [ro-pos/VERB]()-[ro-pos/AUX]() (4575; 94% instances), [ro-pos/NOUN]()-[ro-pos/AUX]() (63; 1% instances), [ro-pos/ADJ]()-[ro-pos/AUX]() (54; 1% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (46; 1% instances), [ro-pos/ADV]()-[ro-pos/AUX]() (32; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (23; 0% instances), [ro-pos/PRON]()-[ro-pos/AUX]() (12; 0% instances), [ro-pos/VERB]()-[ro-pos/PART]() (7; 0% instances), [ro-pos/NUM]()-[ro-pos/AUX]() (6; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (5; 0% instances), [ro-pos/PROPN]()-[ro-pos/AUX]() (4; 0% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (4; 0% instances), [ro-pos/AUX]()-[ro-pos/AUX]() (2; 0% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/DET]()-[ro-pos/AUX]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/PART]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/SCONJ]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Eu	eu	PRON	Pp1-sn--------s	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	3	nsubj	_	_
2	sunt	fi	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	cel	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	nsubj	_	_
5	ți-	tu	PRON	Pp2-sd--y-----w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Variant=Short	7	iobj	_	_
6	a	avea	AUX	Va--3s	Number=Sing|Person=3	7	aux	_	_
7	stricat	strica	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	acl	_	_
8	întreaga	întreg	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	operațiune	operațiune	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	dobj	_	_
10	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 aux	color:blue
1	A	avea	AUX	Va--3s	Number=Sing|Person=3	5	aux	_	_
2	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	5	cop	_	_
3	ca	ca	ADV	Rc	_	5	advmod	_	_
4	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	5	det	_	_
5	dezlegare	dezlegare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	vrajă	vrajă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 aux	color:blue
1	Conducătorii	conducător	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubjpass	_	_
2	locali	local	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	amod	_	_
3	au	avea	AUX	Va--3p	Number=Plur|Person=3	7	aux	_	_
4	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	auxpass	_	_
5	și	și	CONJ	Crssp	Negative=Pos	6	advmod	_	_
6	ei	el	PRON	Pp3mpr--------s	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	7	expl	_	_
7	menținuți	menținut	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	_
8	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


