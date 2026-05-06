---
layout: base
title:  'Statistics of advcl in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `advcl`

This relation is universal.
There are 1 language-specific subtypes of `advcl`: <tt><a href="sv_swell-dep-advcl-relcl.html">advcl:relcl</a></tt>.

278 nodes (3%) are attached to their parents as `advcl`.

223 instances of `advcl` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.49280575539568.

The following 12 pairs of parts of speech are connected with `advcl`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (173; 62% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (46; 17% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (21; 8% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (12; 4% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (8; 3% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advcl	color:blue
1	När	när	SCONJ	_	_	3	mark	_	_
2	dem	de	PRON	_	Case=Acc|Definite=Def|Number=Plur|PronType=Prs	3	nsubj	_	CorrectionLabels=M-Case
3	se	se	VERB	_	VerbForm=Inf|Voice=Act	6	advcl	_	CorrectionLabels=M-Verb
4	våran	vi	PRON	_	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	presenten	present	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	obj	_	CorrectionLabels=M-Def
6	kom	komma	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	CorrectionLabels=M-Verb
7	ihåg	ihåg	ADP	_	_	6	compound:prt	_	_
8	oss	vi	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	6	obj	_	_
9	!	!	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advcl	color:blue
1	men	men	CCONJ	_	Typo=Yes	6	cc	_	CorrectionLabels=O-Cap
2	utom	utom	ADP	_	_	3	case	_	CorrectionLabels=L-Der
3	detta	denna	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	6	obl	_	_
4	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	6	nsubj	_	_
5	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	CorrectionLabels=S-FinV
6	fri	fri	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	_
7	eftersom	eftersom	SCONJ	_	_	10	mark	_	_
8	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	10	nsubj	_	_
9	inte	inte	PART	_	Polarity=Neg	10	advmod	_	_
10	stör	störa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	_
11	någon	någon	PRON	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	10	obj	_	_
12	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
1	Lycka	lycka	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	_	_
2	beror	bero	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	i	i	ADP	_	_	4	case	_	_
4	stort	stor	ADJ	_	Case=Nom|Degree=Pos	5	obl	_	_
5	sett	sedd	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	2	advcl	_	_
6	av	av	ADP	_	_	8	case	_	CorrectionLabels=L-W
7	många	många	ADJ	_	Case=Nom|Degree=Pos	8	amod	_	_
8	faktorer	faktor	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	2	obl	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


