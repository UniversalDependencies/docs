---
layout: base
title:  'Statistics of xcomp in UD_Spanish_Sign_Language-LSE'
udver: '2'
---

## Treebank Statistics: UD_Spanish_Sign_Language-LSE: Relations: `xcomp`

This relation is universal.

23 nodes (2%) are attached to their parents as `xcomp`.

20 instances of `xcomp` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.52173913043478.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="ssp_lse-pos-VERB.html">VERB</a></tt>-<tt><a href="ssp_lse-pos-VERB.html">VERB</a></tt> (13; 57% instances), <tt><a href="ssp_lse-pos-VERB.html">VERB</a></tt>-<tt><a href="ssp_lse-pos-ADJ.html">ADJ</a></tt> (8; 35% instances), <tt><a href="ssp_lse-pos-VERB.html">VERB</a></tt>-<tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ssp_lse-pos-VERB.html">VERB</a></tt>-<tt><a href="ssp_lse-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	INDX:primero	_	PRON	Pro	_	2	nsubj	_	Gloss=INDX:first
2	ENCANTAR	_	VERB	V	_	0	root	_	Gloss=PLEASE
3	JUGAR(CT)	_	VERB	V.P	_	2	xcomp	_	Gloss=PLAY(CT)

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	VER	_	VERB	V	_	0	root	_	Gloss=SEE
2	HERMANO	_	NOUN	N	_	1	vocative	_	Gloss=BROTHER
3	PRIMERO	_	ADJ	Num	_	1	xcomp	_	Gloss=FIRST

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	PADRE^MADRE	_	NOUN	N	_	4	nsubj	_	Gloss=FATHER^MOTHER
2	PENSAR(2Msu)	_	VERB	V	_	4	compound:svc	_	Gloss=THINK(2Hsuc)
3	NOMBRE	_	NOUN	N	_	4	obj	_	Gloss=NOMBRE
4	DAR(2M)	_	VERB	V.Dir	_	0	root	_	Gloss=GIVE(2H)
5	A-N-A	_	NOUN	N	_	4	xcomp	_	Gloss=DT:ANA

~~~


