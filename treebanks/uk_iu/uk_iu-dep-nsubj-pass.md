---
layout: base
title:  'Statistics of nsubj:pass in UD_Ukrainian-IU'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-IU: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="uk_iu-dep-nsubj.html">nsubj</a></tt>.

199 nodes (0%) are attached to their parents as `nsubj:pass`.

163 instances of `nsubj:pass` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5678391959799.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt> (140; 70% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-PRON.html">PRON</a></tt> (24; 12% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (13; 7% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt> (10; 5% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Книжка	книжка	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	nsubj:pass	_	Id=13z9
2	написана	написаний	ADJ	Ap-fsns-ep	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Id=13za|SpaceAfter=No
3	,	,	PUNCT	U	_	6	punct	_	Id=13zb
4	як	як	SCONJ	Css	_	6	mark	_	Id=13zc
5	захопливий	захопливий	ADJ	Afpmsnf	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	Id=13zd
6	роман	роман	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	advcl	_	Id=13ze|SpaceAfter=No
7	.	.	PUNCT	U	_	2	punct	_	Id=13zf

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Він	він	PRON	Pp-3m-snn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj:pass	_	Id=13rh
2	створений	створений	ADJ	Ap-msnf-ep	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Id=13ri
3	не	не	PART	Q	Polarity=Neg	4	advmod	_	Id=13rj
4	уявою	уява	NOUN	Ncfsin	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	2	obl	_	Id=13rk
5	автора	автор	NOUN	Ncmsgy	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	4	nmod	_	Id=13rl|SpaceAfter=No
6	.	.	PUNCT	U	_	2	punct	_	Id=13rm

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 nsubj:pass	color:blue
1	У	у	ADP	Spsl	Case=Loc	3	case	_	Id=25so
2	попередніх	попередній	ADJ	Ao--plf	Case=Loc|Number=Plur	3	amod	_	Id=25sp
3	сезонах	сезон	NOUN	Ncmpln	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	6	obl	_	Id=25sq
4	Гейл	Гейл	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	6	nsubj	_	Id=25sr
5	Ботікер	Ботікер	PROPN	Npmsny	Animacy=Anim|Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	4	flat:name	_	Id=25ss
6	дав	дати	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	Id=25st
7	Волту	Волт	PROPN	Npmsdy	Animacy=Anim|Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	6	iobj	_	Id=25su
8	копію	копія	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	6	obj	_	Id=25sv
9	книги	книга	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	Id=25sw|SpaceAfter=No
10	,	,	PUNCT	U	_	14	punct	_	Id=25sx
11	яка	який	DET	Pr--f-sna	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	14	nsubj:pass	_	Id=25sy
12	неодноразово	неодноразово	ADV	R	_	14	advmod	_	Id=25sz
13	була	бути	AUX	Vapis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	14	cop	_	Id=25t0
14	показана	показаний	ADJ	Ap-fsns-ep	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	8	acl	_	Id=25t1
15	з	з	ADP	Spsg	Case=Gen	17	case	_	Id=25t2
16	того	той	DET	Pd--m-sga	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	17	det	_	Id=25t3
17	часу	час	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	obl	_	Id=25t4|SpaceAfter=No
18	.	.	PUNCT	U	_	6	punct	_	Id=25t5

~~~


