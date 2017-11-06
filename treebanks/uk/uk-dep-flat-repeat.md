---
layout: base
title:  'Statistics of flat:repeat in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Relations: `flat:repeat`

This relation is a language-specific subtype of <tt><a href="uk-dep-flat.html">flat</a></tt>.
There are also 3 other language-specific subtypes of `flat`: <tt><a href="uk-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="uk-dep-flat-name.html">flat:name</a></tt>, <tt><a href="uk-dep-flat-title.html">flat:title</a></tt>.

47 nodes (0%) are attached to their parents as `flat:repeat`.

47 instances of `flat:repeat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.51063829787234.

The following 8 pairs of parts of speech are connected with `flat:repeat`: <tt><a href="uk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uk-pos-INTJ.html">INTJ</a></tt> (11; 23% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (11; 23% instances), <tt><a href="uk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (10; 21% instances), <tt><a href="uk-pos-ADV.html">ADV</a></tt>-<tt><a href="uk-pos-ADV.html">ADV</a></tt> (9; 19% instances), <tt><a href="uk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk-pos-PROPN.html">PROPN</a></tt> (3; 6% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="uk-pos-DET.html">DET</a></tt>-<tt><a href="uk-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="uk-pos-PART.html">PART</a></tt>-<tt><a href="uk-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:repeat	color:blue
1	На	на	INTJ	I	_	0	root	_	Id=2wpw|SpaceAfter=No
2	,	,	PUNCT	U	_	3	punct	_	Id=2wpx
3	на	на	INTJ	I	_	1	flat:repeat	_	Id=2wpy|SpaceAfter=No
4	!	!	PUNCT	U	_	1	punct	_	Id=2wpz

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:repeat	color:blue
1	Шуляю	шуляти	VERB	Vmpip1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Id=2wir|SpaceAfter=No
2	,	,	PUNCT	U	_	3	punct	_	Id=2wis
3	шуляю	шуляти	VERB	Vmpip1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	flat:repeat	_	Id=2wit
4	дратвою	дратва	NOUN	Ncfsin	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	1	obl	_	Id=2wiu
5	і	і	CCONJ	Ccs	_	7	cc	_	Id=2wiv
6	не	не	PART	Q	Polarity=Neg	7	advmod	_	Id=2wiw
7	попаду	попасти	VERB	Vmeif1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	1	conj	_	Id=2wix|SpaceAfter=No
8	...	...	PUNCT	U	_	1	punct	_	Id=2wiy

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 flat:repeat	color:blue
1	—	—	PUNCT	U	PunctType=Dash	8	punct	_	Id=0bl7
2	Дівко	дівка	NOUN	Ncfsvy	Animacy=Anim|Case=Voc|Gender=Fem|Number=Sing	8	vocative	_	Id=0bl8|SpaceAfter=No
3	,	,	PUNCT	U	_	4	punct	_	Id=0bl9
4	дівко	дівка	NOUN	Ncfsvy	Animacy=Anim|Case=Voc|Gender=Fem|Number=Sing	2	flat:repeat	_	Id=0bla|SpaceAfter=No
5	,	,	PUNCT	U	_	2	punct	_	Id=0blb
6	через	через	ADP	Spsa	Case=Acc	7	case	_	Id=0blc
7	поріг	поріг	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obl	_	Id=0bld
8	пересади	пересадити	VERB	Vmem-2s	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	Id=0ble|SpaceAfter=No
9	!	!	PUNCT	U	_	8	punct	_	Id=0blf

~~~


