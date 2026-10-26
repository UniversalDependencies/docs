---
layout: base
title:  'Statistics of compound:prt in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-compound.html">compound</a></tt>.

98 nodes (1%) are attached to their parents as `compound:prt`.

98 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1530612244898.

The following 4 pairs of parts of speech are connected with `compound:prt`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (51; 52% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (41; 42% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Vakna	vakna	VERB	_	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	upp	upp	ADV	_	_	1	compound:prt	_	_
3	,	,	PUNCT	_	_	1	punct	_	_
4	millenial	millennial	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	1	vocative	_	CorrectionLabels=O|SurfaceLemma=millenial
5	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	Och	och	CCONJ	_	_	3	cc	_	_
2	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
3	håller	hålla	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	med	med	ADP	_	_	3	compound:prt	_	_
5	om	om	ADP	_	_	6	case	_	_
6	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	obl	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
1	Enligt	enligt	ADP	_	_	2	case	_	_
2	mig	jag	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	5	obl	_	_
3	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	expl	_	_
5	viktigt	viktig	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
6	att	att	SCONJ	_	_	8	mark	_	_
7	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	8	nsubj	_	_
8	ta	ta	VERB	_	VerbForm=Inf|Voice=Act	5	csubj	_	CorrectionLabels=M-Verb
9	hand	hand	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	compound:prt	_	_
10	om	om	ADP	_	_	12	case	_	_
11	sin	sig	PRON	_	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	12	nmod:poss	_	CorrectionLabels=M-Gend
12	utseende	utseende	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	8	obl	_	_
13	.	.	PUNCT	_	_	17	punct	_	CorrectionLabels=P-W
14	Eftersom	eftersom	SCONJ	_	_	17	mark	_	CorrectionLabels=C
15	våra	vi	PRON	_	Definite=Def|Number=Plur|Poss=Yes|PronType=Prs	16	nmod:poss	_	CorrectionLabels=M-Num
16	utseende	utseende	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	17	nsubj	_	_
17	ger	ge	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	_
18	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	19	det	_	_
19	uppfattning	uppfattning	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	17	obj	_	_
20	om	om	ADP	_	_	21	case	_	_
21	oss	vi	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	19	nmod	_	_
22	.	.	PUNCT	_	_	5	punct	_	_

~~~


