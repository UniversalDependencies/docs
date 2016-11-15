

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1715 nodes (1%) are attached to their parents as `iobj`.

974 instances of `iobj` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.02390670553936.

The following 20 pairs of parts of speech are connected with `iobj`: [ro-pos/VERB]()-[ro-pos/PRON]() (719; 42% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (695; 41% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (169; 10% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (59; 3% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (14; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (12; 1% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (11; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (10; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (4; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (4; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (3; 0% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/SYM]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 iobj	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 iobj	color:blue
1	Sunt	fi	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
2	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	număr	număr	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
5	patru	patru	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	0	root	_	_
6	și	și	CONJ	Crssp	Negative=Pos	5	cc	_	_
7	corespund	corespunde	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
8	hieratic	hieratic	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	advmod	_	_
9	punctelor	punct	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	7	iobj	_	_
10	cardinale	cardinal	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	_
11	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	Istoricii	istoric	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	2	nsubj	_	_
2	au	avea	AUX	Va--3p	Number=Plur|Person=3	0	root	_	_
3	diferite	diferi	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	4	amod	_	_
4	teorii	teorie	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	2	dobj	_	_
5	referitoare	referitor	ADJ	Afpf--n	Definite=Ind|Degree=Pos|Gender=Fem	4	advcl	_	_
6	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	originea	origine	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	iobj	_	_
8	numelui	nume	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	7	nmod	_	_
9	Iași	Iași	PROPN	Np	_	8	nmod	_	_
10	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


