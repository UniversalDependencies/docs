

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

9 nodes (0%) are attached to their parents as `discourse`.

9 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.11111111111111.

The following 4 pairs of parts of speech are connected with `discourse`: [ro-pos/VERB]()-[ro-pos/CONJ]() (6; 67% instances), [ro-pos/NOUN]()-[ro-pos/CONJ]() (1; 11% instances), [ro-pos/VERB]()-[ro-pos/INTJ]() (1; 11% instances), [ro-pos/VERB]()-[ro-pos/SCONJ]() (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 discourse	color:blue
1	Dar	dar	CONJ	Ccssp	Negative=Pos	10	discourse	_	_
2	,	,	PUNCT	COMMA	_	4	punct	_	_
3	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	4	expl:pv	_	_
4	rog	ruga	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	parataxis	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	pe	pe	ADP	Sp	AdpType=Prep	7	case	_	_
7	duduca	duducă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	15	dobj	_	_
8	Luluța	Luluța	PROPN	Np	_	7	appos	_	_
9	nu	nu	PART	Qz	Negative=Neg	10	neg	_	_
10	știți	ști	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
11	unde	unde	ADV	Rw	PronType=Int,Rel	15	advmod	_	_
12	-aș	avea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	putea	putea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	15	aux	_	_
14	-o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	15	expl	_	_
15	găsi	găsi	VERB	Vmnp	Tense=Pres|VerbForm=Inf	10	ccomp	_	_
16	?	?	PUNCT	QUEST	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 discourse	color:blue
1	Că	că	SCONJ	Csssp	Negative=Pos	11	discourse	_	_
2	maica	maică	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
3	de	de	SCONJ	Csssp	Negative=Pos	5	mark	_	_
4	ar	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	putea	putea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	11	advcl	_	_
6	și	și	ADV	Rp	_	8	advmod	_	_
7	din	din	ADP	Sp	AdpType=Prep	8	case	_	_
8	astea	ăsta	PRON	Pd3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Dem	11	iobj	_	_
9	m	m	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	11	dobj	_	_
10	-ar	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	scăpa	scăpa	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
12	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Vai	vai	INTJ	I	_	4	discourse	_	_
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	nu	nu	PART	Qz	Negative=Neg	4	neg	_	_
4	știm	ști	VERB	Vmip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	nu	nu	PART	Qz	Negative=Neg	7	neg	_	_
7	suntem	fi	VERB	Vmip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	mwe	_	_
9	stare	stare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	conj	_	_
10	să	să	PART	Qs	Mood=Sub	11	mark	_	_
11	smulgem	smulge	VERB	Vmip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	xcomp	_	_
12	viitorului	viitor	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	11	iobj	_	_
13	vălul	văl	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	11	dobj	_	_
14	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	taină	taină	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	13	nmod	_	_
16	ce-	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	18	nsubj	_	_
17	l	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	18	dobj	_	_
18	ascunde	ascunde	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	acl	_	_
19	privirilor	privire	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	18	iobj	_	_
20	noastre	meu	DET	Ds1fp-p	Gender=Fem|Number=Plur|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	19	det	_	_
21	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


