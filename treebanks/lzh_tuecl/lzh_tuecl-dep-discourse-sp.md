---
layout: base
title:  'Statistics of discourse:sp in UD_Classical_Chinese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-TueCL: Relations: `discourse:sp`

This relation is a language-specific subtype of <tt><a href="lzh_tuecl-dep-discourse.html">discourse</a></tt>.

26 nodes (4%) are attached to their parents as `discourse:sp`.

26 instances of `discourse:sp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96153846153846.

The following 4 pairs of parts of speech are connected with `discourse:sp`: <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-PART.html">PART</a></tt> (16; 62% instances), <tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lzh_tuecl-pos-PART.html">PART</a></tt> (7; 27% instances), <tt><a href="lzh_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lzh_tuecl-pos-PART.html">PART</a></tt> (2; 8% instances), <tt><a href="lzh_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_tuecl-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 discourse:sp	color:blue
1	野	野	NOUN	_	Case=Loc	2	nmod	_	Gloss=uncultivated-land|SpaceAfter=No
2	馬	馬	NOUN	_	_	0	root	_	Gloss=horse|SpaceAfter=No
3	也	也	PART	_	_	2	discourse	_	Gloss=that-which|SpaceAfter=No
4	塵	塵	NOUN	_	_	5	nmod	_	SpaceAfter=No
5	埃	埃	NOUN	_	_	2	parataxis	_	SpaceAfter=No
6	也	也	PART	_	_	5	discourse	_	Gloss=that-which|SpaceAfter=No
7	生	生	ADJ	_	_	8	amod	_	Gloss=alive|SpaceAfter=No
8	物	物	NOUN	_	_	11	nsubj	_	Gloss=thing|SpaceAfter=No
9	之	之	SCONJ	_	_	11	mark	_	Gloss='s|SpaceAfter=No
10	以	以	ADV	_	_	11	advmod	_	Gloss=use|SpaceAfter=No
11	息	息	VERB	_	_	13	csubj	_	Gloss=breathe|SpaceAfter=No
12	相	相	ADV	_	_	13	advmod	_	Gloss=each-other|SpaceAfter=No
13	吹	吹	VERB	_	_	2	parataxis	_	SpaceAfter=No
14	也	也	PART	_	_	13	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 discourse:sp	color:blue
1	南	南	ADJ	_	_	2	amod	_	Gloss=north|SpaceAfter=No
2	冥	冥	NOUN	_	Degree=Pos	5	nsubj	_	Gloss=dark|SpaceAfter=No
3	者	者	PART	_	_	2	case	_	Gloss=that-which|SpaceAfter=No
4	天	天	NOUN	_	Case=Loc	5	nmod	_	Gloss=heaven|SpaceAfter=No
5	池	池	NOUN	_	Case=Loc	0	root	_	Gloss=pond|SpaceAfter=No
6	也	也	PART	_	_	5	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 discourse:sp	color:blue
1	水	水	NOUN	_	_	2	nsubj	_	Gloss=water|SpaceAfter=No
2	淺	淺	ADJ	_	_	0	root	_	Gloss=shallow|SpaceAfter=No|Translit=浅
3	而	而	CCONJ	_	_	5	cc	_	Gloss=and|SpaceAfter=No
4	舟	舟	NOUN	_	_	5	nsubj	_	Gloss=boat|SpaceAfter=No
5	大	大	ADJ	_	_	2	conj	_	Gloss=big|SpaceAfter=No
6	也	也	PART	_	_	2	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


