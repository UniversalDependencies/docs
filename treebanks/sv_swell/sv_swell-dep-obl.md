---
layout: base
title:  'Statistics of obl in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="sv_swell-dep-obl-agent.html">obl:agent</a></tt>.

528 nodes (6%) are attached to their parents as `obl`.

433 instances of `obl` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5625.

The following 20 pairs of parts of speech are connected with `obl`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (308; 58% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (56; 11% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (49; 9% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (46; 9% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (21; 4% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (13; 2% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 obl	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl	color:blue
1	kollar	kolla	VERB	_	Mood=Ind|Tense=Pres|Typo=Yes|VerbForm=Fin|Voice=Act	0	root	_	CorrectionLabels=M-Verb;O-Cap
2	på	på	ADP	_	_	3	case	_	_
3	tinder	tinder	PROPN	_	Case=Nom|Typo=Yes	1	obl	_	CorrectionLabels=O-Cap
4	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl	color:blue
1	De	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	7	nsubj	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
3	6	6	NUM	_	Case=Nom|NumType=Card	6	nummod	_	_
4	och	och	CCONJ	_	_	5	cc	_	_
5	4	4	NUM	_	Case=Nom|NumType=Card	3	conj	_	_
6	år	år	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	7	obl	_	_
7	gammla	gammal	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur|Typo=Yes	0	root	_	CorrectionLabels=O
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


