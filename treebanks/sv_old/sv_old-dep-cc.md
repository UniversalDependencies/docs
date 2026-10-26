---
layout: base
title:  'Statistics of cc in UD_Swedish-Old'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Old: Relations: `cc`

This relation is universal.

40 nodes (8%) are attached to their parents as `cc`.

40 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.875.

The following 6 pairs of parts of speech are connected with `cc`: <tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_old-pos-CCONJ.html">CCONJ</a></tt> (15; 38% instances), <tt><a href="sv_old-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_old-pos-CCONJ.html">CCONJ</a></tt> (12; 30% instances), <tt><a href="sv_old-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_old-pos-CCONJ.html">CCONJ</a></tt> (8; 20% instances), <tt><a href="sv_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_old-pos-CCONJ.html">CCONJ</a></tt> (2; 5% instances), <tt><a href="sv_old-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_old-pos-CCONJ.html">CCONJ</a></tt> (2; 5% instances), <tt><a href="sv_old-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_old-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	han	han	PRON	Pp	Case=Nom|PronType=Prs	2	nsubj	_	_
2	haffuer	hava	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	fyræ	fiurir	NUM	Py	Case=Acc|Gender=Masc	4	nummod	_	_
4	scapplara	skaplare	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	_
5	och	ok	CCONJ	C-	_	7	cc	_	_
6	fyra	fiurir	NUM	Py	Case=Acc|Gender=Masc	7	nummod	_	_
7	kuffla	kuvul	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	4	conj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Æn	än	CCONJ	C-	_	4	cc	_	_
2	ther	þär	ADV	Df	_	4	advmod	_	_
3	til	til	ADP	V-	_	4	compound:prt	_	_
4	komber	komma	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	om	um	ADV	Df	ExtPos=ADV	4	advmod	_	_
6	sidher	sidh	ADV	Df	_	5	fixed	_	_
7	at	at	SCONJ	G-	_	9	mark	_	_
8	bordh	borþ	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	9	nsubj:pass	_	_
9	lætz	lata	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	ccomp	_	_
10	fram	fram	ADV	Df	Degree=Pos	9	advmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	Swa	sva	ADV	Df	_	2	advmod	_	_
2	drikker	drikka	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	herra	härra	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	4	nmod	_	_
4	abote	abbote	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
5	siw	siu	NUM	Py	Case=Dat|Gender=Masc,Neut	6	nummod	_	_
6	sinnom	sin	NOUN	Nb	Case=Dat|Gender=Masc|Number=Plur	2	obl	_	_
7	och	ok	CCONJ	C-	_	8	cc	_	_
8	siwtigi	siutighi	NUM	Py	Case=Dat|Gender=Masc,Neut	5	conj	_	_

~~~


