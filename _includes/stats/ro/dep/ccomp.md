

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: [ccomp:pmod]().

2322 nodes (1%) are attached to their parents as `ccomp`.

2313 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.42118863049096.

The following 20 pairs of parts of speech are connected with `ccomp`: [ro-pos/VERB]()-[ro-pos/VERB]() (2104; 91% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (70; 3% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (57; 2% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (19; 1% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (16; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (11; 0% instances), [ro-pos/INTJ]()-[ro-pos/VERB]() (9; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (9; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (5; 0% instances), [ro-pos/PART]()-[ro-pos/VERB]() (5; 0% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (4; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (3; 0% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/SCONJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	Ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	5	dobj	_	_
2	mai	mai	ADV	Rp	_	3	advmod	_	_
3	vreți	vrea	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	știți	ști	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
6	?	?	PUNCT	QUEST	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	Îl	el	PRON	Pp3msa--------w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	2	iobj	_	_
2	durea	durea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	să	să	PART	Qs	Mood=Sub	4	mark	_	_
4	admită	admite	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	că	că	SCONJ	Csssp	Negative=Pos	10	mark	_	_
6	erau	fi	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
7	ele	el	PRON	Pp3fpr--------s	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Prs|Strength=Strong	10	nsubj	_	_
8	așa	așa	ADV	Rgp	Degree=Pos	10	advmod	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
10	extraordinare	extraordinar	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	4	ccomp	_	_
11	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 ccomp	color:blue
1	n-	nu	PART	Qz-y	Negative=Neg|Variant=Short	3	neg	_	_
2	ai	avea	AUX	Va--2s	Number=Sing|Person=2	3	aux	_	_
3	avea	avea	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
4	baza	bază	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	dobj	_	_
5	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
6	a	a	PART	Qn	PartType=Inf	7	mark	_	_
7	afirma	afirma	VERB	Vmnp	Tense=Pres|VerbForm=Inf	4	acl	_	_
8	că	că	SCONJ	Csssp	Negative=Pos	11	mark	_	_
9	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	11	det	_	_
11	cadavru	cadavru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	7	ccomp	_	_
12	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


