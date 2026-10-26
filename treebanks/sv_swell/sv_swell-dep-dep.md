---
layout: base
title:  'Statistics of dep in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `dep`

This relation is universal.

12 nodes (0%) are attached to their parents as `dep`.

7 instances of `dep` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (3; 25% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (3; 25% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-X.html">X</a></tt> (1; 8% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-X.html">X</a></tt> (1; 8% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 dep	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
2	finns	finnas	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	4	det	_	CorrectionLabels=X
4	skydd	skydd	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	_	CorrectionLabels=X
5	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	dep	_	CorrectionLabels=L-W
6	näre	nere	ADV	_	_	4	advmod	_	CorrectionLabels=O|SurfaceLemma=näre
7	från	från	ADP	_	_	9	case	_	_
8	50	50	NUM	_	Case=Nom|NumType=Card|Typo=Yes	9	nummod	_	CorrectionLabels=O-Comp
9	talet	tal	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|Typo=Yes	2	obl	_	CorrectionLabels=O-Comp:2
10	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	11	nsubj	_	_
11	tror	tro	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	CorrectionLabels=S-FinV
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 dep	color:blue
1	Fotbollsplanen	fotbollsplan	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nsubj	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	ofta	ofta	ADV	_	Degree=Pos	4	advmod	_	_
4	lika	lik	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos	0	root	_	CorrectionLabels=L-W;S-Type
5	från	från	ADP	_	_	6	case	_	_
6	utsida	utsida	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obl	_	CorrectionLabels=M-Def
7	.	.	PUNCT	_	_	8	punct	_	CorrectionLabels=P-W
8	gammlar	gammal	ADJ	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur|Typo=Yes	4	conj	_	CorrectionLabels=M-Other;O|SurfaceLemma=gammel
9	och	och	CCONJ	_	_	10	cc	_	_
10	Tustar	tyst	ADJ	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur|Typo=Yes	4	conj	_	CorrectionLabels=M-Other;O;O-Cap|SurfaceLemma=tust
11	,	,	PUNCT	_	_	15	punct	_	_
12	men	men	CCONJ	_	_	15	cc	_	_
13	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	15	nsubj	_	_
14	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	cop	_	_
15	annat	annan	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	4	conj	_	_
16	insida	insida	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	15	dep	_	CorrectionLabels=M-Def|IntendedDeprel=advmod
17	.	.	PUNCT	_	_	4	punct	_	_

~~~


