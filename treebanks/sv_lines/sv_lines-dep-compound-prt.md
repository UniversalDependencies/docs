---
layout: base
title:  'Statistics of compound:prt in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-compound.html">compound</a></tt>.

975 nodes (1%) are attached to their parents as `compound:prt`.

971 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36205128205128.

The following 11 pairs of parts of speech are connected with `compound:prt`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (758; 78% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (122; 13% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (62; 6% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound:prt	color:blue
1	Ta	ta	VERB	IMP-ACT	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	bort	bort	ADV	_	_	1	compound:prt	_	_
3	och	och	CCONJ	_	_	4	cc	_	_
4	återanvända	återanvända	VERB	INF-ACT	VerbForm=Inf|Voice=Act	1	conj	_	_
5	ett	en	DET	SG-IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	filter	filter	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	obj	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:prt	color:blue
1	Jag	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	undrade	undra	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	bara	bara	ADV	_	_	2	advmod	_	_
4	om	om	SCONJ	_	_	6	mark	_	_
5	ni	ni	PRON	PERS-P2PL-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	6	nsubj	_	_
6	tyckte	tycka	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
7	om	om	ADP	_	_	6	compound:prt	_	_
8	boken	bok	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound:prt	color:blue
1	Ingen	ingen	PRON	NEG-SG	Definite=Ind|Gender=Com|Number=Sing|PronType=Neg	2	nsubj	_	_
2	bryr	bry	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	sig	sig	PRON	RFL-ACC	Case=Acc|Definite=Def|PronType=Prs	2	obj	_	_
4	ett	en	DET	SG-IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
5	förbannat	förbannad	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	6	amod	_	_
6	dugg	dugg	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	obl	_	_
7	om	om	ADP	_	_	10	mark	_	_
8	var	var	ADV	WH	_	10	advmod	_	_
9	han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	10	nsubj	_	_
10	håller	hålla	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	ccomp	_	_
11	hus	hus	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	10	compound:prt	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	2	punct	_	_

~~~


