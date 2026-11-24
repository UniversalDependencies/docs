---
layout: base
title:  'Statistics of nmod:poss in UD_Swedish-Modern'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Modern: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sv_modern-dep-nmod.html">nmod</a></tt>.

462 nodes (3%) are attached to their parents as `nmod:poss`.

460 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10606060606061.

The following 12 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-PRON.html">PRON</a></tt> (289; 63% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt> (105; 23% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-PROPN.html">PROPN</a></tt> (50; 11% instances), <tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_modern-pos-PRON.html">PRON</a></tt> (7; 2% instances), <tt><a href="sv_modern-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_modern-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sv_modern-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_modern-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="sv_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sv_modern-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_modern-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_modern-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_modern-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	strax	_	ADV	_	_	2	advmod	_	Ref=MRK_1.18
2	gåffuo	_	VERB	_	_	0	root	_	Ref=MRK_1.18
3	the	_	PRON	_	_	2	nsubj	_	Ref=MRK_1.18
4	theres	_	PRON	_	_	5	nmod:poss	_	Ref=MRK_1.18
5	nät	_	NOUN	_	_	2	obj	_	Ref=MRK_1.18
6	vtöffuer	_	ADP	_	_	2	compound:prt	_	Ref=MRK_1.18
7	/	_	PUNCT	_	_	9	punct	_	Ref=MRK_1.18
8	och	_	CCONJ	_	_	9	cc	_	Ref=MRK_1.18
9	fölgde	_	VERB	_	_	2	conj	_	Ref=MRK_1.18
10	honom	_	PRON	_	Abbr=Yes	9	obj	_	Ref=MRK_1.18|SpaceAfter=No
11	.	_	PUNCT	_	_	2	punct	_	Ref=MRK_1.18

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod:poss	color:blue
1	Och	_	CCONJ	_	_	2	cc	_	NewPar=Yes|Ref=MRK_4.30
2	sagde	_	VERB	_	_	0	root	_	Ref=MRK_4.30
3	han	_	PRON	_	_	2	nsubj	_	Ref=MRK_4.30
4	/	_	PUNCT	_	_	8	punct	_	ModernForm=:|Ref=MRK_4.30
5	hwem	_	PRON	_	_	8	obl	_	Ref=MRK_4.30
6	skola	_	AUX	_	_	8	aux	_	Ref=MRK_4.30
7	wij	_	PRON	_	_	8	nsubj	_	Ref=MRK_4.30
8	likna	_	VERB	_	_	2	ccomp	_	Ref=MRK_4.30
9	gudz	_	NOUN	_	_	10	nmod:poss	_	Ref=MRK_4.30
10	rijke	_	NOUN	_	_	8	obj	_	Ref=MRK_4.30|SpaceAfter=No
11	?	_	PUNCT	_	_	2	punct	_	Ref=MRK_4.30

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:poss	color:blue
1	/	_	PUNCT	_	_	3	punct	_	Ref=MRK_6.24
2	Hon	_	PRON	_	_	3	nsubj	_	Ref=MRK_6.24
3	sadhe	_	VERB	_	_	0	root	_	Ref=MRK_6.24
4	/	_	PUNCT	_	_	7	punct	_	ModernForm=:|Ref=MRK_6.24
5	Joannis	_	PROPN	_	_	7	nmod:poss	_	Ref=MRK_6.24
6	Baptiste	_	PROPN	_	_	5	flat:name	_	Ref=MRK_6.24
7	huffwudh	_	NOUN	_	_	3	ccomp	_	Ref=MRK_6.24
8	/	_	PUNCT	_	_	3	punct	_	ModernForm=.|Ref=MRK_6.24

~~~


