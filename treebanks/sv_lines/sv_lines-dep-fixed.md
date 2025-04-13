---
layout: base
title:  'Statistics of fixed in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `fixed`

This relation is universal.

173 nodes (0%) are attached to their parents as `fixed`.

173 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.46242774566474.

The following 18 pairs of parts of speech are connected with `fixed`: <tt><a href="sv_lines-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (41; 24% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (33; 19% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (27; 16% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-SCONJ.html">SCONJ</a></tt> (16; 9% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (13; 8% instances), <tt><a href="sv_lines-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (11; 6% instances), <tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (7; 4% instances), <tt><a href="sv_lines-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (6; 3% instances), <tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="sv_lines-pos-PART.html">PART</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sv_lines-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
1	Då	då	ADV	_	_	2	advmod	_	_
2	blev	bli	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
4	med	med	ADP	_	_	2	advmod	_	_
5	ens	ens	ADV	_	_	4	fixed	_	_
6	kylig	kylig	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	2	xcomp	_	_
7	och	och	CCONJ	_	_	8	cc	_	_
8	reserverad	reserverad	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	6	conj	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 fixed	color:blue
1	Den	den	PRON	PERS-P3SG	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	6	nsubj	_	_
2	är	vara	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
3	till	till	ADV	_	_	6	advmod	_	_
4	och	och	CCONJ	_	_	3	fixed	_	_
5	med	med	ADV	_	Case=Nom	3	fixed	_	_
6	utställd	ställa+ut	VERB	AD-SG-IND	Mood=Ind|VerbForm=Inf|Voice=Pass	0	root	_	_
7	på	på	ADP	_	_	8	case	_	_
8	er	ni	PRON	PERS-P2PL-ACC	Case=Gen|Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Den	den	PRON	PERS-P3SG	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	6	nsubj	_	_
2	är	vara	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
3	till	till	ADV	_	_	6	advmod	_	_
4	och	och	CCONJ	_	_	3	fixed	_	_
5	med	med	ADV	_	Case=Nom	3	fixed	_	_
6	utställd	ställa+ut	VERB	AD-SG-IND	Mood=Ind|VerbForm=Inf|Voice=Pass	0	root	_	_
7	på	på	ADP	_	_	8	case	_	_
8	er	ni	PRON	PERS-P2PL-ACC	Case=Gen|Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	6	punct	_	_

~~~


