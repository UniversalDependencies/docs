---
layout: base
title:  'Statistics of xcomp in UD_Swedish-Modern'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Modern: Relations: `xcomp`

This relation is universal.

186 nodes (1%) are attached to their parents as `xcomp`.

173 instances of `xcomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01075268817204.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="sv_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_modern-pos-VERB.html">VERB</a></tt> (103; 55% instances), <tt><a href="sv_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt> (52; 28% instances), <tt><a href="sv_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt> (12; 6% instances), <tt><a href="sv_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_modern-pos-PROPN.html">PROPN</a></tt> (5; 3% instances), <tt><a href="sv_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_modern-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="sv_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_modern-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_modern-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_modern-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_modern-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_modern-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_modern-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_modern-pos-DET.html">DET</a></tt>-<tt><a href="sv_modern-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp	color:blue
1	Giffuer	_	VERB	_	_	0	root	_	Ref=MRK_6.37
2	j	_	PRON	_	_	1	nsubj	_	Ref=MRK_6.37
3	them	_	PRON	_	Abbr=Yes	1	iobj	_	Ref=MRK_6.37
4	äta	_	VERB	_	_	1	xcomp	_	Ref=MRK_6.37
5	/	_	PUNCT	_	_	1	punct	_	ModernForm=.|Ref=MRK_6.37

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 xcomp	color:blue
1	Men	_	CCONJ	_	_	3	cc	_	Ref=MRK_7.27
2	Jesus	_	PROPN	_	_	3	nsubj	_	Ref=MRK_7.27
3	sadhe	_	VERB	_	_	0	root	_	Ref=MRK_7.27
4	til	_	ADP	_	_	5	case	_	Ref=MRK_7.27
5	henne	_	PRON	_	_	3	obl	_	Ref=MRK_7.27
6	/	_	PUNCT	_	_	7	punct	_	ModernForm=:|Ref=MRK_7.27
7	Lät	_	VERB	_	_	3	ccomp	_	Ref=MRK_7.27
8	barnen	_	NOUN	_	_	7	obj	_	Ref=MRK_7.27
9	först	_	ADJ	_	_	11	advmod	_	Ref=MRK_7.27
10	mätt	_	ADJ	_	_	11	xcomp	_	Ref=MRK_7.27
11	wardha	_	VERB	_	_	7	xcomp	_	Ref=MRK_7.27
12	/	_	PUNCT	_	_	7	punct	_	ModernForm=.|Ref=MRK_7.27

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 xcomp	color:blue
1	/	_	PUNCT	_	_	5	punct	_	Ref=MRK_11.17
2	men	_	CCONJ	_	_	5	cc	_	Ref=MRK_11.17
3	j	_	PRON	_	_	5	nsubj	_	Ref=MRK_11.17
4	haffuen	_	AUX	_	_	5	aux	_	Ref=MRK_11.17
5	giordt	_	VERB	_	_	0	root	_	Ref=MRK_11.17
6	thet	_	PRON	_	_	5	obj	_	Ref=MRK_11.17
7	till	_	ADP	_	_	9	case	_	Ref=MRK_11.17
8	en	_	DET	_	_	9	det	_	Ref=MRK_11.17
9	röffware	_	NOUN	_	Typo=Yes	5	xcomp	_	Ref=MRK_11.17
10	kulo	_	X	_	_	9	goeswith	_	Ref=MRK_11.17|SpaceAfter=No|SplitWord=Yes
11	.	_	PUNCT	_	_	5	punct	_	Ref=MRK_11.17

~~~


