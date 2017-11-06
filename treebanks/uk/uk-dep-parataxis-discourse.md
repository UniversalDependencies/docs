---
layout: base
title:  'Statistics of parataxis:discourse in UD_Ukrainian'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="uk-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="uk-dep-parataxis-newsent.html">parataxis:newsent</a></tt>.

140 nodes (0%) are attached to their parents as `parataxis:discourse`.

127 instances of `parataxis:discourse` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.80714285714286.

The following 16 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (49; 35% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (33; 24% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-ADV.html">ADV</a></tt> (12; 9% instances), <tt><a href="uk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (10; 7% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (7; 5% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (6; 4% instances), <tt><a href="uk-pos-ADV.html">ADV</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="uk-pos-ADV.html">ADV</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="uk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="uk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="uk-pos-ADV.html">ADV</a></tt>-<tt><a href="uk-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="uk-pos-DET.html">DET</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="uk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uk-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="uk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="uk-pos-VERB.html">VERB</a></tt>-<tt><a href="uk-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 parataxis:discourse	color:blue
1	А	а	CCONJ	Ccs	_	9	cc	_	Id=1g5d
2	звідти	звідти	ADV	Pd------r	PronType=Dem	9	advmod	_	Id=1g5e|SpaceAfter=No
3	,	,	PUNCT	U	_	5	punct	_	Id=1g5f
4	як	як	SCONJ	Css	_	5	mark	_	Id=1g5g
5	пише	писати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	parataxis:discourse	_	Id=1g5h
6	батько	батько	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Id=1g5i|SpaceAfter=No
7	,	,	PUNCT	U	_	5	punct	_	Id=1g5j
8	його	він	PRON	Pp-3m-san	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	_	Id=1g5k
9	етапують	етапувати	VERB	Vmpip3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Id=1g5l
10	до	до	ADP	Spsg	Case=Gen	11	case	_	Id=1g5m
11	Бухенвальда	Бухенвальд	PROPN	Npmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	9	obl	_	Id=1g5n|SpaceAfter=No
12	.	.	PUNCT	U	_	9	punct	_	Id=1g5o

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 parataxis:discourse	color:blue
1	За	за	ADP	Spsi	Case=Ins	2	case	_	Id=36fo
2	свідченням	свідчення	NOUN	Ncnsin	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	7	parataxis:discourse	_	Id=36fp
3	очевидців	очевидець	NOUN	Ncmpgy	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	2	nmod	_	Id=36fq|SpaceAfter=No
4	,	,	PUNCT	U	_	2	punct	_	Id=36fr
5	у	у	ADP	Spsg	Case=Gen	6	case	_	Id=36fs
6	Єльцина	Єльцин	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	7	obl	_	Id=36ft
7	почалася	початися	VERB	Vmeis-sf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	Id=36fu
8	страшна	страшний	ADJ	Afpfsns	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	Id=36fv
9	депресія	депресія	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	Id=36fw|SpaceAfter=No
10	.	.	PUNCT	U	_	7	punct	_	Id=36fx

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 parataxis:discourse	color:blue
1	Як	як	SCONJ	Css	_	2	mark	_	Id=2q3o
2	відомо	відомо	ADV	Rp	Degree=Pos	6	parataxis:discourse	_	Id=2q3p|SpaceAfter=No
3	,	,	PUNCT	U	_	2	punct	_	Id=2q3q
4	агенти	агент	NOUN	Ncmpny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	Id=2q3r
5	ФБР	ФБР	PROPN	Y	Abbr=Yes|Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing|Uninflect=Yes	4	nmod	_	Id=2q3s
6	провели	провести	VERB	Vmeis-p	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	Id=2q3t
7	обшук	обшук	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obj	_	Id=2q3u
8	у	у	ADP	Spsl	Case=Loc	9	case	_	Id=2q3v
9	будинку	будинок	NOUN	Ncmsln	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	_	Id=2q3w
10	Пола	Пол	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	9	nmod	_	Id=2q3x
11	Манафорта	Манафорт	PROPN	Npmsgy	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	10	flat:name	_	Id=2q3y|SpaceAfter=No
12	,	,	PUNCT	U	_	13	punct	_	Id=2q3z
13	вилучивши	вилучити	VERB	Vmegs	Aspect=Perf|Tense=Past|VerbForm=Conv	6	advcl	_	Id=2q40
14	документи	документ	NOUN	Ncmpan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	13	obj	_	Id=2q41
15	та	та	CCONJ	Ccs	_	17	cc	_	Id=2q42
16	інші	інший	DET	Pi---npaa	Animacy=Inan|Case=Acc|Number=Plur|PronType=Ind	17	det	_	Id=2q43
17	матеріали	матеріал	NOUN	Ncmpan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	14	conj	_	Id=2q44|SpaceAfter=No
18	.	.	PUNCT	U	_	6	punct	_	Id=2q45

~~~


