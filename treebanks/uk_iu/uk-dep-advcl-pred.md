---
layout: base
title:  'Statistics of advcl:pred in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="uk-dep-advcl.html">advcl</a></tt>.
There are also 1 other language-specific subtypes of `advcl`: <tt><a href="uk-dep-advcl-svc.html">advcl:svc</a></tt>.

66 nodes (0%) are attached to their parents as `advcl:pred`.

33 instances of `advcl:pred` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 7 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-DET.html">DET</a></tt> (34; 52% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-ADJ.html">ADJ</a></tt> (25; 38% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-DET.html">DET</a></tt> (2; 3% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="uk-pos-ADV.html">ADV</a></tt>-<tt><a href="uk-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 advcl:pred	color:blue
1	Вияснити	вияснити	VERB	Vmen	Aspect=Perf|VerbForm=Inf	0	root	_	Id=18in
2	населенню	населення	NOUN	Ncnsdn	Animacy=Inan|Case=Dat|Gender=Neut|Number=Sing	1	iobj	_	Id=18io
3	усе	усе	PRON	Pg--nnsan	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	1	obj	_	Id=18ip
4	так	так	ADV	Pd------r	PronType=Dem	1	advmod	_	Id=18iq|SpaceAfter=No
5	,	,	PUNCT	U	_	10	punct	_	Id=18ir
6	щоб	щоб	SCONJ	Css	_	10	mark	_	Id=18is
7	воно	воно	PRON	Pp-3n-snn	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	Id=18it
8	само	сам	DET	Px--n-sna	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	10	advcl:pred	_	Id=18iu
9	охоче	охоче	ADV	R	_	10	advmod	_	Id=18iv
10	жертувало	жертувати	VERB	Vmpis-sn	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	4	advcl	_	Id=18iw|SpaceAfter=No
11	.	.	PUNCT	U	_	1	punct	_	Id=18ix

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 advcl:pred	color:blue
1	«	«	PUNCT	U	PunctType=Quot	2	punct	_	Id=14bj|SpaceAfter=No
2	Пробудився	пробудитися	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	Id=14bk
3	я	я	PRON	Pp-1-ysnn	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Id=14bl
4	голодний	голодний	ADJ	Afpmsnf	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	advcl:pred	_	Id=14bm|SpaceAfter=No
5	,	,	PUNCT	U	_	8	punct	_	Id=14bn
6	як	як	SCONJ	Css	_	8	mark	_	Id=14bo
7	крадений	крадений	ADJ	Ap-msnf-pp	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	8	amod	_	Id=14bp
8	кінь	кінь	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	advcl	_	Id=14bq|SpaceAfter=No
9	»	»	PUNCT	U	PunctType=Quot	2	punct	_	Id=14br|SpaceAfter=No
10	.	.	PUNCT	U	_	2	punct	_	Id=14bs

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 advcl:pred	color:blue
1	В	в	ADP	Spsg	Case=Gen	2	case	_	Id=1z3d
2	мене	я	PRON	Pp-1-ysgn	Animacy=Anim|Case=Gen|Number=Sing|Person=1|PronType=Prs	3	obl	_	Id=1z3e
3	питання	питання	NOUN	Ncnsnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	0	root	_	Id=1z3f|Promoted=Yes
4	кому	хто	PRON	Pq--mysdn	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|PronType=Int	7	obj	_	Id=1z3g
5	ви	ви	PRON	Pp-2-ypnn	Animacy=Anim|Case=Nom|Number=Plur|Person=2|PronType=Prs	7	nsubj	_	Id=1z3h
6	такі	такий	DET	Pd----pna	Case=Nom|Number=Plur|PronType=Dem	7	advcl:pred	_	Id=1z3i
7	потрібні	потрібний	ADJ	Afp-pns	Case=Nom|Degree=Pos|Number=Plur	3	parataxis	_	Id=1z3j|SpaceAfter=No
8	?	?	PUNCT	U	_	3	punct	_	Id=1z3k

~~~


