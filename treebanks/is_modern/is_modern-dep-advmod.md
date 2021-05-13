---
layout: base
title:  'Statistics of advmod in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `advmod`

This relation is universal.

12130 nodes (8%) are attached to their parents as `advmod`.

6460 instances of `advmod` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.43643858202803.

The following 15 pairs of parts of speech are connected with `advmod`: <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (7344; 61% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (1756; 14% instances), <tt><a href="is_modern-pos-ADV.html">ADV</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (872; 7% instances), <tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (724; 6% instances), <tt><a href="is_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (658; 5% instances), <tt><a href="is_modern-pos-AUX.html">AUX</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (272; 2% instances), <tt><a href="is_modern-pos-DET.html">DET</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (222; 2% instances), <tt><a href="is_modern-pos-PART.html">PART</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (88; 1% instances), <tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (86; 1% instances), <tt><a href="is_modern-pos-NUM.html">NUM</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (40; 0% instances), <tt><a href="is_modern-pos-ADP.html">ADP</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (38; 0% instances), <tt><a href="is_modern-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (14; 0% instances), <tt><a href="is_modern-pos-X.html">X</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (10; 0% instances), <tt><a href="is_modern-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="is_modern-pos-INTJ.html">INTJ</a></tt>-<tt><a href="is_modern-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	Væntanlega	væntanlega	ADV	ADV	Degree=Pos	2	advmod	_	_
2	skortir	skorta	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
3	á	á	ADP	P	_	8	case	_	_
4	að	að	SCONJ	C	_	8	mark	_	_
5	þau	sá	DET	D-N	Case=Nom	6	det	_	_
6	lagaákvæði	lagaákvæði	NOUN	NS-N	Case=Nom|Definite=Ind|Number=Plur	8	nsubj	_	_
7	séu	vera	AUX	BEPS	Mood=Sub|Tense=Pres	8	cop	_	_
8	skýr	skýr	ADJ	ADJ-N	Case=Nom|Degree=Pos	2	obl	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	Álit	álit	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
2	en	en	CCONJ	CONJ	_	4	cc	_	_
3	ekki	ekki	ADV	NEG	_	4	advmod	_	_
4	úrskurðir	úrskurður	NOUN	NS-N	Case=Nom|Definite=Ind|Number=Plur	1	conj	_	_
5	Forseti	forseti	PROPN	NPR-N	_	6	nsubj	_	_
6	hringir	hringja	VERB	VBPI	Mood=Ind|Tense=Pres	1	conj	_	OriginalHead=0|SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advmod	color:blue
1	Þá	þá	ADV	ADV	Degree=Pos	3	advmod	_	_
2	erum	vera	AUX	BEPI	Mood=Ind|Tense=Pres	3	cop	_	_
3	við	ég	PRON	PRO-N	Case=Nom	0	root	_	_
4	heldur	gjarna	ADV	ADVR	Degree=Cmp	6	advmod	_	_
5	illa	illa	ADV	ADV	Degree=Pos	4	advmod	_	_
6	sett	setja	VERB	VAN	Tense=Past|VerbForm=Part	3	acl	_	SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	_
8	held	halda	VERB	VBPI	Mood=Ind|Tense=Pres	3	parataxis	_	_
9	ég	ég	PRON	PRO-N	Case=Nom	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


