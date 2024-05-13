---
layout: base
title:  'Statistics of xcomp in UD_Gothic'
udver: '2'
---

## Treebank Statistics: UD_Gothic: Relations: `xcomp`

This relation is universal.

2340 nodes (4%) are attached to their parents as `xcomp`.

1200 instances of `xcomp` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65128205128205.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="got-pos-VERB.html">VERB</a></tt>-<tt><a href="got-pos-VERB.html">VERB</a></tt> (944; 40% instances), <tt><a href="got-pos-VERB.html">VERB</a></tt>-<tt><a href="got-pos-NOUN.html">NOUN</a></tt> (547; 23% instances), <tt><a href="got-pos-VERB.html">VERB</a></tt>-<tt><a href="got-pos-ADJ.html">ADJ</a></tt> (508; 22% instances), <tt><a href="got-pos-VERB.html">VERB</a></tt>-<tt><a href="got-pos-PRON.html">PRON</a></tt> (136; 6% instances), <tt><a href="got-pos-VERB.html">VERB</a></tt>-<tt><a href="got-pos-ADV.html">ADV</a></tt> (101; 4% instances), <tt><a href="got-pos-VERB.html">VERB</a></tt>-<tt><a href="got-pos-PROPN.html">PROPN</a></tt> (76; 3% instances), <tt><a href="got-pos-VERB.html">VERB</a></tt>-<tt><a href="got-pos-NUM.html">NUM</a></tt> (20; 1% instances), <tt><a href="got-pos-VERB.html">VERB</a></tt>-<tt><a href="got-pos-INTJ.html">INTJ</a></tt> (3; 0% instances), <tt><a href="got-pos-ADV.html">ADV</a></tt>-<tt><a href="got-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="got-pos-ADV.html">ADV</a></tt>-<tt><a href="got-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="got-pos-NOUN.html">NOUN</a></tt>-<tt><a href="got-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="got-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="got-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="got-pos-VERB.html">VERB</a></tt>-<tt><a href="got-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	hausideduþ	hausjan	VERB	V-	Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.21
2	þatei	þatei	SCONJ	G-	_	4	mark	_	ref=MATT_5.21
3	qiþan	qiþan	VERB	V-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	4	xcomp	_	ref=MATT_5.21
4	ist	wisan#1	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	ref=MATT_5.21
5	þaim	sa	DET	Pd	Case=Dat|Gender=Masc|Number=Plur	6	det	_	ref=MATT_5.21
6	airizam	airizans	ADJ	A-	Case=Dat|Degree=Cmp|Gender=Masc|Number=Plur|Strength=Weak	3	iobj	_	ref=MATT_5.21

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	iþ	iþ	CCONJ	C-	_	5	cc	_	ref=MATT_5.21
2	saei	saei	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	3	nsubj	_	ref=MATT_5.21
3	maurþreiþ	maurþrjan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	nsubj	_	ref=MATT_5.21
4	skula	skula	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	xcomp	_	ref=MATT_5.21
5	wairþiþ	wairþan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.21
6	stauai	staua#1	NOUN	Nb	Case=Dat|Gender=Fem|Number=Sing	4	nmod	_	ref=MATT_5.21

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 xcomp	color:blue
1	iþ	iþ	CCONJ	C-	_	8	cc	_	ref=MATT_5.37
2	þata	sa	DET	Pd	Case=Nom|Gender=Neut|Number=Sing	3	det	_	ref=MATT_5.37
3	managizo	manags	ADJ	A-	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing|Strength=Weak	8	nsubj	_	ref=MATT_5.37
4	þaim	sa	ADJ	Pd	Case=Dat|Gender=Masc|Number=Plur	3	iobj	_	ref=MATT_5.37
5	us	us	ADP	R-	_	7	case	_	ref=MATT_5.37
6	þamma	sa	DET	Pd	Case=Dat|Gender=Masc|Number=Sing	7	det	_	ref=MATT_5.37
7	ubilin	ubils	ADJ	A-	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Strength=Weak	8	xcomp	_	ref=MATT_5.37
8	ist	wisan#1	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.37

~~~


