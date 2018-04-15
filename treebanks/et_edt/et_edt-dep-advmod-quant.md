---
layout: base
title:  'Statistics of advmod:quant in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `advmod:quant`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-advmod.html">advmod</a></tt>.

63 nodes (0%) are attached to their parents as `advmod:quant`.

63 instances of `advmod:quant` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46031746031746.

The following 4 pairs of parts of speech are connected with `advmod:quant`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (43; 68% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (17; 27% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advmod:quant	color:blue
1	1970ndatel	1970=s	ADJ	N	Case=Ade|Number=Plur|NumType=Ord	2	amod	_	_
2	käis	käima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	enne	enne	ADP	K	AdpType=Prep	5	case	_	_
5	jõule	jõulud	NOUN	S	Case=Par|Number=Plur	2	obl	_	_
6	palju	palju	ADV	D	_	7	advmod:quant	_	_
7	kordi	kord	NOUN	S	Case=Par|Number=Plur	2	obl	_	_
8	Izvestija	Izvestija	PROPN	S	Case=Gen|Number=Sing	9	nmod	_	_
9	turniiridel	turniir	NOUN	S	Case=Ade|Number=Plur	2	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:quant	color:blue
1	Esimene	esimene	ADJ	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Ord	2	nmod	_	_
2	kuu	kuu	NOUN	S	Case=Nom|Number=Sing	3	advmod:quant	_	_
3	aega	aeg	NOUN	S	Case=Par|Number=Sing	9	obl	_	_
4	peaks	pidama	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
5	tomatitele	tomat	NOUN	S	Case=All|Number=Plur	9	obl	_	_
6	umbes	umbes	ADV	D	_	7	advmod	_	_
7	200st	200	NUM	N	Case=Ela|Number=Sing|NumForm=Digit|NumType=Card	8	nummod	_	_
8	vatist	vatt	NOUN	S	Case=Ela|Number=Sing	9	obl	_	_
9	piisama	piisama	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:quant	color:blue
1	Ruum	ruum	NOUN	S	Case=Nom|Number=Sing	4	nsubj:cop	_	_
2	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
3	täis	täis	ADJ	A	Degree=Pos	4	advmod:quant	_	_
4	muusikat	muusika	NOUN	S	Case=Par|Number=Sing	0	root	_	_
5	ja	ja	CCONJ	J	_	6	cc	_	_
6	varjusid	vari	NOUN	S	Case=Par|Number=Plur	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	4	punct	_	_

~~~


