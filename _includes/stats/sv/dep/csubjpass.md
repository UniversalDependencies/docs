

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

34 nodes (0%) are attached to their parents as `csubjpass`.

32 instances of `csubjpass` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.20588235294118.

The following 4 pairs of parts of speech are connected with `csubjpass`: [sv-pos/VERB]()-[sv-pos/VERB]() (24; 71% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (8; 24% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (1; 3% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubjpass	color:blue
1	Därmed	därmed	ADV	AB	_	2	advmod	_	_
2	bestäms	bestämma	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	också	också	ADV	AB	_	2	advmod	_	_
4	vilka	vilken	DET	HD|UTR/NEU|PLU|IND	Definite=Ind|Number=Plur|PronType=Int,Rel	5	det	_	_
5	beteenden	beteende	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	9	dislocated	_	_
6	som	som	PRON	HP|-|-|-	PronType=Int,Rel	9	nsubjpass	_	_
7	kommer	komma	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
8	att	att	PART	IE	_	9	mark	_	_
9	förstärkas	förstärka	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	2	csubjpass	_	_
10	resp	resp	ADV	AB|AN	_	9	cc	_	_
11	försvagas	försvaga	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	9	conj	_	_
12	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubjpass	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	expl	_	_
2	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	sagts	säga	VERB	VB|SUP|SFO	VerbForm=Sup|Voice=Pass	0	root	_	_
4	att	att	SCONJ	SN	_	7	mark	_	_
5	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
6	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
7	lätt	lätt	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	csubjpass	_	_
8	i	i	ADP	PP	_	9	case	_	_
9	vallokalen	vallokal	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nmod	_	_
10	i	i	ADP	PP	_	7	advmod	_	_
11	år	år	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	10	mwe	_	_
12	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubjpass	color:blue
1	Sedan	sedan	SCONJ	SN	_	4	mark	_	_
2	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	4	expl	_	_
3	sålunda	sålunda	ADV	AB	_	4	advmod	_	_
4	fastslagits	fastslå	VERB	VB|SUP|SFO	VerbForm=Sup|Voice=Pass	11	advcl	_	_
5	,	,	PUNCT	MID	_	4	punct	_	_
6	att	att	SCONJ	SN	_	9	mark	_	_
7	stiftelsen	stiftelse	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	9	nsubj	_	_
8	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	Guds	Gud	PROPN	PM|GEN	Case=Gen	4	csubjpass	_	_
10	,	,	PUNCT	MID	_	11	punct	_	_
11	anges	ange	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
12	dess	den	DET	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	13	nmod:poss	_	_
13	syfte	syfte	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	11	nsubjpass	_	_
14	vara	vara	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	16	cop	_	_
15	samhällets	samhälle	NOUN	NN|NEU|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Sing	16	nmod:poss	_	_
16	bestånd	bestånd	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	11	xcomp	_	_
17	.	.	PUNCT	MAD	_	11	punct	_	_

~~~


