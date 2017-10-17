

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

4506 nodes (2%) are attached to their parents as `acl`.

4481 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.21193963604083.

The following 31 pairs of parts of speech are connected with `acl`: [ro-pos/NOUN]()-[ro-pos/VERB]() (3874; 86% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (213; 5% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (146; 3% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (104; 2% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (45; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (25; 1% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (18; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (12; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (11; 0% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (10; 0% instances), [ro-pos/NOUN]()-[ro-pos/AUX]() (7; 0% instances), [ro-pos/PRON]()-[ro-pos/ADJ]() (6; 0% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (5; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (5; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (3; 0% instances), [ro-pos/DET]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/NUM]() (2; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/SYM]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/X]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl	color:blue
1	Intră	intra	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	dindos	dindos	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	sufragerie	sufragerie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod:pmod	_	SpaceAfter=No
6	,	,	PUNCT	COMMA	_	8	punct	_	_
7	unde	unde	ADV	Rw	PronType=Int,Rel	12	advmod	_	_
8	constată	constata	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	acl	_	_
9	că	că	SCONJ	Csssp	Polarity=Pos	12	mark	_	_
10	masa	masă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	12	nsubj	_	_
11	era	fi	AUX	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	12	cop	_	_
12	nepusă	nepus	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 acl	color:blue
1	problema	problemă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	probabilitate	probabilitate	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	ToDo=nmod
4	este	fi	AUX	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
5	dacă	dacă	SCONJ	Csssp	Polarity=Pos	6	mark	_	_
6	scoatem	scoate	VERB	Vmip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	12	advcl	_	_
7	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	bilă	bilă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	COMMA	_	12	punct	_	_
10	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	12	nsubj	_	_
11	este	fi	AUX	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	șansa	șansă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	csubj	_	_
13	ca	ca	ADV	Rc	_	17	mark	_	_
14	aceasta	acesta	PRON	Pd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	17	nsubj	_	_
15	să	să	PART	Qs	Mood=Sub	17	mark	_	_
16	fie	fi	AUX	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
17	albă	alb	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	acl	_	SpaceAfter=No
18	?	?	PUNCT	QUEST	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	Ăsta	acesta	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	e	fi	AUX	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	cel	acela	PRON	Pd3msr	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	0	root	_	_
4	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	6	nsubj	_	_
5	vă	tu	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	6	iobj	_	_
6	trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	3	acl	_	SpaceAfter=No
7	,	,	PUNCT	COMMA	_	9	punct	_	_
8	nu	nu	PART	Qz	Polarity=Neg	9	advmod	_	_
9	eu	eu	PRON	Pp1-sn--------s	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	1	conj	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


