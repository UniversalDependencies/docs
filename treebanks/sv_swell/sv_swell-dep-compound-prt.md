---
layout: base
title:  'Statistics of compound:prt in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-compound.html">compound</a></tt>.

80 nodes (1%) are attached to their parents as `compound:prt`.

80 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.125.

The following 3 pairs of parts of speech are connected with `compound:prt`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (42; 53% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (34; 43% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (4; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Vakna	vakna	VERB	_	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	upp	upp	ADV	_	_	1	compound:prt	_	_
3	,	,	PUNCT	_	_	1	punct	_	_
4	millenial	millenial	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	1	vocative	_	CorrectionLabels=O
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound:prt	color:blue
1	Han	han	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	lade	lägga	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	inte	inte	PART	_	_	2	advmod	_	Polarity=Neg
4	märke	märke	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	compound:prt	_	_
5	till	till	ADP	_	_	6	case	_	_
6	mig	jag	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	obl	_	_
7	men	men	CCONJ	_	_	9	cc	_	_
8	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	9	nsubj	_	_
9	blev	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
10	inte	inte	PART	_	_	9	advmod	_	Polarity=Neg
11	besviken	besviken	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	9	xcomp	_	_
12	eftersom	eftersom	SCONJ	_	_	14	mark	_	_
13	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	14	nsubj	_	_
14	önskade	önska	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl	_	_
15	att	att	SCONJ	_	_	17	mark	_	_
16	han	han	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	17	nsubj	_	_
17	blev	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	14	ccomp	_	CorrectionLabels=M-Verb
18	kärlek	kärlek	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	17	xcomp	_	CorrectionLabels=L-Der;S-Type
19	mot	mot	ADP	_	_	20	case	_	CorrectionLabels=L-W
20	mig	jag	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	18	obl	_	_
21	.	.	PUNCT	_	_	2	punct	_	_

~~~


