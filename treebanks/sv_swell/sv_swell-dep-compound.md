---
layout: base
title:  'Statistics of compound in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="sv_swell-dep-compound-prt.html">compound:prt</a></tt>.

18 nodes (0%) are attached to their parents as `compound`.

18 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (15; 83% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
2	finns	finnas	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	CorrectionLabels=L-W
3	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	6	det	_	_
4	lång	lång	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	6	amod	_	_
5	bus	buss	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	6	compound	_	CorrectionLabels=O;O-Comp|SurfaceLemma=bus
6	resa	resa	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	2	nsubj	_	CorrectionLabels=O-Comp:2
7	från	från	ADP	_	_	10	case	_	_
8	eller	eller	CCONJ	_	_	9	cc	_	_
9	till	till	ADP	_	_	7	conj	_	_
10	Caracas	Caracas	PROPN	_	Case=Nom	2	obl	_	_
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Roligt	rolig	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	CorrectionLabels=M-Gend
2	och	och	CCONJ	_	_	4	cc	_	_
3	tänkar	tanke	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur|Typo=Yes	4	compound	_	CorrectionLabels=L-W;O-Comp
4	tagande	tagande	ADJ	_	Case=Nom|Degree=Pos|Tense=Pres|Typo=Yes|VerbForm=Part	1	conj	_	CorrectionLabels=L-W:2;O-Comp:2
5	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Paris	Paris	PROPN	_	Case=Nom	5	nsubj	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	min	jag	PRON	_	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
4	dromm	dröm	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Typo=Yes	5	compound	_	CorrectionLabels=O;O-Comp|SurfaceLemma=dromm
5	plats	plats	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	0	root	_	CorrectionLabels=O-Comp:2
6	och	och	CCONJ	_	_	8	cc	_	_
7	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	8	nsubj	_	_
8	tycker	tycka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
9	om	om	ADP	_	_	8	compound:prt	_	_
10	mycket	mycket	ADV	_	Degree=Pos	8	advmod	_	CorrectionLabels=S-Adv
11	att	att	PART	_	_	12	mark	_	_
12	åka	åka	VERB	_	VerbForm=Inf|Voice=Act	8	xcomp	_	_
13	där	där	ADV	_	_	12	advmod	_	CorrectionLabels=L-Ref
14	med	med	ADP	_	_	16	case	_	_
15	min	jag	PRON	_	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	16	nmod:poss	_	_
16	familj	familj	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	12	obl	_	_
17	.	.	PUNCT	_	_	5	punct	_	_

~~~


