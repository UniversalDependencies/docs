---
layout: base
title:  'Statistics of xcomp in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `xcomp`

This relation is universal.

173 nodes (2%) are attached to their parents as `xcomp`.

171 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.35260115606936.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (93; 54% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (43; 25% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (20; 12% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (7; 4% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 xcomp	color:blue
1	10	10	NUM	_	Case=Nom|NumType=Card	2	nummod	_	_
2	månader	månad	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obl	_	_
3	däref$nt	därefter	ADV	_	Typo=Yes	2	advmod	_	CorrectionLabels=O|SurfaceLemma=däref$nt
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	nsubj	_	_
2	ska	skola	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	bli	bli	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
4	jättroligt	jätterolig	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing|Typo=Yes	3	xcomp	_	CorrectionLabels=O|SurfaceLemma=jättrolig
5	då	då	ADV	_	_	3	advmod	_	_
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 xcomp	color:blue
1	Mognad	mognad	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	nsubj	_	_
2	som	som	SCONJ	_	_	3	mark	_	_
3	argument	argument	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	xcomp	_	_
4	i	i	ADP	_	_	5	case	_	_
5	sig	sig	PRON	_	Case=Acc|Definite=Def|PronType=Prs	6	obl	_	_
6	håller	hålla	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	därför	därför	ADV	_	_	6	advmod	_	_
8	inte	inte	PART	_	_	6	advmod	_	Polarity=Neg
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


