---
layout: base
title:  'Statistics of punct in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `punct`

This relation is universal.

901 nodes (8%) are attached to their parents as `punct`.

705 instances of `punct` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.93895671476138.

The following 11 pairs of parts of speech are connected with `punct`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (583; 65% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (139; 15% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (122; 14% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (21; 2% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (16; 2% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (8; 1% instances), <tt><a href="sv_swell-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (5; 1% instances), <tt><a href="sv_swell-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="sv_swell-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sv_swell-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 punct	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	Ekobrott	ekobrott	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
2	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 punct	color:blue
1	Vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	4	nsubj	_	_
2	var	vara	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
3	inte	inte	PART	_	_	4	advmod	_	Polarity=Neg
4	ensam	ensam	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	CorrectionLabels=M-Num
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


