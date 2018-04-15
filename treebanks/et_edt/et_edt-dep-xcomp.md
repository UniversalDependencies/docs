---
layout: base
title:  'Statistics of xcomp in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `xcomp`

This relation is universal.

4625 nodes (1%) are attached to their parents as `xcomp`.

3754 instances of `xcomp` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.74118918918919.

The following 23 pairs of parts of speech are connected with `xcomp`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (2971; 64% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (754; 16% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (617; 13% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (111; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (42; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (25; 1% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (22; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (16; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (15; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (12; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp	color:blue
1	Mees	mees	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	asuski	asuma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	burgerit	burger	NOUN	S	Case=Par|Number=Sing	2	obj	_	_
4	lähemalt	lähemalt	ADV	D	_	5	advmod	_	_
5	uurimata	uurima	VERB	V	Case=Abe|VerbForm=Sup|Voice=Act	6	advcl	_	_
6	sööma	sööma	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	2	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Ilma	ilma	ADP	K	AdpType=Prep	3	case	_	_
2	selle	see	DET	P	Case=Gen|Number=Sing|PronType=Dem	3	det	_	_
3	kaitsekihita	kaitse_kiht	NOUN	S	Case=Abe|Number=Sing	7	obl	_	_
4	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
5	puutüved	puu_tüvi	NOUN	S	Case=Nom|Number=Plur	7	nsubj	_	_
6	kivisöeks	kivi_süsi	NOUN	S	Case=Tra|Number=Sing	7	xcomp	_	_
7	muutunud	muutuma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	Teises	teine	ADJ	N	Case=Ine|Number=Sing|NumForm=Letter|NumType=Ord	2	amod	_	_
2	sõidus	sõit	NOUN	S	Case=Ine|Number=Sing	3	obl	_	_
3	jäi	jääma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	Kuismanen	Kuismanen	PROPN	S	Case=Nom|Number=Sing	3	nsubj	_	_
5	Behrensile	Behrens	PROPN	S	Case=All|Number=Sing	6	obl	_	_
6	püüdmatuks	püüdmatu	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	3	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	_	_

~~~


