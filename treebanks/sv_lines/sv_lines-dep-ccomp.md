---
layout: base
title:  'Statistics of ccomp in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `ccomp`

This relation is universal.

1127 nodes (1%) are attached to their parents as `ccomp`.

954 instances of `ccomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.72138420585626.

The following 21 pairs of parts of speech are connected with `ccomp`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (774; 69% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (116; 10% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (99; 9% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (35; 3% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (34; 3% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (16; 1% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-INTJ.html">INTJ</a></tt> (9; 1% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (9; 1% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp	color:blue
1	Men	men	CCONJ	_	_	3	cc	_	_
2	varför	varför	ADV	WH	PronType=Int	3	advmod	_	_
3	fortsätter	fortsätta	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	ni	ni	PRON	PERS-P2PL-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
5	att	att	PART	_	_	6	mark	_	_
6	läsa	läsa	VERB	INF-ACT	VerbForm=Inf|Voice=Act	3	xcomp	_	_
7	om	om	SCONJ	_	_	10	mark	_	_
8	ni	ni	PRON	PERS-P2PL-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	10	nsubj	_	_
9	inte	inte	PART	NEG	Polarity=Neg	10	advmod	_	_
10	tycker	tycka	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
11	om	om	ADP	_	_	10	compound:prt	_	_
12	den	den	PRON	PERS-P3SG	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	10	det	_	SpaceAfter=No
13	?	?	PUNCT	QuestionMark	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	Det	den	PRON	PERS-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	nsubj	_	_
2	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	möjligt	möjlig	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	ccomp	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	5	punct	_	_
5	sa	säga	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	Auster	Auster	PROPN	SG-NOM	Case=Nom	5	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	Period	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	gissade	gissa	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	att	att	SCONJ	_	_	7	mark	_	_
4	hon	hon	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	7	nsubj	_	_
5	var	vara	AUX	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
6	i	i	ADP	_	_	7	case	_	_
7	tjugoårsåldern	20-årsålder	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	2	punct	_	_

~~~


