---
layout: base
title:  'Statistics of compound in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="sv_swell-dep-compound-prt.html">compound:prt</a></tt>.

19 nodes (0%) are attached to their parents as `compound`.

19 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (13; 68% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (3; 16% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


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
5	bus	bus	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	6	compound	_	CorrectionLabels=O;O-Comp
6	resa	resa	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	2	nsubj	_	CorrectionLabels=O:2;O-Comp:2
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
1	En	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	4	det	_	_
2	varm	varm	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	4	amod	_	_
3	sommar	sommar	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Typo=Yes	4	compound	_	CorrectionLabels=O-Comp
4	dag	dag	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	5	obl	_	CorrectionLabels=O-Comp:2
5	såg	se	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	5	nsubj	_	_
7	Anders	Anders	PROPN	_	Case=Nom	5	obj	_	_
8	i	i	ADP	_	_	11	case	_	CorrectionLabels=L-W
9	den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	11	det	_	CorrectionLabels=M-Def
10	sista	sista	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	11	amod	_	_
11	gång	gång	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obl	_	CorrectionLabels=M-Def
12	.	.	PUNCT	_	_	5	punct	_	_

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


