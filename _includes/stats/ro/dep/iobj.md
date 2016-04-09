

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

237 nodes (2%) are attached to their parents as `iobj`.

153 instances of `iobj` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.09282700421941.

The following 16 pairs of parts of speech are connected with `iobj`: [ro-pos/VERB]()-[ro-pos/NOUN]() (129; 54% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (61; 26% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (15; 6% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (8; 3% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (4; 2% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (4; 2% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (3; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (3; 1% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (2; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 iobj	color:blue
1	Contribuie	contribui	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	cât	cât	ADV	Rw	PronType=Int,Rel	3	advmod	_	_
3	poți	putea	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	advcl	_	_
4	la	la	ADP	Sp	AdpType=Prep	5	case	_	_
5	măreția	măreție	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	iobj	_	_
6	omului	om	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
7	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 iobj	color:blue
1	Așa	așa	ADV	Rgp	Degree=Pos	2	advmod	_	_
2	bine	bine	ADV	Rgp	Degree=Pos	11	advmod	_	_
3	ce	ce	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	6	dobj	_	_
4	v	v	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	6	iobj	_	_
5	-am	avea	AUX	Vaip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	tălmăcit	tălmăci	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	advcl	_	_
7	,	,	PUNCT	COMMA	_	2	punct	_	_
8	și	și	ADV	Rgp	Degree=Pos	10	advmod	_	_
9	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	10	det	_	_
10	copil	copil	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	13	nsubj	_	_
11	putea	putea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
12	să	să	PART	Qs	Mood=Sub	13	mark	_	_
13	înțeleagă	înțelege	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	11	csubj	_	_
14	.	.	PUNCT	PERIOD	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 iobj	color:blue
1	Armata	Armata	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	_
2	Românǎ	Românǎ	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	amod	_	_
3	este	este	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	formată	formată	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
6	trei	trei	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	7	nummod	_	_
7	categorii	categorii	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	iobj	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	arme	arme	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	nmod	_	_
10	:	:	PUNCT	COLON	_	4	punct	_	_

~~~


