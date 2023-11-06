---
layout: base
title:  'Statistics of obl:arg in UD_Ancient_Greek-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PTNK: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="grc_ptnk-dep-obl.html">obl</a></tt>.

2 nodes (0%) are attached to their parents as `obl:arg`.

1 instances of `obl:arg` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `obl:arg`: <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obl:arg	color:blue
1	ὁ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	nsubj	_	Gloss=the;-oh
2	ἐκχέων	ἐκχέω	VERB	_	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	9	dislocated	_	Gloss=to-gush-out,shed
3	αἷμα	αἷμα	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	obj	_	Gloss=blood
4	ἀνθρώπου	ἄνθρωπος	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	Gloss=man
5	ἀντὶ	ἀντί	ADP	_	_	7	case	_	Gloss=instead-of,against
6	τοῦ	ὁ	DET	_	Case=Gen|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Dem	7	det	_	Gloss=the
7	αἵματος	αἷμα	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	9	obl:arg	_	Gloss=blood
8	αὐτοῦ	αὐτός	PRON	_	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Prs	9	nsubj:pass	_	Gloss=he,she,it,-self,same
9	ἐκχυθήσεται	ἐκχέω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	Gloss=to-gush-out,shed|SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	ὅτι	ὅτι	SCONJ	_	_	15	mark	_	Gloss=because,that-for
12	ἐν	ἐν	ADP	_	_	13	case	_	Gloss=in,on,by,with,to
13	εἰκόνι	εἰκών	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	15	obl	_	Gloss=likeness,image
14	θεοῦ	θεός	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	13	nmod	_	Gloss=god
15	ἐποίησα	ποιέω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl	_	Gloss=to-do,make
16	τὸν	ὁ	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	17	det	_	Gloss=the
17	ἄνθρωπον	ἄνθρωπος	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	15	obj	_	Gloss=man|SpaceAfter=No
18	.	.	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:arg	color:blue
1	ὅτι	ὅτι	SCONJ	_	_	3	mark	_	Gloss=because,that-for
2	ἑπτάκις	ἑπτάκις	ADV	_	_	3	advmod	_	Gloss=seven-times
3	ἐκδεδίκηται	ἐκδικέω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid,Pass	0	root	_	Gloss=to-avenge,punish
4	ἐκ	ἐκ	ADP	_	_	5	case	_	Gloss=out,out-of
5	Κάϊν	Κάϊν	PROPN	_	Gender=Masc|Number=Sing	3	obl:arg	_	Gloss=Cain|SpaceAfter=No
6	·	·	PUNCT	_	_	7	punct	_	_
7	ἐκ	ἐκ	ADP	_	_	9	case	_	Gloss=out,out-of
8	δὲ	δέ	CCONJ	_	_	9	cc	_	Gloss=but,and,however
9	Λάμεχ	Λάμεχ	PROPN	_	Gender=Masc|Number=Sing	3	conj	_	Gloss=Lamech|SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	_
11	ἑβδομηκοντάκις	ἑβδομηκοντάκις	ADV	_	_	9	orphan	_	Gloss=70-times
12	ἑπτά	ἑπτά	NUM	_	_	11	conj	_	Gloss=seven|SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


