---
layout: base
title:  'Statistics of obj in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `obj`

This relation is universal.

501 nodes (6%) are attached to their parents as `obj`.

456 instances of `obj` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01197604790419.

The following 9 pairs of parts of speech are connected with `obj`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (352; 70% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (131; 26% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj	color:blue
1	Vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	2	nsubj	_	_
2	behöver	behöva	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ingen	ingen	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Neg	4	det	_	_
4	bil	bil	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obj	color:blue
1	10	10	NUM	_	Case=Nom|NumType=Card	2	nummod	_	_
2	månader	månad	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obl	_	_
3	däref$nt	däref$nt	ADV	_	Typo=Yes	2	advmod	_	CorrectionLabels=O
4	vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	5	nsubj	_	_
5	bestämde	bestämma	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	CorrectionLabels=S-FinV
6	oss	vi	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	5	obj	_	_
7	för	för	ADP	_	_	9	mark	_	_
8	att	att	PART	_	_	9	mark	_	_
9	sluta	sluta	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	_
10	se	se	VERB	_	VerbForm=Inf|Voice=Act	9	xcomp	_	CorrectionLabels=L-W
11	varandra	varandra	PRON	_	Case=Acc|Definite=Def|Number=Plur|PronType=Rcp	10	obj	_	_
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obj	color:blue
1	Men	men	CCONJ	_	_	3	cc	_	_
2	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	nsubj:pass	_	CorrectionLabels=L-Ref
3	ångras	ångra	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	CorrectionLabels=L-W
4	jätte	jätteofta	ADV	_	Degree=Pos|Typo=Yes	3	advmod	_	CorrectionLabels=O-Comp|Typo=Yes
5	ofta	_	X	_	_	4	goeswith	_	CorrectionLabels=O-Comp:2
6	för	för	ADP	_	_	10	mark	_	_
7	att	att	SCONJ	_	_	10	mark	_	_
8	personer	person	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	10	nsubj	_	CorrectionLabels=L-W
9	vill	vilja	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
10	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	CorrectionLabels=M-Verb
11	mer	mycket	ADJ	_	Degree=Cmp	10	obj	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


