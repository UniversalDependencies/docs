---
layout: base
title:  'Statistics of parataxis in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `parataxis`

This relation is universal.

41 nodes (0%) are attached to their parents as `parataxis`.

40 instances of `parataxis` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.7073170731707.

The following 12 pairs of parts of speech are connected with `parataxis`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (22; 54% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (4; 10% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (3; 7% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 parataxis	color:blue
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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 19 parataxis	color:blue
1	Men	men	CCONJ	_	_	3	cc	_	_
2	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
3	tror	tro	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	CorrectionLabels=L-W
4	att	att	SCONJ	_	_	7	mark	_	_
5	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	expl	_	_
6	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	bra	bra	ADJ	_	Case=Nom|Degree=Pos	3	ccomp	_	_
8	om	om	SCONJ	_	_	11	mark	_	_
9	vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	11	nsubj	_	_
10	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
11	ta	ta	VERB	_	VerbForm=Inf|Voice=Act	7	advcl	_	_
12	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	14	det	_	_
13	annan	annan	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	14	amod	_	_
14	present	present	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	11	obj	_	_
15	till	till	ADP	_	_	16	case	_	_
16	exampel	exampel	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Typo=Yes	19	obl	_	CorrectionLabels=O
17	vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	19	nsubj	_	_
18	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	19	aux	_	CorrectionLabels=S-Adv
19	köpa	köpa	VERB	_	VerbForm=Inf|Voice=Act	7	parataxis	_	_
20	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	23	det	_	_
21	fin	fin	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	23	amod	_	_
22	guld	guld	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Typo=Yes	23	compound	_	CorrectionLabels=O-Comp
23	ring	ring	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	19	obj	_	CorrectionLabels=O-Comp:2
24	eller	eller	CCONJ	_	_	27	cc	_	_
25	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	27	det	_	_
26	vacker	vacker	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	27	amod	_	_
27	tavla	tavla	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	23	conj	_	_
28	så	så	ADV	_	_	32	mark	_	_
29	att	att	SCONJ	_	_	32	mark	_	_
30	hon	hon	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	32	nsubj	_	_
31	ska	skola	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	32	aux	_	_
32	komma	komma	VERB	_	VerbForm=Inf|Voice=Act	19	advcl	_	_
33	ihåg	ihåg	ADV	_	_	32	compound:prt	_	_
34	oss	vi	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	32	obj	_	_
35	när	när	SCONJ	_	_	37	mark	_	_
36	hon	hon	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	37	nsubj	_	_
37	ser	se	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	32	advcl	_	_
38	vår	vi	PRON	_	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	39	nmod:poss	_	_
39	present	present	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	37	obj	_	_
40	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 14 parataxis	color:blue
1	En	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	2	det	_	_
2	fördelar	fördel	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	_	CorrectionLabels=M-Num
3	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	CorrectionLabels=C
4	att	att	SCONJ	_	_	7	mark	_	CorrectionLabels=S-Clause
5	cycka	cycka	VERB	_	Typo=Yes|VerbForm=Inf|Voice=Act	7	nsubj	_	CorrectionLabels=C;O
6	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	påverka	påverka	VERB	_	VerbForm=Inf|Voice=Act	2	csubj	_	_
8	kropp	kropp	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	obj	_	CorrectionLabels=M-Def
9	som	som	PRON	_	PronType=Rel	10	nsubj	_	_
10	blir	bli	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl:relcl	_	_
11	friskare	frisk	ADJ	_	Case=Nom|Degree=Cmp	10	xcomp	_	_
12	,	,	PUNCT	_	_	14	punct	_	_
13	dessutom	dessutom	ADV	_	_	14	advmod	_	_
14	bli	bli	VERB	_	VerbForm=Inf|Voice=Act	2	parataxis	_	CorrectionLabels=M-Verb
15	liv	liv	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	14	xcomp	_	CorrectionLabels=M-Def
16	längre	lång	ADJ	_	Case=Nom|Degree=Cmp	15	xcomp	_	_
17	.	.	PUNCT	_	_	2	punct	_	_

~~~


