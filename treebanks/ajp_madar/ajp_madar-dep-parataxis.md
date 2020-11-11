---
layout: base
title:  'Statistics of parataxis in UD_South_Levantine_Arabic-MADAR'
udver: '2'
---

## Treebank Statistics: UD_South_Levantine_Arabic-MADAR: Relations: `parataxis`

This relation is universal.

5 nodes (1%) are attached to their parents as `parataxis`.

4 instances of `parataxis` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="ajp_madar-pos-ADV.html">ADV</a></tt>-<tt><a href="ajp_madar-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="ajp_madar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ajp_madar-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="ajp_madar-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ajp_madar-pos-VERB.html">VERB</a></tt> (1; 20% instances), <tt><a href="ajp_madar-pos-PRON.html">PRON</a></tt>-<tt><a href="ajp_madar-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="ajp_madar-pos-VERB.html">VERB</a></tt>-<tt><a href="ajp_madar-pos-ADJ.html">ADJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 parataxis	color:blue
1	ل	لِ	ADV	_	_	2	case	_	SpaceAfter=No
2	فندق	فندق	ADJ	_	_	11	parataxis	_	SpaceAfter=No
3	ي	هُوَ	PRON	_	_	2	nmod:poss	_	SpaceAfter=No
4	،	،	PUNCT	_	_	2	punct	_	_
5	لو	لَو	ADP	_	_	6	case	_	_
6	سمحت	سَمَح	VERB	_	_	2	advcl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_
8	عنوان	عُنوَان	NOUN	_	_	11	nsubj	_	_
9	فندق	فندق	NOUN	_	_	8	nmod	_	SpaceAfter=No
10	ي	هُوَ	PRON	_	_	9	nmod:poss	_	_
11	هون	هون	ADV	_	_	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 parataxis	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis	color:blue
1	هاي	هاي	DET	_	_	2	det	_	_
2	الغرفة	غُرفَة	NOUN	_	_	0	root	_	_
3	رقم	رَقم	NOUN	_	_	2	nmod	_	_
4	اتنين	اِتنَان	NUM	_	_	3	nummod	_	_
5	صفر	صِفر	NUM	_	_	4	nummod	_	_
6	واحد	وَاحِد	NUM	_	_	5	nummod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_
8	بدي	بدّ	VERB	_	_	2	parataxis	_	_
9	أطلب	طَلَب	VERB	_	_	8	ccomp	_	_
10	فطور	فطور	NOUN	_	_	9	obj	_	_
11	بكرا	بٌكرا	NOUN	_	_	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	SpacesAfter=\n\n

~~~


