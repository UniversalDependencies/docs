---
layout: base
title:  'Statistics of cc in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `cc`

This relation is universal.

3407 nodes (4%) are attached to their parents as `cc`.

3396 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.36336953331377.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (1799; 53% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (983; 29% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (306; 9% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (123; 4% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (90; 3% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (56; 2% instances), <tt><a href="sv_lines-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (18; 1% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (14; 0% instances), <tt><a href="sv_lines-pos-PART.html">PART</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="sv_lines-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="sv_lines-pos-DET.html">DET</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="sv_lines-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-X.html">X</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	Ta	ta	VERB	IMP-ACT	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	bort	bort	ADV	_	_	1	compound:prt	_	_
3	och	och	CCONJ	_	_	4	cc	_	_
4	återanvända	återanvända	VERB	INF-ACT	VerbForm=Inf|Voice=Act	1	conj	_	_
5	ett	en	DET	SG-IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	filter	filter	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	obj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Färg	färg	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	1	punct	_	_
3	genomskinlighet	genomskinlighet	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	1	conj	_	_
4	och	och	CCONJ	_	_	5	cc	_	_
5	specialeffekter	specialeffekt	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	1	conj	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Hans	han	PRON	P3SG-GEN	Case=Gen|Definite=Def|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	kyrka	kyrka	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	nsubj	_	_
3	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	vördnadsvärd	vördnadsvärd	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Comma	_	4	punct	_	_
6	rik	rik	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	4	conj	_	_
7	och	och	CCONJ	_	_	8	cc	_	_
8	vacker	vacker	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	4	punct	_	_

~~~


