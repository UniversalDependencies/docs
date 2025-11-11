---
layout: base
title:  'Statistics of csubj in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="sv_swell-dep-csubj-pass.html">csubj:pass</a></tt>.

57 nodes (1%) are attached to their parents as `csubj`.

51 instances of `csubj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.28070175438596.

The following 9 pairs of parts of speech are connected with `csubj`: <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (35; 61% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (9; 16% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (5; 9% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 csubj	color:blue
1	För	för	ADP	_	_	3	case	_	_
2	det	den	DET	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	första	första	ADJ	_	Case=Nom|NumType=Ord	5	obl	_	_
4	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	dyrt	dyr	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
6	att	att	PART	_	_	7	mark	_	_
7	betala	betala	VERB	_	VerbForm=Inf|Voice=Act	5	csubj	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj	color:blue
1	När	när	SCONJ	_	_	3	mark	_	_
2	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	3	nsubj	_	_
3	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	_
4	familje	familje	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	3	obj	_	CorrectionLabels=O
5	oftas	oftas	ADV	_	Typo=Yes	6	advmod	_	CorrectionLabels=O
6	händer	hända	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	6	expl	_	_
8	att	att	SCONJ	_	_	10	mark	_	_
9	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	10	nsubj	_	_
10	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	csubj	_	_
11	stora	stor	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	12	amod	_	_
12	kostnader	kostnad	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	10	obj	_	_
13	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubj	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	bästa	bra	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	4	amod	_	_
4	beslut	beslut	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
5	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	7	nsubj	_	_
6	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	tog	ta	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:cleft	_	CorrectionLabels=M-Verb
8	att	att	PART	_	_	9	mark	_	_
9	flytta	flytta	VERB	_	VerbForm=Inf|Voice=Act	4	csubj	_	_
10	till	till	ADP	_	_	11	case	_	_
11	Sverige	Sverige	PROPN	_	Case=Nom	9	obl	_	_
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


