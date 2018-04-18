---
layout: base
title:  'Statistics of acl in UD_Gothic'
udver: '2'
---

## Treebank Statistics: UD_Gothic: Relations: `acl`

This relation is universal.

863 nodes (2%) are attached to their parents as `acl`.

776 instances of `acl` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.77983777520278.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="got-pos-NOUN.html">NOUN</a></tt>-<tt><a href="got-pos-VERB.html">VERB</a></tt> (513; 59% instances), <tt><a href="got-pos-ADJ.html">ADJ</a></tt>-<tt><a href="got-pos-VERB.html">VERB</a></tt> (208; 24% instances), <tt><a href="got-pos-PROPN.html">PROPN</a></tt>-<tt><a href="got-pos-VERB.html">VERB</a></tt> (53; 6% instances), <tt><a href="got-pos-PRON.html">PRON</a></tt>-<tt><a href="got-pos-VERB.html">VERB</a></tt> (46; 5% instances), <tt><a href="got-pos-ADV.html">ADV</a></tt>-<tt><a href="got-pos-VERB.html">VERB</a></tt> (16; 2% instances), <tt><a href="got-pos-VERB.html">VERB</a></tt>-<tt><a href="got-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="got-pos-ADJ.html">ADJ</a></tt>-<tt><a href="got-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="got-pos-NUM.html">NUM</a></tt>-<tt><a href="got-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="got-pos-PRON.html">PRON</a></tt>-<tt><a href="got-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="got-pos-ADP.html">ADP</a></tt>-<tt><a href="got-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="got-pos-DET.html">DET</a></tt>-<tt><a href="got-pos-VERB.html">VERB</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 acl	color:blue
1	jah	jah	CCONJ	C-	_	2	cc	_	ref=LUKE_7.11
2	warþ	wairþan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_7.11
3	in	in	ADP	R-	_	5	case	_	ref=LUKE_7.11
4	þamma	sa	DET	Pd	Case=Dat|Gender=Masc|Number=Sing	5	det	_	ref=LUKE_7.11
5	afardaga	afardags	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	6	obl	_	ref=LUKE_7.11
6	iddja	gaggan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	_	ref=LUKE_7.11
7	in	in	ADP	R-	_	8	case	_	ref=LUKE_7.11
8	baurg	baurgs	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	ref=LUKE_7.11
9	namnida	namnjan	VERB	V-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	8	acl	_	ref=LUKE_7.11
10	Naem	Naem	PROPN	Ne	_	9	xcomp	_	ref=LUKE_7.11

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl	color:blue
1	jah	jah	CCONJ	C-	_	6	cc	_	ref=MATT_5.32
2	sa	sa	ADJ	Pd	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	ref=MATT_5.32
3	ize	izei	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	_	ref=MATT_5.32
4	afsatida	af-satjan	VERB	V-	Aspect=Perf|Case=Acc|Gender=Fem|Number=Sing|Strength=Strong|Tense=Past|VerbForm=Part|Voice=Pass	5	obj:dir	_	ref=MATT_5.32
5	liugaiþ	liugan#1	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl	_	ref=MATT_5.32
6	horinoþ	horinon	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.32

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	þanuh	þanuh	ADV	Df	_	2	discourse	_	ref=JOHN_11.16
2	qaþ	qiþan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=JOHN_11.16
3	Þomas	Þomas	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	ref=JOHN_11.16
4	saei	saei	PRON	Pr	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj:pass	_	ref=JOHN_11.16
5	haitada	haitan	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	acl	_	ref=JOHN_11.16
6	Didimus	Didimus	PROPN	Ne	Case=Nom|Gender=Masc|Number=Sing	5	xcomp	_	ref=JOHN_11.16
7	þaim	sa	DET	Pd	Case=Dat|Gender=Masc|Number=Plur	8	det	_	ref=JOHN_11.16
8	gahlaibam	gahlaiba	NOUN	Nb	Case=Dat|Gender=Masc|Number=Plur	2	iobj	_	ref=JOHN_11.16
9	seinaim	*seins	ADJ	Pt	Case=Dat|Gender=Masc|Number=Plur|Person=3|Poss=Yes|Reflex=Yes	8	nmod	_	ref=JOHN_11.16

~~~


