

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [ccomp]().

121 nodes (0%) are attached to their parents as `ccomp:pmod`.

121 instances of `ccomp:pmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.50413223140496.

The following 8 pairs of parts of speech are connected with `ccomp:pmod`: [ro-pos/VERB]()-[ro-pos/VERB]() (87; 72% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (17; 14% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (9; 7% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (2; 2% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (2; 2% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (2; 2% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp:pmod	color:blue
1	/	/	SYM	SLASH	AdpType=Prep	3	iobj	_	_
2	Te	tu	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	3	expl:pv	_	_
3	uită	uita	VERB	Vmm-2s	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
4	cum	cum	ADV	Rw	PronType=Int,Rel	5	advmod	_	_
5	ninge	ninge	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp:pmod	_	_
6	Decembre	Decembre	PROPN	Np	_	5	nsubj	_	_
7	…	…	PUNCT	HELLIP	_	3	punct	_	_
8	/	/	SYM	SLASH	AdpType=Prep	3	punct	_	_
9	Nu	nu	PART	Qz	Negative=Neg	10	neg	_	_
10	râde	râde	VERB	Vmm-2s	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	3	conj	_	_
11	…	…	PUNCT	HELLIP	_	3	punct	_	_
12	citește	citi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
13	-nainte	înainte	ADV	Rgpy	Degree=Pos|Variant=Short	12	advmod	_	_
14	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp:pmod	color:blue
1	Am	avea	AUX	Va--1	Person=1	3	aux	_	_
2	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	3	cop	_	_
3	aprope	aprope	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	6	mark	_	_
5	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	6	expl:pv	_	_
6	pun	pune	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp:pmod	_	_
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	trăsură	trăsură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nmod	_	_
9	și	și	CONJ	Crssp	Negative=Pos	6	cc	_	_
10	să	să	PART	Qs	Mood=Sub	12	mark	_	_
11	mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	12	expl:pv	_	_
12	întorc	întoarce	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	_
13	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	București	București	PROPN	Np	_	12	nmod	_	_
15	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp:pmod	color:blue
1	i-	el	PRON	Pp3-sd--y-----w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	3	iobj	_	_
2	am	avea	AUX	Va--1	Person=1	3	aux	_	_
3	răspuns	răspunde	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	eu	eu	PRON	Pp1-sn--------s	Case=Nom|Number=Sing|Person=1|PronType=Prs|Strength=Strong	3	nsubj	_	_
5	,	,	PUNCT	COMMA	_	3	punct	_	_
6	curios	curios	ADV	Rgp	Degree=Pos	3	xcomp	_	_
7	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	6	advmod	_	_
8	culme	culme	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	mwe	_	_
9	să	să	PART	Qs	Mood=Sub	10	mark	_	_
10	aud	auzi	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	ccomp:pmod	_	_
11	ce-	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	13	nsubj	_	_
12	o	vrea	AUX	Va--3s	Number=Sing|Person=3	14	aux	_	_
13	să	să	PART	Qf	Tense=Fut	14	mark	_	_
14	urmeze	urma	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	10	ccomp	_	_
15	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


