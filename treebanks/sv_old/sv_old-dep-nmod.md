---
layout: base
title:  'Statistics of nmod in UD_Swedish-Old'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Old: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="sv_old-dep-nmod-poss.html">nmod:poss</a></tt>.

25 nodes (5%) are attached to their parents as `nmod`.

22 instances of `nmod` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt> (20; 80% instances), <tt><a href="sv_old-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt> (3; 12% instances), <tt><a href="sv_old-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Herra	härra	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	2	nmod	_	_
2	Abote	abbote	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	ær	vara	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	klædder	kläþa	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	wæl	väl	ADV	Df	Degree=Pos	4	advmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod	color:blue
1	Siden	siþan	ADV	Df	_	2	advmod	_	_
2	æter	äta	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	han	han	PRON	Pp	Case=Nom|PronType=Prs	2	nsubj	_	_
4	tio	tio	NUM	Py	Case=Acc|Gender=Masc	5	nummod	_	_
5	fiska	fisker	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	_
6	och	ok	CCONJ	C-	_	11	cc	_	_
7	æn	än	ADV	Df	_	10	advmod	_	_
8	tio	tio	NUM	Py	Case=Dat|Gender=Masc,Neut	9	nummod	_	_
9	sinnum	sin	NOUN	Nb	Case=Dat|Gender=Masc,Neut|Number=Plur	10	nmod	_	_
10	tio	tio	NUM	Py	Case=Acc|Gender=Masc	11	nummod	_	_
11	fiska	fisker	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	5	conj	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nmod	color:blue
1	han	han	PRON	Pp	Case=Nom|PronType=Prs	2	nsubj	_	_
2	haffuer	hava	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	twa	tver	NUM	Py	Case=Acc|Gender=Masc	4	nummod	_	_
4	skinkiortla	skinkiurtil	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	_
5	annan	annar	PRON	Py	Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	4	appos	_	_
6	aff	af	ADP	R-	_	7	case	_	_
7	lambskinnum	lambskin	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	5	nmod	_	_
8	och	ok	CCONJ	C-	_	9	cc	_	_
9	annan	annar	PRON	Py	Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	5	conj	_	_
10	aff	af	ADP	R-	_	11	case	_	_
11	graskinnum	graskin	NOUN	Nb	Case=Dat|Gender=Neut|Number=Sing	9	nmod	_	_

~~~


