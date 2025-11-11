---
layout: base
title:  'Statistics of obl:arg in UD_Ancient_Greek-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PTNK: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="grc_ptnk-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="grc_ptnk-dep-obl-tmod.html">obl:tmod</a></tt>.

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
1	ὁ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Gloss=the;-oh|Ref=GEN_9.6
2	ἐκχέων	ἐκχέω	VERB	_	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	9	dislocated	_	Gloss=to-gush-out,shed|Ref=GEN_9.6
3	αἷμα	αἷμα	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	obj	_	Gloss=blood|Ref=GEN_9.6
4	ἀνθρώπου	ἄνθρωπος	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod:poss	_	Gloss=man|Ref=GEN_9.6
5	ἀντὶ	ἀντί	ADP	_	_	7	case	_	Gloss=instead-of,against|Ref=GEN_9.6
6	τοῦ	ὁ	DET	_	Case=Gen|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	7	det	_	Gloss=the|Ref=GEN_9.6
7	αἵματος	αἷμα	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	9	obl:arg	_	Gloss=blood|Ref=GEN_9.6
8	αὐτοῦ	αὐτός	PRON	_	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Prs	9	nsubj:pass	_	Gloss=he,she,it,-self,same|Ref=GEN_9.6
9	ἐκχυθήσεται	ἐκχέω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Pass	0	root	_	Gloss=to-gush-out,shed|Ref=GEN_9.6|SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	Ref=GEN_9.6
11	ὅτι	ὅτι	SCONJ	_	_	15	mark	_	Gloss=because,that-for|Ref=GEN_9.6
12	ἐν	ἐν	ADP	_	_	13	case	_	Gloss=in,on,by,with,to|Ref=GEN_9.6
13	εἰκόνι	εἰκών	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	15	obl	_	Gloss=likeness,image|Ref=GEN_9.6
14	θεοῦ	θεός	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	13	nmod:poss	_	Gloss=god|Ref=GEN_9.6
15	ἐποίησα	ποιέω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	9	advcl	_	Gloss=to-do,make|Ref=GEN_9.6
16	τὸν	ὁ	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	Gloss=the|Ref=GEN_9.6
17	ἄνθρωπον	ἄνθρωπος	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	15	obj	_	Gloss=man|Ref=GEN_9.6|SpaceAfter=No
18	.	.	PUNCT	_	_	17	punct	_	Ref=GEN_9.6

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:arg	color:blue
1	ὅτι	ὅτι	SCONJ	_	_	3	mark	_	Gloss=because,that-for|Ref=GEN_4.24
2	ἑπτάκις	ἑπτάκις	ADV	_	_	3	advmod	_	Gloss=seven-times|Ref=GEN_4.24
3	ἐκδεδίκηται	ἐκδικέω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid,Pass	0	root	_	Gloss=to-avenge,punish|Ref=GEN_4.24
4	ἐκ	ἐκ	ADP	_	_	5	case	_	Gloss=out,out-of|Ref=GEN_4.24
5	Κάϊν	Κάϊν	PROPN	_	Gender=Masc|Number=Sing	3	obl:arg	_	Gloss=Cain|Ref=GEN_4.24|SpaceAfter=No
6	·	·	PUNCT	_	_	7	punct	_	Ref=GEN_4.24
7	ἐκ	ἐκ	ADP	_	_	9	case	_	Gloss=out,out-of|Ref=GEN_4.24
8	δὲ	δέ	CCONJ	_	_	9	cc	_	Gloss=but,and,however|Ref=GEN_4.24
9	Λάμεχ	Λάμεχ	PROPN	_	Gender=Masc|Number=Sing	3	conj	_	Gloss=Lamech|Ref=GEN_4.24|SpaceAfter=No
10	,	,	PUNCT	_	_	11	punct	_	Ref=GEN_4.24
11	ἑβδομηκοντάκις	ἑβδομηκοντάκις	ADV	_	_	9	orphan	_	Gloss=70-times|Ref=GEN_4.24
12	ἑπτά	ἑπτά	NUM	_	NumType=Card	11	conj	_	Gloss=seven|Ref=GEN_4.24|SpaceAfter=No
13	.	.	PUNCT	_	_	12	punct	_	Ref=GEN_4.24

~~~


