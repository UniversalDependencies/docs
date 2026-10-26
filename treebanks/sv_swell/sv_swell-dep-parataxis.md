---
layout: base
title:  'Statistics of parataxis in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `parataxis`

This relation is universal.

53 nodes (0%) are attached to their parents as `parataxis`.

51 instances of `parataxis` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.0943396226415.

The following 13 pairs of parts of speech are connected with `parataxis`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (28; 53% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (6; 11% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (5; 9% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 2% instances).


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Ibland	ibland	ADV	_	_	2	advmod	_	_
2	träfa	träffa	VERB	_	Typo=Yes|VerbForm=Inf|Voice=Act	0	root	_	CorrectionLabels=M-Verb;O|SurfaceLemma=träfa
3	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
4	barndomsvän	barndomsvän	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
5	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	nsubj	_	_
6	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	jätt	jätterolig	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing|Typo=Yes	2	parataxis	_	CorrectionLabels=O;O-Comp|SurfaceLemma=jättrolig
8	roligt	_	X	_	_	7	goeswith	_	CorrectionLabels=O-Comp:2
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 28 parataxis	color:blue
1	Nu	nu	ADV	_	_	4	advmod	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
4	ensam	ensam	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	_
5	och	och	CCONJ	_	_	8	cc	_	_
6	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	8	nsubj	_	_
7	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	glad	glad	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	4	conj	_	_
9	för	för	ADP	_	_	10	case	_	_
10	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	8	obl	_	_
11	därför	därför	ADV	_	_	13	mark	_	_
12	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	13	nsubj	_	_
13	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	advcl	_	_
14	fred	fred	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	13	obj	_	CorrectionLabels=L-W
15	i	i	ADP	_	_	17	case	_	_
16	mitt	jag	PRON	_	Definite=Def|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	17	nmod:poss	_	_
17	hjärta	hjärta	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	13	obl	_	_
18	och	och	CCONJ	_	_	19	cc	_	_
19	tror	tro	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	13	conj	_	_
20	att	att	SCONJ	_	_	23	mark	_	_
21	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	23	nsubj	_	_
22	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	23	cop	_	_
23	ung	ung	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	19	ccomp	_	_
24	för	för	ADP	_	_	25	case	_	_
25	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	23	obl	_	_
26	,	,	PUNCT	_	_	28	punct	_	_
27	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	28	nsubj	_	_
28	menar	mena	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	23	parataxis	_	_
29	”	”	PUNCT	_	_	30	punct	_	_
30	kärlek	kärlek	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	28	obj	_	_
31	”	”	PUNCT	_	_	30	punct	_	_
32	.	.	PUNCT	_	_	4	punct	_	_

~~~


