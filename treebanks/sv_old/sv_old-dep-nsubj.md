---
layout: base
title:  'Statistics of nsubj in UD_Swedish-Old'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Old: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="sv_old-dep-nsubj-pass.html">nsubj:pass</a></tt>.

52 nodes (10%) are attached to their parents as `nsubj`.

32 instances of `nsubj` (62%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.65384615384615.

The following 7 pairs of parts of speech are connected with `nsubj`: <tt><a href="sv_old-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt> (23; 44% instances), <tt><a href="sv_old-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_old-pos-PRON.html">PRON</a></tt> (21; 40% instances), <tt><a href="sv_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_old-pos-PRON.html">PRON</a></tt> (4; 8% instances), <tt><a href="sv_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv_old-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_old-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="sv_old-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_old-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	Herra	härra	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	2	nmod	_	_
2	Abote	abbote	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	ær	vara	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	klædder	kläþa	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	wæl	väl	ADV	Df	Degree=Pos	4	advmod	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	han	han	PRON	Pp	Case=Nom|PronType=Prs	2	nsubj	_	_
2	haffuer	hava	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	fyræ	fiurir	NUM	Py	Case=Acc|Gender=Masc	4	nummod	_	_
4	scapplara	skaplare	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	_
5	och	ok	CCONJ	C-	_	7	cc	_	_
6	fyra	fiurir	NUM	Py	Case=Acc|Gender=Masc	7	nummod	_	_
7	kuffla	kuvul	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	4	conj	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubj	color:blue
1	Æn	än	CCONJ	C-	_	4	cc	_	_
2	herra	härra	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	3	nmod	_	_
3	abote	abbote	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	æter	äta	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	ekke	äkke	ADV	Df	_	4	advmod	_	_
6	thet	þän	PRON	Pd	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs	4	obj	_	_
7	som	sum	PRON	G-	PronType=Rel	8	nsubj	_	_
8	fyreføt	fyrafötter	ADJ	A-	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	6	acl:relcl	_	_
9	ær	vara	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_

~~~


