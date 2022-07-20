---
layout: base
title:  'Statistics of xcomp:pred in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="uk-dep-xcomp.html">xcomp</a></tt>.

278 nodes (0%) are attached to their parents as `xcomp:pred`.

237 instances of `xcomp:pred` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.35251798561151.

The following 11 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (145; 52% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-ADJ.html">ADJ</a></tt> (90; 32% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-DET.html">DET</a></tt> (12; 4% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-PROPN.html">PROPN</a></tt> (9; 3% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="uk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="uk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="uk-pos-X.html">X</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp:pred	color:blue
1	Спосіб	спосіб	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Id=0p6v
2	термічного	термічний	ADJ	Ao-nsgf	Case=Gen|Gender=Neut|Number=Sing	3	amod	_	Id=0p6w
3	декорування	декорування	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	Id=0p6x
4	деревини	деревина	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	Id=0p6y
5	називається	називатися	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Id=0p6z
6	піротипією	піротипія	NOUN	Ncfsin	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	5	xcomp:pred	_	Id=0p70|SpaceAfter=No
7	.	.	PUNCT	U	_	5	punct	_	Id=0p71

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp:pred	color:blue
1	Недарма	недарма	ADV	R	_	3	advmod	_	Id=13ud
2	його	воно	PRON	Pp-3n-san	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	obj	_	Id=13ue
3	назвали	назвати	VERB	Vmeis-p	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	Id=13uf
4	срібним	срібний	ADJ	Ao-nsif	Case=Ins|Gender=Neut|Number=Sing	3	xcomp:pred	_	Id=13ug|SpaceAfter=No
5	.	.	PUNCT	U	_	3	punct	_	Id=13uh

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp:pred	color:blue
1	Насправді	насправді	ADV	R	_	4	advmod	_	Id=1pe7
2	саме	саме	PART	Q	_	3	discourse	_	Id=1pe8
3	люди	людина	NOUN	Ncfpny	Animacy=Anim|Case=Nom|Gender=Fem|Number=Plur	4	nsubj	_	Id=1pe9
4	роблять	робити	VERB	Vmpip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Id=1pea
5	компанію	компанія	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	obj	_	Id=1peb
6	Google	Google	X	X	Foreign=Yes	5	flat:title	_	Id=1pec
7	такою	такий	DET	Pd--f-sia	Case=Ins|Gender=Fem|Number=Sing|PronType=Dem	4	xcomp:pred	_	Id=1ped|SpaceAfter=No
8	,	,	PUNCT	U	_	9	punct	_	Id=1pee
9	якою	який	DET	Pr--f-sia	Case=Ins|Gender=Fem|Number=Sing|PronType=Rel	7	acl	_	Id=1pef
10	вона	вона	PRON	Pp-3f-snn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	Id=1peg
11	є	бути	AUX	Vapip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	Id=1peh|SpaceAfter=No
12	.	.	PUNCT	U	_	4	punct	_	Id=1pei

~~~


