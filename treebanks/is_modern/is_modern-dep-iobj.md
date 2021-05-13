---
layout: base
title:  'Statistics of iobj in UD_Icelandic-Modern'
udver: '2'
---

## Treebank Statistics: UD_Icelandic-Modern: Relations: `iobj`

This relation is universal.

490 nodes (0%) are attached to their parents as `iobj`.

478 instances of `iobj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.48571428571429.

The following 8 pairs of parts of speech are connected with `iobj`: <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (224; 46% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt> (198; 40% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt> (52; 11% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="is_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="is_modern-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="is_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="is_modern-pos-NUM.html">NUM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Maður	maður	PRON	MAN-N	_	2	nsubj	_	_
2	spyr	spyrja	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
3	sig	sig	PRON	PRO-A	Case=Acc	2	iobj	_	_
4	hvað	hver	PRON	WPRO-A	Case=Acc	5	obj	_	_
5	liggi	liggja	VERB	VBPS	Mood=Sub|Tense=Pres	2	ccomp	_	_
6	á	á	ADP	RP	_	5	compound:prt	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	Virðulegi	virðulegur	ADJ	ADJ-N	Case=Nom|Degree=Pos	2	amod	_	_
2	forseti	forseti	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	5	vocative	_	SpaceAfter=No
3	.	.	PUNCT	.	_	2	punct	_	_
4	Ég	ég	PRON	PRO-N	Case=Nom	5	nsubj	_	_
5	þakka	þakka	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
6	hæstv.	hæstvirtur	ADJ	ADJ-D	Case=Dat|Degree=Pos	7	amod	_	_
7	ráðherra	ráðherra	NOUN	N-D	Case=Dat|Definite=Ind|Number=Sing	5	iobj	_	_
8	fyrir	fyrir	ADP	P	_	9	case	_	_
9	ræðuna	ræða	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 iobj	color:blue
1	Virðulegi	virðulegur	ADJ	ADJ-N	Case=Nom|Degree=Pos	2	amod	_	_
2	forseti	forseti	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	5	vocative	_	SpaceAfter=No
3	.	.	PUNCT	.	_	2	punct	_	_
4	Ég	ég	PRON	PRO-N	Case=Nom	5	nsubj	_	_
5	þakka	þakka	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
6	hv.	háttvirtur	ADJ	ADJ-D	Case=Dat|Degree=Pos	7	amod	_	_
7	þm.	þingmaður	PROPN	NPR-D	_	5	iobj	_	_
8	Brynjari	brynjar	PROPN	NPR-D	_	7	flat:name	_	_
9	Níelssyni	níelsson	PROPN	NPR-D	_	7	dep	_	_
10	svarið	svar	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	5	obj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


