---
layout: base
title:  'Statistics of dep in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `dep`

This relation is universal.

10 nodes (0%) are attached to their parents as `dep`.

5 instances of `dep` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.8.

The following 7 pairs of parts of speech are connected with `dep`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (3; 30% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NUM.html">NUM</a></tt> (1; 10% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-X.html">X</a></tt> (1; 10% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-X.html">X</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dep	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
2	finns	finnas	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	4	det	_	CorrectionLabels=X
4	skydd	skydd	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	_	CorrectionLabels=X
5	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	dep	_	CorrectionLabels=X
6	näre	näre	ADV	_	_	4	advmod	_	CorrectionLabels=X
7	från	från	ADP	_	_	9	case	_	_
8	50	50	NUM	_	Case=Nom|NumType=Card|Typo=Yes	9	nummod	_	CorrectionLabels=O-Comp
9	talet	tal	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|Typo=Yes	2	obl	_	CorrectionLabels=O-Comp:2
10	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	11	nsubj	_	_
11	tror	tro	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	CorrectionLabels=S-FinV
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dep	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	nsubj	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	svårt	svår	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	ibland	ibland	ADV	_	_	3	advmod	_	_
5	men	men	CCONJ	_	_	6	cc	_	_
6	kommer	komma	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
7	inte	inte	PART	_	_	6	advmod	_	Polarity=Neg
8	engång	engång	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	6	dep	_	CorrectionLabels=O-Comp|IntendedDeprel=advmod
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 23 dep	color:blue
1	Nya	ny	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	2	amod	_	_
2	värder$gar	värder$g	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur|Typo=Yes	9	nsubj	_	CorrectionLabels=O
3	som	som	SCONJ	_	_	4	mark	_	_
4	kvi$orätter	kvi$orätt	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur|Typo=Yes	2	appos	_	CorrectionLabels=M-Num;O
5	eller	eller	CCONJ	_	_	7	cc	_	_
6	miljöns	miljö	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	7	nmod:poss	_	_
7	bevaring	bevaring	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	conj	_	CorrectionLabels=L-Der
8	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	komnit	komna	VERB	_	Typo=Yes|VerbForm=Sup|Voice=Act	0	root	_	CorrectionLabels=O
10	,	,	PUNCT	_	_	15	punct	_	_
11	och	och	CCONJ	_	_	15	cc	_	_
12	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	15	nsubj	_	_
13	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	_	_
14	mycket	mycket	ADV	_	Degree=Pos	15	advmod	_	_
15	positiva	positiv	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	9	conj	_	_
16	men	men	CCONJ	_	_	26	cc	_	_
17	andra	annan	PRON	_	Definite=Ind|Number=Plur|PronType=Ind	26	nsubj:pass	_	_
18	som	som	ADP	_	_	20	mark	_	_
19	familjens	familj	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	20	nmod:poss	_	_
20	struktur	struktur	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	17	appos	_	_
21	och	och	CCONJ	_	_	22	cc	_	_
22	förhållande	förhållande	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	20	conj	_	CorrectionLabels=M-Num
23	som	som	PRON	_	PronType=Rel	26	dep	_	CorrectionLabels=S-R|IntendedDeprel=nsubj:pass
24	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	26	aux	_	_
25	blivit	bli	AUX	_	VerbForm=Sup|Voice=Act	26	aux	_	_
26	förstörda	förstörd	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur|Tense=Past|VerbForm=Part	9	conj	_	_
27	helt	helt	ADV	_	Degree=Pos	26	advmod	_	_
28	och	och	CCONJ	_	_	29	cc	_	_
29	hållet	håll	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	27	conj	_	_
30	.	.	PUNCT	_	_	9	punct	_	_

~~~


