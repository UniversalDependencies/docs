---
layout: base
title:  'Statistics of appos in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `appos`

This relation is universal.

97 nodes (1%) are attached to their parents as `appos`.

97 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.97938144329897.

The following 14 pairs of parts of speech are connected with `appos`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (30; 31% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (29; 30% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (19; 20% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (4; 4% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 appos	color:blue
1	5 000	5 000	NUM	RG|NOM	Case=Nom	2	nummod	_	_
2	dollar	dollar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	_	_
3	per	per	ADP	PP	_	4	case	_	_
4	person	person	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	MID	_	2	punct	_	_
6	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	8	det	_	_
7	högsta	hög	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	8	amod	_	_
8	belopp	belopp	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	appos	_	_
9	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	nsubj:pass	_	_
10	tillåts	tillåta	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	8	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 appos	color:blue
1	”	”	PUNCT	MID	_	3	punct	_	SpaceAfter=No
2	Fullständig	fullständig	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	3	amod	_	_
3	försummelse	försummelse	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
4	av	av	ADP	PP	_	7	case	_	_
5	sin	sin	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	7	nmod:poss	_	_
6	egen	egen	ADJ	JJ|POS|UTR|SIN|IND/DEF|NOM	Case=Nom|Degree=Pos|Gender=Com|Number=Sing	7	amod	_	_
7	hälsa	hälsa	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	nmod	_	SpaceAfter=No
8	”	”	PUNCT	PAD	_	3	punct	_	SpaceAfter=No
9	,	,	PUNCT	MID	_	10	punct	_	_
10	rapporterade	rapportera	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
11	hans	hans	DET	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	12	nmod:poss	_	_
12	fru	fru	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	10	nsubj	_	SpaceAfter=No
13	,	,	PUNCT	MID	_	14	punct	_	_
14	Alice	Alice	PROPN	PM|NOM	Case=Nom	12	appos	_	SpaceAfter=No
15	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 appos	color:blue
1	Hennes	hennes	DET	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	3	nmod:poss	_	_
2	senaste	sen	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	3	amod	_	_
3	icke-skönlitterära	icke-skönlitterär	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	6	nsubj	_	_
4	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	om	om	ADP	PP	_	6	case	_	_
6	Margaret	Margaret	PROPN	PM|NOM	Case=Nom	0	root	_	_
7	Douglas	Douglas	PROPN	PM|NOM	Case=Nom	6	flat:name	_	SpaceAfter=No
8	,	,	PUNCT	MID	_	9	punct	_	_
9	grevinna	grevinna	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	appos	_	_
10	av	av	ADP	PP	_	11	case	_	_
11	Lennox	Lennox	PROPN	PM|NOM	Case=Nom	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	MAD	_	6	punct	_	_

~~~


