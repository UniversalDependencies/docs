

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.
There are 3 language-specific subtypes of `nmod`: [nmod:agent](), [nmod:pmod](), [nmod:tmod]().

18592 nodes (9%) are attached to their parents as `nmod`.

18333 instances of `nmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.44406196213425.

The following 40 pairs of parts of speech are connected with `nmod`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (15592; 84% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (1857; 10% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (360; 2% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (234; 1% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (139; 1% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (102; 1% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (81; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (34; 0% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (29; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (26; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (20; 0% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (17; 0% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (14; 0% instances), [ro-pos/NOUN]()-[ro-pos/X]() (14; 0% instances), [ro-pos/NUM]()-[ro-pos/PRON]() (10; 0% instances), [ro-pos/PRON]()-[ro-pos/PROPN]() (9; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (8; 0% instances), [ro-pos/DET]()-[ro-pos/NOUN]() (6; 0% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (6; 0% instances), [ro-pos/NUM]()-[ro-pos/PROPN]() (6; 0% instances), [ro-pos/ADP]()-[ro-pos/PRON]() (3; 0% instances), [ro-pos/PRON]()-[ro-pos/ADV]() (3; 0% instances), [ro-pos/INTJ]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/CCONJ]() (2; 0% instances), [ro-pos/SYM]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/X]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/ADP]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/DET]()-[ro-pos/CCONJ]() (1; 0% instances), [ro-pos/DET]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/INTJ]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/X]() (1; 0% instances), [ro-pos/X]()-[ro-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	Prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
2	însăși	însuși	DET	Dh3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Emp	3	det	_	_
3	natura	natură	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	obl	_	_
4	lucrurilor	lucru	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	3	nmod	_	_
5	era	fi	AUX	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
6	imposibil	imposibil	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	Băieții	băiat	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	6	nsubj	_	_
2	căpitanului	căpitan	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	1	nmod	_	_
3	George	George	PROPN	Np	_	2	nmod	_	_
4	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	6	expl:pv	_	SpaceAfter=No
5	au	avea	AUX	Va--3p	Number=Plur|Person=3	6	aux	_	_
6	înecat	îneca	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	mare	mare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	obl	_	_
9	ca	ca	ADV	Rc	_	10	case	_	_
10	Tom	tom	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	obl	_	_
11	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	_
12	meu	meu	DET	Ds1ms-s	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
1	Un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	om	om	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	nsubj	_	_
3	ca	ca	ADV	Rc	_	4	case	_	_
4	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	2	nmod	_	_
5	nici	nici	ADV	Rz	PronType=Neg	6	advmod	_	_
6	doi	doi	NUM	Mcmp-l	Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	7	nummod	_	_
7	ani	an	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	10	obl	_	_
8	n-	nu	PART	Qz-y	Polarity=Neg|Variant=Short	10	advmod	_	SpaceAfter=No
9	a	avea	AUX	Va--3s	Number=Sing|Person=3	10	aux	_	_
10	putut	putea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
11	să	să	PART	Qs	Mood=Sub	12	mark	_	_
12	stea	sta	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
13	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	Butucani	Butucani	PROPN	Np	_	12	obl	_	SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


