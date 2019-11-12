---
layout: base
title:  'Statistics of acl in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `acl`

This relation is universal.
There are 2 language-specific subtypes of `acl`: <tt><a href="sv_lines-dep-acl-cleft.html">acl:cleft</a></tt>, <tt><a href="sv_lines-dep-acl-relcl.html">acl:relcl</a></tt>.

499 nodes (1%) are attached to their parents as `acl`.

499 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.38476953907816.

The following 19 pairs of parts of speech are connected with `acl`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (282; 57% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (100; 20% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (39; 8% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (32; 6% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-SYM.html">SYM</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Konsekvenser	konsekvens	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	_	_
2	av	av	ADP	_	_	4	mark	_	_
3	att	att	PART	_	_	4	mark	_	_
4	filtrera	filtrera	VERB	INF-ACT	VerbForm=Inf|Voice=Act	1	acl	_	_
5	beräkningar	beräkning	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	4	obj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	De	de	PRON	PERS-P3PL-NOM	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	2	nsubj	_	_
2	hade	ha	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	egentligen	egentligen	ADV	_	_	2	advmod	_	_
4	inte	inte	PART	NEG	_	2	advmod	_	_
5	något	någon	DET	SG-IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	6	det	_	_
6	mer	mycken	ADJ	CMP-IND	Case=Nom|Degree=Cmp	2	xcomp	_	_
7	att	att	PART	_	_	8	mark	_	_
8	tala	tala	VERB	INF-ACT	VerbForm=Inf|Voice=Act	6	acl	_	_
9	om	om	ADP	_	_	6	case	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	Quinn	Quinn	PROPN	SG-NOM	Case=Nom	2	nsubj	_	_
2	hade	ha	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	svårt	svår	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	2	xcomp	_	_
4	att	att	PART	_	_	5	mark	_	_
5	hitta	hitta	VERB	INF-ACT	VerbForm=Inf|Voice=Act	3	xcomp	_	_
6	någonstans	någonstans	ADV	_	_	5	obj	_	_
7	att	att	PART	_	_	8	mark	_	_
8	sitta	sitta	VERB	INF-ACT	VerbForm=Inf|Voice=Act	6	acl	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	2	punct	_	_

~~~


