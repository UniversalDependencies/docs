---
layout: base
title:  'Statistics of nsubj in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="et_edt-dep-nsubj-cop.html">nsubj:cop</a></tt>.

22113 nodes (6%) are attached to their parents as `nsubj`.

14507 instances of `nsubj` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30059241170352.

The following 23 pairs of parts of speech are connected with `nsubj`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (12691; 57% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (6114; 28% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (2989; 14% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (120; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (103; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (30; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (10; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (9; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (8; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (8; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Mees	mees	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	asuski	asuma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	burgerit	burger	NOUN	S	Case=Par|Number=Sing	2	obj	_	_
4	lähemalt	lähemalt	ADV	D	_	5	advmod	_	_
5	uurimata	uurima	VERB	V	Case=Abe|VerbForm=Sup|Voice=Act	6	advcl	_	_
6	sööma	sööma	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	2	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj	color:blue
1	Mehe	mees	NOUN	S	Case=Gen|Number=Sing	2	nmod	_	_
2	väitel	väide	NOUN	S	Case=Ade|Number=Sing	3	obl	_	_
3	oli	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
5	haiglasse	haigla	NOUN	S	Case=Ill|Number=Sing	6	obl	_	_
6	jõudes	jõudma	VERB	V	VerbForm=Conv	3	advcl	_	_
7	juba	juba	ADV	D	_	3	advmod	_	_
8	suremas	surema	VERB	V	Case=Ine|VerbForm=Sup|Voice=Act	3	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj	color:blue
1	Teises	teine	ADJ	N	Case=Ine|Number=Sing|NumForm=Letter|NumType=Ord	2	amod	_	_
2	sõidus	sõit	NOUN	S	Case=Ine|Number=Sing	3	obl	_	_
3	jäi	jääma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	Kuismanen	Kuismanen	PROPN	S	Case=Nom|Number=Sing	3	nsubj	_	_
5	Behrensile	Behrens	PROPN	S	Case=All|Number=Sing	6	obl	_	_
6	püüdmatuks	püüdmatu	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	3	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	_	_

~~~


