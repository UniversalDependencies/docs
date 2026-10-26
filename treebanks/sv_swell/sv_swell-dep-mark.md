---
layout: base
title:  'Statistics of mark in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `mark`

This relation is universal.

718 nodes (7%) are attached to their parents as `mark`.

717 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.65877437325905.

The following 19 pairs of parts of speech are connected with `mark`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt> (274; 38% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PART.html">PART</a></tt> (186; 26% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (97; 14% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt> (68; 9% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt> (42; 6% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (20; 3% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (10; 1% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 mark	color:blue
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


