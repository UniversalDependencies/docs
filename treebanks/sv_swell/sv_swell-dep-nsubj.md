---
layout: base
title:  'Statistics of nsubj in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="sv_swell-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="sv_swell-dep-nsubj-pass.html">nsubj:pass</a></tt>.

1247 nodes (11%) are attached to their parents as `nsubj`.

1074 instances of `nsubj` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83319967923015.

The following 23 pairs of parts of speech are connected with `nsubj`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (754; 60% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (222; 18% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (82; 7% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (64; 5% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (34; 3% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (30; 2% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (22; 2% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (7; 1% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="sv_swell-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Nya	ny	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	2	amod	_	_
2	vanner	van	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur|Typo=Yes	3	nsubj	_	CorrectionLabels=O
3	kommer	komma	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
1	Självklart	självklart	ADV	_	Degree=Pos	0	root	_	_
2	att	att	SCONJ	_	_	5	mark	_	CorrectionLabels=S-Clause
3	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
4	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	CorrectionLabels=S-Clause
5	viktigt	viktig	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	1	csubj	_	_
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


