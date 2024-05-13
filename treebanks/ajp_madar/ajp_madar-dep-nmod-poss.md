---
layout: base
title:  'Statistics of nmod:poss in UD_South_Levantine_Arabic-MADAR'
udver: '2'
---

## Treebank Statistics: UD_South_Levantine_Arabic-MADAR: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="ajp_madar-dep-nmod.html">nmod</a></tt>.

16 nodes (2%) are attached to their parents as `nmod:poss`.

16 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="ajp_madar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ajp_madar-pos-PRON.html">PRON</a></tt> (11; 69% instances), <tt><a href="ajp_madar-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ajp_madar-pos-PRON.html">PRON</a></tt> (2; 13% instances), <tt><a href="ajp_madar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ajp_madar-pos-ADP.html">ADP</a></tt> (1; 6% instances), <tt><a href="ajp_madar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ajp_madar-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="ajp_madar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ajp_madar-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	هويت	هوية	NOUN	_	_	0	root	_	SpaceAfter=No
2	ك	هُو	PRON	_	_	1	nmod:poss	_	_
3	الشخصية	شَخصِيّ	ADJ	_	_	1	nmod	_	SpaceAfter=No
4	.	.	PUNCT	_	_	1	punct	_	_
5	اوه	أُوه	INTJ	_	_	1	discourse	_	SpaceAfter=No
6	،	،	PUNCT	_	_	5	punct	_	_
7	صح	صَحّ	INTJ	_	_	1	discourse	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_
9	جواز	جَوَاز	NOUN	_	_	1	parataxis	_	_
10	سفر	سَفَر	NOUN	_	_	9	nmod	_	_
11	صح	صَحّ	INTJ	_	_	9	discourse	_	SpaceAfter=No
12	؟	؟	PUNCT	_	_	1	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nmod:poss	color:blue
1	ممكن	مُمكِن	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	،	،	PUNCT	_	_	1	punct	_	_
3	بس	بَس	CCONJ	_	_	1	cc	_	_
4	لازم	لَازِم	AUX	_	_	5	aux	_	_
5	نوزن	وَزَّن	VERB	_	_	0	root	_	SpaceAfter=No
6	هم	هُوَ	PRON	_	_	5	obj	_	_
7	كل	كُل	DET	_	_	8	det	_	_
8	واحد	وَاحِد	NOUN	_	_	5	obj	_	_
9	ل	لَ	ADP	_	_	10	case	_	SpaceAfter=No
10	حال	حال	ADJ	_	_	5	obl:arg	_	SpaceAfter=No
11	ه	هُوَ	PRON	_	_	10	nmod:poss	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	عيد	عِيد	NOUN	_	_	4	nsubj	_	_
2	ميلاد	ميلاد	NOUN	_	_	1	nmod	_	SpaceAfter=No
3	ك	كَ	ADP	_	_	2	nmod:poss	_	_
4	قرب	قرّب	NOUN	_	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	SpacesAfter=\n\n

~~~


