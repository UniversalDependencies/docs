---
layout: base
title:  'Statistics of appos in UD_Spanish_Sign_Language-LSE'
udver: '2'
---

## Treebank Statistics: UD_Spanish_Sign_Language-LSE: Relations: `appos`

This relation is universal.

78 nodes (6%) are attached to their parents as `appos`.

78 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05128205128205.

The following 5 pairs of parts of speech are connected with `appos`: <tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt> (74; 95% instances), <tt><a href="ssp_lse-pos-ADV.html">ADV</a></tt>-<tt><a href="ssp_lse-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ssp_lse-pos-ADV.html">ADV</a></tt>-<tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ssp_lse-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ssp_lse-pos-PRON.html">PRON</a></tt>-<tt><a href="ssp_lse-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	HERMANO	_	NOUN	N	_	0	root	_	Gloss=BROTHER
2	B:HERMANO	_	NOUN	B	_	1	appos	_	Gloss=B
3	SOPLAR(2M)	_	VERB	V	_	1	parataxis	_	Gloss=BLOW(2H)
4	MIRA-TU	_	X	MD	_	3	discourse	_	Gloss=UH-HUH

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	INDX.LOC	_	ADV	Adv	_	4	advmod	_	Gloss=INDX.LOC
2	cl.d(c):frasco-forma	_	NOUN	N.D	_	3	obl	_	Gloss=cl
3	INDX.LOC:dentro	_	ADV	Adv	_	1	appos	_	Gloss=INDX.LOC
4	HABER	_	VERB	V	_	0	root	_	Gloss=HAVE
5	RANA(M-DE)	_	NOUN	N	_	4	nsubj	_	Gloss=FROG(M-DI)

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	PORQUE	_	SCONJ	Conj	_	4	mark	_	Gloss=BECAUSE
2	RÁPIDO	_	ADV	Adv	_	4	advmod	_	Gloss=FAST
3	INSTANTE	_	NOUN	Adv	_	2	appos	_	Gloss=MOMENT
4	CASA(M-AB)	_	VERB	V	_	0	root	_	Gloss=HOME(M-DW)
5	YA	_	ADV	Adv	_	4	advmod	_	Gloss=ALREADY

~~~


